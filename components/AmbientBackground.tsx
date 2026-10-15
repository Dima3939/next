'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Atmospheric Light - Titanium & Cool Blue */}
      <motion.div
        animate={{
          x: [0, 30, -25, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-900/15 via-blue-900/10 to-transparent blur-[160px] opacity-70"
      />

      {/* Secondary Ambient Accent */}
      <motion.div
        animate={{
          x: [0, -25, 30, 0],
          y: [0, 25, -25, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[35%] right-[10%] w-[550px] h-[500px] rounded-full bg-gradient-to-tr from-cyan-900/12 via-zinc-800/10 to-transparent blur-[150px] opacity-60"
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-subtle-grid opacity-40 [mask-image:radial-gradient(ellipse_70%_50%_at_50%_15%,#000_60%,transparent_100%)]" />

      {/* Top Hairline Beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}
