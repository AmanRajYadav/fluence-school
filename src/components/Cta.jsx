import './Cta.css';

const Cta = () => {
    return (
        <section className="cta-section" id="enquire">
            <div className="cta-background-word">THINK</div>
            <div className="container cta-content animate-fade-up">
                <div className="cta-dark-badge">
                    <span className="badge-line-1">20 Seats Total.</span>
                    <span className="badge-line-2">2 Batches. 10 Students Each.</span>
                </div>
                <h2 className="cta-title">
                    IS YOUR CHILD ONE?
                </h2>
                <p className="cta-desc">
                    Batches start March 20th. Small groups mean limited spots. If this resonates — reach out today.
                </p>
                <div className="cta-contact">
                    <span className="call-label">CALL NOW</span>
                    <a href="tel:7771000453" className="phone-number">777-1000-453</a>
                </div>
            </div>
        </section>
    );
};

export default Cta;
