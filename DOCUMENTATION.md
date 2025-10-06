# Aeris: Technical Documentation

## Project Overview

**Aeris** is an air quality monitoring dashboard developed for the **2025 NASA Space Apps Challenge**. It provides real-time air quality data, historical trends, and AI-powered forecasts to help **outdoor athletes** and **individuals with respiratory conditions** make informed health decisions.

### Target Users
- **Individuals with respiratory conditions** (asthma, COPD, allergies) who need accurate air quality information to avoid health emergencies
- **Outdoor athletes** (runners, cyclists, hikers) who need to plan activities around safe air quality conditions

---

## Technology Stack

* **Framework:** React 19.1.1
* **Build Tool:** Vite 7.1.7
* **Mapping:** Leaflet.js 1.9.4 + React-Leaflet 5.0.0
* **Data Visualization:** Recharts 3.2.1
* **Styling:** Pure CSS with CSS Variables
* **Icons:** Lucide React 0.544.0
* **State Management:** React Hooks (useState, useEffect)

---

## Getting Started

### Prerequisites
- Node.js 18.x or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/desatinar/nasa-aeris.git

# Navigate to front-end directory
cd nasa-aeris/front-end

# Install dependencies
npm install

# Run development server
npm run dev
```

### Build Commands

```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Create production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## Core Features

### 1. Interactive Map Visualization
Color-coded air quality zones powered by Leaflet.js. Users can view AQI readings, click zones for details, and search locations worldwide. Automatic geolocation centers the map on the user's position.

### 2. Real-Time Data Dashboard
Displays AQI values, pollutant levels (PM, CO₂, O₃), and air quality status with color-coded indicators. Dynamic status card adapts appearance based on current conditions.

### 3. Historical vs. AI Forecast Toggle
Segmented control in the "Data Period" card allows users to switch between historical data and AI forecasts. Athletes can identify optimal training windows; individuals with respiratory conditions can plan proactively.

### 4. Dynamic Alert System
High-visibility alerts appear when air quality reaches concerning levels. Features enhanced contrast (dark text `#212529` on red `#E74C3C` = 4.8:1 ratio) meeting WCAG 2.1 AA standards.

### 5. Accessibility Controls
Theme switcher (Light/Dark mode), high-contrast toggle, and keyboard navigation support. All interactive elements have ARIA labels.

---

## Design System

### Color Palette

**Light Mode:**
| Variable | Value | Usage |
|----------|-------|-------|
| `--bg-primary` | `#94a5d6` | Main background |
| `--bg-card` | `#FFFFFF` | Card backgrounds |
| `--accent-primary` | `#4A62A3` | Buttons, links, active states |
| `--text-primary` | `#212529` | Primary text |
| `--text-secondary` | `#6C757D` | Secondary text |

**Semantic Colors:**
- `--color-good`: `#2ECC71` (Good air quality)
- `--color-moderate`: `#F1C40F` (Moderate)
- `--color-bad`: `#E74C3C` (Poor/Hazardous)

### Typography
- **Font Family:** Inter
- **Body Text:** 16px / Regular (400)
- **Card Titles:** 18px / Semi-Bold (600)
- **Main Headings:** 24px / Bold (700)
- **AQI Display:** 40px / Bold (700)

### Spacing
- `--spacing-xs`: 8px
- `--spacing-sm`: 12px
- `--spacing-md`: 16px
- `--spacing-lg`: 20px
- `--spacing-xl`: 32px

---

## Component Architecture

### Key Components

**`App.jsx`** – Root component, orchestrates layout structure  
**`Header.jsx`** – Navigation bar, search, theme/accessibility controls  
**`Map.jsx`** – Interactive Leaflet map with air quality zones  
**`StatusBox.jsx`** – Dynamic alert card based on AQI levels  
**`Pollutants.jsx`** – Visual breakdown of pollutant levels (PM, CO₂, O₃)  
**`DataPanel.jsx`** – AQI chart with Historical/AI Forecast toggle  
**`InfoCard.jsx`** – Educational content about air pollution

