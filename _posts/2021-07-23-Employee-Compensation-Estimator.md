---
title: Employee Compensation Estimator
date: 2021-07-23
categories: [Projects, Machine Learning, Regression]
tags: [Machine Learning, Regression Analysis, Linear Regression, XGBoost ,Decision Tree, Random Forest,  Python]
---

[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/Employee-Compensation-Regression)
<br>



Employee compensation involves all the ways your organization gives back to team members for their hard work. The obvious form of compensation is pay, whether it’s salaried, hourly, or sales-based. It’s important that how much an organization financially compensates an employee is fair, especially in terms of balancing the job role itself and the organization’s budget.

 

The salary or compensation to be paid to an employee of an organization depends on various factors like the organization group, department, job, salaries, etc. of the employee.

 

 

## Problem Statement
Imagine you are working as a data scientist in a big organization which has thousands of employees. The HR department is planning to provide some additional compensation to each working employee which needs to be calculated by looking at the profile of each employee and the benefits they are getting.

 

The HR department asks your help if you can use your data science and machine learning skills and calculate an estimated ‘Total Compensation’ for each employee.

## Objective
To build a machine learning model to estimate the total compensation to be provided to an employee.

## Code and Resources Used 
**Python Version:** 3.7  
**Packages:** pandas, numpy, sklearn, matplotlib, seaborn, xgboost, lightgbm  
**Data Source:** City and County of San Francisco  
**Data Link:** https://data.sfgov.org/City-Management-and-Ethics/Employee-Compensation/88g8-5mnd


## Data Dictionary

<b>OGC</b>: Organization Group Code - Org Group is a group of Departments. For example, the Public Protection Org Group includes departments such as the Police, Fire, Adult Probation, District Attorney, and Sheriff.


<b>OG</b>: Organization Group names


<b>DC</b>: Department Code - Departments are the primary organizational unit used by the City and County of San Francisco. Examples include Recreation and Parks, Public Works, and the Police Department.


<b>Dept</b>: Department name


<b>UC</b>: Union Code - Unions represent employees in collective bargaining agreements. A job belongs to one union, although some jobs are unrepresented (usually temporarily).


<b>Union</b>: Union names


<b>JF</b>: Job Family - Job Family combines similar Jobs into meaningful groups.


<b>Job</b>: Job name


<b>EI</b>: Employee Identifier


<b>Salaries</b>: Salary of the employee


<b>Overtime</b>: Amounts paid to City employees working in excess of 40 hours per week. 


<b>H/D</b>: Health/Dental - City-paid premiums to health and dental insurance plans covering City 
employees. To protect confidentiality as legally required, pro-rated citywide averages are presented in lieu of employee-specific health and dental benefits. 


<b>YT</b>: Year Type - Fiscal (July through June) or Calendar (January through December)


<b>Total_Compensation</b>: The final compensation i.e. the sum of all salaries and benefits paid to City employees.

## EDA
I looked at the distributions of the data and the value counts for the various categorical variables. Below are a few highlights.

Dataset Shape: (287836, 15)  


|    | Name               | dtypes  | Missing | Uniques |
|----|--------------------|---------|---------|---------|
| 0  | Year               | int64   | 0       | 4       |
| 1  | OGC                | int64   | 0       | 7       |
| 2  | OG                 | object  | 0       | 7       |
| 3  | DC                 | object  | 0       | 54      |
| 4  | Dept               | object  | 0       | 54      |
| 5  | UC                 | int64   | 0       | 789     |
| 6  | Union              | object  | 36      | 73      |
| 7  | JF                 | object  | 38      | 55      |
| 8  | Job                | object  | 0       | 1136    |
| 9  | EI                 | int64   | 0       | 52403   |
| 10 | Salaries           | int64   | 0       | 104444  |
| 11 | Overtime           | int64   | 0       | 33632   |
| 12 | H/D                | float64 | 0       | 113669  |
| 13 | YT                 | object  | 0       | 2       |
| 14 | Total_Compensation | int64   | 0       | 155965  |


![correlation](https://github.com/aryanj10/aryanj10.github.io/assets/64386731/e4adc58f-6e04-446f-8189-3a657ff9184e)
![compensation_by_JF](https://github.com/aryanj10/aryanj10.github.io/assets/64386731/cb77c2ed-1a09-44aa-907e-73d940730bb2)

## Data Pre-Processing
1. Dropped the columns Union, Dept & OG since the columns UC, DC & OGC already encode their values.
2. Removed the 'Job' column due to its extensive range of values. Utilizing the 'Job Family' column effectively groups and encapsulates these values, streamlining the dataset and minimizing redundancy for clearer representation.
3. Considering the vast number of categories in the JF, UC & DC columns, a streamlined approach was adopted. The top 10 most frequent values were selected, while the remaining categories were dropped. One-hot encoding was then applied solely to these top 10 values. This strategy significantly reduced dimensionality while retaining crucial categorical information for analysis and modeling.
4.  Implemented the Standard Scaler on the numerical columns.

## Model Building
Split the data into train and tests sets with a test size of 20%.  

I tried four different models and evaluated them using Root Mean Squared Error. I choose RMSE because it provides a measure of the model's prediction accuracy in the same units as the target variable & also it is sensitive to outliers.  

Models:
*	Linear Regression
*	Decision Tree Regressor
*	Random Forest Regressor
*	XGBoost Regressor

## Model performance
The XGBoost Regressor model outperformed the other approaches on the test and validation set. 


|    | Model               | RMSE |
|----|--------------------|---------|
| 0  | XGBoost Regressor  | 6370.08   |
| 1  | Random Forest Regressor                | 6508.09   |
| 2  | Linear Regression                 | 7406.97  |
| 3  | Decision Tree Regressor                 | 8411.68  |
