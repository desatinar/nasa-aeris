import './Pollutants.css';

const Pollutants = () => {
    return (
        <div className="pollutants">
            <h3>Pollutant Levels</h3>
            <div className="pollutant" title="PM: Particulate matter affecting respiratory system">
                <span>PM</span>
                <div className="bar">
                    <div id="pm-bar"></div>
                </div>
            </div>
            <div className="pollutant" title="CO₂: Gas produced by vehicles and industries">
                <span>CO₂</span>
                <div className="bar">
                    <div id="co2-bar"></div>
                </div>
            </div>
            <div className="pollutant" title="O₃: Tropospheric ozone causing irritation and fatigue">
                <span>O₃</span>
                <div className="bar">
                    <div id="o3-bar"></div>
                </div>
            </div>
        </div>
    );
};

export default Pollutants;
