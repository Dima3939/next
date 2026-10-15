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
  deliverables: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'polestar-kinetic',
    title: 'Polestar Kinetic — Pure Aerodynamics WebGL Reveal',
    client: 'Polestar Automotive',
    category: 'Automotive 3D',
    year: '2024',
    duration: '01:15',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop',
    description:
      'Cinematic 3D reveal film capturing aerodynamic sculpted carbon bodywork, kinetic lighting choreography, and battery thermal dynamics of Polestar’s flagship platform.',
    results: '4.2M organic impressions across 24 international motor showcases during launch week.',
    deliverables: ['Full 3D CGI Environments', 'Photorealistic Automotive Lighting', 'Spatial Sound Synthesis', '4K Commercial Master'],
  },
  {
    id: 'kinesis-tourbillon',
    title: 'Kinesis Geneva — Haute Horlogerie 3D Experience',
    client: 'Maison Kinesis Geneva',
    category: 'Luxury WebGL',
    year: '2024',
    duration: '00:50',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
    description:
      'Real-time WebGL micro-mechanical tourbillon with sub-millimeter component exploded views, refraction shaders, and auditory gear resonance.',
    results: 'Sold out 50 mechanical timepieces in under 7 minutes directly through the web canvas.',
    deliverables: ['Custom GLSL Shaders', 'Sub-Millimeter Exploded Views', 'Tactile WebGL Canvas', 'Web Audio API Engine'],
  },
  {
    id: 'neura-core',
    title: 'Neura OS — Autonomous Agent Canvas',
    client: 'Neura AI Corp',
    category: 'Spatial UI',
    year: '2024',
    duration: '01:25',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Next-generation spatial canvas interface where multi-agent neural teams execute high-velocity product workflows alongside human art directors.',
    results: 'Propelled company from stealth into a $28M Series A round with 140,000+ waitlist signups.',
    deliverables: ['App Router Next.js 14', 'Hardware-Accelerated Physics', 'Fluid Gesture Architecture', 'Design System'],
  },
  {
    id: 'nothing-sound',
    title: 'Nothing Sound (3) — Transparent Hardware Mechanics',
    client: 'Nothing Technology Ltd',
    category: 'Hardware Films',
    year: '2024',
    duration: '00:48',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1200&auto=format&fit=crop',
    description:
      'Exploring tactile internal mechanics through photorealistic transparent materials, micro-driver resonance simulations, and precise haptic audio choreography.',
    results: 'Core keynote centerpiece driving a 210% surge in global hardware pre-orders.',
    deliverables: ['Transparent Material R&D', 'Micro-Cinematography', 'Haptic Sound Design', 'Social Video Cutdowns'],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="relative py-24 md:py-32 px-6 bg-[#0b0d10] border-t border-[#26272b]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
                FEATURED CASE STUDIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ebebeb]">
              Real-world releases deployed on MONOLITH.
            </h2>
          </div>

          <p className="text-[#adaeb0] text-sm max-w-md font-normal leading-relaxed">
            See how high-growth tech companies and luxury brands leverage our engineering architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedProject(item)}
              className="rounded-xl bg-[#0e1014] border border-[#26272b] overflow-hidden hover:border-[#3a3c42] transition-all cursor-pointer group shadow-lg"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#14161d]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-[#ebebeb] border border-[#26272b]">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-mono text-[#adaeb0] mb-2">
                  <span className="text-[#c2d72a] font-semibold">{item.client}</span>
                  <span>{item.year}</span>
                </div>

                <h3 className="text-lg font-medium text-[#ebebeb] tracking-tight group-hover:text-[#c2d72a] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#adaeb0] leading-relaxed line-clamp-2 mb-4">
                  {item.description}
                </p>

                <div className="p-3 rounded bg-[#14161d] border border-[#26272b] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#707174]">Verified Milestone:</span>
                  <span className="text-[#ebebeb] font-medium">{item.results}</span>
                </div>

                <div className="mt-4 pt-4 border-t border-[#26272b] flex items-center justify-between text-xs text-[#adaeb0] group-hover:text-[#ebebeb] transition-colors">
                  <span>View full case architecture</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c2d72a]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0e1014] border border-[#26272b] rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded bg-[#1e1f22] text-[#adaeb0] hover:text-[#ebebeb]"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-5 border border-[#26272b]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-xs font-mono text-[#c2d72a] mb-1 uppercase font-semibold">
                {selectedProject.client} • {selectedProject.year}
              </div>

              <h3 className="text-xl font-medium text-[#ebebeb] mb-3">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#adaeb0] leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-lg bg-[#14161d] border border-[#26272b] mb-6">
                <span className="text-xs font-mono text-[#707174] uppercase block mb-1">
                  Key Metric Achieved:
                </span>
                <p className="text-sm font-semibold text-[#c2d72a]">{selectedProject.results}</p>
              </div>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#707174] uppercase block mb-3">
                  Delivered Architecture:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProject.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-xs text-[#ebebeb]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c2d72a] shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#26272b] flex items-center justify-between">
                <span className="text-xs font-mono text-[#707174]">MONOLITH Case Archive</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="v2-btn v2-btn--primary text-xs py-1.5 px-4"
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
