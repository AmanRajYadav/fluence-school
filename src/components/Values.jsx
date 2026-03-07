import './Values.css';

const Values = () => {
    const coreValues = [
        {
            title: "Understanding over Performance",
            desc: "I'd rather a student genuinely grasp 70% than fake-perform 100%.",
            icon: "💡"
        },
        {
            title: "Curiosity over Compliance",
            desc: "I want students who ask 'but why?' not students who nod and copy.",
            icon: "🔍"
        },
        {
            title: "Dignity in Struggle",
            desc: "Making mistakes is part of the process. My classroom is psychologically safe.",
            icon: "🤝"
        },
        {
            title: "Progress over Comparison",
            desc: "We measure a student against their past self, not against other students.",
            icon: "📈"
        },
        {
            title: "Real Thinking, Not Tricks",
            desc: "I actively avoid 'shortcut culture.' If a student can't explain their answer, they don't really know it yet.",
            icon: "⚙️"
        }
    ];

    return (
        <section id="values" className="values-section section">
            <div className="container">
                <div className="section-header text-center animate-fade-up">
                    <span className="section-subtitle">What drives us</span>
                    <h2 className="section-title">Core Values</h2>
                </div>

                <div className="values-list">
                    {coreValues.map((value, index) => (
                        <div
                            className={`value-item glass-panel animate-fade-up delay-${(index % 5 + 1) * 100}`}
                            key={index}
                        >
                            <div className="value-icon">{value.icon}</div>
                            <div className="value-content">
                                <h3>{value.title}</h3>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
