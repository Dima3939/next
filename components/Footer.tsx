'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, Github } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Europe/Zurich',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050508] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Manifesto */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-5 h-6 bg-white flex items-center justify-center">
                  <div className="w-[1.5px] h-full bg-black/40 mr-auto ml-0.5" />
                </div>
                <span className="font-display font-black tracking-[0.25em] text-white text-base uppercase">
                  MONOLITH<span className="text-[#0038ff] ml-0.5">®</span>
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
                Independent Swiss creative engineering laboratory. We construct architectural digital
                artifacts, real-time shaders, and bespoke interactive systems.
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0038ff] animate-pulse" />
              <span>HQ: Zurich, CH • {time || '12:00:00'} CET</span>
            </div>
          </div>

          {/* Directory */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0038ff] block mb-4 font-semibold">
              [ DIRECTORY ]
            </span>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li><a href="#work" className="hover:text-white transition-colors">01 Selected Work</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">02 Capabilities</a></li>
              <li><a href="#methodology" className="hover:text-white transition-colors">03 Methodology</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">04 Philosophy</a></li>
            </ul>
          </div>

          {/* Recognition */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0038ff] block mb-4 font-semibold">
              [ RECOGNITION ]
            </span>
            <ul className="space-y-2 text-xs text-zinc-400 font-mono">
              <li>Awwwards Site of the Day × 14</li>
              <li>FWA of the Month × 4</li>
              <li>Red Dot Best of the Best 2024</li>
              <li>CSS Design Awards WOTD × 8</li>
            </ul>
          </div>

          {/* Channels */}
          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0038ff] block mb-4 font-semibold">
              [ NETWORK ]
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Vimeo
                </a>
              </li>
              <li>
                <a href="https://awwwards.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Awwwards
                </a>
              </li>
              <li>
                <a href="https://github.com/Dima3939/next" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" /> Source Code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© {new Date().getFullYear()} MONOLITH STUDIO. INDEPENDENT DIGITAL ENGINEERING &amp; INTERACTIVE DIRECTION. ALL RIGHTS RESERVED.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
