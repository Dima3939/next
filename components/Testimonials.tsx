'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ENDORSEMENTS = [
  {
    quote:
      'MONOLITH redesigned our entire digital presence before our Series A roadshow. The reaction from Silicon Valley VCs was electric. We closed our round 3 weeks ahead of schedule.',
    name: 'Elena Rostova',
    title: 'Founder & CEO',
    company: 'Neura AI Corp',
    metric: '$28M Raised',
  },
  {
    quote:
      'Most agencies talk about "emotion" but hand over bloated websites that lag on mobile. MONOLITH delivered breathtaking 3D WebGL physics locked at 60 FPS. They operate on another level.',
    name: 'Marcus Vance',
    title: 'VP of Product',
    company: 'Valence Protocol',
    metric: '$1.4B Volume',
  },
  {
    quote:
      'The attention to typography, micro-interactions, and spatial audio is on an Apple level. Our product pre-order conversion rate climbed from 2.1% to 8.4% within 14 days post-launch.',
    name: 'Julian Thorne',
    title: 'Creative Director',
    company: 'Maison Kinesis Geneva',
    metric: '+340% Conversions',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Client Reputation
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            WHAT VISIONARY LEADERS SAY.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENDORSEMENTS.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-8 rounded-3xl bg-[#0c0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Verified Outcome
                  </div>
                  <span className="text-xs font-mono text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20">
                    {item.metric}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8 italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-base font-bold text-white font-display">{item.name}</div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {item.title} • <span className="text-zinc-200">{item.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
