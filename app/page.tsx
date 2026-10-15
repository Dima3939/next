import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="mb-auto">
      <div 
        className="v2-page no-scrollbar::-webkit-scrollbar relative overflow-x-hidden no-scrollbar md:overflow-x-clip min-h-screen" 
        style={{ backgroundColor: 'var(--v2-color-bg-page, #0b0d10)' }}
      >
        <div className="v2-grain-overlay pointer-events-none" aria-hidden="true"></div>
        
        {/* Exact Infisical Navigation */}
        <Navbar />

        {/* Exact Infisical Landing Architecture */}
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <Metrics />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
