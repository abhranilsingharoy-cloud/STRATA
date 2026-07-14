import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform — Eco Architect AI',
  description:
    'Learn about Eco Architect AI — our vision, technology, and how we are bridging geospatial intelligence and Generative AI for smarter urban planning.',
};

const steps = [
  { num: '1', title: 'Upload Data', desc: 'Upload high-resolution satellite imagery or topography maps of your target development area.' },
  { num: '2', title: 'Set Objectives', desc: 'Define your planning constraints: budget, housing density, flood mitigation, or green space targets.' },
  { num: '3', title: 'Generate Plans', desc: 'Our LLM-driven engine analyzes the terrain and generates optimal, sustainable urban masterplans in minutes.' },
];

const partnerSteps = [
  { num: '1', title: 'Generative Zoning', desc: 'Automated land-use allocation that perfectly balances commercial, residential, and industrial zones.' },
  { num: '2', title: 'Disaster Resilience', desc: 'Predictive modeling for flood drainage and urban heat island mitigation strategies.' },
  { num: '3', title: 'Data-Driven Insights', desc: 'Detailed analytics and reports backing every generated planning recommendation.' },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero Redesign — Cinematic and Premium */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-[120px] pb-24 px-6 md:px-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/eco_ai_hero.jpg"
            alt="AI generated satellite view of a smart city"
            className="w-full h-full object-cover animate-image-scale grayscale opacity-90"
            style={{ filter: 'brightness(0.35)' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          {/* Main Title */}
          <div className="w-full lg:w-2/3">
            <p className="kicker text-accent mb-6 md:mb-10">[ Platform ]</p>
            <h1 className="font-display font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 7.5rem)', letterSpacing: '-0.02em' }}>
              BRIDGING
              <br />
              GEOSPATIAL
              <br />
              INTELLIGENCE &
              <br />
              GENERATIVE AI
            </h1>
          </div>
          
          {/* Glass Card CTA */}
          <div className="w-full sm:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
            <p className="text-white/80 font-body text-base leading-relaxed mb-8">
              We empower architects to make faster, data-driven, and environmentally responsible planning decisions.
            </p>
            <Link href="/contact"
              className="group inline-flex items-center w-full bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px] hover:bg-white hover:text-black transition-colors duration-300">
              <span className="px-6 flex-1 text-center">Request Demo</span>
              <span className="flex items-center justify-center w-[52px] h-[52px] bg-black/20 group-hover:bg-black/5 transition-colors">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision story */}
      <section className="section-light py-24 md:py-36 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker mb-6">[ Vision ]</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display font-black text-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              WE ARE REVOLUTIONIZING HOW URBAN PLANNERS DESIGN SUSTAINABLE CITIES.
            </h2>
            <div className="space-y-6 text-neutral-gray text-base leading-relaxed">
              <p>Eco Architect AI aims to bridge geospatial intelligence and Generative AI, enabling architects to make faster, data-driven, and environmentally responsible planning decisions.</p>
              <p>By analyzing satellite imagery alongside complex urban requirements, our platform reduces the time and effort required for preliminary urban design from months down to a few days.</p>
              <p>From smart city master planning to sustainable urban redevelopment and disaster-resilient city design, our AI generates actionable recommendations that respect the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F4F4F4] py-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-3 divide-x divide-black/10">
          {[['10M+', 'Acres Analyzed'], ['50+', 'Cities Planned'], ['15%', 'Carbon Reduction']].map(([val, label]) => (
            <div key={label} className="px-8 md:px-16 text-center">
              <p className="font-display font-black text-black" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>{val}</p>
              <p className="text-neutral-gray text-sm mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="section-light py-24 md:py-36 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          {/* Top Row: Kicker + Large Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-16 md:mb-24">
            <div className="md:col-span-3 lg:col-span-4">
              <p className="kicker uppercase font-bold tracking-widest text-neutral-gray">[ How It Works ]</p>
            </div>
            <div className="md:col-span-9 lg:col-span-8 md:pr-10">
              <h2 className="font-body text-black text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] font-medium tracking-tight">
                Our AI analyzes terrain, land cover, and infrastructure from satellite imagery. A Large Language Model combines this geospatial analysis with smart city principles to generate comprehensive, actionable planning recommendations.
              </h2>
            </div>
          </div>

          {/* Bottom Row: Image + Grid of Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Image */}
            <div className="md:col-span-6 lg:col-span-6 h-[400px] md:h-[600px]">
              <img src="/images/exterior_villa.jpg" alt="Satellite view representation" className="w-full h-full object-cover" />
            </div>
            
            {/* Right Numbered List (2 Columns) */}
            <div className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 content-start pt-4">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-4">
                  <span className="text-accent font-body font-semibold text-sm md:text-base pt-0.5 flex-shrink-0">[{s.num}]</span>
                  <p className="text-neutral-gray font-body text-sm md:text-base leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Eco Architect AI */}
      <section className="bg-[#0B0B0C] py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Top Row: Kicker + Large Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-16 md:mb-24">
            <div className="md:col-span-3 lg:col-span-4">
              <p className="kicker uppercase font-bold tracking-widest text-white/50">[ Core Capabilities ]</p>
            </div>
            <div className="md:col-span-9 lg:col-span-8 md:pr-10">
              <h2 className="font-body text-white text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] font-medium tracking-tight">
                Empower your development projects with data. Our platform ensures your masterplan is optimized for traffic flow, public transport accessibility, and renewable energy placement right from the start.
              </h2>
            </div>
          </div>

          {/* Bottom Row: Image + Grid of Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Image */}
            <div className="md:col-span-6 lg:col-span-6 h-[400px] md:h-[600px]">
              <img src="/images/exterior_tower.jpg" alt="Abstract architectural view" className="w-full h-full object-cover grayscale opacity-80" />
            </div>
            
            {/* Right Numbered List (2 Columns) */}
            <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 content-start pt-4">
                {partnerSteps.map((s) => (
                  <div key={s.num} className="flex gap-4">
                    <span className="text-accent font-body font-semibold text-sm md:text-base pt-0.5 flex-shrink-0">[{s.num}]</span>
                    <p className="text-white/60 font-body text-sm md:text-base leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact"
                className="mt-16 sm:mt-auto inline-flex items-center self-start bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px] hover:bg-white hover:text-black transition-colors duration-300">
                <span className="px-6">REQUEST DEMO</span>
                <span className="flex items-center justify-center w-[52px] h-[52px] bg-black/20">
                  <ArrowRight size={16} strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
