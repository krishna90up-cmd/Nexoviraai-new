import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Terminal, 
  Bot, 
  Code2, 
  Layers, 
  Check, 
  ShieldCheck, 
  Key, 
  Database,
  LineChart,
  Boxes,
  Zap,
  Sparkles
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { TechMarquee } from '../components/TechMarquee';
import { Hero } from '../components/Hero';
import { SERVICES, INDUSTRIES, CASE_STUDIES, TESTIMONIALS, PRICING_PLANS } from '../data/companyData';

export const HomePage: React.FC = () => {
  usePageMeta(
    "Enterprise AI & Autonomous Software Engineering",
    "Nexovira AI Solution builds custom software, autonomous AI agents, enterprise CRM & ERP systems, and scalable digital transformation architectures."
  );

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Enterprise Ecosystem Marquee */}
      <TechMarquee />

      {/* 3. Short Preview: Core Services */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-900">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>CORE ENGINEERING</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500">8 SPECIALIZED DOMAINS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Architectures Built for Machine Speed
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
                From autonomous multi-agent swarms and custom CRM/ERP platforms to high-concurrency web systems and strategic digital transformation.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-cyan-500/40 rounded-xl transition-all self-start md:self-auto"
            >
              <span>Explore All 8 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Featured Services Teaser */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div
                key={service.id}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-cyan-400 font-semibold">
                      0{idx + 1}.
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                      {service.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {service.subtitle}
                  </p>
                  <p className="text-xs text-neutral-300 mt-4 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-neutral-400">
                    {service.metrics}
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Short Preview: Agent Sandbox Simulator */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-950 to-neutral-900/90 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>INTERACTIVE EXECUTION BENCHMARK</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                  Test Autonomous Agent Swarms in Real-Time
                </h2>
                <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
                  Inspect how our deterministic AI workers parse multi-page PDFs, execute authenticated database queries, 
                  and reconcile complex business operations with sub-200ms decision latency.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/simulator"
                    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-md shadow-cyan-500/20"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Launch Dedicated Simulator</span>
                  </Link>
                  <span className="text-xs font-mono text-neutral-500">
                    Live simulation · No registration required
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-5 rounded-xl bg-neutral-950/80 border border-neutral-800 font-mono text-xs text-neutral-300 space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[11px] text-cyan-400">
                  <span>AGENT DISPATCH MONITOR</span>
                  <span className="text-emerald-400">STATUS: HEALTHY</span>
                </div>
                <div className="text-neutral-400">
                  &gt; Inbound procurement invoice: #INV-9921
                </div>
                <div className="text-cyan-300">
                  &gt; Multi-modal OCR extracted: 42 lines ($48,290.00)
                </div>
                <div className="text-emerald-400">
                  &gt; 3-Way ERP match confirmed: 0 variance
                </div>
                <div className="pt-2 text-[10px] text-neutral-500">
                  Simulate custom scenarios on the dedicated simulator page →
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Short Preview: Industries We Empower */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-900">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>VERTICAL FOCUS</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500">8 TARGET INDUSTRIES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Empowering Core Business Sectors
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
                We design specialized software architectures aligned with sector-specific regulatory boundaries and commercial models.
              </p>
            </div>

            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-cyan-500/40 rounded-xl transition-all self-start md:self-auto"
            >
              <span>Explore All 8 Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES.map((ind) => (
              <Link
                key={ind.id}
                to="/industries"
                className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-900/70 transition-all group block"
              >
                <div className="text-xs font-mono text-cyan-400 mb-1 group-hover:text-cyan-300">
                  {ind.category}
                </div>
                <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 line-clamp-2">
                  {ind.tagline}
                </p>
                <div className="mt-3 text-[11px] font-mono text-emerald-400">
                  {ind.sampleMetric}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Short Preview: Case Studies */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-900">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>PROVEN PRODUCTION RECORD</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500">REAL VERIFIABLE RESULTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Engineered for High-Stakes Demands
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
                Detailed breakdowns of problems faced, custom software deployed, and quantitative business results generated.
              </p>
            </div>

            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-cyan-500/40 rounded-xl transition-all self-start md:self-auto"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.slice(0, 2).map((cs) => (
              <div
                key={cs.id}
                className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                    <span className="text-cyan-400">{cs.industry}</span>
                    <span>{cs.category}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                    {cs.summary}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mt-6">
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-850">
                        <div className="text-sm font-display font-bold text-white tabular-nums">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-neutral-400 leading-tight">
                          {res.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-850 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-500">
                    Tech: {cs.technology.slice(0, 3).join(', ')}
                  </span>
                  <Link
                    to="/case-studies"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Short Preview: Pricing & Engagement Models */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-neutral-900">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>STRUCTURED ENGAGEMENT</span>
                <span aria-hidden="true">·</span>
                <span className="text-neutral-500">ZERO HIDDEN FEES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Predictable Sprint Pricing
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 max-w-xl">
                Fixed-scope sprint models with bi-weekly demonstrations, full code ownership, and 100% intellectual property transfer.
              </p>
            </div>

            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 bg-neutral-900/90 hover:bg-neutral-850 border border-neutral-800 hover:border-cyan-500/40 rounded-xl transition-all self-start md:self-auto"
            >
              <span>View Full Pricing & ROI Calculator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl flex flex-col justify-between ${
                  plan.badge
                    ? 'bg-neutral-900/80 border-2 border-cyan-500/80 shadow-xl shadow-cyan-950/30'
                    : 'bg-neutral-900/40 border border-neutral-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-400">{plan.timeline}</span>
                    {plan.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-400 text-neutral-950 font-bold">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-display font-bold text-white">
                    {plan.name}
                  </h3>
                  <div className="text-sm font-mono text-cyan-300 font-bold mt-1">
                    {plan.priceTag}
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-850">
                  <Link
                    to="/pricing"
                    className="block text-center py-2.5 px-4 text-xs font-bold rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  >
                    View Plan Scope & Features →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Verified Testimonials Strip */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block mb-2">
              EXECUTIVE ENDORSEMENTS
            </span>
            <h2 className="text-3xl font-display font-bold text-white">
              Client Proof Across High-Growth Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 flex flex-col justify-between"
              >
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed">
                  "{t.quote}"
                </p>

                <div className="mt-6 pt-4 border-t border-neutral-850">
                  <span className="text-xs font-mono text-emerald-400 block mb-2 font-semibold">
                    {t.metric}
                  </span>
                  <div className="text-xs font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-neutral-400">
                    {t.role}, <span className="text-neutral-300">{t.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Action Callout Banner */}
      <section className="py-20 bg-neutral-950 border-t border-neutral-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center mx-auto text-white font-bold text-xl">
            N
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight text-balance">
            Ready to Replace Operational Friction with Machine Velocity?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a 30-minute discovery call with our Senior Solutions Architects. 
            Receive a transparent technical scope and sprint proposal within 48 hours.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-xl transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <span>Book Discovery Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/faq"
              className="px-6 py-3.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-all"
            >
              Read Due Diligence & FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
