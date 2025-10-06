# Aeris: Air Quality Dashboard

<div align="center">

![Aeris Dashboard](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)

**Real-time air quality monitoring for informed health decisions**

[Live Demo](https://nasa-aeris.vercel.app/) • [Documentation](./DOCUMENTATION.md)

</div>

---

## Overview

Aeris is an air quality monitoring dashboard created for the **2025 NASA Space Apps Challenge**. It transforms complex atmospheric data into actionable insights, helping **outdoor athletes** and **individuals with respiratory conditions** (asthma, COPD, allergies) make informed decisions about outdoor activities and health precautions. Built with React and Leaflet.js, Aeris provides real-time air quality measurements, historical trends, and AI-powered forecasts through an intuitive map-based interface.

---

## Core Features

* **Interactive Map:** Visually displays real-time air quality data for the user's local area with color-coded zones.
* **Data Dashboard:** Presents key metrics like AQI and pollutant levels in a simple, easy-to-read format.
* **Predictive Toggle:** A unique switch allows users to compare historical data against AI-powered future forecasts.
* **Health Alerts:** Automatically highlights dangerous conditions with high-contrast warnings to help users take necessary precautions.
* **Community Reporting:** *(Future)* Users will be able to report local pollution events like fires or gas leaks.
* **Personalization:** *(Future)* A planned user dashboard for tracking favorite locations and receiving tailored advice.

---

## Technology Stack

* **Framework:** React 19
* **Build Tool:** Vite 7
* **Mapping:** Leaflet.js & React-Leaflet
* **Charts:** Recharts
* **Styling:** CSS Variables

---

## Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/desatinar/nasa-aeris.git
   ```

2. **Install dependencies:**
   ```bash
   cd nasa-aeris/front-end && npm install
   ```

3. **Run the app:**
   ```bash
   npm run dev
   ```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Project Roadmap

* Integrate a live data feed from a real-world API (OpenAQ/AirNow)
* Implement a fully functional Light/Dark mode theme switcher
* Develop the planned user dashboard for personalization
* Build out the community reporting functionality
* Add mobile responsive design
* Enable push notifications for air quality alerts

---

## Design Highlights

* **Custom Light Theme:** Distinctive `#94a5d6` blue background
* **Accessibility-First:** WCAG 2.1 AA compliant with high-contrast alerts
* **Semantic Colors:** Intuitive green/yellow/red air quality indicators
* **Typography:** Inter font for optimal readability

---

## Contributing

We welcome contributions from developers, designers, and environmental advocates. Please see [DOCUMENTATION.md](./DOCUMENTATION.md) for code standards and contribution guidelines.

---

## Contact

* **Live Demo:** [nasa-aeris.vercel.app](https://nasa-aeris.vercel.app/)
* **Issues:** [GitHub Issues](https://github.com/desatinar/nasa-aeris/issues)
* **Email:** astro.rec00@gmail.com

---

<div align="center">

**Built with 💙 for a cleaner, healthier planet**  
*A 2025 NASA Space Apps Challenge Project*

</div>