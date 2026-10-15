'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Search, Filter, ShieldCheck, Cpu, Eye, EyeOff } from 'lucide-react';

const ENV_ITEMS = [
  {
    name: 'NEXT_PUBLIC_ENGINE_API',
    type: 'Edge Runtime',
    dev: true,
    staging: true,
    prod: true,
    status: 'ACTIVE',
    val: 'https://edge.monolith.lab/v2',
  },
  {
    name: 'GLSL_SHADER_CLUSTER_60FPS',
    type: 'GPU Pipeline',
    dev: true,
    staging: true,
    prod: true,
    status: '60 FPS',
    val: 'torus_refraction_v3_kernel',
  },
  {
    name: 'WEBGL2_BUFFER_COMPUTE',
    type: 'Mesh Buffer',
    dev: true,
    staging: true,
    prod: true,
    status: 'OPTIMIZED',
    val: 'rgba32f_subsurface_scattering',
  },
  {
    name: 'SPATIAL_AUDIO_NODE_SYNTH',
    type: 'WebAudio API',
    dev: true,
    staging: true,
    prod: true,
    status: '48 kHz',
    val: 'binaural_oscillator_graph',
  },
  {
    name: 'FRAMER_MOTION_GPU_SPRING',
    type: 'Compositor',
    dev: true,
    staging: true,
    prod: true,
    status: '0ms LAG',
    val: 'stiffness:400_damping:28',
  },
  {
    name: 'LIGHTHOUSE_PERF_DAEMON',
    type: 'Core Web Vitals',
    dev: true,
    staging: true,
    prod: true,
    status: '100/100',
    val: 'fcp:0.6s_cls:0.000_lcp:0.9s',
  },
];

