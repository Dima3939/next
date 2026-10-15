import React from 'react';
import Navbar from '@/components/Navbar';
import AmbientBackground from '@/components/AmbientBackground';
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
    <main className="relative min-h-screen bg-[#08090a] text-[#f1f5f9] overflow-hidden selection:bg-emerald-500 selection:text-black">
      {/* Background Grid & Ambient Glows */}
      <AmbientBackground />

      {/* Modern SaaS Header */}
      <Navbar />

      {/* Page Sections (Infisical Structure) */}
      <div className="relative z-10 flex flex-col">
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
