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
          {/* Studio Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 115" className="w-full h-full">
                    <polygon
                      points="50 3, 97 28, 97 86, 50 112, 3 86, 3 28"
                      fill="none"
                      stroke="url(#footHexGradient)"
                      strokeWidth="8"
                    />
                    <circle cx="50" cy="58" r="14" fill="#0FC8CF" />
                    <defs>
                      <linearGradient id="footHexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6B1EEF" />
                        <stop offset="100%" stopColor="#0FC8CF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-display font-bold tracking-[0.2em] text-white text-base uppercase">
                  ENDORPHIN
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
                Independent creative production studio. Directing, designing, and animating
                high-impact commercials and motion identities for forward-thinking brands.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio HQ: Zurich, Switzerland • {time || '12:00:00'} CET</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
                Navigation
              </span>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a href="#work" className="hover:text-white transition-colors">
                    The Work
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#approach" className="hover:text-white transition-colors">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="hover:text-white transition-colors">
                    Why Endorphin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
                Channels
              </span>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a
                    href="https://vimeo.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Vimeo
                  </a>
                </li>
                <li>
                  <a
                    href="https://behance.net"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Dima3939/next"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-cyan-400"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub Source
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
                Architecture
              </span>
              <ul className="space-y-2 text-xs text-zinc-500 font-mono">
                <li>Next.js 14 App Router</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
                <li>Static GitHub Export</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© {new Date().getFullYear()} Endorphin Studio. Crafted for Dima3939.</div>

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
