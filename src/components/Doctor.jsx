import React from 'react';
import { Award, GraduationCap, Users, Check, Sparkles, Medal } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem, TiltCard, Magnetic } from './ScrollReveal';

export default function Doctor({ setCurrentPage }) {
  return (
    <section id="doctor" className="relative py-28 bg-slate-50/40 overflow-hidden border-t border-slate-100">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_0.75px,transparent_0.75px),linear-gradient(to_bottom,#e2e8f0_0.75px,transparent_0.75px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_60%,transparent_100%)] opacity-35" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/8 rounded-full blur-3xl -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-brand-accent/8 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Doctor Image & Video Column - Overlapping Magazine Style */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-full h-[480px] sm:h-[580px] max-w-[440px] mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-brand-light rounded-[40px] rotate-3 transition-transform duration-500 hover:rotate-6" />
              
              {/* Asymmetric blueprint dotted background grid */}
              <div className="absolute -inset-6 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] -z-10 opacity-30 rounded-[36px]" />
              
              {/* Main Portrait Card */}
              <div className="absolute top-0 left-0 w-[84%] z-10">
                <ScrollReveal>
                  <TiltCard>
                    <div className="relative rounded-[32px] overflow-hidden shadow-[0_25px_60px_rgba(29,78,216,0.12)] border-[8px] border-white bg-white group">
                      <img 
                        src="/assets/dr_mitchell_portrait.png" 
                        alt="Dr. Sarah Mitchell - Lead Dentist" 
                        className="w-full h-[400px] object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                      />
                      {/* Experience Badge with soft pulse dot */}
                      <div className="absolute top-4 left-4 bg-slate-900/90 text-white font-extrabold text-[10px] px-4 py-2 rounded-full tracking-wider uppercase backdrop-blur-md border border-white/10 shadow-lg flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        15+ Years Experience
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              </div>

              {/* Treatment Video Action Card */}
              <div className="absolute bottom-6 right-0 w-[62%] z-20">
                <ScrollReveal delay={200}>
                  <TiltCard>
                    <div className="relative rounded-[28px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.18)] border-[6px] border-white bg-white group transition-transform duration-300 hover:scale-[1.03]">
                      <div className="aspect-video w-full overflow-hidden bg-slate-100">
                        <video 
                          src="/assets/doctecleaningtheeth.mp4" 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity" 
                        />
                      </div>
                      {/* Floating procedure caption overlay */}
                      <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-slate-100 flex items-center justify-between shadow-sm">
                        <span className="text-[9px] font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Procedure
                        </span>
                        <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider">Hygiene Care</span>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              </div>

            </div>
          </div>

          {/* Doctor Credentials Column */}
          <div className="lg:col-span-7 text-left relative">
            
            <ScrollReveal delay={100}>
              <div className="inline-flex items-center gap-1.5 bg-brand-blue/5 border border-brand-blue/15 px-4 py-1.5 rounded-full">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
                  Meet the Founder
                </span>
              </div>
              
              <h2 className="font-sans font-black text-4xl sm:text-5xl text-slate-900 leading-tight mt-6 mb-2 tracking-tight">
                Dr. Sarah Mitchell, <span className="bg-gradient-to-r from-brand-blue via-brand-accent to-indigo-600 bg-clip-text text-transparent">DDS, MSD</span>
              </h2>
              
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-blue" />
                <p className="text-xs sm:text-sm font-black text-brand-blue uppercase tracking-wider">
                  Lead Prosthodontist & Oral Architect
                </p>
              </div>
              
              <div className="space-y-5 text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8">
                <p>
                  Dr. Sarah Mitchell is a board-certified prosthodontist who has dedicated her career to restoring and enhancing natural smiles. Over the past 15 years, she has earned a reputation for combining clinical precision with an artistic touch, producing beautiful, natural outcomes.
                </p>
                <p>
                  She graduated with honors from Harvard School of Dental Medicine and completed her residency and Master of Science in Dentistry (MSD) at the University of Washington. Committed to lifelong education, she remains at the forefront of digital dentistry and advanced implant surgery.
                </p>
              </div>

              {/* Clinical Focus List */}
              <div className="mb-8">
                <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-wider mb-4">Clinical Focus & Expertise</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Full Mouth Restoration",
                    "Cosmetic Smile Design",
                    "Advanced Implant Surgery",
                    "Minimally Invasive Care"
                  ].map((focus, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-brand-blue/15 hover:shadow-[0_4px_12px_rgba(29,78,216,0.04)]"
                    >
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-700 text-sm font-bold">{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature layout with custom SVG Calligraphy stamp */}
              <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brand-blue/5 to-brand-accent/5 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                  <svg className="w-52 h-16 relative z-10 transition-transform duration-300 group-hover:scale-[1.03]" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="signature-ink-premium" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f172a" />
                        <stop offset="30%" stopColor="#1e3a8a" />
                        <stop offset="70%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e293b" />
                      </linearGradient>
                    </defs>
                    <g transform="rotate(-1.5 110 30)">
                      {/* Clean, fluid vector strokes representing 'Dr. Sarah Mitchell' */}
                      <path 
                        d="M 12 36 C 8 20, 22 4, 28 14 C 32 20, 18 42, 24 44 C 29 45, 36 34, 39 30 C 42 25, 45 28, 44 34 C 43 40, 48 42, 50 37 C 52 32, 56 32, 56 38 C 56 44, 60 42, 63 26 C 66 14, 68 8, 66 22 C 64 36, 68 44, 72 44 C 76 44, 82 34, 86 34 C 90 34, 93 44, 96 44" 
                        stroke="url(#signature-ink-premium)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      <path 
                        d="M 104 20 C 100 8, 112 30, 110 44 C 109 52, 118 24, 120 26 C 122 28, 118 42, 122 42 C 126 42, 130 34, 131 30 C 132 26, 135 20, 134 32 C 133 40, 137 42, 139 38 C 141 34, 146 16, 144 26 C 143 36, 144 42, 148 42 C 151 42, 156 34, 156 28 C 156 22, 161 12, 158 26 C 157 36, 158 42, 163 42 C 168 42, 174 32, 181 30 C 188 28, 196 36, 192 39" 
                        stroke="url(#signature-ink-premium)" 
                        strokeWidth="2.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                      />
                      {/* Stylish abstract flourish underline */}
                      <path 
                        d="M 16 48 C 45 53, 90 54, 130 52 C 160 50.5, 192 46, 206 40 C 212 37, 215 32, 208 30 C 196 26, 165 34, 132 40 C 95 46.5, 50 49, 28 47 C 15 45.5, 8 41, 18 38 C 30 35, 75 30, 120 28 C 165 26, 198 29, 210 32" 
                        stroke="url(#signature-ink-premium)" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        opacity="0.8"
                      />
                      {/* Small elegant crossing dot for the 'i' */}
                      <circle cx="121" cy="18" r="1.5" fill="#2563eb" />
                    </g>
                  </svg>
                </div>
                <div className="hidden sm:block h-px flex-grow bg-slate-200/60 max-w-[120px]" />
                <div className="flex items-center gap-1.5 bg-amber-50 text-amber-700 border border-amber-200/50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  <Medal className="w-3.5 h-3.5" />
                  ABP Board Certified
                </div>
              </div>

              {/* Credentials Grid with premium glassmorphism hover */}
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-slate-100 pt-8">
                
                <StaggerItem>
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/70 hover:border-brand-blue/20 hover:shadow-[0_20px_40px_rgba(29,78,216,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-blue border border-brand-blue/10 shadow-inner relative z-10 transition-transform duration-350 group-hover:scale-105 group-hover:rotate-6">
                      <GraduationCap className="w-5.5 h-5.5" />
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Education</h4>
                      <p className="text-sm font-black text-slate-800">DDS, Harvard</p>
                      <p className="text-xs font-bold text-slate-500">MSD, Washington</p>
                    </div>
                  </div>
                </StaggerItem>
                
                <StaggerItem>
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/70 hover:border-brand-blue/20 hover:shadow-[0_20px_40px_rgba(29,78,216,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-blue border border-brand-blue/10 shadow-inner relative z-10 transition-transform duration-350 group-hover:scale-105 group-hover:rotate-6">
                      <Award className="w-5.5 h-5.5" />
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Board Certified</h4>
                      <p className="text-sm font-black text-slate-800">Prosthodontics</p>
                      <p className="text-xs font-bold text-slate-500">Diplomate ABP</p>
                    </div>
                  </div>
                </StaggerItem>

                <StaggerItem>
                  <div className="flex items-start gap-4 p-4.5 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/70 hover:border-brand-blue/20 hover:shadow-[0_20px_40px_rgba(29,78,216,0.05)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="p-2.5 rounded-xl bg-brand-light text-brand-blue border border-brand-blue/10 shadow-inner relative z-10 transition-transform duration-350 group-hover:scale-105 group-hover:rotate-6">
                      <Users className="w-5.5 h-5.5" />
                    </div>
                    <div className="relative z-10 text-left">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1">Memberships</h4>
                      <p className="text-sm font-black text-slate-800">ADA & AACD</p>
                      <p className="text-xs font-bold text-slate-500">Active Delegate</p>
                    </div>
                  </div>
                </StaggerItem>

              </StaggerContainer>

              {/* Consultation Booking Direct Button with Magnetic wrapper */}
              <div className="mt-10 flex items-center justify-start">
                <Magnetic>
                  <a 
                    href="#appointment-form"
                    onClick={(e) => {
                      e.preventDefault();
                      if (setCurrentPage) setCurrentPage('appointment');
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-brand-blue hover:bg-brand-hover text-white font-extrabold text-[11px] sm:text-[12px] uppercase tracking-wider shadow-lg shadow-brand-blue/20 hover:shadow-xl hover:shadow-brand-blue/30 transition-all duration-300 group cursor-pointer text-center"
                  >
                    Book Consultation with Dr. Mitchell
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </Magnetic>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
