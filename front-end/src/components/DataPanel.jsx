import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './DataPanel.css';

const DataPanel = () => {
    const [dataMode, setDataMode] = useState('historical');

    const historicalData = [
        { time: '00:00', value: 45 },
        { time: '04:00', value: 42 },
        { time: '08:00', value: 48 },
        { time: '12:00', value: 55 },
        { time: '16:00', value: 52 },
        { time: '20:00', value: 47 },
    ];

    const aiForecastData = [
        { time: 'Now', value: 47 },
        { time: '+4h', value: 52 },
        { time: '+8h', value: 60 },
        { time: '+12h', value: 68 },
        { time: '+16h', value: 62 },
        { time: '+20h', value: 55 },
        { time: '+24h', value: 50 },
    ];

    const dataForGraph = dataMode === 'historical' ? historicalData : aiForecastData;

    const currentAQI = dataMode === 'historical'
        ? historicalData[historicalData.length - 1].value
        : aiForecastData[0].value;

    const getAQIStatus = (aqi) => {
        if (aqi <= 50) return { label: 'Good quality', class: 'good' };
        if (aqi <= 100) return { label: 'Moderate', class: 'moderate' };
        return { label: 'Poor quality', class: 'bad' };
    };

    const aqiStatus = getAQIStatus(currentAQI);

    return (
        <div className="data-panel">
            <div className="mode-toggle">
                <button
                    className={`mode-btn ${dataMode === 'historical' ? 'active' : ''}`}
                    onClick={() => setDataMode('historical')}
                >
                    Historical Data
                </button>
                <button
                    className={`mode-btn ${dataMode === 'forecast' ? 'active' : ''}`}
                    onClick={() => setDataMode('forecast')}
                >
                    AI Forecast
                </button>
            </div>

            <div className="panel-header">
                <h3>Data Period</h3>
                <select className="period-select">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last year</option>
                </select>
            </div>

            <div className="aqi-info">
                <div className="aqi-value">
                    <span className="aqi-number">{currentAQI}</span>
                    <span className="aqi-label">AQI</span>
                </div>
                <div className={`aqi-status ${aqiStatus.class}`}>
                    <span className="status-dot"></span>
                    <span>{aqiStatus.label}</span>
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={dataForGraph}>
                        <XAxis
                            dataKey="time"
                            stroke="#6C757D"
                            fontSize={11}
                            tickLine={false}
                            axisLine={{ stroke: '#E0E0E0' }}
                        />
                        <YAxis
                            stroke="#6C757D"
                            fontSize={11}
                            tickLine={false}
                            axisLine={{ stroke: '#E0E0E0' }}
                        />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#4A62A3"
                            strokeWidth={3}
                            dot={{ fill: '#4A62A3', r: 5, strokeWidth: 2, stroke: '#FFFFFF' }}
                            activeDot={{ r: 7, stroke: '#3A5293', strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="nasa-logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
                    alt="NASA Logo"
                />
            </div>
        </div>
    );
};

export default DataPanel;
