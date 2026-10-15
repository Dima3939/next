'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Github, Sparkles } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Platform', href: '#platform' },
  { name: 'Selected Work', href: '#work' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Tech Stack', href: '#stack' },
  { name: 'Customers', href: '#testimonials' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Top Infisical-style Announcement Banner */}
      <a
        href="#platform"
        className="group relative bg-[#0b0d10] border-b border-white/[0.06] text-xs text-zinc-300 py-2 px-4 text-center transition-colors hover:bg-[#101317] flex items-center justify-center gap-2"
      >
        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono text-[10px] uppercase font-semibold">
          <Sparkles className="w-3 h-3" /> MONOLITH 2.0
        </span>
        <span className="font-medium text-zinc-300">
          Hardware-accelerated 3D WebGL & Next.js 14 motion laboratory is live
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-emerald-400 transition-transform group-hover:translate-x-1" />
      </a>

      {/* Main Navbar */}
      <header
        className={`w-full transition-all duration-200 border-b ${
          scrolled
            ? 'bg-[#08090a]/90 backdrop-blur-xl border-white/[0.08] shadow-lg'
            : 'bg-[#08090a]/70 backdrop-blur-md border-white/[0.04]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-black font-bold text-xs shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              M
            </div>
            <span className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
              MONOLITH <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 font-mono font-normal">STUDIO</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-zinc-400 hover:text-white px-3.5 py-2 rounded-lg transition-colors hover:bg-white/[0.04]"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Dima3939/next"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>★ 2.4k</span>
            </a>

            <a
              href="#contact"
              className="text-xs font-medium text-zinc-300 hover:text-white px-3.5 py-2 transition-colors"
            >
              Talk to an expert
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-black bg-emerald-500 hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <span>Initiate Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 bg-white/5"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#08090a] border-b border-white/10 px-6 py-6"
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-medium text-zinc-300 hover:text-white py-1.5"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-lg text-xs font-semibold text-black bg-emerald-500"
                  >
                    Initiate Project
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
