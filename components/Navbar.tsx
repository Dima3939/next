'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'THE WORK', href: '#work' },
  { name: 'SERVICES', href: '#services' },
  { name: 'OUR APPROACH', href: '#approach' },
  { name: 'WHY US', href: '#why-us' },
  { name: 'REVIEWS', href: '#reviews' },
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-[#09090e]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Real Endorphin Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-7 h-7 flex items-center justify-center">
            <svg viewBox="0 0 100 115" className="w-full h-full transition-transform duration-500 group-hover:rotate-45">
              <polygon
                points="50 3, 97 28, 97 86, 50 112, 3 86, 3 28"
                fill="none"
                stroke="url(#navHex)"
                strokeWidth="7"
              />
              <circle cx="50" cy="58" r="14" fill="#0FC8CF" />
              <defs>
                <linearGradient id="navHex" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6B1EEF" />
                  <stop offset="100%" stopColor="#0FC8CF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className="font-display font-black text-lg tracking-[0.16em] text-white uppercase">
            ENDORPHIN
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-4 py-1.5 rounded-full backdrop-blur-lg">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xs font-semibold tracking-wider text-zinc-400 hover:text-white px-3.5 py-1.5 rounded-full transition-colors hover:bg-white/[0.06]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#6B1EEF] to-[#0FC8CF] hover:opacity-90 transition-all shadow-[0_0_20px_rgba(107,30,239,0.35)] group"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg border border-white/10 bg-white/5"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090e]/98 border-b border-white/[0.08] backdrop-blur-2xl px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold tracking-wider text-zinc-300 hover:text-white py-1"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-3 rounded-full text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#6B1EEF] to-[#0FC8CF]"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
