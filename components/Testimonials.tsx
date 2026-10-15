'use client';

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const STORIES = [
  {
    quote: 'MONOLITH is a rare digital studio that can both increase commercial conversion and deliver 60 FPS WebGL.',
    author: 'Adrien Carreira',
    title: 'Head of Infrastructure',
    company: 'Hugging Face Ecosystem',
  },
  {
    quote: 'What impressed us most was they delivered custom GLSL shaders with sub-millimeter component exploded views on time.',
    author: 'Rocky Olsen',
    title: 'Principal SRE Engineer',
    company: 'Lucid Software Partner',
  },
  {
    quote: 'MONOLITH removed a lot of the day-to-day overhead around Next.js App Router optimization and Core Web Vitals.',
    author: 'Ben Paradis',
    title: 'Principal Security & Web Engineer',
    company: 'Writer Brand Lab',
  },
  {
    quote: 'With MONOLITH, you get the aesthetic benefit along with uncompromising developer experience — it’s a no-brainer.',
    author: 'Shashank Goyal',
    title: 'Founding Engineer',
    company: 'OpenRouter Core',
  },
];

const COMMUNITY_TWEETS = [
  'I deleted all our bloated frontend CSS frameworks and moved everything to MONOLITH Next.js 14. Wish I did it sooner. 60 FPS locked.',
  'MONOLITH has been a great way for our engineering team to launch our 3D product configurator without melting mobile browsers.',
  'Finally got around to inspecting the MONOLITH shader pipeline and I have no idea how we lived without it. Highly recommend.',
  'The sub-second page transitions and Web Audio haptics on our new release are unreal. Best agency we ever partnered with.',
  'Our pre-order conversions jumped from 2.1% to 8.4% within 14 days of launching the new MONOLITH canvas.',
  'Clean TypeScript, zero vendor lock-in, and instant static edge export. Everything a CTO could dream of.',
];

export default function Testimonials() {
  return (
    <section id="customers" className="relative py-24 md:py-32 px-6 bg-[#0e1014] border-t border-[#26272b]">
      <div className="max-w-7xl mx-auto">
        {/* Enterprise Stories Header */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
            <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
              CUSTOMER OUTCOMES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-[#ebebeb] mb-4">
            MONOLITH customers are happy customers.
          </h2>

          <p className="text-base text-[#adaeb0] font-normal leading-relaxed">
            See how forward-thinking founders and engineering leads elevate their product launches.
          </p>
        </div>

        {/* 4 Customer Story Cards (Infisical Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {STORIES.map((s) => (
            <div
              key={s.author}
              className="p-6 rounded-xl bg-[#12141a] border border-[#26272b] hover:border-[#3a3c42] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-[#c2d72a] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#c2d72a]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#ebebeb] font-normal leading-relaxed mb-6">
                  "{s.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#26272b]/60">
                <div className="text-xs font-semibold text-[#ebebeb]">{s.author}</div>
                <div className="text-[11px] text-[#707174]">{s.title}</div>
                <div className="text-[11px] text-[#adaeb0] font-mono mt-0.5">{s.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Wall of Love Header (Infisical Section) */}
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-medium text-[#ebebeb] tracking-tight mb-2">
            The only creative engineering studio loved by developers.
          </h3>
          <p className="text-xs text-[#adaeb0]">Unfiltered feedback from engineers who ship with us</p>
        </div>

        {/* Wall of Tweets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COMMUNITY_TWEETS.map((tweet, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-[#14161d] border border-[#26272b] text-xs text-[#adaeb0] leading-relaxed flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-[#1e1f22] text-[#c2d72a] flex items-center justify-center font-mono text-[10px] shrink-0 font-bold">
                ✓
              </div>
              <p>{tweet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
