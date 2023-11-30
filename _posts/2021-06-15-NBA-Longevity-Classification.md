--- 
title: NBA Longevity Classification
date: 2021-06-15
categories: [Projects, Machine Learning, Classification] 
tags: [Machine Learning, Classification, Logistic Regression, XGBoost , LGBM, Python]
pin: true
---

[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/NBA-Longevity-Classification)
<br>



The National Basketball Association (NBA) is a professional basketball league in North America. The league is composed of 30 teams (29 in the United States and 1 in Canada) and is one of the four major professional sports leagues in the United States and Canada. It is the premier men's professional basketball league in the world.


## Problem Statement

Career longevity is dependent on various factors for any players in all the games and so for NBA Rookies. The factors like games played, count of games played, and other statistics of the player during the game.



## Objective

Using machine learning techniques determine if a player’s career will flourish or not.

## Code and Resources Used 
**Python Version:** 3.7  
**Packages:** pandas, numpy, sklearn, matplotlib, seaborn, xgboost, lightgbm  
**Data Source:** Data World
**Data Link:** https://data.world/exercises/logistic-regression-exercise-1

## Data Dictionary

 
The values for given attributes are average over all the games played by players

<b>GP</b>: Games Played

<b>MIN</b>:  Minutes Played

<b>PTS</b>: Number of points per game

<b>FGM</b>: Field goals made

<b>FGA</b>: Field goals attempt

<b>FG%</b>: field goals percent

<b>3P Made</b>: 3 point made

<b>3PA</b>: 3 points attempt

<b>3P%</b>: 3 point percent

<b>FTM</b>: Free throw made

<b>FTA</b>: Free throw attempts

<b>FT%</b>: Free throw percent

<b>OREB</b>: Offensive rebounds

<b>DREB</b>: Defensive rebounds

<b>REB</b>: Rebounds

<b>AST</b>: Assists

<b>STL</b>: Steals

<b>BLK</b>: Blocks

<b>TOV</b>: Turnovers

<b>Target</b>: 0 if career years played < 5, 1 if career years played >= 5

## EDA
I looked at the distributions of the data. Below are a few highlights.

Dataset Shape: (1101, 20)


|    | Name    | dtypes  | Missing | Uniques |
|----|---------|---------|---------|---------|
| 0  | GP      | float64 | 0       | 274     |
| 1  | MIN     | float64 | 0       | 514     |
| 2  | PTS     | float64 | 0       | 392     |
| 3  | FGM     | float64 | 0       | 289     |
| 4  | FGA     | float64 | 0       | 366     |
| 5  | FG%     | float64 | 0       | 480     |
| 6  | 3P Made | float64 | 0       | 132     |
| 7  | 3PA     | float64 | 0       | 216     |
| 8  | 3P%     | float64 | 0       | 349     |
| 9  | FTM     | float64 | 0       | 258     |
| 10 | FTA     | float64 | 0       | 285     |
| 11 | FT%     | float64 | 0       | 554     |
| 12 | OREB    | float64 | 0       | 243     |
| 13 | DREB    | float64 | 0       | 281     |
| 14 | REB     | float64 | 0       | 306     |
| 15 | AST     | float64 | 0       | 279     |
| 16 | STL     | float64 | 0       | 219     |
| 17 | BLK     | float64 | 0       | 201     |
| 18 | TOV     | float64 | 0       | 241     |
| 19 | Target  | int64   | 0       | 2       |


<img width="568" alt="image" src="https://github.com/aryanj10/NBA-Longevity-Classification/blob/master/boxplot_game_played_output.png"> <br>
![alt text](https://github.com/aryanj10/NBA-Longevity-Classification/blob/master/boxplot_mins_output.png "Boxplot")
![alt text](https://github.com/aryanj10/NBA-Longevity-Classification/blob/master/correlation_matrix.png "Correlation Matrix")

## Data Pre-Processing
1. Implemented the Quantile Transformer.

## Model Building
Split the data into train and tests sets with a test size of 20%.  

I tried three different models and evaluated them using Accuracy. 

Models:
*	Logistic Regression
*	XGBoost Classifier
*	Light Gradient Boosting Classifier

## Model performance
The Light Gradient Boosting model outperformed the other approaches on the test and validation set. 


|    | Model               | Accuracy |
|----|--------------------|---------|
| 0  | LGBM Classifier                 | 74.66%  |
| 1  | XGBoost Classifier  | 71.04%   |
| 2  | Logistic Regression                | 70.58%  |
