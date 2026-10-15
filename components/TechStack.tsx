'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const INTEGRATIONS = [
  { name: 'Next.js 14', type: 'Framework', desc: 'App Router, Server Components & Static Site Generation' },
  { name: 'TypeScript', type: 'Language', desc: 'End-to-end strict types and API contracts' },
  { name: 'Three.js / WebGL', type: '3D Runtime', desc: 'Hardware-accelerated shader pipelines and geometry buffers' },
  { name: 'Custom GLSL', type: 'GPU Compute', desc: 'Custom vertex & fragment shading algorithms' },
  { name: 'Tailwind CSS', type: 'Styling', desc: 'Zero runtime overhead and optimized utility tokens' },
  { name: 'Framer Motion', type: 'Animation', desc: 'GPU compositor spring physics and gesture controllers' },
  { name: 'Web Audio API', type: 'Audio Engine', desc: 'Binaural sound synthesis and spatial haptic feedback' },
  { name: 'Vercel Edge', type: 'Deployment', desc: 'Global edge distribution with sub-50ms latency' },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative py-24 md:py-32 px-6 bg-[#0e1014] border-t border-[#26272b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
                ECOSYSTEM COMPATIBILITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ebebeb]">
              We support your stack.
            </h2>
          </div>

          <p className="text-[#adaeb0] text-sm max-w-md font-normal leading-relaxed">
            Build with the industry's most trusted developer tools, rendering engines, and cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INTEGRATIONS.map((item) => (
            <div
              key={item.name}
              className="p-5 rounded-xl bg-[#12141a] border border-[#26272b] hover:border-[#3a3c42] transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-sm text-[#ebebeb] group-hover:text-[#c2d72a] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#707174] bg-[#1e1f22] px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-[#adaeb0] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#26272b]/60 flex items-center justify-between text-[11px] text-[#707174] group-hover:text-[#ebebeb] transition-colors">
                <span>Native Support</span>
                <span className="text-[#4ac26b]">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
