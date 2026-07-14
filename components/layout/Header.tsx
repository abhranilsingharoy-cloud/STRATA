'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/studio', label: 'Studio' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/journal', label: 'Journal' },
  { href: '/team', label: 'Team' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          aria-label="STRATA — Home"
        >
          STRATA
        </Link>

        {/* Right — CTA */}
        <Link
          href="/contact"
          className="hidden md:flex items-center h-[40px] bg-accent text-white text-xs font-semibold tracking-widest uppercase"
          aria-label="Start a project with STRATA"
        >
          <span className="px-5">Start a Project</span>
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0B0B0C] flex flex-col justify-center px-10 md:px-20"
          >
            <nav aria-label="Primary navigation">
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
                      className="block text-white font-display text-5xl md:text-7xl uppercase tracking-tight hover:text-accent transition-colors duration-200"
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
                className="flex items-center h-[48px] bg-accent text-white text-xs font-semibold tracking-widest uppercase"
              >
                <span className="px-6">Start a Project</span>
                <span className="flex items-center justify-center w-12 h-12 bg-black">
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
