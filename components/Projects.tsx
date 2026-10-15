'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, Clock, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  idx: string;
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
    idx: '01',
    title: 'Polestar Kinetic — Aerodynamics WebGL Reveal',
    client: 'Polestar Automotive',
    category: 'Automotive & 3D',
    year: '2024',
    duration: '01:15',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    description:
      'Cinematic 3D reveal film capturing aerodynamic sculpted carbon bodywork, kinetic lighting choreography, and battery thermal dynamics of Polestar’s flagship platform.',
    results: '4.2M organic impressions across 24 international motor showcases during launch week.',
    deliverables: ['Full 3D CGI Environments', 'Photorealistic Automotive Lighting', 'Spatial Sound Synthesis', '4K Commercial Master'],
  },
  {
    id: 'kinesis-tourbillon',
    idx: '02',
    title: 'Kinesis — Haute Horlogerie 3D Experience',
    client: 'Maison Kinesis Geneva',
    category: 'Luxury WebGL',
    year: '2024',
    duration: '00:50',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    description:
      'Real-time WebGL micro-mechanical tourbillon with sub-millimeter component exploded views, refraction shaders, and auditory gear resonance.',
    results: 'Sold out 50 mechanical timepieces in under 7 minutes directly through the web canvas.',
    deliverables: ['Custom GLSL Shaders', 'Sub-Millimeter Exploded Views', 'Tactile WebGL Canvas', 'Web Audio API Engine'],
  },
  {
    id: 'neura-core',
    idx: '03',
    title: 'Neura OS — Autonomous Agent Canvas',
    client: 'Neura AI Corp',
    category: 'Spatial UI',
    year: '2024',
    duration: '01:25',
    aspect: 'narrow',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Next-generation spatial canvas interface where multi-agent neural teams execute high-velocity product workflows alongside human art directors.',
    results: 'Propelled company from stealth into a $28M Series A round with 140,000+ waitlist signups.',
    deliverables: ['App Router Next.js 14', 'Hardware-Accelerated Physics', 'Fluid Gesture Architecture', 'Design System'],
  },
  {
    id: 'nothing-sound',
    idx: '04',
    title: 'Nothing Sound (3) — Transparent Mechanics',
    client: 'Nothing Technology Ltd',
    category: 'Hardware Films',
    year: '2024',
    duration: '00:48',
    aspect: 'wide',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Exploring tactile internal mechanics through photorealistic transparent materials, micro-driver resonance simulations, and precise haptic audio choreography.',
    results: 'Keynote centerpiece driving a 210% surge in global hardware pre-orders.',
    deliverables: ['Transparent Material R&D', 'Micro-Cinematography', 'Haptic Sound Design', 'Social Video Cutdowns'],
  },
];

const CATEGORIES = ['All Projects', 'Automotive & 3D', 'Luxury WebGL', 'Spatial UI', 'Hardware Films'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === 'All Projects'
      ? MONOLITH_PROJECTS
      : MONOLITH_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6 bg-[#08090a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-xs mb-4">
              PROVEN CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Selected client releases.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-normal leading-relaxed">
            Every release is engineered to drive tangible commercial milestones, viral press coverage,
            and industry awards.
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
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-black font-semibold shadow-sm'
                    : 'bg-surface-100 text-zinc-400 hover:text-white hover:bg-surface-50 border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  onClick={() => setSelectedProject(item)}
                  className="group relative cursor-pointer rounded-2xl bg-surface-100 border border-white/10 overflow-hidden hover:border-emerald-500/40 transition-all duration-300 shadow-xl"
                >
                  {/* Image container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e12] via-[#0d0e12]/40 to-transparent pointer-events-none" />

                    {/* Top tags */}
                    <div className="absolute top-4 inset-x-4 z-10 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-white font-medium">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/75 backdrop-blur-md border border-white/10 text-zinc-300">
                        <Clock className="w-3.5 h-3.5 text-emerald-400" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Center play icon on hover */}
                    <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-emerald-500 text-black flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                        <Play className="w-6 h-6 fill-black ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
                      <span className="text-emerald-400 font-semibold">{item.client}</span>
                      <span>{item.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-zinc-400 font-normal leading-relaxed line-clamp-2 mb-6">
                      {item.description}
                    </p>

                    {/* Metric Highlight */}
                    <div className="p-3.5 rounded-lg bg-surface-200 border border-white/5 flex items-center justify-between text-xs">
                      <span className="text-zinc-400 font-mono">Key Milestone:</span>
                      <span className="text-white font-semibold">{item.results}</span>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                      <span>View production deliverables</span>
                      <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              className="relative w-full max-w-3xl bg-[#0d0e12] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white border border-white/10 transition-colors z-20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Hero Image */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 border border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs font-mono uppercase bg-black/75 px-3 py-1 rounded border border-white/10 text-white">
                    {selectedProject.client} • {selectedProject.year}
                  </span>
                </div>
              </div>

              <div className="text-xs font-mono text-emerald-400 mb-2 uppercase font-semibold">
                {selectedProject.category} • RUNTIME: {selectedProject.duration}
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-normal mb-6">
                {selectedProject.description}
              </p>

              {/* Verified Results Callout */}
              <div className="p-4 rounded-xl bg-surface-100 border border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  Key Metric Achieved:
                </span>
                <p className="text-sm font-semibold text-emerald-400">{selectedProject.results}</p>
              </div>

              {/* Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                  Production Scope & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-500">
                  MONOLITH Studio Archive
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-emerald-500 text-black font-semibold text-xs tracking-wider uppercase hover:bg-emerald-400 transition-colors"
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
