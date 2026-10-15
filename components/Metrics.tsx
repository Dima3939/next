'use client';

import React from 'react';
import { Gauge, Zap, Globe, ShieldCheck } from 'lucide-react';

const METRIC_CARDS = [
  {
    icon: Gauge,
    title: '100/100 Lighthouse Score',
    subtitle: 'Optimized by Default',
    desc: 'Strict performance audits guarantee zero layout shift, sub-second First Contentful Paint, and perfect accessibility.',
  },
  {
    icon: Zap,
    title: '60 FPS Locked Compute',
    subtitle: 'Hardware Accelerated',
    desc: 'All animations and shaders run directly on the GPU compositor thread, eliminating CPU thread blocking entirely.',
  },
  {
    icon: Globe,
    title: 'Sub-50ms Global Latency',
    subtitle: 'Edge Distribution',
    desc: 'Static asset generation deployed across global edge points of presence ensures instantaneous response times worldwide.',
  },
  {
    icon: ShieldCheck,
    title: 'Zero Vendor Lock-In',
    subtitle: 'Clean Open Architecture',
    desc: 'Pure Next.js 14, TypeScript, and standard Tailwind CSS codebases that your internal team can easily maintain and extend.',
  },
];

export default function Metrics() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#08090a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs mb-4">
            PERFORMANCE STANDARDS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered for scale, speed, and reliability.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal">
            We hold our production code to the highest technical rigor — no bloat, no lag, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRIC_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-8 rounded-2xl bg-surface-100 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-emerald-400 mb-1">{card.subtitle}</div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
