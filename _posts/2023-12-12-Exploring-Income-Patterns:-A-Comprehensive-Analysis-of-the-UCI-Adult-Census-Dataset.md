---
title: Exploring Income Patterns: A Comprehensive Analysis of the UCI Adult Census Dataset
date: 2023-12-12
categories: [Projects, Data Analysis, Tableau] 
tags: [Data Analysis, Exploratory Data Analysis, Tableau,  Python]
---

### Abstract
This project explores income patterns using the UCI Adult Census Dataset from 1994. This analysis aims to uncover intricate
relationships between various demographic factors as well as looks at the impact that hours worked have on income bracket
and marital status.

## 1 Introduction

The UCI Adult dataset, also known as the "Census Income"
dataset, is a collection of data aimed at predicting whether an
individual's income exceeds $50,000 per year based on census
data. This dataset was donated to the UCI Machine Learning
Repository on April 30, 1996, and has been a significant
resource for research in social science, particularly in the field
of machine learning.

### 1.1 Data Characteristics

**• Multivariate Nature:** The dataset is multivariate, which includes multiple variables or features for analysis.

**• Subject Area:** It falls under the domain of social science.

**• Associated Tasks:** Primarily used for classification tasks.

**• Feature Types:** Includes both categorical and integer data types.

**• Number of Instances:** Contains 48,842 instances or records.

**• Number of Features:** Comprises 14 features

### 1.2 Datapoints Overview
The dataset includes various demographic and employmentrelated features. Some of the key features are:

**• Age:** A continuous variable representing the individual's age.

**• Workclass:** Categorical variable indicating the employment status (e.g., private, federal government,etc.)

**Education:** Includes both a categorical variable indicating the level of education (e.g., Bachelors, HS-grad) and a continuous variable representing the number of years of education.

**Marital Status:** Categorical variable indicating marital status.

**Occupation:** Categorical variable describing the individual's occupation.

**Relationship:** Categorical variable indicating family relationship status.

**Race:** Categorical variable indicating race.

**Sex:** Binary variable indicating gender.

**Capital Gain and Loss:** Continuous variables representing income from investments.

**Hours per Week:** Continuous variable indicating the number of hours worked per week.

**Native Country:** Categorical variable indicating the country of origin

## 2 Project Question Goals

**What is income bracket distribution across
different demographics like age, gender, education
level, and occupation?**

This question seeks to understand how income levels are distributed among
different demographic groups based on age, gender,
education level, and occupation. The motivation here
is to uncover patterns or disparities in income
distribution, which could be critical for economists.
Analyzing these factors can help understand
economic inequality dynamics and various
demographic factors' role in income determination.

**Does the number of work hours per week impact
income significantly?**

This question explores the
relationship between labor input and financial
compensation by exploring whether the number of
work hours per week significantly impacts income.
This is important for understanding market dynamics,
especially the valuation of labor in terms of hours
worked. It can provide insights into whether working
longer hours correlates with higher income and might
reveal cases where this isn’t true.

**Is there a correlation between hours worked,
marital status, and income bracket?**

This question combines three variables to explore their
interrelationships. The motivation here is to
investigate how personal life and professional life
interplay. This can offer insights into a work-life
balance and its economic implications.

Overall, answering these questions using the dataset can
provide a deeper understanding of socio-economic patterns
and their implications, which is essential for developing
targeted policies, business strategies, and further academic
research.

## 3 Tools Used

**Tableau**

An intuitive and versatile tool for data visualization,
was the primary tool used to conduct this visual analysis. The
initial stage of the project involved a comprehensive data
preprocessing and refinement phase dedicated to ensuring the
dataset's integrity and accuracy. 

**Python** 

We used python for tasks such as managing missing data and standardizing data formats,
establishing a solid foundation for seamless visualization
within Tableau's environment. This groundwork enabled the
subsequent phase of detailed exploration and visualization
creation.

## 4 Data Visualization & Analysis

### 4.1 What is income bracket distribution across different demographics like age, gender, education level, and occupation?

As displayed in Figure 1, more than 75% of the dataset is
individuals with income below 50K (<=50K) & less than 25%
of the dataset is individuals with income above 50K (>50K).
This might be due to the average average income in 1994
stood at $26,939 according to the Bureau of Labor Statistics.
Note: From here onwards the Income below 50K will be
denoted as <=50K & income above 50K will be denoted as >50K.

The distribution plot in Figure 2 clearly illustrates a significant concentration of individuals aged 18 to 25 with
incomes <= $50K. This trend reflects the early stage of their careers. However, as individuals progress in age from 25 to 50, there's an exponential rise in the count of those earning >$50K. This shift likely corresponds to increased experience and career advancement during this period.

The bar graph in Figure 3 reveals a notable discrepancy: there were approximately six times as many males earning >$50K compared to females in the same income bracket. This disparity might be due to the gender biases & the glass ceiling prevalent during the 1990s.

Figure 4 shows a correlation between education level and income level as education level increases, and the count of individuals with income >50K also increases. For example, individuals with the highest level of education as Professional school or Doctorate have more than 90% of individuals in that group who have income >50K. This correlation might be due to the skill sets, expertise, and specialized knowledge that accompany higher levels of education. Individuals with advanced education often qualify for professions that command higher salaries, thus leading to an increase in the number of individuals earning above the $50K. 

Figure 5 reveals a notable discrepancy: there were approximately 23 times as many whites earning >$50K compared to blacks in the same income bracket. This disparity might be due to the racial biases & the glass ceiling prevalent during the 1990s.
