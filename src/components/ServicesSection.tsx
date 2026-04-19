"use client";

import Link from "next/link";

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const services = [
  {
    id: "airport",
    label: "Airport transfers",
    title: "Smooth landings, every time.",
    description: "Delayed flight? Chauffeurs track arrivals and adjust accordingly. Plus, you have 1 hour of complimentary wait time just in case.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=85&fit=crop&crop=center",
    href: "#",
  },
  {
    id: "hourly",
    label: "Hourly and full day hire",
    title: "Seize the day.",
    description: "Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=85&fit=crop&crop=center",
    href: "#",
  },
  {
    id: "city",
    label: "City-to-city",
    title: "Between cities, done better.",
    description: "Turn long-distance journeys into time well spent. Arrive refreshed, not stressed.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=85&fit=crop&crop=center",
    href: "#",
  },
  {
    id: "enterprise",
    label: "Enterprise and agency solutions",
    title: "Corporate travel, simplified.",
    description: "One platform for companies and agencies to book, track, and manage all ground transportation.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=85&fit=crop&crop=center",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section
      style={{
        background: "rgb(174, 207, 243)",
        padding: "80px 48px",
      }}
    >
      {/* Section heading */}
      <div style={{ textAlign: "center", marginBottom: "56px" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
            fontSize: "clamp(48px, 7vw, 80px)",
            fontWeight: 400,
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.1,
            marginBottom: "12px",
          }}
        >
          Arrive at your best.
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "rgba(15,19,25,0.55)",
            fontWeight: 400,
          }}
        >
          Effortless journeys, tailored to you.
        </p>
      </div>

      {/* Cards grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
        className="services-grid"
      >
        {services.map((service) => (
          <div
            key={service.id}
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.25s ease, box-shadow 0.25s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Card image */}
            <div style={{ height: "220px", overflow: "hidden" }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  display: "block",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </div>

            {/* Card body */}
            <div style={{ padding: "20px 20px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#6b7280",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                {service.label}
              </span>
              <h3
                style={{
                  fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "#0f1319",
                  lineHeight: 1.3,
                  marginBottom: "10px",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  lineHeight: 1.6,
                  flex: 1,
                  marginBottom: "16px",
                }}
              >
                {service.description}
              </p>
              <Link
                href={service.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#0f63bd",
                  textDecoration: "none",
                  transition: "gap 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "6px"; }}
              >
                Learn more <ArrowRightIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
