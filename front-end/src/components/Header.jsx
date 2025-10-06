import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [highContrast, setHighContrast] = useState(false);
    const [accessibilityMode, setAccessibilityMode] = useState(false);

    const handleSearch = () => {
        const query = document.getElementById("search").value;
        if (!query) return;

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.length === 0) {
                    alert("Location not found!");
                    return;
                }
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                window.dispatchEvent(new CustomEvent('locationSearch', {
                    detail: { lat, lon, name: data[0].display_name }
                }));
            })
            .catch(() => {
                alert("Error searching location.");
            });
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleHighContrast = () => {
        setHighContrast(!highContrast);
        document.body.classList.toggle('high-contrast');
    };

    const toggleAccessibility = () => {
        setAccessibilityMode(!accessibilityMode);
    };

    return (
        <header className="header">
            <div className="logo">Aeris</div>

            <div className="search-container">
                <input
                    type="search"
                    id="search"
                    placeholder="Search location..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
                <button id="btn-search" onClick={handleSearch}>Search</button>
            </div>

            <div className="accessibility-controls">
                <button
                    className={`control-btn ${highContrast ? 'active' : ''}`}
                    onClick={toggleHighContrast}
                    title="High Contrast"
                    aria-label="Toggle high contrast"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2 L12 22" />
                    </svg>
                </button>

                <button
                    className={`control-btn ${accessibilityMode ? 'active' : ''}`}
                    onClick={toggleAccessibility}
                    title="Deaf Accessibility"
                    aria-label="Toggle deaf accessibility mode"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 11h4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4" />
                        <line x1="2" y1="2" x2="22" y2="22" strokeLinecap="round" />
                    </svg>
                </button>

                <button
                    className={`control-btn ${theme === 'dark' ? 'active' : ''}`}
                    onClick={toggleTheme}
                    title={theme === 'light' ? 'Activate Dark Mode' : 'Activate Light Mode'}
                    aria-label="Toggle theme"
                >
                    {theme === 'light' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
