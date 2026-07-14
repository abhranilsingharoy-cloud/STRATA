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
      {/* Hero split — exact Doorly screenshot 5 pattern */}
      <section className="relative w-full min-h-screen overflow-hidden pt-[60px]">
        <div className="absolute inset-0">
          <img
            src="/images/interior_gallery.jpg"
            alt="Architect-designed interior with glass walls and mountain views"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 flex h-screen min-h-[600px]">
          <div className="flex flex-col justify-center w-full md:w-[55%] bg-[#0B0B0C]/85 backdrop-blur-sm p-10 md:p-20 lg:p-28">
            <p className="kicker text-white/50 mb-6">[ Studio ]</p>
            <h1 className="font-display font-black text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 6.5rem)', letterSpacing: '-0.02em' }}>
              LEADING THE INDUSTRY WITH A CLIENT-FIRST FOCUS
            </h1>
          </div>
          <div className="hidden md:flex flex-col justify-end w-[45%] bg-accent p-12">
            <p className="text-white font-body text-base leading-relaxed mb-8 max-w-[280px]">
              We craft inspiring spaces that blend cutting-edge design with enduring functionality,
              turning your vision into reality.
            </p>
            <Link href="/contact"
              className="inline-flex items-center self-start bg-white text-black text-xs font-semibold tracking-widest uppercase h-[52px]">
              <span className="px-6">CONTACT</span>
              <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
                <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
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
      <section className="section-light py-24 md:py-36 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker mb-8">[ For Clients ]</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display font-black text-black uppercase leading-none mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.02em' }}>
                EXCEPTIONAL DESIGN, DELIVERED WITH CLARITY.
              </h2>
              <p className="text-neutral-gray text-base leading-relaxed mb-10 max-w-[420px]">
                Our residential clients trust us with the most important spaces in their lives. We guide them
                through every decision with transparency, creativity, and care.
              </p>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.num} className="flex gap-4">
                    <span className="text-accent font-semibold text-sm tracking-wide flex-shrink-0 pt-0.5">[{s.num}]</span>
                    <div>
                      <p className="font-semibold text-black text-sm mb-1">{s.title}</p>
                      <p className="text-neutral-gray text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src="/images/exterior_hero.jpg"
                alt="Modern residential architecture exterior" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* For Partners */}
      <section className="bg-[#0B0B0C] py-24 md:py-36 px-6 md:px-20">
        <div className="max-w-[1600px] mx-auto">
          <p className="kicker text-white/50 mb-8">[ For Partners ]</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1">
              <img src="/images/exterior_tower.jpg"
                alt="Commercial architecture project by STRATA" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-display font-black text-white uppercase leading-none mb-8"
                style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', letterSpacing: '-0.02em' }}>
                COLLABORATING WITH DEVELOPERS & ORGANISATIONS.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-10 max-w-[420px]">
                We partner with developers, institutions, and commercial clients to create buildings
                that are commercially astute, design-led, and built to last.
              </p>
              <div className="space-y-6">
                {partnerSteps.map((s) => (
                  <div key={s.num} className="flex gap-4">
                    <span className="text-accent font-semibold text-sm tracking-wide flex-shrink-0 pt-0.5">[{s.num}]</span>
                    <div>
                      <p className="font-semibold text-white text-sm mb-1">{s.title}</p>
                      <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact"
                className="mt-10 inline-flex items-center bg-accent text-white text-xs font-semibold tracking-widest uppercase h-[52px]">
                <span className="px-6">START A PROJECT</span>
                <span className="flex items-center justify-center w-[52px] h-[52px] bg-black">
                  <ArrowRight size={16} strokeWidth={2.5} color="#fff" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
