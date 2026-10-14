'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, DollarSign, Layers, Users } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'From 0 to 100%',
    subtitle: 'End-to-End Production',
    description:
      'We handle everything from the initial spark of an idea, scriptwriting, and styleframe R&D to the final 4K sound master. Zero outsourced middlemen.',
  },
  {
    icon: DollarSign,
    title: 'Engineered for ROI',
    subtitle: 'Attention that Converts',
    description:
      'A beautiful film that fails to convert is wasted budget. We blend cinematic pacing with clear product value propositions that increase dwell time and drive sales.',
  },
  {
    icon: Layers,
    title: 'Deep Product Immersion',
    subtitle: 'Partner, Not Vendor',
    description:
      'We delve deep into your product architecture, user psychology, and competitive landscape so that every visual metaphor is accurate and compelling.',
  },
  {
    icon: Users,
    title: 'Direct Senior Access',
    subtitle: 'Zero Account Layers',
    description:
      'You collaborate directly with the creative directors and lead animators doing the actual work, ensuring rapid feedback loops and spotless execution.',
  },
];

export default function Metrics() {
  return (
    <section id="why-us" className="relative py-28 md:py-36 px-6 border-y border-white/[0.08] bg-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#CFABFF] block mb-3">
              Studio Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
              WHAT TRULY MATTERS.
            </h2>
          </div>
          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light">
            We focus on business outcomes and exceptional craft — leaving ego and agency bloat out of the equation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-7 rounded-2xl bg-[#0c0c14] border border-white/[0.06] hover:border-white/15 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-300 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-[#0FC8CF] uppercase block mb-1">
                    {val.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">{val.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
