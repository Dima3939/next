'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const METRICS = [
  {
    title: 'Optimized by default',
    subtitle: '100/100 Core Web Vitals guaranteed.',
    desc: 'Strict performance budgets guarantee zero layout shift, sub-second FCP, and 100/100 Lighthouse ratings.',
  },
  {
    title: 'Locked at 60 FPS',
    subtitle: 'GPU compositor execution.',
    desc: 'Every shader, 3D mesh, and gesture animation runs off the main thread, avoiding frame drops.',
  },
  {
    title: 'Reliable at scale',
    subtitle: '99.99% edge uptime SLA.',
    desc: 'Static asset generation deployed across global edge points of presence ensures instant delivery worldwide.',
  },
  {
    title: 'Open architecture',
    subtitle: 'Pure Next.js 14 & TypeScript.',
    desc: 'No black-box proprietary CMS plugins. You receive a clean, maintainable enterprise repository.',
  },
];

export default function Metrics() {
  return (
    <section className="relative py-24 md:py-32 px-6 bg-[#0b0d10] border-t border-[#26272b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
              ENGINEERING STANDARDS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ebebeb] mb-4">
            Everyone needs speed. We render 10 million frames every day.
          </h2>

          <p className="text-base text-[#adaeb0] font-normal leading-relaxed">
            We hold our production codebases to the highest technical benchmarks — no bloat, no lag, no compromises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-[#0e1014] border border-[#26272b] hover:border-[#3a3c42] transition-colors flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-medium text-[#ebebeb] mb-1">{item.title}</h3>
                <p className="text-xs font-mono text-[#c2d72a] mb-4">{item.subtitle}</p>
                <p className="text-xs text-[#adaeb0] leading-relaxed font-normal">{item.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#26272b] flex items-center justify-between text-xs text-[#adaeb0]">
                <span>Verified SLA</span>
                <span className="text-[#4ac26b]">✓ PASS</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
