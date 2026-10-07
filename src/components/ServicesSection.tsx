import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Zap, 
  LineChart, 
  Boxes, 
  Bot, 
  ArrowRight, 
  Check, 
  ExternalLink,
  Cpu,
  Layers3
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/companyData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote,
}) => {
  const [filter, setFilter] = useState<'all' | 'software' | 'automation' | 'intelligence'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  const filteredServices = SERVICES.filter((s) => {
    if (filter === 'all') return true;
    if (filter === 'software') return s.id === 'software-web-development' || s.id === 'crm-erp-development';
    if (filter === 'automation') return s.id === 'ai-automation' || s.id === 'personal-enterprise-ai-agents';
    if (filter === 'intelligence') return s.id === 'data-intelligence' || s.id === 'custom-ai-tools-microsaas';
    return true;
  });

  return (
    <section id="services" className="py-24 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-neutral-900">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
              <span>CORE CAPABILITIES</span>
              <span aria-hidden="true">·</span>
              <span className="text-neutral-400">ENGINEERED FOR SCALE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              Specialized Engineering Services
            </h2>
            <p className="mt-3 text-neutral-400 max-w-2xl text-base sm:text-lg">
              Nexovira delivers end-to-end technical execution across six core domains. 
              We do not use cookie-cutter templates—every architecture is bespoke, resilient, and enterprise-grade.
            </p>
          </div>

          {/* Interactive filter tabs (functional buttons allowed) */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900/80 rounded-xl border border-neutral-800 self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Services (6)
            </button>
            <button
              onClick={() => setFilter('software')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'software'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Software & ERP
            </button>
            <button
              onClick={() => setFilter('automation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'automation'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              AI & Agents
            </button>
            <button
              onClick={() => setFilter('intelligence')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                filter === 'intelligence'
                  ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Data & SaaS
            </button>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const editorialIndex = String(SERVICES.findIndex(s => s.id === service.id) + 1).padStart(2, '0');
            
            return (
              <div
                key={service.id}
                className="group relative rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-cyan-500/50 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  {/* Header: Editorial numbering + Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      {editorialIndex}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-950/60 group-hover:border-cyan-500/40 transition-all">
                      {getIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 line-clamp-1">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Core Deliverables:
                    </span>
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Clean Metadata (NO PILLS) */}
                  <div className="mt-6 pt-4 border-t border-neutral-850">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                      Runtime Stack:
                    </span>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-400">
                      {service.techStack.map((tech, tIdx) => (
                        <React.Fragment key={tIdx}>
                          <span className="text-neutral-300">{tech}</span>
                          {tIdx < service.techStack.length - 1 && <span className="text-neutral-700">·</span>}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-8 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Architecture</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRequestQuote(service.title)}
                    className="px-3 py-1.5 text-xs font-medium text-neutral-200 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Request Scope →
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
