'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Palette, Sparkles, Film, Video, Scissors, ArrowRight, Check } from 'lucide-react';

const REAL_SERVICES = [
  {
    id: '01',
    name: 'Software Production',
    icon: Monitor,
    description: 'Interface walkthroughs, SaaS dashboard motion, and high-conversion software feature reveals.',
    deliverables: ['SaaS UI Animation', 'Interactive Lottie Assets', 'Feature Launch Clips', 'High-FPS Screen Mastery'],
  },
  {
    id: '02',
    name: '2D Animation',
    icon: Film,
    description: 'Bespoke character storytelling, brand narrative explainers, and fluid vector animation.',
    deliverables: ['Custom Character Rigging', 'Kinetic Typography', 'Brand Storyboard Decks', 'Multi-Platform Formats'],
  },
  {
    id: '03',
    name: 'Motion Graphics',
    icon: Sparkles,
    description: 'Bold graphic packages, keynote presentations, title sequences, and dynamic brand motion systems.',
    deliverables: ['Keynote Visual Packages', 'Event Screen Graphics', 'Brand Motion Guidelines', 'Dynamic Lower Thirds'],
  },
  {
    id: '04',
    name: 'Illustration',
    icon: Palette,
    description: 'Tailored visual languages, custom vector illustrations, and brand iconography sets.',
    deliverables: ['Bespoke Styleframe Creation', 'Product Iconography Suites', 'Illustrated Keyframes', 'Vector Art Direction'],
  },
  {
    id: '05',
    name: 'Marketing Video',
    icon: Video,
    description: 'High-performing commercial videos engineered to convert viewers into paying users.',
    deliverables: ['B2B Performance Video Ads', 'Social Media 9:16 Hooks', 'Investor Pitch Reels', 'Conversion A/B Cutdowns'],
  },
  {
    id: '06',
    name: 'Pro Video Editing',
    icon: Scissors,
    description: 'Precision editing, cinematic color grading, multi-track foley sound design, and master delivery.',
    deliverables: ['Multi-Cam Precision Cuts', 'Hollywood Color Grading', 'Original Sound Design', 'Broadcast Master Exports'],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 bg-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            FULL-SPECTRUM VIDEO PRODUCTION
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            All video production services under one roof. A dedicated, agile team driven by love for the craft.
          </p>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REAL_SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            const isSelected = activeService === idx;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => setActiveService(idx)}
                className={`p-7 rounded-2xl cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#11111c] border-[#6B1EEF]/60 shadow-[0_10px_30px_rgba(107,30,239,0.2)]'
                    : 'bg-[#0c0c14] border-white/[0.06] hover:border-white/20 hover:bg-[#0f0f18]'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-gradient-to-tr from-[#6B1EEF] to-[#0FC8CF] text-white' : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xs text-zinc-500">{srv.id}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 font-display">{srv.name}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">{srv.description}</p>

                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {srv.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#0FC8CF] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
