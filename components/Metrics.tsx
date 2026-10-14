'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';

const METRICS = [
  {
    icon: TrendingUp,
    value: '$180M+',
    label: 'Client Capital Raised',
    detail: 'Cumulative funding secured by products built on Endorphin interfaces.',
    color: 'text-purple-400',
  },
  {
    icon: Zap,
    value: '99.8%',
    label: 'Average Lighthouse Score',
    detail: 'Zero compromise on speed, accessibility, and search engine crawlability.',
    color: 'text-cyan-400',
  },
  {
    icon: Award,
    value: '14×',
    label: 'Design Accolades',
    detail: 'Recognized by Awwwards SOTD, FWA of the Day, and Red Dot Design.',
    color: 'text-pink-400',
  },
  {
    icon: ShieldCheck,
    value: '60 FPS',
    label: 'Fluid Animation Budget',
    detail: 'Hardware-accelerated transforms for ultra-responsive interaction feedback.',
    color: 'text-emerald-400',
  },
];

export default function Metrics() {
  return (
    <section id="metrics" className="relative py-24 md:py-32 px-6 border-y border-white/5 bg-[#09090f]/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    VERIFIED DATA
                  </span>
                </div>

                <div className={`text-4xl sm:text-5xl font-black font-display tracking-tight mb-2 ${item.color}`}>
                  {item.value}
                </div>

                <div className="text-sm font-semibold text-white mb-2">{item.label}</div>

                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {item.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
