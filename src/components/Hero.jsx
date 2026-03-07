import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="container hero-container">

                <div className="hero-content">
                    <div className="hero-badge animate-fade-up">
                        <span className="dot"></span> Bilaspur's Premium Math Class
                    </div>
                    <h1 className="hero-title animate-fade-up delay-100">
                        STOP MEMORIZING.<br />START <span className="highlight">UNDERSTANDING.</span>
                    </h1>
                    <p className="hero-subtitle animate-fade-up delay-200">
                        A state-of-the-art Class 10 math experience built from first principles. We don't teach tricks—we build thinkers.
                    </p>

                    <div className="hero-stats animate-fade-up delay-300">
                        <div className="stat-item glass-panel">
                            <span className="stat-value">10</span>
                            <span className="stat-label">Students / Batch</span>
                        </div>
                        <div className="stat-item glass-panel">
                            <span className="stat-value">20th</span>
                            <span className="stat-label">March Start</span>
                        </div>
                    </div>

                    <div className="hero-cta animate-fade-up delay-400">
                        <a href="#philosophy" className="btn-primary">Explore Philosophy</a>
                        <div className="hero-contact glass-panel">
                            <span className="call-text">To Enquire Call:</span>
                            <span className="call-number">777-1000-453</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper animate-fade-up delay-200">
                    <div className="hero-image-glow"></div>
                    <img src="/kid.png" alt="Student pointing to head, thinking" className="hero-image" />
                </div>

            </div>

        </section>
    );
};

export default Hero;
