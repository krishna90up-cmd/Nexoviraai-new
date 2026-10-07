import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { PRICING_PLANS, PricingPlan } from '../data/companyData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>TRANSPARENT ENGAGEMENT</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">STRUCTURED SPRINTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Predictable Engineering Engagement Models
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Choose an engagement structure matched to your product stage. 
            All models include dedicated senior software architects, strict milestone accountability, and 100% intellectual property transfer.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = !!plan.badge;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-900/70 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-950/40 relative'
                    : 'bg-neutral-900/30 border border-neutral-800'
                }`}
              >
                <div>
                  {/* Top line with optional featured pill */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      {plan.timeline}
                    </span>
                    {isFeatured && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-400 text-neutral-950 font-bold">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-display font-bold text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-800/80 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                      Scope Included:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800/80">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block">Best For:</span>
                    <p className="text-xs text-neutral-300 mt-0.5 font-medium">
                      {plan.idealFor}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-neutral-950 shadow-lg shadow-cyan-500/25 active:scale-[0.98]'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
