import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, Building, Layers } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/companyData';

interface CaseStudiesSectionProps {
  onRequestCaseStudy: (caseTitle: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onRequestCaseStudy }) => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>PROVEN CASE HISTORIES</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">MEASURABLE PRODUCTION OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Engineering Impact in Numbers
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            We don’t measure success by lines of code written. We measure throughput gained, 
            hours recaptured, and recurring operating expenses permanently eliminated.
          </p>
        </div>

        {/* Featured Case Study Hero Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8">
          
          {/* Visual Side (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <img
                src={selectedCase.image || "/src/assets/images/case_study_ecommerce_1791352145622.jpg"}
                alt={selectedCase.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
              <div className="absolute top-3 left-3 text-xs font-mono text-cyan-300 bg-neutral-950/80 px-2.5 py-1 rounded border border-neutral-800">
                {selectedCase.industry}
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {selectedCase.results.map((res, rIdx) => (
                <div key={rIdx} className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-850">
                  <div className="text-sm sm:text-base font-display font-bold text-white tabular-nums">
                    {res.metric}
                  </div>
                  <div className="text-[10px] text-neutral-400 mt-0.5 leading-tight">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Narrative Side (Right 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-neutral-850">
                <span className="text-xs font-mono text-cyan-400">
                  SERVICE: {selectedCase.service}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mt-4">
                {selectedCase.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-300">
                {selectedCase.summary}
              </p>

              {/* Challenge vs Solution comparison */}
              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-neutral-950/50 border border-red-950/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
                    The Problem:
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    {selectedCase.problem}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-neutral-950/50 border border-emerald-950/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                    Nexovira Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    {selectedCase.solution}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850 flex items-center justify-between">
              <button
                onClick={() => onRequestCaseStudy(selectedCase.title)}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-[0.98]"
              >
                <span>Request Similar Architecture Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Case Study Switcher Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {CASE_STUDIES.map((cs) => {
            const isActive = cs.id === selectedCase.id;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedCase(cs)}
                className={`p-4 rounded-xl text-left transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-neutral-850 border-cyan-500/50 shadow-md shadow-cyan-950/30'
                    : 'bg-neutral-900/30 hover:bg-neutral-900/60 border-neutral-800'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-1">
                  <span>{cs.industry}</span>
                  {isActive && <span className="text-cyan-400 font-bold">ACTIVE</span>}
                </div>
                <h4 className="text-sm font-semibold text-white line-clamp-1">
                  {cs.title}
                </h4>
                <div className="text-xs text-neutral-400 mt-2 line-clamp-1">
                  {cs.results[0].metric} — {cs.results[0].label}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
