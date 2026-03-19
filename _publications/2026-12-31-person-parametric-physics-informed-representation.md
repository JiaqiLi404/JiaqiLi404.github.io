---
title: "Person Parametric Physics-informed Representation for mmWave-based Human Pose Estimation"
collection: publications
permalink: /publication/person-parametric-physics-informed/
order: 6
show_on_homepage: true
excerpt: "This paper proposes a new input paradigm for mmWave-based human pose estimation, which models human as an Gaussian ensemble enriched with electromagnetic and kinematic parameters."
date: 2026-12-31
venue: "Under review"
authors: "Shuntian Zheng, Jiaqi Li, Guangming Wang, Minzhe Ni, Arnad Palit, Giovanni Montana, Yu Guan"
paperurl: "https://arxiv.org/pdf/2512.23054"
citation: 'Zheng, S., Li, J., Wang, G., et al. (2026). &quot;Person Parametric Physics-informed Representation for mmWave-based Human Pose Estimation.&quot; Under review.'
---

Millimeter-wave (mmWave) radar enables privacy-preserving, illumination-invariant Human Pose Estimation (HPE). However, current mmWave-based HPE systems face a signal-noise dilemma: Heatmaps retain human reflections but embed environmental clutter, while Point Clouds (PC) suppress noise through aggressive thresholding but discard informative human reflections, limiting robustness across environments and radar configurations. To address this intrinsic bottleneck, we introduce Person Parametric Physics-informed Representation (PPPR), a physics-informed parametric intermediate representation that replaces purely signal-level encodings with human-centric parameterization. PPPR models each human joint as a Gaussian primitive encoding both kinematic properties, which include position, velocity, orientation, and electromagnetic properties, which include scattering intensity and Doppler signature. These parameters enable optimization through a dual-constraint process:kinematic objectives enforce biomechanical consistency to suppress spatial artifacts, while electromagnetic objectives ensure adherence to mmWave propagation physics, decoupling input representations from non-human noise. Experiments across three mmWave-based HPE datasets with four HPE models demonstrate that replacing conventional inputs with PPPR consistently yields substantial accuracy gains. Furthermore, cross-scenes and cross-datasets experiments confirm PPPR’s noise decoupling capability: models trained with PPPR maintain stable performance across diverse furniture arrangements and different radar chipsets, demonstrating its promising generalization capability in the challenging cross-dataset settings.