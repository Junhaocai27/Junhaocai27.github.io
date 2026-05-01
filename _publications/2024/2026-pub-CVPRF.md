---
title:          "ForgeDreamer: Industrial Text-to-3D Generation with Multi-Expert LoRA and Cross-View Hypergraph"
date:           2026-02-21 00:08:00 +0800
selected:       true  # Set to true to display in Selected Publications
pub:            "IEEE Conference on Computer Vision and Pattern Recognition (CVPR Findings)"
pub_date:       "2026"
abstract: >-
  Current text-to-3D generation methods excel in natural scenes but struggle with industrial applications due to two critical limitations: domain adaptation challenges, where conventional LoRA fusion causes knowledge interference across categories, and geometric reasoning deficiencies, where pairwise consistency constraints fail to capture higher-order structural dependencies essential for precision manufacturing. We propose a novel framework named ForgeDreamer that addresses both challenges through two key innovations. First, we introduce a Multi-Expert LoRA Ensemble mechanism that consolidates multiple category-specific LoRA models into a unified representation, achieving superior cross-category generalization while eliminating knowledge interference. Second, building on enhanced semantic understanding, we develop a Cross-View Hypergraph Geometric Enhancement approach that captures structural dependencies spanning multiple viewpoints simultaneously. These components work synergistically: improved semantic understanding enables more effective geometric reasoning, while hypergraph modeling ensures manufacturing-level consistency. Extensive experiments on a custom industrial dataset demonstrate superior semantic generalization and enhanced geometric fidelity compared to state-of-the-art approaches. Our code and data are provided in the supplementary material attached in the appendix for review purposes.
cover:          /assets/images/covers/cover_cvprf.png  # Optional cover image
authors:
  - Junhao Cai*
  - Deyu Zeng*
  - Junhao Pang, Lini Li, Zongze Wu, Xiaopin Zhong
links:
  Paper: http://arxiv.org/abs/2603.09266
  Code: https://github.com/Junhaocai27/ForgeDreamer  # Optional
  Project: https://forgedreamer.github.io/  # Optional
---

<!-- ---
title:          "你的论文标题"
date:           2024-05-12 00:01:00 +0800
selected:       true  # 设置为true才会在Selected Publications中显示
pub:            "会议/期刊名称"
pub_date:       "2024"
abstract: >-
  论文的简短摘要（1-2句话）
cover:          /assets/images/covers/cover1.jpg  # 可选的封面图片
authors:
  - 你的名字*  # *表示共同第一作者
  - 合作者姓名
  - 其他作者
links:
  Paper: https://论文链接
  Code: https://代码链接  # 可选
  Project: https://项目链接  # 可选
--- -->
