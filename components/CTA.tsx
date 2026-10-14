'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Mail, Copy, CheckCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  'Software Production',
  '2D Animation',
  'Motion Graphics',
  'Illustration',
  'Marketing Video',
  'Pro Video Editing',
];

const INDUSTRIES = ['B2B', 'B2C', 'SaaS', 'Startup', 'Mobile', 'Social Media'];

export default function CTA() {
  const [selectedService, setSelectedService] = useState('Software Production');
  const [selectedIndustry, setSelectedIndustry] = useState('SaaS');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@endorphin.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-3xl bg-[#0d0d16] border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#0FC8CF]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#6B1EEF]/15 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#0FC8CF] block mb-3">
                Get a Quote
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight uppercase">
                READY TO BRING YOUR VIDEO TO LIFE?
              </h2>

              <p className="mt-4 text-zinc-400 text-sm font-light leading-relaxed">
                Tell us about your brand, product, and goals. We’ll get back to you with an
                estimated timeline, moodboard treatment, and commercial proposal within 24 hours.
              </p>

              <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-zinc-500">Direct Inquiries</span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#CFABFF]" />
                    hello@endorphin.studio
                  </span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCheck className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="text-zinc-500 hover:text-zinc-300 flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-white/[0.03] border border-white/15 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 font-display">Quote Request Received</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you! Our creative lead will review your project requirements and follow up with a proposal shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Select Service
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {SERVICES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSelectedService(s)}
                          className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all ${
                            selectedService === s
                              ? 'bg-white text-black font-semibold'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Industry selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Select Industry
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {INDUSTRIES.map((ind) => (
                        <button
                          key={ind}
                          type="button"
                          onClick={() => setSelectedIndustry(ind)}
                          className={`py-2 px-2 rounded-xl text-xs font-medium text-center transition-all ${
                            selectedIndustry === ind
                              ? 'bg-gradient-to-r from-[#6B1EEF] to-[#0FC8CF] text-white font-semibold'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {ind}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Work Email"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Briefly describe your product and what kind of video you need..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6B1EEF] to-[#0FC8CF] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:opacity-90 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(107,30,239,0.35)]"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
