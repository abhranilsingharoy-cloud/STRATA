import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases — Eco Architect AI',
  description:
    'Explore Eco Architect AI use cases spanning smart city masterplanning, flood resilience, sustainable zoning, and mobility optimization.',
};

const projects = [
  { title: 'Singapore Smart District', location: 'Singapore', category: 'Masterplanning', year: '2024', slug: 'singapore-smart-district', image: '/images/exterior_hero.jpg' },
  { title: 'Miami Coastal Defense', location: 'Miami, FL', category: 'Resilience', year: '2024', slug: 'miami-coastal', image: '/images/exterior_tower.jpg' },
  { title: 'Copenhagen Eco-Zone', location: 'Copenhagen, DK', category: 'Zoning', year: '2023', slug: 'copenhagen-eco', image: '/images/exterior_villa.jpg' },
  { title: 'Tokyo Mobility Hub', location: 'Tokyo, JP', category: 'Mobility', year: '2023', slug: 'tokyo-mobility', image: '/images/interior_living.jpg' },
  { title: 'London Green Commons', location: 'London, UK', category: 'Masterplanning', year: '2023', slug: 'london-commons', image: '/images/interior_gallery.jpg' },
  { title: 'Malibu Cliffside Resilience', location: 'Malibu, CA', category: 'Resilience', year: '2022', slug: 'malibu-resilience', image: '/images/exterior_hero.jpg' },
  { title: 'Berlin Tech Campus', location: 'Berlin, DE', category: 'Zoning', year: '2022', slug: 'berlin-tech', image: '/images/abstract_detail.jpg' },
  { title: 'Vermont Eco-Village', location: 'Vermont, US', category: 'Masterplanning', year: '2021', slug: 'vermont-eco', image: '/images/exterior_villa.jpg' },
  { title: 'Dubai Transit Network', location: 'Dubai, UAE', category: 'Mobility', year: '2021', slug: 'dubai-transit', image: '/images/exterior_tower.jpg' },
];

const categories = ['All', 'Masterplanning', 'Resilience', 'Zoning', 'Mobility'];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B0B0C] pt-[120px] pb-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker text-white/50 mb-4">[ Use Cases ]</p>
          <h1 className="font-display font-black text-white uppercase leading-none"
            style={{ fontSize: 'clamp(3rem, 9vw, 11rem)', letterSpacing: '-0.03em' }}>
            GENERATED
            <br />
            PLANS
          </h1>
        </div>
      </section>

      {/* Filter tabs (static — JS filter can be added later) */}
      <section className="bg-white border-b border-black/10 px-6 md:px-20 sticky top-[60px] z-30">
        <div className="max-w-[1600px] mx-auto flex gap-0 overflow-x-auto">
          {categories.map((cat, i) => (
            <span
              key={cat}
              className={`px-6 py-4 text-xs font-semibold tracking-widest uppercase cursor-pointer whitespace-nowrap border-b-2 transition-colors ${
                i === 0 ? 'border-accent text-black' : 'border-transparent text-neutral-gray hover:text-black'
              }`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={`group relative overflow-hidden ${i % 3 === 1 ? 'md:mt-16' : ''}`}
            >
              <Link href={`/projects/${project.slug}`} aria-label={`View ${project.title} use case`}>
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={project.image}
                    alt={`${project.title} — ${project.location} generated plan`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-90"
                  />
                  <div className="absolute top-4 right-4 arrow-chip w-12 h-12 bg-accent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="bg-[#EBEBEB] p-6 border-t border-white">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="kicker text-neutral-gray mb-1">{project.category} — {project.year}</p>
                      <h2 className="font-body font-semibold text-black text-lg">{project.title}</h2>
                      <p className="text-neutral-gray text-sm mt-1">{project.location}</p>
                    </div>
                    <div className="arrow-chip w-10 h-10 bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
