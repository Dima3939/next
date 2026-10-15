import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div 
        className="relative mx-auto w-full max-w-[var(--v2-max-width)]" 
        style={{ padding: '0 var(--v2-grid-padding)' }}
      >
        <div 
          className="relative w-full overflow-hidden my-12 md:my-16 flex flex-col items-center justify-center text-center px-6 py-16 md:py-24"
          style={{
            backgroundImage: "url('/next/images/gradient/CTA.webp')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '0px',
            border: '1px solid #e2e2e2',
          }}
        >
          <h2 className="font-v2-sans text-black text-3xl md:text-5xl font-medium tracking-tight max-w-[680px] leading-tight">
            Starting with MONOLITH is simple, fast, and free.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a 
              href="#signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors"
            >
              Get started for free
            </a>
            <a 
              href="#talk-to-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-black px-6 py-3 text-sm font-medium hover:opacity-75 transition-opacity gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Request a demo
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#e5e7eb] h-[1px]"></div>
    </section>
  );
}
