import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/companyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>CLIENT REPUTATION</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">FOUNDER & CTO FEEDBACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Trusted by Leaders Operating at Scale
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            See how technology executives and enterprise founders partner with Nexovira to eliminate technical debt and automate core operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-cyan-400/40 mb-4" />
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-850">
                <div className="text-xs font-mono text-emerald-400 font-semibold mb-3">
                  {t.metric}
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                    {t.name.slice(0, 1)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white leading-tight">
                      {t.name}
                    </h4>
                    <p className="text-xs text-neutral-400">
                      {t.role}, <span className="text-neutral-300">{t.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
