'use client';

import React from 'react';
import { motion } from 'framer-motion';

const MATTERS_ITEMS = [
  {
    title: 'From 0 to 100%',
    desc: 'Creating videos from scratch. Getting the best result.',
    accent: '#0FC8CF',
  },
  {
    title: 'A Bang for Their Buck',
    desc: 'Ultimately, they want something that works just well and converts.',
    accent: '#CFABFF',
  },
  {
    title: 'Optimization',
    desc: 'Stable work with one dedicated team that delves deeper into your product.',
    accent: '#6B1EEF',
  },
  {
    title: 'Accessibility',
    desc: 'Direct access to consultations and expertise of various visual art specialists.',
    accent: '#0FC8CF',
  },
];

export default function Metrics() {
  return (
    <section id="why-us" className="relative py-28 md:py-36 px-6 border-y border-white/[0.08] bg-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
            Core Philosophy
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight uppercase">
            WHAT TRULY MATTERS TO OUR CLIENTS
          </h2>
        </div>

        {/* 4 Pillars + All-in-one block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {MATTERS_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#0d0d16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-3 h-3 rounded-full mb-6"
                  style={{ backgroundColor: item.accent }}
                />
                <h3 className="text-xl font-bold text-white mb-3 font-display">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Everything You Need Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#140b28] via-[#0d0a18] to-[#08151c] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 100 115" className="w-full h-full">
                <polygon
                  points="50 3, 97 28, 97 86, 50 112, 3 86, 3 28"
                  fill="none"
                  stroke="#0FC8CF"
                  strokeWidth="8"
                />
                <circle cx="50" cy="58" r="16" fill="#6B1EEF" />
              </svg>
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-white font-display">
                Everything you need
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 font-light mt-0.5">
                All video production services in one place. Zero agency bloat.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors shrink-0"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
