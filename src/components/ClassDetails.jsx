import './ClassDetails.css';

const ClassDetails = () => {
    return (
        <section id="class-details" className="class-details-section section">
            <div className="container">

                <div className="gamification-banner glass-panel animate-fade-up">
                    <div className="badge-icon">🎖️</div>
                    <div className="banner-content">
                        <h3>Learning meets Gamification</h3>
                        <p>Engagement is a prerequisite for deep learning. We use XP systems, streaks, and challenges to make mastering math genuinely rewarding.</p>
                    </div>
                </div>

                <div className="details-grid">

                    {/* JOIN ONLY IF */}
                    <div className="criteria-box join-box glass-panel animate-fade-up delay-100">
                        <h3>JOIN ONLY IF</h3>
                        <ul>
                            <li>You are actually interested in Math and solving problems.</li>
                            <li>You want to understand the "WHY" behind every formula and process.</li>
                            <li>You embrace challenges instead of avoiding them.</li>
                        </ul>
                    </div>

                    {/* DO NOT JOIN IF */}
                    <div className="criteria-box avoid-box glass-panel animate-fade-up delay-200">
                        <h3>DO NOT JOIN IF</h3>
                        <ul>
                            <li>You love "Ratta-Marna" or memorizing without deep understanding.</li>
                            <li>You care more about passing exams than building thinking skills.</li>
                            <li>You only want shortcuts and quick tricks to bypass learning.</li>
                        </ul>
                    </div>

                </div>

                {/* BATCH INFO CARD */}
                <div className="batch-info-card glass-panel animate-fade-up delay-300">
                    <div className="batch-header">
                        <h2>Batch Details</h2>
                        <div className="seats-badge">ONLY 20 SEATS TOTAL</div>
                    </div>

                    <div className="batch-meta">
                        <div className="meta-item">
                            <span className="meta-label">Batches</span>
                            <span className="meta-value">2 (10 Students Each)</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Start Date</span>
                            <span className="meta-value">March 20th</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Schedule</span>
                            <span className="meta-value">Mon-Fri | 5-6:30 PM & 6:30-8 PM</span>
                        </div>
                        <div className="meta-item">
                            <span className="meta-label">Fees</span>
                            <span className="meta-value">2500/- per month</span>
                        </div>
                    </div>

                    <div className="cta-wrapper">
                        <a href="tel:7771000453" className="btn-primary pulse-btn">Call 777-1000-453 to Enquire</a>
                        <p className="address">Rajaswa Colony, Near Mark Hospital, Sarkanda, Bilaspur</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ClassDetails;
