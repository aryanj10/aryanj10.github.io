---
title: Exploring Income Patterns- A Comprehensive Analysis of the UCI Adult Census Dataset
date: 2023-12-12
categories: [Projects, Data Analysis, Tableau] 
tags: [Data Analysis, Exploratory Data Analysis, Tableau,  Python]
---

### Abstract
This project explores income patterns using the UCI Adult Census Dataset from 1994. This analysis aims to uncover intricate
relationships between various demographic factors as well as looks at the impact that hours worked have on income bracket
and marital status.

## 1. Introduction

The UCI Adult dataset, also known as the "Census Income"
dataset, is a collection of data aimed at predicting whether an
individual's income exceeds $50,000 per year based on census
data. This dataset was donated to the UCI Machine Learning
Repository on April 30, 1996, and has been a significant
resource for research in social science, particularly in the field
of machine learning.

### 1.1. Data Characteristics

**• Multivariate Nature:** The dataset is multivariate, which includes multiple variables or features for analysis.

**• Subject Area:** It falls under the domain of social science.

**• Associated Tasks:** Primarily used for classification tasks.

**• Feature Types:** Includes both categorical and integer data types.

**• Number of Instances:** Contains 48,842 instances or records.

**• Number of Features:** Comprises 14 features

### 1.2. Datapoints Overview
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

## 2. Project Question Goals

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

## 3. Tools Used

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

## 4. Data Visualization & Analysis

### 4.1. What is income bracket distribution across different demographics like age, gender, education level, and occupation?
<img width="689" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/1d758010-5dd1-429a-8526-80e7d10f4f3d">

_Figure 1 - Break down of respondents by income bracket_


As displayed in Figure 1, more than 75% of the dataset is
individuals with income below 50K (<=50K) & less than 25%
of the dataset is individuals with income above 50K (>50K).
This might be due to the average average income in 1994
stood at $26,939 according to the Bureau of Labor Statistics.

**Note:** From here onwards the Income below 50K will be
denoted as <=50K & income above 50K will be denoted as >50K.

<img width="939" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/fe2be6a7-01c6-4e1a-9a3a-4eae687596e5">

_Figure 2 - Distribution by age_


The distribution plot in Figure 2 clearly illustrates a significant concentration of individuals aged 18 to 25 with
incomes <= $50K. This trend reflects the early stage of their careers. However, as individuals progress in age from 25 to 50, there's an exponential rise in the count of those earning >$50K. This shift likely corresponds to increased experience and career advancement during this period.

<img width="415" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/b7189086-dbb8-4111-8b01-687a68ee73c3">

_Figure 3- Distribution by sex_

The bar graph in Figure 3 reveals a notable discrepancy: there were approximately six times as many males earning >$50K compared to females in the same income bracket. This disparity might be due to the gender biases & the glass ceiling prevalent during the 1990s.

<img width="783" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/2c50b676-7612-49ac-9844-cc863150d2b4">

_Figure 4 - Income by highest level of education_


Figure 4 shows a correlation between education level and income level as education level increases, and the count of individuals with income >50K also increases. For example, individuals with the highest level of education as Professional school or Doctorate have more than 90% of individuals in that group who have income >50K. This correlation might be due to the skill sets, expertise, and specialized knowledge that accompany higher levels of education. Individuals with advanced education often qualify for professions that command higher salaries, thus leading to an increase in the number of individuals earning above the $50K. 

<img width="870" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/e976c66b-6972-4cbb-a329-608b82fc5982">

_Figure 5 - Income by Race_


Figure 5 reveals a notable discrepancy: there were approximately 23 times as many whites earning >$50K compared to blacks in the same income bracket. This disparity might be due to the racial biases & the glass ceiling prevalent during the 1990s.

### 4.2. Does the number of weekly work hours impact income significantly?

<img width="592" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/d41a9151-e1bd-4cad-8404-832843f57835">

_Figure 6 - Income by Occupation_


We first sought to explore the income distribution when it
came to different occupations. Figure 6 illustrates skill based
or managerial occupations have higher numbers of individuals
with income >50K as observed in occupations like Craft
Repair, Sales & Prof - Specialty. This might be due to the
higher compensation associated with roles that require
specialized skills, managerial responsibilities, or expertise
within these occupational categories. Occupations demanding
specific technical prowess or positions involving managerial
duties often command higher salaries, resulting in a greater
number of individuals within these categories earning above
$50K.

