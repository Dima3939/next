'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, Clock, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  description: string;
  results: string;
  image: string;
  aspect: 'narrow' | 'wide';
  deliverables: string[];
}

const MONOLITH_PROJECTS: Project[] = [
  {
    id: 'polestar-kinetic',
    title: 'Polestar Kinetic — Pure Aerodynamics Reveal',
    client: 'Polestar Automotive',
    category: 'Automotive & Space',
    year: '2024',
    duration: '01:15',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    description:
      'Cinematic 3D reveal film capturing aerodynamic sculpted carbon bodywork, kinetic lighting choreography, and battery thermal dynamics of Polestar’s flagship platform.',
    results: 'Generated 4.2M organic impressions across 24 international motor showcases during launch week.',
    deliverables: ['Full 3D CGI Environments', 'Photorealistic Automotive Lighting', 'Spatial Sound Synthesis', '4K Commercial Master'],
  },
  {
    id: 'kinesis-tourbillon',
    title: 'Kinesis — Haute Horlogerie 3D Experience',
    client: 'Maison Kinesis Geneva',
    category: '3D & WebGL',
    year: '2024',
    duration: '00:50',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    description:
      'Real-time WebGL micro-mechanical tourbillon with sub-millimeter component exploded views, refraction shaders, and auditory gear resonance.',
    results: 'Sold out a limited batch of 50 mechanical timepieces in under 7 minutes directly through the web canvas.',
    deliverables: ['Custom GLSL Shaders', 'Sub-Millimeter Exploded Views', 'Tactile WebGL Canvas', 'Web Audio API Engine'],
  },
  {
    id: 'neura-core',
    title: 'Neura OS — Autonomous Agent Canvas',
    client: 'Neura AI Corp',
    category: 'Spatial UI',
    year: '2024',
    duration: '01:25',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Next-generation spatial canvas interface where multi-agent neural teams execute high-velocity product workflows alongside human art directors.',
    results: 'Propelled company from stealth into a $28M Series A round with over 140,000 waitlist reservations.',
    deliverables: ['App Router Next.js 14', 'Hardware-Accelerated Physics', 'Fluid Gesture Architecture', 'Design System'],
  },
  {
    id: 'nothing-sound',
    title: 'Nothing Sound (3) — Transparent Mechanics',
    client: 'Nothing Technology Ltd',
    category: 'Product Films',
    year: '2024',
    duration: '00:48',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Exploring tactile internal mechanics through photorealistic transparent materials, micro-driver resonance simulations, and precise haptic audio choreography.',
    results: 'Served as the core launch centerpiece for the global keynote, driving a 210% surge in pre-orders.',
    deliverables: ['Transparent Material R&D', 'Micro-Cinematography', 'Haptic Sound Design', 'Social Video Cutdowns'],
  },
  {
    id: 'monolith-protocol',
    title: 'Monolith Protocol — Institutional Liquidity Hub',
    client: 'Monolith Foundation',
    category: 'Spatial UI',
    year: '2023',
    duration: '01:10',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop',
    description:
      'High-speed institutional liquidity orderbook interface featuring instantaneous micro-animations, quantum depth visualizers, and zero layout shift.',
    results: 'Processed $1.4B in institutional transactions across 180 countries with zero latency degradation.',
    deliverables: ['Ultra-Dense Data Viz', 'Real-Time WebSocket Streams', 'Dark Mode Ergonomics', 'High-FPS Motion'],
  },
  {
    id: 'orbital-dynamics',
    title: 'Orbital Dynamics — Mission Telemetry Cockpit',
    client: 'Orbital Space Systems',
    category: 'Automotive & Space',
    year: '2024',
    duration: '01:40',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    description:
      'Satellite constellation tracking interface with real-time orbital trajectory physics, telemetry streaming, and anomaly heatmaps.',
    results: 'Deployed across 4 mission operations centers with verified sub-100ms global synchronization.',
    deliverables: ['Vector Orbital Math', 'GPU Canvas Rendering', 'Mission Operations UI', '3D Earth Visualizer'],
  },
  {
    id: 'stripe-manifesto',
    title: 'Stripe Press — The Architecture of Ideas',
    client: 'Stripe Inc.',
    category: 'Brand Systems',
    year: '2024',
    duration: '02:05',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop',
    description:
      'Mixed-media animated manifesto exploring economic progress, scientific breakthroughs, and the timeless beauty of typographic design.',
    results: 'Awarded Staff Pick on Vimeo and celebrated across international design publications for typographic mastery.',
    deliverables: ['Kinetic Typography System', 'Mixed-Media 2D Illustration', 'Custom Sound Architecture', 'Broadcast Master'],
  },
  {
    id: 'aether-pavilion',
    title: 'Aether Pavilion — Generative Spatial Acoustics',
    client: 'Aether Architecture',
    category: '3D & WebGL',
    year: '2024',
    duration: '01:35',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    description:
      'Generative binaural soundstage explorer allowing audiophiles and architects to visualize room acoustics in photorealistic dark space.',
    results: 'Drove a 4.8x boost in high-end studio acoustics commissions across Zurich and New York.',
    deliverables: ['Web Audio API Synthesis', '3D Spatial Mesh Simulation', 'Interactive Lighting R&D', 'Mobile WebGL Mode'],
  },
];

