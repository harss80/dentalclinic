import React, { useState, useRef, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

export default function BeforeAfter() {
  const [positions, setPositions] = useState([50, 50, 50]);
  const interactedRef = useRef(false);
  const containerRefs = [useRef(null), useRef(null), useRef(null)];

  // Automatic introductory slider animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (interactedRef.current) return;
      
      let step = 0;
      let val = 50;
      
      const interval = setInterval(() => {
        if (interactedRef.current) {
          clearInterval(interval);
          return;
        }

        // Phase 1: Slide left to 30%
        if (step === 0) {
          val -= 1.5;
          if (val <= 30) {
            val = 30;
            step = 1;
          }
        }
        // Phase 2: Slide right to 70%
        else if (step === 1) {
          val += 2;
          if (val >= 70) {
            val = 70;
            step = 2;
          }
        }
        // Phase 3: Slide back to 50%
        else if (step === 2) {
          val -= 1.5;
          if (val <= 50) {
            val = 50;
            clearInterval(interval);
          }
        }

        setPositions([val, val, val]);
      }, 20);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleUserInteraction = (index, val) => {
    interactedRef.current = true;
    setPositions((prev) => {
      const copy = [...prev];
      copy[index] = val;
      return copy;
    });
  };

  const handleMove = (index, clientX) => {
    const ref = containerRefs[index].current;
    if (!ref) return;
    const rect = ref.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    
    handleUserInteraction(index, percentage);
  };

  const handleTouchMove = (index, e) => {
    if (e.touches && e.touches[0]) {
      handleMove(index, e.touches[0].clientX);
    }
  };

  const cases = [
    {
      title: 'Deep Cleaning & Plaque Removal',
      desc: 'Instant scaling and polishing treatment',
      beforeImage: '/assets/bad1teeth.webp',
      afterImage: '/assets/white1teeth.webp'
    },
    {
      title: 'Advanced Smile Alignment',
      desc: 'Orthodontic correction of gaps and alignment',
      beforeImage: '/assets/bad2teeth.webp',
      afterImage: '/assets/white2teeth.webp'
    },
    {
      title: 'Premium Cosmetic Veneers',
      desc: 'Complete smile restoration & color correction',
      beforeImage: '/assets/bad3teeth.webp',
      afterImage: '/assets/white3teeth.webp'
    }
  ];

  return (
    <section id="before-after" className="relative py-16 md:py-24 bg-brand-medium overflow-hidden">
      {/* Background radial soft light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/5 pb-8">
          <ScrollReveal className="max-w-2xl text-left">
            <span className="text-xs font-black text-brand-blue tracking-widest uppercase bg-brand-blue/10 px-4 py-2 rounded-full border border-brand-blue/20">
              Smile Transformations
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-white leading-tight mt-6 mb-4">
              Real Smiles. Real Stories.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
              See the life-changing results we create every day.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100} className="hidden lg:flex flex-shrink-0 text-left">
            <a 
              href="#before-after"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border border-white/20 hover:border-white text-white font-bold text-sm bg-transparent transition-all"
            >
              View Smile Gallery
            </a>
          </ScrollReveal>
        </div>

        {/* 3 Comparison Sliders Side-By-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <ScrollReveal key={idx} delay={idx * 150} className="flex flex-col items-center w-full">
              
              {/* Slider Box */}
              <div 
                ref={containerRefs[idx]}
                onTouchMove={(e) => handleTouchMove(idx, e)}
                className="relative aspect-[3/2] w-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-lg hover:shadow-2xl hover:border-white/20 transition-all duration-300 cursor-ew-resize select-none group/slider"
              >
                {/* AFTER Image (Full background) */}
                <img 
                  src={c.afterImage} 
                  alt={`${c.title} After`} 
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                />
                
                {/* After Badge */}
                <div className="absolute bottom-3 right-3 bg-brand-blue text-white font-black text-[9px] px-2.5 py-1 rounded-md z-20 shadow-sm border border-brand-blue/10 select-none">
                  AFTER
                </div>

                {/* BEFORE Image (Clipped Overlay wrapper) */}
                <div 
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" 
                  style={{ clipPath: `polygon(0 0, ${positions[idx]}% 0, ${positions[idx]}% 100%, 0 100%)` }}
                >
                  <img 
                    src={c.beforeImage} 
                    alt={`${c.title} Before`} 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  {/* Before Badge */}
                  <div className="absolute bottom-3 left-3 bg-white/95 text-slate-800 font-black text-[9px] px-2.5 py-1 rounded-md z-20 shadow-sm border border-slate-200/50 select-none">
                    BEFORE
                  </div>
                </div>

                {/* Vertical slider line divider */}
                <div 
                  className="absolute top-0 bottom-0 w-[2px] bg-white/50 z-30 pointer-events-none group-hover/slider:bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-colors"
                  style={{ left: `${positions[idx]}%` }}
                >
                  {/* Small round handle knob */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-brand-blue border-2 border-white flex items-center justify-center shadow-lg text-white z-40 transform transition-transform duration-300 group-hover/slider:scale-110 group-hover/slider:bg-brand-hover">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3 h-3 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" className="w-3 h-3 text-white -ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Range inputs overlay for clean slider mechanics */}
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={positions[idx]} 
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    handleUserInteraction(idx, val);
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
                />
              </div>

              {/* Case details caption */}
              <div className="text-left w-full mt-4">
                <h4 className="font-sans font-black text-sm text-white transition-colors hover:text-brand-blue">
                  {c.title}
                </h4>
                <p className="text-xs text-slate-400 font-bold mt-1">
                  {c.desc}
                </p>
              </div>

            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View Gallery Button */}
        <div className="flex justify-center mt-10 lg:hidden">
          <a 
            href="#before-after"
            className="w-full text-center inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/25 hover:border-white text-white font-black text-[11px] uppercase tracking-wider bg-transparent transition-all cursor-pointer"
          >
            View Smile Gallery
            <svg className="w-4 h-4 ml-2 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
