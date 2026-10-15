'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Terminal, Cpu, Sparkles, Check, Copy, CheckCheck } from 'lucide-react';

const BRANDS = [
  { name: 'POLESTAR', label: 'Polestar Automotive' },
  { name: 'STRIPE', label: 'Stripe Press' },
  { name: 'FIGMA', label: 'Figma Community' },
  { name: 'NOTHING', label: 'Nothing Phone' },
  { name: 'LINEAR', label: 'Linear Sync' },
  { name: 'SONY', label: 'Sony Interactive' },
  { name: 'TEENAGE ENG.', label: 'Teenage Engineering' },
  { name: 'VERCEL', label: 'Vercel Partner' },
];

const CODE_SNIPPETS = {
  canvas: `// MONOLITH 3D WebGL Runtime Pipeline
import { Canvas, ShaderEngine } from '@monolith/core';

export default function Experience() {
  return (
    <Canvas fps={60} gl={{ antialias: true, alpha: true }}>
      <ShaderEngine
        geometry="procedural-torus"
        refraction={0.88}
        roughness={0.05}
        samples={128}
        compute="gpu-accelerated"
      />
    </Canvas>
  );
}`,
  nextjs: `// Next.js 14 App Router Optimized Motion
import { motion } from 'framer-motion';
import { KineticCanvas } from '@/components/canvas';

export const revalidate = 86400; // Static edge ISR

export default async function Page() {
  return (
    <main className="sub-second-hydration">
      <KineticCanvas fps="60fps-locked" latency="8ms" />
    </main>
  );
}`,
  shaders: `// Custom GLSL Fragment Shader
precision highp float;
uniform float uTime;
varying vec2 vUv;

void main() {
  vec2 p = vUv * 2.0 - 1.0;
  float len = length(p);
  vec3 col = 0.5 + 0.5 * cos(uTime + p.xyx + vec3(0, 2, 4));
  gl_FragColor = vec4(col * smoothstep(1.0, 0.2, len), 1.0);
}`,
};

export default function Hero() {
  const [activeTab, setActiveTab] = useState<'canvas' | 'nextjs' | 'shaders'>('canvas');
  const [copied, setCopied] = useState(false);
  const [fpsVal, setFpsVal] = useState(60);

  const copyCode = () => {
    navigator.clipboard.writeText(CODE_SNIPPETS[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-100 border border-white/10 text-xs text-zinc-300 mb-8 hover:border-emerald-500/40 transition-colors cursor-pointer group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-medium">MONOLITH Studio Q4 Booking Open</span>
          <span className="text-zinc-500">•</span>
          <span className="text-emerald-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
            View case studies <ArrowRight className="w-3 h-3" />
          </span>
        </motion.div>

        {/* Balanced Main Headline (Infisical Style) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6"
        >
          All-in-one studio to engineer{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
            extraordinary digital flagships.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed mb-10"
        >
          We construct high-velocity Next.js 14 web applications, real-time 3D WebGL canvases,
          and bespoke kinetic interactions for ambitious tech companies worldwide.
        </motion.p>

        {/* Dual CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-black bg-emerald-500 hover:bg-emerald-400 transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.35)] group"
          >
            <span>Initiate Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-200 bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-white/20 transition-all duration-200"
          >
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>Explore Selected Work</span>
          </a>
        </motion.div>

        {/* Social Proof Badges Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-zinc-400 mb-16 border-y border-white/[0.06] py-3.5 w-full max-w-4xl"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>14× Awwwards SOTD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>60 FPS Locked Compute</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>100/100 Core Web Vitals</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <span>Next.js 14 App Router</span>
          </div>
        </motion.div>

        {/* Central Infisical-Style Hero Console Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-full max-w-5xl rounded-2xl bg-[#0b0c10] border border-white/15 shadow-2xl overflow-hidden relative text-left"
        >
          {/* Mac-Style Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111318] border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-zinc-400 hidden sm:inline-block">
                monolith-engine // interactive-runtime.tsx
              </span>
            </div>

            {/* Console Tab Switcher */}
            <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
              {(['canvas', 'nextjs', 'shaders'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded text-xs font-mono font-medium transition-colors ${
                    activeTab === tab
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {tab === 'canvas' ? '3D Canvas' : tab === 'nextjs' ? 'Next.js 14' : 'GLSL Shaders'}
                </button>
              ))}
            </div>

            {/* Copy snippet button */}
            <button
              onClick={copyCode}
              className="p-1.5 rounded text-zinc-400 hover:text-white transition-colors"
              title="Copy snippet"
            >
              {copied ? <CheckCheck className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Console Content: Split Code + Interactive Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            {/* Left: Code Editor Snippet */}
            <div className="lg:col-span-6 p-6 font-mono text-xs text-zinc-300 bg-[#090a0d] border-b lg:border-b-0 lg:border-r border-white/10 overflow-x-auto">
              <pre className="text-zinc-300 leading-relaxed font-mono">
                <code>{CODE_SNIPPETS[activeTab]}</code>
              </pre>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Engine: Active (60 FPS)
                </span>
                <span>UTF-8 • TypeScript 5.5</span>
              </div>
            </div>

            {/* Right: Live Interactive Output Render */}
            <div className="lg:col-span-6 p-6 flex flex-col justify-between bg-gradient-to-br from-[#0c0e14] to-[#07080b] relative overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1200&auto=format&fit=crop"
                alt="3D Liquid Chrome Render"
                className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090a] via-[#08090a]/60 to-transparent pointer-events-none" />

              {/* Top Telemetry Overlay */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-emerald-400 flex items-center gap-1.5">
                  <Cpu className="w-3 h-3" /> GPU Compute: 1.2ms
                </span>

                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 font-mono text-[11px] text-zinc-300">
                  REFRACTION: 0.88
                </span>
              </div>

              {/* Center Play Indicator */}
              <div className="relative z-10 my-auto text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-3 shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 fill-emerald-400 ml-1" />
                </div>
                <div className="text-sm font-semibold text-white">Live WebGL Showreel</div>
                <div className="text-xs text-zinc-400 font-mono mt-0.5">Click to initialize audio & 4K stream</div>
              </div>

              {/* Bottom Runtime Metrics */}
              <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-zinc-400">
                <span>BUFFER: 4K 60FPS</span>
                <span className="text-emerald-400 font-semibold">ZERO FRAME DROPS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* "Trusted by" Logo Strip (Infisical Style) */}
        <div className="mt-20 w-full">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-400 mb-8 text-center font-medium">
            Trusted by engineering and product teams at
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="py-3 px-4 rounded-xl bg-surface-100/60 border border-white/[0.04] text-center font-mono font-bold text-xs tracking-wider text-zinc-400 hover:text-white hover:border-white/10 transition-colors"
              >
                {brand.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
