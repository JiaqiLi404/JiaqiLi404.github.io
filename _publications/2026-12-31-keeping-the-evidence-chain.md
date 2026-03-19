---
title: "Keeping the Evidence Chain: Semantic Evidence Allocation for Training-Free Token Pruning in Video Temporal Grounding"
collection: publications
permalink: /publication/keeping-the-evidence-chain/
order: 8
show_on_homepage: true
excerpt: "SemVID is a training-free VTG token pruning framework that preserves both boundary-critical evidence and cross-frame reasoning."
date: 2026-12-31
venue: "Under review"
authors: "Jiaqi Li, Shuntian Zheng, Yixian Shen, Jia-Hong Huang, Xiaoman Lu, Minzhe Ni, Yu Guan"
paperurl: "https://arxiv.org/pdf/2603.05663"
codeurl: "https://github.com/JiaqiLi404/SemVID"
citation: 'Li, J., Zheng, S., Shen, Y., et al. (2026). &quot;Keeping the Evidence Chain: Semantic Evidence Allocation for Training-Free Token Pruning in Video Temporal Grounding.&quot; Under review.'
---

Video Temporal Grounding (VTG) localizes the temporal boundaries of a query-relevant moment in long, untrimmed videos, making video-language-model pipelines prohibitively expensive. While recent training-free visual token pruning has shown success in video question answering, naively applying these objectives to VTG often causes drastic degradation, as VTG crucially depends on boundary-sensitive evidence and cross-frame reasoning chains. We therefore identify two VTG-specific pruning principles: Evidence Retention (ER), which keeps query-critical patches especially around event boundaries, and Connectivity Strength (CS), which preserves token-level cross-frame connectivity for long-range evidence aggregation. Building on these insights, we propose SemVID, a training-free pruning framework that constructs a compact yet coherent token subset with complementary semantic roles. SemVID first allocates per-frame token budgets by balancing query relevance and inter-frame variation to avoid over-pruned or token-empty segments, and then selects three types of tokens: object tokens for diverse query-critical evidence, motion tokens to capture meaningful transitions and serve as cross-frame relays, and a small set of context tokens for scene continuity. Extensive experiments on VTG benchmarks show that SemVID achieves a strong accuracy-efficiency trade-off, retaining up to 95.4% mIoU with only 12.5% visual tokens and delivering up to a 5.8× prefill speedup, consistently outperforming prior methods under the same budgets.