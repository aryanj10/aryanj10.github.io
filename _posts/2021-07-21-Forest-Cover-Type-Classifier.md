--- 
title: Forest Cover Type Classifier
date: 2021-07-21
categories: [Projects, Machine Learning, Classification] 
tags: [Machine Learning, Classification, XGBoost ,Decision Tree, Random Forest, KNN, Gradient Boosting, Python]
pin: true
---

[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/Forest-Cover-Type-Classification)
<br>


Forest cover in general refers to the relative (in percent) or sure (in square kilometres/square miles) land area that is covered by forests.
According to the Food and Agriculture Organization, a forest is defined as land spanning more than 0.5 hectares with trees higher than 5 meters and a canopy cover of more than 10 percent, or trees able to reach these thresholds in situ. It does not include land that is predominantly under agricultural or urban land use. Forest cover is one category of terrestrial land cover. Land cover is the observed physical features, both natural and manmade, that occupy the earth’s immediate surface ... forest cover is defined as 25% or greater canopy closure at the Landsat pixel scale (30-m × 30-m spatial resolution) for trees >5 m in height. 

## Objective

Build a machine learning model to predict the forest cover type.

## Code and Resources Used 
**Python Version:** 3.7  
**Packages:** pandas, numpy, sklearn, matplotlib, seaborn, xgboost, lightgbm  
**Data Source:** Blackard,Jock. (1998). Covertype. UCI Machine Learning Repository.  
**Data Link:** https://doi.org/10.24432/C50K5N  

## Data Dictionary

<b>Elevation</b>: Elevation in meters

<b>Aspect</b>: Aspect in degrees azimuth

<b>Slope</b>: Slope in degrees

<b>Horizontal_Distance_To_Hydrology</b>: Horz Dist to nearest surface water features

<b>Vertical_Distance_To_Hydrology</b>: Vert Dist to nearest surface water features

<b>Horizontal_Distance_To_Roadways</b>: Horz Dist to nearest roadway

<b>Hillshade_9am</b>: Hillshade index at 9am, summer solstice

<b>Hillshade_Noon</b>: Hillshade index at noon, summer soltice

<b>Hillshade_3pm</b>: Hillshade index at 3pm, summer solstice

<b>Horizontal_Distance_To_Fire_Points</b>: Horz Dist to nearest wildfire ignition points

<b>Wilderness_Area (4 binary columns)</b>: Wilderness area designation

<b>Soil_Type (40 binary columns)</b>: Soil Type designation

<b>Cover_Type (7 types)</b>: Forest Cover Type designation

## Model Building
Split the data into train and tests sets with a test size of 20%.  

I tried five different models and evaluated them using Accuracy. 

Models:
*	K Nearest Neigbour Classifier (K = 5)
*	Decision Tree Classifier
*	Gradient Boosting Classifier
*	Random Forest Classifier
*	XGBoost Classifier

## Model performance
The Random Forest model outperformed the other approaches on the test and validation set. 


|    | Model               | Accuracy |
|----|--------------------|---------|
| 0  | Random Forest Classifier                | 96.20%   |
| 1  | K Nearest Neigbour Classifier (K = 5)                | 95.11%  |
| 2  | Decision Tree Classifier                 | 93.33%  |
| 3  | XGBoost Classifier  | 92.46%   |
| 4  | Gradient Boosting Classifier                 | 81.64%  |