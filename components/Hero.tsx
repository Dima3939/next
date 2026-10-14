'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowDown, Sparkles, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const CLIENTS = [
  'NIKE',
  'FIGMA',
  'STRIPE',
  'SPOTIFY',
  'NOTHING',
  'POLESTAR',
  'LINEAR',
  'RED BULL',
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Studio Category Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0FC8CF]" />
              <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono">
                Creative Production & Motion Studio
              </span>
            </div>
          </motion.div>

          {/* Authentic Studio Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.04] text-white max-w-5xl font-display"
          >
            MORE THAN JUST A VIDEO.{' '}
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#CFABFF] via-[#8B48F8] to-[#0FC8CF]">
              AN ENDORPHIN-FUELED EXPERIENCE.
            </span>
          </motion.h1>

          {/* Genuine Studio Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed"
          >
            We direct, design, and animate high-impact 3D commercials, brand films, and motion
            identities that capture attention, evoke emotion, and drive measurable business growth.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 hover:scale-[1.02] shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white font-medium text-xs tracking-wider uppercase transition-all duration-300"
            >
              <span>Start a Project</span>
            </a>
          </motion.div>

          {/* Cinematic Interactive Showreel Frame */}
          <motion.div
            variants={itemVariants}
            className="mt-16 sm:mt-20 w-full max-w-5xl relative group"
          >
            {/* Subtle backlight glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#6B1EEF]/20 via-[#0FC8CF]/15 to-[#6B1EEF]/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />

            <div className="relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c14] overflow-hidden shadow-2xl">
              {/* Video Player Canvas Mockup */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-[#12121f] via-[#09090f] to-[#040407] flex items-center justify-center overflow-hidden">
                {/* Background visual graphics representing motion render */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(107,30,239,0.2)_0%,transparent_70%)]" />

                {/* Subtle moving grid */}
                <div className="absolute inset-0 bg-subtle-grid opacity-30" />

                {/* Center Showreel Visual Stage */}
                <div className="relative z-10 flex flex-col items-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-white/20 hover:border-white/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-2xl"
                    aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-endorphin-violet to-endorphin-cyan opacity-0 group-hover/btn:opacity-30 blur transition-opacity" />
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white ml-1 transition-transform group-hover/btn:scale-110" />
                  </button>
                  <span className="mt-4 text-xs font-mono uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                    {isPlaying ? 'PAUSE PREVIEW' : 'WATCH 2024 SHOWREEL (01:24)'}
                  </span>
                </div>

                {/* Animated Audio Equalizer Bars (top-left) */}
                <div className="absolute top-6 left-6 z-10 hidden sm:flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
                  <div className="flex items-end gap-1 h-3.5">
                    {[0.6, 1, 0.4, 0.8, 0.5, 0.9, 0.3].map((val, i) => (
                      <motion.span
                        key={i}
                        animate={{ height: isPlaying ? ['20%', '100%', '30%'] : '35%' }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          delay: i * 0.1,
                        }}
                        className="w-0.5 bg-gradient-to-t from-endorphin-violet to-endorphin-cyan rounded-full"
                        style={{ height: `${val * 100}%` }}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">4K • 60 FPS • SOUND DESIGN</span>
                </div>

                {/* Top-right Controls */}
                <div className="absolute top-6 right-6 z-10 flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-white transition-colors"
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                </div>

                {/* Bottom Timeline Bar */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-medium">ENDORPHIN REEL 2024</span>
                    <span className="text-zinc-600 hidden sm:inline">|</span>
                    <span className="hidden sm:inline">Selected 3D, CGI & Mixed-Media Direction</span>
                  </div>
                  <div>00:48 / 01:24</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trusted Brand Logotypes */}
          <motion.div
            variants={itemVariants}
            className="mt-20 w-full pt-10 border-t border-white/[0.06] flex flex-col items-center"
          >
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-8">
              Collaborating with industry-defining brands & ambitious startups
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {CLIENTS.map((brand) => (
                <span
                  key={brand}
                  className="font-display font-bold tracking-[0.2em] text-sm sm:text-base text-zinc-400 hover:text-white transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
