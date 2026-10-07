import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bot, Terminal, Cpu, ShieldCheck, ArrowRight, Database, Clock, Sparkles } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { AgentSimulator } from '../components/AgentSimulator';

export const SimulatorPage: React.FC = () => {
  usePageMeta(
    "Interactive Agent Sandbox — Autonomous AI Execution Simulator",
    "Test Nexovira's autonomous multi-agent execution engine in real-time. Inspect multi-step tool calls, deterministic planning, and sub-200ms operational resolution."
  );

  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact?service=AI%20Agents');
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="max-w-4xl pt-8 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>DETERMINISTIC AGENT ENGINE</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">LIVE EXECUTION ENVIRONMENT</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight">
            Autonomous Agent Simulator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-3xl leading-relaxed">
            Experience how Nexovira’s enterprise AI agents handle real-world tasks. 
            Unlike static chatbots, our agents reason over multi-step instructions, invoke external APIs, query relational databases, 
            and complete verified business workflows with sub-second latency.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400 pt-6 border-t border-neutral-900">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Real-Time Tool Calling Engine</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>&lt; 180ms Decision Latency</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Zero Hallucination Guardrails</span>
            </div>
          </div>
        </div>

        {/* The Complete Live Simulator (Moved to its dedicated page) */}
        <div className="mb-20">
          <AgentSimulator onBookCall={handleBookCall} />
        </div>

        {/* Technical Architecture of Nexovira Agents */}
        <div className="mt-16 pt-16 border-t border-neutral-900">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              UNDER THE HOOD
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Agent Runtime Architecture & Safety Standards
            </h2>
            <p className="mt-2 text-sm text-neutral-400">
              How our production agent swarms differ fundamentally from simple LLM wrappers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 w-fit mb-4">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Stateful LangGraph Swarms
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Agents are structured as typed finite state machines. Every decision branch is deterministic, allowing automatic retry, rollbacks, and human-in-the-loop review.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 w-fit mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Episodic & Long-Term Memory
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Agents maintain contextual memory across customer sessions and operational cycles, retrieving relevant past interactions via dense vector search.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800">
              <div className="p-3 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 w-fit mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                Private VPC Execution
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                Deployed strictly inside your corporate cloud boundaries (AWS or Google Cloud) with zero third-party training and strict RBAC credential isolation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Strip */}
        <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Ready to Deploy Custom Agents in Your Workflow?
          </h3>
          <p className="text-sm text-neutral-300 max-w-xl mx-auto">
            We can architect and deliver a production-ready autonomous agent pod for your company within 3 to 6 weeks.
          </p>
          <div className="pt-2">
            <Link
              to="/contact?service=AI%20Agents"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
            >
              <span>Schedule Agent Architecture Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
