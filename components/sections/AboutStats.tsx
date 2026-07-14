'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 10, suffix: 'M+', label: 'Acres Analyzed' },
  { value: 50, suffix: '+', label: 'Cities Planned' },
  { value: 15, suffix: '%', label: 'Carbon Reduction' },
];

const pressLogos = [
  'TechCrunch', 'Wired', 'Fast Company', 'MIT Tech Review', 'Forbes', 'Bloomberg',
];

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

// AboutStats — mirrors Doorly screenshot 2:
// [ ABOUT US ] kicker + studio mission statement + stat counters + press logos
export default function AboutStats() {
  return (
    <section className="section-light py-24 md:py-36 px-6 md:px-20 border-t border-black/10" aria-labelledby="about-heading">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: kicker + mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker mb-6">[ Platform Impact ]</p>
            <h2
              id="about-heading"
              className="font-display font-black text-black uppercase leading-tight mb-10"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em' }}
            >
              WE ARE EMPOWERING URBAN PLANNERS TO DESIGN SUSTAINABLE CITIES FASTER.
            </h2>

            {/* Stat counters */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-display font-black text-black"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
                  >
                    <CountUp target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="text-neutral-gray text-sm mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: press logos grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="kicker mb-8">[ Press &amp; Recognition ]</p>
            <div className="grid grid-cols-2 gap-0 border border-black/10">
              {pressLogos.map((logo, i) => (
                <div
                  key={logo}
                  className={`p-8 flex items-center justify-center border-black/10 ${
                    i % 2 === 0 ? 'border-r' : ''
                  } ${i < 4 ? 'border-b' : ''}`}
                >
                  <span className="font-display font-black text-black/25 text-sm uppercase tracking-widest">
                    {logo}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
