'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background radial glow 1 - Violet */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[-10%] left-[20%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-purple-700/20 via-fuchsia-600/15 to-transparent blur-[140px] opacity-70"
      />

      {/* Background radial glow 2 - Cyan */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 40, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-[25%] right-[5%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-600/10 to-transparent blur-[130px] opacity-60"
      />

      {/* Background radial glow 3 - Deep Pink */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-pink-600/15 via-purple-900/20 to-transparent blur-[150px] opacity-50"
      />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top subtle horizontal beam */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
    </div>
  );
}
