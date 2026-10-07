import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Clock, ShieldCheck, MapPin, Phone } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '../data/companyData';

interface ContactSectionProps {
  initialService?: string;
  initialIndustry?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService,
  initialIndustry,
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(initialService || SERVICES[0].title);
  const [industry, setIndustry] = useState(initialIndustry || INDUSTRIES[0].name);
  const [budget, setBudget] = useState('$10k – $25k');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMessage('Please provide your full name and a valid work email.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Information & Trust Indicators (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
                <span>DIRECT ENGAGEMENT</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-400">RAPID ONBOARDING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                Let’s Architect Your Next Engine
              </h2>
              <p className="mt-4 text-base text-neutral-300 leading-relaxed">
                Whether you need a full enterprise ERP overhaul, an autonomous AI agent swarm, or a rapid micro-SaaS MVP, 
                our senior engineering team responds with technical clarity within 4 business hours.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-850">
              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Response SLA</span>
                  <span className="text-xs text-neutral-400">Senior Solution Architect review within 4 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Mutual NDA on Request</span>
                  <span className="text-xs text-neutral-400">Strict IP confidentiality guaranteed before technical deep dive</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-neutral-300">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Inquiries</span>
                  <a href="mailto:info@nexoviraai.com" className="text-xs font-mono text-cyan-300 hover:underline block">
                    info@nexoviraai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-xs text-neutral-300 font-mono">
              <span className="text-emerald-400 font-bold block mb-1">CURRENT SPRINT CAPACITY:</span>
              Now onboarding Q2/Q3 engineering cohorts. Agile sprints commence within 5 business days of scope approval.
            </div>
          </div>

          {/* Lead Capture Form (Right 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 px-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Discovery Brief Received
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. A Senior Solutions Architect from Nexovira has received your project details for <strong className="text-cyan-300">{company || 'your team'}</strong> and will follow up with an architectural proposal shortly.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@enterprise.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Company / Organization Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Health Systems"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Industry Sector
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind.id} value={ind.name}>{ind.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Primary Service Focus
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="$10k – $25k">$10k – $25k (Sprint MVP)</option>
                      <option value="$25k – $60k">$25k – $60k (Dedicated Pod)</option>
                      <option value="$60k – $150k+">$60k – $150k+ (Enterprise Overhaul)</option>
                      <option value="Undetermined">To Be Determined</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Project Scope & Bottlenecks You Want Solved
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe what you're building, existing legacy software, or manual bottlenecks..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {errorMessage && (
                  <p className="text-xs text-red-400 font-medium">
                    {errorMessage}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Discovery Brief...' : 'Request Architecture Consultation'}</span>
                </button>

                <p className="text-[11px] font-mono text-neutral-500 text-center">
                  Guaranteed confidential review under mutual non-disclosure. No marketing spam.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
