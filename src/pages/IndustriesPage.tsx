import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Activity, 
  ShoppingBag, 
  Cpu, 
  Briefcase, 
  Rocket, 
  Landmark,
  ArrowRight,
  Bot,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { INDUSTRIES, IndustryItem } from '../data/companyData';

export const IndustriesPage: React.FC = () => {
  usePageMeta(
    "Industries We Empower — Real Estate, Healthcare, Startups, Enterprises",
    "Specialized AI and software engineering solutions tailored for Real Estate, Education/EdTech, Healthcare, E-commerce, Manufacturing, Professional Services, Startups and Enterprises."
  );

  const [activeIndustryId, setActiveIndustryId] = useState<string>(INDUSTRIES[0].id);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const selectedIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>DOMAIN ARCHITECTURES</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">8 SPECIALIZED SECTORS</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Industries We Empower
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Every vertical presents unique compliance postures, transaction cycles, and manual bottlenecks. 
            Nexovira engineers domain-native software systems tailored to the operational realities of your industry.
          </p>
        </div>

        {/* 8 Industry Selector Grid / Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pb-6 border-b border-neutral-900">
          {INDUSTRIES.map((ind) => {
            const isActive = ind.id === activeIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustryId(ind.id)}
                className={`p-3.5 rounded-xl transition-all flex flex-col items-center text-center cursor-pointer ${
                  isActive
                    ? 'bg-neutral-800 text-white border border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                    : 'bg-neutral-900/40 text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800/80'
                }`}
              >
                <div className={`mb-2 ${isActive ? 'text-cyan-400' : 'text-neutral-500'}`}>
                  {getIndustryIcon(ind.iconName)}
                </div>
                <span className="text-xs font-semibold leading-tight line-clamp-1">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Details (Left 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-neutral-850">
                <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                  {getIndustryIcon(selectedIndustry.iconName)}
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold text-white">
                    {selectedIndustry.name}
                  </h2>
                  <p className="text-xs text-cyan-400 font-mono">
                    {selectedIndustry.tagline}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {selectedIndustry.overview}
              </p>

              {/* Solved Pain Points */}
              <div className="mt-8 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Sector Bottlenecks We Eliminate:
                </span>
                {selectedIndustry.painPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Use Cases */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedIndustry.useCases.map((uc, uIdx) => (
                  <div key={uIdx} className="p-4 rounded-xl bg-neutral-950/60 border border-neutral-800">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {uc.title}
                    </h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                Outcome: {selectedIndustry.sampleMetric}
              </span>

              <Link
                to={`/contact?industry=${encodeURIComponent(selectedIndustry.name)}`}
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/20 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Deploy For {selectedIndustry.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Autonomous Agent Topologies (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AUTONOMOUS AGENT TOPOLOGY</span>
              </div>

              <h3 className="text-base font-display font-semibold text-white mb-4">
                Active Agents Engineered for {selectedIndustry.name}
              </h3>

              <div className="space-y-3">
                {selectedIndustry.agentsDeployed.map((agentName, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-xs font-medium text-neutral-200">
                        {agentName}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      Production Ready
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Asset */}
              <div className="mt-6 rounded-xl overflow-hidden border border-neutral-800 relative aspect-[4/3] bg-neutral-950">
                <img
                  src="/src/assets/images/industry_realestate_finance_1791352133032.jpg"
                  alt={`${selectedIndustry.name} software dashboard preview`}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-neutral-300">
                  {selectedIndustry.solution}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 text-center">
              Custom Data Segregation & SOC2 / HIPAA Compliant Guardrails
            </div>
          </div>

        </div>

        {/* Complete 8 Industries Matrix */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              COMPREHENSIVE DIRECTORY
            </span>
            <h3 className="text-2xl font-display font-bold text-white">
              All 8 Sector Architectures
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="p-5 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-cyan-500/40 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-cyan-400">{ind.category}</span>
                    <div className="text-neutral-400">{getIndustryIcon(ind.iconName)}</div>
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    {ind.name}
                  </h4>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                    {ind.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-emerald-400">
                    {ind.sampleMetric.split(' ')[0]} {ind.sampleMetric.split(' ')[1]}
                  </span>
                  <button
                    onClick={() => {
                      setActiveIndustryId(ind.id);
                      window.scrollTo({ top: 380, behavior: 'smooth' });
                    }}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  >
                    Inspect Details ↑
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
