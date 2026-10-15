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
    <footer className="relative border-t border-white/[0.08] bg-[#050608] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-16 border-b border-white/[0.06]">
          {/* Brand Manifesto */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-6 h-6 rounded-md bg-emerald-500 flex items-center justify-center text-black font-bold text-xs">
                  M
                </div>
                <span className="font-bold tracking-tight text-white text-base">
                  MONOLITH
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-normal max-w-sm leading-relaxed mb-6">
                All-in-one creative engineering laboratory. We construct high-performance Next.js 14 web
                applications, real-time 3D WebGL canvases, and kinetic brand systems.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational • {time || '12:00:00'} Zurich</span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Platform
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#capabilities" className="hover:text-white transition-colors">3D &amp; WebGL Canvas</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Next.js 14 Architecture</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">GLSL Shader Engine</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Spatial Audio API</a></li>
            </ul>
          </div>

          {/* Column 2: Selected Work */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Case Studies
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#work" className="hover:text-white transition-colors">Polestar Kinetic</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Maison Kinesis Geneva</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Neura OS AI Canvas</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Nothing Sound Mechanics</a></li>
            </ul>
          </div>

          {/* Column 3: Ecosystem */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Ecosystem
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#stack" className="hover:text-white transition-colors">Next.js 14 App Router</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Three.js / WebGL 2.0</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">TypeScript 5.5</a></li>
              <li><a href="#stack" className="hover:text-white transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>

          {/* Column 4: Network */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block mb-4">
              Network
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="https://github.com/Dima3939/next" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-emerald-400" /> GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://awwwards.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Awwwards SOTD
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Vimeo Showreel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© {new Date().getFullYear()} MONOLITH STUDIO. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg bg-surface-100 border border-white/5"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
