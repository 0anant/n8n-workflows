# n8n workflows

## 1. BTC Email Automation

### simple basic email smtp setup, ext will be moving to learn gmail

---Schedule Trigger Node
---HTTP REQUEST NODE{Fetch crypto price}
---Send email via SMTP

## Tools Used

--n8n
--Gmail SMTP
--HTTPS APIs

## 2. Daily Weather Email Automation

### simple basic email steup sending daily weather report include temp,humidity and description

---Schedule Trigger Node {daily at 8 am}
---HTTP req. Node {getting your locations weather report}
---Send email via smtp

## Tools Used

--n8n
--Weather APIs
--Gmail SMTP

## 3. RSS Feed News Automation

### Simple workflow that uses a rss feed node(read) takes in narticles and use edit node to format the data into proper html format and send it as email via SMTP

---Schedule Trigger Node
---RSS Feed node(read)
---limit node
---edit node
---aggregate node
---edit node
---email node(smtp)

## Tools used

---n8n
---News apis
---Gmail SMTP
