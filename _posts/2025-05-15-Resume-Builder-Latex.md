---
title: Resume Builder (LaTeX + Streamlit + JSON)
date: 2025-05-15
categories: [Projects, Streamlit]
tags: [resume, latex, streamlit, pdf, json, docker]
toc: true
---


[![Open in Github Page](https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white)](https://github.com/aryanj10/resume-editor-generate)

This project is a customizable resume builder where you can:

- 📝 Edit your resume content in a JSON file (via a Streamlit UI)  
- 📄 Automatically generate a PDF resume using a LaTeX template  
- 🔁 See a live preview and download your resume instantly

---

## Preview

![Resume Builder Demo](/assets/resume-build/demo.gif)

---

## 🚫 Deployment Note
This project is not deployed on a free platform because it requires LaTeX for PDF generation, which significantly increases the Docker image size. Most free-tier services (like Streamlit Cloud or Render) impose limits on memory and container size, making it impractical to host.

However, you can easily run it locally or in the cloud using Docker.

## 🐳 Run with Docker

### 1. Build the Docker Image
```bash
docker build -t resume-builder .
```

### 2. Run the Contanier
```bash
docker run -p 8080:8080 resume-builder
```

### 3. Open on Browser
Then open http://localhost:8080 in your browser to use the app locally.

---

## 🚀 Features

- JSON-based resume structure (easy to edit, reuse, or version-control)
- Streamlit interface with side-by-side:
  - JSON editor (with syntax highlighting)
  - PDF preview
- LaTeX-powered formatting for professional typography
- Download-ready resume generation

---

## 🖼 Output Format

The PDF resume generated will exactly follow the structure and formatting defined in:

### `template/resume_template.tex`

```latex
\documentclass[10pt]{article}
\usepackage[utf8]{inputenc}
\usepackage[top=0.5in, bottom=0.5in, left=0.5in, right=0.5in]{geometry}
\pagenumbering{gobble}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{hyperref}
\usepackage[dvipsnames]{xcolor}
\definecolor{darkblue}{HTML}{0013FF}
\usepackage{setspace}
\setstretch{1.1} 

\hypersetup{
    colorlinks=true,
    urlcolor=darkblue
}

\titleformat{\section}{\large\bfseries}{}{0em}{}[\titlerule]

\begin{document}

\begin{center}
    \textbf{\fontsize{18}{18}\selectfont ((( name )))} \\
    ((( phone ))) \texttt{|} \href{mailto:((( email )))}{((( email )))} \texttt{|}
    \href{((( github )))}{((( github )))} \texttt{|}  
    \href{((( linkedin )))}{((( linkedin )))}
\end{center}

\vspace{-0.7cm}
\section*{EDUCATION} 
\vspace{-0.2cm} 
((* for edu in education *))
\noindent 
\textbf{((( edu.degree )))} \hfill \textbf{((( edu.date )))} \\
\textit{((( edu.school )))} \texttt{|} \textit{((( edu.location )))} ((* if edu.gpa *))\hfill GPA: ((( edu.gpa )))((* endif *))
((* endfor *))

\vspace{-0.4cm} 
\section*{TECHNICAL SKILLS} 
\vspace{-0.2cm}
\noindent
\textbf{Certifications:} ((( skills.Certifications | join(", ") ))) \\
\textbf{Programming:} ((( skills.Programming | join(", ") ))) \\
\textbf{ML and AI:} ((( skills.ML | join(", ") ))) \\
\textbf{Cloud and DevOps:} ((( skills.Cloud | join(", ") ))) \\
\textbf{Visualization and APIs:} ((( skills.Visualization | join(", ") )))

\vspace{-0.4cm}
\section*{WORK EXPERIENCE}
((* for job in work_experience *))
\vspace{-0.2cm}
\noindent
\textbf{((( job.title ))) \texttt{|} ((( job.company ))) \texttt{|} ((( job.location )))} \hfill \textbf{((( job.duration )))} 
\vspace{-0.15cm}
\begin{itemize}[leftmargin=0.5cm, itemsep=0pt]
((* for bullet in job.bullets *))
    \item ((( bullet | replace('%', '\\%') )))
((* endfor *))
\end{itemize}
((* endfor *))

\vspace{-0.4cm}
\section*{PROJECTS}
((* for project in projects *))
\vspace{-0.1cm}
\noindent
\textbf{((( project.title ))) \texttt{|} ((( project.org )))} \hfill \textbf{((( project.date )))} \\
\vspace{-0.4cm}
\begin{itemize}[leftmargin=0.6cm, itemsep=-0.1cm, topsep=0cm]
((* for bullet in project.bullets *))
    \item ((( bullet | replace('%', '\\%') )))
((* endfor *))
\end{itemize}
((* endfor *))

\vspace{-0.4cm}
\section*{LEADERSHIP and RESEARCH}
\vspace{-0.1cm}
((* for lead in leadership *))
\noindent
\textbf{((( lead.title ))) \textbar{} ((( lead.org )))((* if lead.institution *)) \textbar{} \textbf{((( lead.institution ))) }((* endif *))} \\
\vspace{-0.4cm}
\begin{itemize}[leftmargin=0.6cm, itemsep=-0.1cm, topsep=0cm]
((* for bullet in lead.bullets *))
    \item ((( bullet | replace('%', '\\%') )))
((* endfor *))
\end{itemize}
((* endfor *))

\end{document}
```

🛠 To change visual styling (font size, spacing, section layout), modify the .tex file, not the JSON.

---

## 🛠 How to Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/aryanj10/resume-editor-generate.git
cd resume-editor-generate
```

### Install requirements
```bash
pip install -r requirements.txt
```

### Run the app
```bash
streamlit run streamlit_app.py
```


## File Structure
```protobuf
resume_project/
├── resume_data/
│   └── resume_data.json       # Editable JSON resume content
├── template/
│   └── resume_template.tex    # LaTeX resume template
├── output/
│   └── resume.pdf             # Compiled PDF
├── utils/
│   └── render.py              # Template renderer using Jinja2 + pdflatex
├── streamlit_app.py           # Streamlit UI for editing & preview
└── requirements.txt
```

## ⚠ Requirements
- Python 3.9+
- Streamlit, Jinja2 (install via `pip install -r requirements.txt`)
- `pdflatex` (for PDF generation):
  - **Windows**: [MiKTeX](https://miktex.org/download)
  - **macOS**: [MacTeX](https://tug.org/mactex/)
  - **Linux**: `sudo apt install texlive-full`

---

