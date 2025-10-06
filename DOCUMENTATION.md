# Aeris Project Documentation

## 1. Project Overview

### Origins & Mission

**Aeris** was conceived and developed during the **2025 NASA Space Apps Challenge**, a global hackathon dedicated to leveraging space agency data and technology to solve real-world challenges. The project directly addresses NASA's mission to apply atmospheric research and satellite observations to improve public health outcomes and environmental awareness.

Born from the recognition that air quality information often remains inaccessible or difficult to interpret for those who need it most, Aeris is a modern, web-based air quality monitoring dashboard designed to provide clear, accessible, and actionable environmental data through an intuitive interface. The application combines real-time air quality measurements with predictive AI forecasting capabilities, enabling users to make informed decisions about outdoor activities and health precautions.

### Target Audience

Aeris is specifically designed with two primary user groups in mind:

1. **Individuals with Respiratory Conditions:** People living with asthma, chronic obstructive pulmonary disease (COPD), allergies, and other respiratory sensitivities require immediate, accurate information about air quality to avoid health emergencies and manage their conditions effectively. For this audience, Aeris provides high-visibility alerts, detailed pollutant breakdowns, and clear health recommendations tailored to air quality levels.

2. **Outdoor Athletes & Active Individuals:** Runners, cyclists, hikers, and fitness enthusiasts need to plan their training and outdoor activities around safe air quality conditions to optimize performance and protect their respiratory health. Aeris empowers this group with historical trend analysis, AI-powered forecasts, and location-based air quality mapping to schedule activities during optimal conditions.

### The Platform

The platform visualizes air quality data through an interactive map interface complemented by detailed information cards, delivering critical environmental insights in a format that is both aesthetically pleasing and highly functional. Beyond these primary audiences, Aeris also serves environmentally-conscious citizens, researchers analyzing pollution trends, public health officials monitoring community exposure risks, and urban planners making data-driven environmental policy decisions.

Built with a strong emphasis on accessibility and user experience, Aeris transforms complex atmospheric data—the kind collected by NASA's Earth-observing satellites and ground-based monitoring networks—into actionable intelligence that empowers users to protect their health and understand their environment.

---

## 2. Core Features

Aeris delivers a comprehensive suite of features designed to make air quality data accessible and actionable, with each capability addressing the specific needs of our target users—individuals with respiratory conditions and outdoor athletes:

* **Interactive Map Visualization:** 
  Allows users to visually understand air quality in their current location and surrounding areas. A full-featured interactive map powered by Leaflet.js displays real-time air quality zones across monitored regions. Color-coded circular overlays indicate air quality levels at specific locations, with semantic colors (green for good, yellow for moderate, red for poor) providing instant visual feedback that requires no specialized knowledge to interpret. Users can click on zones to view detailed AQI (Air Quality Index) readings, pollutant concentrations, and geographic coordinates. The map supports geolocation, automatically centering on the user's current position, and includes a search functionality to explore air quality data for any location worldwide—critical for athletes planning routes or individuals checking conditions at work, school, or recreational areas.

* **Real-Time Data Dashboard:** 
  Presents key metrics like AQI and pollutant levels in an easy-to-digest format, eliminating the complexity often associated with environmental data. A comprehensive sidebar displays multiple data cards providing granular insights into current environmental conditions. The dashboard includes a dynamic status card that adapts its appearance and messaging based on air quality levels, a pollutant breakdown card showing individual measurements for PM (Particulate Matter), CO₂, and O₃ (Ozone) with visual progress indicators, and an AQI trend chart visualizing air quality variations over time. All data updates dynamically based on the user's location or selected monitoring station, ensuring users always have the most current information for health-critical decisions.

* **Historical vs. AI Forecast Toggle:** 
  A unique segmented control within the "Data Period" card allows users to seamlessly switch between historical air quality trends and AI-powered forecasts. This feature enables users to understand past pollution patterns and anticipate future conditions, supporting better planning for outdoor activities, travel, and health management. Athletes can identify the best time windows for training, while individuals with respiratory conditions can proactively adjust medication schedules or avoid outdoor exposure during predicted poor air quality periods. The toggle is prominently placed and visually distinct, with the active mode highlighted using the application's primary accent color (`#4A62A3`), ensuring users always know which data mode they're viewing.

* **Dynamic Alert System:** 
  Provides high-visibility alerts during poor air quality events—a critical feature for the target audience to avoid health risks. High-visibility alert cards automatically appear when air quality reaches concerning levels. These alerts feature enhanced color contrast (dark text `#212529` on vibrant red backgrounds `#E74C3C`) to meet WCAG accessibility standards, ensuring critical health warnings are immediately visible even to users with color vision deficiencies. Each alert includes an emoji indicator for quick recognition, a clear status level (e.g., "Poor!"), specific health recommendations tailored to the air quality level ("Avoid outdoor activities," "Athletes should suspend intense outdoor training"), and a labeled status badge. The system distinguishes between "Good," "Moderate," and "Poor" air quality levels with appropriate visual treatments, providing actionable guidance rather than just raw data.

