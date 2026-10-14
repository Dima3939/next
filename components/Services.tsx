'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Film, Laptop, Sparkles, ArrowRight, Check } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: '3D & CGI Commercial Production',
    icon: Box,
    tagline: 'Photorealistic product revelations and computational visual worlds',
    summary:
      'We construct custom 3D environments, sub-surface material shaders, and micro-physics simulations that illuminate the craftsmanship and engineering behind your physical or digital products.',
    deliverables: [
      'Photorealistic Product Visualization',
      'Complex Exploded-View Mechanics',
      'Dynamic Lighting & Texture Shaders',
      'Cinematic Camera Direction & Grading',
    ],
  },
  {
    id: '02',
    title: 'Software & SaaS Product Films',
    icon: Laptop,
    tagline: 'Translating complex workflows into effortless, high-conversion narratives',
    summary:
      'We turn dense software architecture into engaging, fluid product walkthroughs. Designed specifically for SaaS homepages, investor demos, and major feature announcements.',
    deliverables: [
      'High-FPS Interface Motion Design',
      'Product Benefit Explainer Films',
      'Interactive Lottie & Web Animations',
      'Keynote Video Presentations',
    ],
  },
  {
    id: '03',
    title: '2D Animation & Motion Graphics',
    icon: Film,
    tagline: 'Distinctive visual storytelling with personality and typographic craft',
    summary:
      'From custom kinetic typography systems to character-driven storytelling, we craft bold 2D motion that clarifies complex ideas and sparks genuine brand affection.',
    deliverables: [
      'Expressive 2D Character Animation',
      'Dynamic Kinetic Typography Systems',
      'Social First 9:16 Video Ad Suites',
      'Broadcast & Event Visual Packages',
    ],
  },
  {
    id: '04',
    title: 'Full Brand Launch Direction',
    icon: Sparkles,
    tagline: 'End-to-end creative direction from concept treatment to global master',
    summary:
      'For pivotal company moments: rebrands, Series A/B announcements, and flagship launches. We develop the core creative concept, script, styleframes, and multi-channel asset suites.',
    deliverables: [
      'Creative Strategy & Scriptwriting',
      'Bespoke Styleframe Exploration',
      'Original Music & Sound Architecture',
      'Multi-Format International Localization',
    ],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="relative py-28 md:py-36 px-6 bg-[#07070a]/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#CFABFF] block mb-3">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-display tracking-tight">
            WHAT WE CREATE.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm md:text-base font-light leading-relaxed">
            We partner with founders, marketing heads, and creative directors to produce video and
            motion work that stands out in oversaturated feeds.
          </p>
        </div>

        {/* Interactive Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Service Tabs */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {SERVICES.map((service, index) => {
              const isSelected = activeTab === index;
              const Icon = service.icon;

              return (
                <div
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`p-6 sm:p-7 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? 'bg-[#10101a] border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs text-zinc-500">{service.id}</span>
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isSelected ? 'bg-white text-black' : 'bg-white/5 text-zinc-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {service.title}
                        </h3>
                        <p className="text-xs text-zinc-400 font-light mt-0.5">{service.tagline}</p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-300 shrink-0 mt-1 ${
                        isSelected ? 'text-[#0FC8CF] translate-x-1' : 'text-zinc-600'
                      }`}
                    />
                  </div>

                  {/* Mobile details expansion */}
                  {isSelected && (
                    <div className="mt-5 pt-4 border-t border-white/10 lg:hidden">
                      <p className="text-xs text-zinc-300 leading-relaxed mb-4">{service.summary}</p>
                      <div className="grid grid-cols-1 gap-2">
                        {service.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-xs text-zinc-400">
                            <Check className="w-3.5 h-3.5 text-[#0FC8CF]" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Inspection Panel */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl bg-[#0f0f18] border border-white/15 p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-6">
                <span>SERVICE {SERVICES[activeTab].id}</span>
                <span className="text-[#0FC8CF]">STUDIO SPECIFICATION</span>
              </div>

              <h4 className="text-2xl font-bold text-white font-display mb-3">
                {SERVICES[activeTab].title}
              </h4>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8 font-light">
                {SERVICES[activeTab].summary}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2">
                  Key Production Deliverables:
                </span>
                {SERVICES[activeTab].deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-[#0FC8CF] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-zinc-200 transition-colors"
              >
                <span>Request Scope & Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
