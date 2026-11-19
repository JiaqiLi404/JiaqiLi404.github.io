---
permalink: /
title: ""
excerpt: "Jiaqi Li is a PhD candidate at the University of Warwick researching trustworthy AI and evidence grounding for vision-language and vision-language-action models."
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero" aria-labelledby="research-statement">
  <div class="home-hero__text">
    <h1 class="home-hero__title" id="research-statement">Trustworthy AI,<br><span class="home-hero__emphasis">grounded in evidence.</span></h1>
    <p class="home-hero__lead">
      I study how vision-language and vision-language-action models use the right evidence to reason and act.
    </p>
    <div class="home-hero__actions">
      <a class="home-hero__work focus-card__work" href="#selected-publications">Selected work <span aria-hidden="true">&darr;</span></a>
      <nav class="evidence-nav" aria-label="Explore research directions">
        <a class="focus-card__work" href="#geometry"><span class="evidence-glyph evidence-glyph--geometry" aria-hidden="true"></span>Geometry</a>
        <a class="focus-card__work" href="#motion"><span class="evidence-glyph evidence-glyph--motion" aria-hidden="true"></span>Motion</a>
        <a class="focus-card__work" href="#modality"><span class="evidence-glyph evidence-glyph--modality" aria-hidden="true"></span>Modality</a>
      </nav>
    </div>
  </div>
  <div class="home-hero__profile">
    <img class="home-hero__portrait" src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Portrait of Jiaqi Li" width="160" height="160" />
    <p class="home-hero__identity">{{ site.author.name }}</p>
    <p class="home-hero__affiliation">PhD candidate<br>University of Warwick</p>
    <nav class="home-hero__contacts" aria-label="Profile links">
      <a href="{{ site.author.cv | relative_url }}">CV</a>
      <a href="{{ site.author.googlescholar }}">Google Scholar</a>
      <a href="https://github.com/{{ site.author.github }}">GitHub</a>
      {% if site.author.email %}
      <a href="mailto:{{ site.author.email }}">Email</a>
      {% endif %}
    </nav>
  </div>
</section>

<section class="home-card home-focus">
  <h2>Research Focus</h2>
  <article class="focus-row" id="geometry">
    <div class="focus-row__heading">
      <span class="focus-row__signal"><span class="evidence-glyph evidence-glyph--geometry" aria-hidden="true"></span>Geometry</span>
      <h3>Embodied AI &amp; VLA</h3>
    </div>
    <p>Color and texture in a robot's visual input can be misleading artifacts. We study how to ground grasp decisions in <strong>geometric evidence</strong> from shape, pose, and spatial relationships.</p>
  </article>
  <article class="focus-row" id="motion">
    <div class="focus-row__heading">
      <span class="focus-row__signal"><span class="evidence-glyph evidence-glyph--motion" aria-hidden="true"></span>Motion</span>
      <h3>Video Compression &amp; Efficient VLM</h3>
    </div>
    <div>
      <p>Video is highly redundant. We ground video compression in the few tokens that carry evidence for reasoning and find that <strong>motion cues</strong> are especially informative.</p>
      <a class="focus-card__work" href="#semvid">SemVID <span aria-hidden="true">&darr;</span></a>
    </div>
  </article>
  <article class="focus-row" id="modality">
    <div class="focus-row__heading">
      <span class="focus-row__signal"><span class="evidence-glyph evidence-glyph--modality" aria-hidden="true"></span>Modality</span>
      <h3>Multimodal &amp; Video Understanding</h3>
    </div>
    <div>
      <p>VLMs can rely on language cues even when the answer depends on the image or video. We study how to ground their reasoning in <strong>visual evidence</strong>.</p>
      <a class="focus-card__work" href="#actionvlm">ActionVLM <span aria-hidden="true">&darr;</span></a>
    </div>
  </article>
  <ul class="tag-row" aria-label="Research keywords">
    <li>Trustworthy AI</li>
    <li>Evidence Grounding</li>
    <li>VLMs &amp; VLAs</li>
    <li>Geometric Reasoning</li>
    <li>Video Token Pruning</li>
    <li>Modality Bias</li>
  </ul>
</section>