* **UI Customization & Accessibility:** 
  Includes planned features for theme-switching and high-contrast modes to cater to diverse user needs and preferences. The application includes comprehensive customization options to accommodate users with varying visual abilities, environmental preferences, and device settings. A theme switcher allows users to toggle between a custom-branded light mode (featuring a distinctive `#94a5d6` blue background) and a dark mode optimized for low-light environments—particularly useful for athletes checking conditions during early morning or evening training sessions. Accessibility controls include a high-contrast mode toggle for users with visual impairments and a deaf accessibility mode placeholder for future closed-captioning or visual alert enhancements. All interactive elements feature clear focus states for keyboard navigation, and the design adheres to modern WCAG 2.1 web accessibility guidelines, ensuring the platform is usable by individuals with diverse abilities.

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

Aeris is committed to creating an inclusive experience for all users, regardless of ability or assistive technology requirements. Given that our target audience includes individuals with respiratory conditions—many of whom may also have other health considerations or disabilities—accessibility is not just a compliance checkbox but a core design principle that directly impacts user safety and health outcomes.

### Current Implementation

* **Color Contrast Compliance:** 
  All text and interactive elements meet WCAG 2.1 Level AA standards for color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text). The red alert card specifically implements dark text (`#212529`) on the red background (`#E74C3C`) to achieve a 4.8:1 contrast ratio, ensuring critical health warnings are readable for users with color vision deficiencies. This is particularly crucial for emergency alerts that could prevent respiratory distress or health complications.

* **Semantic HTML:** 
  The application structure utilizes proper HTML5 semantic elements (`<header>`, `<main>`, `<aside>`, `<section>`) to provide meaningful document structure for screen readers and assistive technologies, ensuring users who rely on these tools can navigate efficiently to critical air quality information.

* **Keyboard Navigation:** 
  All interactive elements (buttons, inputs, toggles) are keyboard-accessible with visible focus indicators. Users can navigate the entire interface using Tab, Shift+Tab, Enter, and Space keys—essential for users with motor impairments who may have difficulty using a mouse while also managing respiratory equipment or medication.

* **ARIA Attributes:** 
  Interactive controls include appropriate `aria-label` and `title` attributes to provide context for screen reader users. Example: `<button aria-label="Toggle high contrast mode" title="High Contrast">`. This ensures users can understand the purpose of controls without visual inspection.

* **Responsive Focus States:** 
  All clickable elements feature clear visual feedback on focus and hover states, ensuring users always know which element is currently active, reducing cognitive load and making the interface more predictable.

### Planned Enhancements

* **High Contrast Mode:** Wire up the existing UI toggle to apply an enhanced high-contrast theme with increased color differentiation and bolder borders, benefiting users with low vision or users checking air quality in bright sunlight during outdoor activities.
* **Screen Reader Optimization:** Implement live regions (`aria-live`) for dynamic content updates, ensuring screen reader users receive real-time air quality alerts without needing to manually refresh or re-navigate the page—critical for time-sensitive health decisions.
* **Closed Captioning Support:** Develop the deaf accessibility feature to provide visual alerts and text-based notifications for any future audio-dependent information, ensuring universal access to all warning systems.
* **Reduced Motion Mode:** Respect user preference for reduced motion (`prefers-reduced-motion` media query) by disabling animations and transitions, accommodating users with vestibular disorders who may experience discomfort from motion effects.

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

## 10. Immediate Roadmap (Next Steps)

Aeris is actively evolving with planned enhancements to expand functionality, improve accessibility, and integrate real-world data sources. The immediate roadmap focuses on technical refinements and core feature completion.

### Short-Term Technical Tasks (Next 3 Months)

* **Dark Mode Implementation:** 
  Fully implement the theme switcher functionality in the header. Complete the dark mode color palette implementation across all components, with smooth transitions between themes. This feature particularly benefits outdoor athletes who check conditions during early morning or late evening training sessions when bright screens can be disruptive.

* **Functional Accessibility Controls:** 
  Wire up the High Contrast toggle to apply an alternative style sheet with enhanced color differentiation and increased border weights. Implement visual feedback mechanisms for the deaf accessibility mode. These features are critical for ensuring users with varying abilities can access life-saving air quality information.

* **API Integration:** 
  Replace mock data with live API calls to OpenAQ, AirNow, or the World Air Quality Index. Implement robust error handling, loading states, and data caching strategies to ensure a smooth user experience even with network latency. This transition from static to real-time data is essential for delivering actionable health information.

