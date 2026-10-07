import React, { useState } from 'react';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Bot, 
  Terminal, 
  Database, 
  Clock, 
  Layers, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SimulationScenario {
  id: string;
  name: string;
  industry: string;
  task: string;
  steps: {
    title: string;
    action: string;
    tool: string;
    durationMs: number;
    detail: string;
  }[];
  finalOutput: {
    summary: string;
    resultData: Record<string, string>;
  };
}

const SCENARIOS: SimulationScenario[] = [
  {
    id: 'lead-qualifier',
    name: 'Autonomous Sales Qualifier & Calendar Agent',
    industry: 'Startups & Agencies',
    task: 'Process inbound web inquiry from Series-A founder seeking CRM overhaul. Score buying intent, verify budget, and reserve an executive engineering slot.',
    steps: [
      {
        title: 'Payload Parsing & Entity Extraction',
        action: 'Ingest contact form JSON & domain records',
        tool: 'parse_inbound_lead()',
        durationMs: 400,
        detail: 'Domain: cloudstride.io | Company Size: 34 FTEs | Budget: $25k–$50k tier'
      },
      {
        title: 'Intent Scoring & Tech Fingerprinting',
        action: 'Query public company stack and CRM compatibility',
        tool: 'enrich_prospect_metadata()',
        durationMs: 650,
        detail: 'Detected: React frontend, PostgreSQL legacy database, Stripe billing. Intent Score: 96/100'
      },
      {
        title: 'Calendar Slot Negotiation',
        action: 'Execute automated calendar availability lookup',
        tool: 'google_calendar.find_open_slots()',
        durationMs: 500,
        detail: 'Selected: Thursday 10:30 AM EST (Senior Solutions Architect Pod 2)'
      },
      {
        title: 'Audit Logging & Confirmation Dispatch',
        action: 'Emit invite & webhook to client internal Slack channel',
        tool: 'dispatch_invite_and_slack_notification()',
        durationMs: 450,
        detail: 'Calendar invitation sent; lead card dispatched to sales channel with brief.'
      }
    ],
    finalOutput: {
      summary: 'Lead enriched, qualified with 96% confidence, and scheduled in 2.0 seconds without human intervention.',
      resultData: {
        'Qualified Status': 'Tier 1 Priority Lead',
        'Assigned Pod': 'Enterprise Software & ERP Squad',
        'Meeting Time': 'Thursday, 10:30 AM EST',
        'System Action': 'Calendar Invite Dispatched & CRM Record Seeded'
      }
    }
  },
  {
    id: 'invoice-erp',
    name: 'Multi-Page Invoice & ERP Reconciliation Agent',
    industry: 'Finance & Supply Chain',
    task: 'Receive 14-page supplier PDF invoice with 42 line items, cross-check against warehouse Purchase Orders, and execute GL entry.',
    steps: [
      {
        title: 'OCR & Multimodal Vision Extraction',
        action: 'Extract line items, tax IDs, and vendor wire coordinates',
        tool: 'vision_document_extract()',
        durationMs: 700,
        detail: 'Extracted 42 line items. Vendor: Apex Logistics GmbH. Total: $48,290.00'
      },
      {
        title: 'Three-Way ERP Purchase Order Match',
        action: 'Query PostgreSQL ERP database for matching PO #8841-B',
        tool: 'erp.query_open_purchase_orders()',
        durationMs: 600,
        detail: 'PO #8841-B matched. Quantity discrepancy: 0. Price variance: 0.00%'
      },
      {
        title: 'Fraud & Bank Routing Verification',
        action: 'Validate IBAN and beneficiary certificate against whitelist',
        tool: 'security.verify_beneficiary_whitelist()',
        durationMs: 400,
        detail: 'Beneficiary verified against cryptographically signed vendor registry.'
      },
      {
        title: 'Automated Ledger Journal Entry',
        action: 'Post pending payment to Accounts Payable ledger',
        tool: 'erp.post_gl_journal_entry()',
        durationMs: 500,
        detail: 'Journal Entry #JE-2026-904 created. Auto-scheduled for Friday batch ACH.'
      }
    ],
    finalOutput: {
      summary: '3-way reconciliation completed in 2.2 seconds with zero human intervention and 100% mathematical accuracy.',
      resultData: {
        'Matching Status': 'Exact Match (3-Way Verified)',
        'Invoice Amount': '$48,290.00 USD',
        'Variance': '$0.00 (Zero Discrepancy)',
        'ERP Action': 'Scheduled for ACH Batch Payment'
      }
    }
  },
  {
    id: 'real-estate-bot',
    name: 'Property Valuation & Private Tour Booking Agent',
    industry: 'Real Estate',
    task: 'Engage high-intent buyer inquiring about $1.8M penthouse at 11:45 PM. Qualify financing status, verify identity, and book private agent walkthrough.',
    steps: [
      {
        title: 'Natural Language Inbound Inquiry',
        action: 'Parse SMS/WhatsApp message and extract property MLS ID',
        tool: 'nlp_parse_property_inquiry()',
        durationMs: 450,
        detail: 'Target: 740 Park Avenue #8B | Buyer stated pre-approval with JPMorgan Chase'
      },
      {
        title: 'MLS Property Comps Retrieval',
        action: 'Query local vector store for recent building sales and floor plan',
        tool: 'mls.fetch_active_listing_and_comps()',
        durationMs: 550,
        detail: 'Listing active. Verified sq footage: 2,400 sq ft. Current HOA: $2,840/mo'
      },
      {
        title: 'Financing Verification & ID Check',
        action: 'Check verified pre-approval letter threshold via secure upload link',
        tool: 'buyer_criteria_qualification()',
        durationMs: 500,
        detail: 'Buyer qualified for private VIP showing tier without concierge delay.'
      },
      {
        title: 'Agent Calendar Synchronization',
        action: 'Coordinate with listing broker calendar and issue building pass',
        tool: 'broker_schedule.reserve_private_showing()',
        durationMs: 500,
        detail: 'Showing confirmed for Saturday 2:00 PM. Digital concierge pass issued.'
      }
    ],
    finalOutput: {
      summary: 'Midnight buyer converted to confirmed VIP property tour in under 2 minutes.',
      resultData: {
        'Buyer Intent': 'High Intent (Verified Pre-Approval)',
        'Property': 'Penthouse 8B, 740 Park Ave',
        'Tour Schedule': 'Saturday, 2:00 PM EST',
        'Lead Value': '$1,850,000 Listing Potential'
      }
    }
  }
];

