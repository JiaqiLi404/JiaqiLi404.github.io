---
title: "Automatic and Reliable Faithfulness Evaluation for Scientific Text-to-Image Generation with LMMs"
collection: publications
permalink: /publication/faithfulness-evaluation-lmms/
order: 2
excerpt: "The first automatic faithfulness evaluation metric specifically designed for scientific image tasks."
date: 2026-12-31
venue: "Association for Computational Linguistics (ACL)"
authors: "Guanghui Ye, Huan Zhao, Qin Zhu, Fengnan Li, Jiaqi Li, Yixian Shen, Zhonghao Ren, Zhihua Jiang"
citation: 'Ye, G., Zhao, H., Zhu, Q., Li, F., Li, J., Shen, Y., Ren, Z., & Jiang, Z. (2026). &quot;Automatic and Reliable Faithfulness Evaluation for Scientific Text-to-Image Generation with LMMs.&quot; <i>Association for Computational Linguistics (ACL)</i>.'
---

Existing faithfulness metrics for image generation focus mostly on real-life images, which makes them ill-suited for scientific image evaluations. For this, we propose ST2I-E, the first faithfulness metric specifically designed for Scientific Text-to-Image (T2I) Evaluations. First, to fully capture faithfulness, we introduce three key aspects: (i) relevance -- which measures the overall text-image correspondence, (ii) accuracy -- which examines the details of scientific objects, and (iii) explainability -- which reveals unfaithful elements in the generated content. Consequently, we generate aspect-aware scientific text-image data to train three sub-evaluators ST2I-E_REL/ACC/EXP. Specifically, to train ST2I-E_REL and ST2I-E_ACC, we propose a new SCLIP framework, where we improve the scientific image perception of CLIP text and visual encoders via intra- and cross-modal contrastive learning. Meanwhile, to train ST2I-E_EXP, we fine-tune a strong LMM using supervised rationale signals. Moreover, we present ST2I-E 1.0, a human-annotated evaluation dataset across 8 scientific domains, consisting of 3,000 scientific text-to-image samples from 4 LMMs. Experiments on ST2I-E 1.0 demonstrate that ST2I-E is more reliable and better correlated with human ratings compared to 19 competitors, including GPT-4o.
