'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Sparkles, Terminal, Play, Flame, Layers } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Studio Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/20 backdrop-blur-md shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              <span className="flex h-2 w-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-zinc-300 font-mono font-medium">
                Digital Art Direction & Next.js Motion
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">/</span>
              <span className="text-xs text-purple-300 font-mono font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-brand-neon" /> Awwwards SOTD
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.06] text-white max-w-5xl"
          >
            We sculpt high-octane{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 drop-shadow-[0_0_35px_rgba(168,85,247,0.35)]">
                digital dopamine
              </span>
            </span>{' '}
            for visionary brands.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed"
          >
            Endorphin is an independent digital experience studio specializing in high-FPS motion,
            fluid interactive architectures, and 3D web experiences that convert attention into obsession.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#works"
              className="relative group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
            >
              <span>Explore Selected Works</span>
              <ArrowDownRight className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform duration-300" />
            </a>

            <a
              href="#process"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/20 font-medium text-sm transition-all duration-300 backdrop-blur-md"
            >
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Studio Blueprint</span>
            </a>
          </motion.div>

          {/* Floating UI Canvas Preview / Glass Artifact */}
          <motion.div
            variants={itemVariants}
            className="mt-16 md:mt-20 w-full max-w-4xl relative"
          >
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/30 via-cyan-500/20 to-purple-800/30 blur-xl opacity-60" />
            
            <div className="relative rounded-2xl border border-white/10 bg-[#0d0d14]/80 backdrop-blur-xl p-5 md:p-8 shadow-2xl overflow-hidden">
              {/* Window Header Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/5 text-xs text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-zinc-400 hidden sm:inline">endorphin-engine://v4.8/hyper-canvas</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    60 FPS LOCKED
                  </span>
                  <span className="text-zinc-600">|</span>
                  <span>Next.js 14 App Router</span>
                </div>
              </div>

              {/* Interactive Showcase Preview inside Canvas */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-colors">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
                    <span>PERFORMANCE</span>
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-display">99.8%</div>
                  <div className="text-xs text-zinc-400 mt-1">Core Web Vitals & Lighthouse score benchmarked</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
                    <span>STACK</span>
                    <Terminal className="w-3.5 h-3.5 text-brand-neon" />
                  </div>
                  <div className="text-2xl font-bold text-white font-display">WebGL + App Router</div>
                  <div className="text-xs text-zinc-400 mt-1">Zero-latency static export with pre-baked shaders</div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-rose-500/30 transition-colors">
                  <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
                    <span>CONVERSIONS</span>
                    <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                  </div>
                  <div className="text-2xl font-bold text-white font-display">+340%</div>
                  <div className="text-xs text-zinc-400 mt-1">Average user dwell time surge post-relaunch</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Logos Ticker */}
          <motion.div
            variants={itemVariants}
            className="mt-16 w-full pt-8 border-t border-white/5 flex flex-col items-center"
          >
            <p className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 mb-6">
              Trusted by disruptive tech ventures & luxury innovators
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-60">
              {['KINETIC AI', 'NEURA-LINKED', 'SYNAPSE LABS', 'AETHERIUM', 'VALENCE 3D', 'POLYGON ARCH'].map(
                (brand) => (
                  <span
                    key={brand}
                    className="font-display font-semibold tracking-widest text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
