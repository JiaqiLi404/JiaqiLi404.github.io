---
title: "Doppler Prompting for Stable mmWave-based Human Pose Estimation"
collection: publications
permalink: /publication/doppler-prompting-stable-mmwave-pose-estimation/
order: 6.5
show_on_homepage: true
excerpt: "We improve mmWave human pose stability by treating Doppler as a confidence-gated motion prompt that selectively conditions spatial magnitude, reducing spurious motion artifacts and velocity error across single- and multi-person benchmarks."
date: 2026-12-31
venue: "International Conference on Machine Learning (ICML)"
authors: "Shuntian Zheng, Jiaqi Li, Xiaoman Lu, et al."
citation: 'Zheng, S., Li, J., Lu, X., et al. (2026). &quot;Doppler Prompting for Stable mmWave-based Human Pose Estimation.&quot; <i>International Conference on Machine Learning (ICML)</i>.'
---

Millimeter-wave (mmWave) enables privacy-preserving, illumination-robust human pose estimation (HPE), with each mmWave frame represented as a range-angle-Doppler tensor, providing spatial magnitude for localization and Doppler signatures for motion-related cues. However, existing mmWave-based HPE methods either underutilize or naively fuse Doppler signatures with spatial magnitude, disregarding their distinct physical semantics. As a result, non-human Doppler signatures can be misinterpreted as human motion cues, leading to jittery trajectories. We propose **PULSE**, which converts Doppler signatures into confidence-aware motion prompts and injects them into spatial magnitude reasoning through constrained interactions. By screening Doppler prompts before they influence prediction, PULSE first suppresses spurious spectral motion cues and then uses the screened prompts to stabilize prediction. Across three datasets spanning single- and multi-person settings, PULSE consistently improves pose accuracy and temporal stability, indicating that controlled Doppler prompting is a practical direction for stable mmWave HPE. Codes are available in supplementary materials.
