'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Play, X, CheckCircle, Clock } from 'lucide-react';

interface WorkItem {
  id: number;
  title: string;
  category: string;
  description: string;
  aspect: 'narrow' | 'wide';
  color: string;
  gradient: string;
  runtime: string;
  highlights: string[];
}

const REAL_WORKS: WorkItem[] = [
  {
    id: 10,
    title: 'Aurora Website Reveal',
    category: 'AI Video',
    description: 'Brand website reveal combining screen capture and high-FPS motion graphics.',
    aspect: 'narrow',
    color: '#0FC8CF',
    gradient: 'from-[#081822] via-[#050e14] to-[#020508]',
    runtime: '00:45',
    highlights: ['Next-Gen Screen Recording', 'Kinetic Web Graphics', 'Interactive Sound Design'],
  },
  {
    id: 9,
    title: 'Craftly SME Onboarding',
    category: 'B2B',
    description: 'Animated onboarding for a small-business tooling product that streamlines workflow setup.',
    aspect: 'wide',
    color: '#CFABFF',
    gradient: 'from-[#19102c] via-[#0e091a] to-[#040308]',
    runtime: '01:15',
    highlights: ['2D Vector Motion', 'Workflow Simplification', 'Multi-Language Voiceover'],
  },
  {
    id: 8,
    title: 'Pulse Social Series',
    category: 'Social Media',
    description: 'A series of short vertical videos crafted for maximum social media reach and viral conversion.',
    aspect: 'wide',
    color: '#6B1EEF',
    gradient: 'from-[#18082e] via-[#0b0317] to-[#040108]',
    runtime: '00:30',
    highlights: ['9:16 Vertical Optimization', 'Fast-Paced Motion Beats', 'B2C Hook Generation'],
  },
  {
    id: 7,
    title: 'Scholar EdTech Suite',
    category: 'SaaS',
    description: 'Onboarding video for an online learning platform for schools, teachers, and students.',
    aspect: 'narrow',
    color: '#0FC8CF',
    gradient: 'from-[#051a1d] via-[#030e10] to-[#010405]',
    runtime: '01:20',
    highlights: ['EdTech Workflow Animations', 'Friendly Character Accents', 'Clear Visual Hierarchy'],
  },
  {
    id: 6,
    title: 'HealthProof Platform',
    category: 'B2B',
    description: 'Explainer for a healthcare compliance platform, built to earn trust from enterprise hospital systems.',
    aspect: 'narrow',
    color: '#CFABFF',
    gradient: 'from-[#140b24] via-[#0b0614] to-[#040207]',
    runtime: '01:05',
    highlights: ['HIPAA Compliance Metaphor', 'Clean Isometric Graphics', 'Enterprise Trust Tone'],
  },
  {
    id: 5,
    title: 'PocketBank Mobile App',
    category: 'Mobile',
    description: 'Mobile banking app walkthrough with animated UI, tactile feedback, and micro-interactions.',
    aspect: 'wide',
    color: '#0FC8CF',
    gradient: 'from-[#061820] via-[#030d12] to-[#010406]',
    runtime: '00:55',
    highlights: ['3D Device Modeling', 'Micro-Interactions Animation', 'Financial Security Showcase'],
  },
  {
    id: 4,
    title: 'Launchpad Startup Reel',
    category: 'Startup',
    description: 'Investor-ready launch video for an early-stage SaaS startup raising a venture round.',
    aspect: 'wide',
    color: '#6B1EEF',
    gradient: 'from-[#190930] via-[#0c0418] to-[#040108]',
    runtime: '01:30',
    highlights: ['High-Energy Pacing', 'Investor Narrative Deck', 'Core Value Acceleration'],
  },
  {
    id: 3,
    title: 'Bloom Retail Campaign',
    category: 'B2C',
    description: 'High-energy B2C campaign spot built to convert online shoppers across Instagram and TikTok.',
    aspect: 'narrow',
    color: '#CFABFF',
    gradient: 'from-[#180a26] via-[#0d0515] to-[#050208]',
    runtime: '00:35',
    highlights: ['Dynamic Product Transitions', 'Vibrant Color Grading', 'Mobile-First Cutdowns'],
  },
  {
    id: 2,
    title: 'Vertex B2B Suite',
    category: 'B2B',
    description: 'Enterprise sales video presenting a security-first B2B workflow platform to enterprise CTOs.',
    aspect: 'narrow',
    color: '#0FC8CF',
    gradient: 'from-[#06181f] via-[#030c10] to-[#010405]',
    runtime: '01:40',
    highlights: ['Complex Security Systems', 'Data Architecture Motion', 'C-Suite Value Focus'],
  },
  {
    id: 1,
    title: 'Nimbus SaaS Platform',
    category: 'SaaS',
    description: 'Product explainer that turns a complex SaaS dashboard into a clear, compelling 90-second story.',
    aspect: 'wide',
    color: '#6B1EEF',
    gradient: 'from-[#140828] via-[#090314] to-[#030107]',
    runtime: '01:30',
    highlights: ['Figma to Video Pipeline', 'Step-by-step User Journey', 'Conversion-Optimized CTA'],
  },
];

