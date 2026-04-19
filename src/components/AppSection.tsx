export default function AppSection() {
  return (
    <section className="bg-[#f5f0e8] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <div>
          <h2 className="text-5xl md:text-6xl font-light text-gray-900 leading-tight mb-6">
            We move<br />with you.
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Have all your journeys in the palm of your hand with the Blacklane app.
          </p>
          <div className="flex flex-wrap gap-3">
            {/* App Store button */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div>
                <div className="text-xs text-gray-300 leading-none">Download on the</div>
                <div className="text-sm font-semibold leading-tight">App Store</div>
              </div>
            </a>

            {/* Google Play button */}
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.5 1.4C.19 1.73 0 2.24 0 2.9v18.2c0 .66.19 1.17.5 1.5l.08.07 10.2-10.2v-.24L.58 1.33.5 1.4zM20.17 10.57l-2.9-1.68-3.05 3.05 3.05 3.05 2.92-1.68c.83-.48.83-1.26-.02-1.74zM4.17.24l12.6 7.27-2.72 2.72L3.18.44C3.48.27 3.87.07 4.17.24z" />
              </svg>
              <div>
                <div className="text-xs text-gray-300 leading-none">Get it on</div>
                <div className="text-sm font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: App mockup */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-lg">
            {/* Browser mockup */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Browser chrome */}
              <div className="bg-gray-100 px-4 py-2.5 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4 bg-white rounded-md px-3 py-1 text-xs text-gray-500 text-center">
                  blacklane.com
                </div>
              </div>

              {/* App content mockup */}
              <div className="p-6 bg-white">
                <div className="text-sm font-semibold text-gray-900 mb-4">Choose your experience</div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {["First Class", "Business Class", "Electric"].map((cls, i) => (
                    <div
                      key={cls}
                      className={`rounded-xl p-3 text-center text-xs font-medium border-2 transition-colors ${
                        i === 0
                          ? "border-[#1a56db] bg-[#1a56db]/5 text-[#1a56db]"
                          : "border-gray-200 text-gray-600"
                      }`}
                    >
                      <div className="w-10 h-6 bg-gray-200 rounded mx-auto mb-2" />
                      {cls}
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 mb-3">
                  <div className="text-xs font-semibold text-gray-900 mb-1">First Class</div>
                  <div className="text-xs text-gray-500">Mercedes S-Class or similar</div>
                </div>
                <button className="w-full py-2.5 text-sm font-semibold text-white bg-[#1a56db] rounded-xl">
                  Reserve First Class
                </button>
              </div>
            </div>

            {/* Phone mockup overlay */}
            <div className="absolute -left-8 bottom-4 w-36 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-800 px-3 py-2">
                <div className="w-8 h-1 bg-gray-600 rounded mx-auto" />
              </div>
              <div className="p-3">
                <div className="text-xs font-semibold text-gray-900 mb-2">My rides</div>
                <div className="space-y-2">
                  {["London City Airport", "Upper Bank St"].map((loc) => (
                    <div key={loc} className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a56db]" />
                      <div className="text-xs text-gray-600 truncate">{loc}</div>
                    </div>
                  ))}
                </div>
                <button className="mt-3 w-full py-1.5 text-xs font-semibold text-white bg-[#1a56db] rounded-lg">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
