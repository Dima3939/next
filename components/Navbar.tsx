'use client';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVaultActive, setIsVaultActive] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const readTheme = () => {
      const current = document.documentElement.getAttribute('data-v2-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current);
    };
    readTheme();
    window.addEventListener('themechange', readTheme);
    return () => window.removeEventListener('themechange', readTheme);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const vaultEl = document.getElementById('v2-vault-section');
      if (!vaultEl) return;
      
      const rect = vaultEl.getBoundingClientRect();
      // When top of vault touches navbar (56px) and bottom hasn't scrolled past
      if (rect.top <= 56 && rect.bottom >= 56) {
        setIsVaultActive(true);
      } else {
        setIsVaultActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDarkNav = theme === 'dark' ? !isVaultActive : isVaultActive;

  return (
    <nav 
      data-dark-nav={isDarkNav ? 'true' : 'false'}
      className={`fixed inset-x-0 top-0 z-50 h-[56px] transition-colors duration-200 ease-out ${
        isDarkNav 
          ? 'bg-[#0e1014]/95 text-[#ebebeb] border-b border-[#26272b]' 
          : 'bg-white/95 text-black border-b border-[#e5e7eb]'
      } backdrop-blur-md`}
      aria-label="Main navigation"
    >
      <div className="relative mx-auto h-full max-w-[var(--v2-max-width)] px-4 sm:px-6 md:px-8">
        <div className="flex h-full items-center justify-between">
          
          {/* Logo */}
          <a 
            href="/next" 
            className="flex shrink-0 items-center gap-2.5 font-mono text-[15px] font-bold tracking-tight select-none"
            aria-label="MONOLITH home"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#f5f841] border border-black/20 shrink-0"></span>
            <span className={isDarkNav ? 'text-[#ebebeb]' : 'text-black'}>MONOLITH</span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden h-full items-stretch gap-6 lg:flex xl:gap-8 text-[13px] font-medium">
            
            {/* Platform */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button" 
                className={`group relative flex h-full items-center gap-1 transition-colors ${
                  isDarkNav ? 'text-[#a3a3a3] hover:text-[#ebebeb]' : 'text-[#4b5563] hover:text-black'
                }`}
              >
                Platform
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#f5f841]" />
              </button>

              {activeDropdown === 'platform' && (
                <div 
                  className={`absolute top-[55px] left-0 min-w-[260px] py-2 border shadow-lg ${
                    isDarkNav ? 'bg-[#14171d] border-[#26272b] text-[#ebebeb]' : 'bg-white border-[#e5e7eb] text-black'
                  }`}
                >
                  <a href="/next" className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Secrets Management
                  </a>
                  <a href="/next" className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    Certificate Management (PKI)
                  </a>
                  <a href="/next" className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                    Privileged Access (PAM)
                  </a>
                  <a href="/next" className={`flex items-center gap-3 px-4 py-2.5 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    <span className="w-2 h-2 rounded-full bg-[#f5f841]"></span>
                    Agent Vault
                  </a>
                </div>
              )}
            </div>

            {/* Pricing */}
            <a 
              href="#pricing"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-full items-center transition-colors ${
                isDarkNav ? 'text-[#a3a3a3] hover:text-[#ebebeb]' : 'text-[#4b5563] hover:text-black'
              }`}
            >
              Pricing
              <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#f5f841]" />
            </a>

            {/* Developers */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('devs')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button" 
                className={`group relative flex h-full items-center gap-1 transition-colors ${
                  isDarkNav ? 'text-[#a3a3a3] hover:text-[#ebebeb]' : 'text-[#4b5563] hover:text-black'
                }`}
              >
                Developers
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#f5f841]" />
              </button>

              {activeDropdown === 'devs' && (
                <div 
                  className={`absolute top-[55px] left-0 min-w-[220px] py-2 border shadow-lg ${
                    isDarkNav ? 'bg-[#14171d] border-[#26272b] text-[#ebebeb]' : 'bg-white border-[#e5e7eb] text-black'
                  }`}
                >
                  <a href="#docs" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    Documentation
                  </a>
                  <a href="#community" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    Community
                  </a>
                  <a href="https://github.com/Dima3939/next" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    GitHub Repository
                  </a>
                </div>
              )}
            </div>

            {/* Resources */}
            <div 
              className="relative h-full flex items-center"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                type="button" 
                className={`group relative flex h-full items-center gap-1 transition-colors ${
                  isDarkNav ? 'text-[#a3a3a3] hover:text-[#ebebeb]' : 'text-[#4b5563] hover:text-black'
                }`}
              >
                Resources
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
                  <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#f5f841]" />
              </button>

              {activeDropdown === 'resources' && (
                <div 
                  className={`absolute top-[55px] left-0 min-w-[220px] py-2 border shadow-lg ${
                    isDarkNav ? 'bg-[#14171d] border-[#26272b] text-[#ebebeb]' : 'bg-white border-[#e5e7eb] text-black'
                  }`}
                >
                  <a href="#blog" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    Blog & Articles
                  </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    Case Studies
                  </a>
                  <a href="#webinar" target="_blank" rel="noopener noreferrer" className={`block px-4 py-2 text-xs transition-colors ${isDarkNav ? 'hover:bg-white/10' : 'hover:bg-neutral-100'}`}>
                    Webinars & Tech Talks
                  </a>
                </div>
              )}
            </div>

            {/* Careers */}
            <a 
              href="#careers"
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex h-full items-center transition-colors ${
                isDarkNav ? 'text-[#a3a3a3] hover:text-[#ebebeb]' : 'text-[#4b5563] hover:text-black'
              }`}
            >
              Careers
              <span className="absolute bottom-0 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#f5f841]" />
            </a>
          </div>

          {/* Right Action Items */}
          <div className="flex items-center gap-3 text-xs font-medium">
            
            {/* GitHub Stars Pill */}
            <a 
              href="https://github.com/Dima3939/next"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 transition-colors border ${
                isDarkNav 
                  ? 'border-[#26272b] hover:bg-[#1a1f26] text-[#ebebeb]' 
                  : 'border-[#e5e7eb] hover:bg-gray-100 text-black'
              }`}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>29.7k</span>
            </a>

            {/* Talk to an expert */}
            <a 
              href="#talk-to-us"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 transition-colors border ${
                isDarkNav 
                  ? 'border-[#26272b] text-[#ebebeb] hover:bg-[#1a1f26]' 
                  : 'border-[#e5e7eb] text-black hover:bg-gray-100'
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Talk to an expert
            </a>

            {/* Get started for free (Primary CTA) */}
            <a 
              href="#signup"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center px-3.5 py-1.5 font-medium transition-colors ${
                isDarkNav 
                  ? 'bg-[#f5f841] text-black hover:bg-[#e2e62e]' 
                  : 'bg-black text-white hover:bg-neutral-800'
              }`}
            >
              Get started for free
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 lg:hidden ${isDarkNav ? 'text-[#ebebeb]' : 'text-black'}`}
              aria-label="Toggle navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-b px-4 py-4 space-y-3 ${
          isDarkNav ? 'bg-[#0e1014] border-[#26272b] text-[#ebebeb]' : 'bg-white border-[#e5e7eb] text-black'
        }`}>
          <a href="/next" className="block py-1 text-sm font-medium">Platform</a>
          <a href="#pricing" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm font-medium">Pricing</a>
          <a href="#docs" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm font-medium">Developers</a>
          <a href="#blog" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm font-medium">Resources</a>
          <a href="#careers" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm font-medium">Careers</a>
          <a href="#talk-to-us" target="_blank" rel="noopener noreferrer" className="block py-1 text-sm font-medium text-emerald-500">Talk to an expert &rarr;</a>
        </div>
      )}
    </nav>
  );
}
