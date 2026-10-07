import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock, ArrowRight, ShieldCheck, Send } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '../data/companyData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedPlan?: string;
  preselectedIndustry?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  preselectedPlan,
  preselectedIndustry,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || SERVICES[0].title);
  const [industry, setIndustry] = useState(preselectedIndustry || INDUSTRIES[0].name);
  const [date, setDate] = useState('This week');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-750 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 bg-neutral-950/85 flex items-start justify-between">
          <div>
            <span className="text-xs font-mono text-cyan-400 block mb-1">
              DIRECT ARCHITECTURAL CONSULTATION
            </span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              Schedule Your Discovery Call
            </h3>
            <p className="text-xs text-neutral-400 mt-1">
              30-minute technical scope review with a Senior AI & Software Architect
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto">
          {isConfirmed ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-display font-bold text-white">
                Consultation Reserved
              </h4>
              <p className="text-xs text-neutral-300 max-w-sm mx-auto leading-relaxed">
                We’ve reserved your engineering discovery session for <strong className="text-white">{company || name}</strong>. A calendar invite and prep link have been dispatched to <strong className="text-cyan-300">{email}</strong>.
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Marcus Thorne"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="marcus@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Company or Project"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-neutral-300 block mb-1">
                    Industry
                  </label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind.id} value={ind.name}>{ind.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Target Service
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Preferred Timeline / Target Launch
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="Urgent (Next 2-4 weeks)">Urgent (Next 2–4 weeks)</option>
                  <option value="Standard (Within 30-60 days)">Standard (Within 30–60 days)</option>
                  <option value="Q3/Q4 Planning">Quarterly Strategic Planning</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-300 block mb-1">
                  Brief Technical Context (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Existing stack, bottlenecks to automate, or goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-cyan-500 rounded-xl px-3.5 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Confirming Availability...' : 'Confirm Discovery Session'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
