'use client';
import React, { useEffect, useRef } from 'react';

export default function Metrics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      t += 0.015;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const cols = Math.floor(w / 10);
      const rows = 32;
      const spacingX = w / cols;
      const spacingY = h / (rows + 4);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacingX + spacingX / 2;
          
          // Multi-frequency 3D perspective sine wave
          const nx = c / cols;
          const ny = r / rows;
          const wave1 = Math.sin(nx * 5.2 + t * 1.2) * 26;
          const wave2 = Math.cos(nx * 2.8 - t * 0.8 + ny * 2) * 16;
          const wave3 = Math.sin((nx + ny) * 3.5 + t * 0.5) * 8;
          const waveY = (h * 0.28) + (r * spacingY * 0.76) + wave1 + wave2 + wave3;

          const distFromCrest = Math.abs(waveY - (h * 0.32 + wave1 + wave2));
          
          let radius = 1.6;
          // Color based on crest and row depth
          if (r < 5 && distFromCrest < 32) {
            // Vivid Volt / Lime highlight dots near the wave crest
            ctx.fillStyle = `rgba(185, 225, 20, ${0.9 - r * 0.12})`;
            radius = 2.2;
          } else if (distFromCrest < 45) {
            // Subtle transition volt-slate
            ctx.fillStyle = `rgba(90, 110, 80, ${0.6 - (r / rows) * 0.3})`;
            radius = 1.8;
            // Crisp high-contrast dots for depth (adaptive to dark/light)
            const isDark = typeof document !== 'undefined' && document.documentElement.getAttribute('data-v2-theme') === 'dark';
            const alpha = Math.max(0.18, 0.52 - (r / rows) * 0.32);
            ctx.fillStyle = isDark ? `rgba(215, 222, 235, ${alpha * 0.75})` : `rgba(35, 40, 52, ${alpha})`;
            radius = 1.4;
          }

          ctx.beginPath();
          ctx.arc(x, waveY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden" style={{ backgroundColor: 'var(--v2-color-bg)' }}>
      {/* Top Border */}
      <div className="pointer-events-none absolute left-0 right-0 z-20 bg-v2-border" style={{ height: 'var(--v2-border-width)', top: 0 }}></div>

      <div className="relative mx-auto" style={{ maxWidth: 'var(--v2-max-width)' }}>
        <div style={{ padding: '0 var(--v2-grid-padding)', paddingTop: 'var(--v2-space-6)' }}>
          
          {/* Header Row */}
          <div className="v2-section-header-row flex items-center justify-between" style={{ paddingTop: 'var(--v2-space-9)', paddingBottom: 'var(--v2-space-7)' }}>
            <div style={{ maxWidth: '72%', marginLeft: 'calc((100% - 6 * var(--v2-gutter)) / 14)' }}>
              
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex text-[#6b7280]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                    <path d="M9 12h6m-3-3v6"></path>
                  </svg>
                </span>
                <span className="font-v2-mono uppercase" style={{ fontSize: 'var(--v2-text-b4)', color: 'var(--v2-color-text-tertiary)', letterSpacing: '0.02em' }}>
                  Enterprise Ready
                </span>
              </div>

              {/* Title */}
              <h2 className="font-v2-sans text-v2-h2 text-v2-text" style={{ fontWeight: 'var(--v2-weight-medium)', letterSpacing: '-0.02em' }}>
                Everyone has secrets.<br />
                We secure{' '}
                <span style={{ position: 'relative', display: 'inline-block', padding: '0.06em 0.18em', margin: '0 0.02em', color: 'var(--v2-color-void)', whiteSpace: 'nowrap' }}>
                  <span aria-hidden="true" style={{ position: 'absolute', inset: 0, background: 'var(--v2-color-volt)', zIndex: 0 }}></span>
                  <span style={{ position: 'relative', zIndex: 1 }}>10 billion</span>
                </span>{' '}
                every day.
              </h2>
            </div>

            {/* CTA Button */}
            <div className="v2-product-block-cta" style={{ flexShrink: 0, marginRight: 'calc((100% - 6 * var(--v2-gutter)) / 14)' }}>
              <a className="v2-btn v2-btn--md v2-btn--primary" href="#docs">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M4.5 2.5L8 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                Learn more
              </a>
            </div>
          </div>

          {/* Dot Matrix Wave Canvas */}
          <div style={{ position: 'relative', marginTop: 'var(--v2-space-7)', marginLeft: 'calc((100% - 6 * var(--v2-gutter)) / 14)', marginRight: 'calc((100% - 6 * var(--v2-gutter)) / 14)', height: 'clamp(240px, 34vh, 400px)', overflow: 'hidden' }}>
            <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
              <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}></canvas>
            </div>
          </div>

          {/* 4 Feature Cards */}
          <div style={{ marginTop: 'var(--v2-space-8)', marginLeft: 'calc((100% - 6 * var(--v2-gutter)) / 14)', marginRight: 'calc((100% - 6 * var(--v2-gutter)) / 14)' }}>
            <div className="v2-feature-row grid" style={{ gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', border: 'var(--v2-border-width) solid var(--v2-color-border-subtle)' }}>
              
              {/* Card 1 */}
              <div className="v2-label-card relative flex flex-col" style={{ padding: '40px', gap: '14px' }}>
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <span className="inline-flex" style={{ color: 'var(--v2-color-text-primary)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M8.5 4H6C4.89543 4 4 4.89543 4 6V20C4 21.1046 4.89543 22 6 22H12" strokeLinecap="round"></path>
                      <path d="M15.5 4H18C19.1046 4 20 4.89543 20 6V15" strokeLinecap="round"></path>
                      <path d="M8 6.4V4.5C8 4.22386 8.22386 4 8.5 4C8.77614 4 9.00422 3.77604 9.05152 3.50398C9.19968 2.65171 9.77399 1 12 1C14.226 1 14.8003 2.65171 14.9485 3.50398C14.9958 3.77604 15.2239 4 15.5 4C15.7761 4 16 4.22386 16 4.5V6.4C16 6.73137 15.7314 7 15.4 7H8.6C8.26863 7 8 6.73137 8 6.4Z" strokeLinecap="round"></path>
                      <path d="M15.5 20.5L17.5 22.5L22.5 17.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="font-v2-sans" style={{ fontSize: 'var(--v2-text-h3)', lineHeight: 'var(--v2-lh-heading)', fontWeight: 'var(--v2-weight-medium)', letterSpacing: '-0.01em', color: 'var(--v2-color-text-primary)' }}>
                    Compliant by design
                  </span>
                </div>
                <p className="font-v2-sans text-v2-b2" style={{ color: 'var(--v2-color-text-secondary)', margin: 0 }}>
                  SOC 2, HIPAA, and FIPS 140-3 compliant.
                </p>
              </div>

              {/* Card 2 */}
              <div className="v2-label-card relative flex flex-col" style={{ padding: '40px', gap: '14px', borderLeft: 'var(--v2-border-width) solid var(--v2-color-border-subtle)' }}>
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <span className="inline-flex" style={{ color: 'var(--v2-color-text-primary)' }}>
                    <svg width="20" height="20" strokeWidth="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M5 18L3.13036 4.91253C3.05646 4.39524 3.39389 3.91247 3.90398 3.79912L11.5661 2.09641C11.8519 2.03291 12.1481 2.03291 12.4339 2.09641L20.096 3.79912C20.6061 3.91247 20.9435 4.39524 20.8696 4.91252L19 18C18.9293 18.495 18.5 21.5 12 21.5C5.5 21.5 5.07071 18.495 5 18Z" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="font-v2-sans" style={{ fontSize: 'var(--v2-text-h3)', lineHeight: 'var(--v2-lh-heading)', fontWeight: 'var(--v2-weight-medium)', letterSpacing: '-0.01em', color: 'var(--v2-color-text-primary)' }}>
                    Secure by default
                  </span>
                </div>
                <p className="font-v2-sans text-v2-b2" style={{ color: 'var(--v2-color-text-secondary)', margin: 0 }}>
                  AES-256-GCM with strict access controls.
                </p>
              </div>

              {/* Card 3 */}
              <div className="v2-label-card relative flex flex-col" style={{ padding: '40px', gap: '14px', borderLeft: 'var(--v2-border-width) solid var(--v2-color-border-subtle)' }}>
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <span className="inline-flex" style={{ color: 'var(--v2-color-text-primary)' }}>
                    <svg width="20" height="20" strokeWidth="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M6 18.01L6.01 17.9989" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M6 6.01L6.01 5.99889" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M2 9.4V2.6C2 2.26863 2.26863 2 2.6 2H21.4C21.7314 2 22 2.26863 22 2.6V9.4C22 9.73137 21.7314 10 21.4 10H2.6C2.26863 10 2 9.73137 2 9.4Z"></path>
                      <path d="M2 21.4V14.6C2 14.2686 2.26863 14 2.6 14H21.4C21.7314 14 22 14.2686 22 14.6V21.4C22 21.7314 21.7314 22 21.4 22H2.6C2.26863 22 2 21.7314 2 21.4Z"></path>
                    </svg>
                  </span>
                  <span className="font-v2-sans" style={{ fontSize: 'var(--v2-text-h3)', lineHeight: 'var(--v2-lh-heading)', fontWeight: 'var(--v2-weight-medium)', letterSpacing: '-0.01em', color: 'var(--v2-color-text-primary)' }}>
                    Reliable at scale
                  </span>
                </div>
                <p className="font-v2-sans text-v2-b2" style={{ color: 'var(--v2-color-text-secondary)', margin: 0 }}>
                  99.99% uptime backed by support SLAs.
                </p>
              </div>

              {/* Card 4 */}
              <div className="v2-label-card relative flex flex-col" style={{ padding: '40px', gap: '14px', borderLeft: 'var(--v2-border-width) solid var(--v2-color-border-subtle)' }}>
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <span className="inline-flex" style={{ color: 'var(--v2-color-text-primary)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" aria-hidden="true">
                      <path d="M10 18V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V18" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M2 8L11.7317 3.13416C11.9006 3.04971 12.0994 3.0497 12.2683 3.13416L22 8" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M20 11V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V11" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </span>
                  <span className="font-v2-sans" style={{ fontSize: 'var(--v2-text-h3)', lineHeight: 'var(--v2-lh-heading)', fontWeight: 'var(--v2-weight-medium)', letterSpacing: '-0.01em', color: 'var(--v2-color-text-primary)' }}>
                    Self-host or cloud
                  </span>
                </div>
                <p className="font-v2-sans text-v2-b2" style={{ color: 'var(--v2-color-text-secondary)', margin: 0 }}>
                  Run it yourself or use MONOLITH Cloud.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
