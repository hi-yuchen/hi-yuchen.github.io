# GitHub Pages 个人学术网站优化设计

日期：2026-07-15

## 目标

将现有 `hi-yuchen/personalpage.github.io` 仓库从 Academic Pages 示例模板改造成陈宇的中英双语个人学术网站，并通过 GitHub Pages 公开发布。最终仓库名为 `hi-yuchen/hi-yuchen.github.io`，公开网址为 `https://hi-yuchen.github.io`。

网站延续此前确认的克制、清楚、传统院系学者主页风格。模板只作为 GitHub Pages 与 Jekyll 的稳定基础，不保留通用作品集、博客和讲座门户的复杂结构。

## 线上仓库变更

- 将仓库从 `personalpage.github.io` 改名为 `hi-yuchen.github.io`。
- 保留现有仓库历史，在新分支上实施内容与样式更新，通过拉取请求合并到默认分支。
- GitHub Pages 从默认分支根目录构建。
- 现有 Sites 网站保持不变，作为迁移期间的备份，不自动删除或重定向。

## 信息来源与隐私

内容来自：

- 浙江财经大学公共管理学院教师主页；
- 用户提供的中文个人简历 PDF；
- 已完成的 Sites 版个人网站及其公开版 CV。

任职、单位、邮箱与已发表论文以学院主页的较新信息为准。网站不公开手机号、微信号、出生年月和上海财经大学旧邮箱。下载文件使用已经生成的公开版英文 CV。

论文投稿状态按用户提供的简历展示，集中维护，便于后续更新。

## 信息架构

### Home

首页包括：

- Yu Chen / 陈宇；
- Lecturer, School of Public Administration, Zhejiang University of Finance and Economics；
- 学院公开头像；
- 浙江财经大学邮箱；
- Long-term Care、Health Economics、Labor Economics；
- 中英双语 Bio；
- Research 与 CV 入口。

英文 Bio：

> Yu Chen is a Lecturer in the School of Public Administration at Zhejiang University of Finance and Economics. His research lies at the intersection of health economics, labor economics, and social policy, with a particular focus on long-term care insurance and the care workforce. He studies how social insurance programs shape health care utilization, labor demand, and household welfare using administrative records, online job postings, and quasi-experimental methods.

中文 Bio：

> 陈宇，浙江财经大学公共管理学院讲师。研究领域包括健康经济学、劳动经济学与社会保障，重点关注长期护理保险和护理劳动力市场。他主要利用行政记录、在线招聘数据和准实验方法，研究社会保险制度如何影响医疗服务利用、劳动力需求与家庭福利。

### Research

Research 页面只保留三组成果。

Published：

1. Chen, Y., Yang, H., & Yu, Y. (2025). Crossing the age-35 threshold and labour market outcomes: Evidence from China’s migrant workers. *Applied Economics Letters*, 1–6.
2. Chen, Y., Huang, F., & Zhou, Q. (2023). Equality of public health service and family doctor contract service utilisation among migrants in China. *Social Science & Medicine*, 333, 116148.
3. Fang, G., & Chen, Y. (2021). Sibling Rivalry: Evidence from China’s Compulsory Schooling Reform. *The B.E. Journal of Economic Analysis & Policy*, 21(2), 611–656.

Under Review：

1. Yu Chen, Feng Huang, and Shilong Sun. The Supply-Side Effects of Long-Term Care Insurance in China.
2. Qin Zhou, Ning Li, Feng Huang, and Yu Chen. The Impact of the COVID-19 Pandemic on Mental Health Care Utilization: Evidence from China.

Working Papers：

1. Yu Chen and Feng Huang. Long-term care insurance and demand for healthcare workers: Evidence from job postings.
2. Yu Chen and Zhenzhen Li. Unveiling the long-term benefits of in-utero exposure to rural water and sanitation policy.

已发表论文使用 DOI 链接。没有稳定公开链接的稿件不显示空按钮。

### Teaching

Current Courses：

- Social Security / 社会保障学；
- Management / 管理学；
- Compensation Design and Management / 薪酬设计与管理。

Previous Teaching Experience：

- Teaching Assistant, Population, Resources and Environmental Economics, Fall 2023；
- Teaching Assistant, Intermediate Microeconomics, Spring 2022。

### Resources

Resources 内容结构保留，但首版不出现在导航与站点地图中，也不生成公开页面。后续开放时增加页面并启用导航入口。

## 模板精简

删除或停用 Academic Pages 的示例内容：

- 示例 publications、teaching、talks、portfolio 与 blog posts；
- Talks、Portfolio、Blog、CV 页面中的模板示例；
- 地图、评论、分享、RSS 和示例社交账号；
- 示例图片、PDF 和 BibTeX 文件；
- 不再使用的导航与集合入口。

保留 Jekyll、GitHub Pages 所需的主题基础、SEO、站点地图与构建配置。删除只针对示例内容和当前站点不需要的功能，不做与目标无关的主题重构。

## 双语实现

- 英文为默认语言。
- Header 提供 `EN / 中` 切换。
- Home、Research、Teaching 的可见文案均提供中英文版本。
- 语言选择保存在浏览器本地，页面跳转后继续生效。
- JavaScript 不可用时显示完整英文内容，导航和论文链接仍可使用。
- 中英文内容在同一组 Markdown/数据文件中维护，避免两套页面产生内容漂移。

## 视觉与交互

- 暖白背景、深灰正文、克制的浙财深红点缀。
- 姓名、页面标题和论文题目使用易读衬线字体；导航与元信息使用系统无衬线字体。
- 首页桌面端采用头像与 Bio 双栏，移动端转为单栏。
- 导航只显示 Home、Research、Teaching。
- 不使用模板默认的大量社交图标、标签云、卡片或博客式时间线。
- 动效只限链接下划线与颜色反馈，并尊重减少动态效果设置。
- 所有控件支持键盘操作和清晰焦点状态。

## 内容维护边界

- 个人信息、Bio、研究方向和社交链接集中在 `_config.yml` 与一个站点数据文件中。
- 论文集中在一个结构化数据文件中，按 Published、Under Review、Working Papers 分组。
- Teaching 使用一个结构化数据文件维护当前课程和过往经历。
- 页面模板只负责渲染，不重复写论文和课程内容。
- 公开版 CV 与头像放入站内静态文件目录。

## 异常与降级

- 缺失的 DOI、PDF 或外部主页链接不渲染按钮。
- 头像加载失败时显示文本身份区，不出现破图图标。
- 双语脚本加载失败时保留英文内容。
- GitHub Pages 构建失败时不合并拉取请求；保留当前默认分支可用状态。

## 验证标准

- `https://hi-yuchen.github.io` 无需登录即可访问。
- Home、Research、Teaching 页面在桌面与手机宽度下无重叠、截断和横向滚动。
- 中英切换覆盖全部可见文案，并在页面跳转后保持语言。
- 三组研究成果、课程与 Bio 与本说明一致。
- 手机端导航可用键盘和触摸操作。
- 邮箱、CV 与 DOI 链接可用。
- 模板示例姓名、论文、课程、讲座、博客和图片不再公开。
- Resources 不出现在导航、站点地图或公开路由中。
- GitHub Pages 构建成功后再合并并交付公开网址。
