import './Header.css';

const Header = () => {
    return (
        <header className="site-header animate-fade-up">
            <div className="logo-container">
                <img src="/logo.png" alt="Fluence Logo" className="logo-img" />
                <span className="logo-text">Fluence</span>
            </div>
            <div className="location-text">Bilaspur</div>
        </header>
    );
};

export default Header;
