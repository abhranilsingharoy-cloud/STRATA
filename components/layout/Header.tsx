'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/studio', label: 'Platform', image: '/images/eco_ai_hero.jpg' },
  { href: '/services', label: 'Features', image: '/images/abstract_detail.jpg' },
  { href: '/projects', label: 'Use Cases', image: '/images/exterior_hero.jpg' },
  { href: '/journal', label: 'Research', image: '/images/interior_kitchen.jpg' },
  { href: '/team', label: 'Company', image: '/images/portrait_2.jpg' },
  { href: '/contact', label: 'Demo', image: '/images/exterior_tower.jpg' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[60px] px-6 md:px-10 transition-all duration-500 ${
          scrolled || menuOpen
            ? 'bg-[#0B0B0C]/95 backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        {/* Left — MENU toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 text-white font-body font-medium tracking-widest text-xs uppercase"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
          <span>MENU</span>
        </button>

        {/* Center — Wordmark */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-white font-display font-black text-xl tracking-widest uppercase"
          aria-label="ECO.AI - Home"
        >
          ECO.AI
        </Link>

        {/* Right — CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center h-[40px] bg-accent text-white text-xs font-semibold tracking-widest uppercase"
          aria-label="Request an ECO.AI Demo"
        >
          <span className="px-5">Request Demo</span>
          <span className="flex items-center justify-center w-10 h-10 bg-black">
            <ArrowRight size={14} strokeWidth={2.5} />
          </span>
        </Link>
      </header>

      {/* Full-screen mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#0B0B0C] flex flex-col justify-center px-10 md:px-20 overflow-hidden"
          >
            {/* Hover Background Images */}
            {navLinks.map((link, i) => (
              <motion.div
                key={`bg-${link.href}`}
                className="absolute inset-0 z-0 pointer-events-none"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ 
                  opacity: hoveredIndex === i ? 0.4 : 0,
                  scale: hoveredIndex === i ? 1 : 1.05
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <img
                  src={link.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            <nav aria-label="Primary navigation" className="relative z-10">
              <ul className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className="inline-block text-white font-display text-5xl md:text-7xl uppercase tracking-tight hover:translate-x-4 transition-transform duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 left-10 md:left-20 flex gap-8"
            >
              {['Instagram', 'LinkedIn', 'Pinterest'].map((s) => (
                <a key={s} href="#" className="text-white/50 text-xs tracking-widest uppercase hover:text-accent transition-colors">
                  {s}
                </a>
              ))}
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="absolute bottom-10 right-10 md:right-20"
            >
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center h-[48px] bg-accent text-white text-xs font-semibold tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
              >
                <span className="px-6">Request Demo</span>
                <span className="flex items-center justify-center w-12 h-12 bg-black/20">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
