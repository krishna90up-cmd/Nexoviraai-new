import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, ShieldCheck } from 'lucide-react';
import { SERVICES, INDUSTRIES } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand & Overview (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white text-sm">
                N
              </div>
              <span className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                Nexovira <span className="text-cyan-400 font-light">AI Solution</span>
              </span>
            </Link>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Engineering autonomous enterprise software, multi-agent AI ecosystems, custom CRM & ERP platforms, 
              and scalable digital transformation systems with zero vendor lock-in and complete source code ownership.
            </p>

            <div className="pt-2 text-[11px] font-mono text-neutral-500 space-y-1">
              <div>Runtime Environments: Private VPC / AWS / GCP / Cloud Run</div>
              <div>Security Posture: Zero Data Retention & SOC2 Compliant Protocols</div>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                Schedule Architecture Review
              </Link>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              <Link to="/services" className="hover:text-cyan-400 transition-colors">
                Core Services →
              </Link>
            </h4>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to="/services"
                    className="hover:text-cyan-400 transition-colors text-left block"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              <Link to="/industries" className="hover:text-cyan-400 transition-colors">
                Industries We Empower →
              </Link>
            </h4>
            <ul className="space-y-2">
              {INDUSTRIES.map((ind) => (
                <li key={ind.id}>
                  <Link
                    to="/industries"
                    className="hover:text-cyan-400 transition-colors text-left block"
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links & Contact */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Company & Operations
            </h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link to="/simulator" className="hover:text-cyan-400 transition-colors">
                  Agent Sandbox Simulator
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-cyan-400 transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition-colors">
                  Engagement Pricing & ROI
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-cyan-400 transition-colors">
                  FAQ & Due Diligence
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition-colors">
                  Direct Consultation Desk
                </Link>
              </li>
            </ul>

            <div className="pt-2 border-t border-neutral-900 space-y-1 text-[11px] font-mono">
              <div className="text-neutral-500">Engineering Desk:</div>
              <a href="mailto:info@nexoviraai.com" className="text-cyan-400 hover:underline">
                info@nexoviraai.com
              </a>
              <div className="text-neutral-500 pt-1">Response SLA: &lt; 4 Business Hours</div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-neutral-500 text-[11px] font-mono">
            <span>© {new Date().getFullYear()} Nexovira AI Solution. All rights reserved.</span>
            <span>·</span>
            <span>100% Client Source Code Ownership</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
