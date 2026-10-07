import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { CASE_STUDIES, CaseStudy } from '../data/companyData';

export const CaseStudiesPage: React.FC = () => {
  usePageMeta(
    "Case Studies — Quantifiable Software & AI Outcomes",
    "Real-world case studies detailing problem statements, software architecture, technology stacks, and verifiable business results across logistics, real estate, healthcare, and e-commerce."
  );

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'ERP & Automation',
    'Web & AI Agents',
    'Micro-SaaS & Data',
    'Full-Stack Software'
  ];

  const filteredCases = activeCategory === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((cs) => cs.category === activeCategory);

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>ENGINEERING PORTFOLIO</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">VERIFIABLE PRODUCTION OUTCOMES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Client Case Studies & Results
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Explore how Nexovira AI Solution builds custom software and autonomous automation pipelines 
            that eliminate technical debt, replace expensive legacy SaaS subscriptions, and drive massive operational efficiency.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-neutral-900 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-neutral-800 text-cyan-300 border border-neutral-700 shadow-sm'
                  : 'text-neutral-400 hover:text-white bg-neutral-900/40 border border-neutral-800/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Detailed Cards */}
        <div className="space-y-12">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual + Results Strip (Left 5 Cols) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
                    <img
                      src={cs.image || "/src/assets/images/case_study_ecommerce_1791352145622.jpg"}
                      alt={cs.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                    <div className="absolute top-3 left-3 text-[11px] font-mono text-cyan-300 bg-neutral-950/85 px-2.5 py-1 rounded border border-neutral-800">
                      {cs.industry}
                    </div>
                  </div>

                  {/* Results Numbers */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                      Verified Business Results:
                    </span>
                    <div className="grid grid-cols-3 gap-2">
                      {cs.results.map((res, rIdx) => (
                        <div key={rIdx} className="p-3 rounded-lg bg-neutral-950/90 border border-neutral-850">
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
                </div>

                {/* Narrative Details: Problem, Solution, Technology (Right 7 Cols) */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                      <span>{cs.category.toUpperCase()}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-neutral-500">{cs.service}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                      {cs.title}
                    </h2>
                    <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                      {cs.summary}
                    </p>
                  </div>

                  {/* Problem Statement */}
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-red-950/40">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-red-400 font-semibold block mb-1">
                      The Operational Problem:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  {/* Nexovira Solution */}
                  <div className="p-4 rounded-xl bg-neutral-950/60 border border-emerald-950/40">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
                      Nexovira Engineering Solution:
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Technology Deployed */}
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-2">
                      Technology Deployed:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cs.technology.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 text-xs rounded bg-neutral-800/80 text-neutral-300 border border-neutral-700/60 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action */}
                  <div className="pt-4 border-t border-neutral-850 flex items-center justify-between">
                    <Link
                      to={`/contact?service=${encodeURIComponent(cs.service)}`}
                      className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5"
                    >
                      <span>Request Similar System Architecture</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Have a Specific Architectural Challenge?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Book a discovery consultation to discuss your technical constraints, legacy stack, and targets under mutual NDA.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
