"use client";

import { useState } from "react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90&fit=crop",
    title: "A welcome like no other",
    subtitle: "The door is opened for you. Your luggage is stowed. Everything is taken care of.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=90&fit=crop",
    title: "Professional chauffeurs",
    subtitle: "Every chauffeur is background-checked, trained, and committed to your comfort.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=90&fit=crop",
    title: "Premium vehicles",
    subtitle: "Travel in style with our fleet of luxury vehicles, always immaculate.",
  },
];

const features = [
  {
    title: "Available worldwide",
    desc: "Book rides in 64+ countries across 6 continents.",
    icon: "🌍",
  },
  {
    title: "High-end vehicles",
    desc: "Mercedes, BMW, Audi and more — always spotless.",
    icon: "🚗",
  },
  {
    title: "Safe travels",
    desc: "Every chauffeur is vetted, insured, and professional.",
    icon: "🛡️",
  },
];

export default function QualitySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <>
      {/* "Step in. Breathe out." heading */}
      <section
        style={{
          background: "#ffffff",
          padding: "80px 48px 40px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
            fontSize: "clamp(56px, 9vw, 104px)",
            fontWeight: 400,
            color: "rgba(15,19,25,0.12)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          Step in. Breathe out.
        </h2>
      </section>

      {/* Full-width image slider */}
      <section style={{ position: "relative", height: "65vh", minHeight: "400px", overflow: "hidden" }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              position: "absolute",
              inset: 0,
              opacity: index === current ? 1 : 0,
              transition: "opacity 0.7s ease",
            }}
          >
            <img
              src={slide.image}
              alt={slide.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 50%)",
              }}
            />
            {/* Text */}
            <div
              style={{
                position: "absolute",
                bottom: "48px",
                left: "48px",
                right: "48px",
                maxWidth: "560px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 400,
                  color: "#ffffff",
                  marginBottom: "8px",
                }}
              >
                {slide.title}
              </h3>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Prev / Next */}
        {[
          { fn: prev, side: "left", label: "Previous" },
          { fn: next, side: "right", label: "Next" },
        ].map(({ fn, side, label }) => (
          <button
            key={side}
            onClick={fn}
            aria-label={label}
            style={{
              position: "absolute",
              top: "50%",
              [side]: "20px",
              transform: "translateY(-50%)",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#ffffff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.35)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)"; }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {side === "left" ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
            </svg>
          </button>
        ))}

        {/* Dots */}
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "48px",
            display: "flex",
            gap: "8px",
          }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#ffffff" : "rgba(255,255,255,0.4)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* "Expect excellence." features */}
      <section
        style={{
          background: "#0f1319",
          padding: "80px 48px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
              fontSize: "clamp(48px, 6vw, 80px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "56px",
            }}
          >
            Expect excellence.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "40px",
            }}
            className="features-grid"
          >
            {features.map((feat) => (
              <div key={feat.title}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    marginBottom: "16px",
                  }}
                >
                  {feat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "8px",
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
