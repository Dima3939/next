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
    <main className="relative min-h-screen bg-[#0b0d10] text-[#ebebeb] overflow-hidden selection:bg-[#c2d72a] selection:text-black">
      {/* Background Grid & Ambient Glows */}
      <AmbientBackground />

      {/* Infisical Header */}
      <Navbar />

      {/* Infisical Full Page Architecture */}
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
