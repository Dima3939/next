'use client';

import React from 'react';
import { motion } from 'framer-motion';

const APPROACH_STEPS = [
  {
    title: 'Brief',
    number: '01',
    description:
      'Clarification of details, corrections for a better result, an important step for quality work, and correct assessment of the scope of tasks. Guarantees a quality result.',
  },
  {
    title: 'Pre-Production',
    number: '02',
    description:
      'Stage of planning and final approval of all steps, the ability to change or add something to the active phase of work — we plan work, set deadlines, and coordinate on time.',
  },
  {
    title: 'Storyboard',
    number: '03',
    description:
      'Key frames demonstrate the main visuals. Helps to create a competent composition and to clarify all the nuances of the video before the start of its production.',
  },
  {
    title: 'Production',
    number: '04',
    description:
      'Creation of the video itself according to the brief and the approved Storyboard. Demonstration of intermediate results to the client to get direct feedback.',
  },
  {
    title: 'Finalizing',
    number: '05',
    description:
      'Making final edits and making the video shine. The stage after which you will be completely satisfied. And your feel-good chemicals levels will be higher than ever.',
  },
];

export default function Process() {
  return (
    <section id="approach" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#CFABFF] block mb-3">
            Workflow & Rigor
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            OUR APPROACH
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light">
            Services at <strong className="text-white">ALL</strong> stages — from the initial brief to the final master.
          </p>
        </div>

        {/* 5-Phase Production Hexagonal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {APPROACH_STEPS.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group p-7 rounded-3xl bg-[#0d0d16] border border-white/[0.08] hover:border-[#6B1EEF]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 100 115" className="w-full h-full">
                      <polygon
                        points="50 3, 97 28, 97 86, 50 112, 3 86, 3 28"
                        fill="#1a1a28"
                        stroke="url(#stepHexGradient)"
                        strokeWidth="5"
                      />
                      <defs>
                        <linearGradient id="stepHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#6B1EEF" />
                          <stop offset="100%" stopColor="#0FC8CF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 font-bold">{step.number}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                <p className="text-xs text-zinc-400 font-light leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[11px] font-mono text-[#0FC8CF]">
                Phase Verified ✓
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