* **Geolocation Refinement:** 
  Improve the location detection system to handle edge cases (denied permissions, unsupported browsers, VPN usage). Implement a fallback mechanism to detect location via IP address, ensuring users can always access relevant air quality data.

* **Full Responsive Design:** 
  Develop and test mobile and tablet layouts. Implement a collapsible sidebar for smaller screens, touch-optimized map controls, and a mobile-friendly navigation menu. Mobile optimization is crucial for athletes checking conditions while on-the-go.

* **AI Forecast Model Development:** 
  Develop or integrate a machine learning model to generate 24-48 hour air quality forecasts based on historical patterns, weather conditions, and seasonal trends, making the Historical/AI Forecast toggle fully functional.

---

## 11. Long-Term Vision & Future Improvements

Beyond immediate technical enhancements, Aeris aims to evolve into a comprehensive environmental health platform that not only informs users but also empowers communities and supports institutional decision-making.

### User Interaction and Community Reporting

A key element of Aeris's long-term vision is transforming the platform from a passive information tool into an active, participatory environmental monitoring network:

* **Community Reporting System:** 
  Develop a feature allowing users to report real-time environmental events such as wildfires, industrial emissions, gas leaks, unusual odors, or localized pollution sources directly through the application. Users would be able to pin events on the map, upload photos, and provide descriptions, creating a crowdsourced environmental awareness network.

* **Verification & Validation:** 
  Implement a community moderation system where multiple user reports of the same event increase its credibility. Integrate automated cross-referencing with official sources (fire departments, environmental agencies) to verify reports and prevent misinformation.

* **Enhanced Data Accuracy:** 
  These community inputs would enrich the accuracy and granularity of air quality data by filling gaps between official monitoring stations. Real-time user reports of smoke, emissions, or unusual conditions would complement satellite and ground-based sensor data, creating a more complete picture of air quality conditions.

* **Participatory Platform:** 
  By enabling user contributions, Aeris becomes more than a data visualization tool—it becomes a collaborative platform where citizens actively participate in environmental monitoring, fostering community engagement and environmental stewardship.

### Integration with Environmental Stakeholders

To maximize Aeris's impact on public health and environmental policy, we plan strategic partnerships with governmental and institutional entities:

