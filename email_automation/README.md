# 机场出租车公司 - 邮件自动处理系统

**版本**: v1.0  
**部署路径**: `/home/ubuntu/email_automation/`  
**部署时间**: 2026-04-22

---

## 系统概览

本系统自动监控以下邮箱账号，对新邮件进行 AI 智能分类、关键信息提取，并自动发送回复：

| 账号 | 角色 | 状态 |
|------|------|------|
| `lucas@airport-taxi.com` | 主账号（综合处理） | ✅ 运行中 |
| `booking@airport-taxi.com` | 预订公共邮箱 | ⚠️ 待开启IMAP |
| `finance@airport-taxi.com` | 财务公共邮箱 | ⚠️ 待开启IMAP |

---

## 功能说明

### 1. 邮件分类（6类）
| 分类 | 说明 | 示例来源 |
|------|------|---------|
| `booking` | 预订/接送/报价 | 客户询价、GetYourGuide |
| `finance` | 财务/账单/发票 | Klook费用修改、Osome |
| `partner` | 合作伙伴 | Klook、tourHQ、Blacklane |
| `complaint` | 投诉/问题 | 客户投诉、退款 |
| `review` | 评价/评分 | Trustindex |
| `general` | 其他 | 一般咨询 |

### 2. 自动回复规则
- **预订类**：自动回复确认收到，告知2小时内跟进
- **投诉类**：自动回复道歉并承诺24小时内处理
- **财务类**：自动回复告知1-2个工作日处理
- **系统通知**（noreply/Klook/goodjourney等）：**不自动回复**，仅分类记录

### 3. 信息提取
对预订类邮件自动提取：乘客姓名、航班号、出行日期、接送地点、目的地、人数等

---

## 常用命令

```bash
# 查看系统运行状态
bash /home/ubuntu/email_automation/start.sh status

# 手动触发一次邮件检查
bash /home/ubuntu/email_automation/start.sh once

# 查看最近24小时处理报告
bash /home/ubuntu/email_automation/start.sh report 24

# 查看最近1小时报告
bash /home/ubuntu/email_automation/start.sh report 1

# 重启守护进程
bash /home/ubuntu/email_automation/start.sh stop
bash /home/ubuntu/email_automation/start.sh start

# 查看实时日志
tail -f /home/ubuntu/email_automation/logs/daemon.log
```

---

## 文件结构

```
/home/ubuntu/email_automation/
├── config.py              # 配置文件（账号、密码、分类规则、回复模板）
├── email_processor.py     # 核心处理程序
├── report.py              # 报告生成工具
├── test_connection.py     # 连接测试工具
├── start.sh               # 启动脚本
├── logs/
│   ├── daemon.log         # 运行日志
│   └── daemon.pid         # 进程ID
└── data/
    ├── email_log.json     # 处理记录（最近1000条）
    └── processed_emails.json  # 已处理邮件ID（防重复）
```

---

## 待办事项

- [ ] **开启公共邮箱IMAP**：在网易企业邮箱管理员后台为 `booking` 和 `finance` 开启IMAP，并更新 `config.py` 中对应的授权码
- [ ] **自定义回复模板**：根据业务需求修改 `config.py` 中的 `AUTO_REPLY_TEMPLATES`
- [ ] **调整分类关键词**：如需更精准分类，可在 `config.py` 的 `CATEGORY_KEYWORDS` 中添加关键词

---

## 如何添加公共邮箱

1. 登录网易企业邮箱管理员后台
2. 进入「公共邮箱」→ 选择 `booking` 或 `finance`
3. 开启「客户端授权密码」，生成授权码
4. 编辑 `config.py`，将对应账号的 `password` 字段替换为新授权码
5. 重启守护进程：`bash start.sh stop && bash start.sh start`