<img width="349" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/441687bb-0169-4e54-b088-a6e617e3e489">


_Figure 7 - Avg weekly hours by income_

Figure 7 demonstrates a direct relationship between the
number of hours worked per week and income levels: as the
weekly hours increase, so does the income. Moreover,
ignoring the outliers, individuals who worked more than or
equal to 40 hours had income >50K. This is due to the
structure of many job roles and labor practices. Full-time
positions, typically requiring
40 hours per week or more,
often come with higher wages
or salaries.

### 4.3. Is there a correlation between hours worked, marital status, and income bracket?

<img width="757" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/ea8272fe-ecf3-42d7-a9dd-2ed752a9379e">

_Figure 8 - Avg weekly hours by marital status and income_


Figure 8 & 9 suggests a correlation between marital
status and average hours worked. Those married,
especially in a civilian (CIV) capacity or with an armed forces (AF) spouse, tend to
work longer hours on average than other marital statuses. This might be due to family responsibilities or shared financial
goals. What's particularly interesting is the behavior of
individuals who've never married. Despite their younger age,
they exhibit a lower average hour worked compared to
other marital statuses. Understanding the rationale behind this
could shed light on diverse priorities, career ambitions, or a
distinct approach to work-life balance among this
demographic.

<img width="386" alt="image" src="https://github.com/aryanj10/aryanj10.github.io/assets/64386731/f7a6ea87-c4ba-4ab6-a576-559c0527f44f">

_Figure 9_

Figure 8 reaffirms the findings of motivating question 2, that
higher the number of hours worked weekly, higher the income
level. Across the marital statuses there is a clear gap in
average hours worked weekly between the income groups.
What's particularly interesting is the consistent trend observed
across all groups: individuals surpassing the average hours
worked within their respective groups tend to have an income >50K.

This striking consistency underscores a significant pattern:
those who dedicate more hours to work than their peers within
the same marital status consistently tend to earn above 50K annually. This suggests a strong correlation between higher
average work hours and higher income across the board.

## 5. Results


Based on this analysis, we extract the following key points:

1. As the age increases the income also increases until
the age 50

2. Males tend to earn more than their female
counterparts.

3. Whites earn more than any other race

4. Higher the education level, higher the income
   
5. Individuals with specialized skills, managerial, or
expertise within a specific field have higher income.

6. There is a strong correlation between average hours
worked weekly and income.

7. Individuals who have never married, despite their
young age & start of their career tend to work for less
number of hours weekly.

## 6. Discussion

One additional note that should be made about our findings is
that they show a potential skew in the UCI Adult data we are
working with. Our dataset has far more data points for
younger white males than other demographic groups. While
this may not fully reflect US demographics, it is also a
potential source for skewing within the data and, therefore, our
findings.

## 7. Conclusion

The UCI Adult dataset, a foundational resource in machine
learning, predicts income levels exceeding $50,000 annually
based on demographic and employment data. A recent
analysis by Ding, Hardt, Miller, and Schmidt at NeurIPS 2021
highlighted limitations in the dataset, particularly the potential
skewing effect of the binary income threshold on fairness
analyses for specific demographic groups. Their study
underscores the significant impact of income thresholds on
fairness criteria violations, urging a reconsideration for a more
comprehensive portrayal of income distributions.
It is this background context through which we tried to answer
multiple questions about our data. As discussed in the results section, we found several factors that seemed to impact
income bracket distribution, such as age, gender, education
level, occupation, number of hours worked, and marital status.
While no definitive conclusions can be made, especially given
the age and context surrounding the dataset, we still find that
these visualizations provide meaningful and exciting
discoveries.

Looking ahead, future studies could delve deeper into the
nuanced interplay between demographic factors and income
bracket distributions. Exploring these factors in conjunction
with other societal dynamics may unravel deeper insights into
income disparities and their relationship with socio-economic
variables. Additionally, considering the evolving societal
landscape, investigating temporal shifts in these relationships
across different eras or within diverse cultural contexts could
provide a more comprehensive understanding. Furthermore,
employing advanced analytical methodologies and machine
learning models may offer enhanced predictive capabilities
while addressing fairness concerns associated with income
threshold categorizations.
