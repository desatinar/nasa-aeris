import './InfoCard.css';

const InfoCard = () => {
    return (
        <div className="info-card">
            <div className="info-content">
                <h3>Important Facts</h3>
                <p>
                    Prolonged exposure to PM2.5 particles can cause airway inflammation, reduce lung function, and worsen conditions like Chronic Obstructive Pulmonary Disease (COPD).
                </p>
                <a className="info-btn" href="https://www.epa.gov/pmcourse/particle-pollution-and-respiratory-effects?utm_source=chatgpt.com">
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default InfoCard;
