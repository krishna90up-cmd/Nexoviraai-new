import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/companyData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-neutral-950 relative border-t border-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-cyan-400 mb-3">
            <span>CLARITY & DILIGENCE</span>
            <span aria-hidden="true">·</span>
            <span className="text-neutral-400">COMMON INQUIRIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-neutral-300 text-sm sm:text-base">
            Everything you need to know about partnering with Nexovira AI Solution.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-neutral-800 bg-neutral-900/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
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
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-850">
                    <p>{faq.answer}</p>
                    <span className="text-[11px] font-mono text-cyan-400/80 block mt-3">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
