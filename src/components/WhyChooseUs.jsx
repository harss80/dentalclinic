import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Heart, Shield } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyChooseUs() {
  const [activeVideo, setActiveVideo] = useState(null); // 'walkthrough', 'cleaning', or null

  const benefits = [
    'Advanced Dental Technology',
    'Experienced & Caring Dentists',
    'Painless & Comfortable Treatments',
    'Sterilized & Safe Environment',
    'Affordable & Transparent Pricing'
  ];

  return (
    <section id="why-us" className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Background blurs */}
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-[1240px] mx-auto px-6 relative">
        
        {/* Three Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 items-stretch">
          
          {/* Column 1: Bullets List (lg:col-span-4) */}
          <div className="md:col-span-1 lg:col-span-4 text-left flex flex-col justify-center">
            <ScrollReveal>
              <span className="text-[11px] font-black text-brand-blue tracking-widest uppercase">
                Why Choose Us
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-6 mb-5">
                Advanced Care for a <br />
                Healthier <span className="text-brand-blue">Smile</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-8">
                We combine expertise, technology, and compassion to deliver the best dental experience.
              </p>
            </ScrollReveal>

            {/* Bullets with premium solid checkmarks */}
            <ScrollReveal delay={100}>
              <div className="flex flex-col gap-4 mb-9">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 text-sm font-bold text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-brand-blue flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      <svg className="w-3 h-3 fill-none stroke-current stroke-[3]" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <a 
                href="#appointment-form"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-hover text-white font-bold text-sm shadow-md shadow-brand-blue/10 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Learn More About Us
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>

          {/* Column 2: Video Walkthrough Card (lg:col-span-4) */}
          <div className="md:col-span-1 lg:col-span-4 flex items-stretch">
            <ScrollReveal delay={200} className="w-full aspect-video lg:aspect-square rounded-[28px] overflow-hidden shadow-md border border-slate-200 bg-slate-100 relative group cursor-pointer" onClick={() => setActiveVideo('walkthrough')}>
              <img 
                src="/assets/dentistoffice.jpg" 
                alt="Clinic Video Walkthrough" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                {/* Play Button Overlay with dual glowing pulse wave */}
                <div className="w-16 h-16 rounded-full bg-white shadow-2xl flex items-center justify-center text-brand-blue transform group-hover:scale-110 transition-all duration-350 relative">
                  <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping pointer-events-none" />
                  <span className="absolute inset-2 rounded-full bg-white/70 opacity-30 animate-pulse pointer-events-none" />
                  <Play className="w-5.5 h-5.5 fill-current translate-x-0.5 text-brand-blue relative z-10" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 3: Stacked metrics cards (lg:col-span-4) */}
          <div className="md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-between gap-4 lg:gap-6 py-1 h-full">
            
            {/* Card 1: Checkup Image Card (Plays Video - hidden on mobile/tablet, visible on desktop) */}
            <ScrollReveal delay={150} className="hidden lg:flex flex-col h-full w-full">
              <div 
                onClick={() => setActiveVideo('cleaning')}
                className="w-full aspect-video lg:h-full rounded-[24px] overflow-hidden shadow-sm border border-slate-100 group relative cursor-pointer"
              >
                <img 
                  src="/assets/docterchekingimage.jpg" 
                  alt="Dentist Checking Patient" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/5 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  {/* Small Play Button Overlay */}
                  <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center text-brand-blue opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 relative">
                    <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping pointer-events-none" />
                    <Play className="w-4 h-4 fill-current translate-x-0.5 text-brand-blue relative z-10" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Experience (Gradient Background + Glassmorphic Icons) */}
            <ScrollReveal delay={200} className="w-full">
              <div className="w-full h-[90px] lg:h-[110px] rounded-[20px] bg-gradient-to-r from-brand-blue to-brand-accent text-white px-6 shadow-md relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-between gap-4">
                <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex flex-col text-left relative z-10">
                  <div className="text-[32px] lg:text-[38px] font-black tracking-tight leading-none mb-0.5">
                    15+
                  </div>
                  <h4 className="text-[10px] lg:text-[11px] font-medium text-white/90 tracking-wide">
                    Years of Experience
                  </h4>
                </div>
                {/* Premium Glassmorphic white outline icons on the right */}
                <div className="flex items-center gap-2 flex-shrink-0 relative z-10">
                  <div className="w-8.5 h-8.5 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white shadow-sm hover:bg-white/10 transition-colors">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className="w-8.5 h-8.5 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center text-white shadow-sm hover:bg-white/10 transition-colors">
                    <Shield className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Happy Patients (Light Grey Background + Avatar Stack) */}
            <ScrollReveal delay={250} className="w-full">
              <div className="w-full h-[90px] lg:h-[110px] rounded-[20px] bg-gradient-to-br from-slate-50 to-slate-100/70 px-6 shadow-sm border border-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow flex items-center justify-between gap-4">
                <div className="flex flex-col text-left">
                  <div className="text-[32px] lg:text-[38px] font-black tracking-tight leading-none mb-0.5 text-slate-900">
                    10K+
                  </div>
                  <h4 className="text-[10px] lg:text-[11px] font-medium text-slate-500 tracking-wide">
                    Happy Patients
                  </h4>
                </div>
                
                {/* Avatar Stack on the right */}
                <div className="flex -space-x-2.5 flex-shrink-0">
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80" alt="patient 1" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=80" alt="patient 2" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop&q=80" alt="patient 3" />
                  <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm transition-transform duration-300 hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=80" alt="patient 4" />
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <button 
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full relative bg-black">
                <video 
                  src={
                    activeVideo === 'walkthrough' 
                      ? "/assets/docterchecking%20theeth.mp4" 
                      : "/assets/doctecleaningtheeth.mp4"
                  }
                  controls 
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

