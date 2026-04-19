import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "airport",
    label: "Airport transfers",
    title: "Smooth landings, every time.",
    description:
      "Delayed flight? Chauffeurs track arrivals and adjust accordingly. Plus, you have 1 hour of complimentary wait time just in case.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    href: "#",
  },
  {
    id: "hourly",
    label: "Hourly and full day hire",
    title: "Seize the day.",
    description:
      "Reserve a dedicated chauffeur from 2 to 24 hours. They'll be on standby as long as you need them.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    href: "#",
  },
  {
    id: "city",
    label: "City-to-city",
    title: "Between cities, done better.",
    description:
      "Turn long-distance journeys into time well spent. Arrive refreshed, not stressed.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    href: "#",
  },
  {
    id: "enterprise",
    label: "Enterprise and agency solutions",
    title: "Corporate travel, simplified.",
    description:
      "One platform for companies and agencies to book, track, and manage all ground transportation.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    href: "#",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#d6e4f0] py-20 px-4">
      {/* Section heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-5xl md:text-6xl font-light text-gray-300 mb-4 tracking-tight">
          Arrive at your best.
        </h2>
        <p className="text-lg text-gray-500">Effortless journeys, tailored to you.</p>
      </div>

      {/* Service cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
          >
            {/* Card image */}
            <div className="relative h-52 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card content */}
            <div className="p-5">
              <span className="text-xs font-semibold text-[#1a56db] uppercase tracking-wider">
                {service.label}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mt-1.5 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a56db] hover:gap-2.5 transition-all"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
