---
title:          "CMDS-AD: Cross-Modal Dual-Stream Decoupling for Few-Shot Anomaly Detection"
date:           2026-06-18 22:59:10 +0800
selected:       true
pub:            "European Conference on Computer Vision (ECCV)"
pub_date:       "2026"
abstract: >-
  Few-shot anomaly detection remains challenging due to limited training data. Multi-modal anomaly detection (MAD) offers a viable solution by leveraging 3D geometric cues to enrich 2D RGB representations and compensate for this scarcity. However, existing MAD methods apply spatially uniform feature processing, conflating stable macroscopic structures with high-frequency localized defect signals and thereby exacerbating cross-modal misalignment and false-positive rates. To overcome this, we present CMDS-AD, a Cross-Modal Dual-Stream Anomaly Detection framework. A LoRA-guided diffusion model generates diverse RGB samples to mitigate extreme data scarcity. For 3D normal augmentation, we employ a pre-trained diffusion model as a normal estimator. This estimator inherently acts as a non-linear low-pass filter, directly extracting low-frequency normal representations from RGB inputs. This establishes an auxiliary estimated stream of purely low-frequency information, anchoring robust structural templates and assisting the uncompressed real stream to precisely isolate micro-defects. A Coordinate-Aware Hierarchical Feature Mapper adaptively aligns cross-modal semantics, while a multiplicative scoring mechanism filters modality-specific noise. Under the extreme 1-shot setting, CMDS-AD achieves absolute performance gains of <strong>5.7%</strong> (I-AUROC) and <strong>2.0%</strong> (AUPRO) on MVTec 3D-AD, alongside <strong>7.7%</strong> and <strong>5.6%</strong> improvements on EyeCandies, establishing a new state of the art.
cover:          /assets/images/covers/cover_eccv_cmds_ad.png
authors:
  - Junhao Cai
  - Deyu Zeng
  - Junhao Pang
  - Junyu Chen
  - Qiwei Liang
  - Xiaopin Zhong
  - Zongze Wu
links:
  Paper: https://arxiv.org/abs/2606.20300
  Code: https://github.com/Junhaocai27/CMDS-AD/tree/main
---
