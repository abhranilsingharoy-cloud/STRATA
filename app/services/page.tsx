import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, PenTool, Home, Layers, ClipboardList } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services — Architecture & Interior Design',
  description:
    'STRATA offers Architectural Design, Interior Design, Concept & Masterplanning, and Project Management. Explore our full range of architecture services.',
};

const services = [
  {
    id: 'architectural-design',
    icon: PenTool,
    title: 'Architectural Design',
    description: 'We approach every project as a unique opportunity — listening carefully, designing boldly, and delivering buildings that stand the test of time.',
    deliverables: ['Site Analysis & Feasibility', 'Concept Sketches & Massing', '3D Visualization', 'Planning Applications', 'Construction Documentation', 'Material & Specification Schedules'],
    image: '/images/exterior_hero.jpg',
    imageAlt: 'Architectural design process showing concept sketches and 3D models',
  },
  {
    id: 'interior-design',
    icon: Home,
    title: 'Interior Design',
    description: 'Thoughtful interiors that balance beauty with function. From material selections to lighting strategies, every detail is considered.',
    deliverables: ['Space Planning & Layout', 'Material & Finish Palette', 'Furniture Specification', 'Lighting Design', 'Custom Joinery Design', 'Art & Accessories Curation'],
    image: '/images/interior_living.jpg',
    imageAlt: 'Interior design — architect-designed living space with glass walls and concrete finish',
  },
  {
    id: 'masterplanning',
    icon: Layers,
    title: 'Concept & Masterplanning',
    description: 'Strategic vision at every scale — from a single infill lot to a multi-hectare urban quarter. We shape places people want to live, work, and gather.',
    deliverables: ['Urban Context Analysis', 'Zoning & Massing Strategy', 'Landscape Integration', 'Sustainability Framework', 'Phasing Plans', 'Stakeholder Consultation'],
    image: '/images/exterior_tower.jpg',
    imageAlt: 'Masterplanning concept for urban architecture development',
  },
  {
    id: 'project-management',
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Expert oversight from groundbreaking through handover — coordinating contractors, consultants, and clients to ensure every project is delivered on time and on budget.',
    deliverables: ['Contractor Procurement', 'Programme & Budget Control', 'Site Inspections', 'Quality Assurance', 'Risk Management', 'Defects Liability Oversight'],
    image: '/images/interior_kitchen.jpg',
    imageAlt: 'Project management — architect reviewing construction documents on site',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0B0C] pt-[120px] pb-24 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker text-white/50 mb-6">[ Services ]</p>
          <h1
            className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', letterSpacing: '-0.03em' }}
          >
            EXCEPTIONAL
            <br />
            ARCHITECTURE
            <br />
            &amp; DESIGN
            <br />
            SERVICES
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
                  <p className={`kicker ${mutedColor} mb-5`}>Deliverables include:</p>
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
                  <span className="px-6">Enquire About This Service</span>
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
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-accent py-20 px-6 md:px-20 text-center">
        <p className="font-display font-black text-white uppercase text-2xl md:text-4xl mb-6">
          Ready to Start Your Project?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-black text-white text-xs font-semibold tracking-widest uppercase h-[52px]"
        >
          <span className="px-8">Book a Consultation</span>
          <span className="flex items-center justify-center w-[52px] h-[52px] bg-white">
            <ArrowRight size={16} strokeWidth={2.5} color="#000" />
          </span>
        </Link>
      </section>
    </>
  );
}
