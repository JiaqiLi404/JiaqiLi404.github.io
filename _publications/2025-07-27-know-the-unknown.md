---
title: "Know the Unknown: An Uncertainty-Sensitive Method for LLM Instruction Tuning"
collection: publications
permalink: /publication/know-the-unknown/
order: 7
show_on_homepage: true
excerpt: "A novel fine-tuning framework to automatically synthesize training data tailored for rejecting the questions exceeds the knowledge without compromising on other tasks."
date: 2025-07-27
venue: "Findings of the Association for Computational Linguistics: ACL"
authors: "Jiaqi Li, Yixuan Tang, Yi Yang"
paperurl: "https://aclanthology.org/2025.findings-acl.153"
codeurl: "https://github.com/JiaqiLi404/Know_the_Unknown"
google_scholar_citation_id: "ru2ps-0AAAAJ:L8Ckcad2t8MC"
citation: 'Li, J., Tang, Y., & Yang, Y. (2025). &quot;Know the Unknown: An Uncertainty-Sensitive Method for LLM Instruction Tuning.&quot; <i>Findings of the Association for Computational Linguistics</i>.'
---

Large language models (LLMs) demonstrate remarkable capabilities but face challenges from hallucinations, which typically arise from insufficient knowledge or context. While instructing LLMs to acknowledge knowledge limitations by responding with "I don't know" appears promising, we find that models consistently struggle with admitting knowledge gaps. This challenge may originate from current instruction datasets that emphasise answer generation over knowledge boundary awareness. To address this limitation, we introduce Uncertainty-and-Sensitivity-Aware (US-Tuning), a novel two-stage approach for contextual question answering (QA). The first stage enhances LLMs' ability to recognise their knowledge boundaries, while the second stage reinforces instruction adherence through carefully designed causal prompts. Our experimental results demonstrate that US-Tuning not only significantly reduces incorrect answers in contextual QA but also improves models' faithfulness to their parametric knowledge, mitigating hallucinations in general QA tasks. Our fine-tuned Llama2-7B model achieves up to a 34.7% improvement in handling out-of-knowledge questions and outperforms GPT-4 by 4.2% in overall performance.
