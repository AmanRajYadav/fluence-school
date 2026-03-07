import './Philosophy.css';

const Philosophy = () => {
    return (
        <section id="philosophy" className="philosophy-section section">
            <div className="container">
                <div className="section-header text-center animate-fade-up">
                    <span className="section-subtitle">The Problem</span>
                    <h2 className="section-title">A Broken Foundation</h2>
                </div>

                <div className="problem-container glass-panel animate-fade-up delay-100">
                    <p className="lead-text">
                        Most math education is built on memorization over meaning. Students memorize formulas without understanding why they work. They freeze when the same concept appears differently.
                        <strong>This isn't a student failure. It's a system failure.</strong>
                    </p>
                    <div className="repair-badge">We fix it at the root.</div>
                </div>

                <div className="section-header text-center animate-fade-up delay-200 mt-5">
                    <span className="section-subtitle">My Approach</span>
                    <h2 className="section-title">Teaching from First Principles</h2>
                </div>

                <div className="philosophy-grid">
                    <div className="phi-card glass-panel animate-fade-up delay-300">
                        <div className="phi-icon">❓</div>
                        <h3>Why before How</h3>
                        <p>Before touching a formula, we understand the idea behind it. I ask "why does this work?" before "how do you use this?". Students derive understanding, not just borrow it.</p>
                    </div>

                    <div className="phi-card glass-panel animate-fade-up delay-400">
                        <div className="phi-icon">🧠</div>
                        <h3>Confusion is the Start</h3>
                        <p>Confusion is not the enemy—it's exactly where learning begins. I sit in that confusion with students and guide them out of it, rather than rushing past it.</p>
                    </div>

                    <div className="phi-card glass-panel animate-fade-up delay-500">
                        <div className="phi-icon">👁️</div>
                        <h3>Different Entry Points</h3>
                        <p>Every student needs a different entry point. Some need visuals, some need stories, some need real-world applications. I read the student before I teach the concept.</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;