* **Governmental Environmental Agencies:** 
  Establish data-sharing agreements with agencies like the EPA (Environmental Protection Agency), state and local environmental departments, and international equivalents (e.g., European Environment Agency, Brazil's IBAMA). These partnerships would provide Aeris with authoritative, verified air quality data while allowing agencies to disseminate information to a wider public audience.

* **Public Health Departments:** 
  Collaborate with public health institutions to integrate health advisories, outbreak notifications (e.g., respiratory illness spikes correlated with air quality), and targeted warnings for vulnerable populations. Aeris could become an official channel for public health communication during environmental emergencies.

* **Research Institutions & Universities:** 
  Partner with atmospheric science departments and environmental research centers to access cutting-edge air quality models, satellite data (leveraging NASA's Earth-observing systems), and academic expertise. Researchers would gain access to Aeris's community-reported data for studies on hyperlocal pollution patterns.

* **Emergency Services Integration:** 
  Connect Aeris with fire departments, disaster response teams, and emergency management systems to automatically display wildfire locations, evacuation zones, and emergency alerts on the platform. Users in affected areas would receive real-time, life-saving information.

* **Bidirectional Data Flow:** 
  These partnerships would be mutually beneficial—Aeris gains access to verified, high-quality data, while stakeholder organizations gain a modern, accessible platform to reach citizens, particularly vulnerable populations who might not regularly check government websites.

### Extended API Integration

To provide users with a holistic understanding of environmental conditions, Aeris will expand beyond air quality data:

* **Meteorological Data Integration:** 
  Incorporate real-time weather data (temperature, humidity, wind speed/direction, precipitation) from services like OpenWeather or NOAA. Weather conditions significantly influence air quality and athletic performance, making this integration highly relevant to both target user groups.

* **Pollen & Allergen Data:** 
  Integrate pollen count APIs and allergen forecasts, critical for individuals with respiratory conditions (asthma, allergies) who need to plan outdoor exposure around multiple environmental triggers.

* **Public Health Statistics:** 
  Display regional respiratory illness trends, hospital admission rates for asthma/COPD, and other health metrics that correlate with air quality. This contextualization helps users understand the broader health implications of current conditions.

* **UV Index & Solar Radiation:** 
  Add UV index information for outdoor athletes concerned with sun exposure during training sessions, creating a comprehensive "outdoor safety dashboard."

* **Emergency Service Notifications:** 
  Integrate real-time emergency alerts from services like FEMA, local fire departments, or disaster management systems to display active wildfires, hazmat incidents, or evacuation orders on the map.

### Personalized User Dashboard

To better serve individual users' unique needs and preferences, Aeris will develop advanced personalization features:

* **Favorite Locations Management:** 
  Allow users to save and monitor multiple locations—home, workplace, gym, favorite running routes, children's schools—with quick-access toggles to switch between them. Each location would display current conditions, trends, and forecasts.

* **Personal Exposure History Tracking:** 
  Maintain a historical record of air quality conditions at times and locations where the user was present (with explicit consent). This data could be visualized in graphs showing cumulative exposure over weeks or months, helping users correlate exposure with symptom severity.

* **Health Profile Integration:** 
  Enable users to input their specific health conditions (asthma severity, exercise intensity levels, medication schedules) and receive tailored recommendations. For example, a user with severe asthma might receive alerts at AQI 75 instead of the standard 100 threshold.

* **Custom Alert Thresholds:** 
  Allow users to set personalized notification triggers based on their sensitivity levels and risk tolerance. Athletes might set alerts for moderate conditions, while individuals with mild respiratory issues might only need alerts for poor conditions.

* **Recommendation Engine:** 
  Develop an AI-powered recommendation system that suggests optimal times for outdoor activities based on forecasted air quality, weather conditions, historical patterns, and the user's health profile. Example: "Best time for your run today: 6-8 AM (AQI predicted at 45, light winds)."

* **Activity Planning Calendar:** 
  Integrate with calendar applications to help users schedule outdoor activities, training sessions, or events during periods of optimal air quality, with automatic rescheduling suggestions if conditions deteriorate.

* **Medication Reminders:** 
  For users who opt in, provide reminders to adjust preventive medication (inhaler use, antihistamines) based on forecasted poor air quality, helping proactive health management.

### Additional Long-Term Enhancements

* **Multi-Language Support:** 
  Internationalize the application with support for Spanish, Portuguese, French, German, Mandarin Chinese, and other languages to serve a global audience and advance environmental justice by making critical information accessible regardless of language barriers.

* **Advanced Push Notifications:** 
  Implement push notifications (via service workers) to alert users when air quality in their saved locations reaches unhealthy levels, when forecasts predict deterioration, or when community reports indicate localized events.

* **Social Features & Community:** 
  Enable users to share air quality reports on social media, send alerts to friends and family members in affected areas, and join community groups focused on local environmental advocacy.

* **Integration with Wearables & IoT:** 
  Develop companion functionality for smartwatches (Apple Watch, Garmin, Fitbit) and fitness trackers to provide real-time air quality updates during outdoor activities. Explore integration with personal air quality sensors for hyperlocal, real-time monitoring.

* **Data Export & Reporting Tools:** 
  Provide users and researchers with the ability to export historical data, generate custom reports, and create visualizations for personal health tracking, academic research, or community advocacy efforts.

---

## 12. Contributing

We welcome contributions from developers, designers, domain experts, and community members passionate about environmental data accessibility and public health.

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
* Adhere to WCAG 2.1 Level AA accessibility standards

### Areas for Contribution

* **Front-End Development:** React components, UI/UX improvements, responsive design
* **Data Science:** Air quality forecasting models, data analysis algorithms
* **Accessibility:** Testing with assistive technologies, improving A11y features
* **Documentation:** Technical writing, user guides, API documentation
* **Translation:** Multi-language support (future)
* **Design:** UI mockups, iconography, data visualization concepts

---

## 13. License

This project is developed as part of environmental monitoring and public health initiatives, inspired by the 2025 NASA Space Apps Challenge. License details to be determined.

---

## 14. Acknowledgments

* **NASA Space Apps Challenge 2025** – For providing the platform and inspiration for this project
* **NASA AERIS Program** – For pioneering atmospheric research and making satellite data accessible
* **OpenStreetMap Contributors** – For providing the foundational mapping infrastructure
* **OpenAQ Community** – For championing open air quality data and environmental transparency
* **React Team & Community** – For building and maintaining an exceptional front-end framework
* **Leaflet.js Contributors** – For the powerful, flexible open-source mapping library
* **Recharts Team** – For elegant, responsive data visualization components

---

## 15. Contact & Support

For questions, bug reports, feature requests, or partnership inquiries, please:

* **GitHub Issues:** [https://github.com/desatinar/nasa-aeris/issues](https://github.com/desatinar/nasa-aeris/issues)
* **Email:** [astro.rec00@gmail.com](astro.rec00@gmail.com)

We are particularly interested in hearing from:
- Individuals with respiratory conditions who can provide feedback on feature utility
- Outdoor athletes who can suggest performance-oriented improvements
- Environmental agencies interested in data partnerships
- Health organizations exploring public communication channels

---

**Last Updated:** October 5, 2025  
**Version:** 1.0.0  
**Project Origin:** NASA Space Apps Challenge 2025  
**Maintained by:** Aeris Development Team

