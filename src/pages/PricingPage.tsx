import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, ArrowRight, ShieldCheck, Key, RefreshCw, Clock } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { PRICING_PLANS, PricingPlan } from '../data/companyData';
import { RoiCalculator } from '../components/RoiCalculator';

export const PricingPage: React.FC = () => {
  usePageMeta(
    "Engagement Models & Pricing — Transparent Agile Sprints",
    "Predictable software engineering engagement models: Agile Sprint MVP, Dedicated Engineering Pod, and Enterprise Transformation with 100% IP ownership."
  );

  const navigate = useNavigate();

  const handleRoiPlanSelected = (details: { hoursSaved: number; costSaved: number; planName: string }) => {
    navigate(`/contact?plan=${encodeURIComponent(details.planName)}`);
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>PREDICTABLE ENGAGEMENT</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">STRUCTURED SPRINTS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Transparent Engineering Pricing
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            We operate in fixed-scope, fixed-timeline agile sprints with bi-weekly milestone demonstrations. 
            All engagements include complete source code repository transfer, enterprise documentation, and zero recurring royalties.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 pt-6 border-t border-neutral-900">
            <div className="flex items-center gap-2">
              <Key className="w-4 h-4 text-cyan-400" />
              <span>100% IP & Source Code Ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Vendor Lock-in or Per-Seat Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Bi-Weekly Working Demos</span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PLANS.map((plan, idx) => {
            const isFeatured = !!plan.badge;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-neutral-900/80 border-2 border-cyan-500/80 shadow-2xl shadow-cyan-950/40 relative'
                    : 'bg-neutral-900/40 border border-neutral-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      {plan.timeline}
                    </span>
                    {plan.badge && (
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-cyan-400 text-neutral-950 font-bold">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl font-display font-bold text-white">
                    {plan.name}
                  </h2>
                  <div className="text-lg font-mono text-cyan-300 font-bold mt-1">
                    {plan.priceTag}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-neutral-800 space-y-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                      Deliverables Included:
                    </span>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-800">
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase block font-semibold">Ideal For:</span>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      {plan.idealFor}
                    </p>
                  </div>

                  <Link
                    to={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    className={`w-full py-3 px-4 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 ${
                      isFeatured
                        ? 'bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 text-neutral-950 shadow-lg shadow-cyan-500/25 active:scale-[0.98]'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white active:scale-[0.98]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Embedded Interactive ROI & Savings Calculator on Dedicated Pricing Page */}
        <div className="pt-10 border-t border-neutral-900">
          <RoiCalculator onPlanSelected={handleRoiPlanSelected} />
        </div>

        {/* Delivery Guarantee Strip */}
        <div className="mt-16 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Full Source Code Transfer</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Repository, architecture blueprints, Dockerfiles, and CI/CD pipelines are handed over directly to your internal engineering team.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Post-Launch Warranty</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Every sprint includes a comprehensive bug-fix warranty (14 to 30 days) to guarantee software stability under live production traffic.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <RefreshCw className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Fixed-Scope Certainty</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                No open-ended billing surprises. Every milestone has a locked-in statement of work, sprint demo deadline, and acceptance criteria.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
