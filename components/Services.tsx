'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Code2, Sparkles, Cpu, Check, ArrowRight } from 'lucide-react';

const MODULES = [
  {
    id: 'shaders',
    title: '3D WebGL & Shader Architecture',
    badge: 'Hardware Accelerated',
    icon: Box,
    tagline: 'GPU-accelerated spatial canvases running at locked 60 FPS across desktop & mobile.',
    description:
      'We write custom GLSL shaders, procedural geometry algorithms, and micro-physics simulations that push the boundaries of browser performance without heating up user devices.',
    features: [
      'Custom Three.js / GLSL Shader Pipelines with multi-pass post-processing',
      'Interactive 3D configurator physics and sub-millimeter component exploded views',
      'Scroll-driven cinematic camera choreography with zero layout shift',
      'Hardware-accelerated mobile fallbacks with dynamic LOD scaling',
    ],
    previewCode: `// Procedural GLSL Refraction Kernel
vec4 computeRefraction(vec3 ray, vec3 normal) {
  vec3 refracted = refract(ray, normal, 1.0 / 1.52);
  float fresnel = pow(1.0 - dot(-ray, normal), 3.0);
  return mix(textureCube(envMap, refracted), vec4(1.0), fresnel);
}`,
    metric: '60 FPS LOCKED',
  },
  {
    id: 'nextjs',
    title: 'High-Velocity Next.js 14 Engineering',
    badge: 'Enterprise Performance',
    icon: Code2,
    tagline: 'Sub-second edge routing, pure App Router codebases, and 100/100 Core Web Vitals.',
    description:
      'We eliminate bloated dependencies and deliver lightweight, statically exportable Next.js 14 architectures that achieve instant page switches and optimal search engine indexation.',
    features: [
      'Next.js 14 App Router with React Server Components & Static Export',
      'Sub-second hydration with zero blocking main-thread execution',
      'Framer Motion hardware transforms running strictly on the GPU compositor',
      '100/100 Google Lighthouse Core Web Vitals guaranteed on release',
    ],
    previewCode: `// Edge-Optimized Static Routing
export const runtime = 'edge';
export const dynamic = 'force-static';

export default async function Route() {
  const data = await fetchEngineArchive();
  return <StaticRenderer data={data} latency="sub-10ms" />;
}`,
    metric: '100/100 LIGHTHOUSE',
  },
  {
    id: 'motion',
    title: 'Kinetic Motion & Design Systems',
    badge: 'Award-Winning Craft',
    icon: Sparkles,
    tagline: 'Living visual languages built specifically for high-growth digital companies.',
    description:
      'Static design is obsolete. We craft interactive design systems that respond organically to cursor velocity, scroll physics, and user intent across every viewport breakpoint.',
    features: [
      'Interactive component tokens and living design system documentation',
      'Physics-modeled spring motion curves with contextual deceleration',
      'SVG kinetic morphing and custom hardware-accelerated icon animations',
      'Dark-mode first color ergonomics engineered for long session engagement',
    ],
    previewCode: `// Spring-Loaded Gesture Controller
const springConfig = { stiffness: 400, damping: 28, mass: 0.8 };
const x = useSpring(useTransform(cursorX, [-1, 1], [-40, 40]), springConfig);
const rotate = useSpring(useTransform(cursorX, [-1, 1], [-12, 12]), springConfig);`,
    metric: '0MS INTERACTION LAG',
  },
  {
    id: 'audio',
    title: 'Spatial Audio & Creative Technology',
    badge: 'Sensory Immersion',
    icon: Cpu,
    tagline: 'Unconventional interactive web interfaces that transform attention into engagement.',
    description:
      'We synthesize browser audio via Web Audio API, integrate haptic micro-feedback metaphors, and build real-time WebSocket telemetry visualizers that immerse users in your product.',
    features: [
      'Binaural 3D Web Audio API sound synthesis and interactive foley layers',
      'Real-time WebSocket telemetry visualizers and financial chart rendering',
      'Tactile micro-interaction audio triggers with intelligent user muting',
      'Awwwards Site of the Day submission and festival preparation',
    ],
    previewCode: `// Web Audio Oscillator Synthesis
const ctx = new AudioContext();
const osc = ctx.createOscillator();
const gain = ctx.createGain();
osc.frequency.setValueAtTime(440, ctx.currentTime);
osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.1);`,
    metric: 'SPATIAL AUDIO ENGINE',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const current = MODULES[activeTab];
  const Icon = current.icon;

  return (
    <section id="capabilities" className="relative py-28 md:py-36 px-6 bg-[#08090a] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs mb-4">
            CORE PLATFORM CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
            Everything your brand needs to dominate the modern web.
          </h2>
          <p className="mt-4 text-zinc-400 text-base font-normal leading-relaxed">
            From low-level GLSL shader computation to high-velocity Next.js 14 frontend engineering,
            we deliver enterprise-grade performance wrapped in award-winning craft.
          </p>
        </div>

        {/* Tab Selector (Infisical Style) */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-surface-100 border border-white/10 mb-12 max-w-4xl">
          {MODULES.map((m, idx) => {
            const isSelected = activeTab === idx;
            const TabIcon = m.icon;
            return (
              <button
                key={m.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{m.title.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Feature Showcase Container (Infisical Split Card) */}
        <div className="rounded-2xl bg-surface-100 border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Descriptive Content & Checklist */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[11px] font-semibold">
                      {current.badge}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">{current.metric}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                    {current.title}
                  </h3>

                  <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-8">
                    {current.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {current.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link pt-4 border-t border-white/10"
                >
                  <span>Request detailed technical specification</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Column: Code & Interactive Architecture Box */}
              <div className="lg:col-span-6">
                <div className="rounded-xl bg-[#090a0d] border border-white/10 overflow-hidden shadow-xl">
                  {/* Window Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#111318] border-b border-white/10 font-mono text-xs text-zinc-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      <span className="ml-2 text-zinc-400 text-[11px]">{current.id}-pipeline.ts</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">
                      COMPILED
                    </span>
                  </div>

                  {/* Code Body */}
                  <div className="p-6 font-mono text-xs text-zinc-300 overflow-x-auto leading-relaxed">
                    <pre>
                      <code>{current.previewCode}</code>
                    </pre>
                  </div>

                  {/* Feature Status Footnote */}
                  <div className="px-6 py-3 bg-[#0d0f14] border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span>Target: Browser GPU & V8 Engine</span>
                    <span className="text-zinc-300">Verified zero lag</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
