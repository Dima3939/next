'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'WORK', href: '#work' },
  { name: 'CAPABILITIES', href: '#capabilities' },
  { name: 'METHODOLOGY', href: '#methodology' },
  { name: 'PHILOSOPHY', href: '#philosophy' },
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
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center pointer-events-none px-4 sm:px-6">
      <div
        className={`w-full max-w-5xl rounded-full px-5 sm:px-7 py-3 transition-all duration-300 flex items-center justify-between pointer-events-auto ${
          scrolled
            ? 'bg-[#0e0e13]/85 backdrop-blur-2xl border border-white/[0.09] shadow-[0_20px_45px_rgba(0,0,0,0.7)]'
            : 'bg-[#0e0e13]/40 backdrop-blur-lg border border-white/[0.05]'
        }`}
      >
        {/* Monolith Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-5 h-6 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-[1.5px] h-full bg-black/40 mr-auto ml-1" />
          </div>
          <span className="font-display font-black text-sm sm:text-base tracking-[0.25em] text-white uppercase">
            MONOLITH<span className="text-zinc-500 text-[10px] font-mono font-normal ml-1">®</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-mono font-medium tracking-wider text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/[0.06]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4ff32] animate-pulse" />
            <span>Available Q4</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-[#d4ff32] hover:bg-[#c3ec29] transition-all duration-300 group shadow-[0_0_20px_rgba(212,255,50,0.25)]"
          >
            <span>Initiate Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-300 hover:text-white rounded-full border border-white/10 bg-white/5"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 inset-x-4 bg-[#0e0e13]/98 border border-white/[0.1] rounded-3xl backdrop-blur-2xl p-6 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono tracking-wider text-zinc-300 hover:text-white py-1.5 border-b border-white/5"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-full text-xs font-bold tracking-wider uppercase text-black bg-[#d4ff32]"
                >
                  Initiate Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
