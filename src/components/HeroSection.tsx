"use client";

import { useState } from "react";
import { MapPin, Calendar, Clock, ChevronDown } from "lucide-react";

export default function HeroSection() {
  const [tripType, setTripType] = useState<"oneway" | "hourly">("oneway");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-end pb-16 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-light text-white mb-10 tracking-tight">
          Your chauffeur awaits.
        </h1>

        {/* Booking form */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Trip type tabs */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setTripType("oneway")}
              className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                tripType === "oneway"
                  ? "bg-[#1a56db] text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              One way
            </button>
            <button
              onClick={() => setTripType("hourly")}
              className={`flex-1 py-3.5 text-sm font-semibold transition-colors ${
                tripType === "hourly"
                  ? "bg-[#1a56db] text-white"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              By the hour
            </button>
          </div>

          {/* Form fields */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              {/* Pickup location */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Pickup location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Address, airport, hotel, ..."
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                  />
                </div>
              </div>

              {/* Drop-off location */}
              {tripType === "oneway" && (
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                    Drop-off location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Address, airport, hotel, ..."
                      className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                    />
                  </div>
                </div>
              )}

              {/* Date */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Select a date"
                    className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db]"
                  />
                </div>
              </div>

              {/* Pickup time */}
              <div className="relative">
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                  Pickup time
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <select className="w-full pl-9 pr-8 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a56db]/30 focus:border-[#1a56db] appearance-none bg-white">
                    <option>3:45 PM</option>
                    <option>4:00 PM</option>
                    <option>4:15 PM</option>
                    <option>4:30 PM</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <button className="w-full py-3 text-sm font-semibold text-white bg-[#1a56db] rounded-xl hover:bg-[#1d4ed8] transition-colors">
              View options
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