const LOGOS = [
  'POLESTAR',
  'STRIPE',
  'FIGMA',
  'NOTHING',
  'LINEAR',
  'SONY',
  'TEENAGE ENG.',
  'VERCEL',
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState('All');
  const [revealed, setRevealed] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleReveal = (name: string) => {
    setRevealed((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const filteredItems = ENV_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden bg-[#0b0d10]">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#c2d72a]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Infisical Exact stage-split 2-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: stage-copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Announcement Chip */}
            <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1f22] border border-[#26272b] text-[12px] text-[#ebebeb] w-fit hover:border-[#323439] transition-colors cursor-pointer group">
              <span className="w-2 h-2 rounded-full bg-[#c2d72a] animate-pulse" />
              <span className="text-[#adaeb0]">Studio Release:</span>
              <span className="font-medium text-[#ebebeb]">MONOLITH 2.0 Engine is live</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#c2d72a] transition-transform group-hover:translate-x-0.5" />
            </div>

            {/* H1 Headline matching Infisical font size & weight */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-medium tracking-tight text-[#ebebeb] leading-[1.12] mb-6">
              Digital Experience Infrastructure{' '}
              <span className="text-[#adaeb0]">for Developers and Designers</span>
            </h1>

            {/* Paragraph */}
            <p className="text-base text-[#adaeb0] font-normal leading-relaxed max-w-xl mb-8">
              All-in-one creative engineering platform to build, render, and deploy high-performance
              3D WebGL experiences, kinetic motion, and Next.js applications across modern devices.
            </p>

            {/* Dual Actions (v2-btn styles) */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="v2-btn v2-btn--primary px-6 py-2.5 text-sm font-semibold"
              >
                Get started for free
              </a>

              <a
                href="#contact"
                className="v2-btn v2-btn--secondary px-5 py-2.5 text-sm font-medium"
              >
                Talk to an expert
              </a>
            </div>

            {/* Quick check indicators */}
            <div className="mt-8 flex items-center gap-6 text-xs text-[#adaeb0] font-mono">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c2d72a]" />
                Zero bundle bloat
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c2d72a]" />
                60 FPS locked
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#c2d72a]" />
                100/100 Lighthouse
              </span>
            </div>
          </div>

          {/* Right Column: stage-visual -> stage-app (Infisical Interactive Table Mockup) */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#0e1014] border border-[#26272b] shadow-2xl overflow-hidden">
              {/* Top Navigation inside mock */}
              <div className="px-4 py-3 bg-[#12141a] border-b border-[#26272b] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 font-mono text-xs text-[#adaeb0]">
                    project: <span className="text-[#ebebeb]">flagship-core</span>
                  </span>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#4ac26b] bg-[#4ac26b]/10 border border-[#4ac26b]/20 px-2 py-0.5 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4ac26b] animate-pulse" />
                  <span>SYNCHRONIZED</span>
                </div>
              </div>

              {/* Subheader Toolbar */}
              <div className="p-3 bg-[#0e1014] border-b border-[#26272b] flex items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#707174]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search credentials & modules..."
                    className="w-full pl-8 pr-3 py-1.5 bg-[#14161d] border border-[#26272b] rounded text-xs text-[#ebebeb] placeholder:text-[#707174] focus:outline-none focus:border-[#323439]"
                  />
                </div>

                <div className="flex items-center gap-1">
                  {(['All', '3D', 'Next.js'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                        activeTab === tab
                          ? 'bg-[#1e1f22] text-[#ebebeb] border border-[#323439]'
                          : 'text-[#adaeb0] hover:text-[#ebebeb]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto font-mono text-xs">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#12141a] text-[#707174] border-b border-[#26272b] text-[10px] uppercase tracking-wider">
                      <th className="py-2.5 px-4 font-medium">Credential / Engine Module</th>
                      <th className="py-2.5 px-2 font-medium text-center">Dev</th>
                      <th className="py-2.5 px-2 font-medium text-center">Staging</th>
                      <th className="py-2.5 px-2 font-medium text-center">Prod</th>
                      <th className="py-2.5 px-4 font-medium text-right">Telemetry</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#26272b]/60">
                    {filteredItems.map((row) => (
                      <tr key={row.name} className="hover:bg-[#14161d] transition-colors group">
                        <td className="py-2.5 px-4">
                          <div className="flex flex-col">
                            <span className="text-[#ebebeb] font-medium text-[11px] truncate max-w-[190px]">
                              {row.name}
                            </span>
                            <span className="text-[10px] text-[#707174]">{row.type}</span>
                          </div>
                        </td>

                        <td className="py-2.5 px-2 text-center">
                          <div className="w-4 h-4 rounded bg-[#4ac26b]/15 text-[#4ac26b] flex items-center justify-center mx-auto text-[10px]">
                            ✓
                          </div>
                        </td>

                        <td className="py-2.5 px-2 text-center">
                          <div className="w-4 h-4 rounded bg-[#4ac26b]/15 text-[#4ac26b] flex items-center justify-center mx-auto text-[10px]">
                            ✓
                          </div>
                        </td>

                        <td className="py-2.5 px-2 text-center">
                          <div className="w-4 h-4 rounded bg-[#4ac26b]/15 text-[#4ac26b] flex items-center justify-center mx-auto text-[10px]">
                            ✓
                          </div>
                        </td>

                        <td className="py-2.5 px-4 text-right">
                          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-[#c2d72a]/10 text-[#c2d72a] border border-[#c2d72a]/20">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="px-4 py-2.5 bg-[#12141a] border-t border-[#26272b] flex items-center justify-between text-[11px] font-mono text-[#adaeb0]">
                <span>Showing 6 active runtime services</span>
                <span className="text-[#4ac26b]">100% Up-time</span>
              </div>
            </div>
          </div>
        </div>

        {/* Infisical stage-proof: "Trusted by" Logo Rail */}
        <div className="mt-24 pt-12 border-t border-[#26272b]">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#707174] text-center mb-8">
            Trusted by engineering and product teams at
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 items-center justify-center">
            {LOGOS.map((name) => (
              <div
                key={name}
                className="py-2.5 px-3 rounded-lg bg-[#0e1014] border border-[#26272b] text-center font-mono font-semibold text-xs tracking-wider text-[#adaeb0] hover:text-[#ebebeb] hover:border-[#323439] transition-colors"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
