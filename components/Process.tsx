'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Compass, Layout, Cpu, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: FileText,
    title: 'Brief & Scope Calibration',
    desc: 'Clarification of core commercial objectives, audience psychology, deliverable formats, and production timeline.',
    deliverable: 'Approved Creative Brief & Milestone Schedule',
  },
  {
    step: '02',
    icon: Compass,
    title: 'Pre-Production & Script',
    desc: 'Developing narrative treatments, voiceover scripts, and conceptual moodboards that anchor the creative vision.',
    deliverable: 'Final Script & Visual Tone Direction',
  },
  {
    step: '03',
    icon: Layout,
    title: 'Storyboard & Styleframes',
    desc: 'Designing key cinematic frames to establish composition, 3D lighting, materials, and typography before animation.',
    deliverable: 'Approved Styleframes & Storyboard Deck',
  },
  {
    step: '04',
    icon: Cpu,
    title: 'Production & Animation',
    desc: 'Crafting 3D assets, camera sequences, and dynamic transitions with regular milestone video check-ins for feedback.',
    deliverable: 'First Cut & Motion Refinement Passes',
  },
  {
    step: '05',
    icon: CheckCircle2,
    title: 'Finalizing & Sound Design',
    desc: 'Original music synthesis, spatial sound design, precision color grading, and delivery of 4K multi-ratio masters.',
    deliverable: 'Broadcast Masters & Social Cutdowns',
  },
];

export default function Process() {
  return (
    <section id="approach" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
            Production Methodology
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight">
            OUR APPROACH.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            A battle-tested 5-phase production workflow that guarantees creative brilliance and on-time delivery.
          </p>
        </div>

        {/* 5-Phase Horizontal Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-[#0c0c14] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-zinc-600 group-hover:text-white transition-colors">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-[#0FC8CF] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed font-light mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-zinc-500">
                  <span className="text-zinc-300 block font-medium">Output:</span>
                  <span className="text-zinc-400">{item.deliverable}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
