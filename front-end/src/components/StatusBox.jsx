import { useState, useEffect } from 'react';
import './StatusBox.css';

const StatusBox = () => {
    const [statusIndex, setStatusIndex] = useState(0);

    const statusOptions = [
        {
            emoji: "😊",
            title: "Great!",
            message: "Perfect air quality to enjoy outdoor activities.",
            background: "#d1fae5",
            borderColor: "#10b981",
            cardText: "Clean and healthy air",
            cardColor: "green",
            aqi: 45
        },
        {
            emoji: "😐",
            title: "Moderate",
            message: "Sensitive groups should reduce prolonged efforts. Athletes may consider light training or indoor activities.",
            background: "#fef9c3",
            borderColor: "#facc15",
            cardText: "Acceptable air quality",
            cardColor: "yellow",
            aqi: 110
        },
        {
            emoji: "😷",
            title: "Poor!",
            message: "Avoid outdoor activities. Risk groups should stay in closed and well-ventilated environments. Athletes should suspend intense outdoor training.",
            background: "#E74C3C",
            borderColor: "#ef4444",
            badgeColor: "#FF6B35",
            cardText: "Potentially hazardous air",
            cardColor: "red",
            textColor: "#212529",
            aqi: 175
        }
    ];

    const [status, setStatus] = useState(statusOptions[0]);

    useEffect(() => {
        const updatePollutantBars = (aqi) => {
            const pm = Math.min(aqi * 0.8, 100);
            const co2 = Math.min(aqi * 1.2, 100);
            const o3 = Math.min(aqi * 0.6, 100);

            document.getElementById("pm-bar")?.style.setProperty("width", pm + "%");
            document.getElementById("co2-bar")?.style.setProperty("width", co2 + "%");
            document.getElementById("o3-bar")?.style.setProperty("width", o3 + "%");
        };

        updatePollutantBars(statusOptions[statusIndex].aqi);

        const interval = setInterval(() => {
            setStatusIndex((prevIndex) => {
                const newIndex = (prevIndex + 1) % statusOptions.length;
                const newStatus = statusOptions[newIndex];
                setStatus(newStatus);

                updatePollutantBars(newStatus.aqi);

                console.log(`Status changed to: ${newStatus.title} (AQI: ${newStatus.aqi})`);

                return newIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [statusIndex, statusOptions]);

    return (
        <div className="status-box-container">
            <div className="status-box" style={{ background: status.background, borderColor: status.borderColor }}>
                <h2 style={{ color: status.textColor || 'var(--text-primary)' }}>{status.emoji} {status.title}</h2>
                <p style={{ color: status.textColor || 'var(--text-secondary)' }}>{status.message}</p>
                <div className={`card ${status.cardColor}`} style={{ borderRadius: '8px', background: status.borderColor, color: status.textColor || '#fff', padding: '8px', textAlign: 'center' }}>
                    {status.cardText}
                </div>
            </div>
        </div>
    );
};

export default StatusBox;
