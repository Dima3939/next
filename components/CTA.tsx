'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Mail, Copy, CheckCheck, ArrowRight } from 'lucide-react';

const DISCIPLINES = ['3D & WebGL Canvas', 'Next.js 14 Web App', 'Kinetic Brand Identity', 'Full Flagship Launch'];
const BUDGETS = ['$25k — $50k', '$50k — $100k', '$100k+'];

export default function CTA() {
  const [selectedDiscipline, setSelectedDiscipline] = useState('3D & WebGL Canvas');
  const [selectedBudget, setSelectedBudget] = useState('$25k — $50k');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText('studio@monolith.design');
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
        <div className="relative rounded-3xl bg-[#0c0c14] border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-900/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-900/10 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left info */}
            <div className="lg:col-span-5">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-cyan-400 block mb-3">
                Project Transmission
              </span>

              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight uppercase">
                LET’S SHAPE SOMETHING ICONIC.
              </h2>

              <p className="mt-4 text-zinc-400 text-sm font-light leading-relaxed">
                Whether you have an established architectural brief or a radical concept, we’re
                ready to engineer it with uncompromising rigor.
              </p>

              <div className="mt-8 pt-8 border-t border-white/[0.08] flex flex-col gap-3">
                <span className="text-xs font-mono uppercase text-zinc-500">Direct Dialogue</span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-between px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    studio@monolith.design
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
                  <h3 className="text-xl font-bold text-white mb-2 font-display">Transmission Received</h3>
                  <p className="text-xs text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Our lead creative engineer will review your specifications and reply with milestone scopes within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Discipline selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Core Engagement Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {DISCIPLINES.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDiscipline(d)}
                          className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all ${
                            selectedDiscipline === d
                              ? 'bg-white text-black font-semibold'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase">
                      Target Investment Bracket
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono text-center transition-all ${
                            selectedBudget === b
                              ? 'bg-white text-black font-semibold'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white'
                          }`}
                        >
                          {b}
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
                        placeholder="Your Name / Studio"
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
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="Briefly describe your product vision, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-zinc-200 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(255,255,255,0.25)]"
                  >
                    <span>Submit Project Brief</span>
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
