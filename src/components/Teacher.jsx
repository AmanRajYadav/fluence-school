import './Teacher.css';

const Teacher = () => {
    return (
        <section id="teacher" className="teacher-section section">
            <div className="container">
                <div className="teacher-grid">
                    {/* Left: Photo & Badge */}
                    <div className="teacher-image-col animate-fade-up">
                        <div className="teacher-image-wrapper">
                            {/* In the future, swap src to the actual teacher photo */}
                            <img src="/kid.png" alt="Aman Raj Yadav - Founder, Fluence" className="teacher-img" />
                            <div className="experience-badge">
                                <span className="years">6+</span>
                                <span className="text">Years<br />Teaching</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="teacher-content-col animate-fade-up delay-200">
                        <span className="section-subtitle">The Teacher</span>
                        <h2 className="section-title">Aman Raj Yadav</h2>

                        <div className="philosophy-quote">
                            <p>Fluence is my attempt to prove that <strong>if you change how a child thinks about learning, you change what they're capable of.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Teacher;
