'use client';

import React from 'react';
import { Star } from 'lucide-react';

const ENDORSEMENTS = [
  {
    quote:
      'MONOLITH is a rare digital studio that can both deliver breathtaking 60 FPS 3D WebGL and increase commercial conversion. Our Series A roadshow response was electric.',
    name: 'Elena Rostova',
    title: 'Founder & CEO',
    company: 'Neura AI Corp',
    outcome: '$28M Series A Secured',
  },
  {
    quote:
      'Most agencies talk about "emotion" but hand over sluggish codebases. MONOLITH engineered a pure Next.js 14 architecture with zero hydration lag. They operate on an elite level.',
    name: 'Marcus Vance',
    title: 'VP of Product',
    company: 'Valence Protocol',
    outcome: '$1.4B Volume Handled',
  },
  {
    quote:
      'The attention to typography, micro-interactions, and spatial audio is on an Apple tier. Our timepiece pre-order conversion jumped from 2.1% to 8.4% post-launch.',
    name: 'Julian Thorne',
    title: 'Creative Director',
    company: 'Maison Kinesis Geneva',
    outcome: '+340% Conversion Boost',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 md:py-36 px-6 bg-[#08090a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs mb-4">
            CUSTOMER ENDORSEMENTS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Loved by founders and engineering leaders.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal">
            See how visionary technology teams leverage MONOLITH to accelerate their market momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ENDORSEMENTS.map((item) => (
            <div
              key={item.name}
              className="p-8 rounded-2xl bg-surface-100 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-emerald-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-400 text-emerald-400" />
                  ))}
                  <span className="ml-2 font-mono text-xs text-emerald-400/80 font-semibold">{item.outcome}</span>
                </div>

                <p className="text-sm text-zinc-300 font-normal leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-xs">
                  {item.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-zinc-400">
                    {item.title} • <span className="text-zinc-200">{item.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
