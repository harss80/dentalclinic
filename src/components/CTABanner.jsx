import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function CTABanner({ setCurrentPage }) {
  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      if (setCurrentPage) {
        setCurrentPage('home');
        setTimeout(() => {
          const el = document.querySelector(id);
          if (el) {
            const offset = 90;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = el.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 120);
      }
    }
  };

  return (
    <section id="cta" className="relative py-12 bg-white overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 relative">
        <ScrollReveal>
          {/* Banner Container Box */}
          <div className="rounded-[36px] bg-brand-blue text-white relative overflow-hidden flex flex-col md:flex-row md:items-center shadow-xl min-h-[480px] md:min-h-0 md:h-[280px]">
            
            {/* Background design accents */}
            <div className="absolute left-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl -z-10" />

            {/* Background grid pattern inside a clipped container */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Left Content (renders first on mobile, left on desktop) */}
            <div className="relative z-30 max-w-xl text-left p-8 sm:p-12 w-full md:w-[55%] flex flex-col items-start md:mt-0">
              <h2 className="font-sans font-black text-2.5xl sm:text-3xl lg:text-[36px] text-white leading-tight mb-4 tracking-tight">
                Ready to Transform <br className="hidden sm:inline" />
                Your Smile?
              </h2>
              <p className="text-xs sm:text-sm text-white/95 font-bold leading-relaxed mb-6 max-w-md">
                Book your appointment today and take the first step towards a healthier, brighter smile.
              </p>
              <button
                onClick={() => {
                  if (setCurrentPage) setCurrentPage('appointment');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-brand-blue hover:text-brand-hover font-bold text-xs sm:text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
              >
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Right Side Image (renders second at the bottom on mobile, absolute positioned on desktop) */}
            <div className="relative w-full h-[220px] md:h-full md:absolute md:right-0 md:top-0 md:bottom-0 md:w-[60%] z-10 flex-shrink-0 mt-auto">
              <img 
                src="/assets/readytotransformwithus.webp" 
                alt="Smiling Female Dentist" 
                className="w-full h-full object-cover object-[center_top] md:object-[35%_center] select-none pointer-events-none"
              />
              {/* Gradient Overlay for blending */}
              {/* Desktop Horizontal Gradient */}
              <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue via-45% to-transparent to-75% z-20" />
              {/* Mobile Vertical Gradient */}
              <div className="md:hidden absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand-blue to-transparent z-20" />
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
