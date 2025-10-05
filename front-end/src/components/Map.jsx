import { useEffect } from 'react';
import './Map.css';

const Map = () => {
    useEffect(() => {
        const map = L.map("map").setView([-8.05, -34.9], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "© OpenStreetMap contributors",
        }).addTo(map);

        const marker = L.marker([-8.05, -34.9]).addTo(map);
        marker.bindPopup("<b>You are here!</b>").openPopup();

        // Geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const lat = pos.coords.latitude;
                    const lon = pos.coords.longitude;
                    map.setView([lat, lon], 14);
                    marker.setLatLng([lat, lon]).bindPopup("📍 Your current location!").openPopup();
                },
                () => {
                    console.log("Unable to get your location. Staying at the default location.");
                }
            );
        }

        // Helper functions
        function getColorByAQI(aqi) {
            if (aqi <= 50) return "#2ECC71";
            if (aqi <= 100) return "#F1C40F";
            if (aqi <= 150) return "#FF9800";
            if (aqi <= 200) return "#E74C3C";
            if (aqi <= 300) return "#9C27B0";
            return "#8B0000";
        }

        function getAQILevel(aqi) {
            if (aqi <= 50) return "Good";
            if (aqi <= 100) return "Moderate";
            if (aqi <= 150) return "Unhealthy for Sensitive Groups";
            if (aqi <= 200) return "Unhealthy";
            if (aqi <= 300) return "Very Unhealthy";
            return "Hazardous";
        }

        // Air quality data
        const airQualityData = [
            { name: "Ouro Preto", position: [-7.9967, -34.8615], aqi: 45 },
            { name: "Madalena", position: [-8.05, -34.9], aqi: 110 },
            { name: "University City", position: [-8.0507, -34.9509], aqi: 175 },
        ];

        airQualityData.forEach((data) => {
            const color = getColorByAQI(data.aqi);
            L.circle(data.position, {
                radius: 2000,
                color: color,
                fillColor: color,
                fillOpacity: 0.4,
                weight: 3,
                opacity: 1,
            })
                .addTo(map)
                .bindPopup(
                    `<div style="font-family: 'Inter', sans-serif; padding: 8px;">
                        <strong style="color: ${color}; font-size: 1.1em;">${data.name}</strong><br>
                        <div style="margin-top: 8px; padding: 8px; background: rgba(${color === '#2ECC71' ? '46,204,113' : color === '#F1C40F' ? '241,196,15' : '231,76,60'},0.1); border-radius: 6px;">
                            <strong>AQI:</strong> ${data.aqi}<br>
                            <strong>Quality:</strong> ${getAQILevel(data.aqi)}
                        </div>
                        <div style="margin-top: 6px; font-size: 0.85em; color: #666;">
                            ${data.position[0].toFixed(6)}, ${data.position[1].toFixed(6)}
                        </div>
                    </div>`
                );
        });

        const handleLocationSearch = (event) => {
            const { lat, lon, name } = event.detail;
            map.setView([lat, lon], 14);
            marker.setLatLng([lat, lon]).bindPopup(`📍 ${name}`).openPopup();
        };

        window.addEventListener('locationSearch', handleLocationSearch);

        // Cleanup
        return () => {
            window.removeEventListener('locationSearch', handleLocationSearch);
            map.remove();
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default Map;