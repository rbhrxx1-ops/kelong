"use client";

export default function SustainabilitySection() {
  return (
    <section
      style={{
        background: "rgb(251, 248, 242)",
        padding: "64px 48px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 600,
            color: "#0f1319",
            marginBottom: "36px",
            textAlign: "center",
          }}
        >
          Sustainability partners
        </h3>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* The Climate Pledge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "#1a7a4a",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "-0.5px",
              }}
            >
              CP
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#0f1319", lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.5px" }}>The</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#0f1319", lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.5px" }}>Climate</div>
              <div style={{ fontSize: "10px", fontWeight: 800, color: "#0f1319", lineHeight: 1.2, textTransform: "uppercase", letterSpacing: "0.5px" }}>Pledge</div>
            </div>
          </div>

          <div style={{ width: "1px", height: "40px", background: "rgba(0,0,0,0.12)" }} />

          {/* Leaders for Climate Action */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "2px solid #0f1319",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "14px",
                fontWeight: 800,
                color: "#0f1319",
              }}
            >
              L
            </div>
            <div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0f1319", lineHeight: 1.3 }}>leaders for</div>
              <div style={{ fontSize: "12px", fontWeight: 600, color: "#0f1319", lineHeight: 1.3 }}>climate action</div>
            </div>
          </div>

          <div style={{ width: "1px", height: "40px", background: "rgba(0,0,0,0.12)" }} />

          {/* South Pole */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#2563eb",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: 800,
              }}
            >
              SP
            </div>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "#0f1319" }}>south pole</span>
          </div>
        </div>

        {/* Carbon neutral badge */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "8px 20px",
              background: "rgba(26,122,74,0.08)",
              borderRadius: "100px",
              border: "1px solid rgba(26,122,74,0.2)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a7a4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span style={{ fontSize: "13px", fontWeight: 600, color: "#1a7a4a" }}>
              All rides are carbon offset by default
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
