import React from 'react';

export const TechMarquee: React.FC = () => {
  const technologies = [
    { name: 'TypeScript & React 19', tag: 'Full-Stack' },
    { name: 'Python & FastAPI', tag: 'AI Backends' },
    { name: 'Google GenAI & Gemini', tag: 'LLM Runtimes' },
    { name: 'LangGraph & LangChain', tag: 'Agent Orchestration' },
    { name: 'PostgreSQL & Drizzle', tag: 'Data Integrity' },
    { name: 'Docker & Kubernetes', tag: 'Cloud Infra' },
    { name: 'ClickHouse & DuckDB', tag: 'Analytics' },
    { name: 'AWS & Google Cloud', tag: 'Private VPCs' },
    { name: 'Stripe Billing & Connect', tag: 'Monetization' },
    { name: 'Temporal & Inngest', tag: 'Durable Workflows' },
  ];

  return (
    <section className="py-12 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
            Enterprise Tech Stack & Integration Compatibility
          </span>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="flex gap-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex shrink-0 items-center gap-6 animate-[marquee_25s_linear_infinite]">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80 shrink-0 hover:border-cyan-500/40 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400/80" />
              <span className="text-sm font-medium text-neutral-200">{tech.name}</span>
              <span className="text-[10px] font-mono text-neutral-400">/ {tech.tag}</span>
            </div>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-6 animate-[marquee_25s_linear_infinite]" aria-hidden="true">
          {technologies.map((tech, i) => (
            <div
              key={`dup-${i}`}
              className="flex items-center gap-3 px-4 py-2 rounded-lg bg-neutral-900/60 border border-neutral-800/80 shrink-0 hover:border-cyan-500/40 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400/80" />
              <span className="text-sm font-medium text-neutral-200">{tech.name}</span>
              <span className="text-[10px] font-mono text-neutral-400">/ {tech.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
