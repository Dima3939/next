'use client';

import React from 'react';
import { motion } from 'framer-motion';

const BLUEPRINT_STEPS = [
  {
    number: '01',
    title: 'Immersion & Spatial Blueprint',
    duration: 'Week 1',
    desc: 'Auditing your product architecture, narrative goals, and competitor landscape. We establish the kinetic design pillars through live interactive styleboards.',
    output: 'Approved Narrative Brief & Interaction Spec',
  },
  {
    number: '02',
    title: 'High-Fidelity Styleframes',
    duration: 'Week 2–3',
    desc: 'Designing key cinematic states in Figma and Blender with sub-millimeter precision. Establishing lighting, material shaders, and typography systems.',
    output: 'Interactive Styleframes & 3D R&D Deck',
  },
  {
    number: '03',
    title: 'Next.js & Shader Production',
    duration: 'Week 3–5',
    desc: 'Transforming static concepts into a living digital product using Next.js 14 App Router, Three.js shaders, Tailwind CSS, and Framer Motion.',
    output: '60 FPS Interactive Staging Environment',
  },
  {
    number: '04',
    title: 'Calibration & Global Launch',
    duration: 'Week 6',
    desc: 'Rigorous 100/100 Core Web Vitals audit, static export optimization, international CDN routing, and submission to global design awards.',
    output: 'Production Release & Awwwards Submission',
  },
];

export default function Process() {
  return (
    <section id="methodology" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Production Cycle
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            THE MONOLITH BLUEPRINT.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            Methodical rigor. A 6-week sprint cycle bringing complex digital concepts from raw vision to viral launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLUEPRINT_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0e0e13] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-3xl font-black text-zinc-600">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                <span className="text-white font-medium block mb-1">Key Deliverable:</span>
                <span>{step.output}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
