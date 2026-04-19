"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    title: "A welcome like no other",
    subtitle: "The door is opened for you. Your luggage is stowed. Everything is taken care of.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
    title: "Professional chauffeurs",
    subtitle: "Every chauffeur is vetted, trained, and committed to your comfort.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1920&q=80",
    title: "Premium vehicles",
    subtitle: "Travel in style with our fleet of luxury vehicles, always immaculate.",
  },
];

export default function QualitySection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section className="relative">
      {/* Animated heading */}
      <div className="bg-white py-16 text-center overflow-hidden">
        <h2 className="text-6xl md:text-8xl font-light text-gray-200 tracking-tight leading-none">
          Step in. Breathe out.
        </h2>
      </div>

      {/* Full-width image slider */}
      <div className="relative h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 md:p-12">
              <div className="max-w-2xl">
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {slide.title}
                </h3>
                <p className="text-white/80 text-base md:text-lg">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 right-8 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
