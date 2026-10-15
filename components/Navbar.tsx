'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { idx: '01', name: 'WORK', href: '#work' },
  { idx: '02', name: 'DISCIPLINES', href: '#capabilities' },
  { idx: '03', name: 'BLUEPRINT', href: '#methodology' },
  { idx: '04', name: 'MANIFESTO', href: '#philosophy' },
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
            ? 'bg-[#0c0c10]/90 backdrop-blur-2xl border border-white/[0.09] shadow-[0_20px_45px_rgba(0,0,0,0.7)]'
            : 'bg-[#0c0c10]/50 backdrop-blur-md border border-white/[0.05]'
        }`}
      >
        {/* Swiss Monolith Brandmark */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-5 h-6 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="w-[1.5px] h-full bg-black/40 mr-auto ml-1" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm sm:text-base tracking-[0.24em] text-white uppercase leading-none">
              MONOLITH<span className="text-[#0038ff] ml-0.5">®</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase mt-0.5 hidden sm:block">
              SWISS DIGITAL LAB
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-mono font-medium tracking-wider text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/[0.06] group/item flex items-center gap-1.5"
            >
              <span className="text-zinc-600 text-[10px] group-hover/item:text-[#0038ff] transition-colors">{item.idx}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0038ff] animate-pulse" />
            <span>Q4 Available</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#0038ff] hover:bg-[#002edb] transition-all duration-300 group shadow-[0_0_25px_rgba(0,56,255,0.35)]"
          >
            <span>Initiate</span>
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
            className="fixed top-20 inset-x-4 bg-[#0c0c10]/98 border border-white/[0.1] rounded-3xl backdrop-blur-2xl p-6 shadow-2xl pointer-events-auto md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-mono tracking-wider text-zinc-300 hover:text-white py-1.5 border-b border-white/5 flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-xs text-[#0038ff]">{item.idx}</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-[#0038ff]"
                >
                  Initiate Inquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
