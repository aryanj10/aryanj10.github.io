---
title: "CW-RIS: Child Wind Risk Intelligence System"
date: 2025-06-17
categories: [Projects, Humanitarian AI, Geospatial]
tags: [streamlit, wind, ERA5, raster, shapefile, xarray, geospatial, zonal stats, CDS API, humanitarian, climate risk]
---

<div align="center">
  <a href="https://github.com/aryanj10/UN-Hackathon-Child-Wind-Risk-Intelligence-System">
    <img alt="Hosted with GitHub Pages" src="https://img.shields.io/badge/Hosted_with-GitHub_Pages-blue?logo=github&logoColor=white">
  </a>
  <a href="https://streamlit.io">
    <img alt="Streamlit" src="https://img.shields.io/badge/Built%20with-Streamlit-ff4b4b?logo=streamlit&logoColor=white">
  </a>
  <a href="https://www.python.org/">
    <img alt="Python" src="https://img.shields.io/badge/Python-3.9+-3776AB?logo=python&logoColor=white">
  </a>
  <a href="https://cds.climate.copernicus.eu/api-how-to">
    <img alt="Copernicus CDS API" src="https://img.shields.io/badge/Data%20via-Copernicus%20CDS%20API-00BFFF?logo=datadog&logoColor=white">
  </a>
  <a href="https://leafmap.org/">
    <img alt="Leafmap" src="https://img.shields.io/badge/Map%20Rendering-Leafmap-34A853?logo=leaflet&logoColor=white">
  </a>
  <a href="https://github.com/">
    <img alt="Open Source" src="https://img.shields.io/badge/Open%20Source-GitHub-181717?logo=github">
  </a>
</div>



**CW-RIS** is a child-centered wind risk analysis app that overlays real-time ECMWF ERA5 wind forecast data with child population exposure (e.g., from WorldPop), school density, and hospital accessibility to compute and visualize risk zones. This Streamlit app enables faster, data-driven decisions for humanitarian response and preparedness.

---

## 🚀 What This App Does

- ✅ Downloads live 10m wind forecast data (U & V components) from ECMWF ERA5 via CDS API
- ✅ Computes wind speed magnitude from U and V components
- ✅ Clips and reprojects child population raster to match wind data
- ✅ Multiplies wind × population to produce a child wind risk raster
- ✅ Aggregates exposure using zonal statistics (by admin boundaries)
- ✅ Enhances risk by factoring in school density and hospital proximity
- ✅ Displays an interactive map with high-risk areas highlighted

---

## 🛠️ Features

- 📡 **Live ERA5 Wind Data** via Copernicus CDS API
- 💨 **Wind Magnitude Calculation**: `sqrt(U^2 + V^2)`
- 👶 **Child Exposure Mapping** using population rasters
- 🏫 **School Density Scoring** using HDX education site data
- 🏥 **Hospital Accessibility Scoring** using proximity buffers
- 🗺️ **Zonal Risk Statistics** per admin region
- 🖱️ **Interactive Map** with hover tooltips (Leafmap/Folium)
- 📈 **Final Composite Risk Score** for decision support

---

## 📁 Project Structure

```bash
cw-ris/
├── app.py                         # 🔵 Main Streamlit entrypoint
├── requirements.txt               # 📦 Python dependencies
├── README.md                      # 📘 Project overview

├── config/
│   └── settings.py                # ⚙️ File paths and constants

├── data/
│   ├── downloader.py              # 🌐 ERA5 wind downloader via CDS API
│   └── validator.py               # ✅ File presence & CDS API checks

├── logic/
│   ├── wind_handler.py            # 💨 Wind speed calculation from U/V
│   ├── exposure.py                # 👶 Population × wind risk computation
│   ├── school_density.py          # 🏫 Compute school site counts per region
│   └── hospital_access.py         # 🏥 Compute hospital proximity score

├── ui/
│   ├── map_display.py             # 🗺️ Map rendering with risk score
│   └── sidebar.py                 # 📚 Sidebar with instructions

├── utils/
│   └── cleanup.py                 # 🧹 Temp file cleanup utility

├── assets/                        # 🗂️ Static geospatial inputs
│   ├── aoi_bangladesh.geojson     # 🟡 AOI polygon
│   ├── adm3.geojson               # 🟢 Admin boundaries for stats
│   ├── bgd_pop_2025_CN_100m.tif   # 👶 Child population raster
│   ├── schools_hdx.geojson        # 🏫 Education facilities (HDX)
│   └── hospitals_hdx.geojson      # 🏥 Health facility locations
```

---

## 📂 Data Sources

| Dataset                    | Source URL                                                                 |
|----------------------------|----------------------------------------------------------------------------|
| 👶 Child Population Raster | [WorldPop 2025](https://hub.worldpop.org/geodata/summary?id=53874)         |
| 🏥 Health Facilities       | [HDX - Bangladesh Healthsites](https://data.humdata.org/dataset/bangladesh-healthsites) |
| 🏫 Education Facilities    | [HDX - OSM Bangladesh Education](https://data.humdata.org/dataset/hotosm_bgd_education_facilities) |
| 🟢 Admin Boundaries (ADM3) | Provided by hackathon organizers                                           |
| 🟡 AOI for Bangladesh      | Provided by hackathon organizers   

---

## 📦 Requirements

Install dependencies:

```bash
pip install -r requirements.txt
```

### 🔑 Setup: CDS API Key

1.  Register at https://cds.climate.copernicus.eu
2.  Go to your CDS API page
3.  Save your credentials in a `.cdsapirc` file in your home directory:

```yaml
url: https://cds.climate.copernicus.eu/api
key: your_uid:your_api_key
```

---

## ▶️ Run the App

```bash
streamlit run app.py
```

Open in your browser at: http://localhost:8501

---

## 🔄 How It Works

1. Fetch latest wind forecast (5-day lag)
2. Compute wind speed using U and V components
3. Reproject child population to match wind raster
4. Compute wind × population exposure per pixel
5. Aggregate by admin regions (zonal stats)
6. Adjust risk by school density and hospital proximity
7. Display interactive map with composite risk scores

---

## 📊 Example Outputs

- Table ranking admin regions by Final Risk Score
- Interactive map:
  - Color-coded composite risk zones
  - Highlighted highest-risk areas
  - Hover to view region risk breakdown

---

## Notes

- All spatial layers are assumed in `EPSG:4326`
- Requires valid CDS API credentials and recent Python packages
- Raster alignment done using `rasterio.reproject()`

---

## Future Plans

- Add flood and landslide hazard overlays
- Connect to CCRI-DRM dashboards via GeoTIFF
- Enable time-based risk forecasting
- Extend for regional/global scalability

---