const CATEGORIES = ['All Archive', '3D & WebGL', 'Spatial UI', 'Automotive & Space', 'Product Films', 'Brand Systems'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Archive');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'All Archive'
      ? MONOLITH_PROJECTS
      : MONOLITH_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
              Selected Works (2023 — 2024)
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
              PROVEN MASTERPIECES.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Every release is an artisanal collision of architectural typography, real-time shaders,
            and uncompromising commercial engineering.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 uppercase ${
                  isActive
                    ? 'bg-[#d4ff32] text-black font-bold shadow-[0_0_20px_rgba(212,255,50,0.3)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento Grid with Real High-Res Photography */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              const isWide = item.aspect === 'wide';
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  onClick={() => setSelectedProject(item)}
                  className={`group relative cursor-pointer ${
                    isWide ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className="bento-card relative h-[380px] sm:h-[440px] flex flex-col justify-between p-6 sm:p-8 overflow-hidden rounded-2xl border border-white/[0.08] group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                    {/* Real High-Res Background Image with Smooth Hover Zoom */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Multi-Stop Cinematic Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30 group-hover:via-black/40 transition-colors duration-500" />

                    {/* Top Tag & Runtime */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-[#d4ff32]" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Center Play Button on hover */}
                    <div className="relative z-10 my-auto flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-[#d4ff32] text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,255,50,0.4)] transition-transform duration-300 group-hover:scale-110">
                        <Play className="w-5 h-5 fill-black ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Metadata & Title */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-1.5">
                        <span className="text-white font-semibold">{item.client}</span>
                        <span>•</span>
                        <span>{item.year}</span>
                      </div>

                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl sm:text-2xl font-black text-white font-display group-hover:text-[#d4ff32] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-[#d4ff32] group-hover:text-black transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-300 font-light line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                        <span className="uppercase tracking-wider">Inspect Case Study</span>
                        <span className="text-[#d4ff32] font-mono text-[11px]">View breakdown →</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Details Interactive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0e0e13] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border border-white/10 transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Hero Image */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs font-mono uppercase bg-black/70 px-3 py-1 rounded-full border border-white/10 text-white">
                    {selectedProject.client} • {selectedProject.year}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono text-[#d4ff32] mb-2 uppercase">
                {selectedProject.category} • Runtime: {selectedProject.duration}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                {selectedProject.description}
              </p>

              {/* Verified Results Callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  Key Commercial Metric Achieved:
                </span>
                <p className="text-sm font-semibold text-white">{selectedProject.results}</p>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                  Production Scope & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-[#d4ff32] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-500">
                  Archived by MONOLITH Studio
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-[#d4ff32] text-black font-bold text-xs tracking-wider uppercase hover:bg-[#c3ec29] transition-colors"
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
