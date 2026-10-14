'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, Eye, X, Layers, Cpu, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  impact: string;
  year: string;
  award?: string;
  tags: string[];
  gradient: string;
  accentColor: string;
  stats: { label: string; value: string };
}

const PROJECTS: Project[] = [
  {
    id: 'cyber-pulse',
    title: 'CyberPulse Holographic Terminal',
    client: 'CyberPulse Labs',
    category: '3D & WebGL',
    description:
      'Ultra-dense institutional liquidity interface with 60 FPS real-time WebGL depth visualizers and quantum particle stream physics.',
    impact: 'Reduced order execution latency by 42% and secured $45M TVL in initial launch week.',
    year: '2024',
    award: 'Awwwards Site of the Day',
    tags: ['Next.js 14', 'Three.js / GLSL', 'Framer Motion', 'Tailwind'],
    gradient: 'from-violet-600/30 via-purple-900/20 to-black',
    accentColor: '#8b5cf6',
    stats: { label: 'Frame Rate', value: '60 FPS' },
  },
  {
    id: 'neura-os',
    title: 'Neura OS — Autonomous Agent Canvas',
    client: 'Neura AI Corp',
    category: 'AI Products',
    description:
      'Spatial canvas interface where multi-agent LLM teams execute design workflows collaboratively with human art directors.',
    impact: 'Propelled company from stealth into $28M Series A funding with 140,000 waitlist users.',
    year: '2024',
    award: 'FWA of the Month',
    tags: ['App Router', 'TypeScript', 'Fluid Physics', 'Dark UI'],
    gradient: 'from-cyan-600/30 via-blue-950/20 to-black',
    accentColor: '#06b6d4',
    stats: { label: 'Waitlist', value: '140K+' },
  },
  {
    id: 'kinesis-horology',
    title: 'Kinesis — Haute Horlogerie 3D Experience',
    client: 'Maison Kinesis Geneva',
    category: '3D & WebGL',
    description:
      'Interactive micro-mechanical tourbillon model with sub-millimeter component exploded views and auditory gear resonance.',
    impact: 'Sold out 50 limited-edition timepieces in under 7 minutes directly through the web canvas.',
    year: '2024',
    award: 'Red Dot Best of the Best',
    tags: ['WebGL Shaders', 'Audio API', 'Interactive 3D', 'Next Export'],
    gradient: 'from-amber-600/30 via-orange-950/20 to-black',
    accentColor: '#f59e0b',
    stats: { label: 'Sell Out Time', value: '6m 40s' },
  },
  {
    id: 'valence-protocol',
    title: 'Valence Protocol Liquidity Hub',
    client: 'Valence Foundation',
    category: 'Web App',
    description:
      'High-speed decentralized orderbook interface featuring instantaneous micro-animations and zero layout shift.',
    impact: 'Processed $1.4B in trading volume with 99.9% uptime across 180 countries.',
    year: '2023',
    award: 'CSS Design Awards WOTD',
    tags: ['Next.js', 'Web3 Systems', 'Micro-interactions', 'GSAP'],
    gradient: 'from-pink-600/30 via-rose-950/20 to-black',
    accentColor: '#ec4899',
    stats: { label: 'Vol Processed', value: '$1.4B' },
  },
  {
    id: 'orbital-telemetry',
    title: 'Orbital Dynamics Telemetry Engine',
    client: 'Orbital Dynamics Space',
    category: 'AI Products',
    description:
      'Mission-critical satellite constellation tracking cockpit with live orbital trajectories and telemetry telemetry streaming.',
    impact: 'Deployed across 4 mission operations centers with sub-100ms sync latency.',
    year: '2024',
    award: 'Awwwards Developer Award',
    tags: ['Real-Time Sockets', 'Vector Canvas', 'GPU Accelerated', 'App Router'],
    gradient: 'from-emerald-600/30 via-teal-950/20 to-black',
    accentColor: '#10b981',
    stats: { label: 'Latency', value: '<85ms' },
  },
  {
    id: 'aether-spatial',
    title: 'Aether Spatial Acoustics',
    client: 'Aether Audio London',
    category: '3D & WebGL',
    description:
      'Generative binaural soundstage explorer allowing audiophiles to visualize room acoustics in photorealistic dark space.',
    impact: 'Drove a 4.8x boost in studio acoustics consultation bookings.',
    year: '2023',
    award: 'Webby Nominee',
    tags: ['Web Audio API', '3D Mesh', 'Framer Motion', 'Tailwind'],
    gradient: 'from-fuchsia-600/30 via-purple-950/20 to-black',
    accentColor: '#d946ef',
    stats: { label: 'Inquiries', value: '+380%' },
  },
];

const CATEGORIES = ['All Works', '3D & WebGL', 'AI Products', 'Web App'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Works');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All Works'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="works" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-brand-neon font-mono text-xs uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
              PROVEN MASTERPIECES.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Every release is an artisanal collision of sub-millimeter typography, reactive shaders,
            and uncompromising conversion architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Staggered Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Glowing Card Frame */}
                <div className="relative h-full rounded-2xl bg-[#0c0c14]/90 border border-white/10 hover:border-purple-500/40 p-6 flex flex-col justify-between transition-all duration-500 overflow-hidden group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.25)]">
                  {/* Subtle Card Background Radial Accent */}
                  <div
                    className={`absolute -top-24 -right-24 w-60 h-60 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl opacity-30 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none`}
                  />

                  {/* Card Visual / Interactive Canvas Mockup */}
                  <div className="relative w-full h-52 rounded-xl bg-gradient-to-br from-[#12121e] to-[#09090f] border border-white/5 p-4 flex flex-col justify-between overflow-hidden mb-6 group-hover:border-white/20 transition-colors">
                    {/* Top tags */}
                    <div className="flex items-center justify-between z-10">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                        {project.category}
                      </span>
                      {project.award && (
                        <span className="flex items-center gap-1 text-[10px] font-mono text-purple-300 px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/30">
                          <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                          {project.award}
                        </span>
                      )}
                    </div>

                    {/* Center Graphic representation */}
                    <div className="my-auto flex flex-col items-center justify-center relative">
                      <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-purple-500/50 transition-all duration-500 shadow-inner">
                        <Cpu
                          className="w-8 h-8 transition-colors duration-300"
                          style={{ color: project.accentColor }}
                        />
                      </div>
                      <span className="mt-3 text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
                        {project.stats.label}: <strong className="text-white">{project.stats.value}</strong>
                      </span>
                    </div>

                    {/* Bottom strip */}
                    <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono z-10 pt-2 border-t border-white/5">
                      <span>{project.client}</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Hover hover overlay highlight */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-semibold text-xs tracking-wider shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Case Study</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-0.5" />
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Interactive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0f0f18] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-2">
                <span>{selectedProject.category}</span>
                <span>/</span>
                <span>{selectedProject.year}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Impact Callout */}
              <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 mb-6">
                <div className="text-xs font-mono uppercase text-brand-neon mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Key Business Metric Achieved:
                </div>
                <div className="text-sm font-semibold text-white">{selectedProject.impact}</div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                  Engineered With:
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs text-zinc-400 font-mono">
                  Client: <strong className="text-white">{selectedProject.client}</strong>
                </span>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs hover:bg-zinc-200 transition-colors"
                >
                  Close Case View
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
