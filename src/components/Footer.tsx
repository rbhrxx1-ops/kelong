import Link from "next/link";

const footerLinks = {
  Company: [
    { label: "How Blacklane works", href: "#" },
    { label: "Career", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Green initiatives", href: "#" },
    { label: "Become a chauffeur partner", href: "#" },
  ],
  "Blacklane for Business": [
    { label: "Overview", href: "#" },
    { label: "Corporations", href: "#" },
    { label: "Travel agencies", href: "#" },
    { label: "Strategic partnerships", href: "#" },
  ],
  "Top cities": [
    { label: "New York", href: "#" },
    { label: "London", href: "#" },
    { label: "Berlin", href: "#" },
    { label: "Los Angeles", href: "#" },
    { label: "Paris", href: "#" },
    { label: "All cities", href: "#" },
  ],
  Explore: [
    { label: "City-to-city rides", href: "#" },
    { label: "Limousine service", href: "#" },
    { label: "Chauffeur service", href: "#" },
    { label: "Private car service", href: "#" },
    { label: "Ground transportation", href: "#" },
    { label: "Airport transfer", href: "#" },
    { label: "All countries", href: "#" },
  ],
  "City-to-City rides": [
    { label: "New York - East Hampton", href: "#" },
    { label: "Los Angeles - San Diego", href: "#" },
    { label: "Miami - Palm Beach", href: "#" },
    { label: "London - Bristol", href: "#" },
    { label: "Dubai - Abu Dhabi", href: "#" },
    { label: "Paris - Reims", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top: Logo + App buttons */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <span className="text-2xl font-bold text-gray-900">Blacklane</span>
          <div className="flex gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors text-sm"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.73 0 2.24 0 2.9v18.2c0 .66.19 1.17.5 1.5l.08.07 10.2-10.2v-.24L.58 1.33.5 1.4zM20.17 10.57l-2.9-1.68-3.05 3.05 3.05 3.05 2.92-1.68c.83-.48.83-1.26-.02-1.74zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.07 4.17.24z" />
              </svg>
              Google Play
            </a>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-10">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>©2026 Blacklane GmbH</span>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Legal notice</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Accessibility</Link>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* X (Twitter) */}
            <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
