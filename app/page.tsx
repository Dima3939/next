import React from 'react';
import Navbar from '@/components/Navbar';
import AmbientBackground from '@/components/AmbientBackground';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Metrics from '@/components/Metrics';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#07070a] text-white overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <AmbientBackground />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Projects />
        <Services />
        <Process />
        <Metrics />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}
