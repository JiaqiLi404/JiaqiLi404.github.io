---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I'm Jiaqi Li, a graduate student pursuing an Master of science degree in Computer Science at the University of Hong Kong.

I was majored in Mathematics and minor in Computer Science as an undergraduate, participated in 4 national AI competitions and won the second prize in the National College Mathematical Modeling Contest, during which period my groupmates and I studied over 100 papers and completed 20 machine learning related projects with more than 20,000 lines of code. 

My recent interests lies on deep learning, computer vision, transfer learning, generative model, self-supervised learning, semi-supervised learning and multi-model fusion. I am looking for a PhD opportunity in deep learning and willing to devote myself into new fields. As the first author, I have completed <a href='https://scholar.google.com/citations?user=ru2ps-0AAAAJ'><strong><span id='total_cit'>4</span></strong> papers </a>with team members while one SCI paper is under review, which is about Time Series Clustering using the DTW distance. In the meanwhile, I have 3 patents and 4 software copyrights.

You can also get my CV <a href='https://drive.google.com/file/d/1-jXP9oqiqYmgW3ODOyw7qs5Zhvn28TEK/view?usp=share_link'>here</a>.


# 🔥 News
- *2022.07*: &nbsp;🎉🎉 Received the offer from the University of Hong Kong
- *2022.05*: &nbsp;Got Excellent grade in undergraduate dissertation

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/image_gmm_dtw.png' alt="sym" width="300px" height="500px"></div></div>
<div class='paper-box-text' markdown="1">

