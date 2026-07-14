'use client';

import { motion } from 'framer-motion';

// Decorative vertical guide lines — the signature "blueprint" grid effect
export default function GridLines() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] flex justify-between"
      style={{ padding: '0 clamp(1.25rem, 5vw, 5rem)' }}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="w-px h-full opacity-20"
          style={{ backgroundColor: 'var(--color-accent)', originY: 0 }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </div>
  );
}
