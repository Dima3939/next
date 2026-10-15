'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Code2, Sparkles, Cpu, ArrowRight, Check } from 'lucide-react';

const CAPABILITIES = [
  {
    id: '01',
    title: 'Immersive 3D & WebGL Architecture',
    icon: Box,
    tagline: 'GPU-accelerated spatial web canvases running silk-smooth at 60 FPS',
    description:
      'We engineer bespoke GLSL shaders, procedural 3D models, and micro-physics simulations that push the boundaries of browser performance across desktop and mobile devices.',
    deliverables: [
      'Custom Three.js / GLSL Shader Pipelines',
      'Interactive Product Configurator Physics',
      'Scroll-Driven Camera Sequences',
      'Hardware-Accelerated Fallback Systems',
    ],
  },
  {
    id: '02',
    title: 'High-Velocity Next.js Engineering',
    icon: Code2,
    tagline: 'Enterprise-grade speed wrapped in bespoke kinetic interaction design',
    description:
      'We build clean, maintainable Next.js 14 App Router codebases with TypeScript, zero hydration overhead, optimized static asset exports, and instant sub-second page switches.',
    deliverables: [
      'Next.js 14 App Router Architecture',
      'SSR & Static Export Configurations',
      'Framer Motion Micro-Interactions',
      '100/100 Core Web Vitals Optimization',
    ],
  },
  {
    id: '03',
    title: 'Kinetic Motion & Brand Systems',
    icon: Sparkles,
    tagline: 'Dynamic visual languages built specifically for modern digital screens',
    description:
      'Static design is obsolete. We craft living design systems that breathe, react to cursor velocity, and express distinct emotional resonance across screen breakpoints.',
    deliverables: [
      'Interactive Brand Guidelines',
      'Custom Typography Hierarchies',
      'Lottie & SVG Animation Systems',
      'Dark-Mode First Design Systems',
    ],
  },
  {
    id: '04',
    title: 'Creative Technology & Spatial Audio',
    icon: Cpu,
    tagline: 'Unconventional interactive interfaces that convert attention into obsession',
    description:
      'We integrate Web Audio API sound synthesis, tactile haptic feedback metaphors, and real-time data visualizers to build memorable digital brand experiences.',
    deliverables: [
      'Generative Web Audio Synthesis',
      'Real-Time WebSocket Telemetry UI',
      'Tactile Haptic Micro-Interactions',
      'Awwwards SOTD Submission Prep',
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="capabilities" className="relative py-28 md:py-36 px-6 bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            STUDIO CAPABILITIES.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            We partner with visionary founders and creative directors to engineer digital products
            that look, feel, and perform years ahead of the competition.
          </p>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {CAPABILITIES.map((cap, idx) => {
              const isSelected = activeTab === idx;
              const Icon = cap.icon;

              return (
                <div
                  key={cap.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#111118] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-500">{cap.id}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-[#d4ff32] text-black' : 'bg-white/5 text-zinc-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white font-display">
                          {cap.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light mt-0.5">{cap.tagline}</p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 shrink-0 mt-1 ${
                        isSelected ? 'text-[#d4ff32] translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>

                  {/* Mobile expansion */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-white/10 lg:hidden">
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{cap.description}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {cap.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-zinc-400">
                            <Check className="w-3.5 h-3.5 text-[#d4ff32]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Inspection Box */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-[#0e0e13] border border-white/15 p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
                <span>PILLAR {CAPABILITIES[activeTab].id}</span>
                <span className="text-white uppercase tracking-wider">PRODUCTION SPEC</span>
              </div>

              <h4 className="text-2xl font-bold text-white font-display mb-3">
                {CAPABILITIES[activeTab].title}
              </h4>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8 font-light">
                {CAPABILITIES[activeTab].description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Deliverables:
                </span>
                {CAPABILITIES[activeTab].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-[#d4ff32] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#d4ff32] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#c3ec29] transition-colors"
              >
                <span>Request Scope & Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
