'use client';

import React from 'react';
import { ArrowRight, Check, Box, Code2, Sparkles } from 'lucide-react';

const PRODUCTS = [
  {
    tag: '3D & WEBGL RUNTIME',
    accentColor: '#9ee067',
    title: 'Hardware-Accelerated WebGL Architecture',
    desc: 'Sync, render, and orchestrate GPU-accelerated 3D canvases running locked at 60 FPS across desktop and mobile browsers.',
    features: [
      'Custom Three.js & GLSL fragment shader compilation',
      'Dynamic LOD mesh scaling with zero device thermal throttling',
      'Refraction, roughness, and subsurface scattering shaders',
    ],
    codePreview: `// GLSL Shader Pipeline
const canvas = new MonolithCanvas({
  fps: 60,
  antialias: true,
  precision: 'highp',
  buffers: ['depth', 'normal']
});`,
  },
  {
    tag: 'NEXT.JS 14 ENGINEERING',
    accentColor: '#f5c451',
    title: 'Sub-Second Edge Infrastructure',
    desc: 'Pure App Router architectures with zero hydration overhead, static edge caching, and perfect 100/100 Core Web Vitals.',
    features: [
      'React Server Components with edge-side static rendering',
      'Instant sub-second page transitions with zero layout shift',
      '100/100 Lighthouse performance metrics guaranteed',
    ],
    codePreview: `// Next.js 14 Static Export
export const dynamic = 'force-static';
export const revalidate = false;

export default function Route() {
  return <ClientCanvas hydration="instant" />;
}`,
  },
  {
    tag: 'KINETIC MOTION ENGINE',
    accentColor: '#c4b5fd',
    title: 'Physics-Based Interaction Systems',
    desc: 'Living design systems that respond organically to cursor velocity, scroll choreography, and tactile user input.',
    features: [
      'Hardware-accelerated Framer Motion compositor pipelines',
      'Spring-loaded gesture controllers with contextual dampening',
      'Spatial Web Audio API synthesis and sound choreography',
    ],
    codePreview: `// Spring Physics Compositor
const spring = { stiffness: 400, damping: 28 };
const scale = useSpring(cursorVelocity, spring);
return <motion.div style={{ scale }} />;`,
  },
];

export default function Services() {
  return (
    <section id="platform" className="relative py-24 md:py-32 px-6 bg-[#0b0d10] border-t border-[#26272b]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
              PLATFORM CAPABILITIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ebebeb] mb-4">
            Meet the all-in-one creative engineering stack.
          </h2>

          <p className="text-base text-[#adaeb0] font-normal leading-relaxed">
            3D WebGL, Next.js 14 App Router, and kinetic motion — one platform, one unified architecture,
            one place to deliver extraordinary digital flagships.
          </p>
        </div>

        {/* 3-Column Infisical Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.tag}
              className="rounded-xl bg-[#0e1014] border border-[#26272b] p-6 sm:p-7 flex flex-col justify-between hover:border-[#3a3c42] transition-colors group"
            >
              <div>
                {/* Code Window Header Preview */}
                <div className="rounded-lg bg-[#14161d] border border-[#26272b] p-4 mb-6 font-mono text-[11px] text-[#ebebeb] overflow-x-auto">
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#26272b] text-[10px] text-[#707174]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: prod.accentColor }} />
                      {prod.tag.toLowerCase()}
                    </span>
                    <span>READY</span>
                  </div>
                  <pre className="text-[#adaeb0] leading-relaxed">
                    <code>{prod.codePreview}</code>
                  </pre>
                </div>

                {/* Card Title */}
                <span
                  className="inline-block text-[10px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded mb-3 bg-[#1e1f22]"
                  style={{ color: prod.accentColor }}
                >
                  {prod.tag}
                </span>

                <h3 className="text-xl font-medium text-[#ebebeb] tracking-tight mb-3">
                  {prod.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#adaeb0] leading-relaxed mb-6">
                  {prod.desc}
                </p>

                {/* Features Checklist */}
                <div className="space-y-2.5 mb-6">
                  {prod.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs text-[#ebebeb]">
                      <Check className="w-3.5 h-3.5 text-[#c2d72a] shrink-0 mt-0.5" />
                      <span className="leading-snug">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ebebeb] hover:text-[#c2d72a] transition-colors pt-4 border-t border-[#26272b]"
              >
                <span>Explore technical specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
