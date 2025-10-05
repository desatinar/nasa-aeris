import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import './DataPanel.css';

const DataPanel = () => {
    // Dados de exemplo para o gráfico
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
            <div className="panel-header">
                <h3>Data Period</h3>
                <select className="period-select">
                    <option>Últimos 7 dias</option>
                    <option>Últimos 30 dias</option>
                    <option>Último ano</option>
                </select>
            </div>

            <div className="aqi-info">
                <div className="aqi-value">
                    <span className="aqi-number">45</span>
                    <span className="aqi-label">AQI</span>
                </div>
                <div className="aqi-status good">
                    <span className="status-dot"></span>
                    <span>Boa qualidade</span>
                </div>
            </div>

            <div className="chart-container">
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={data}>
                        <XAxis dataKey="time" stroke="#888" fontSize={12} />
                        <YAxis stroke="#888" fontSize={12} />
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="#66bb6a"
                            strokeWidth={2}
                            dot={{ fill: '#66bb6a', r: 4 }}
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
