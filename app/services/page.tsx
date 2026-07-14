import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PenTool, Home, Layers, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Features — Eco Architect AI',
  description:
    'Explore Eco Architect AI features: Green Space Optimization, Flood & Drainage Management, Transport Planning, and Sustainable Zoning.',
};

const services = [
  {
    id: 'green-space',
    icon: PenTool,
    title: 'Green Space Optimization',
    description: 'AI-driven placement of parks, green corridors, and urban forests to maximize ecological impact and improve resident well-being.',
    deliverables: ['Canopy Coverage Analysis', 'Urban Heat Island Mitigation', 'Biodiversity Corridors', 'Recreational Space Planning'],
    image: '/images/exterior_hero.jpg',
    imageAlt: 'Green space optimization using satellite data',
  },
  {
    id: 'flood-drainage',
    icon: Home,
    title: 'Flood & Drainage Management',
    description: 'Predictive modeling and topographic analysis to design resilient urban drainage systems and prevent flooding in high-risk zones.',
    deliverables: ['Topographical Water Flow Maps', 'Stormwater Catchment Zones', 'Permeable Surface Allocation', 'Sea Level Rise Projections'],
    image: '/images/exterior_villa.jpg',
    imageAlt: 'Flood resilience modeling for urban coastal areas',
  },
  {
    id: 'transport',
    icon: Layers,
    title: 'Transport Planning',
    description: 'Optimize public transit routes, pedestrian pathways, and road networks to reduce congestion and lower municipal carbon emissions.',
    deliverables: ['Traffic Flow Simulation', 'Public Transit Catchment Analysis', 'Walkability Indexing', 'Bike Lane Integration'],
    image: '/images/exterior_tower.jpg',
    imageAlt: 'Transport planning and traffic flow simulation',
  },
  {
    id: 'zoning',
    icon: ClipboardList,
    title: 'Sustainable Zoning',
    description: 'Generative land-use allocation that perfectly balances commercial, residential, and industrial zones while adhering to local regulations.',
    deliverables: ['Mixed-Use Density Mapping', 'Commercial Viability Analysis', 'Housing Capacity Projections', 'Regulatory Compliance Checking'],
    image: '/images/interior_gallery.jpg',
    imageAlt: 'Sustainable zoning maps and masterplan overlays',
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0B0C] pt-[120px] pb-24 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker text-white/50 mb-6">[ Features ]</p>
          <h1
            className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', letterSpacing: '-0.03em' }}
          >
            INTELLIGENT
            <br />
            URBAN
            <br />
            PLANNING
            <br />
            TOOLS
          </h1>
        </div>
      </section>

      {/* Services — each gets full section with alternating dark/light */}
      {services.map((service, i) => {
        const Icon = service.icon;
        const isDark = i % 2 !== 0;
        const bg = isDark ? 'bg-[#0B0B0C]' : 'bg-white';
        const textColor = isDark ? 'text-white' : 'text-black';
        const mutedColor = isDark ? 'text-white/50' : 'text-neutral-gray';
        const borderColor = isDark ? 'border-white/10' : 'border-black/10';
        const imageOrder = i % 2 === 0 ? 'lg:order-2' : 'lg:order-1';
        const contentOrder = i % 2 === 0 ? 'lg:order-1' : 'lg:order-2';

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${bg} py-24 md:py-36 px-6 md:px-20`}
            aria-labelledby={`service-${service.id}-heading`}
          >
            <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={contentOrder}>
                <div className="flex items-center gap-3 mb-8">
                  <Icon size={28} strokeWidth={1.5} className={textColor} aria-hidden="true" />
                  <p className={`kicker ${mutedColor}`}>[ {String(i + 1).padStart(2, '0')} ]</p>
                </div>
                <h2
                  id={`service-${service.id}-heading`}
                  className={`font-display font-black ${textColor} uppercase leading-none mb-6`}
                  style={{ fontSize: 'clamp(2rem, 4vw, 4.5rem)', letterSpacing: '-0.02em' }}
                >
                  {service.title}
                </h2>
                <p className={`${mutedColor} text-base leading-relaxed mb-10 max-w-[440px]`}>
                  {service.description}
                </p>
                {/* Deliverables list */}
                <div className={`border-t ${borderColor} pt-8`}>
                  <p className={`kicker ${mutedColor} mb-5`}>Capabilities include:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent flex-shrink-0 rounded-full" />
                        <span className={`text-sm ${mutedColor}`}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-10 inline-flex items-center bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px]"
                >
                  <span className="px-6">Explore This Feature</span>
                  <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
                    <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
                  </span>
                </Link>
              </div>

              {/* Image */}
              <div className={`relative overflow-hidden aspect-[4/5] ${imageOrder}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-accent py-20 px-6 md:px-20 text-center">
        <p className="font-display font-black text-white uppercase text-2xl md:text-4xl mb-6">
          Ready to Start Planning?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-black text-white text-xs font-semibold tracking-widest uppercase h-[52px]"
        >
          <span className="px-8">Request a Demo</span>
          <span className="flex items-center justify-center w-[52px] h-[52px] bg-white">
            <ArrowRight size={16} strokeWidth={2.5} color="#000" />
          </span>
        </Link>
      </section>
    </>
  );
}