<section class="home-card home-publications" id="selected-publications">
  <div class="section-heading">
    <h2>Selected Publications</h2>
    <a href="{{ '/publications/' | relative_url }}">All publications &rarr;</a>
  </div>
  {% assign featured_publications = site.publications | where: "show_on_homepage", true | sort: "order" | reverse %}
  <div class="publication-list">
    {% for paper in featured_publications limit: 5 %}
      {% include publication-card.html paper=paper heading_level=3 homepage=true %}
    {% endfor %}
  </div>
</section>

<div class="home-grid home-overview">
  <section class="home-card">
    <h2>About</h2>
    <p>
      I am a PhD candidate in Computer Science at the <strong>University of Warwick</strong>, supervised by Prof. Yu Guan.
      Previously, I completed an MSc in Computer Science at <strong>The University of Hong Kong</strong> and a BSc in
      Information and Computing Science, with a minor in Computer Science and Technology.
    </p>
  </section>

  <section class="home-card glance-card">
    <h2>At a Glance</h2>
    <div class="glance-metrics">
      <div class="glance-metric">
        <span class="glance-num"><span id="total_cit">&mdash;</span></span>
        <span class="glance-label">Total Citations</span>
      </div>
      <div class="glance-metric">
        <span class="glance-num"><span id="total_papers">&mdash;</span></span>
        <span class="glance-label">Total Papers</span>
      </div>
    </div>
    <div class="glance-block">
      <span class="glance-label">Research Assistant</span>
      <ul class="glance-list">
        <li><strong>University of Warwick</strong><span>2024&ndash;25, 2026</span></li>
        <li><strong>HKUST</strong><span>2023&ndash;24</span></li>
      </ul>
    </div>
  </section>
</div>

<section class="home-card home-news">
  <h2>News</h2>
  {% assign latest_news = site.data.news | sort: "index" | reverse %}
  <div class="timeline">
    {% for item in latest_news limit: 3 %}
    <div class="timeline__item">
      {% assign date_parts = item.date | split: ' ' %}
      <span class="timeline__date">
        {% if date_parts.size == 2 %}
          <span>{{ date_parts[0] | escape }}</span>
          <span>{{ date_parts[1] | escape }}</span>
        {% else %}
          {{ item.date | escape }}
        {% endif %}
      </span>
      <div>
        <strong>{{ item.title }}</strong>
        <p>{{ item.content }}</p>
      </div>
    </div>
    {% endfor %}
  </div>
</section>
<div class="home-grid">
  <section class="home-card">
    <h2>Education</h2>
    <div class="detail-stack">
      <div class="detail-item">
        <strong>University of Warwick</strong>
        <span>PhD in Computer Science, 2024 &ndash; present</span>
      </div>
      <div class="detail-item">
        <strong>The University of Hong Kong</strong>
        <span>MSc in Computer Science, 2022 &ndash; 2023</span>
      </div>
      <div class="detail-item">
        <strong>Zhejiang University of Technology</strong>
        <span>BSc in Information and Computing Science, minor in Computer Science and Technology, 2018 &ndash; 2022</span>
      </div>
    </div>
  </section>

  <section class="home-card">
    <h2>Academic Service</h2>
    <div class="detail-stack">
      <div class="detail-item">
        <strong>Workshop Program Chair</strong>
        <span>CVPR International Workshop on Vision Intelligence for Real-world Challenges (AI4RWC), 2026</span>
      </div>
      <div class="detail-item">
        <strong>Conference Reviewer &middot; 2026</strong>
        <span>IJCAI, ICML, ACL ARR, NeurIPS, ECCV</span>
      </div>
      <div class="detail-item">
        <strong>Conference Reviewer &middot; 2025</strong>
        <span>IJCAI, ICCV, AAAI</span>
      </div>
    </div>
  </section>
</div>

<section class="home-card">
  <h2>Patents</h2>
  <div class="detail-stack">
    <div class="detail-item">
      <strong><a href="https://patents.google.com/patent/CN115457124A">A method for calibrating the longitude and latitude of aerial image pixels</a></strong>
      <span>Patent No. CN115457124A</span>
    </div>
    <div class="detail-item">
      <strong><a href="https://patents.google.com/patent/CN107512239A">A Remote Ischemic Preconditioning Training System and Method</a></strong>
      <span>Patent No. CN107512239A, co-inventor</span>
    </div>
    <div class="detail-item">
      <strong><a href="https://patents.google.com/patent/CN108461158A">A Passenger Seat Belt Status Monitoring System</a></strong>
      <span>Patent No. CN108461158A</span>
    </div>
  </div>
</section>
