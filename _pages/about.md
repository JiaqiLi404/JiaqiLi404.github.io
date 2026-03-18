---
permalink: /
title: ""
excerpt: "Jiaqi Li is a PhD student in Computer Science at the University of Warwick."
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% include base_path %}

<section class="home-hero">
  <p class="home-hero__eyebrow">PhD Student in Computer Science - University of Warwick</p>
  <h1 class="home-hero__title">Jiaqi Li</h1>
  <p class="home-hero__lead">
    I work on long video understanding, multimodal models, video temporal grounding,
    embodied AI, robot task and motion planning, and human pose estimation.
  </p>
  <div class="home-hero__actions">
    <a class="btn home-btn home-btn--primary" href="/Jiaqi_Li_CV.pdf">Download CV</a>
    <a class="btn home-btn" href="https://scholar.google.com/citations?view_op=list_works&amp;hl=en&amp;user=ru2ps-0AAAAJ">Google Scholar</a>
    <a class="btn home-btn" href="mailto:jiaqi.li.16@warwick.ac.uk">Email</a>
  </div>
</section>

<div class="home-grid">
  <section class="home-card">
    <h2>About</h2>
    <p>
      I am a PhD candidate in Computer Science at the <strong>University of Warwick</strong>,
      supervised by <strong>Yu Guan</strong>. Previously, I completed an MSc in Computer Science
      at <strong>The University of Hong Kong</strong> and a BSc in Information and Computing Science,
      with a minor in Computer Science and Technology.
    </p>
    <p>
      My recent work spans multimodal video understanding, temporal grounding, and trustworthy instruction tuning.
    </p>
  </section>

  <section class="home-card">
    <h2>Research Interests</h2>
    <ul class="compact-list">
      <li>Long video understanding</li>
      <li>Multimodal models</li>
      <li>Video temporal grounding</li>
      <li>Embodied AI</li>
      <li>Robot task and motion planning</li>
      <li>Human pose estimation</li>
    </ul>
  </section>
</div>

<section class="home-card">
  <div class="section-heading">
    <h2>Highlights</h2>
    <a href="/cv/">View full CV</a>
  </div>
  <div class="highlight-grid">
    <div class="highlight-pill">
      <strong>Total Citations</strong>
      <span><span id="total_cit">-</span> on Google Scholar</span>
    </div>
    <div class="highlight-pill">
      <strong>ACL Findings 2025</strong>
      <span>Instruction tuning with uncertainty-sensitive rejection</span>
    </div>
    <div class="highlight-pill">
      <strong>Workshop Chair</strong>
      <span>CVPR AI4RWC 2026</span>
    </div>
    <div class="highlight-pill">
      <strong>Guest Lecture</strong>
      <span>Video Forensics and Video Compression, Warwick, March 2026</span>
    </div>
    <div class="highlight-pill">
      <strong>Research Experience</strong>
      <span>Warwick and HKUST</span>
    </div>
  </div>
</section>

<section class="home-card">
  <h2>News</h2>
  <div class="timeline">
    <div class="timeline__item">
      <span class="timeline__date">Mar 2026</span>
      <div>
        <strong>Delivered a guest lecture</strong>
        <p>Invited talk on Video Forensics and Video Compression for CS355 Digital Forensics at the University of Warwick.</p>
      </div>
    </div>
    <div class="timeline__item">
      <span class="timeline__date">2026</span>
      <div>
        <strong>Expanded academic service</strong>
        <p>Serving as Workshop Program Chair for CVPR AI4RWC 2026 and reviewer for ICML, ACL ARR, and IJCAI.</p>
      </div>
    </div>
    <div class="timeline__item">
      <span class="timeline__date">May 2025</span>
      <div>
        <strong>ACL Findings paper accepted</strong>
        <p><em>Know the Unknown: An Uncertainty-Sensitive Method for LLM Instruction Tuning</em> was accepted to ACL Findings 2025.</p>
      </div>
    </div>
    <div class="timeline__item">
      <span class="timeline__date">2024-2025</span>
      <div>
        <strong>Research assistantship at Warwick</strong>
        <p>Worked with Yu Guan on multimodal and video understanding research in Coventry.</p>
      </div>
    </div>
  </div>
</section>

<section class="home-card">
  <div class="section-heading">
    <h2>Selected Publications</h2>
    <a href="/publications/">All publications</a>
  </div>
  {% assign featured_publications = site.publications | sort: "order" | slice: 0, 4 %}
  <div class="publication-list">
    {% for post in featured_publications %}
    <article class="publication-card">
      <div class="publication-card__meta">{{ post.venue }}</div>
      <h3><a href="{{ base_path }}{{ post.url }}">{{ post.title }}</a></h3>
      {% if post.authors %}<p class="publication-card__authors">{{ post.authors }}</p>{% endif %}
      <p>{{ post.excerpt }}</p>
      <p class="publication-card__links">
        <a href="{{ base_path }}{{ post.url }}">Details</a>
        {% if post.paperurl %}<a href="{{ post.paperurl }}">Paper</a>{% endif %}
        {% if post.codeurl %}<a href="{{ post.codeurl }}">Code</a>{% endif %}
        <span class="show_paper_citations"{% if post.google_scholar_citation_id %} data="{{ post.google_scholar_citation_id }}"{% endif %} data-title="{{ post.title | escape }}"></span>
      </p>
    </article>
    {% endfor %}
  </div>
</section>

<div class="home-grid">
  <section class="home-card">
    <h2>Education</h2>
    <div class="detail-stack">
      <div class="detail-item">
        <strong>University of Warwick</strong>
        <span>PhD in Computer Science, 2024 - present</span>
      </div>
      <div class="detail-item">
        <strong>The University of Hong Kong</strong>
        <span>MSc in Computer Science, 2022 - 2023</span>
      </div>
      <div class="detail-item">
        <strong>Zhejiang University of Technology</strong>
        <span>BSc in Information and Computing Science, minor in Computer Science and Technology, 2018 - 2022</span>
      </div>
    </div>
  </section>

  <section class="home-card">
    <h2>Research and Service</h2>
    <div class="detail-stack">
      <div class="detail-item">
        <strong>Research Assistant, University of Warwick</strong>
        <span>Dec 2024 - Mar 2025</span>
      </div>
      <div class="detail-item">
        <strong>Research Assistant, HKUST</strong>
        <span>Oct 2023 - May 2024</span>
      </div>
      <div class="detail-item">
        <strong>Conference Reviewing</strong>
        <span>IJCAI 2025/2026, ICCV 2025, AAAI 2025, ICML 2026, ACL ARR 2026</span>
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
