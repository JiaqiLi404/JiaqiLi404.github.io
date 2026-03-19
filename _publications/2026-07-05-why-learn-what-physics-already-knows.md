---
title: "Why Learn What Physics Already Knows? Realizing Agile mmWave-based Human Pose Estimation via Physics-Guided Preprocessing"
collection: publications
permalink: /publication/physics-guided-mmwave-pose-estimation/
order: 5
excerpt: "We propose a lightweight mmWave pose estimation framework that exploits physical priors to reduce parameters by 55.7%–88.9% while maintaining competitive accuracy and enabling real-time Raspberry Pi deployment."
date: 2026-07-05
venue: "IEEE International Conference on Multimedia and Expo (ICME)"
paperurl: "https://arxiv.org/pdf/2603.08236"
authors: "Shuntian Zheng, Jiaqi Li, Minzhe Ni, Xiaoman Lu, Yu Guan"
citation: 'Zheng, S., Li, J., Ni, M., et al. (2026). &quot;Why Learn What Physics Already Knows? Realizing Agile mmWave-based Human Pose Estimation via Physics-Guided Preprocessing.&quot; <i>IEEE International Conference on Multimedia and Expo</i>.'
---

We revisit millimeter-wave (mmWave) human pose estimation (HPE) from a signal preprocessing perspective. A single mmWave frame provides structured dimensions that map directly to human geometry and motion: range, angle, and Doppler, offering pose-aligned cues that are not explicitly present in RGB images. However, recent mmWave-based HPE systems require more parameters and compute resources yet yield lower estimation accuracy than vision baselines. We attribute this to preprocessing modules: most systems rely on data-driven modules to estimate phenomena that are already well-defined by mmWave sensing physics, whereas human pose could be captured more efficiently with explicit physical priors. To this end, we introduce processing modules that explicitly model mmWave's inter-dimensional correlations and human kinematics. Our design (1) couples range and angle to preserve Spatial human structure, (2) leverages Doppler to retain human motion continuity, and (3) applies multi-scale fusion aligned with the human body. A lightweight MLP is involved as the regressor. In experiments, this framework reduces the number of parameters by 55.7–88.9\% on the HPE task relative to existing mmWave baselines while maintaining competitive accuracy. Meanwhile, its lightweight nature enables real-time Raspberry Pi deployment. Code and deployment artifacts will be released upon acceptance.
