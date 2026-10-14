'use client';

import React from 'react';
import { ArrowUp, Github } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06060a] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand Info */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-6 flex items-center justify-center">
                  <svg viewBox="0 0 100 115" className="w-full h-full">
                    <polygon
                      points="50 3, 97 28, 97 86, 50 112, 3 86, 3 28"
                      fill="none"
                      stroke="url(#footHex)"
                      strokeWidth="7"
                    />
                    <circle cx="50" cy="58" r="14" fill="#0FC8CF" />
                    <defs>
                      <linearGradient id="footHex" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#6B1EEF" />
                        <stop offset="100%" stopColor="#0FC8CF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <span className="font-display font-black tracking-[0.2em] text-white text-base uppercase">
                  ENDORPHIN
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light max-w-sm leading-relaxed">
                Endorphin is your way to make the best production and get as much success as
                possible. We make bridges between brands and their audiences, and help expand them.
              </p>
            </div>

            <div className="mt-8 text-xs font-mono text-zinc-500">
              A professional team driven by love for their work.
            </div>
          </div>

          {/* Real Products Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              Products & Services
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#services" className="hover:text-white transition-colors">Software Production</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Illustration</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">2D Animation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Marketing Video</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Motion Graphics</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pro Video Editing</a></li>
            </ul>
          </div>

          {/* Real Industries Column */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              Industries
            </span>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li><a href="#work" className="hover:text-white transition-colors">B2B</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">B2C</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">SaaS</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Startup</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Mobile</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Social Media</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">SME</a></li>
            </ul>
          </div>

          {/* Find Us Here */}
          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-4">
              Find Us Here
            </span>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://upwork.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  UpWork
                </a>
              </li>
              <li>
                <a href="https://behance.net" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                  Behance
                </a>
              </li>
              <li>
                <a href="https://github.com/Dima3939/next" target="_blank" rel="noreferrer" className="hover:text-[#0FC8CF] transition-colors flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>© {new Date().getFullYear()} Endorphin. All rights reserved.</div>

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
