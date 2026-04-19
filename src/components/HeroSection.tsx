"use client";

import { useState } from "react";

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function HeroSection() {
  const [tripType, setTripType] = useState<"oneway" | "hourly">("oneway");

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: "48px",
        overflow: "hidden",
      }}
    >
      {/* Background: real chauffeur interior photo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('https://images.unsplash.com/photo-1549317661-bd32c8ce0729?w=1920&q=90&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Gradient overlay - subtle, like original */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.5) 100%)",
        }}
      />

      {/* Hero content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Main headline */}
        <h1
          style={{
            fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
            fontSize: "clamp(40px, 6vw, 64px)",
            fontWeight: 400,
            color: "#aecff3",
            letterSpacing: "0.25px",
            lineHeight: "1.125",
            marginBottom: "32px",
          }}
        >
          Your chauffeur awaits.
        </h1>

        {/* Booking widget */}
        <div
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
          }}
        >
          {/* Trip type toggle */}
          <div
            style={{
              display: "flex",
              background: "#f5f5f5",
              padding: "4px",
              margin: "16px 20px 0",
              borderRadius: "100px",
              gap: "2px",
            }}
          >
            {(["oneway", "hourly"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                style={{
                  flex: 1,
                  padding: "8px 16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "inherit",
                  background: tripType === type ? "#0f63bd" : "transparent",
                  color: tripType === type ? "#ffffff" : "#6b7280",
                  boxShadow: tripType === type ? "0 2px 8px rgba(15,99,189,0.3)" : "none",
                }}
              >
                {type === "oneway" ? "One way" : "By the hour"}
              </button>
            ))}
          </div>

          {/* Form fields */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: tripType === "oneway" ? "1fr 1fr 1fr 1fr auto" : "1fr 1fr 1fr auto",
              gap: "0",
              padding: "16px 20px 20px",
              alignItems: "end",
            }}
            className="booking-grid"
          >
            {/* Pickup */}
            <div style={{ padding: "0 12px 0 0", borderRight: "1px solid #e5e5e5" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>
                Pickup location
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPinIcon />
                <input
                  type="text"
                  placeholder="Address, airport, hotel, ..."
                  style={{
                    border: "none", outline: "none", fontSize: "14px", color: "#0f1319",
                    background: "transparent", width: "100%", fontFamily: "inherit",
                  }}
                />
              </div>
            </div>

            {/* Drop-off (only for one-way) */}
            {tripType === "oneway" && (
              <div style={{ padding: "0 12px", borderRight: "1px solid #e5e5e5" }}>
                <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>
                  Drop-off location
                </label>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <MapPinIcon />
                  <input
                    type="text"
                    placeholder="Address, airport, hotel, ..."
                    style={{
                      border: "none", outline: "none", fontSize: "14px", color: "#0f1319",
                      background: "transparent", width: "100%", fontFamily: "inherit",
                    }}
                  />
                </div>
              </div>
            )}

            {/* Date */}
            <div style={{ padding: "0 12px", borderRight: "1px solid #e5e5e5" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>
                Date
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <CalendarIcon />
                <input
                  type="text"
                  placeholder="Select a date"
                  style={{
                    border: "none", outline: "none", fontSize: "14px", color: "#0f1319",
                    background: "transparent", width: "100%", fontFamily: "inherit",
                  }}
                />
              </div>
            </div>

            {/* Pickup time */}
            <div style={{ padding: "0 12px", borderRight: "1px solid #e5e5e5" }}>
              <label style={{ display: "block", fontSize: "11px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px" }}>
                Pickup time
              </label>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <ClockIcon />
                <span style={{ fontSize: "14px", color: "#0f1319", flex: 1 }}>3:45 PM</span>
                <ChevronDownIcon />
              </div>
            </div>

            {/* View options button */}
            <div style={{ paddingLeft: "12px" }}>
              <button
                style={{
                  padding: "12px 24px",
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "#0f63bd",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0a4d96"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0f63bd"; }}
              >
                View options
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .booking-grid {
            grid-template-columns: 1fr !important;
          }
          .booking-grid > div {
            border-right: none !important;
            border-bottom: 1px solid #e5e5e5;
            padding: 8px 0 !important;
          }
          .booking-grid > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
