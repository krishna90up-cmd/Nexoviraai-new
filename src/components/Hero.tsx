import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Terminal, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const Hero: React.FC = () => {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  const terminalLogs = [
    { time: '00:01', step: 'Model Pipeline', status: 'Initialized multi-tenant agent graph' },
    { time: '00:03', step: 'ERP Connector', status: 'Synchronized 14,200 transactional records' },
    { time: '00:05', step: 'Autonomous Router', status: 'Resolved inbound procurement invoice in 180ms' },
    { time: '00:08', step: 'Vector Store', status: 'Semantic embeddings re-indexed with zero drift' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveLogIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [terminalLogs.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-neutral-950">
      {/* Background ambient lighting and subtle tech grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-indigo-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Subtle editorial kicker (NO pill badge) */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-cyan-400 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>ENTERPRISE AI ARCHITECTURE & FULL-STACK ENGINEERING</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span className="text-neutral-400">SOC2 COMPLIANT RUNTIMES</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.08] text-balance">
            Architecting Autonomous AI & Intelligent Enterprise Software
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-neutral-300 max-w-3xl leading-relaxed">
            Nexovira AI Solution engineers resilient custom software, bespoke CRM & ERP operating systems, 
            autonomous workflow pipelines, and multi-agent intelligence that replace manual operational toil with deterministic speed.
          </p>
        </div>

        {/* Actions & Proof */}
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="px-6 py-3.5 text-sm font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 flex items-center gap-2 group cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>Schedule Discovery Call</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/simulator"
            className="px-6 py-3.5 text-sm font-semibold text-neutral-200 hover:text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-cyan-500/50 rounded-xl transition-all duration-200 flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Test Live Agent Sandbox</span>
          </Link>

          <Link
            to="/services"
            className="px-4 py-3.5 text-sm font-medium text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            Explore 8 Core Services →
          </Link>
        </div>

        {/* Hero Visual & Real-Time Agent Stream Stage */}
        <div className="mt-14 relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40 shadow-2xl shadow-cyan-950/20">
          
          {/* Top terminal status bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline">
                nexovira-runtime-orchestrator.cluster.internal
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                ACTIVE AGENTS: 6
              </span>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <span className="hidden sm:inline text-cyan-300">TPS: 184 ops/sec</span>
            </div>
          </div>

          {/* Hero Banner Grid (16:9 dominant visual + live agent telemetry card overlay) */}
          <div className="relative aspect-[16/9] max-h-[520px] w-full overflow-hidden bg-neutral-950">
            <img
              src="/src/assets/images/hero_ai_platform_1791352104452.jpg"
              alt="Nexovira AI Solution Core Architecture"
              className="w-full h-full object-cover opacity-85 hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Scrim overlay for high legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

            {/* Bottom Floating Telemetry Panel */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-xl bg-neutral-950/90 backdrop-blur-xl border border-neutral-800/90">
              
              <div className="flex items-center gap-3.5">
                <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-400 font-medium">LIVE STEP:</span>
                    <span className="text-xs font-semibold text-white">
                      {terminalLogs[activeLogIndex].step}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-300 font-mono mt-0.5 line-clamp-1">
                    {terminalLogs[activeLogIndex].status}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-neutral-300 pt-2 md:pt-0 border-t md:border-t-0 border-neutral-800">
                <div className="flex flex-col">
                  <span className="text-neutral-500 text-[10px] uppercase">Latency</span>
                  <span className="text-emerald-400 font-semibold tabular-nums">118ms</span>
                </div>
                <div className="h-6 w-px bg-neutral-800" />
                <div className="flex flex-col">
                  <span className="text-neutral-500 text-[10px] uppercase">Confidence</span>
                  <span className="text-cyan-300 font-semibold tabular-nums">99.82%</span>
                </div>
                <div className="h-6 w-px bg-neutral-800" />
                <Link
                  to="/simulator"
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-xs font-medium border border-cyan-500/30 transition-colors whitespace-nowrap"
                >
                  Launch Sandbox →
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Quantitative Proof Grid Adjacent to Hero Claims */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-900">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60">
              <div className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight tabular-nums bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
