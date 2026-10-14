'use client';

import React from 'react';
import { motion } from 'framer-motion';

const REVIEWS = [
  {
    name: 'Alexandre Renard',
    company: 'Fintech Founder',
    rating: 5,
    text: 'The best experience I’ve ever had! Endorphin took our early Figma prototype and delivered a 60-second animated explainer that completely blew away our seed investors.',
  },
  {
    name: 'Sarah Jenkins',
    company: 'VP of Marketing, SaaS Platform',
    rating: 5,
    text: 'Stable work with one team that truly delves deeper into our product. The delivery was ahead of schedule and the video converted 3x higher than our previous agency assets.',
  },
  {
    name: 'Marcus Thorne',
    company: 'Product Lead, B2B Tooling',
    rating: 5,
    text: 'From the initial brief to the final sound design, communication was seamless. They understood the technical nuances of our software on day one.',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#CFABFF] block mb-3">
            Client Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight uppercase">
            WE ARE FOCUSED ON YOUR BUSINESS SUCCESS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-light">
            and your endorphin levels ;)
          </p>
        </div>

        {/* Reviews Cards with signature Endorphin star gradient */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, i) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="p-8 rounded-3xl bg-[#0d0d16] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-sm font-bold text-white font-display">{rev.name}</div>
                  {/* Signature Endorphin Gradient Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="16" height="16" viewBox="0 0 20 20" fill="none">
                        <defs>
                          <linearGradient id={`starGrad-${i}-${s}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#CFABFF" />
                            <stop offset="100%" stopColor="#0FC8CF" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                          fill={`url(#starGrad-${i}-${s})`}
                        />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-xs font-mono text-zinc-500">
                {rev.company}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
