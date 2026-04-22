# ============================================================
# 机场出租车公司 - 邮件自动处理系统配置文件
# Airport Taxi Email Automation System - Configuration
# ============================================================

# 邮箱账号配置
# 注意：公共邮箱(booking/finance)需在管理员后台开启IMAP后填入授权码
EMAIL_ACCOUNTS = [
    {
        "name": "主账号 (lucas)",
        "email": "lucas@airport-taxi.com",
        "password": "2VdRm4Rf@vY7Hd2U",
        "role": "main",
        "imap_host": "imap.qiye.163.com",
        "imap_port": 993,
        "smtp_host": "smtp.qiye.163.com",
        "smtp_port": 465,
    },
    {
        "name": "预订邮箱 (booking)",
        "email": "booking@airport-taxi.com",
        "password": "9Vu2Bo7Eu80",  # 公共邮箱密码，如不同请修改
        "role": "booking",
        "imap_host": "imap.qiye.163.com",
        "imap_port": 993,
        "smtp_host": "smtp.qiye.163.com",
        "smtp_port": 465,
    },
    {
        "name": "财务邮箱 (finance)",
        "email": "finance@airport-taxi.com",
        "password": "9Vu2Bo7Eu80",  # 公共邮箱密码，如不同请修改
        "role": "finance",
        "imap_host": "imap.qiye.163.com",
        "imap_port": 993,
        "smtp_host": "smtp.qiye.163.com",
        "smtp_port": 465,
    },
]

# 轮询间隔（秒）
POLL_INTERVAL = 300  # 每5分钟检查一次

# 日志文件路径
LOG_FILE = "/home/ubuntu/email_automation/logs/email_automation.log"

# 处理记录数据库
DB_FILE = "/home/ubuntu/email_automation/data/processed_emails.json"

# OpenAI API 配置（用于智能分类和回复生成）
import os
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
AI_MODEL = "gpt-4.1-mini"

# 邮件分类规则（关键词匹配）
CATEGORY_KEYWORDS = {
    "booking": [
        "booking", "reservation", "transfer", "pickup", "airport", "taxi",
        "预订", "预约", "接送", "机场", "出租", "用车", "接机", "送机",
        "flight", "arrival", "departure", "passenger", "乘客", "航班",
        "quote", "price", "报价", "价格", "费用",
    ],
    "complaint": [
        "complaint", "problem", "issue", "bad", "terrible", "refund",
        "投诉", "问题", "退款", "差评", "不满", "延误", "迟到",
        "cancel", "取消", "cancellation",
    ],
    "finance": [
        "invoice", "payment", "receipt", "billing", "finance", "account",
        "发票", "付款", "账单", "财务", "结算", "对账", "费用",
        "wire transfer", "bank", "银行", "转账",
    ],
    "partner": [
        "partner", "cooperation", "api", "integration", "business",
        "合作", "对接", "商务", "供应商", "klook", "blacklane", "kiwitaxi",
        "ctrip", "携程", "tourHQ", "viator",
    ],
    "review": [
        "review", "rating", "feedback", "评价", "评分", "好评", "差评",
        "trustindex", "tripadvisor",
    ],
    "general": [],  # 默认分类
}

# 自动回复模板
AUTO_REPLY_TEMPLATES = {
    "booking": {
        "subject_prefix": "Re: ",
        "body_en": """Dear {sender_name},

Thank you for contacting Airport Taxi Service!

We have received your inquiry and our team will review your booking request shortly. 
We will get back to you within 2 hours with confirmation and details.

For urgent inquiries, please include:
- Pickup location and destination
- Date and time of travel
- Number of passengers
- Flight number (if applicable)

Best regards,
Airport Taxi Team
booking@airport-taxi.com
""",
        "body_zh": """您好，

感谢您联系机场出租车服务！

我们已收到您的预订询问，我们的团队将尽快审核您的请求。
我们将在2小时内回复您并提供确认信息。

如需紧急处理，请提供：
- 接送地点和目的地
- 出行日期和时间
- 乘客人数
- 航班号（如适用）

此致
机场出租车团队
booking@airport-taxi.com
""",
    },
    "complaint": {
        "subject_prefix": "Re: ",
        "body_en": """Dear {sender_name},

Thank you for reaching out to us. We sincerely apologize for any inconvenience you have experienced.

We take all feedback seriously and will investigate this matter immediately. 
Our customer service manager will contact you within 24 hours.

We appreciate your patience and understanding.

Best regards,
Airport Taxi Customer Service
lucas@airport-taxi.com
""",
    },
    "finance": {
        "subject_prefix": "Re: [Finance] ",
        "body_en": """Dear {sender_name},

Thank you for your message regarding financial matters.

Our finance team has received your inquiry and will process it accordingly. 
Please expect a response within 1-2 business days.

Best regards,
Finance Department
finance@airport-taxi.com
""",
    },
    "general": {
        "subject_prefix": "Re: ",
        "body_en": """Dear {sender_name},

Thank you for contacting Airport Taxi Service!

We have received your message and will respond within 24 hours.

Best regards,
Airport Taxi Team
lucas@airport-taxi.com
""",
    },
}
