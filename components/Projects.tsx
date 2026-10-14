'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowUpRight, X, Clock, CheckCircle } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  description: string;
  results: string;
  deliverables: string[];
  aspectColor: string;
  gradientBg: string;
}

const PROJECTS: Project[] = [
  {
    id: 'polestar-kinetic',
    title: 'Polestar Kinetic — Pure Performance Launch',
    client: 'Polestar Automotive',
    category: '3D & CGI',
    year: '2024',
    duration: '01:15',
    role: 'Creative Direction, 3D CGI, Sound Design',
    description:
      'A cinematic 3D reveal film capturing the aerodynamic sculpted surfaces, active kinetic lighting, and battery chassis architecture of Polestar’s next-generation EV platform.',
    results: 'Premiered across 24 international motor showcases and generated over 4.2M organic impressions in launch week.',
    deliverables: ['Full 3D CGI Environments', 'Photorealistic Automotive Lighting', 'Custom Spatial Sound Design', 'Social Media 9:16 Cuts'],
    aspectColor: '#0FC8CF',
    gradientBg: 'from-[#081820] to-[#04080c]',
  },
  {
    id: 'nothing-ear',
    title: 'Nothing Ear (3) — Transparent Sound Architecture',
    client: 'Nothing Technology Ltd',
    category: 'Product Films',
    year: '2024',
    duration: '00:48',
    role: '3D R&D, Micro-Cinematography, Motion Design',
    description:
      'Exploring the beauty of internal mechanics through photorealistic transparent materials, micro-driver exploded views, and tactile haptic feedback visualization.',
    results: 'Served as the core centerpiece for the global product keynote, driving a 210% surge in pre-orders.',
    deliverables: ['Transparent Material Shaders', 'Exploded-View Micro Motion', 'Color Calibration', '4K Commercial Master'],
    aspectColor: '#CFABFF',
    gradientBg: 'from-[#19112a] to-[#08070d]',
  },
  {
    id: 'stripe-press',
    title: 'Stripe Press — The Architecture of Ideas',
    client: 'Stripe Inc.',
    category: 'Brand Stories',
    year: '2024',
    duration: '02:05',
    role: 'Art Direction, 2D Animation, Kinetic Type',
    description:
      'A mixed-media animated manifesto exploring economic progress, scientific breakthroughs, and the timeless beauty of long-form intellectual exploration.',
    results: 'Awarded Staff Pick on Vimeo and praised by design publications worldwide for typographic craft.',
    deliverables: ['Bespoke Kinetic Typography', 'Mixed-Media 2D Illustration', 'Custom Sound Architecture', 'Broadcast Deliverables'],
    aspectColor: '#6B1EEF',
    gradientBg: 'from-[#140b28] to-[#06040c]',
  },
  {
    id: 'figma-motion',
    title: 'Figma Plugins — Accelerating the Creative Flow',
    client: 'Figma',
    category: 'Motion Graphics',
    year: '2024',
    duration: '01:22',
    role: 'Interface Motion, 2D/3D Hybrid, UI Animation',
    description:
      'A high-energy, playful product film showcasing the extensibility of Figma’s ecosystem through tactile canvas animations and UI micro-interactions.',
    results: 'Achieved an 89% completion rate across video ad channels and onboarded 45,000+ new plugin developers.',
    deliverables: ['High-FPS Interface Animation', 'Vector UI Simulation', 'Sound Mixing & Foley', 'Lottie Animation Assets'],
    aspectColor: '#0FC8CF',
    gradientBg: 'from-[#09181a] to-[#04090a]',
  },
  {
    id: 'monolith-os',
    title: 'Monolith — Institutional Wealth Terminal',
    client: 'Monolith Capital',
    category: '3D & CGI',
    year: '2023',
    duration: '00:58',
    role: '3D Direction, Fluid Physics, Grading',
    description:
      'Translating multi-billion dollar algorithmic liquidity into tactile, organic visual structures that convey permanence, security, and computational superiority.',
    results: 'Helped secure $35M in institutional allocations during the closed private beta phase.',
    deliverables: ['Procedural Fluid Simulations', 'Cinematic Dark Grading', 'Multi-Screen Exhibition Cut', 'Audio Synthesis'],
    aspectColor: '#8B48F8',
    gradientBg: 'from-[#130822] to-[#06030b]',
  },
  {
    id: 'aura-circadian',
    title: 'Aura Health — Decoding Circadian Intelligence',
    client: 'Aura Biosystems',
    category: 'Product Films',
    year: '2024',
    duration: '01:10',
    role: 'Art Direction, Cellular 3D, Mobile UI Motion',
    description:
      'A serene, biological visual exploration of cellular recovery, deep sleep cycles, and seamless wearable sensor telemetry.',
    results: 'Named Health Tech Product Campaign of the Year, boosting subscription conversions by 3.4x.',
    deliverables: ['Microscopic Biological 3D', 'Health Sensor Data Visualization', 'Mobile App Teaser Cuts', 'Brand Sound Identity'],
    aspectColor: '#CFABFF',
    gradientBg: 'from-[#181122] to-[#07050a]',
  },
];

const CATEGORIES = ['All Projects', '3D & CGI', 'Product Films', 'Motion Graphics', 'Brand Stories'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
              Selected Work (2023 — 2024)
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
              COMMERCIALS & MOTION FILMS.
            </h2>
          </div>

          <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
            Every project is conceived from a strategic narrative, elevated by world-class art
            direction, and delivered with uncompromising technical precision.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
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
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative rounded-2xl bg-[#0c0c14] border border-white/[0.08] hover:border-white/25 overflow-hidden transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)]">
                  {/* Cinematic 16:9 Thumbnail Mockup */}
                  <div
                    className={`relative aspect-video w-full bg-gradient-to-br ${project.gradientBg} border-b border-white/[0.06] flex items-center justify-center overflow-hidden`}
                  >
                    {/* Atmospheric lighting overlay */}
                    <div className="absolute inset-0 bg-subtle-grid opacity-30" />
                    
                    {/* Subtle ambient light */}
                    <div
                      className="absolute w-36 h-36 rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                      style={{ backgroundColor: project.aspectColor }}
                    />

                    {/* Top metadata tags */}
                    <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between text-[11px] font-mono z-10">
                      <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        {project.duration}
                      </span>
                    </div>

                    {/* Center Play Button on hover */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>

                    {/* Bottom Client Bar */}
                    <div className="absolute bottom-3 inset-x-3.5 flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10">
                      <span className="font-semibold text-zinc-200">{project.client}</span>
                      <span>{project.year}</span>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-zinc-200 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                    </div>

                    <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-light">
                      {project.description}
                    </p>

                    {/* Deliverables pill tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {project.deliverables.slice(0, 3).map((d) => (
                        <span
                          key={d}
                          className="text-[10px] font-mono text-zinc-400 bg-white/[0.03] px-2 py-0.5 rounded border border-white/[0.06]"
                        >
                          {d}
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
              initial={{ scale: 0.94, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0e0e16] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#0FC8CF] mb-2">
                <span>{selectedProject.client}</span>
                <span>•</span>
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-4 font-display">
                {selectedProject.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-light">
                {selectedProject.description}
              </p>

              {/* Commercial Result Callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-1">
                  Commercial Impact & Results:
                </span>
                <p className="text-sm font-medium text-white">{selectedProject.results}</p>
              </div>

              {/* Production Deliverables */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2.5">
                  Production Scope & Deliverables:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle className="w-3.5 h-3.5 text-[#0FC8CF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-400">
                  Run Time: <strong className="text-white">{selectedProject.duration}</strong>
                </span>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
