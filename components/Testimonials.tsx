'use client';

import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    quote:
      'The 3D launch video exceeded every internal metric we set. The attention to photorealistic material reflections, camera choreography, and sound design made our product look world-class.',
    name: 'David Lindqvist',
    title: 'Head of Brand Creative',
    company: 'Polestar Automotive',
  },
  {
    quote:
      'Endorphin translated our developer infrastructure into an energetic 90-second film that our entire community loved. On-time, communicative, and truly world-class motion craft.',
    name: 'Sarah Miller',
    title: 'Director of Marketing',
    company: 'Fintech Scale-Up',
  },
  {
    quote:
      'Their ability to visualize complex internal product mechanics while keeping the narrative engaging is unmatched. Our pre-order conversion rate saw an immediate jump on launch day.',
    name: 'Julian Vance',
    title: 'VP of Product',
    company: 'Hardware Innovation Labs',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
            Client Perspectives
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            WHAT OUR PARTNERS SAY.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 rounded-2xl bg-[#0c0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-sm text-zinc-300 font-light leading-relaxed mb-8 italic">
                "{r.quote}"
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-sm font-bold text-white">{r.name}</div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {r.title} • <span className="text-zinc-300">{r.company}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
