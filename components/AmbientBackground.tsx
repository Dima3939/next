'use client';

import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Dev Grid with Radial Mask */}
      <div className="absolute inset-0 bg-dev-grid opacity-25 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_20%,#000_60%,transparent_100%)]" />

      {/* Primary Hero Ambient Glow - Infisical Volt subtle radiance behind the console */}
      <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#c2d72a]/[0.04] blur-[150px]" />
    </div>
  );
}
