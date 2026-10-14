'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Studio Spotlight - Endorphin Violet */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -35, 15, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-15%] left-[15%] w-[700px] h-[650px] rounded-full bg-gradient-to-br from-[#6B1EEF]/18 via-[#3b1285]/10 to-transparent blur-[160px] opacity-80"
      />

      {/* Secondary Accent Light - Cyan */}
      <motion.div
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] right-[8%] w-[550px] h-[500px] rounded-full bg-gradient-to-tr from-[#0FC8CF]/12 via-[#097378]/8 to-transparent blur-[150px] opacity-70"
      />

      {/* Bottom Subtle Fill */}
      <div className="absolute bottom-[-10%] left-[25%] w-[600px] h-[450px] rounded-full bg-[#6B1EEF]/10 blur-[180px] opacity-50" />

      {/* Architectural Dot Grid */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_20%,#000_60%,transparent_100%)]" />

      {/* Top Hairline Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
