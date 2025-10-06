import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './DataPanel.css';

const DataPanel = () => {
    const [dataMode, setDataMode] = useState('historical');

    // Sample data for the chart
    const data = [
        { time: '00:00', value: 45 },
        { time: '04:00', value: 42 },
        { time: '08:00', value: 48 },
        { time: '12:00', value: 55 },
        { time: '16:00', value: 52 },
        { time: '20:00', value: 47 },
    ];

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
                    <span className="aqi-number">45</span>
                    <span className="aqi-label">AQI</span>
                </div>
                <div className="aqi-status good">
                    <span className="status-dot"></span>
                    <span>Good quality</span>
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={data}>
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
