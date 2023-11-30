---
title: Medical Insurance Cost Estimator
date: 2021-07-22
categories: [Projects, Machine Learning, Regression] 
tags: [Machine Learning, Regression Analysis, Linear Regression, XGBoost ,Decision Tree, Random Forest,  Python]

---

[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/Medical-Insurance-Cost-Regression)
<br>


Health Insurance is medical coverage that helps you meet your medical expenses by offering financial assistance. Due to the high cost of hospitalization expenses, it is important to have a health insurance plan in place. In the current pandemic situation, health insurance plays a vital role in safeguarding your finances.

## Problem Statement & Objective
 

Imagine yourself working as a data scientist in an insurance company. Your manager asked you to come up with a data science solution to estimate the medical cost of an individual who has bought health insurance in the institution. Build a machine learning model to estimate the medical cost of an individual.

## Code and Resources Used 
**Python Version:** 3.7  
**Packages:** pandas, numpy, sklearn, matplotlib, seaborn, xgboost, lightgbm  
**Data Source:** Zach Stednick 
**Data Link:** https://github.com/stedy/Machine-Learning-with-R-datasets/blob/master/insurance.csv

## Data Dictionary
<b>age</b>: age of primary beneficiary. (if the age is given in decimal, consider it as the nearest integer, for example, if age = 19.1, it's nearest integer is 19, if age = 22.6, it's nearest integer is 23)

<b>sex</b>: insurance contractor gender, female, male

<b>bmi</b>: Body mass index, providing an understanding of body, weights that are relatively high or low relative to height,
objective index of body weight (kg / m ^ 2) using the ratio of height to weight, ideally 18.5 to 24.9

<b>children</b>: Number of children covered by health insurance / Number of dependents

<b>smoker</b>: Smoking

<b>region</b>: the beneficiary's residential area in the US, northeast, southeast, southwest, northwest.

<b>charges</b>: Individual medical costs billed by health insurance

## EDA
I looked at the distributions of the data and the value counts for the various categorical variables. Below are a few highlights.

Dataset Shape: (3630, 7) 
|   | Name     | dtypes  | Missing | Uniques |
|---|----------|---------|---------|---------|
| 0 | age      | float64 | 0       | 1589    |
| 1 | sex      | object  | 0       | 2       |
| 2 | bmi      | float64 | 0       | 2322    |
| 3 | smoker   | object  | 0       | 2       |
| 4 | region   | object  | 0       | 4       |
| 5 | children | int64   | 0       | 6       |
| 6 | charges  | float64 | 0       | 2951    |

![alt text](https://github.com/aryanj10/Medical-Insurance-Cost-Regression/blob/master/boxplot_charges_sex.png "Boxplot")
![alt text](https://github.com/aryanj10/Medical-Insurance-Cost-Regression/blob/master/boxplot_charges_smoker.png "Boxplot")

## Model Building
Split the data into train and tests sets with a test size of 20%.  

I tried five different models and evaluated them using Root Mean Squared Error. I choose RMSE because it provides a measure of the model's prediction accuracy in the same units as the target variable & also it is sensitive to outliers.  

Models:
*	Linear Regression
*	Decision Tree Regressor
*	Random Forest Regressor
*	XGBoost Regressor
*	LGBM Regressor

## Model performance
The Random Forest Regressor model outperformed the other approaches on the test and validation set. 


|    | Model               | RMSE |
|----|--------------------|---------|
| 0  | Random Forest Regressor                | 3331.72   |
| 1  | XGBoost Regressor  | 3597.40   |
| 2  | Decision Tree Regressor                 | 4453.63  |
| 3  | Linear Regression                 | 5668.19  |