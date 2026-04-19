export default function SustainabilitySection() {
  return (
    <section className="bg-[#f5f0e8] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-900 mb-10">
          Sustainability partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* The Climate Pledge */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">CP</span>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-gray-900 leading-tight">THE</div>
              <div className="text-xs font-bold text-gray-900 leading-tight">CLIMATE</div>
              <div className="text-xs font-bold text-gray-900 leading-tight">PLEDGE</div>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-300 hidden md:block" />

          {/* Leaders for Climate Action */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center">
              <span className="text-gray-800 text-xs font-bold">L</span>
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-gray-900 leading-tight">leaders for</div>
              <div className="text-xs font-semibold text-gray-900 leading-tight">climate action</div>
            </div>
          </div>

          <div className="w-px h-10 bg-gray-300 hidden md:block" />

          {/* South Pole */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">SP</span>
            </div>
            <span className="text-sm font-semibold text-gray-900">south pole</span>
          </div>
        </div>
      </div>
    </section>
  );
}
