'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    // Check if it's the first time loading in this session
    const hasLoaded = sessionStorage.getItem('ECO.AI_loaded');
    
    if (!hasLoaded) {
      setShowPreloader(true);
      // Wait for the animation to finish before hiding the preloader
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('ECO.AI_loaded', 'true');
      }, 2000); // Total animation duration
      
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
      setShowPreloader(false);
    }
  }, []);

  if (!showPreloader) return null;

  const text = "ECO.AI";

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0B0B0C] overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
        >
          <div className="overflow-hidden flex">
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                className="font-display font-black text-white text-5xl md:text-7xl lg:text-9xl tracking-widest uppercase inline-block"
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                  duration: 0.8,
                  ease: [0.76, 0, 0.24, 1],
                  delay: index * 0.05 + 0.2, // Small initial delay before text slides up
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
