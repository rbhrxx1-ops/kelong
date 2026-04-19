"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, Globe, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              Blacklane
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Our services <ChevronDown className="w-4 h-4" />
            </button>
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              For business <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              href="#"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              For chauffeurs
            </Link>
            <Link
              href="#"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Help
            </Link>
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-2">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-black hover:bg-gray-100"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4" />
              English <ChevronDown className="w-4 h-4" />
            </button>
            <button
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-full border transition-colors ${
                scrolled
                  ? "border-gray-300 text-gray-700 hover:border-gray-500 hover:text-black"
                  : "border-white/40 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              <User className="w-4 h-4" />
              Sign in
            </button>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-[#1a56db] rounded-full hover:bg-[#1d4ed8] transition-colors">
              Book now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`md:hidden p-2 rounded-md transition-colors ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center justify-between">
              Our services <ChevronDown className="w-4 h-4" />
            </button>
            <button className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center justify-between">
              For business <ChevronDown className="w-4 h-4" />
            </button>
            <Link href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              For chauffeurs
            </Link>
            <Link href="#" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Help
            </Link>
            <div className="pt-2 border-t border-gray-200 flex gap-2">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-full hover:border-gray-500">
                Sign in
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-semibold text-white bg-[#1a56db] rounded-full hover:bg-[#1d4ed8]">
                Book now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