export const AgentSimulator: React.FC<{ onBookCall: () => void }> = ({ onBookCall }) => {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const handleRunSimulation = () => {
    setIsRunning(true);
    setIsCompleted(false);
    setCurrentStepIndex(0);

    let step = 0;
    const runNextStep = () => {
      if (step < scenario.steps.length) {
        setCurrentStepIndex(step);
        const duration = scenario.steps[step].durationMs;
        step++;
        setTimeout(runNextStep, duration);
      } else {
        setIsRunning(false);
        setIsCompleted(true);
      }
    };

    setTimeout(runNextStep, scenario.steps[0].durationMs);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsCompleted(false);
    setCurrentStepIndex(-1);
  };

  return (
    <section id="simulator" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>INTERACTIVE AGENT SANDBOX</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">TEST DETERMINISTIC WORKFLOWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Autonomous Multi-Agent Execution Engine
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Experience how Nexovira’s enterprise AI agents handle real-world tasks. 
            Select an operational scenario and run the simulation to see deterministic tool calls and zero-latency resolution.
          </p>
        </div>

        {/* Scenario Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SCENARIOS.map((sc) => (
            <button
              key={sc.id}
              onClick={() => {
                setActiveScenarioId(sc.id);
                handleReset();
              }}
              className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeScenarioId === sc.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-md shadow-cyan-950/40'
                  : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {sc.name}
            </button>
          ))}
        </div>

        {/* Simulator Cockpit */}
        <div className="rounded-2xl bg-neutral-900/40 border border-neutral-800 overflow-hidden shadow-2xl">
          
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-neutral-950/90 border-b border-neutral-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                <Bot className="w-4 h-4 text-cyan-400" />
                <span>AGENT TARGET: {scenario.name}</span>
                <span className="text-neutral-600">·</span>
                <span className="text-neutral-300">{scenario.industry}</span>
              </div>
              <p className="text-sm text-neutral-300 mt-1 max-w-2xl font-mono text-xs">
                {scenario.task}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                disabled={isRunning}
                className="p-2.5 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors disabled:opacity-40 cursor-pointer"
                title="Reset Simulation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <button
                onClick={handleRunSimulation}
                disabled={isRunning}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg ${
                  isRunning
                    ? 'bg-neutral-800 text-neutral-400 cursor-not-allowed'
                    : 'bg-cyan-400 hover:bg-cyan-300 text-neutral-950 shadow-cyan-500/20 active:scale-[0.98]'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>{isRunning ? 'Executing Agent Swarm...' : 'Run Autonomous Task'}</span>
              </button>
            </div>
          </div>

          {/* Simulation Steps Feed */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Steps stream (Left 7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                Execution Steps & Tool Invocation Stream:
              </span>

              {scenario.steps.map((step, idx) => {
                const isCurrent = currentStepIndex === idx && isRunning;
                const isPast = currentStepIndex > idx || isCompleted;
                const isPending = currentStepIndex < idx && !isCompleted;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      isCurrent
                        ? 'bg-cyan-950/30 border-cyan-500/60 shadow-lg shadow-cyan-950/30'
                        : isPast
                        ? 'bg-neutral-900/70 border-emerald-500/30'
                        : 'bg-neutral-900/20 border-neutral-800/60 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xs font-mono font-bold text-neutral-400">
                          Step 0{idx + 1}
                        </span>
                        <h4 className="text-sm font-semibold text-white">
                          {step.title}
                        </h4>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono">
                        {isCurrent && (
                          <span className="text-cyan-400 flex items-center gap-1 animate-pulse">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                            Executing...
                          </span>
                        )}
                        {isPast && (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Resolved
                          </span>
                        )}
                        {isPending && (
                          <span className="text-neutral-400">Queued</span>
                        )}
                      </div>
                    </div>

                    <div className="mt-2 text-xs font-mono text-cyan-300/80 bg-neutral-950/60 px-2.5 py-1.5 rounded border border-neutral-800/60">
                      Tool Call: <span className="text-white">{step.tool}</span>
                    </div>

                    {(isPast || isCurrent) && (
                      <p className="mt-2 text-xs text-neutral-300 font-mono">
                        {step.detail}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Results Console (Right 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-xl bg-neutral-950/80 border border-neutral-800">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <span>DETERMINISTIC AGENT OUTPUT</span>
                  </div>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                    isCompleted ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800/60' : 'text-neutral-400'
                  }`}>
                    {isCompleted ? 'TASK SUCCESS' : isRunning ? 'PROCESSING' : 'IDLE READY'}
                  </span>
                </div>

                {isCompleted ? (
                  <div className="space-y-4">
                    <div className="p-3.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-emerald-300 text-xs">
                      {scenario.finalOutput.summary}
                    </div>

                    <div className="space-y-2.5 pt-2">
                      {Object.entries(scenario.finalOutput.resultData).map(([k, v]) => (
                        <div key={k} className="p-2.5 rounded bg-neutral-900 border border-neutral-800 flex flex-col gap-0.5">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">{k}</span>
                          <span className="text-xs font-medium text-white">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-neutral-300">
                    <Bot className="w-10 h-10 mb-3 text-cyan-400" />
                    <p className="text-xs font-mono max-w-xs">
                      Click <strong className="text-neutral-200">"Run Autonomous Task"</strong> above to see how Nexovira agents execute tools with sub-second latency.
                    </p>
                  </div>
                )}
              </div>

              {isCompleted && (
                <div className="mt-6 pt-4 border-t border-neutral-800">
                  <button
                    onClick={onBookCall}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Deploy This Agent For Your Business</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
