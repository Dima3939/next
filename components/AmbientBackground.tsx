'use client';

import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Dev Grid with Radial Mask */}
      <div className="absolute inset-0 bg-dev-grid opacity-35 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_20%,#000_60%,transparent_100%)]" />

      {/* Primary Hero Ambient Glow - Emerald & Cyan subtle radiance behind the console */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-emerald-500/[0.08] blur-[140px]" />
      <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[350px] rounded-full bg-cyan-500/[0.04] blur-[160px]" />
    </div>
  );
}
