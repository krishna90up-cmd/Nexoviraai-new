import React from 'react';
import { ShieldCheck, GitBranch, Cpu, Terminal, Key, Database, RefreshCw } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Architectural Blueprint & API Scoping',
      desc: 'We map every database entity, webhook payload, and agent decision tree. You receive a comprehensive system diagram before a single line of production code is written.'
    },
    {
      num: '02',
      title: 'Agile Full-Stack & Agent Swarm Build',
      desc: 'Engineered in bi-weekly sprints. Frontend reactive interfaces and resilient backend microservices built in TypeScript, connected to deterministic tool-calling agents.'
    },
    {
      num: '03',
      title: 'Production Hardening & Security Testing',
      desc: 'Rigorous end-to-end integration tests, cryptographic token validation, zero-retention model guardrails, and role-based access control audits.'
    },
    {
      num: '04',
      title: 'Deployment & Full IP Source Transfer',
      desc: 'Seamless deployment into your private cloud (AWS/GCP) or managed infrastructure. 100% source code repository, documentation, and credentials transferred cleanly.'
    }
  ];

  return (
    <section className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>METHODOLOGY</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">ENGINEERING RIGOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            How We Build Software That Endures
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            No endless meetings or opaque agency handoffs. We follow a military-grade agile sprint methodology 
            designed to ship reliable, high-throughput software on schedule.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
            >
              <div>
                <div className="text-2xl font-mono font-bold text-cyan-400 mb-4">
                  {st.num}.
                </div>
                <h3 className="text-lg font-display font-bold text-white">
                  {st.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-neutral-850 text-[11px] font-mono text-neutral-400">
                Verified Deliverable
              </div>
            </div>
          ))}
        </div>

        {/* Security & Data Isolation Guarantees */}
        <div className="mt-16 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">100% IP Ownership</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                You own all code, repositories, architectures, and fine-tuned weights. Zero recurring licensing royalties or vendor lock-in.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Zero Data Retention</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Enterprise AI endpoints configured with zero-training agreements. Your customer documents never leak into public foundation models.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Dedicated Cloud VPC</h4>
              <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                Deployed strictly inside your AWS, GCP, or private server cluster with isolated encryption keys and SOC2-compliant logging.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