[**Hot Topics Clustering based on Gaussian Mixture Model with built-in DTW**](https://github.com/JiaqiLi404/gmm_dtw)

**Jiaqi Li**, Chenggang Lu, Qingyue Wang

[**Project**](https://github.com/JiaqiLi404/gmm_dtw) <strong><span class='show_paper_citations' data=''></span></strong>
- Time series clustering algorithms, like K-Shape and DTW-KMeans, have accuracy gap in many datasets. However, combining the DTW with GMM is rarely researched. 
- This paper demostrates an improved GMM with built-in DTW, without dimension explosion.
</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Journal</div><img src='images/enterprise credit loan.png' alt="sym" width="300px" height="500px"></div></div>
<div class='paper-box-text' markdown="1">

[**Research on Credit Loan Decision Model of Enterprises in the Context of Emergencies**](https://qikan.cqvip.com/Qikan/Article/Detail?id=7108822036)

**Gansu Finance, 2022(12)**

**Jiaqi Li**, Yunxia Li, Xiangxu Li

[**Project**](https://github.com/JiaqiLi404/Enterprise_Credit_Loan_Evaluation) <strong><span class='show_paper_citations' data=''></span></strong>

</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Journal</div><img src='images/pinewood_image.png' alt="sym" width="300px" height="500px"></div></div>
<div class='paper-box-text' markdown="1">

[**Establishing a Monitoring Model of Pine Wood Nematode Based on UAV Spectral Remote Sensing and AI Technology**](https://scholar.google.com/citations?view_op=view_citation&user=ru2ps-0AAAAJ&citation_for_view=ru2ps-0AAAAJ:u-x6o8ySG0sC)

**Electronic Technology & Software Engineering, 2021(8):4**

**Jiaqi Li**, Kaihua Wu, Yao Zhang, Dalong Zhao

[**Project**](https://github.com/JiaqiLi404/diseased_pinewood_detection) <strong><span class='show_paper_citations' data='ru2ps-0AAAAJ:u-x6o8ySG0sC'></span></strong> &nbsp;
[**Pix2GPS**](https://github.com/JiaqiLi404/piex2gps_by_sift) <strong><span class='show_paper_citations' data=''></span></strong>

- The detection model was based on Faster-RCNN with FPN, and the use of DETR and attempts were made to use DETR and YOLO instead of RCNN to draw relevant conclusions

- Matching the adjacent aerial images by SIFT to determine the GPS coordinates of pixels

</div>
</div>





<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Journal</div><img src='images/image_lda_clustering.png' alt="sym" width="300px" height="500px"></div></div>
<div class='paper-box-text' markdown="1">

[**E-commerce Platform Intellectual Property Monitoring System Based on Algorithm Engine and Big Data Technology**](https://scholar.google.com/citations?view_op=view_citation&user=ru2ps-0AAAAJ&citation_for_view=ru2ps-0AAAAJ:u5HHmVD_uO8C)

 **Journal of Shanghai University of Engineering Science, 35 (3), 285-289**

**Jiaqi Li**, Yunxia Li, Xiangxu Li

[**Project**](https://github.com/JiaqiLi404/E-commerce-Property-Monitoring-LDA) <strong><span class='show_paper_citations' data='ru2ps-0AAAAJ:u5HHmVD_uO8C'></span></strong>

</div>
</div>






# 🎖 Projects/Competitions

- *2023.02* [**A Semi-supervised Archaeological Site Detection Model based on Transfer Learning**](https://github.com/JiaqiLi404/Super_resolution_DINO)
  - Investigating using GAN to achieve Super_resolution without pair-supervised training data
  - Investigating using unsupervised or few-shot semantic segmentation models like MaskDistill and SAM to transfer the bounding boxes into mask
  - Tring to apply Visual Prompt Tuning into semi-supervised learning to tuning the decoder and applying it into DeepLab or Mask R-CNN model

 
 <br />

- *2022.12* [**A Trustworthy Model for Archaeological Site Detection based on Mean Teacher and CycleGAN**](https://github.com/JiaqiLi404/SemiSupervisedObjectDetection)
  - By measuring the uncertainty of teacher through task-level consistency and random dropout, resulting in a more intelligent student only learns trustworthy knowledge from teacher
  - CycleGAN was introduced to allow image domain transformation and data generation

 
 <br />

- *2022.03* [**Detection Platform of Diseased Wood in Aerial Image of Pine Wood Nematode**](https://github.com/JiaqiLi404/diseased_pinewood_detection)
  - The detection model was based on Faster-RCNN with FPN, and the use of DETR and attempts were made to use DETR and YOLO instead of RCNN to draw relevant conclusions
  - Matching the adjacent aerial images by SIFT to determine the GPS coordinates of pixels

 <br />

- *2020.12* [**2020 China University Computer Contest - Artificial Intelligence Creativity Competition Project: A Cardiovascular Disease Diagnosis System Based on Neural Network**](https://github.com/JiaqiLi404/ECG_diagnostician_android)
  - Feature images of ECG data were extracted by data mining technology, which will be used
for feature extraction and classification using CNN. 
  - The mobile gets the probability of illness based on the ECG data collected by the wearable device and transmitted to the server.

 <br />

- *2020.11* [**2020 National College Students Robot Competition - The Invention of Motion Ball Grasping Robot and Medicine Box Sorting Robot Based on Computer Vision**](https://github.com/JiaqiLi404/catch-ball-robot-raspberry-pi)
  - Applied CV and DL for object recognition and trajectory prediction of moving objects, and controlled the steering engine for capture.

 <br />

- *2020.09* **Second Prize in Zhejiang Province**, [**2020 National College Student Mathematical Contest in Modeling - Credit Risk Assessment Model for Small and Medium-sized Enterprises Based on Analytic Hierarchy Process and Decision Tree**](https://github.com/JiaqiLi404/Enterprise_Credit_Loan_Evaluation)
  - Used the analytic hierarchy process to analyze the fundamentals and capital flows of enterprises, a corporate capital information scoring model is obtained and further combined with a decision tree to build an enterprise credit risk assessment model.

 <br />

- *2020.05* [**2020 National College Student Innovation and Entrepreneurship Competition - A Raspberry Pi Face Monitoring System Based on OpenCV and Deep Learning**](https://github.com/JiaqiLi404/face-monitoring-raspberry-pi)

  - Face images were extracted by OpenCV, which will be trained through TensorFlow to obtain recognition models of different faces. By connecting the Raspberry Pi to server so that the images could be transmitted through web connection.

<br />

- *2021.05* **2021 National College Student Innovation and Entrepreneurship Competition - Returned and Overseas Chinese Capital Comprehensive Service Cloud Platform**

  - Formed two databases for talents and projects as well as four functional systems for information release, project services, network roadshows, and data centers.
  - Aimed at Chinese and overseas Chinese who have returned to China to start their businesses

<br />

# 📖 Educations
- *2022.09 - 2023.09 (now)*, The University of Hong Kong. 
  - Master of Science in Computer Science

 <br />

- *2018.09 - 2022.06*, Zhejiang University of Technology, China.  
  - Bachelor of Science
  - Majored in Imformation & Computing Science
  - Minored in Computer Science
  - Dissertation Grade: Excellent
  - Average Score: 81.4%

# 💬 Patents

- Patent for Invention: [**A method for calibrating the longitude and latitude of aerial image pixels**](https://patents.google.com/patent/CN115457124A), 2022, Patent No.: CN115457124A

- Patent for Utility Model: [**A Remote Ischemic Preconditioning Training System and Method**](https://patents.google.com/patent/CN108461158A), 2021, Patent No.: CN108461158A, Co-inventor

- Patent for Invention: [**A Passenger Seat Belt Status Monitoring System**](https://patents.google.com/patent/CN107512239A), 2018, Patent No.: CN107512239A


- Software Copyright: [**RR Interval Extraction Based on Chaos Theory and Heart Disease Diagnosis APP Based on AI Technology**](https://github.com/JiaqiLi404/Android_openwrt_controller), 2021, No. 7255144, Co-inventor

- Software Copyright: **Meeting Affairs Management Software**, 2021, No. 7278724

- Software Copyright: **Exam Management Software**, 2021, No. 7278723

- Software Copyright: **Electric Power Monitoring Software**, 2021, No. 7278722

# 💻 Internships
- *Sep. 2020 - Feb. 2021*, Hangzhou Fenghui Information Technology Co., Ltd.

  - R & D Department, Assist colleagues in testing hardware and software products and applying for patents.

 <br />

- *July 2020 - Sep. 2020*, Lishui Honeycomb Network Technology Co., Ltd.

  - Technical Department, Cooperated with colleagues to complete Jiayibao – an electronic stethoscope system based on artificial intelligence which won the third prize in 2020 Maker China Zhejiang Good Project Lishui Small and Micro Enterprises Innovation and Entrepreneurship Competition.

 <br />

- *Dec. 2019 - Jan. 2020*, Zhejiang Red Dot Intelligent Technology Co., Ltd.

  - Academician Workstation, Participated in the practice of developing a monitoring data model of pine wood nematode by using unmanned aerial vehicle mapping, spectral remote sensing technology and neural network, and assisted in developing the big data model and smart defense platform