import { Search, Bell, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1 className="logo">Aeris</h1>
                <div className="header-actions">
                    <button className="icon-button">
                        <Search size={20} />
                    </button>
                    <button className="icon-button">
                        <Bell size={20} />
                    </button>
                    <button className="icon-button">
                        <Menu size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
