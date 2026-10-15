'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Github } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 flex flex-col">
      {/* Infisical Top Announcement Bar */}
      <a
        href="#platform"
        className="group relative bg-[#0e1014] border-b border-[#26272b] text-[13px] text-[#ebebeb] py-2 px-4 text-center transition-colors hover:bg-[#15171d] flex items-center justify-center gap-2"
      >
        <span className="text-[#adaeb0]">
          Experience Next.js 14 &amp; 3D WebGL without bundle bloat:
        </span>
        <span className="font-medium text-[#ebebeb] underline underline-offset-4 decoration-[#c2d72a]">
          live interactive showcase of MONOLITH 2.0
        </span>
        <ArrowRight className="w-3.5 h-3.5 text-[#c2d72a] transition-transform group-hover:translate-x-1" />
      </a>

      {/* Main Infisical Navbar */}
      <header className="w-full bg-[#0b0d10]/90 backdrop-blur-md border-b border-[#26272b]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded bg-[#c2d72a] flex items-center justify-center text-black font-extrabold text-xs">
              M
            </div>
            <span className="font-semibold text-[15px] tracking-tight text-[#ebebeb]">
              MONOLITH
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#platform" className="v2-nav-link text-[13px]">Platform</a>
            <a href="#work" className="v2-nav-link text-[13px]">Case Studies</a>
            <a href="#capabilities" className="v2-nav-link text-[13px]">Capabilities</a>
            <a href="#stack" className="v2-nav-link text-[13px]">Stack</a>
            <a href="#customers" className="v2-nav-link text-[13px]">Customers</a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Dima3939/next"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-[#ebebeb] bg-[#1e1f22] border border-[#26272b] hover:bg-[#2b2c30] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>2.4k ★</span>
            </a>

            <a
              href="#contact"
              className="v2-btn v2-btn--secondary text-[13px] py-1.5 px-3.5"
            >
              Talk to an expert
            </a>

            <a
              href="#contact"
              className="v2-btn v2-btn--primary text-[13px] py-1.5 px-4 font-semibold"
            >
              Get started for free
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#adaeb0] hover:text-white rounded-md border border-[#26272b] bg-[#1e1f22]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0b0d10] border-b border-[#26272b] px-6 py-6"
            >
              <div className="flex flex-col gap-4">
                <a href="#platform" onClick={() => setMobileMenuOpen(false)} className="text-sm text-[#ebebeb]">Platform</a>
                <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-sm text-[#ebebeb]">Case Studies</a>
                <a href="#capabilities" onClick={() => setMobileMenuOpen(false)} className="text-sm text-[#ebebeb]">Capabilities</a>
                <a href="#stack" onClick={() => setMobileMenuOpen(false)} className="text-sm text-[#ebebeb]">Stack</a>
                <a href="#customers" onClick={() => setMobileMenuOpen(false)} className="text-sm text-[#ebebeb]">Customers</a>

                <div className="pt-4 border-t border-[#26272b] flex flex-col gap-2.5">
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="v2-btn v2-btn--primary w-full text-center"
                  >
                    Get started for free
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
