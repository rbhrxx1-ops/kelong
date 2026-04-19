"use client";

const AppStoreBadge = () => (
  <a
    href="#"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 18px",
      background: "#0f1319",
      color: "#ffffff",
      borderRadius: "12px",
      textDecoration: "none",
      transition: "background 0.2s",
    }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2d2d2d"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0f1319"; }}
    aria-label="Download on the iOS App Store"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
    <div>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", lineHeight: 1, marginBottom: "2px" }}>Download on the</div>
      <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1 }}>App Store</div>
    </div>
  </a>
);

const GooglePlayBadge = () => (
  <a
    href="#"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 18px",
      background: "#0f1319",
      color: "#ffffff",
      borderRadius: "12px",
      textDecoration: "none",
      transition: "background 0.2s",
    }}
    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2d2d2d"; }}
    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0f1319"; }}
    aria-label="Get it on Google Play"
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.73 0 2.24 0 2.9v18.2c0 .66.19 1.17.5 1.5l.08.07 10.2-10.2v-.24L.58 1.33.5 1.4zM20.17 10.57l-2.9-1.68-3.05 3.05 3.05 3.05 2.92-1.68c.83-.48.83-1.26-.02-1.74zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.07 4.17.24z" />
    </svg>
    <div>
      <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.7)", lineHeight: 1, marginBottom: "2px" }}>Get it on</div>
      <div style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1 }}>Google Play</div>
    </div>
  </a>
);

export default function AppSection() {
  return (
    <section
      style={{
        background: "rgb(251, 248, 242)",
        padding: "80px 48px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}
        className="app-grid"
      >
        {/* Left: Text */}
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', 'PP Fragment', Georgia, serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 400,
              color: "#0f1319",
              lineHeight: 1.125,
              marginBottom: "20px",
            }}
          >
            We move<br />with you.
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#6b7280",
              lineHeight: 1.6,
              marginBottom: "32px",
              maxWidth: "380px",
            }}
          >
            Have all your journeys in the palm of your hand with the Blacklane app.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </div>

        {/* Right: App mockup */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          {/* Desktop browser mockup */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.06)",
              width: "100%",
              maxWidth: "480px",
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                background: "#f5f5f7",
                padding: "10px 16px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                borderBottom: "1px solid rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ display: "flex", gap: "6px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
              </div>
              <div
                style={{
                  flex: 1,
                  background: "#ffffff",
                  borderRadius: "6px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  color: "#6b7280",
                  textAlign: "center",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                blacklane.com
              </div>
            </div>

            {/* App content */}
            <div style={{ padding: "20px" }}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0f1319",
                  marginBottom: "16px",
                }}
              >
                Choose your experience
              </div>

              {/* Vehicle class selector */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginBottom: "16px" }}>
                {[
                  { name: "First Class", active: true },
                  { name: "Business Class", active: false },
                  { name: "Electric", active: false },
                ].map((cls) => (
                  <div
                    key={cls.name}
                    style={{
                      border: cls.active ? "2px solid #0f63bd" : "1.5px solid #e5e5e5",
                      borderRadius: "12px",
                      padding: "12px 8px",
                      textAlign: "center",
                      background: cls.active ? "rgba(15,99,189,0.04)" : "#ffffff",
                    }}
                  >
                    {/* Car silhouette placeholder */}
                    <div
                      style={{
                        width: "48px",
                        height: "24px",
                        background: cls.active ? "rgba(15,99,189,0.15)" : "#f0f0f0",
                        borderRadius: "4px",
                        margin: "0 auto 8px",
                      }}
                    />
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        color: cls.active ? "#0f63bd" : "#6b7280",
                      }}
                    >
                      {cls.name}
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected class info */}
              <div
                style={{
                  background: "#f8f8f8",
                  borderRadius: "12px",
                  padding: "14px 16px",
                  marginBottom: "12px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#0f1319" }}>First Class</div>
                  <div style={{ fontSize: "12px", color: "#9ca3af", marginTop: "2px" }}>Mercedes S-Class or similar</div>
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#0f1319" }}>from $89</div>
              </div>

              <button
                style={{
                  width: "100%",
                  padding: "12px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  background: "#0f63bd",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                Reserve First Class
              </button>
            </div>
          </div>

          {/* Phone mockup overlay */}
          <div
            style={{
              position: "absolute",
              left: "-32px",
              bottom: "16px",
              width: "140px",
              background: "#ffffff",
              borderRadius: "20px",
              boxShadow: "0 16px 48px rgba(0,0,0,0.16)",
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            <div style={{ background: "#1a1a1a", padding: "8px 12px" }}>
              <div style={{ width: "32px", height: "4px", background: "#444", borderRadius: "2px", margin: "0 auto" }} />
            </div>
            <div style={{ padding: "12px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, color: "#0f1319", marginBottom: "10px" }}>My rides</div>
              {[
                { dot: "#0f63bd", text: "London City Airport" },
                { dot: "#10b981", text: "Upper Bank St" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: item.dot, flexShrink: 0 }} />
                  <div style={{ fontSize: "10px", color: "#6b7280", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.text}</div>
                </div>
              ))}
              <button
                style={{
                  width: "100%",
                  padding: "7px",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#ffffff",
                  background: "#0f63bd",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  marginTop: "4px",
                  fontFamily: "inherit",
                }}
              >
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .app-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
