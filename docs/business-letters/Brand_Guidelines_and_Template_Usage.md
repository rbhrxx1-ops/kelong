# RELAX CAR SERVICE CO. LIMITED. 商业信函品牌规范与模版使用说明

为了在对外的商务沟通中始终保持专业、统一的企业形象，特制定本品牌规范及商业信函模版使用说明。所有对外发送的正式商业函件（如合作申请、商务提案、正式通知等）均应严格遵循此规范。

## 一、 品牌视觉规范 (Brand Visual Identity)

### 1. 品牌色彩 (Brand Colors)
- **主品牌色（品牌红）**：`#C8102E`
  - 用途：信函顶部横线、公司名称强调、主题栏背景、小节标题边框及文字、表格表头。
- **正文文本色（深灰黑）**：`#1A1A1A`
  - 用途：所有正文段落、收件人信息、签名区姓名。
- **辅助文本色（中灰）**：`#444444` / `#555555`
  - 用途：营业名称 (Trade Name)、日期、编号、联系方式。
- **弱化文本色（浅灰）**：`#999999`
  - 用途：标签 (如 Tel, Booking, 致)。

### 2. 字体排版 (Typography)
- **首选字体族**：`'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', sans-serif`
- **正文字号**：`10.5pt` (约 14px)
- **行高 (Line Height)**：`1.85`
- **段落间距**：段间距 `14px`，首行缩进 `2em`。

### 3. 公司标准信息 (Standard Company Information)
在任何对外函件中，公司信息必须保持以下拼写和格式的绝对一致：
- **公司全称 (大写)**：`RELAX CAR SERVICE CO. LIMITED.`
- **营业名称**：`Relax Airport Taxi`
- **英文地址**：`Room 511, 5/F, Ming Sang Industrial Building, 19-21 Hing Yip Street, Kwun Tong, Kowloon, Hong Kong`
- **标准联系人**：`金辉振`
- **总机电话**：`+852 5801 4111`
- **预订邮箱**：`booking@airport-taxi.com`
- **财务邮箱**：`finance@airport-taxi.com`

---

## 二、 模版使用说明 (Template Usage Guide)

我们已将上述规范封装为 HTML 格式的专用信函模版：`Relax_Airport_Taxi_Letter_Template.html`。

### 1. 模版文件结构
模版采用纯 HTML + 内联 CSS 编写，确保在转换为 PDF 时样式不丢失。文件包含以下动态占位符（使用 `{{}}` 标记）：
- `{{信函标题}}`：网页 Title 标签。
- `{{信函编号}}`：如 `RCS-KLOOK-API-2026-001`，建议按 `RCS-项目名-年份-流水号` 规则编制。
- `{{YYYY年MM月DD日}}`：发函日期。
- `{{收件人名称/团队}}`：如 `Klook 商务合作团队`。
- `{{信函主题}}`：如 `关于申请 Klook 接送机服务 API 对接的商业合作函`。
- `{{收件人称呼}}`：如 `Klook 商务合作团队`。
- `{{正文段落}}`、`{{小节标题}}`、`{{小节内容}}`：根据实际业务需求替换。

### 2. 如何生成新的商业函
1. **复制模版**：复制 `Relax_Airport_Taxi_Letter_Template.html` 文件，并重命名为当前项目名称（如 `Klook_Proposal.html`）。
2. **替换内容**：使用任何文本编辑器（如 VS Code, Sublime Text, 甚至记事本）打开 HTML 文件，搜索 `{{`，逐一替换所有占位符为实际内容。
3. **调整结构**：
   - 如需增加段落，复制 `<p class="body-text">...</p>`。
   - 如需增加带红色左边框的小节，复制 `<div class="section-title">...</div>` 及下方的 `<p class="section-body">...</p>`。
4. **生成 PDF**：
   - 建议使用 Python 的 `weasyprint` 库进行渲染，以获得最佳排版效果：
     ```python
     from weasyprint import HTML, CSS
     HTML(filename='Your_Letter.html').write_pdf('Your_Letter.pdf', stylesheets=[CSS(string='@page { size: A4; margin: 0; }')])
     ```
   - 或直接在 Chrome 浏览器中打开该 HTML 文件，使用 `Ctrl+P` (或 `Cmd+P`) 打印，设置纸张为 `A4`，边距为 `无`，并勾选 `背景图形`，然后选择 `另存为 PDF`。

### 3. 发送前检查清单 (Pre-flight Checklist)
- [ ] 检查信函编号是否唯一且正确。
- [ ] 检查收件人名称及称呼是否准确无误。
- [ ] 确认所有 `{{}}` 占位符均已替换或删除。
- [ ] 打印/生成 PDF 后，检查分页是否合理，避免小节标题孤立在页脚。
- [ ] **必须**在右下角 `公司盖章处` 虚线框位置加盖实体或电子公章。
