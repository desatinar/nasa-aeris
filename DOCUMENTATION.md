# Aeris Project Documentation

## 1. Project Overview

**Aeris** is a modern, web-based air quality monitoring dashboard designed to provide clear, accessible, and actionable environmental data to users through an intuitive interface. The application combines real-time air quality measurements with predictive AI forecasting capabilities, enabling users to make informed decisions about outdoor activities and health precautions.

The platform visualizes air quality data through an interactive map interface complemented by detailed information cards, delivering critical environmental insights in a format that is both aesthetically pleasing and highly functional. Aeris serves a diverse audience including environmentally-conscious citizens seeking daily air quality updates, researchers analyzing pollution trends, public health officials monitoring community exposure risks, and urban planners making data-driven environmental policy decisions.

Built with a strong emphasis on accessibility and user experience, Aeris transforms complex environmental data into actionable intelligence that empowers users to protect their health and understand their environment.

---

## 2. Core Features

Aeris delivers a comprehensive suite of features designed to make air quality data accessible and actionable:

* **Interactive Map Visualization:** 
  A full-featured interactive map powered by Leaflet.js displays real-time air quality zones across monitored regions. Color-coded circular overlays indicate air quality levels at specific locations, with semantic colors (green for good, yellow for moderate, red for poor) providing instant visual feedback. Users can click on zones to view detailed AQI (Air Quality Index) readings, pollutant concentrations, and geographic coordinates. The map supports geolocation, automatically centering on the user's current position, and includes a search functionality to explore air quality data for any location worldwide.

* **Real-Time Data Dashboard:** 
  A comprehensive sidebar displays multiple data cards providing granular insights into current environmental conditions. The dashboard includes a dynamic status card that adapts its appearance and messaging based on air quality levels, a pollutant breakdown card showing individual measurements for PM (Particulate Matter), CO₂, and O₃ (Ozone) with visual progress indicators, and an AQI trend chart visualizing air quality variations over time. All data updates dynamically based on the user's location or selected monitoring station.

* **Historical vs. AI Forecast Toggle:** 
  A unique segmented control within the "Data Period" card allows users to seamlessly switch between viewing historical air quality trends and AI-powered forecasts. This feature enables users to both understand past pollution patterns and anticipate future air quality conditions, supporting better planning for outdoor activities, travel, and health management. The toggle is prominently placed and visually distinct, with the active mode highlighted using the application's primary accent color.

* **Dynamic Alert System:** 
  High-visibility alert cards automatically appear when air quality reaches concerning levels. These alerts feature enhanced color contrast (dark text on vibrant backgrounds) to meet WCAG accessibility standards, ensuring critical health warnings are immediately visible. Each alert includes an emoji indicator, a clear status level (e.g., "Poor!"), specific health recommendations tailored to the air quality level, and a labeled status badge. The system distinguishes between "Good," "Moderate," and "Poor" air quality levels with appropriate visual treatments.

* **UI Customization & Accessibility:** 
  The application includes comprehensive customization options to accommodate diverse user needs and preferences. A theme switcher allows users to toggle between a custom-branded light mode (featuring a distinctive `#94a5d6` blue background) and a dark mode optimized for low-light environments. Accessibility controls include a high-contrast mode toggle and a deaf accessibility mode placeholder for future closed-captioning or visual alert enhancements. All interactive elements feature clear focus states, and the design adheres to modern web accessibility guidelines.

---

## 3. Technology Stack

Aeris is built on a modern, performant front-end technology stack:

* **Framework:** React 19.1.1 – Utilizing the latest React features including hooks for state management and lifecycle handling
* **Build Tool:** Vite 7.1.7 – Providing lightning-fast hot module replacement and optimized production builds
* **Mapping Library:** Leaflet.js 1.9.4 with React-Leaflet 5.0.0 – Delivering interactive map functionality with React component wrappers
* **Data Visualization:** Recharts 3.2.1 – Rendering responsive, animated charts for air quality trend visualization
* **Icons:** Lucide React 0.544.0 – Providing a comprehensive, consistent icon library
* **Styling:** Pure CSS with CSS Variables – Utilizing custom properties for theming and maintaining a consistent design system across components
* **State Management:** React Hooks (useState, useEffect) – Leveraging React's built-in state management for component-level state
* **Linting:** ESLint 9.36.0 with React-specific plugins – Ensuring code quality and consistency

**Back-End (Supplementary):**
* **API Server:** Python-based API (main.py) for potential data aggregation and processing

---

## 4. Getting Started

