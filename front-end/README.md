# Aeris Front-End

The front-end application for the Aeris Air Quality Monitoring Dashboard. Built with React 19, Vite 7, and a custom design system.

## 🚀 Development

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Application will be available at [http://localhost:5173](http://localhost:5173)

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

---

## 📦 Key Dependencies

- **React 19.1.1** – UI framework with latest features
- **Vite 7.1.7** – Lightning-fast build tool with HMR
- **Leaflet 1.9.4** – Interactive mapping library
- **React-Leaflet 5.0.0** – React wrapper for Leaflet
- **Recharts 3.2.1** – Data visualization and charting
- **Lucide React 0.544.0** – Icon library

---

## 🧩 Component Structure

```
src/
├── components/
│   ├── Header.jsx          # Top navigation with search and controls
│   ├── Map.jsx             # Interactive Leaflet map
│   ├── StatusBox.jsx       # Dynamic air quality alert card
│   ├── Pollutants.jsx      # Pollutant level indicators
│   ├── DataPanel.jsx       # AQI chart with historical/forecast toggle
│   └── InfoCard.jsx        # Health information and resources
├── assets/                 # Static images and resources
├── App.jsx                 # Root component
├── App.css                 # Layout and structure styles
├── main.jsx                # React entry point
└── index.css               # CSS variables and global styles
```

---

## 🎨 Design System

### CSS Variables

All styling uses CSS custom properties defined in `index.css`:

```css
:root {
  --bg-primary: #94a5d6;        /* Main background */
  --bg-card: #FFFFFF;           /* Card backgrounds */
  --accent-primary: #4A62A3;    /* Primary accent color */
  --text-primary: #212529;      /* Primary text */
  --color-good: #2ECC71;        /* Good air quality */
  --color-moderate: #F1C40F;    /* Moderate air quality */
  --color-bad: #E74C3C;         /* Poor air quality */
}
```

### Component Styling Pattern

Each component follows a consistent pattern:
- Dedicated CSS file (e.g., `Header.css`)
- Use CSS variables for colors, spacing, and shadows
- BEM-like naming convention for complex components
- Mobile-first responsive approach (future)

---

## 🔌 API Integration (Planned)

Currently using mock data. Future integration points:

1. **Location Search:** OpenStreetMap Nominatim API (implemented)
2. **Air Quality Data:** OpenAQ or AirNow API (planned)
3. **Forecast Model:** Custom ML model or third-party API (planned)

---

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive controls
- Keyboard navigation support
- High-contrast color combinations
- WCAG 2.1 Level AA compliant

---

## 📖 Full Documentation

For comprehensive documentation, see [../DOCUMENTATION.md](../DOCUMENTATION.md)

---

## 🛠️ Tech Notes

### Vite Configuration

This project uses **@vitejs/plugin-react** for Fast Refresh via Babel. The configuration is optimized for development speed and production bundle size.

### ESLint

Configured with React-specific rules and hooks validation. Run `npm run lint` before committing changes.

### Browser Support

- Modern evergreen browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox layouts

---

## 🤝 Contributing

When adding new components:

1. Create both `.jsx` and `.css` files
2. Use functional components with React Hooks
3. Follow existing naming conventions
4. Use CSS variables from `index.css`
5. Ensure keyboard accessibility
6. Test across browsers

---

**For project overview and full documentation, see the [main README](../README.md)**
