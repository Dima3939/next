'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary Matte Depth - Deep Slate */}
      <motion.div
        animate={{
          x: [0, 25, -20, 0],
          y: [0, -25, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[20%] w-[750px] h-[750px] rounded-full bg-[#0038ff]/[0.035] blur-[180px]"
      />

      {/* Secondary Architectural Ambient */}
      <motion.div
        animate={{
          x: [0, -20, 25, 0],
          y: [0, 25, -20, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[45%] right-[10%] w-[650px] h-[650px] rounded-full bg-zinc-800/[0.06] blur-[200px]"
      />
    </div>
  );
}
