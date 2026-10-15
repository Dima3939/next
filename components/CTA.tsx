import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--v2-color-bg)' }}>
      <div 
        className="relative mx-auto w-full max-w-[var(--v2-max-width)]" 
        style={{ padding: '0 var(--v2-grid-padding)' }}
      >
        <div 
          className="relative w-full overflow-hidden my-12 md:my-16 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24"
          style={{
            backgroundImage: "var(--v2-cta-bg-image, url('/next/images/gradient/CTA.webp'))",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0px',
            border: '1px solid var(--v2-color-border, #e2e2e2)',
          }}
        >
          <h2 
            className="font-v2-sans text-3xl md:text-5xl font-medium tracking-tight max-w-[680px] leading-tight"
            style={{ color: 'var(--v2-cta-text, #0c0c0c)' }}
          >
            Starting with MONOLITH is simple, fast, and free.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: 'var(--v2-cta-button-bg, #000000)',
                color: 'var(--v2-cta-button-text, #ffffff)',
                border: '1px solid var(--v2-cta-button-border, #000000)',
              }}
            >
              Get started for free
            </a>
            <a 
              href="#talk-to-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium hover:opacity-75 transition-opacity gap-1.5"
              style={{ color: 'var(--v2-cta-text, #0c0c0c)' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Request a demo
            </a>
          </div>
        </div>
      </div>
      <div className="w-full" style={{ height: 'var(--v2-border-width, 1px)', backgroundColor: 'var(--v2-color-border, #e5e7eb)' }}></div>
    </section>
  );
}
