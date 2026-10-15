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
    <footer className="relative border-t border-[#26272b] bg-[#07080a] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Infisical 5-column footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 pb-16 border-b border-[#26272b]">
          {/* Logo & Brand Info */}
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded bg-[#c2d72a] flex items-center justify-center text-black font-extrabold text-xs">
                  M
                </div>
                <span className="font-semibold text-sm tracking-tight text-[#ebebeb]">
                  MONOLITH
                </span>
              </div>
              <p className="text-xs text-[#adaeb0] font-normal max-w-sm leading-relaxed mb-6">
                All-in-one digital experience infrastructure. We engineer high-velocity Next.js 14 web
                applications, real-time 3D WebGL canvases, and kinetic brand systems.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-[#adaeb0]">
              <span className="w-2 h-2 rounded-full bg-[#4ac26b] animate-pulse" />
              <span>All systems operational • {time || '12:00:00'} Zurich</span>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-[#ebebeb] uppercase tracking-wider block mb-4">
              Platform
            </span>
            <ul className="space-y-2.5 text-xs text-[#adaeb0]">
              <li><a href="#platform" className="hover:text-[#ebebeb] transition-colors">3D &amp; WebGL Canvas</a></li>
              <li><a href="#platform" className="hover:text-[#ebebeb] transition-colors">Next.js 14 Architecture</a></li>
              <li><a href="#platform" className="hover:text-[#ebebeb] transition-colors">GLSL Shaders</a></li>
              <li><a href="#platform" className="hover:text-[#ebebeb] transition-colors">Spatial Audio API</a></li>
            </ul>
          </div>

          {/* Col 2: Case Studies */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-[#ebebeb] uppercase tracking-wider block mb-4">
              Case Studies
            </span>
            <ul className="space-y-2.5 text-xs text-[#adaeb0]">
              <li><a href="#work" className="hover:text-[#ebebeb] transition-colors">Polestar Kinetic</a></li>
              <li><a href="#work" className="hover:text-[#ebebeb] transition-colors">Maison Kinesis</a></li>
              <li><a href="#work" className="hover:text-[#ebebeb] transition-colors">Neura OS AI Canvas</a></li>
              <li><a href="#work" className="hover:text-[#ebebeb] transition-colors">Nothing Sound Mechanics</a></li>
            </ul>
          </div>

          {/* Col 3: Ecosystem */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-[#ebebeb] uppercase tracking-wider block mb-4">
              Ecosystem
            </span>
            <ul className="space-y-2.5 text-xs text-[#adaeb0]">
              <li><a href="#stack" className="hover:text-[#ebebeb] transition-colors">Next.js 14 App Router</a></li>
              <li><a href="#stack" className="hover:text-[#ebebeb] transition-colors">Three.js / WebGL 2.0</a></li>
              <li><a href="#stack" className="hover:text-[#ebebeb] transition-colors">TypeScript 5.5</a></li>
              <li><a href="#stack" className="hover:text-[#ebebeb] transition-colors">Tailwind CSS</a></li>
            </ul>
          </div>

          {/* Col 4: Network */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-xs font-semibold text-[#ebebeb] uppercase tracking-wider block mb-4">
              Network
            </span>
            <ul className="space-y-2.5 text-xs text-[#adaeb0]">
              <li>
                <a href="https://github.com/Dima3939/next" target="_blank" rel="noreferrer" className="hover:text-[#ebebeb] transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#c2d72a]" /> GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://awwwards.com" target="_blank" rel="noreferrer" className="hover:text-[#ebebeb] transition-colors">
                  Awwwards SOTD
                </a>
              </li>
              <li>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[#ebebeb] transition-colors">
                  X / Twitter
                </a>
              </li>
              <li>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer" className="hover:text-[#ebebeb] transition-colors">
                  Vimeo Showreel
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#707174]">
          <div>© {new Date().getFullYear()} MONOLITH STUDIO. All rights reserved.</div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#adaeb0] hover:text-[#ebebeb] transition-colors p-2 rounded bg-[#1e1f22] border border-[#26272b]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
