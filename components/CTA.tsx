'use client';

import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Copy, CheckCheck } from 'lucide-react';

const DISCIPLINES = ['3D & WebGL Canvas', 'Next.js 14 Architecture', 'Kinetic Design System', 'Flagship Product Launch'];
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
    <section id="contact" className="relative py-24 md:py-32 px-6 bg-[#0b0d10] border-t border-[#26272b]">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl bg-[#0e1014] border border-[#26272b] p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Subtle Infisical Volt glow in the corner */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#c2d72a]/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-sm bg-[#c2d72a]" />
                <span className="font-mono text-xs uppercase tracking-wider text-[#c2d72a] font-semibold">
                  INITIATE PARTNERSHIP
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-[#ebebeb] mb-4">
                Starting with MONOLITH is simple, fast, and free.
              </h2>

              <p className="text-sm text-[#adaeb0] font-normal leading-relaxed mb-8">
                Connect directly with our lead architects to review your technical specifications,
                timeline, and release milestones.
              </p>

              <div className="space-y-3 pt-6 border-t border-[#26272b]">
                <span className="text-xs font-mono text-[#707174] uppercase block">
                  Direct Inquiries
                </span>
                <button
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-[#14161d] border border-[#26272b] text-xs font-mono text-[#ebebeb] hover:border-[#3a3c42] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#c2d72a]" />
                    studio@monolith.design
                  </span>
                  {copied ? (
                    <span className="text-[#c2d72a] flex items-center gap-1">
                      <CheckCheck className="w-3.5 h-3.5" /> Copied
                    </span>
                  ) : (
                    <span className="text-[#707174] hover:text-[#ebebeb] flex items-center gap-1">
                      <Copy className="w-3.5 h-3.5" /> Copy
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-xl bg-[#14161d] border border-[#26272b] text-center">
                  <div className="w-10 h-10 rounded-full bg-[#4ac26b]/15 text-[#4ac26b] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-medium text-[#ebebeb] mb-2">Transmission Received</h3>
                  <p className="text-xs text-[#adaeb0] max-w-sm mx-auto leading-relaxed">
                    Our lead creative engineer will review your specifications and reply with milestone scopes within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-mono text-[#707174] mb-1.5 uppercase">
                      Core Engagement Focus
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {DISCIPLINES.map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setSelectedDiscipline(d)}
                          className={`py-2 px-3 rounded text-xs font-mono text-center transition-all ${
                            selectedDiscipline === d
                              ? 'bg-[#ebebeb] text-[#0b0d10] font-semibold'
                              : 'bg-[#14161d] border border-[#26272b] text-[#adaeb0] hover:text-[#ebebeb]'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#707174] mb-1.5 uppercase">
                      Target Investment Bracket
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`py-2 px-3 rounded text-xs font-mono text-center transition-all ${
                            selectedBudget === b
                              ? 'bg-[#ebebeb] text-[#0b0d10] font-semibold'
                              : 'bg-[#14161d] border border-[#26272b] text-[#adaeb0] hover:text-[#ebebeb]'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your Name / Studio"
                      className="w-full px-3.5 py-2.5 rounded bg-[#14161d] border border-[#26272b] text-xs text-[#ebebeb] placeholder:text-[#707174] focus:outline-none focus:border-[#3a3c42]"
                    />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Work Email"
                      className="w-full px-3.5 py-2.5 rounded bg-[#14161d] border border-[#26272b] text-xs text-[#ebebeb] placeholder:text-[#707174] focus:outline-none focus:border-[#3a3c42]"
                    />
                  </div>

                  <textarea
                    rows={3}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Briefly describe your product goals, desired launch date, and scope..."
                    className="w-full px-3.5 py-2.5 rounded bg-[#14161d] border border-[#26272b] text-xs text-[#ebebeb] placeholder:text-[#707174] focus:outline-none focus:border-[#3a3c42] resize-none"
                  />

                  <button
                    type="submit"
                    className="v2-btn v2-btn--primary w-full py-3 text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Submit Project Brief</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
