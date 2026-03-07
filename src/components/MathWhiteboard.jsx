import { useEffect } from 'react';
import './MathWhiteboard.css';

const MathWhiteboard = () => {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          setTimeout(() => el.classList.add('visible'), parseInt(el.dataset.d || '0', 10));
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.math, .ch').forEach((el, i) => {
      el.dataset.d = ((i % 4) * 60).toString();
      io.observe(el);
    });

    const handleScroll = () => {
      const sy = window.scrollY;
      document.querySelectorAll('.math.visible').forEach((el, i) => {
        el.style.transform = `translateY(${sy * (i % 2 === 0 ? 0.025 : -0.018)}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="math-bg-container">
      {/* ═══ REAL NUMBERS ═══ */}
      <div className="math r1 dk xl"><div className="wt">x = p₁ · p₂ · … · pₙ</div><svg className="ul" width="300" height="12"><path className="dp" d="M 0 8 C 80 2 200 13 300 7" stroke="#0d0d1a" strokeWidth="1.5" fill="none" /></svg></div>
      <div className="math r2 bl lg"><div className="wt">HCF(a,b) × LCM(a,b) = a × b</div></div>
      <div className="math r3 gy md"><div className="wt">p₁ ≤ p₂ ≤ p₃ ≤ … ≤ pₙ</div></div>

      {/* number line SVG */}
      <div className="math s1">
        <svg width="160" height="50" viewBox="0 0 160 50">
          <path className="dp" d="M 5 25 L 155 25" stroke="#1a3a6e" strokeWidth="2" fill="none" style={{ strokeDasharray: 300, strokeDashoffset: 300 }} />
          <path className="dp" d="M 40 18 L 40 32" stroke="#1a3a6e" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 80 18 L 80 32" stroke="#1a3a6e" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 120 18 L 120 32" stroke="#1a3a6e" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
        </svg>
      </div>

      {/* ═══ POLYNOMIALS ═══ */}
      <div className="math r4 dk xl"><div className="wt">α + β = −b/a</div></div>
      <div className="math r5 bl lg"><div className="wt">α · β = c/a</div></div>
      <div className="math r6 rd md"><div className="wt">α + β + γ = −b/a</div><div className="wt" style={{ marginTop: '5px' }}>αβ + βγ + γα = c/a</div><div className="wt" style={{ marginTop: '5px' }}>αβγ = −d/a</div></div>

      {/* curve SVG */}
      <div className="math s2">
        <svg width="160" height="110" viewBox="0 0 160 110">
          <path className="dp" d="M 5 100 L 155 100" stroke="#888" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 200, strokeDashoffset: 200 }} />
          <path className="dp" d="M 80 5 L 80 105" stroke="#888" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 150, strokeDashoffset: 150 }} />
          <path className="dp" d="M 10 95 Q 80 5 150 95" stroke="#7a1a1a" strokeWidth="3" fill="none" style={{ strokeDasharray: 350, strokeDashoffset: 350 }} />
        </svg>
      </div>

      {/* ═══ LINEAR EQUATIONS ═══ */}
      <div className="math r7 dk lg"><div className="wt">a₁/a₂ ≠ b₁/b₂</div></div>
      <div className="math r8 bl md"><div className="wt">a₁/a₂ = b₁/b₂ = c₁/c₂</div><div className="wt" style={{ marginTop: '6px' }}>a₁/a₂ = b₁/b₂ ≠ c₁/c₂</div></div>

      {/* intersecting lines */}
      <div className="math s3">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <path className="dp" d="M 5 125 L 135 15" stroke="#1a3a6e" strokeWidth="2.5" fill="none" style={{ strokeDasharray: 360, strokeDashoffset: 360 }} />
          <path className="dp" d="M 5 15 L 135 125" stroke="#7a1a1a" strokeWidth="2.5" fill="none" style={{ strokeDasharray: 360, strokeDashoffset: 360 }} />
        </svg>
      </div>

      {/* ═══ QUADRATIC ═══ */}
      <div className="math r9 dk xl"><div className="wt">x = (−b ± √(b²−4ac)) / 2a</div><svg className="ul" width="400" height="12"><path className="dp" d="M 0 8 C 100 2 270 14 400 7" stroke="#0d0d1a" strokeWidth="1.5" fill="none" /></svg></div>
      <div className="math r10 bl lg"><div className="wt">D = b² − 4ac</div></div>

      {/* parabola */}
      <div className="math s4">
        <svg width="180" height="130" viewBox="0 0 180 130">
          <path className="dp" d="M 10 120 L 170 120" stroke="#888" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 250, strokeDashoffset: 250 }} />
          <path className="dp" d="M 90 10 L 90 125" stroke="#888" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
          <path className="dp" d="M 20 115 Q 90 5 160 115" stroke="#7a1a1a" strokeWidth="3" fill="none" style={{ strokeDasharray: 400, strokeDashoffset: 400 }} />
        </svg>
      </div>

      {/* ═══ AP ═══ */}
      <div className="math r11 dk xl"><div className="wt">aₙ = a + (n−1)d</div></div>
      <div className="math r12 bl lg"><div className="wt">Sₙ = n/2 · [2a + (n−1)d]</div></div>
      <div className="math r13 gn md"><div className="wt">Sₙ = n/2 · (a + l)</div><div className="wt" style={{ marginTop: '6px' }}>1+2+…+n = n(n+1)/2</div></div>

      {/* AP dots */}
      <div className="math s5">
        <svg width="200" height="50" viewBox="0 0 200 50">
          <path className="dp" d="M 5 25 L 195 25" stroke="#1a5c3a" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 280, strokeDashoffset: 280 }} />
          <path className="dp" d="M 20 18 L 20 32" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 60 18 L 60 32" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 100 18 L 100 32" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 140 18 L 140 32" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
          <path className="dp" d="M 180 18 L 180 32" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 30, strokeDashoffset: 30 }} />
        </svg>
      </div>

      {/* ═══ COORDINATE GEOMETRY ═══ */}
      <div className="math r14 dk xl"><div className="wt">PQ = √[(x₂−x₁)² + (y₂−y₁)²]</div><svg className="ul" width="440" height="12"><path className="dp" d="M 0 8 C 110 2 290 14 440 7" stroke="#0d0d1a" strokeWidth="1.5" fill="none" /></svg></div>
      <div className="math r15 bl lg"><div className="wt">x = (m₁x₂ + m₂x₁) / (m₁+m₂)</div><div className="wt" style={{ marginTop: '6px' }}>y = (m₁y₂ + m₂y₁) / (m₁+m₂)</div></div>
      <div className="math r16 rd md"><div className="wt">M = ((x₁+x₂)/2 , (y₁+y₂)/2)</div></div>

      {/* axes + two points */}
      <div className="math s6">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <path className="dp" d="M 10 140 L 145 140" stroke="#555" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
          <path className="dp" d="M 20 5 L 20 145" stroke="#555" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
          <path className="dp" d="M 35 120 L 130 40" stroke="#1a3a6e" strokeWidth="2" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
          <path className="dp" d="M 35 114 L 35 126 L 47 126" stroke="#7a1a1a" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 60, strokeDashoffset: 60 }} />
        </svg>
      </div>

      {/* ═══ TRIGONOMETRY ═══ */}
      <div className="math r17 dk xl"><div className="wt">sin²A + cos²A = 1</div><svg className="ul" width="280" height="12"><path className="dp" d="M 0 8 C 70 2 190 14 280 8" stroke="#0d0d1a" strokeWidth="1.5" fill="none" /></svg></div>
      <div className="math r18 bl lg"><div className="wt">cosec A = 1/sin A</div><div className="wt" style={{ marginTop: '6px' }}>sec A = 1/cos A</div><div className="wt" style={{ marginTop: '6px' }}>tan A = sin A / cos A</div></div>
      <div className="math r19 rd md"><div className="wt">1 + tan²A = sec²A</div><div className="wt" style={{ marginTop: '6px' }}>cot²A + 1 = cosec²A</div></div>

      {/* right triangle */}
      <div className="math s7">
        <svg width="155" height="135" viewBox="0 0 155 135">
          <path className="dp" d="M 10 125 L 145 125 L 10 15 Z" stroke="#0d0d1a" strokeWidth="2.5" fill="none" style={{ strokeDasharray: 500, strokeDashoffset: 500 }} />
          <path className="dp" d="M 10 115 L 20 115 L 20 125" stroke="#0d0d1a" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 50, strokeDashoffset: 50 }} />
        </svg>
      </div>

      {/* ═══ CIRCLES ═══ */}
      <div className="math r20 dk xl"><div className="wt">Area = (θ/360°) × πr²</div></div>
      <div className="math r21 bl lg"><div className="wt">l = (θ/360°) × 2πr</div></div>

      {/* ═══ STATISTICS ═══ */}
      <div className="math r22 dk xl"><div className="wt">x̄ = Σfᵢxᵢ / Σfᵢ</div></div>
      <div className="math r23 bl lg"><div className="wt">Mode = l + [(f₁−f₀)/(2f₁−f₀−f₂)] × h</div></div>
      <div className="math r24 gn md"><div className="wt">Median = l + [(n/2 − cf)/f] × h</div></div>

      {/* histogram bars */}
      <div className="math s8">
        <svg width="150" height="110" viewBox="0 0 150 110">
          <path className="dp" d="M 10 100 L 140 100" stroke="#555" strokeWidth="1.5" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
          <path className="dp" d="M 20 100 L 20 70 L 45 70 L 45 100" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 200, strokeDashoffset: 200 }} />
          <path className="dp" d="M 45 100 L 45 40 L 70 40 L 70 100" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 220, strokeDashoffset: 220 }} />
          <path className="dp" d="M 70 100 L 70 55 L 95 55 L 95 100" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 210, strokeDashoffset: 210 }} />
          <path className="dp" d="M 95 100 L 95 80 L 120 80 L 120 100" stroke="#1a5c3a" strokeWidth="2" fill="none" style={{ strokeDasharray: 180, strokeDashoffset: 180 }} />
        </svg>
      </div>

      {/* ═══ PROBABILITY ═══ */}
      <div className="math r25 dk xl"><div className="wt">P(E) = favourable / total outcomes</div><svg className="ul" width="420" height="12"><path className="dp" d="M 0 8 C 110 2 280 14 420 7" stroke="#0d0d1a" strokeWidth="1.5" fill="none" /></svg></div>
      <div className="math r26 bl lg"><div className="wt">P(E) + P(Ē) = 1</div><div className="wt" style={{ marginTop: '6px' }}>0 ≤ P(E) ≤ 1</div></div>

    </div>
  );
};

export default MathWhiteboard;
