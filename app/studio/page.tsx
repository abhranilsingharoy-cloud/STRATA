import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Studio — About STRATA',
  description:
    'Learn about STRATA Architecture Studio — our story, philosophy, awards, and the team behind 180+ delivered projects worldwide.',
};

const steps = [
  { num: '1', title: 'Discovery & Brief', desc: 'Deep listening to understand your vision, lifestyle, site, and aspirations.' },
  { num: '2', title: 'Design Development', desc: 'Iterative sketches, 3D massing, and material studies refined collaboratively.' },
  { num: '3', title: 'Delivery & Build', desc: 'Meticulous construction administration ensuring the built outcome matches the design.' },
];

const partnerSteps = [
  { num: '1', title: 'Developer Partnerships', desc: 'We collaborate with forward-thinking developers to create places people genuinely want to be.' },
  { num: '2', title: 'Commercial Commissions', desc: 'Office parks, retail destinations, mixed-use schemes — we bring design intelligence to every brief.' },
  { num: '3', title: 'Hospitality & Culture', desc: 'Hotels, galleries, and civic buildings that earn their place in the urban fabric.' },
];

export default function StudioPage() {
  return (
    <>
      {/* Hero Redesign — Cinematic and Premium */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-end pt-[120px] pb-24 px-6 md:px-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/interior_gallery.jpg"
            alt="Architect-designed interior with glass walls and mountain views"
            className="w-full h-full object-cover animate-image-scale"
            style={{ filter: 'brightness(0.35)' }}
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
          {/* Main Title */}
          <div className="w-full lg:w-2/3">
            <p className="kicker text-accent mb-6 md:mb-10">[ Studio ]</p>
            <h1 className="font-display font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 7.5rem)', letterSpacing: '-0.02em' }}>
              LEADING THE
              <br />
              INDUSTRY WITH
              <br />
              A CLIENT-FIRST
              <br />
              FOCUS
            </h1>
          </div>
          
          {/* Glass Card CTA */}
          <div className="w-full sm:w-[400px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-2xl">
            <p className="text-white/80 font-body text-base leading-relaxed mb-8">
              We craft inspiring spaces that blend cutting-edge design with enduring functionality,
              turning your vision into reality.
            </p>
            <Link href="/contact"
              className="group inline-flex items-center w-full bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px] hover:bg-white hover:text-black transition-colors duration-300">
              <span className="px-6 flex-1 text-center">Get in Touch</span>
              <span className="flex items-center justify-center w-[52px] h-[52px] bg-black/20 group-hover:bg-black/5 transition-colors">
                <ArrowRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Studio story */}
      <section className="section-light py-24 md:py-36 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker mb-6">[ About Us ]</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <h2 className="font-display font-black text-black uppercase leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              WE ARE A PROFESSIONAL ARCHITECTURE STUDIO DEDICATED TO DESIGNING EXCEPTIONAL SPACES.
            </h2>
            <div className="space-y-6 text-neutral-gray text-base leading-relaxed">
              <p>Founded on the belief that great architecture transforms everyday life, STRATA brings together a multidisciplinary team of architects, interior designers, and project managers united by a passion for craft.</p>
              <p>With over 180 projects delivered across residential, commercial, and civic typologies, we have built a reputation for rigorous design thinking, honest material use, and seamless project delivery.</p>
              <p>Our studio operates as a single cohesive unit — from the first consultation through to the final handover — ensuring the integrity of the design is maintained at every stage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F4F4F4] py-20 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto grid grid-cols-3 divide-x divide-black/10">
          {[['180+', 'Projects Delivered'], ['$120M+', 'Built Value'], ['15', 'Design Awards']].map(([val, label]) => (
            <div key={label} className="px-8 md:px-16 text-center">
              <p className="font-display font-black text-black" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)' }}>{val}</p>
              <p className="text-neutral-gray text-sm mt-1 tracking-wide">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* For Clients */}
      <section className="section-light py-24 md:py-36 px-6 md:px-12 border-b border-black/10">
        <div className="max-w-[1600px] mx-auto">
          {/* Top Row: Kicker + Large Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-16 md:mb-24">
            <div className="md:col-span-3 lg:col-span-4">
              <p className="kicker uppercase font-bold tracking-widest text-neutral-gray">[ For Clients ]</p>
            </div>
            <div className="md:col-span-9 lg:col-span-8 md:pr-10">
              <h2 className="font-body text-black text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] font-medium tracking-tight">
                Designing a property requires the right strategy, structural knowledge, and strong execution. Our team ensures your project stands out, attracts the right attention, and achieves the best possible value. From conception to completion, we manage the entire process with professionalism and care.
              </h2>
            </div>
          </div>

          {/* Bottom Row: Image + Grid of Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Image */}
            <div className="md:col-span-6 lg:col-span-6 h-[400px] md:h-[600px]">
              <img src="/images/exterior_hero.jpg" alt="Modern residential architecture exterior" className="w-full h-full object-cover" />
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

      {/* For Partners */}
      <section className="bg-[#0B0B0C] py-24 md:py-36 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          {/* Top Row: Kicker + Large Paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 mb-16 md:mb-24">
            <div className="md:col-span-3 lg:col-span-4">
              <p className="kicker uppercase font-bold tracking-widest text-white/50">[ For Partners ]</p>
            </div>
            <div className="md:col-span-9 lg:col-span-8 md:pr-10">
              <h2 className="font-body text-white text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] font-medium tracking-tight">
                Collaborating with developers requires the right commercial strategy, market knowledge, and design excellence. Our studio ensures your development stands out, attracts tenants, and achieves the highest possible yield. From feasibility to handover, we manage the entire project with rigorous precision.
              </h2>
            </div>
          </div>

          {/* Bottom Row: Image + Grid of Numbers */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* Left Image */}
            <div className="md:col-span-6 lg:col-span-6 h-[400px] md:h-[600px]">
              <img src="/images/exterior_tower.jpg" alt="Commercial architecture project by STRATA" className="w-full h-full object-cover" />
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
                <span className="px-6">START A PROJECT</span>
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
