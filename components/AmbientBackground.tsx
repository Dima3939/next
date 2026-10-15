'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Atmospheric Depth - Deep Charcoal / Graphite */}
      <motion.div
        animate={{
          x: [0, 20, -20, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-15%] left-[25%] w-[700px] h-[700px] rounded-full bg-zinc-800/[0.08] blur-[160px]"
      />

      {/* Secondary Soft Vignette Light */}
      <motion.div
        animate={{
          x: [0, -20, 20, 0],
          y: [0, 20, -15, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[40%] right-[15%] w-[600px] h-[600px] rounded-full bg-zinc-700/[0.06] blur-[180px]"
      />

      {/* Micro Acid Lime Atmospheric Radiance - Very subtle, human studio signature */}
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-[#d4ff32]/[0.025] blur-[150px]" />
    </div>
  );
}
