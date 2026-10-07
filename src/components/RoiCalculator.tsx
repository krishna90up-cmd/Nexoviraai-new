import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from 'lucide-react';

interface RoiCalculatorProps {
  onPlanSelected: (details: { hoursSaved: number; costSaved: number; planName: string }) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onPlanSelected }) => {
  const [teamSize, setTeamSize] = useState<number>(18);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [serviceFocus, setServiceFocus] = useState<string>('AI Automation & Autonomous Agents');

  // Calculations
  const weeklyHoursWasted = teamSize * hoursPerWeek;
  const annualHoursWasted = weeklyHoursWasted * 50;
  // Estimated automation efficiency: 72%
  const annualHoursSaved = Math.round(annualHoursWasted * 0.72);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);

  const recommendedTier = 
    annualCostSaved > 250000 
      ? 'Enterprise Transformation' 
      : annualCostSaved > 90000 
      ? 'Dedicated Engineering Pod' 
      : 'Agile Sprint MVP';

  return (
    <section className="py-20 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>FINANCIAL IMPACT</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">QUANTIFIABLE ROI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Calculate Your Automation Yield
          </h2>
          <p className="mt-3 text-neutral-300 text-base sm:text-lg">
            Estimate the direct capital and labor hours recovered by replacing repetitive manual processes 
            with Nexovira’s autonomous software and AI agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-neutral-900/40 border border-neutral-800 p-6 sm:p-8 space-y-6">
            
            {/* Team Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  Team Members in Manual Operations
                </label>
                <span className="text-sm font-mono font-bold text-cyan-400 tabular-nums">
                  {teamSize} people
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="100"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                <span>3 team members</span>
                <span>50</span>
                <span>100+</span>
              </div>
            </div>

            {/* Hours Spent per Week */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  Repetitive Hours Spent Per Member / Week
                </label>
                <span className="text-sm font-mono font-bold text-cyan-400 tabular-nums">
                  {hoursPerWeek} hrs/week
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="25"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                <span>2 hrs (Light)</span>
                <span>12 hrs (Data Entry)</span>
                <span>25 hrs (Severe)</span>
              </div>
            </div>

            {/* Average Blended Hourly Cost */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white">
                  Average Fully-Loaded Hourly Wage
                </label>
                <span className="text-sm font-mono font-bold text-cyan-400 tabular-nums">
                  ${hourlyRate} / hour
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="180"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-cyan-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mt-1">
                <span>$25/hr</span>
                <span>$90/hr</span>
                <span>$180/hr</span>
              </div>
            </div>

            {/* Service Focus */}
            <div>
              <label className="text-sm font-semibold text-white block mb-2">
                Target Implementation Focus
              </label>
              <select
                value={serviceFocus}
                onChange={(e) => setServiceFocus(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-neutral-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="AI Automation & Autonomous Agents">AI Automation & Autonomous Agents</option>
                <option value="Custom CRM & ERP Development">Custom CRM & ERP Development</option>
                <option value="Software Development & Web Development">Software Development & Web Development</option>
                <option value="Data Intelligence & BI Portals">Data Intelligence & BI Portals</option>
                <option value="Custom AI Tools & Micro-SaaS">Custom AI Tools & Micro-SaaS</option>
              </select>
            </div>

          </div>

          {/* Projected Yield Summary (Right 5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/60 border border-cyan-500/30 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-cyan-950/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono text-cyan-400">
                  PROJECTED ANNUAL SAVINGS
                </span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
                  Payback: &lt; 45 Days
                </span>
              </div>

              <div className="mt-6">
                <div className="text-4xl sm:text-5xl font-display font-black text-white tabular-nums tracking-tight">
                  ${annualCostSaved.toLocaleString()}
                </div>
                <p className="text-xs text-neutral-400 mt-1">
                  Estimated annual capital recovered from repetitive tasks
                </p>
              </div>

              <div className="mt-8 space-y-4 pt-6 border-t border-neutral-800">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Labor Hours Recovered:</span>
                  <span className="text-sm font-mono font-bold text-white tabular-nums">
                    {annualHoursSaved.toLocaleString()} hrs / year
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Weekly Team Capacity Gained:</span>
                  <span className="text-sm font-mono font-bold text-cyan-300 tabular-nums">
                    {Math.round(annualHoursSaved / 50)} hrs / week
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">Recommended Engagement:</span>
                  <span className="text-xs font-semibold text-emerald-400">
                    {recommendedTier}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <button
                onClick={() => onPlanSelected({
                  hoursSaved: annualHoursSaved,
                  costSaved: annualCostSaved,
                  planName: recommendedTier
                })}
                className="w-full py-3 px-4 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>Lock In Scope For {recommendedTier}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <p className="text-[11px] font-mono text-neutral-500 text-center mt-2">
                Includes complete source code transfer & zero licensing lock-in
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
