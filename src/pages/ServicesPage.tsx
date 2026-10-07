import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Cpu, 
  Layers, 
  Bot, 
  Zap, 
  Code2, 
  LineChart, 
  Boxes, 
  Check, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Clock
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SERVICES, ServiceItem } from '../data/companyData';
import { ServiceDetailModal } from '../components/ServiceDetailModal';

export const ServicesPage: React.FC = () => {
  usePageMeta(
    "Core Services — AI Solutions, Software, CRM/ERP & Automation",
    "Explore Nexovira's 8 core engineering disciplines: AI Solutions, Software Development, CRM & ERP Development, AI Agents, Automation, Web/App Development, Data Solutions and Digital Transformation."
  );

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    'All',
    'Artificial Intelligence',
    'Engineering',
    'Enterprise Systems',
    'Autonomous Systems',
    'Workflow Automation',
    'Frontend & Mobile',
    'Data & Analytics',
    'Strategic Modernization'
  ];

  const filteredServices = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'Bot': return <Bot className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'LineChart': return <LineChart className="w-5 h-5" />;
      case 'Boxes': return <Boxes className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>ENGINEERING SPECIFICATION</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">8 SPECIALIZED SERVICES</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Specialized Software & AI Services
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Nexovira AI Solution builds custom software, autonomous AI agents, enterprise CRM & ERP platforms, 
            and scalable digital transformation systems. Every deliverable includes 100% full source code ownership 
            and zero vendor lock-in.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 pt-6 border-t border-neutral-900">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero-Data-Retention Compliance</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>2–4 Week Agile Sprints</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Dedicated Senior Architects</span>
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
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

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredServices.map((service, index) => {
            const num = String(SERVICES.findIndex(s => s.id === service.id) + 1).padStart(2, '0');
            return (
              <div
                key={service.id}
                className="rounded-2xl bg-neutral-900/40 border border-neutral-800 hover:border-cyan-500/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
              >
                <div>
                  {/* Top Bar with Number and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {num}. {service.category.toUpperCase()}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/80 border border-neutral-700 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  <h2 className="text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1 font-medium">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-neutral-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Core Deliverables */}
                  <div className="mt-6 space-y-2.5">
                    <span className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider block">
                      Production Deliverables:
                    </span>
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-6 pt-4 border-t border-neutral-850">
                    <span className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider block mb-2">
                      Runtime Technology:
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

                {/* Bottom Actions */}
                <div className="mt-8 pt-6 border-t border-neutral-800 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Inspect System Blueprint</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg transition-all shadow-sm shadow-cyan-500/20 whitespace-nowrap"
                  >
                    Request Scope →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global CTA Box */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Need a Custom Architecture or Multi-Discipline Pod?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            Our Senior Architects can assemble a dedicated cross-functional engineering pod combining AI, full-stack, and ERP specialists for your milestone.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
            >
              <span>Schedule Architecture Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle) => {
          setSelectedService(null);
          window.location.href = `/contact?service=${encodeURIComponent(serviceTitle)}`;
        }}
      />
    </div>
  );
};
