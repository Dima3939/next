'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code2, Box, Palette, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    icon: Box,
    title: 'Immersive 3D & WebGL Worlds',
    tagline: 'Defying 2D limitations with GPU-powered spatial web experiences',
    description:
      'We engineer bespoke GLSL shaders, procedural 3D models, and micro-physics simulations that run silk-smooth at 60 FPS across desktop and mobile browsers.',
    deliverables: ['Custom Three.js / WebGL Scenes', 'Interactive Physics Simulations', 'Scroll-driven Camera Sequences', 'WebGL Fallbacks & Graceful Degradation'],
    accent: 'from-purple-500 to-indigo-500',
  },
  {
    num: '02',
    icon: Code2,
    title: 'App Router Next.js Engineering',
    tagline: 'Enterprise-grade speed wrapped in buttery-smooth animations',
    description:
      'We build clean, maintainable Next.js 14/15 codebases with TypeScript, zero hydration overhead, optimized static asset exports, and instant sub-second page switches.',
    deliverables: ['Next.js App Router Architecture', 'SSR & Static Export Configurations', 'Micro-Interactions via Framer Motion', '100/100 Core Web Vitals Optimization'],
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    num: '03',
    icon: Palette,
    title: 'Kinetic Art Direction & Identity',
    tagline: 'Visual systems engineered specifically for motion in the digital era',
    description:
      'Static logos are obsolete. We design dynamic visual identities that breathe, react to user cursor input, and express distinct emotional resonance across screen sizes.',
    deliverables: ['Interactive Brand Guidelines', 'Motion Design Systems (Lottie / SVG)', 'Custom Typography Hierarchies', 'Dark-Mode Focused Design Language'],
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    num: '04',
    icon: Zap,
    title: 'Conversion-Focused Launch Pages',
    tagline: 'High aesthetic standards engineered to drive commercial dominance',
    description:
      'A beautiful website that fails to convert is useless art. We align hypnotic visual pacing with behavioral psychology to drive SaaS signups and enterprise inquiries.',
    deliverables: ['Behavioral Funnel Architecture', 'A/B Testable Component Libraries', 'Frictionless Inquiry Modals', 'Analytics & Heatmap Integration'],
    accent: 'from-amber-400 to-orange-500',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 bg-[#07070a]/90">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-purple-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Studio Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight leading-tight">
            WHERE CODE AND CINEMATOGRAPHY CONVERGE.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            We don't use generic templates. Every pixel and vertex is crafted from scratch to guarantee your product looks years ahead of the competition.
          </p>
        </div>

        {/* Services List / Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES.map((service, index) => {
              const isSelected = activeTab === index;
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActiveTab(index)}
                  className={`group relative p-6 sm:p-8 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#10101a] border-purple-500/40 shadow-[0_10px_35px_-10px_rgba(139,92,246,0.3)]'
                      : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-500">{service.num}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-purple-600/20 text-purple-300' : 'bg-white/5 text-zinc-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-mono mt-0.5">{service.tagline}</p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 shrink-0 ${
                        isSelected ? 'text-cyan-400 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'
                      }`}
                    />
                  </div>

                  {/* Mobile expansion content */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-white/10 lg:hidden">
                      <p className="text-sm text-zinc-300 leading-relaxed mb-4">{service.description}</p>
                      <div className="flex flex-col gap-2">
                        {service.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-zinc-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Preview Card for Selected Tab (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-[#12121f] to-[#0a0a10] border border-white/15 p-8 shadow-2xl relative overflow-hidden"
            >
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br ${SERVICES[activeTab].accent} blur-3xl opacity-25`}
              />

              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
                <span>PILLAR {SERVICES[activeTab].num}</span>
                <span className="text-brand-neon">STUDIO DELIVERABLES</span>
              </div>

              <h4 className="text-2xl font-black text-white font-display mb-3">
                {SERVICES[activeTab].title}
              </h4>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8">
                {SERVICES[activeTab].description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-2">
                  What's Included:
                </span>
                {SERVICES[activeTab].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <span>Request Service Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
