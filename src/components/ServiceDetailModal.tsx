import React from 'react';
import { X, Check, Clock, Cpu, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../data/companyData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-3xl rounded-2xl bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-800 bg-neutral-950/80 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
              <span>SYSTEM SPECIFICATION</span>
              <span aria-hidden="true">·</span>
              <span>{service.metrics}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              {service.title}
            </h3>
            <p className="text-xs text-neutral-300 mt-1">
              {service.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-neutral-300">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
              Engineering Overview
            </h4>
            <p className="text-neutral-300 leading-relaxed">
              {service.details.overview}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Production Architecture Blueprint</span>
            </h4>
            <p className="text-neutral-400 text-xs font-mono leading-relaxed">
              {service.details.architecture}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Concrete Business Outcomes
            </h4>
            <div className="space-y-2">
              {service.details.outcomes.map((outcome, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
              Standard Sprint Delivery Timeline
            </h4>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>{service.details.timeline}</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold mb-2">
              Core Runtime Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded bg-neutral-800/80 text-neutral-300 border border-neutral-700/60 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-neutral-800 bg-neutral-950/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs font-mono text-neutral-500">
            Includes 100% full source code ownership handoff
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-cyan-500/20 active:scale-[0.98]"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
