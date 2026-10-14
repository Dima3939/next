'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass, Figma, Terminal, Rocket } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    icon: Compass,
    title: 'Immersion & Spatial Blueprint',
    duration: 'Week 1',
    description:
      'We deconstruct your brand narrative, audit your competitive landscape, and establish the kinetic design pillars through live interactive moodboards.',
    highlight: 'Zero guesswork. Clear aesthetic trajectory locked on Day 4.',
  },
  {
    step: '02',
    icon: Figma,
    title: 'High-Fidelity Art Direction',
    duration: 'Week 2–3',
    description:
      'We craft every screen with sub-millimeter precision in Figma, animating micro-states, dynamic typography curves, and custom 3D asset compositions.',
    highlight: 'Full desktop and mobile responsive design system handoff.',
  },
  {
    step: '03',
    icon: Terminal,
    title: 'Next.js & Shader Production',
    duration: 'Week 3–5',
    description:
      'Transforming static pixels into a living breathing digital product using Next.js App Router, Tailwind CSS, Framer Motion, and WebGL render loops.',
    highlight: 'Guaranteed 60 FPS across Safari, Chrome, and iOS devices.',
  },
  {
    step: '04',
    icon: Rocket,
    title: 'Vitals Calibration & Launch',
    duration: 'Week 6',
    description:
      'Extreme performance audits, static export optimization, social share open graph generation, and deployment directly to edge global servers.',
    highlight: '100% Lighthouse score and award submission readiness.',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Endorphin Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
            METHODICAL RIGOR. ZERO COMPROMISES.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            Our agile 4-phase sprint cycle brings complex digital concepts from raw vision to viral launch in 6 weeks.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative group p-6 rounded-2xl bg-[#0c0c14]/80 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                {/* Step indicator */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-zinc-600 group-hover:text-purple-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                      {item.duration}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300 flex items-center justify-center mb-4 group-hover:bg-purple-600/20 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                {/* Highlight banner at bottom */}
                <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-zinc-400">
                  <span className="text-brand-neon">Key Outcome:</span> {item.highlight}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
