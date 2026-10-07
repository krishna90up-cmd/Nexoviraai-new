import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, ShieldCheck, HelpCircle, Mail } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { FAQS, FaqItem } from '../data/companyData';

export const FaqPage: React.FC = () => {
  usePageMeta(
    "Frequently Asked Questions — Due Diligence & Engineering FAQ",
    "Comprehensive answers regarding Nexovira's IP ownership, zero-data-retention security, agile sprint timelines, legacy migrations, and custom software vs. SaaS."
  );

  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Security & IP', 'Architecture', 'Delivery & Cost'];

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter((f) => f.category === activeCategory);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="pt-28 pb-20 bg-neutral-950 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dedicated Page Hero */}
        <div className="pt-8 pb-14 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>TECHNICAL DUE DILIGENCE</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-500">FREQUENT INQUIRIES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
            Detailed answers regarding our intellectual property policy, data privacy architecture, 
            sprint delivery cadences, and integration capabilities.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-neutral-900 scrollbar-none">
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

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-850">
                    <p>{faq.answer}</p>
                    <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-cyan-400/80">
                      <span>Category: {faq.category}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 text-center space-y-4">
          <HelpCircle className="w-8 h-8 text-cyan-400 mx-auto" />
          <h3 className="text-xl font-display font-bold text-white">
            Have a Specific Architectural or Contractual Question?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mx-auto">
            Our Senior Engineering Leads can answer custom security compliance questions or review your proprietary technical requirements directly.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
            >
              <span>Contact Engineering Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
