import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Mail, 
  Calendar, 
  MapPin, 
  FileCheck2,
  Terminal,
  Lock
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SERVICES, INDUSTRIES } from '../data/companyData';

export const ContactPage: React.FC = () => {
  usePageMeta(
    "Book Consultation & Engineering Briefing — Direct Solutions Desk",
    "Schedule a 30-minute discovery consultation with a Senior Solutions Architect from Nexovira AI Solution. Guaranteed 4-hour response SLA."
  );

  const [searchParams] = useSearchParams();
  const paramService = searchParams.get('service');
  const paramIndustry = searchParams.get('industry');
  const paramPlan = searchParams.get('plan');

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(paramService || SERVICES[0].title);
  const [industry, setIndustry] = useState(paramIndustry || INDUSTRIES[0].name);
  const [budget, setBudget] = useState(paramPlan ? 'Plan Specified' : '$25k – $60k');
  const [timeline, setTimeline] = useState('Urgent (Next 2-4 weeks)');
  const [message, setMessage] = useState(paramPlan ? `Interested in discussing the ${paramPlan} engagement tier.` : '');
  const [requestNda, setRequestNda] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (paramService) setService(paramService);
    if (paramIndustry) setIndustry(paramIndustry);
    if (paramPlan) {
      setMessage(`Interested in discussing the ${paramPlan} engagement tier.`);
    }
  }, [paramService, paramIndustry, paramPlan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !email.trim()) {
      setErrorMsg('Please enter your full name and work email.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>DIRECT ENGAGEMENT DESK</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">RAPID ARCHITECTURE BRIEFING</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Schedule Your Discovery Call
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Connect directly with a Senior Solutions Architect to evaluate your technical requirements, 
            data security posture, and sprint timeline. We review all submissions within 4 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Trust Guarantees & Operational Info (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <h3 className="text-base font-display font-bold text-white">
                What to Expect on the Discovery Call
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>Technical Scope Evaluation:</strong> Detailed breakdown of legacy constraints, APIs, and data models.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>Architecture Blueprint:</strong> System topology recommendation and choice of LLM/runtime.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span><strong>Fixed-Scope Sprint Estimate:</strong> Clear milestone timeline, deliverables, and acceptance criteria.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">4-Hour Response SLA</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Submissions received Monday through Friday during business hours are reviewed by our senior technical team within 4 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-850">
                <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Mutual NDA Protocol</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    We routinely execute bilateral non-disclosure agreements before reviewing proprietary codebase repositories or financial data.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-neutral-850">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Engineering Desk</h4>
                  <a href="mailto:info@nexoviraai.com" className="text-xs font-mono text-cyan-300 mt-0.5 hover:underline block">
                    info@nexoviraai.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-400">
              <span className="text-emerald-400 font-bold block mb-1">SPRINT CAPACITY NOTICE:</span>
              Current onboarding cohort: Q2/Q3 active sprints. New dedicated pods deploy within 5 business days of contract signoff.
            </div>
          </div>

          {/* Consultation Form (Right 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/50 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 px-4 text-center space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Engineering Briefing Confirmed
                </h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{fullName}</strong>. Your project brief for <strong className="text-cyan-300">{company || 'your organization'}</strong> has been assigned to a Senior Solutions Architect. A calendar invitation and technical questionnaire have been sent to <strong className="text-cyan-300">{email}</strong>.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setMessage('');
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-800 rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Additional Specifications
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
                      placeholder="e.g. David Sterling"
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
                      placeholder="e.g. david@enterprise.com"
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
                      placeholder="e.g. Apex Logistics"
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
                      Target Service
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
                      Projected Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Urgent (Next 2-4 weeks)">Urgent (Next 2–4 weeks)</option>
                      <option value="Standard (Next 30-60 days)">Standard (Next 30–60 days)</option>
                      <option value="Strategic / Next Quarter">Strategic / Next Quarter</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  >
                    <option value="$12,500 – $25,000">$12,500 – $25,000 (Agile Sprint MVP)</option>
                    <option value="$25,000 – $60,000">$25,000 – $60,000 (Dedicated Engineering Pod)</option>
                    <option value="$60,000 – $150,000+">$60,000 – $150,000+ (Enterprise Transformation)</option>
                    <option value="Custom Scope">Custom Scope / Retainer</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1.5">
                    Technical Scope & Problem Statement
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe what you want built, existing legacy systems, manual bottlenecks to automate, or API requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={requestNda}
                    onChange={(e) => setRequestNda(e.target.checked)}
                    className="w-4 h-4 accent-cyan-400 bg-neutral-900 border-neutral-800 rounded cursor-pointer"
                  />
                  <label htmlFor="nda-checkbox" className="text-xs text-neutral-300 cursor-pointer">
                    Please send a mutual Non-Disclosure Agreement (NDA) prior to our discovery call.
                  </label>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-400 font-medium">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Specifications...' : 'Confirm Discovery Session'}</span>
                </button>

                <p className="text-[11px] font-mono text-neutral-500 text-center">
                  100% confidential. Your email and technical details will never be sold or spammed.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
