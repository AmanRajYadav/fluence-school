import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    FLUENCE
                </div>
                <div className="footer-address">
                    <p>Rajaswa Colony, Near Mark Hospital</p>
                    <p>Sarkanda, Bilaspur, Chhattisgarh</p>
                </div>
                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Fluence
                </div>
            </div>
        </footer>
    );
};

export default Footer;
