'use client';

import React from 'react';
import { Layers, Zap, Shield, Cpu, Code, Globe } from 'lucide-react';

const STACK_ITEMS = [
  { name: 'Next.js 14', category: 'App Router & Edge SSR', desc: 'Sub-second page switches with zero hydration lag' },
  { name: 'TypeScript', category: 'Type Safety', desc: 'Enterprise-grade stability and strict compile checks' },
  { name: 'Three.js / WebGL', category: '3D & GPU Runtime', desc: 'Hardware-accelerated geometry and procedural buffers' },
  { name: 'Custom GLSL', category: 'Shader Shading Language', desc: 'Direct GPU fragment compute and refraction physics' },
  { name: 'Tailwind CSS', category: 'Atomic Styling', desc: 'Zero runtime CSS overhead and optimal bundle size' },
  { name: 'Framer Motion', category: 'Kinetic Physics', desc: 'Hardware-accelerated gesture and scroll choreographies' },
  { name: 'Web Audio API', category: 'Spatial Sound', desc: 'Binaural synthesizer and low-latency interaction audio' },
  { name: 'Vercel Edge', category: 'Global CDN Routing', desc: 'Sub-50ms latency response worldwide via Edge Network' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 px-6 bg-[#060709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs mb-4">
            ECOSYSTEM COMPATIBILITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Engineered on the modern stack.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-normal">
            We build exclusively with industry-standard, production-proven technologies that ensure
            maintainability, scalability, and extreme speed.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {STACK_ITEMS.map((item) => (
            <div
              key={item.name}
              className="p-6 rounded-xl bg-surface-100 border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {item.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors" />
              </div>
              <div className="text-xs font-mono text-emerald-400 mb-2">{item.category}</div>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
