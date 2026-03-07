import './Quote.css';

const Quote = () => {
    return (
        <section className="quote-strip-section">
            <div className="container">
                <div className="quote-strip glass-panel animate-fade-up">
                    <p className="quote-text">
                        "The world taught you — <span className="highlight-text">'Memorize the answer.'</span> I teach you — <span className="highlight-text">'Ask the question.'</span><br className="desktop-break" /> That is the difference. One gives marks. The other gives a mind that thinks for life."
                    </p>
                    <div className="quote-author">— Aman Raj Yadav</div>
                </div>
            </div>
        </section>
    );
};

export default Quote;
