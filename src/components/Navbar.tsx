"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ── Blacklane SVG Logo (exact from source) ── */
const BlacklaneLogo = ({ white }: { white?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="130"
    height="26"
    viewBox="0 0 158 32"
    fill="none"
    aria-label="Blacklane"
  >
    <g clipPath="url(#clip0)">
      <path
        fill={white ? "#ffffff" : "#0F1319"}
        d="M4.392 3.511H9.23c3.577 0 5.975 1.866 5.975 4.525 0 2.263-1.788 4.168-5.73 5.2-1.993.516-4.065 1.428-5.082 2.342zm6.057 25.404H4.392v-8.097c0-3.176 2.886-5.399 6.422-5.399 4.146 0 6.87 3.096 6.87 6.748 0 3.89-3.09 6.748-7.235 6.748M8.822 1.725H.327V30.7h10.935c6.34 0 10.283-3.254 10.283-8.573 0-4.407-2.682-7.264-7.764-8.177 3.13-.795 5.082-3.137 5.082-6.034 0-3.93-3.619-6.192-10.04-6.192M23.496 30.7h4.065V1.725h-4.065zm9.594-5c0-1.707 1.3-2.82 5.324-4.248 1.585-.555 4.472-1.508 4.837-2.183v2.898c0 3.652-2.845 6.35-6.503 6.35-2.357 0-3.658-1.111-3.658-2.818m2.438 5.397c3.374 0 6.422-1.468 7.723-4.01l.203 3.613h3.659V17.047c0-4.09-2.968-6.669-7.601-6.669-5.325 0-9.674 3.414-9.674 7.423H33.7c0-3.652 2.723-5.637 5.568-5.637 2.276 0 3.9 1.31 3.9 3.255v.992c-.65.675-3.374 1.588-5.243 2.183-4.39 1.429-6.828 3.334-6.828 6.272 0 3.057 2.52 5.28 6.625 5.28M50.43 30.7h4.065V1.725H50.43zm6.747 0h4.065V21.97c0-4.09 2.276-7.344 6.137-7.344 3.374 0 5.284 2.183 5.284 5.955V30.7h4.065V19.748c0-5.518-3.09-9.37-8.17-9.37-2.845 0-5.528 1.31-7.316 3.81V1.725h-4.065zm24.335 0h4.065V10.775h-4.065zm2.073-23.09c1.463 0 2.601-1.151 2.601-2.62 0-1.468-1.138-2.62-2.601-2.62-1.463 0-2.601 1.152-2.601 2.62 0 1.469 1.138 2.62 2.601 2.62m7.113 23.09h14.794v-3.493H94.762V1.725H90.7zm17.154-10.003c.325-3.97 3.09-7.026 6.99-7.026 3.9 0 6.544 3.057 6.747 7.026zm6.95-10.32c-6.178 0-11.097 4.804-11.097 10.718 0 5.915 4.919 10.72 11.097 10.72 4.187 0 7.764-2.104 9.755-5.28l-3.253-1.906c-1.3 2.064-3.658 3.493-6.502 3.493-3.9 0-6.828-2.818-7.031-6.748h17.235c.04-.476.081-.912.081-1.35 0-5.795-4.553-9.646-10.285-9.646m14.794 20.323h4.065V21.97c0-4.09 2.276-7.344 6.137-7.344 3.374 0 5.284 2.183 5.284 5.955V30.7h4.065V19.748c0-5.518-3.09-9.37-8.17-9.37-2.845 0-5.528 1.469-7.316 3.97v-3.573h-4.065zm24.335-10.003c.325-3.97 3.09-7.026 6.99-7.026 3.9 0 6.544 3.057 6.747 7.026zm6.95-10.32c-6.178 0-11.097 4.804-11.097 10.718 0 5.915 4.919 10.72 11.097 10.72 4.187 0 7.764-2.104 9.755-5.28l-3.253-1.906c-1.3 2.064-3.658 3.493-6.502 3.493-3.9 0-6.828-2.818-7.031-6.748h17.235c.04-.476.081-.912.081-1.35 0-5.795-4.553-9.646-10.285-9.646"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h158v32H0z" />
      </clipPath>
    </defs>
  </svg>
);

/* ── Chevron Down ── */
const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ── Globe icon ── */
const GlobeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

/* ── User icon ── */
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

/* ── Menu / X icons ── */
const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = scrolled || mobileOpen;

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "88px",
          display: "flex",
          alignItems: "center",
          padding: "0 48px",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          backgroundColor: isLight ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 1px 0 0 rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, marginRight: "auto" }}>
          <BlacklaneLogo white={!isLight} />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden-mobile">
          {["Our services", "For business"].map((item) => (
            <button
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 12px",
                fontSize: "16px",
                fontWeight: 500,
                color: isLight ? "#6e6e73" : "rgba(255,255,255,0.85)",
                background: "none",
                border: "none",
                cursor: "pointer",
                borderRadius: "8px",
                transition: "color 0.2s, background 0.2s",
                fontFamily: "inherit",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = isLight ? "#0f1319" : "#ffffff";
                (e.currentTarget as HTMLButtonElement).style.background = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = isLight ? "#6e6e73" : "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLButtonElement).style.background = "none";
              }}
            >
              {item} <ChevronDown />
            </button>
          ))}
          {["For chauffeurs", "Help"].map((item) => (
            <Link
              key={item}
              href="#"
              style={{
                padding: "8px 12px",
                fontSize: "16px",
                fontWeight: 500,
                color: isLight ? "#6e6e73" : "rgba(255,255,255,0.85)",
                textDecoration: "none",
                borderRadius: "8px",
                transition: "color 0.2s, background 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = isLight ? "#0f1319" : "#ffffff";
                (e.currentTarget as HTMLAnchorElement).style.background = isLight ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = isLight ? "#6e6e73" : "rgba(255,255,255,0.85)";
                (e.currentTarget as HTMLAnchorElement).style.background = "none";
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginLeft: "16px" }} className="hidden-mobile">
          {/* Language */}
          <button
            style={{
              display: "flex", alignItems: "center", gap: "4px",
              padding: "8px 12px", fontSize: "16px", fontWeight: 500,
              color: isLight ? "#6e6e73" : "rgba(255,255,255,0.85)",
              background: "none", border: "none", cursor: "pointer",
              borderRadius: "8px", fontFamily: "inherit",
            }}
          >
            <GlobeIcon /> English <ChevronDown />
          </button>

          {/* Sign in */}
          <button
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "8px 16px", fontSize: "16px", fontWeight: 500,
              color: isLight ? "#0f1319" : "#ffffff",
              background: "none",
              border: `1.5px solid ${isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)"}`,
              cursor: "pointer", borderRadius: "100px", fontFamily: "inherit",
              transition: "border-color 0.2s, background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = isLight ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = isLight ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.4)";
            }}
          >
            <UserIcon /> Sign in
          </button>

          {/* Book now */}
          <button
            style={{
              padding: "10px 20px", fontSize: "16px", fontWeight: 600,
              color: "#ffffff", background: "#0f63bd",
              border: "none", cursor: "pointer", borderRadius: "100px",
              fontFamily: "inherit", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0a4d96"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#0f63bd"; }}
          >
            Book now
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            padding: "8px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: isLight ? "#0f1319" : "#ffffff",
            marginLeft: "auto",
          }}
          className="show-mobile"
        >
          {mobileOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "88px",
            left: 0,
            right: 0,
            zIndex: 99,
            background: "#ffffff",
            borderTop: "1px solid #e5e5e5",
            padding: "16px 24px 24px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
          }}
        >
          {["Our services", "For business", "For chauffeurs", "Help"].map((item) => (
            <div key={item} style={{ padding: "12px 0", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontSize: "16px", fontWeight: 500, color: "#0f1319" }}>{item}</span>
            </div>
          ))}
          <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
            <button style={{ flex: 1, padding: "12px", fontSize: "15px", fontWeight: 500, color: "#0f1319", background: "none", border: "1.5px solid rgba(0,0,0,0.2)", borderRadius: "100px", cursor: "pointer", fontFamily: "inherit" }}>
              Sign in
            </button>
            <button style={{ flex: 1, padding: "12px", fontSize: "15px", fontWeight: 600, color: "#ffffff", background: "#0f63bd", border: "none", borderRadius: "100px", cursor: "pointer", fontFamily: "inherit" }}>
              Book now
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          header { padding: 0 20px !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
