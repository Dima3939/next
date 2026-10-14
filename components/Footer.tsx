'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp, Github, Sparkles } from 'lucide-react';

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
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
    <footer className="relative border-t border-white/10 bg-[#050508] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          {/* Logo & Manifesto */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-brand-purple to-brand-cyan flex items-center justify-center font-black text-xs text-white">
                  E
                </div>
                <span className="font-display font-black text-lg tracking-wider text-white">
                  ENDORPHIN
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
                Hyper-aesthetic digital production studio. Creating bespoke digital artifacts,
                3D interfaces, and high-conversion experiences for next-gen companies.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 text-xs font-mono text-zinc-500">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Studio HQ: Zurich, CH — {time || '12:00:00'} CET</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Directory
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a href="#works" className="hover:text-white transition-colors">
                    Selected Works
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Capabilities
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-white transition-colors">
                    Studio Blueprint
                  </a>
                </li>
                <li>
                  <a href="#metrics" className="hover:text-white transition-colors">
                    Verified Metrics
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Socials
              </div>
              <ul className="space-y-2.5 text-xs text-zinc-400">
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://awwwards.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Awwwards Profile
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Dima3939/next"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1.5 text-brand-neon"
                  >
                    <Github className="w-3.5 h-3.5" />
                    GitHub Repo
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Architecture
              </div>
              <ul className="space-y-2 text-xs text-zinc-500 font-mono">
                <li>Next.js 14 App Router</li>
                <li>Framer Motion</li>
                <li>Tailwind CSS</li>
                <li>Static Output Export</li>
                <li>GitHub Pages Ready</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Endorphin Studio. All rights reserved. Made for Dima3939.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg bg-white/5 border border-white/5"
          >
            <span>Back to Summit</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
