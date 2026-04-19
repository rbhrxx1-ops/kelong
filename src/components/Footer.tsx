"use client";

import Link from "next/link";

const BlacklaneLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="24" viewBox="0 0 158 32" fill="none" aria-label="Blacklane">
    <g clipPath="url(#clip-footer)">
      <path fill="#0F1319" d="M4.392 3.511H9.23c3.577 0 5.975 1.866 5.975 4.525 0 2.263-1.788 4.168-5.73 5.2-1.993.516-4.065 1.428-5.082 2.342zm6.057 25.404H4.392v-8.097c0-3.176 2.886-5.399 6.422-5.399 4.146 0 6.87 3.096 6.87 6.748 0 3.89-3.09 6.748-7.235 6.748M8.822 1.725H.327V30.7h10.935c6.34 0 10.283-3.254 10.283-8.573 0-4.407-2.682-7.264-7.764-8.177 3.13-.795 5.082-3.137 5.082-6.034 0-3.93-3.619-6.192-10.04-6.192M23.496 30.7h4.065V1.725h-4.065zm9.594-5c0-1.707 1.3-2.82 5.324-4.248 1.585-.555 4.472-1.508 4.837-2.183v2.898c0 3.652-2.845 6.35-6.503 6.35-2.357 0-3.658-1.111-3.658-2.818m2.438 5.397c3.374 0 6.422-1.468 7.723-4.01l.203 3.613h3.659V17.047c0-4.09-2.968-6.669-7.601-6.669-5.325 0-9.674 3.414-9.674 7.423H33.7c0-3.652 2.723-5.637 5.568-5.637 2.276 0 3.9 1.31 3.9 3.255v.992c-.65.675-3.374 1.588-5.243 2.183-4.39 1.429-6.828 3.334-6.828 6.272 0 3.057 2.52 5.28 6.625 5.28M50.43 30.7h4.065V1.725H50.43zm6.747 0h4.065V21.97c0-4.09 2.276-7.344 6.137-7.344 3.374 0 5.284 2.183 5.284 5.955V30.7h4.065V19.748c0-5.518-3.09-9.37-8.17-9.37-2.845 0-5.528 1.31-7.316 3.81V1.725h-4.065zm24.335 0h4.065V10.775h-4.065zm2.073-23.09c1.463 0 2.601-1.151 2.601-2.62 0-1.468-1.138-2.62-2.601-2.62-1.463 0-2.601 1.152-2.601 2.62 0 1.469 1.138 2.62 2.601 2.62m7.113 23.09h14.794v-3.493H94.762V1.725H90.7zm17.154-10.003c.325-3.97 3.09-7.026 6.99-7.026 3.9 0 6.544 3.057 6.747 7.026zm6.95-10.32c-6.178 0-11.097 4.804-11.097 10.718 0 5.915 4.919 10.72 11.097 10.72 4.187 0 7.764-2.104 9.755-5.28l-3.253-1.906c-1.3 2.064-3.658 3.493-6.502 3.493-3.9 0-6.828-2.818-7.031-6.748h17.235c.04-.476.081-.912.081-1.35 0-5.795-4.553-9.646-10.285-9.646m14.794 20.323h4.065V21.97c0-4.09 2.276-7.344 6.137-7.344 3.374 0 5.284 2.183 5.284 5.955V30.7h4.065V19.748c0-5.518-3.09-9.37-8.17-9.37-2.845 0-5.528 1.469-7.316 3.97v-3.573h-4.065zm24.335-10.003c.325-3.97 3.09-7.026 6.99-7.026 3.9 0 6.544 3.057 6.747 7.026zm6.95-10.32c-6.178 0-11.097 4.804-11.097 10.718 0 5.915 4.919 10.72 11.097 10.72 4.187 0 7.764-2.104 9.755-5.28l-3.253-1.906c-1.3 2.064-3.658 3.493-6.502 3.493-3.9 0-6.828-2.818-7.031-6.748h17.235c.04-.476.081-.912.081-1.35 0-5.795-4.553-9.646-10.285-9.646" />
    </g>
    <defs>
      <clipPath id="clip-footer">
        <path fill="#fff" d="M0 0h158v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

const footerColumns = [
  {
    title: "Company",
    links: ["How Blacklane works", "Career", "Press", "Blog", "Green initiatives", "Become a chauffeur partner"],
  },
  {
    title: "Blacklane for Business",
    links: ["Overview", "Corporations", "Travel agencies", "Strategic partnerships"],
  },
  {
    title: "Top cities",
    links: ["New York", "London", "Berlin", "Los Angeles", "Paris", "All cities"],
  },
  {
    title: "Explore",
    links: ["City-to-city rides", "Limousine service", "Chauffeur service", "Private car service", "Ground transportation", "Airport transfer", "All countries"],
  },
  {
    title: "City-to-City rides",
    links: ["New York - East Hampton", "Los Angeles - San Diego", "Miami - Palm Beach", "London - Bristol", "Dubai - Abu Dhabi", "Paris - Reims"],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    icon: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "rgb(251, 248, 242)", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 48px 0" }}>
        {/* Top: Logo + App badges */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <BlacklaneLogo />
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { label: "App Store", sub: "Download on the", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg> },
              { label: "Google Play", sub: "Get it on", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.73 0 2.24 0 2.9v18.2c0 .66.19 1.17.5 1.5l.08.07 10.2-10.2v-.24L.58 1.33.5 1.4zM20.17 10.57l-2.9-1.68-3.05 3.05 3.05 3.05 2.92-1.68c.83-.48.83-1.26-.02-1.74zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.07 4.17.24z"/></svg> },
            ].map((badge) => (
              <a
                key={badge.label}
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  background: "#0f1319",
                  color: "#ffffff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#2d2d2d"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#0f1319"; }}
              >
                {badge.icon}
                <div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", lineHeight: 1 }}>{badge.sub}</div>
                  <div style={{ fontSize: "12px", fontWeight: 600, lineHeight: 1.3 }}>{badge.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "32px",
            marginBottom: "40px",
          }}
          className="footer-grid"
        >
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0f1319",
                  marginBottom: "12px",
                  letterSpacing: "0.2px",
                }}
              >
                {col.title}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link} style={{ marginBottom: "8px" }}>
                    <Link
                      href="#"
                      style={{
                        fontSize: "13px",
                        color: "#6b7280",
                        textDecoration: "none",
                        transition: "color 0.15s",
                        lineHeight: 1.4,
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0f1319"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#6b7280"; }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(0,0,0,0.08)",
            padding: "20px 0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px" }}>
            <span style={{ fontSize: "13px", color: "#9ca3af" }}>©2026 Blacklane GmbH</span>
            {["Terms", "Privacy policy", "Legal notice", "Accessibility"].map((item) => (
              <Link
                key={item}
                href="#"
                style={{ fontSize: "13px", color: "#9ca3af", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#0f1319"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af"; }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#9ca3af",
                  borderRadius: "8px",
                  transition: "color 0.15s, background 0.15s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#0f1319";
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(0,0,0,0.05)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#9ca3af";
                  (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}
