---
permalink: /
title: "Home"
description: "Yu Chen is a Lecturer at Zhejiang University of Finance and Economics whose research focuses on long-term care, health economics, and labor economics."
---

<main id="main-content" class="page home-page">
  <section class="home-grid" aria-labelledby="home-title">
    <div class="portrait-column">
      <div class="portrait-frame">
        <img class="portrait" src="{{ '/images/yu-chen.jpg' | relative_url }}" alt="Portrait of Yu Chen" width="880" height="1174" onerror="this.hidden=true;this.nextElementSibling.hidden=false">
        <div class="portrait-fallback" hidden aria-label="Yu Chen">YC</div>
      </div>
      <div class="contact-block">
        <p class="eyebrow"><span class="lang-en">Contact</span><span class="lang-zh">联系方式</span></p>
        <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a>
        <p>
          <span class="lang-en">School of Public Administration<br>Zhejiang University of Finance and Economics, Hangzhou</span>
          <span class="lang-zh">浙江财经大学公共管理学院<br>浙江财经大学，杭州</span>
        </p>
      </div>
    </div>

    <div class="home-copy">
      <p class="eyebrow"><span class="lang-en">Faculty profile</span><span class="lang-zh">教师主页</span></p>
      <h1 id="home-title"><span class="lang-en">Yu Chen</span><span class="lang-zh">陈宇</span></h1>
      <p class="role"><span class="lang-en">{{ site.author.role }}</span><span class="lang-zh">{{ site.author.role_zh }}</span></p>
      <div class="rule" aria-hidden="true"></div>

      <section class="bio" aria-labelledby="bio-title">
        <h2 id="bio-title">Bio</h2>
        <p class="lang-en">Yu Chen is a Lecturer in the School of Public Administration at Zhejiang University of Finance and Economics. His research lies at the intersection of health economics, labor economics, and social policy, with a particular focus on long-term care insurance and the care workforce. He studies how social insurance programs shape health care utilization, labor demand, and household welfare using administrative records, online job postings, and quasi-experimental methods.</p>
        <p class="lang-zh">陈宇，浙江财经大学公共管理学院讲师。研究领域包括健康经济学、劳动经济学与社会保障，重点关注长期护理保险和护理劳动力市场。他主要利用行政记录、在线招聘数据和准实验方法，研究社会保险制度如何影响医疗服务利用、劳动力需求与家庭福利。</p>
      </section>

      <section class="interests" aria-labelledby="interests-title">
        <h2 id="interests-title"><span class="lang-en">Research interests</span><span class="lang-zh">研究方向</span></h2>
        <ul class="interest-list">
          {% for interest in site.research_interests %}
            <li><span class="lang-en">{{ interest.en }}</span><span class="lang-zh">{{ interest.zh }}</span></li>
          {% endfor %}
        </ul>
      </section>

      <div class="home-actions">
        <a class="text-link" href="{{ '/research/' | relative_url }}"><span class="lang-en">View research</span><span class="lang-zh">查看研究成果</span></a>
        <a class="text-link" href="{{ '/files/yu-chen-cv.pdf' | relative_url }}" download><span class="lang-en">Download CV</span><span class="lang-zh">下载简历</span></a>
      </div>
    </div>
  </section>
</main>