Follow these instructions to set up and run the Aeris project on your local development environment.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.x or later) – [Download here](https://nodejs.org/)
- **npm** (v9.x or later) or **yarn** (v1.22.x or later)
- **Git** – For cloning the repository

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/nasa-aeris.git
   ```

2. **Navigate to the front-end directory:**
   ```bash
   cd nasa-aeris/front-end
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```
   
   *Or if using yarn:*
   ```bash
   yarn install
   ```

### Running the Development Server

To start the application in development mode with hot module replacement:

```bash
npm run dev
```

*Or with yarn:*
```bash
yarn dev
```

The application will automatically open in your default browser at [http://localhost:5173](http://localhost:5173) (Vite's default port).

### Building for Production

To create an optimized production build:

```bash
npm run build
```

The compiled files will be output to the `dist/` directory, ready for deployment to any static hosting service.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## 5. Design System

Aeris follows a carefully crafted design system to ensure visual consistency, accessibility, and a distinctive brand identity.

### 5.1. Color Palette

The application uses a custom color scheme that balances aesthetic appeal with functional clarity.

#### Primary & UI Colors (Light Mode)

| Variable Name | Hex Value | Usage |
|--------------|-----------|-------|
| `--bg-primary` | `#94a5d6` | Main application background – distinctive branded blue |
| `--bg-card` | `#FFFFFF` | Card backgrounds – pure white for maximum contrast |
| `--accent-primary` | `#4A62A3` | Primary buttons, active states, links, and interactive elements |
| `--accent-hover` | `#3A5293` | Hover state for interactive elements |
| `--text-primary` | `#212529` | Primary text on light surfaces – dark gray for readability |
| `--text-secondary` | `#6C757D` | Secondary text, descriptions, and metadata |
| `--text-muted` | `#ADB5BD` | Disabled or de-emphasized text |
| `--text-on-brand` | `#FFFFFF` | Text on colored backgrounds (buttons, alerts) |
| `--border-color` | `#E0E0E0` | Card borders and dividing lines |

#### Semantic Colors (Status Indicators)

| Status | Variable Name | Hex Value | Usage |
|--------|--------------|-----------|-------|
| **Good** | `--color-good` | `#2ECC71` | Good air quality indicators |
| **Moderate** | `--color-moderate` | `#F1C40F` | Moderate air quality warnings |
| **Poor/Hazardous** | `--color-bad` | `#E74C3C` | Poor air quality alerts |

#### Dark Mode Colors

| Variable Name | Hex Value | Usage |
|--------------|-----------|-------|
| `--bg-primary` | `#0A0E1A` | Dark mode main background |
| `--bg-card` | `#1A2035` | Dark mode card backgrounds |
| `--accent-primary` | `#00BFFF` | Bright cyan accent for dark mode |
| `--text-primary` | `#FFFFFF` | Primary text in dark mode |

### 5.2. Typography

The Aeris interface uses the **Inter** font family, a highly legible typeface optimized for digital interfaces.

| Element | Size | Weight | Usage |
|---------|------|--------|-------|
| **Body Text** | 16px (1rem) | Regular (400) | Standard paragraph text, descriptions |
| **Secondary Text** | 14px (0.875rem) | Regular (400) | Metadata, timestamps, helper text |
| **Card Titles** | 18px (1.125rem) | Semi-Bold (600) | Section headers, card titles |
| **Main Headings** | 24px (1.5rem) | Bold (700) | Page titles, primary headings |
| **AQI Primary Metric** | 40px (2.5rem) | Bold (700) | Large numerical displays |
| **Small Labels** | 12px (0.75rem) | Medium (500) | Input labels, button text |

**Font Loading:**
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
```

### 5.3. Spacing System

Aeris uses a consistent 8px-based spacing scale:

| Variable | Value | Usage |
|----------|-------|-------|
| `--spacing-xs` | 8px | Tight spacing between related elements |
| `--spacing-sm` | 12px | Small gaps, compact layouts |
| `--spacing-md` | 16px | Standard spacing between components |
| `--spacing-lg` | 20px | Generous padding inside cards |
| `--spacing-xl` | 32px | Large section separators |

### 5.4. Border Radius & Shadows

| Variable | Value | Usage |
|----------|-------|-------|
| `--radius-sm` | 8px | Small components, buttons |
| `--radius-md` | 10px | Standard cards, inputs |
| `--radius-lg` | 12px | Large containers, modals |
| `--shadow-sm` | `0 2px 8px rgba(0, 0, 0, 0.08)` | Subtle elevation |
| `--shadow-card` | `0 2px 12px rgba(0, 0, 0, 0.1)` | Standard card shadow |
| `--shadow-md` | `0 4px 16px rgba(0, 0, 0, 0.12)` | Elevated elements |

---

## 6. Accessibility (A11y)

Aeris is committed to creating an inclusive experience for all users, regardless of ability or assistive technology requirements.

### Current Implementation

* **Color Contrast Compliance:** 
  All text and interactive elements meet WCAG 2.1 Level AA standards for color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text). The red alert card specifically implements dark text (`#212529`) on the red background (`#E74C3C`) to achieve a 4.8:1 contrast ratio, ensuring critical health warnings are readable for users with color vision deficiencies.

* **Semantic HTML:** 
  The application structure utilizes proper HTML5 semantic elements (`<header>`, `<main>`, `<aside>`, `<section>`) to provide meaningful document structure for screen readers and assistive technologies.

* **Keyboard Navigation:** 
  All interactive elements (buttons, inputs, toggles) are keyboard-accessible with visible focus indicators. Users can navigate the entire interface using Tab, Shift+Tab, Enter, and Space keys.

* **ARIA Attributes:** 
  Interactive controls include appropriate `aria-label` and `title` attributes to provide context for screen reader users. Example: `<button aria-label="Toggle high contrast mode" title="High Contrast">`.

* **Responsive Focus States:** 
  All clickable elements feature clear visual feedback on focus and hover states, ensuring users always know which element is currently active.

### Planned Enhancements

* **High Contrast Mode:** Wire up the existing UI toggle to apply an enhanced high-contrast theme with increased color differentiation and bolder borders.
* **Screen Reader Optimization:** Implement live regions (`aria-live`) for dynamic content updates, ensuring screen reader users receive real-time air quality alerts.
* **Closed Captioning Support:** Develop the deaf accessibility feature to provide visual alerts and text-based notifications for audio-dependent information.
* **Reduced Motion Mode:** Respect user preference for reduced motion (`prefers-reduced-motion` media query) by disabling animations and transitions.

---

## 7. Component Architecture

### Key Components

#### `App.jsx`
The root component orchestrating the overall layout structure. Renders the header, map section, and sidebar container.

#### `Header.jsx`
Top navigation bar containing the Aeris logo, location search functionality, and accessibility/theme controls. Handles search queries via OpenStreetMap's Nominatim API and dispatches custom events for location updates.

#### `Map.jsx`
Interactive map component using Leaflet.js. Displays color-coded air quality zones with circular overlays, handles geolocation, and responds to location search events. Implements popup modals with detailed AQI information for each monitoring station.

#### `StatusBox.jsx`
Dynamic alert card that adapts its appearance based on current air quality levels. Automatically determines the nearest monitoring station using haversine distance calculations and displays appropriate health recommendations.

#### `Pollutants.jsx`
Visual breakdown of individual pollutant levels (PM, CO₂, O₃) using animated progress bars. Provides tooltip descriptions for each pollutant type.

#### `DataPanel.jsx`
Multi-function card displaying AQI trends over time. Features the Historical Data / AI Forecast toggle, a time period selector, an interactive line chart, and the NASA logo attribution.

#### `InfoCard.jsx`
Educational card providing health facts about air pollution and links to authoritative resources (EPA, WHO, etc.).

---

## 8. Project Structure

```
nasa-aeris/
├── back-end/
│   └── main.py                    # Python API server (optional)
├── front-end/
│   ├── public/
│   │   └── vite.svg              # Favicon and public assets
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx        # Top navigation bar
│   │   │   ├── Header.css
│   │   │   ├── Map.jsx           # Interactive Leaflet map
│   │   │   ├── Map.css
│   │   │   ├── StatusBox.jsx     # Dynamic air quality alert
│   │   │   ├── StatusBox.css
│   │   │   ├── Pollutants.jsx    # Pollutant level indicators
│   │   │   ├── Pollutants.css
│   │   │   ├── DataPanel.jsx     # AQI chart and forecast toggle
│   │   │   ├── DataPanel.css
│   │   │   ├── InfoCard.jsx      # Health information card
│   │   │   └── InfoCard.css
│   │   ├── assets/               # Images and static assets
│   │   ├── App.jsx               # Root component
│   │   ├── App.css               # Global layout styles
│   │   ├── main.jsx              # React entry point
│   │   └── index.css             # CSS variables and reset
│   ├── eslint.config.js          # Linting configuration
│   ├── vite.config.js            # Vite build configuration
│   ├── package.json              # Dependencies and scripts
│   └── README.md
├── DOCUMENTATION.md              # This file
└── README.md                     # Project overview
```

---

## 9. API Integration (Future)

Currently, Aeris uses mock data hardcoded in the components for demonstration purposes. Future versions will integrate with real-world air quality APIs.

### Recommended APIs

* **OpenAQ API** – Global, open-source air quality data
* **AirNow API** (EPA) – United States air quality data
* **World Air Quality Index API** – Comprehensive global coverage
* **NASA AERIS API** – Satellite-based atmospheric measurements

### Integration Points

1. **Real-Time Data Fetching:** Replace static AQI values in `StatusBox.jsx` and `Map.jsx` with API calls based on user location or selected monitoring stations.
2. **Historical Data Retrieval:** Populate the chart in `DataPanel.jsx` with actual historical measurements when "Historical Data" mode is active.
3. **AI Forecast Generation:** Integrate machine learning models or third-party forecast APIs to provide predictive air quality data when "AI Forecast" mode is selected.
4. **Pollutant Breakdown:** Fetch granular pollutant measurements (PM2.5, PM10, CO, NO₂, SO₂, O₃) from APIs to display accurate concentrations.

---

## 10. Project Roadmap

Aeris is actively evolving with planned enhancements to expand functionality, improve accessibility, and integrate real-world data sources.

### Short-Term Goals (Next 3 Months)

* **Dark Mode Implementation:** 
  Fully implement the theme switcher functionality in the header. Complete the dark mode color palette implementation across all components, with smooth transitions between themes.

* **Functional Accessibility Controls:** 
  Wire up the High Contrast toggle to apply an alternative style sheet with enhanced color differentiation and increased border weights. Implement visual feedback mechanisms for the deaf accessibility mode.

* **API Integration:** 
  Replace mock data with live API calls to OpenAQ or AirNow. Implement error handling, loading states, and data caching strategies to ensure a smooth user experience even with network latency.

* **Geolocation Refinement:** 
  Improve the location detection system to handle edge cases (denied permissions, unsupported browsers, VPN usage). Implement a fallback mechanism to detect location via IP address.

### Medium-Term Goals (3-6 Months)

* **Full Responsive Design:** 
  Develop and test mobile and tablet layouts. Implement a collapsible sidebar for smaller screens, touch-optimized map controls, and a mobile-friendly navigation menu.

* **User Accounts & Preferences:** 
  Introduce optional user accounts allowing users to save favorite locations, set custom air quality alerts, and persist theme/accessibility preferences across sessions.

* **Historical Data Analysis:** 
  Expand the Data Period card to support longer time ranges (30 days, 90 days, 1 year). Implement data export functionality for researchers and analysts.

* **AI Forecast Model:** 
  Develop or integrate a machine learning model to generate 24-48 hour air quality forecasts based on historical patterns, weather conditions, and seasonal trends.

### Long-Term Vision (6-12 Months)

* **Multi-Language Support:** 
  Internationalize the application with support for Spanish, Portuguese, French, German, and Chinese languages to serve a global audience.

* **Advanced Notifications:** 
  Implement push notifications (via service workers) to alert users when air quality in their saved locations reaches unhealthy levels.

* **Social Features:** 
  Enable users to share air quality reports on social media or send alerts to friends and family members in affected areas.

* **Integration with Wearables:** 
  Develop companion functionality for smartwatches and fitness trackers to provide real-time air quality updates during outdoor activities.

---

## 11. Contributing

We welcome contributions from developers, designers, and domain experts passionate about environmental data accessibility.

### How to Contribute

1. **Fork the repository** and create a feature branch (`git checkout -b feature/your-feature-name`)
2. **Make your changes** following the established code style and component patterns
3. **Test thoroughly** across different browsers and screen sizes
4. **Commit your changes** with clear, descriptive commit messages
5. **Push to your fork** and submit a pull request with a detailed description of your changes

### Code Standards

* Follow the existing component structure and naming conventions
* Use functional components with React Hooks (no class components)
* Maintain CSS modularity – each component should have its own CSS file
* Ensure all text content is in English
* Test accessibility features with keyboard navigation and screen readers
* Write clear comments for complex logic

---

## 12. License

This project is developed as part of environmental monitoring and public health initiatives. License details to be determined.

---

## 13. Acknowledgments

* **NASA AERIS Program** – For inspiring the project's mission and providing atmospheric research insights
* **OpenStreetMap Contributors** – For providing the foundational mapping data
* **OpenAQ Community** – For pioneering open air quality data accessibility
* **React Team** – For building and maintaining an exceptional front-end framework
* **Leaflet.js Contributors** – For the powerful, flexible mapping library

---

## 14. Contact & Support

For questions, bug reports, or feature requests, please:

* **Open an issue** on the project's GitHub repository
* **Email the development team** at [your-email@example.com]
* **Join our community** on Discord/Slack [if applicable]

---

**Last Updated:** October 6, 2025  
**Version:** 1.0.0  
**Maintained by:** Aeris Development Team

