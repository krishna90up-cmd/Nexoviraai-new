import React, { useState } from 'react';
import { 
  Rocket, 
  ShoppingBag, 
  Building2, 
  GraduationCap, 
  Activity, 
  Landmark, 
  Briefcase,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Bot
} from 'lucide-react';
import { INDUSTRIES, IndustryItem } from '../data/companyData';

interface IndustriesSectionProps {
  onSelectIndustryConsultation: (industryName: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({
  onSelectIndustryConsultation,
}) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(INDUSTRIES[0].id);

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Activity': return <Activity className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const currentIndustry = INDUSTRIES.find(i => i.id === selectedIndustryId) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>DOMAIN EXPERTISE</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">7 SECTOR CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Industries We Empower
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Every vertical presents unique technical constraints, compliance boundaries, and operational workflows. 
            We build domain-native software architectures tailored specifically to your business sector.
          </p>
        </div>

        {/* 7 Industry Selector (Horizontal Tabs on desktop, grid on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 pb-6 border-b border-neutral-900">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`flex flex-col items-center justify-center p-3 sm:py-4 rounded-xl transition-all cursor-pointer text-center group ${
                  isSelected
                    ? 'bg-neutral-800 text-white border border-cyan-500/50 shadow-lg shadow-cyan-950/20'
                    : 'bg-neutral-900/40 text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900 border border-neutral-800/80'
                }`}
              >
                <div className={`mb-2 transition-colors ${isSelected ? 'text-cyan-400' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                  {getIndustryIcon(ind.iconName)}
                </div>
                <span className="text-xs font-semibold whitespace-nowrap">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Showcase Card (Asymmetric Bento) */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Narrative (Left 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-850">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400">
                    {getIndustryIcon(currentIndustry.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">
                      {currentIndustry.name}
                    </h3>
                    <p className="text-xs text-cyan-400 font-mono mt-0.5">
                      {currentIndustry.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {currentIndustry.overview}
              </p>

              {/* Solved Pain Points */}
              <div className="mt-8 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                  Sector Bottlenecks We Eliminate:
                </span>
                {currentIndustry.painPoints.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Key Use Cases */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentIndustry.useCases.map((uc, uIdx) => (
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

            {/* Bottom Actions & Handshake */}
            <div className="mt-8 pt-6 border-t border-neutral-850 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs font-mono text-neutral-400">
                <span className="text-emerald-400 font-semibold">{currentIndustry.sampleMetric}</span>
              </div>

              <button
                onClick={() => onSelectIndustryConsultation(currentIndustry.name)}
                className="px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-[0.98]"
              >
                <span>Deploy For {currentIndustry.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Industry Spotlight & Deployed AI Agents (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AUTONOMOUS AGENTS IN PRODUCTION</span>
              </div>

              <h4 className="text-base font-display font-semibold text-white mb-4">
                Pre-Engineered Agent Topologies for {currentIndustry.name}
              </h4>

              <div className="space-y-3">
                {currentIndustry.agentsDeployed.map((agentName, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/90 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      <span className="text-xs font-medium text-neutral-200">
                        {agentName}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2 py-0.5 rounded">
                      Active SLA
                    </span>
                  </div>
                ))}
              </div>

              {/* Visual Asset Spotlight */}
              <div className="mt-6 rounded-xl overflow-hidden border border-neutral-800 relative aspect-[4/3] bg-neutral-950">
                <img
                  src="/src/assets/images/industry_realestate_finance_1791352133032.jpg"
                  alt={`${currentIndustry.name} software preview`}
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-neutral-300">
                  {currentIndustry.solution}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs font-mono text-neutral-500 text-center">
              Custom RBAC & HIPAA / SOC2 Compliant Data Partitioning
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
