---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

Download PDF: [Jiaqi_Li_CV.pdf](/Jiaqi_Li_CV.pdf)

Education
======

* **University of Warwick**, Coventry, United Kingdom  
  PhD in Computer Science, 2024 - present  
  Supervisor: Yu Guan; Advisors: Victor Sanchez, Weiren Yu
* **The University of Hong Kong**, Hong Kong, China  
  MSc in Computer Science, 2022 - 2023
* **Zhejiang University of Technology**, Hangzhou, China  
  BSc in Information and Computing Science, 2018 - 2022  
  Minor: Computer Science and Technology

Research Interests
======

* Long video understanding
* Multimodal models
* Video temporal grounding
* Embodied AI
* Robot task and motion planning
* Human pose estimation

Research Experience
======

* **Research Assistant**, University of Warwick, Coventry, United Kingdom  
  Dec 2024 - Mar 2025  
  Advisor: Yu Guan
* **Research Assistant**, The Hong Kong University of Science and Technology, Hong Kong, China  
  Oct 2023 - May 2024  
  Advisors: Yi Yang, Zhitao Yin

Teaching and Invited Talk
======

* **Guest Lecture**, Video Forensics and Video Compression  
  CS355 Digital Forensics, University of Warwick, March 2026

Academic Service
======

* **Workshop Program Chair**  
  CVPR International Workshop on Vision Intelligence for Real-world Challenges (AI4RWC) 2026
* **Conference Reviewer**  
  IJCAI 2025, 2026; ICCV 2025; AAAI 2025; ICML 2026; ACL ARR 2026

Selected Publications
======

{% assign featured_publications = site.publications | sort: "order" | reverse %}
<ul>
{% for post in featured_publications %}
  <li>{% include highlight-author-name.html authors=post.authors %}. "{{ post.title }}." {{ post.venue }}, {{ post.date | default: "1900-01-01" | date: "%Y" }}.{% include publication-highlight.html highlight=post.highlight %}</li>
{% endfor %}
</ul>

Patents
======

* A method for calibrating the longitude and latitude of aerial image pixels. Patent No. CN115457124A.
* A Remote Ischemic Preconditioning Training System and Method. Patent No. CN107512239A. Co-inventor.
* A Passenger Seat Belt Status Monitoring System. Patent No. CN108461158A.