const CATEGORIES = ['All Videos', 'B2B', 'B2C', 'SaaS', 'Startup', 'Mobile', 'Social Media', 'AI Video'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All Videos');
  const [selectedCase, setSelectedCase] = useState<WorkItem | null>(null);

  const filtered =
    activeCategory === 'All Videos'
      ? REAL_WORKS
      : REAL_WORKS.filter((item) => item.category === activeCategory || (activeCategory === 'B2B' && item.title.includes('B2B')));

  return (
    <section id="work" className="relative py-24 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
              ENDORPHIN-FUELED WORK
            </h2>
            <p className="mt-3 text-zinc-400 text-sm md:text-base font-light">
              A showcase of designs and videos tailored to bring ideas to life!
            </p>
          </div>
        </div>

        {/* Real Category Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Bento Grid (matching Endorphin's real architecture) */}
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
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  onClick={() => setSelectedCase(item)}
                  className={`group relative cursor-pointer ${
                    isWide ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                >
                  <div className="bento-card relative h-[360px] sm:h-[420px] flex flex-col justify-between p-6 sm:p-8 overflow-hidden">
                    {/* Background Canvas & Atmospheric Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-105`} />
                    <div className="absolute inset-0 bg-subtle-grid opacity-30" />
                    
                    {/* Radial Color Bloom on hover */}
                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* Top Tag & Runtime */}
                    <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                      <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300 uppercase">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-400">
                        <Clock className="w-3.5 h-3.5" />
                        {item.runtime}
                      </span>
                    </div>

                    {/* Center Play Button on hover */}
                    <div className="relative z-10 my-auto flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 group-hover:bg-white text-white group-hover:text-black border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-xl">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom Info Overlay */}
                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-[#CFABFF] transition-colors leading-snug">
                          {item.title}
                        </h3>
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-400 font-light line-clamp-2 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.08] text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors">
                        <span>Case study</span>
                        <span className="text-[#0FC8CF] font-mono text-[11px]">View breakdown →</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Case Details Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCase(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#0e0e17] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#0FC8CF] mb-2 uppercase">
                <span>{selectedCase.category}</span>
                <span>•</span>
                <span>Runtime: {selectedCase.runtime}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display mb-4">
                {selectedCase.title}
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed font-light mb-6">
                {selectedCase.description}
              </p>

              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3">
                  Production Highlights & Techniques:
                </span>
                <div className="space-y-2">
                  {selectedCase.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2.5 text-xs text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-[#0FC8CF] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-500">
                  Produced by Endorphin Studio
                </span>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
                >
                  Close Case
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
