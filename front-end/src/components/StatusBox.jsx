import { useState, useEffect } from 'react';
import './StatusBox.css';

const StatusBox = () => {
    const [status, setStatus] = useState({
        emoji: "😊",
        title: "Great!",
        message: "Perfect air quality to enjoy outdoor activities.",
        background: "#d1fae5",
        borderColor: "#10b981",
        cardText: "Clean and healthy air",
        cardColor: "green"
    });

    useEffect(() => {
        const determineStatusFromLocation = () => {
            const airQualityData = [
                { name: "Ouro Preto", position: [-7.9967, -34.8615], aqi: 45 },
                { name: "Madalena", position: [-8.05, -34.9], aqi: 110 },
                { name: "Cidade Universitária", position: [-8.0507, -34.9509], aqi: 175 },
            ];

            // Try to get user location via geolocation
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const userLat = pos.coords.latitude;
                        const userLng = pos.coords.longitude;

                        // Function to calculate haversine distance between two coordinates
                        const calculateDistance = (lat1, lon1, lat2, lon2) => {
                            const R = 6371;
                            const dLat = (lat2 - lat1) * Math.PI / 180;
                            const dLon = (lon2 - lon1) * Math.PI / 180;
                            const a =
                                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                                Math.sin(dLon / 2) * Math.sin(dLon / 2);
                            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                            return R * c;
                        };

                        // Find the closest station
                        let closestStation = airQualityData[0];
                        let minDistance = Infinity;

                        airQualityData.forEach(station => {
                            const distance = calculateDistance(
                                userLat, userLng,
                                station.position[0], station.position[1]
                            );

                            if (distance < minDistance) {
                                minDistance = distance;
                                closestStation = station;
                            }
                        });

                        console.log(`User at [${userLat.toFixed(4)}, ${userLng.toFixed(4)}]`);
                        console.log(`Closest station: ${closestStation.name} - AQI: ${closestStation.aqi} - Distance: ${minDistance.toFixed(2)}km`);

                        // Determine status based on closest station AQI
                        const aqi = closestStation.aqi;

                        if (aqi <= 50) {
                            setStatus({
                                emoji: "😊",
                                title: "Great!",
                                message: "Perfect air quality to enjoy outdoor activities.",
                                background: "#d1fae5",
                                borderColor: "#10b981",
                                cardText: "Clean and healthy air",
                                cardColor: "green"
                            });
                        } else if (aqi <= 100) {
                            setStatus({
                                emoji: "😐",
                                title: "Moderate",
                                message: "Sensitive groups should reduce prolonged efforts. Athletes may consider light training or indoor activities.",
                                background: "#fef9c3",
                                borderColor: "#facc15",
                                cardText: "Acceptable air quality",
                                cardColor: "yellow"
                            });
                        } else {
                            setStatus({
                                emoji: "😷",
                                title: "Poor!",
                                message: "Avoid outdoor activities. Risk groups should stay in closed and well-ventilated environments. Athletes should suspend intense outdoor training.",
                                background: "#fee2e2",
                                borderColor: "#ef4444",
                                cardText: "Potentially hazardous air",
                                cardColor: "red"
                            });
                        }
                        updatePollutantBars(aqi);
                    },
                    () => {

                        console.log("Using default location");
                        updatePollutantBars(45);
                    }
                );
            } else {

                updatePollutantBars(45);
            }
        };

        const updatePollutantBars = (aqi) => {
            const pm = Math.min(aqi * 0.8, 100);
            const co2 = Math.min(aqi * 1.2, 100);
            const o3 = Math.min(aqi * 0.6, 100);

            document.getElementById("pm-bar")?.style.setProperty("width", pm + "%");
            document.getElementById("co2-bar")?.style.setProperty("width", co2 + "%");
            document.getElementById("o3-bar")?.style.setProperty("width", o3 + "%");
        };

        // Determine initial status
        determineStatusFromLocation();

        // Update every 30 seconds
        const interval = setInterval(determineStatusFromLocation, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="status-box-container">
            <div className="status-box" style={{ background: status.background, borderColor: status.borderColor }}>
                <h2>{status.emoji} {status.title}</h2>
                <p>{status.message}</p>
                <div className={`card ${status.cardColor}`} style={{ borderRadius: '8px', background: status.borderColor, color: '#fff', padding: '8px', textAlign: 'center' }}>
                    {status.cardText}
                </div>
            </div>
        </div>
    );
};

export default StatusBox;
