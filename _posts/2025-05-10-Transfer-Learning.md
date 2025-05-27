---
title: Transfer Learning & Diffusion-Based Classification
date: 2025-05-10
categories: [Projects, Deep Learning]
tags: [pytorch, transfer-learning, diffusion, gradcam]
toc: true
---

## Part 1: Ants vs Bees - Transfer Learning

### Approach

I applied transfer learning using a pretrained ResNet-18 model. Two strategies were tested:

- Fine-tuning all layers
- Using it as a fixed feature extractor (only the final FC layer was trained)

Data augmentation was used to improve generalization.

### Implementation

- Dataset: [Hymenoptera Dataset](https://download.pytorch.org/tutorial/hymenoptera_data.zip)
- Preprocessing: Resize, Normalize, RandomHorizontalFlip
- Training:
  - Loss: CrossEntropyLoss
  - Optimizer: SGD with momentum
  - LR Scheduler: StepLR
  - Backbone: ResNet-18 (both fine-tuned and frozen)

```mermaid
flowchart LR
    A[Load Dataset] --> B[Preprocess]
    B --> C[Train/Val Split]
    C --> D{Mode}
    D -->|Fine-tune| E1[ResNet-18 (all layers)]
    D -->|Feature Extractor| E2[Freeze all except FC]
    E1 --> F[Train]
    E2 --> F
    F --> G[Evaluate]
    G --> H[Classification Report]
    G --> I[Confusion Matrix]
    G --> J[Grad-CAM]
    J --> K[Compare Modes]
```

### Results

#### Fine-tuned ResNet-18
- Val Accuracy: **94.12%**
- Train Accuracy: 100%, Loss: 0.0402

**Classification Report**

| Class | Precision | Recall | F1 | Support |
|-------|-----------|--------|----|---------|
| ants  | 0.92      | 0.96   | 0.94 | 70 |
| bees  | 0.94      | 0.96   | 0.95 | 83 |
| accuracy | — | — | 0.94 | 153 |
| macro avg | 0.94 | 0.94 | 0.94 | 153 |
| weighted avg | 0.94 | 0.94 | 0.94 | 153 |

**Confusion Matrix**

![](/assets/transfer-learning/part1_confusion_matrix_1.png)

**Grad-CAM Examples**

| Original | Grad-CAM |
|----------|----------|
| ![](/assets/transfer-learning/model_ft/ants_orig.jpg) | ![](/assets/transfer-learning/model_ft/ants_overlay.png) |
| ![](/assets/transfer-learning/model_ft/bees_orig.jpg) | ![](/assets/transfer-learning/model_ft/bees_overlay.png) |

---

#### Feature Extractor Mode
- Val Accuracy: **91.50%**
- Train Accuracy: 93.03%, Loss: 0.2079

**Classification Report**

| Class | Precision | Recall | F1 | Support |
|-------|-----------|--------|----|---------|
| ants  | 0.86      | 0.97   | 0.91 | 70 |
| bees  | 0.97      | 0.87   | 0.92 | 83 |
| accuracy | — | — | 0.92 | 153 |
| macro avg | 0.92 | 0.92 | 0.91 | 153 |
| weighted avg | 0.92 | 0.92 | 0.92 | 153 |

**Confusion Matrix**

![](/assets/transfer-learning/part1_confusion_matrix_2.png)

**Grad-CAM Examples**

| Image | Original | Grad-CAM |
|-------|----------|----------|
| Ant | ![](/assets/transfer-learning/model_conv/ants_orig.jpg) | ![](/assets/transfer-learning/model_conv/ants_overlay.png) |
| Bee | ![](/assets/transfer-learning/model_conv/bees_orig.jpg) | ![](/assets/transfer-learning/model_conv/bees_overlay.png) |

---

## Part 2: Real vs Fake Cats - Diffusion Classification

### Approach

- Real Images: 100 from [Kaggle Cat Dataset](https://www.kaggle.com/datasets/crawford/cat-dataset)
- Fake Images: 150 generated using `google/ddpm-cat-256` via Hugging Face
- Split: 100 fake (train), 50 fake (val)
- Task: Binary classification (real vs fake)

### Implementation

- Frameworks: PyTorch, torchvision, diffusers
- Dataset: `ImageFolder` format
- Model: ResNet-18 (binary classifier)
- Optimizer: Adam
- Epochs: 10

```mermaid
flowchart LR
    A[Load Real Cats - Kaggle] --> B1[Train: 100 | Val: 50]
    A2[Generate Fake Cats - DDIM] --> B2[Train: 100 | Val: 50]
    B1 --> C[Folder Structure Setup]
    B2 --> C
    C --> D[ImageFolder Loader]
    D --> E[ResNet-18 + FC(2)]
    E --> F[Train with Adam]
    F --> G[Evaluate]
    G --> H[Confusion Matrix]
    G --> I[Grad-CAM Visuals]
    I --> J[Compare Interpretations]
```

### Results

- Val Accuracy: **95.0%**
- Train Loss: **0.0054**

**Classification Report**

| Class | Precision | Recall | F1 | Support |
|-------|-----------|--------|----|---------|
| Real  | 0.96      | 0.94   | 0.95 | 50 |
| Fake  | 0.94      | 0.96   | 0.95 | 50 |
| accuracy | — | — | 0.95 | 100 |
| macro avg | 0.95 | 0.95 | 0.95 | 100 |
| weighted avg | 0.95 | 0.95 | 0.95 | 100 |

**Confusion Matrix**

![](/assets/transfer-learning/part2_confusion_matrix.png)

**Grad-CAM Examples**

| Type | Original | Grad-CAM |
|------|----------|----------|
| Fake | ![](/assets/transfer-learning/fakecat_orig.png) | ![](/assets/transfer-learning/fakecat_overlay.png) |
| Real | ![](/assets/transfer-learning/realcat_orig.png) | ![](/assets/transfer-learning/realcat_overlay.png) |

---

## Discussion & Conclusion

- Transfer learning performs well on small datasets.
- Fine-tuning yields better accuracy but takes longer to train.
- DDIM-generated images were visually realistic, but models could still distinguish them.
- Grad-CAM proved valuable for interpreting classifier behavior.

### Reproducibility

- Python 3.10
- Key Libraries: PyTorch, torchvision, diffusers, scikit-learn
- `requirements.txt` included in repo

---

**Author**: Aryan Jain  
**Course**: CS 614 Assignment – Transfer Learning & Synthetic Image Classification