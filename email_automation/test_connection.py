#!/usr/bin/env python3
# ============================================================
# 邮箱连接测试脚本
# ============================================================

import imaplib
import smtplib
import sys
from config import EMAIL_ACCOUNTS


def test_imap(account):
    """测试IMAP连接"""
    print(f"\n  测试 IMAP: {account['email']}")
    try:
        mail = imaplib.IMAP4_SSL(account["imap_host"], account["imap_port"])
        mail.login(account["email"], account["password"])
        status, data = mail.select("INBOX")
        count = int(data[0]) if data[0] else 0
        mail.logout()
        print(f"  ✅ IMAP 连接成功 | 收件箱共 {count} 封邮件")
        return True
    except imaplib.IMAP4.error as e:
        print(f"  ❌ IMAP 登录失败: {e}")
        return False
    except Exception as e:
        print(f"  ❌ IMAP 连接错误: {e}")
        return False


def test_smtp(account):
    """测试SMTP连接"""
    print(f"  测试 SMTP: {account['email']}")
    try:
        server = smtplib.SMTP_SSL(account["smtp_host"], account["smtp_port"], timeout=15)
        server.login(account["email"], account["password"])
        server.quit()
        print(f"  ✅ SMTP 连接成功")
        return True
    except smtplib.SMTPAuthenticationError as e:
        print(f"  ❌ SMTP 认证失败: {e}")
        return False
    except Exception as e:
        print(f"  ❌ SMTP 连接错误: {e}")
        return False


def run_tests():
    print("=" * 50)
    print("  机场出租车邮件系统 - 连接测试")
    print("=" * 50)

    results = []
    for account in EMAIL_ACCOUNTS:
        print(f"\n【{account['name']}】")
        imap_ok = test_imap(account)
        smtp_ok = test_smtp(account)
        results.append({
            "account": account["email"],
            "imap": imap_ok,
            "smtp": smtp_ok,
        })

    print("\n" + "=" * 50)
    print("  测试结果汇总:")
    all_ok = True
    for r in results:
        status = "✅ 正常" if r["imap"] and r["smtp"] else "❌ 异常"
        print(f"  {r['account']:35s}: {status}")
        if not (r["imap"] and r["smtp"]):
            all_ok = False

    print("=" * 50)
    if all_ok:
        print("  🎉 所有账号连接正常，系统可以启动！")
    else:
        print("  ⚠️  部分账号连接失败，请检查密码或IMAP/SMTP设置")
        print("  提示: 公共邮箱(finance/booking)可能需要单独的密码")
        print("        请在 config.py 中更新对应密码")
    print()
    return all_ok


if __name__ == "__main__":
    success = run_tests()
    sys.exit(0 if success else 1)
