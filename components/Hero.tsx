'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Play, Volume2, VolumeX } from 'lucide-react';

const BRANDS = [
  'POLESTAR',
  'STRIPE',
  'FIGMA',
  'NOTHING',
  'SONY',
  'TEENAGE ENGINEERING',
  'LINEAR',
  'ACNE STUDIOS',
];

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Top Label */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#d4ff32] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.25em] text-zinc-400 uppercase">
              MONOLITH® • Creative Engineering & Motion Lab
            </span>
          </motion.div>

          {/* Bold Editorial Headline */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            <h1 className="lg:col-span-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white font-display uppercase">
              WE SHAPE DIGITAL{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600">
                ARTIFACTS
              </span>{' '}
              THAT DEFY CONVENTION.
            </h1>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
                Independent studio operating at the intersection of architectural typography,
                real-time 3D shaders, and high-velocity Next.js 14 motion. We construct interactive
                worlds for ambitious brands worldwide.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#d4ff32] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#c3ec29] transition-all shadow-[0_0_25px_rgba(212,255,50,0.25)]"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>Initiate Inquiry</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Cinematic Showreel Showcase Frame with Real Liquid Mercury Imagery */}
          <motion.div
            variants={itemVariants}
            className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d14] shadow-2xl mb-16 group"
          >
            {/* Real High-Res Tactile Liquid Chrome Imagery */}
            <div className="relative aspect-[21/9] min-h-[320px] sm:min-h-[460px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1600&auto=format&fit=crop"
                alt="MONOLITH 3D Motion Render"
                className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Dark Gradient Film Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60 pointer-events-none" />

              {/* Top Meta Strip */}
              <div className="absolute top-6 inset-x-6 z-10 flex items-center justify-between text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                  <div className="flex items-end gap-1 h-3">
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
                        className="w-0.5 bg-[#d4ff32] rounded-full"
                        style={{ height: `${val * 100}%` }}
                      />
                    ))}
                  </div>
                  <span>4K UHD • 60 FPS • SPATIAL AUDIO</span>
                </div>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2.5 rounded-full bg-black/70 hover:bg-black backdrop-blur-md border border-white/10 text-zinc-300 hover:text-white transition-colors"
                  aria-label="Toggle Audio"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#d4ff32]" />}
                </button>
              </div>

              {/* Central Play Badge */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative group/btn w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-white/20 hover:border-white/50 backdrop-blur-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-2xl"
                  aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
                >
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white ml-1 transition-transform group-hover/btn:scale-110" />
                </button>
                <h3 className="mt-5 text-xl sm:text-2xl font-black text-white font-display tracking-tight uppercase">
                  MONOLITH REEL 2024
                </h3>
                <p className="mt-1 text-xs font-mono text-zinc-400">
                  RUN TIME 01:24 • SELECTED 3D, CGI & INTERACTIVE SYSTEMS
                </p>
              </div>

              {/* Bottom Info Bar */}
              <div className="absolute bottom-4 inset-x-6 z-10 flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4ff32] animate-pulse" />
                  <span className="text-white">Studio HQ: Zurich & London</span>
                </div>
                <div className="hidden sm:block">Awwwards SOTD × 14 Winner</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Brand Marquee Ticker */}
      <div className="w-full border-y border-white/[0.08] bg-[#07070a] py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-8 mx-8 text-xs sm:text-sm font-display font-bold tracking-[0.25em] text-zinc-400 hover:text-white transition-colors cursor-default"
            >
              <span>{brand}</span>
              <span className="text-zinc-600 font-mono">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
