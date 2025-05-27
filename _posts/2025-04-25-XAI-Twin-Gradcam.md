---
title: Explainable AI for Image Classification using Twin System and Grad-CAM
date: 2025-04-25
categories: [Projects, Explainable AI]
tags: [xai, gradcam, twin system, resnet18, diffusion]
toc: true
---

## Introduction

Explainable Artificial Intelligence (XAI) is essential for making ML models more interpretable and trustworthy, particularly in opaque or high-stakes domains. This project applied two complementary post-hoc explanation methods to a binary classification task , distinguishing between **real** and **AI-generated (fake)** cat images.

The goal:

1. Train a high-performing ResNet-18-based image classifier.
2. Explain its predictions using visual and example-based techniques.

---

## XAI Techniques Used

### Grad-CAM (Gradient-weighted Class Activation Mapping)

Grad-CAM generates heatmaps showing which regions of an image influence the model’s prediction. It works by backpropagating gradients to the final convolutional layer.

**Purpose:** Visual explanation of what the model is attending to.

[Grad-CAM Paper](https://arxiv.org/abs/1610.02391)

---

### Twin System (Embedding Similarity via Case-Based Reasoning)

This method explains predictions by retrieving visually similar images from the training set. Embeddings are extracted from the penultimate layer of ResNet-18, and cosine similarity is used to find the top matches.

**Purpose:** Intuitive justification by referencing known cases.

Inspired by: [This Looks Like That (2018)](https://arxiv.org/abs/1806.10574)

---

## Dataset

- Total Images: 300
  - 150 Real cat images from public datasets
  - 150 Fake cat images from [`google/ddpm-cat-256`](https://huggingface.co/google/ddpm-cat-256)
- Preprocessing: Resized to 224x224, normalized (mean=0.5, std=0.5)
- Split:
  - Train: 100 real + 100 fake
  - Validation: 50 real + 50 fake

---

## Model Architecture

- Base Model: Pretrained ResNet-18
- Final Layer: Modified for 2-class output
- Training Setup:
  - Optimizer: Adam (lr=1e-4)
  - Loss: CrossEntropyLoss
  - Epochs: 10
  - Batch Size: 32

Final Validation Accuracy: **91%**

---

## Evaluation Metrics

| Metric            | Value         |
|-------------------|---------------|
| Accuracy          | 91%           |
| Precision (Real)  | 0.94          |
| Recall (Real)     | 0.88          |
| Precision (Fake)  | 0.89          |
| Recall (Fake)     | 0.94          |
| F1 Score (Overall)| 0.91          |

![Confusion Matrix](/assets/XAI-Twin-Gradcam/confusion_matrix.png)

---

## Grad-CAM Results

Sample saliency visualizations show which parts of the input image the model focused on:

- ![](/assets/XAI-Twin-Gradcam/sample_fake_0.png)
- ![](/assets/XAI-Twin-Gradcam/sample_fake_1.png)
- ![](/assets/XAI-Twin-Gradcam/sample_fake_2.png)
- ![](/assets/XAI-Twin-Gradcam/sample_real_0.png)
- ![](/assets/XAI-Twin-Gradcam/sample_real_1.png)
- ![](/assets/XAI-Twin-Gradcam/sample_real_2.png)

Key insights: model focuses on fur texture, eyes, and facial shape for classification.

---

## Twin System Results

Shows most similar training samples (same predicted class) based on ResNet embeddings:

- ![](/assets/XAI-Twin-Gradcam/twin_vis_test6.png)
- ![](/assets/XAI-Twin-Gradcam/twin_vis_test17.png)
- ![](/assets/XAI-Twin-Gradcam/twin_vis_test13.png)
- ![](/assets/XAI-Twin-Gradcam/twin_vis_test18.png)
- ![](/assets/XAI-Twin-Gradcam/twin_vis_test57.png)
- ![](/assets/XAI-Twin-Gradcam/twin_vis_test77.png)

---

## Misclassification Analysis

| Error Type          | Sample IDs       |
|---------------------|------------------|
| Real → Fake (FN)    | 13, 18, 22, 34, 40, 44 |
| Fake → Real (FP)    | 57, 77, 80        |

Grad-CAM and Twin visualizations revealed blur and atypical poses as key contributors to misclassification.

---

## Conclusion

This project combined two explainability approaches to enhance understanding of model behavior.

| Method       | Explanation Type | Contribution                      |
|--------------|------------------|----------------------------------|
| Grad-CAM     | Visual (pixel)   | Shows where the model looks      |
| Twin System  | Example-based    | Shows why via similar cases      |

Multi-view XAI builds trust and insight into deep learning models.

---

## Future Work

- Add counterfactual examples (nearest from opposite class)
- Use CLIP embeddings for better semantic similarity
- Improve Twin system via ProtoPNet architecture

---

## ProtoPNet Attempt

- Backbone: ResNet-18
- Added 10 learnable prototypes per class
- Goal: Learn and match local image regions

**Validation Accuracy:** 50%  
**Problem:** Overfit to "real" class due to prototype imbalance

![Proto Confusion Matrix](/assets/XAI-Twin-Gradcam/protopnet_confmat.png)

**Learned Prototypes:**

![ProtoPNet Prototypes](/assets/XAI-Twin-Gradcam/protopnet_prototypes.png)

Although accuracy was low, the model successfully:

- Learned and projected prototypes
- Visualized most activating examples
- Demonstrated potential for local-region interpretability

---

## References

- [Grad-CAM (Selvaraju et al., 2017)](https://arxiv.org/abs/1610.02391)  
- [Denoising Diffusion Probabilistic Models (Ho et al., 2020)](https://arxiv.org/abs/2006.11239)  
- [TorchCAM Library](https://frgfm.github.io/torch-cam/)  
- [This Looks Like That (Chen et al., 2018)](https://arxiv.org/abs/1806.10574)  
- [Case-Based Interpretable DL for Mammography (Nature, 2021)](https://www.nature.com/articles/s42256-021-00400-0)