### Component Pattern
- Functional components with React Hooks
- Dedicated CSS file per component
- CSS Variables for theming
- Semantic HTML5 elements

---

## Project Structure

```
nasa-aeris/
├── back-end/
│   └── main.py                 # Python API (optional)
├── front-end/
│   ├── src/
│   │   ├── components/         # React components
│   │   ├── App.jsx             # Root component
│   │   ├── main.jsx            # React entry point
│   │   └── index.css           # CSS variables
│   ├── package.json
│   └── vite.config.js
├── DOCUMENTATION.md            # This file
└── README.md
```

---

## Accessibility (A11y)

### Current Implementation
- **WCAG 2.1 Level AA compliant** contrast ratios
- **Semantic HTML5** structure
- **Keyboard navigation** support (Tab, Enter, Space)
- **ARIA attributes** on all interactive controls
- **Focus states** on all clickable elements

### Planned Enhancements
- High-contrast mode functionality
- Screen reader live regions (`aria-live`)
- Reduced motion mode (`prefers-reduced-motion`)
- Closed captioning support

---

## Roadmap

### Immediate Next Steps (0-3 Months)
- **API Integration:** Replace mock data with live APIs (OpenAQ, AirNow, World Air Quality Index)
- **Dark Mode:** Complete theme switcher implementation
- **Accessibility:** Wire up high-contrast toggle
- **Mobile Responsive:** Develop tablet/mobile layouts
- **AI Forecast:** Integrate ML model for predictions

### Future Vision (3-12 Months)
- **Community Reporting:** User-submitted pollution events (fires, gas leaks)
- **Personalized Dashboard:** Save favorite locations, custom alerts, health profiles
- **Stakeholder Integration:** Partner with EPA, health departments, emergency services
- **Extended Data:** Weather, pollen, UV index, public health statistics
- **Multi-language Support:** Internationalization
- **Push Notifications:** Real-time alerts for saved locations
- **Wearable Integration:** Smartwatch companion apps

---

## API Integration (Planned)

### Data Sources
- **OpenAQ API** – Global open-source air quality data
- **AirNow API (EPA)** – United States data
- **World Air Quality Index** – Comprehensive global coverage
- **NASA AERIS** – Satellite atmospheric measurements

### Integration Points
1. Replace static AQI in `StatusBox.jsx` and `Map.jsx`
2. Populate chart in `DataPanel.jsx` with historical data
3. Integrate ML forecast model for "AI Forecast" mode
4. Fetch granular pollutant measurements (PM2.5, PM10, CO, NO₂, SO₂, O₃)

---

## Contributing

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes following code standards
4. Test thoroughly
5. Submit a pull request with detailed description

### Code Standards
- Functional components with React Hooks
- One CSS file per component
- Use CSS variables from `index.css`
- All text in English
- Test keyboard accessibility
- WCAG 2.1 Level AA compliance

### Areas for Contribution
- Front-end development (React, UI/UX)
- Data science (forecasting models)
- Accessibility testing
- Documentation and translations

---

## License

License to be determined. Developed for environmental monitoring and public health purposes.

---

## Acknowledgments

- **NASA Space Apps Challenge 2025** – Platform and inspiration
- **NASA AERIS Program** – Atmospheric research insights
- **OpenStreetMap** – Mapping infrastructure
- **OpenAQ Community** – Open air quality data
- **React & Leaflet.js Communities** – Open-source frameworks

---

## Contact & Support

* **GitHub:** [https://github.com/desatinar/nasa-aeris](https://github.com/desatinar/nasa-aeris)
* **Issues:** [https://github.com/desatinar/nasa-aeris/issues](https://github.com/desatinar/nasa-aeris/issues)
* **Email:** [astro.rec00@gmail.com](mailto:astro.rec00@gmail.com)
* **Live Demo:** [https://nasa-aeris.vercel.app/](https://nasa-aeris.vercel.app/)

---

**Last Updated:** October 5, 2025  
**Version:** 1.0.0  
**Project Origin:** NASA Space Apps Challenge 2025
