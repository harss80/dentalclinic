import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const faqs = [
    {
      question: 'What should I expect during my first dental visit?',
      answer: 'Your first visit includes a comprehensive oral examination, digital X-rays (if needed), and a gentle cleaning. Dr. Mitchell will inspect your teeth, gums, and bite structure, and collaborate with you to outline a customized preventive or restorative plan.'
    },
    {
      question: 'How often should I visit the dentist for a checkup?',
      answer: 'For most children and adults, we recommend scheduling professional cleanings and examinations twice a year (every 6 months). Patients with underlying periodontal disease or prone to dental decay may benefit from more frequent visits.'
    },
    {
      question: 'Are professional teeth whitening treatments safe?',
      answer: 'Absolutely. Under professional supervision, teeth whitening is a highly safe cosmetic procedure. We utilize clinically approved hydrogen peroxide gels paired with protective barriers to safeguard your gums and minimize post-treatment sensitivity.'
    },
    {
      question: 'What is the difference between braces and clear aligners?',
      answer: 'Traditional ceramic braces use high-precision brackets and wire guides to adjust teeth coordinates. Clear aligners (like Invisalign) use custom, transparent, removable plastic trays. Clear aligners are virtually invisible and make brushing/eating easier, but braces are sometimes preferred for severe structural corrections.'
    },
    {
      question: 'What is the average lifespan of a dental implant?',
      answer: 'With excellent oral hygiene and routine dental examinations, dental implants can last a lifetime. The biocompatible titanium post fuses directly with your jawbone, acting as a permanent root. The prosthetic crown mounted on top typically lasts 15 to 20 years before requiring minor wear-and-tear maintenance.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[840px] mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <ScrollReveal>
            <span className="text-xs font-black text-brand-blue tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full border border-brand-blue/15">
              Common Questions
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-6 mb-4">
              Frequently Asked <span className="text-brand-blue">Questions</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Find clear diagnostic answers to queries regarding dental treatments, safety protocols, and clinic procedures.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-blue/20 bg-brand-light/35 shadow-[0_15px_30px_rgba(29,78,216,0.03)] border-l-4 border-l-brand-blue' 
                    : 'border-slate-200/60 bg-slate-50/40 hover:border-slate-300 hover:bg-slate-50/60'
                }`}>
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                  >
                    <span className={`font-sans font-black text-sm sm:text-base transition-colors duration-300 ${
                      isOpen ? 'text-brand-blue font-extrabold' : 'text-slate-800 hover:text-brand-blue'
                    }`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180 text-brand-blue' : ''
                    }`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-500 font-bold leading-relaxed border-t border-slate-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <ScrollReveal delay={250}>
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3.5 bg-slate-50 border border-slate-200/60 p-5 rounded-[24px] shadow-sm">
              <span className="text-xs sm:text-sm font-semibold text-slate-500">Still have unanswered questions?</span>
              <a 
                href="https://wa.me/+919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all cursor-pointer shadow-md"
              >
                <MessageCircle className="w-4.5 h-4.5 mr-1.5" />
                Chat on WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
