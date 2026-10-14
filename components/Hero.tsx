'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Play } from 'lucide-react';

const TICKER_ITEMS = [
  'SOFTWARE PRODUCTION',
  '2D ANIMATION',
  'MOTION GRAPHICS',
  'PRO VIDEO EDITING',
  '3D & CGI COMMERCIALS',
  'MARKETING FILMS',
  'SAAS PRODUCT REVEALS',
  'B2B EXPLAINERS',
];

export default function Hero() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col"
        >
          {/* Studio Tag & Availability */}
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#0FC8CF] animate-pulse" />
            <span className="text-xs font-mono tracking-[0.2em] text-zinc-400 uppercase">
              Endorphin Creative Video & Motion Production
            </span>
          </motion.div>

          {/* Real Endorphin Headline Layout */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <h1 className="lg:col-span-8 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.02] text-white font-display uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFABFF] to-[#6B1EEF]">
                MORE
              </span>{' '}
              THAN JUST A VIDEO.{' '}
              <span className="block mt-1 sm:mt-2 text-white">
                AN{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6B1EEF] via-[#944df8] to-[#0FC8CF]">
                  ENDORPHIN
                </span>
              </span>
              <span className="block text-zinc-400 font-light">FUELED EXPERIENCE.</span>
            </h1>

            <div className="lg:col-span-4 flex flex-col justify-end">
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
                Endorphin is your way to make the best video production and get as much success as
                possible. We build bridges between brands and their audiences through unforgettable
                motion and visual art.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  <span>View Case Studies</span>
                  <ArrowDownRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-white text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>Get a Quote</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual Showcase Reel Banner with Molecular Hexagon Overlay */}
          <motion.div variants={itemVariants} className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] bg-[#0c0c14] shadow-2xl mb-16 group">
            {/* Ambient Background Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6B1EEF]/20 via-transparent to-[#0FC8CF]/15 pointer-events-none" />
            <div className="absolute inset-0 bg-subtle-grid opacity-30 pointer-events-none" />

            <div className="relative aspect-[21/9] min-h-[320px] sm:min-h-[420px] flex items-center justify-center p-6 sm:p-12">
              {/* Decorative Geometric SVG Molecule in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity duration-700">
                <svg viewBox="0 0 500 500" className="w-[450px] h-[450px] stroke-[#6B1EEF]" fill="none" strokeWidth="1.5">
                  <polygon points="250 50, 423 150, 423 350, 250 450, 77 350, 77 150" />
                  <polygon points="250 110, 370 180, 370 320, 250 390, 130 320, 130 180" stroke="#0FC8CF" />
                  <circle cx="250" cy="50" r="8" fill="#6B1EEF" />
                  <circle cx="423" cy="150" r="8" fill="#0FC8CF" />
                  <circle cx="423" cy="350" r="8" fill="#6B1EEF" />
                  <circle cx="250" cy="450" r="8" fill="#0FC8CF" />
                  <circle cx="77" cy="350" r="8" fill="#6B1EEF" />
                  <circle cx="77" cy="150" r="8" fill="#0FC8CF" />
                </svg>
              </div>

              {/* Central Play Badge */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 sm:w-9 sm:h-9 text-white fill-white ml-1" />
                </div>
                <h3 className="mt-5 text-xl sm:text-2xl font-bold text-white font-display tracking-tight">
                  Endorphin 2024 Production Reel
                </h3>
                <p className="mt-1 text-xs font-mono text-zinc-400">
                  4K ULTRA HD • 60 FPS • SOUND DESIGN • 01:24
                </p>
              </div>

              {/* Bottom Bar Info */}
              <div className="absolute bottom-4 inset-x-6 flex items-center justify-between text-[11px] font-mono text-zinc-400 border-t border-white/[0.08] pt-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-200">Production Studio Zurich / London</span>
                </div>
                <div>100+ Delivered Videos</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Real Endorphin Infinite Marquee Ticker */}
      <div className="w-full border-y border-white/[0.08] bg-[#0c0c14] py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-6 mx-6 text-xs sm:text-sm font-display font-bold tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              <span>{item}</span>
              <span className="text-[#6B1EEF]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
