import { TreePine, Droplet, Wind, Leaf } from 'lucide-react';
import './TipsSection.css';

const TipsSection = () => {
    const tips = [
        {
            icon: <TreePine size={32} />,
            text: 'Plantar árvores ajuda a reduzir o ar poluente'
        },
        {
            icon: <Droplet size={32} />,
            text: 'Evite dias de corrida quando o ar é muito poluído'
        }
    ];

    const actions = [
        { icon: <Wind size={20} />, label: 'Vento' },
        { icon: <Leaf size={20} />, label: 'Plantas' },
        { icon: <TreePine size={20} />, label: 'Árvores' },
        { icon: <Droplet size={20} />, label: 'Água' }
    ];

    return (
        <div className="tips-section">
            <h3 className="tips-title">Tips & Curiosities</h3>

            <div className="tips-grid">
                {tips.map((tip, index) => (
                    <div key={index} className="tip-card">
                        <div className="tip-icon">{tip.icon}</div>
                        <p className="tip-text">{tip.text}</p>
                    </div>
                ))}
            </div>

            <div className="action-buttons">
                {actions.map((action, index) => (
                    <button key={index} className="action-button">
                        {action.icon}
                        <span>{action.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default TipsSection;
