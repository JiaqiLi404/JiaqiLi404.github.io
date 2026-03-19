---
title: "Towards Mitigating Modality Bias in Vision-Language Models for Temporal Action Localization"
collection: publications
permalink: /publication/towards-mitigating-modality-bias/
order: 9
show_on_homepage: true
excerpt: "We propose ActionVLM, a vision-language framework for temporal action localization that uses Language Advantage to adaptively weight language, mitigating language shortcuts and grounding localization in visual evidence."
date: 2026-12-31
venue: "Association for Computational Linguistics (ACL)"
paperurl: "https://arxiv.org/pdf/2601.21078"
codeurl: "https://github.com/JiaqiLi404/ActionVLM"
authors: "Jiaqi Li, Guangming Wang, Shuntian Zheng, Minzhe Ni, Xiaoman Lu, Guanghui Ye, Yu Guan"
highlight: "Top 1% Overall Assessment"
citation: 'Li, J., Wang, G., Zheng, S., et al. (2026). &quot;Towards Mitigating Modality Bias in Vision-Language Models for Temporal Action Localization.&quot; ACL submission.'
---

Temporal Action Localization (TAL) requires identifying both the boundaries and categories of actions in untrimmed videos. While vision-language models (VLMs) offer rich semantics to complement visual evidence, existing approaches tend to overemphasize linguistic priors at the expense of visual performance, leading to a pronounced modality bias. We propose ActionVLM, a vision-language aggregation framework that systematically mitigates modality bias in TAL. Our key insight is to preserve vision as the dominant signal while adaptively exploiting language only when beneficial. To this end, we introduce (i) a debiasing reweighting module that estimates the language advantage—the incremental benefit of language over vision-only predictions—and dynamically reweights language modality accordingly, and (ii) a residual aggregation strategy that treats language as a complementary refinement rather than the primary driver. This combination alleviates modality bias, reduces overconfidence from linguistic priors, and strengthens temporal reasoning. Experiments on THUMOS14 show that our model outperforms state-of-the-art by up to 3.2% mAP.
