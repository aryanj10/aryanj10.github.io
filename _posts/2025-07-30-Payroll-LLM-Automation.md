---
title: PayrollPilot: LLM Parsing + Accountant’s World Automation
date: 2025-04-30
categories: [LLM Automation, Payroll AI]
tags: [Gemini, Playwright, Streamlit, automation, csv, accountant-world, llm, payroll, ai]
pin: true
toc: true
---

# 💼 Payroll LLM Extractor & Automation System

[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/Payroll-LLM-Extractor)
[![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)](https://www.python.org/)
[![Streamlit App](https://img.shields.io/badge/Streamlit-App-red?logo=streamlit)](https://streamlit.io)
[![Gemini API](https://img.shields.io/badge/LLM-Gemini-lightgrey?logo=google)](https://deepmind.google/technologies/gemini/)
[![Playwright](https://img.shields.io/badge/Automation-Playwright-green?logo=microsoft)](https://playwright.dev/)
[![Status](https://img.shields.io/badge/Live%20Payroll-Production%20Ready-brightgreen)]()
[![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)](https://opensource.org/licenses/MIT)

This repository contains a **production-grade payroll automation system** that extracts, parses, and uploads payroll data using **LLMs (Google Gemini)** and **browser automation (Playwright)**. Designed to process 1,000+ semi-structured files and auto-fill payroll templates with high accuracy.


---

## 🚀 Key Features

- 🔍 **LLM-powered Parsing**: Converts messy payroll reports (PDF, RTF, Excel) into structured JSON.
- 📄 **CSV Auto-Fill**: Populates Accountant's World-compatible CSV templates per client.
- 🤖 **Portal Automation**: Automates CSV uploads and tax payments to **Accountant’s World (AW)**.
- 🧠 **Smart Field Detection**: Dynamically maps earnings, deductions, and tax categories.
- 📂 **Batch Payroll Support**: Processes multiple client folders in one click.
- 📊 **Streamlit Interface**: Simple UI to review extracted data and approve uploads.

---

## 📌 Use Cases
Bookkeeping firms handling 50+ client payrolls

Automation-first accountants aiming to cut labor costs

LLM startups showcasing GenAI for operations

Any business tired of manual AW uploads

---

## 🧠 Tech Stack

- **Python 3.10+**
- **Streamlit** – UI
- **Playwright** – Headless browser automation
- **Google Gemini API** – Large Language Model parsing
- **pandas, PyMuPDF, python-docx, striprtf** – Data + doc processing

---


## 🧰 Project Structure
```protobuf
Payroll-LLM-Extractor/
│
├── streamlit_app.py # Main Streamlit app
├── upload_runner.py # Automates payroll CSV uploads to AW
├── upload_tax.py # Automates tax form filling on AW
│
├── src/
│ ├── send_chunk_llm.py # Gemini API integration
│ ├── excel_raw_text_chunk.py # Raw text extraction from Excel
│ └── populate_csv_template.py # Populates CSV template
│
├── utils/
│ ├── gemni_parser.py # Gemini prompt + parsing logic
│ ├── extract_rtf_pdf.py # PDF/RTF chunker
│ ├── label_analysis.py # Detects suspicious earnings
│ ├── populate_csv.py # Final CSV output generator
│
├── agent_project/
│ ├── agents.py # Playwright login + upload logic
│ └── opt.py # Browser headless setup
│
├── misc/ # Experimental scripts + prompts
├── requirements.txt
└── README.md
```
---
## 🧪 How It Works

1. Upload a client’s payroll file (PDF, RTF, Excel).
2. Extracts text chunks → `src/excel_raw_text_chunk.py`
3. Sends chunks to Gemini → `src/send_chunk_llm.py`
4. Post-processes earnings/deductions → `utils/label_analysis.py`
5. Auto-fills CSV using template → `src/populate_csv_template.py`
6. Uploads CSV and fills taxes on AW → `upload_runner.py`, `upload_tax.py`

---



## ▶️ Streamlit Demo

```bash
pip install -r requirements.txt
streamlit run streamlit_app.py

```

Make sure you have a .env file with your Gemini API key:
```bash
GEMINI_API_KEY=your_gemini_key_here
```
AW credentials are managed securely within the agent_project/ automation scripts or set manually before automation.

---
💡 Created for a live payroll system in NY: 1,000+ payrolls processed, $20K+ labor saved, $2K+ new revenue.

---

## 🧭 Future Enhancements
✅ SharePoint sync for final reports

✅ AI-driven field mapping & validation

✅ Full audit trail + override logging

✅ Email notifications for payroll events

## ⚖️ License
MIT — free to use and modify with credit.