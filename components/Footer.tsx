'use client';
import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let saved = null;
    try {
      saved = localStorage.getItem('v2-theme');
    } catch (e) {}
    const isDark = saved === 'dark' || (typeof document !== 'undefined' && document.documentElement.getAttribute('data-v2-theme') === 'dark');
    setTheme(isDark ? 'dark' : 'light');

    const handleThemeChange = () => {
      const current = document.documentElement.getAttribute('data-v2-theme') === 'dark' ? 'dark' : 'light';
      setTheme(current);
    };

    window.addEventListener('themechange', handleThemeChange);
    return () => window.removeEventListener('themechange', handleThemeChange);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    try {
      localStorage.setItem('v2-theme', nextTheme);
    } catch (e) {}
    try {
      document.documentElement.setAttribute('data-v2-theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
      }
      window.dispatchEvent(new Event('themechange'));
    } catch (e) {
      console.error(e);
    }
  };

  const isDark = mounted && theme === 'dark';

  return (
    <footer id="footer" className="relative w-full" style={{ backgroundColor: 'var(--v2-color-bg)' }}>
      {/* Borders */}
      <div 
        className="pointer-events-none absolute left-0 right-0 z-20" 
        style={{ height: 'var(--v2-border-width, 1px)', top: 0, backgroundColor: 'var(--v2-color-border)' }}
      />
      <div 
        className="pointer-events-none absolute left-0 right-0 z-20" 
        style={{ height: 'var(--v2-border-width, 1px)', bottom: 0, backgroundColor: 'var(--v2-color-border)' }}
      />

      <div className="relative w-full">
        <div className="relative mx-auto" style={{ maxWidth: 'var(--v2-max-width)' }}>
          <div 
            className="v2-footer-cols relative grid gap-12 md:items-start md:gap-x-[var(--v2-gutter)] md:gap-y-0" 
            style={{ padding: 'calc(var(--v2-gutter) * 2) var(--v2-grid-padding)' }}
          >
            {/* Logo */}
            <div className="v2-footer-logo shrink-0">
              <a 
                aria-label="MONOLITH home" 
                className="inline-flex items-center gap-2.5 font-mono text-[16px] font-bold tracking-tight select-none" 
                href="/next"
              >
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f5f841', border: '1px solid rgba(0,0,0,0.2)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--v2-font-mono, monospace)', fontWeight: 700, letterSpacing: '-0.01em', color: 'var(--v2-color-text)' }}>
                  MONOLITH
                </span>
              </a>
            </div>

            {/* Product */}
            <div className="v2-footer-link-col v2-footer-link-col-1 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>PRODUCT</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#secrets">Secrets Management</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#radar">Secrets Scanning</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#certificates">Certificate Management</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#pam">Privileged Access Management</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Key Management</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#app">Share Secret</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#pricing">Pricing</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Security</a></li>
              </ul>
            </div>

            {/* Use Cases */}
            <div className="v2-footer-link-col v2-footer-link-col-2 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>USE CASES</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">MONOLITH Agent</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Kubernetes</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Dynamic Secrets</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Terraform</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Ansible</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Jenkins</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Docker</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">AWS ECS</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">GitLab</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">GitHub</a></li>
              </ul>
            </div>

            {/* Developers */}
            <div className="v2-footer-link-col v2-footer-link-col-3 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>DEVELOPERS</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Documentation</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="https://github.com/Dima3939/next/releases">Changelog</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">API Reference</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#status">Status</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="https://github.com/Dima3939/next/issues">Feedback &amp; Requests</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#community">Community</a></li>
                <li><a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#docs">Contributing</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div className="v2-footer-link-col v2-footer-link-col-4 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>RESOURCES</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#blog">Blog</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#customers">Case Studies</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#vs-vault">MONOLITH vs Vault</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#careers">Careers</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#videos">Videos</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="v2-footer-link-col v2-footer-link-col-5 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>LEGAL</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#terms">Terms of Service</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#privacy">Privacy Policy</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#subprocessors">Subprocessors</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#sla">Service Level Agreement</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#cla">Contributor License Agreement</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#vulnerability-disclosure">Vulnerability Disclosure</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="v2-footer-link-col v2-footer-link-col-6 flex flex-col" style={{ gap: '18px' }}>
              <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>CONTACT</span>
              <ul className="flex flex-col" style={{ gap: '12px' }}>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="mailto:team@monolith.security">Team Email</a></li>
                <li><a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="mailto:sales@monolith.security">Sales</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Middle separator */}
      <div className="w-full" style={{ height: 'var(--v2-border-width, 1px)', backgroundColor: 'var(--v2-color-border)' }} />

      {/* Footer bottom */}
      <div className="relative w-full">
        <div 
          className="pointer-events-none absolute bottom-0 right-0 top-0 overflow-hidden" 
          style={{ width: 'calc(max((100% - var(--v2-max-width)) / 2, 0px) + var(--v2-content-padding))' }}
        >
          <div 
            className="absolute" 
            style={{ inset: '-100%', backgroundImage: 'var(--v2-spacer-bg-image)', backgroundSize: 'cover', backgroundPosition: 'center' }} 
          />
        </div>

        <div className="relative mx-auto" style={{ maxWidth: 'var(--v2-max-width)' }}>
          <div 
            className="v2-footer-bottom relative flex flex-wrap items-center justify-between gap-y-2" 
            style={{ padding: '0 var(--v2-grid-padding)', minHeight: '40px' }}
          >
            <span className="font-v2-mono text-v2-b4 font-medium uppercase tracking-wider" style={{ color: 'var(--v2-nav-text)' }}>
              © 2026 MONOLITH
            </span>
            <a 
              className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--v2-color-focus)] print:hidden" 
              style={{ color: 'var(--v2-nav-text)' }}
              href="#ai"
            >
              Machine version
            </a>
            
            <div className="v2-footer-bottom-links flex flex-wrap items-center" style={{ gap: 'calc(var(--v2-gutter) * 2.5)' }}>
              <a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#terms">
                Legal
              </a>
              <a target="_blank" rel="noopener noreferrer" className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#trust">
                Trust Center
              </a>
              <a className="v2-footer-link inline-flex items-center font-v2-sans text-v2-b3 transition-colors hover:text-v2-text" style={{ color: 'var(--v2-nav-text)' }} href="#privacy">
                Privacy Policy
              </a>
              
              {/* Theme Toggle Button */}
              <button 
                type="button" 
                onClick={toggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"} 
                aria-pressed={isDark ? "true" : "false"} 
                className="flex items-center justify-center transition-opacity hover:opacity-80" 
                style={{ width: '28px', height: '28px', background: 'transparent', border: 0, color: 'var(--v2-nav-text)', cursor: 'pointer' }}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <svg width="16" height="16" strokeWidth="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" aria-hidden="true">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></circle>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></line>
                  </svg>
                ) : (
                  <svg width="16" height="16" strokeWidth="2.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor" aria-hidden="true">
                    <path d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
