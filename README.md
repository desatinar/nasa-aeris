# Aeris – Air Quality Monitoring Dashboard

<div align="center">

![Aeris Dashboard](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.1.7-646CFF?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-TBD-yellow?style=for-the-badge)

**A modern, accessible web application for real-time air quality monitoring and forecasting**

[Live Demo](#) • [Documentation](./DOCUMENTATION.md) • [Contributing](#contributing)

</div>

---

## 🌍 Overview

**Aeris** is a sophisticated air quality monitoring dashboard that transforms complex environmental data into clear, actionable insights. Built with React and powered by NASA AERIS-inspired principles, the application provides real-time air quality measurements, historical trend analysis, and AI-powered forecasts through an intuitive, map-based interface.

### ✨ Key Features

- 🗺️ **Interactive Map Visualization** – Color-coded air quality zones with detailed station data
- 📊 **Real-Time Dashboard** – Live AQI readings and pollutant level breakdowns
- 🔮 **Historical & AI Forecast Toggle** – Switch between past trends and future predictions
- 🚨 **Smart Alert System** – High-contrast warnings for hazardous air quality
- 🎨 **Customizable Interface** – Theme switcher and accessibility controls
- ♿ **WCAG Compliant** – Built with accessibility as a core principle

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/desatinar/nasa-aeris.git

# Navigate to the front-end directory
cd nasa-aeris/front-end

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Technology Stack

- **Framework:** React 19 with Hooks
- **Build Tool:** Vite 7
- **Mapping:** Leaflet.js + React-Leaflet
- **Charts:** Recharts
- **Styling:** CSS Variables + Custom Design System
- **Icons:** Lucide React

---

## 📖 Documentation

For comprehensive documentation including design system, component architecture, and API integration guides, see **[DOCUMENTATION.md](./DOCUMENTATION.md)**.

---

## 🎨 Design System

Aeris features a distinctive branded design:

- **Custom Light Theme:** Unique `#94a5d6` blue background
- **High-Contrast Alerts:** Dark text on colored backgrounds for accessibility
- **Semantic Colors:** Intuitive green/yellow/red status indicators
- **Typography:** Inter font family optimized for readability
- **Responsive:** Desktop-optimized with mobile-friendly roadmap

---

## 🧩 Project Structure

```
nasa-aeris/
├── back-end/           # Python API server (optional)
├── front-end/
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── assets/     # Static resources
│   │   ├── App.jsx     # Root component
│   │   └── main.jsx    # Entry point
│   └── package.json
├── DOCUMENTATION.md    # Comprehensive documentation
└── README.md          # This file
```

---

## 🗺️ Roadmap

- [x] Interactive map with geolocation
- [x] Real-time AQI display
- [x] Historical/AI Forecast toggle
- [x] Accessibility-first design
- [ ] Full dark mode implementation
- [ ] Live API integration (OpenAQ/AirNow)
- [ ] Mobile responsive design
- [ ] User accounts & preferences
- [ ] Push notifications
- [ ] Multi-language support

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](./DOCUMENTATION.md#11-contributing) for details on:

- Code standards and style guide
- Component architecture patterns
- Testing requirements
- Pull request process

---

## 📄 License

License to be determined. This project is developed for environmental monitoring and public health purposes.

---

## 🙏 Acknowledgments

Inspired by NASA's AERIS program and built with open-source technologies:

- NASA AERIS for atmospheric research insights
- OpenStreetMap for mapping data
- OpenAQ for air quality data accessibility
- The React and Leaflet.js communities

---

## 📧 Contact

For questions or support:

- **Issues:** [GitHub Issues](https://github.com/your-username/nasa-aeris/issues)
- **Email:** your-email@example.com

---

<div align="center">

**Built with 💙 for a cleaner, healthier planet**

[⬆ Back to Top](#aeris--air-quality-monitoring-dashboard)

</div>