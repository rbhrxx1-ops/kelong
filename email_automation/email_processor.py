#!/usr/bin/env python3
# ============================================================
# 机场出租车公司 - 邮件自动处理系统核心程序
# Airport Taxi Email Automation System - Core Processor
# ============================================================

import imaplib
import smtplib
import email
import json
import os
import time
import logging
import re
from datetime import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import decode_header
from openai import OpenAI

from config import (
    EMAIL_ACCOUNTS, POLL_INTERVAL, LOG_FILE, DB_FILE,
    OPENAI_API_KEY, AI_MODEL, CATEGORY_KEYWORDS, AUTO_REPLY_TEMPLATES
)

# ── 初始化目录和日志 ──────────────────────────────────────────
os.makedirs(os.path.dirname(LOG_FILE), exist_ok=True)
os.makedirs(os.path.dirname(DB_FILE), exist_ok=True)

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(LOG_FILE, encoding="utf-8"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# ── OpenAI 客户端 ─────────────────────────────────────────────
ai_client = OpenAI()


# ── 工具函数 ──────────────────────────────────────────────────

def decode_str(s):
    """解码邮件头部字符串"""
    if s is None:
        return ""
    parts = decode_header(s)
    result = []
    for part, charset in parts:
        if isinstance(part, bytes):
            try:
                result.append(part.decode(charset or "utf-8", errors="replace"))
            except Exception:
                result.append(part.decode("utf-8", errors="replace"))
        else:
            result.append(str(part))
    return "".join(result)


def get_email_body(msg):
    """提取邮件正文（优先HTML，降级纯文本）"""
    body = ""
    if msg.is_multipart():
        for part in msg.walk():
            content_type = part.get_content_type()
            content_disposition = str(part.get("Content-Disposition", ""))
            if "attachment" in content_disposition:
                continue
            if content_type == "text/plain":
                try:
                    charset = part.get_content_charset() or "utf-8"
                    body = part.get_payload(decode=True).decode(charset, errors="replace")
                    break
                except Exception:
                    pass
            elif content_type == "text/html" and not body:
                try:
                    charset = part.get_content_charset() or "utf-8"
                    html = part.get_payload(decode=True).decode(charset, errors="replace")
                    # 简单去除HTML标签
                    body = re.sub(r"<[^>]+>", " ", html)
                    body = re.sub(r"\s+", " ", body).strip()
                except Exception:
                    pass
    else:
        try:
            charset = msg.get_content_charset() or "utf-8"
            body = msg.get_payload(decode=True).decode(charset, errors="replace")
        except Exception:
            body = str(msg.get_payload())
    return body[:3000]  # 限制长度


def load_processed_ids():
    """加载已处理邮件ID"""
    if os.path.exists(DB_FILE):
        with open(DB_FILE, "r", encoding="utf-8") as f:
            return json.load(f)
    return {}


def save_processed_ids(data):
    """保存已处理邮件ID"""
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# ── 邮件分类 ──────────────────────────────────────────────────

def classify_email_by_keywords(subject, body, sender):
    """基于关键词分类邮件"""
    text = (subject + " " + body + " " + sender).lower()
    scores = {cat: 0 for cat in CATEGORY_KEYWORDS}
    for cat, keywords in CATEGORY_KEYWORDS.items():
        for kw in keywords:
            if kw.lower() in text:
                scores[cat] += 1
    best = max(scores, key=scores.get)
    return best if scores[best] > 0 else "general"


def classify_email_with_ai(subject, body, sender):
    """使用AI智能分类邮件并提取关键信息"""
    try:
        prompt = f"""You are an email classifier for an airport taxi company.
Analyze the following email and return a JSON response with:
1. "category": one of ["booking", "complaint", "finance", "partner", "review", "general"]
2. "priority": one of ["high", "medium", "low"]
3. "language": detected language ("en", "zh", "ja", or other)
4. "summary": brief summary in Chinese (max 50 chars)
5. "extracted_info": dict with relevant fields like passenger_name, flight_number, pickup_date, pickup_time, pickup_location, destination, passenger_count (extract only if present)
6. "needs_reply": true/false - whether this email needs an auto-reply
7. "reply_language": "en" or "zh" based on sender's language

Email:
From: {sender}
Subject: {subject}
Body: {body[:1500]}

Return ONLY valid JSON, no explanation."""

        response = ai_client.chat.completions.create(
            model=AI_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
            max_tokens=500,
        )
        result_text = response.choices[0].message.content.strip()
        # 清理可能的markdown代码块
        result_text = re.sub(r"```json\s*|\s*```", "", result_text).strip()
        return json.loads(result_text)
    except Exception as e:
        logger.warning(f"AI分类失败，使用关键词分类: {e}")
        cat = classify_email_by_keywords(subject, body, sender)
        return {
            "category": cat,
            "priority": "medium",
            "language": "en",
            "summary": subject[:50],
            "extracted_info": {},
            "needs_reply": cat in ["booking", "complaint", "general"],
            "reply_language": "en",
        }


# ── 自动回复 ──────────────────────────────────────────────────

def generate_auto_reply(analysis, subject, sender_name, account_email):
    """生成自动回复内容"""
    category = analysis.get("category", "general")
    reply_lang = analysis.get("reply_language", "en")
    extracted = analysis.get("extracted_info", {})

    template = AUTO_REPLY_TEMPLATES.get(category, AUTO_REPLY_TEMPLATES["general"])

    # 尝试用AI生成更个性化的回复
    try:
        context = ""
        if extracted:
            context = f"\nExtracted booking info: {json.dumps(extracted, ensure_ascii=False)}"

        prompt = f"""Generate a professional auto-reply email for an airport taxi company.
Category: {category}
Reply language: {reply_lang}
Sender name: {sender_name}
Original subject: {subject}{context}

Requirements:
- Be professional and friendly
- If booking category: acknowledge the request and ask for missing info if needed
- If complaint: apologize sincerely and promise follow-up
- Keep it concise (max 150 words)
- Sign off as "Airport Taxi Team" with email {account_email}
- Return ONLY the email body text, no subject line"""

        response = ai_client.chat.completions.create(
            model=AI_MODEL,
            messages=[{"role": "user", "content": prompt}],
            temperature=0.3,
            max_tokens=300,
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        logger.warning(f"AI回复生成失败，使用模板: {e}")
        body_key = f"body_{reply_lang}" if f"body_{reply_lang}" in template else "body_en"
        body = template.get(body_key, template.get("body_en", ""))
        return body.format(sender_name=sender_name or "Valued Customer")


def send_reply(account_config, to_addr, subject, body):
    """发送回复邮件"""
    try:
        msg = MIMEMultipart("alternative")
        msg["From"] = account_config["email"]
        msg["To"] = to_addr
        msg["Subject"] = subject
        msg["X-Mailer"] = "Airport Taxi Auto-Reply System"

        msg.attach(MIMEText(body, "plain", "utf-8"))

        with smtplib.SMTP_SSL(
            account_config["smtp_host"],
            account_config["smtp_port"],
            timeout=30
        ) as server:
            server.login(account_config["email"], account_config["password"])
            server.sendmail(account_config["email"], to_addr, msg.as_string())

        logger.info(f"✅ 已发送回复至: {to_addr} | 主题: {subject}")
        return True
    except Exception as e:
        logger.error(f"❌ 发送回复失败 -> {to_addr}: {e}")
        return False


# ── 核心处理逻辑 ──────────────────────────────────────────────

def fetch_single_email(mail, msg_id):
    """安全获取单封邮件，带重试"""
    for attempt in range(2):
        try:
            status, msg_data = mail.fetch(msg_id, "(RFC822)")
            if status == "OK" and msg_data and msg_data[0]:
                return msg_data[0][1]
        except Exception:
            if attempt == 0:
                time.sleep(1)
    return None


def connect_imap(account_config):
    """建立IMAP连接"""
    mail = imaplib.IMAP4_SSL(
        account_config["imap_host"],
        account_config["imap_port"],
        timeout=30
    )
    mail.login(account_config["email"], account_config["password"])
    mail.select("INBOX")
    return mail


def process_account(account_config, processed_db):
    """处理单个邮箱账号的新邮件（支持自动重连）"""
    account_email = account_config["email"]
    account_key = account_email.replace("@", "_at_")

    if account_key not in processed_db:
        processed_db[account_key] = []

    processed_ids = set(processed_db[account_key])
    new_count = 0
    replied_count = 0

    try:
        logger.info(f"🔍 正在检查: {account_email}")
        mail = connect_imap(account_config)

        # 搜索未读邮件
        status, messages = mail.search(None, "UNSEEN")
        if status != "OK":
            logger.warning(f"搜索失败: {account_email}")
            mail.logout()
            return new_count, replied_count

        msg_ids = messages[0].split()
        # 过滤已处理的
        unprocessed = [m for m in msg_ids if m.decode() not in processed_ids]
        logger.info(f"  发现 {len(msg_ids)} 封未读邮件，待处理 {len(unprocessed)} 封")

        # 每次最多处理最新50封
        batch = unprocessed[-50:]
        RECONNECT_EVERY = 20  # 每20封重连一次

        for i, msg_id in enumerate(batch):
            msg_id_str = msg_id.decode()

            # 定期重连防止超时
            if i > 0 and i % RECONNECT_EVERY == 0:
                try:
                    mail.logout()
                except Exception:
                    pass
                try:
                    mail = connect_imap(account_config)
                    logger.info(f"  🔄 重新连接 IMAP ({i}/{len(batch)})")
                except Exception as e:
                    logger.error(f"  重连失败: {e}")
                    break

            try:
                raw_email = fetch_single_email(mail, msg_id)
                if raw_email is None:
                    processed_ids.add(msg_id_str)
                    continue

                msg = email.message_from_bytes(raw_email)

                # 解析邮件基本信息
                subject = decode_str(msg.get("Subject", "(无主题)"))
                sender = decode_str(msg.get("From", ""))
                date_str = msg.get("Date", "")
                body = get_email_body(msg)

                # 提取发件人邮箱和姓名
                sender_match = re.search(r"<(.+?)>", sender)
                sender_email = sender_match.group(1) if sender_match else sender.strip()
                sender_name = re.sub(r"<.+?>", "", sender).strip().strip('"')
                if not sender_name:
                    sender_name = sender_email.split("@")[0]

                # 跳过自己发的邮件
                if sender_email.endswith("@airport-taxi.com"):
                    processed_ids.add(msg_id_str)
                    continue

                # AI分类和信息提取
                analysis = classify_email_with_ai(subject, body, sender)
                category = analysis.get("category", "general")
                priority = analysis.get("priority", "medium")
                summary = analysis.get("summary", subject[:50])
                extracted = analysis.get("extracted_info", {})
                needs_reply = analysis.get("needs_reply", False)

                new_count += 1

                # 记录处理日志
                log_entry = {
                    "id": msg_id_str,
                    "account": account_email,
                    "from": sender_email,
                    "sender_name": sender_name,
                    "subject": subject,
                    "date": date_str,
                    "category": category,
                    "priority": priority,
                    "summary": summary,
                    "extracted_info": extracted,
                    "processed_at": datetime.now().isoformat(),
                    "replied": False,
                }

                logger.info(
                    f"  📧 [{priority.upper()}] [{category}] {sender_name} <{sender_email}>\n"
                    f"     主题: {subject[:60]}\n"
                    f"     摘要: {summary}"
                )

                if extracted:
                    logger.info(f"     提取信息: {json.dumps(extracted, ensure_ascii=False)}")

                # 自动回复（需要回复且非系统邮件）
                skip_reply_domains = ["noreply", "no-reply", "donotreply", "do-not-reply",
                                       "notification", "alert", "merchant@klook", "goodjourney.io"]
                should_reply = needs_reply and sender_email and not any(
                    d in sender_email.lower() for d in skip_reply_domains
                )

                if should_reply:
                    reply_body = generate_auto_reply(
                        analysis, subject, sender_name, account_email
                    )
                    reply_subject = f"Re: {subject}" if not subject.startswith("Re:") else subject

                    if send_reply(account_config, sender_email, reply_subject, reply_body):
                        replied_count += 1
                        log_entry["replied"] = True
                        log_entry["reply_sent_at"] = datetime.now().isoformat()

                # 保存处理记录
                save_log_entry(log_entry)
                processed_ids.add(msg_id_str)

            except Exception as e:
                logger.error(f"  处理邮件 {msg_id_str} 时出错: {e}")
                processed_ids.add(msg_id_str)

        try:
            mail.logout()
        except Exception:
            pass

    except imaplib.IMAP4.error as e:
        logger.error(f"❌ IMAP连接失败 {account_email}: {e}")
    except Exception as e:
        logger.error(f"❌ 处理账号 {account_email} 时出错: {e}")

    processed_db[account_key] = list(processed_ids)
    return new_count, replied_count


def save_log_entry(entry):
    """保存单条处理记录到日志JSON"""
    log_json = "/home/ubuntu/email_automation/data/email_log.json"
    logs = []
    if os.path.exists(log_json):
        try:
            with open(log_json, "r", encoding="utf-8") as f:
                logs = json.load(f)
        except Exception:
            logs = []
    logs.append(entry)
    # 只保留最近1000条
    logs = logs[-1000:]
    with open(log_json, "w", encoding="utf-8") as f:
        json.dump(logs, f, ensure_ascii=False, indent=2)


# ── 主循环 ────────────────────────────────────────────────────

def run_once():
    """执行一次邮件检查（所有账号）"""
    logger.info("=" * 60)
    logger.info(f"🚀 开始邮件检查 - {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    logger.info("=" * 60)

    processed_db = load_processed_ids()
    total_new = 0
    total_replied = 0

    for account in EMAIL_ACCOUNTS:
        new, replied = process_account(account, processed_db)
        total_new += new
        total_replied += replied

    save_processed_ids(processed_db)

    logger.info(f"✅ 本次检查完成: 处理 {total_new} 封新邮件，自动回复 {total_replied} 封")
    logger.info("=" * 60)
    return total_new, total_replied


def run_daemon():
    """持续运行守护进程"""
    logger.info("🤖 机场出租车邮件自动处理系统启动")
    logger.info(f"   监控账号: {[a['email'] for a in EMAIL_ACCOUNTS]}")
    logger.info(f"   轮询间隔: {POLL_INTERVAL}秒")

    while True:
        try:
            run_once()
        except KeyboardInterrupt:
            logger.info("⛔ 系统已停止")
            break
        except Exception as e:
            logger.error(f"主循环异常: {e}")

        logger.info(f"💤 等待 {POLL_INTERVAL} 秒后进行下次检查...")
        time.sleep(POLL_INTERVAL)


if __name__ == "__main__":
    import sys
    if len(sys.argv) > 1 and sys.argv[1] == "--once":
        run_once()
    else:
        run_daemon()
