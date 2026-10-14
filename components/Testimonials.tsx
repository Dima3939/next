'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Quote, Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote:
      'Endorphin redesigned our entire web presence before our Series A roadshow. The reaction from Silicon Valley VCs was electric. We closed our round 3 weeks ahead of schedule.',
    author: 'Elena Rostova',
    role: 'Founder & CEO',
    company: 'Neura AI Corp',
    metrics: '$28M Raised',
  },
  {
    quote:
      'Most design agencies talk about "emotion" but hand over bloated 20MB websites that lag on mobile. Endorphin delivered breathtaking 3D physics locked at 60 FPS. They are true wizards.',
    author: 'Marcus Vance',
    role: 'VP of Product',
    company: 'Valence Protocol',
    metrics: '1.4B Volume',
  },
  {
    quote:
      'The attention to typography, micro-interactions, and sound design is on an Apple level. Our landing page conversion rate climbed from 2.1% to 8.4% within 14 days.',
    author: 'Julian Thorne',
    role: 'Creative Director',
    company: 'Maison Kinesis',
    metrics: '+340% Conversions',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-pink-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            WHAT VISIONARY FOUNDERS SAY.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="p-8 rounded-2xl bg-[#0c0c14]/90 border border-white/10 hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/40 border border-emerald-500/20">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 font-light leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{t.author}</div>
                  <div className="text-xs text-zinc-500 font-mono">
                    {t.role}, <span className="text-zinc-400">{t.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
