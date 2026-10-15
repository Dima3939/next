'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PRINCIPLES = [
  {
    title: 'Architectural Typographic Craft',
    subtitle: 'Editorial Precision',
    description:
      'We obsess over kerning, responsive leading, and structural rhythm. Every pixel is placed with intentional architectural restraint.',
  },
  {
    title: 'Engineered for Conversion',
    subtitle: 'Measurable Growth',
    description:
      'A beautiful website that fails to convert is useless art. We align hypnotic visual pacing with behavioral psychology to drive venture investment and SaaS signups.',
  },
  {
    title: '60 FPS Hardware Performance',
    subtitle: 'Zero Compromises',
    description:
      'Hardware-accelerated CSS transforms and pre-baked WebGL shaders guarantee silky-smooth interaction feedback across desktop and mobile devices.',
  },
  {
    title: 'Direct Senior Partnership',
    subtitle: 'Zero Account Bloat',
    description:
      'You collaborate directly with the lead creative technologist and art director writing the code, ensuring rapid iteration loops and pristine execution.',
  },
];

export default function Metrics() {
  return (
    <section id="philosophy" className="relative py-28 md:py-36 px-6 border-y border-white/[0.08] bg-[#07070a]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Studio Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            WHAT DEFINES OUR WORK.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            We focus on extraordinary craft and tangible business velocity — leaving generic templates out of the equation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PRINCIPLES.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0c0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                  {item.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Studio Capacity Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#14141c] via-[#0d0d14] to-[#0a0a0f] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-8 h-10 bg-white flex items-center justify-center shrink-0">
              <div className="w-0.5 h-full bg-black/40 mr-auto ml-1" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                Strict Quality Limit
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-0.5">
                We accept only 2 client engagements per quarter to maintain uncompromising perfection.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors shrink-0"
          >
            Inquire Availability
          </a>
        </div>
      </div>
    </section>
  );
}
