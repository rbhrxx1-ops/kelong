#!/usr/bin/env python3
# ============================================================
# 邮件处理报告查看工具
# ============================================================

import json
import os
from datetime import datetime, timedelta
from collections import Counter

LOG_JSON = "/home/ubuntu/email_automation/data/email_log.json"


def load_logs():
    if not os.path.exists(LOG_JSON):
        return []
    with open(LOG_JSON, "r", encoding="utf-8") as f:
        return json.load(f)


def print_report(hours=24):
    logs = load_logs()
    if not logs:
        print("暂无处理记录")
        return

    cutoff = datetime.now() - timedelta(hours=hours)
    recent = [
        l for l in logs
        if datetime.fromisoformat(l["processed_at"]) > cutoff
    ]

    print(f"\n{'='*60}")
    print(f"  机场出租车邮件处理报告 - 最近{hours}小时")
    print(f"  生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"{'='*60}")
    print(f"  处理邮件总数: {len(recent)}")
    print(f"  自动回复数量: {sum(1 for l in recent if l.get('replied'))}")

    # 按分类统计
    cats = Counter(l["category"] for l in recent)
    print(f"\n  📊 邮件分类统计:")
    for cat, count in cats.most_common():
        print(f"     {cat:12s}: {count} 封")

    # 按账号统计
    accounts = Counter(l["account"] for l in recent)
    print(f"\n  📬 各账号收件统计:")
    for acc, count in accounts.most_common():
        print(f"     {acc:35s}: {count} 封")

    # 高优先级邮件
    high_priority = [l for l in recent if l.get("priority") == "high"]
    if high_priority:
        print(f"\n  🔴 高优先级邮件 ({len(high_priority)} 封):")
        for l in high_priority[-10:]:
            print(f"     [{l['category']}] {l['sender_name']} - {l['subject'][:50]}")
            if l.get("extracted_info"):
                print(f"       提取: {l['extracted_info']}")

    # 预订信息汇总
    bookings = [l for l in recent if l["category"] == "booking" and l.get("extracted_info")]
    if bookings:
        print(f"\n  🚖 预订信息汇总 ({len(bookings)} 条):")
        for b in bookings[-10:]:
            info = b["extracted_info"]
            print(f"     来自: {b['sender_name']} <{b['from']}>")
            for k, v in info.items():
                if v:
                    print(f"       {k}: {v}")
            print()

    print(f"{'='*60}\n")


if __name__ == "__main__":
    import sys
    hours = int(sys.argv[1]) if len(sys.argv) > 1 else 24
    print_report(hours)
