'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Check, Send, Mail, Copy, CheckCheck } from 'lucide-react';

export default function CTA() {
  const [selectedBudget, setSelectedBudget] = useState('$25k — $50k');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
  });

  const budgets = ['$10k — $25k', '$25k — $50k', '$50k — $100k+'];

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@endorphin.studio');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#12121f] via-[#0e0e17] to-[#07070a] border border-white/15 p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(139,92,246,0.2)] overflow-hidden">
          {/* Ambient Corner Glows */}
          <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-cyan-500/20 blur-[90px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-purple-600/25 blur-[90px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & Info */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next Available Slot: Q4</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
                LET'S BUILD SOMETHING UNFORGETTABLE.
              </h2>

              <p className="mt-4 text-zinc-400 text-sm font-light leading-relaxed">
                We accept only 2 select client engagements per quarter to maintain uncompromising perfection.
              </p>

              {/* Direct Email Pill */}
              <div className="mt-8 pt-8 border-t border-white/10 flex flex-col gap-3">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  Direct Inquiries
                </span>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    hello@endorphin.studio
                  </span>
                  {copied ? (
                    <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCheck className="w-3.5 h-3.5" /> Copied!
                    </span>
                  ) : (
                    <span className="text-zinc-500 group-hover:text-zinc-300 flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-purple-950/30 border border-purple-500/40 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Transmission Received</h3>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Our lead creative director will review your project requirements and respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Budget Picker */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-2 uppercase tracking-wider">
                      Target Investment Range
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded-xl text-xs font-mono text-center transition-all ${
                            selectedBudget === b
                              ? 'bg-purple-600 text-white font-semibold shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                              : 'bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alexandre Chen"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase">
                      Project Vision
                    </label>
                    <textarea
                      rows={3}
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      placeholder="Briefly describe your product goals, timeline, and what kind of magic you need..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 group"
                  >
                    <span>Initiate Studio Dialogue</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
