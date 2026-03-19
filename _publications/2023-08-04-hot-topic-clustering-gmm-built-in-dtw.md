---
title: "Hot Topic Clustering based on Gaussian Mixture Model built-in DTW"
collection: publications
permalink: /publication/gmm-dtw-hot-topic-clustering/
order: 3
excerpt: "A Gaussian mixture model with built-in DTW for clustering variable-length time-series without dimensional explosion."
date: 2023-08-04
venue: "IEEE International Conference on Pattern Recognition and Machine Learning (PRML)"
authors: "Chenggang Lu, Jiaqi Li"
paperurl: "https://ieeexplore.ieee.org/abstract/document/10348277"
codeurl: "https://github.com/JiaqiLi404/gmm_dtw"
google_scholar_citation_id: "ru2ps-0AAAAJ:7PzlFSSx8tAC"
citation: 'Lu, C., & Li, J. (2023). &quot;Hot Topic Clustering based on Gaussian Mixture Model built-in DTW.&quot; <i>IEEE International Conference on Pattern Recognition and Machine Learning</i>.'
---

A hot topic clustering method based on Gaussian Mixture Model (GMM) built-in DTW is proposed in this paper. As a typical application of time series clustering, the accuracy of hot topic clustering has been a challenge. Compared with Euclidean distance, DTW distance prioritizes feature alignment in the time dimension by warping the samples to a common time axis, which will make the clustering model focus on the feature differences between sequences and ignore the interference of feature time. Compared with K-Shape, a mainstream time series clustering method, DTW has more specific sequence alignment ability, which greatly improves the accuracy of the algorithm. The traditional DTW algorithm suffers from curse of dimensionality when aligning multiple vectors, so a novel DTW multi-vector consistency algorithm based on existing research is also mentioned in this paper. Compared with the traditional GMM, the fusion of this algorithm can effectively improve the accuracy of hot key words trends clustering from Google Trends by 19.9%, while maintaining the advantage of GMM over K-Means. The improved GMM has 29.9% improvement in accuracy over K-shape, which indicates that it can be well adapted to time series datasets and used in hot topic clustering.
