import { Sun, Cloud, Wind } from 'lucide-react';
import './StatusCards.css';

const StatusCards = () => {
    const cards = [
        {
            icon: <Sun size={32} />,
            title: 'Ar livre é saudável',
            bgColor: '#66bb6a'
        },
        {
            icon: <Cloud size={32} />,
            title: 'Qualidade razoável',
            bgColor: '#ffd54f'
        },
        {
            icon: <Wind size={32} />,
            title: 'Ar poluído, evite exposição',
            bgColor: '#ef5350'
        }
    ];

    return (
        <div className="status-cards">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="status-card"
                    style={{ background: card.bgColor }}
                >
                    <div className="card-icon">{card.icon}</div>
                    <p className="card-title">{card.title}</p>
                </div>
            ))}
        </div>
    );
};

export default StatusCards;
