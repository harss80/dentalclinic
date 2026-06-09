import React, { useRef, useState } from 'react';
import { 
  Home, 
  Play, 
  Users, 
  Award, 
  Shield, 
  DollarSign, 
  Heart, 
  Sparkles, 
  Smile, 
  Star, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  Percent,
  Activity,
  HeartHandshake
} from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem, TiltCard, Magnetic } from './ScrollReveal';
import TrustBanner from './TrustBanner';
import CTABanner from './CTABanner';

export default function AboutUs({ setCurrentPage }) {
  const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);
  const doctorRowRef = useRef(null);

  const specialists = [
    {
      name: "Dr. Priya Sharma",
      role: "Cosmetic Dentist",
      image: "/assets/dr_mitchell_portrait.png",
      fb: "#",
      li: "#",
      ig: "#"
    },
    {
      name: "Dr. Rahul Verma",
      role: "Orthodontist",
      image: "/assets/dr_marcus_vance.png",
      fb: "#",
      li: "#",
      ig: "#"
    },
    {
      name: "Dr. Sneha Kapoor",
      role: "Pediatric Dentist",
      image: "/assets/dr_elena_rostova.png",
      fb: "#",
      li: "#",
      ig: "#"
    },
    {
      name: "Dr. Amit Malhotra",
      role: "Oral Surgeon",
      image: "/assets/dr_david_kim.png",
      fb: "#",
      li: "#",
      ig: "#"
    }
  ];

  const handleScroll = (direction) => {
    if (doctorRowRef.current) {
      const { scrollLeft, clientWidth } = doctorRowRef.current;
      const scrollAmount = clientWidth / 2;
      doctorRowRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative pt-24 bg-white text-slate-700 antialiased font-sans selection:bg-brand-blue/10 selection:text-brand-blue overflow-x-hidden">
      
      {/* BREADCRUMB NAVIGATION */}
      <div className="max-w-[1240px] mx-auto px-6 pt-6">
        <nav className="flex items-center gap-2 text-xs font-bold text-slate-400">
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} 
            className="flex items-center gap-1 hover:text-brand-blue transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </a>
          <span className="opacity-50">/</span>
          <span className="text-slate-600 font-extrabold">About Us</span>
        </nav>
      </div>

      {/* SECTION 1: HERO SECTION */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side text contents */}
            <div className="lg:col-span-6 text-left">
              <ScrollReveal>
                <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 rounded-full">
                  About DentaCare
                </span>
                
                <h1 className="font-sans font-black text-4xl sm:text-5xl text-slate-900 leading-tight mt-6 mb-5 tracking-tight">
                  We're on a Mission to <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-brand-blue via-brand-accent to-indigo-600 bg-clip-text text-transparent">
                    Redefine Dental Care
                  </span>
                </h1>
                
                <p className="text-base text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
                  At DentaCare, we believe every smile tells a story. Our mission is to deliver exceptional dental care with compassion, advanced technology, and a patient-first approach.
                </p>

                {/* Two small horizontal stats cards */}
                <div className="flex flex-col sm:flex-row gap-5 max-w-md">
                  <div className="flex-1 flex items-center gap-4.5 p-4.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/15 hover:bg-white hover:shadow-[0_15px_30px_rgba(29,78,216,0.04)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Users className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 leading-tight">10K+</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Happy Patients</p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center gap-4.5 p-4.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-blue/15 hover:bg-white hover:shadow-[0_15px_30px_rgba(29,78,216,0.04)] transition-all duration-300">
                    <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Award className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 leading-tight">15+</h4>
                      <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Years of Experience</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right side operatory image with video play button */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              
              {/* Dot blueprint decorative background */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[radial-gradient(#3b82f6_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-40 -z-10" />
              
              <ScrollReveal delay={200} className="w-full">
                <TiltCard>
                  <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border-[8px] border-white bg-slate-100 group">
                    <img 
                      src="/assets/modern_dentist_operatory.png" 
                      alt="Modern Dental Clinic Operatory Room" 
                      className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-103" 
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/25 transition-colors duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white text-brand-blue flex items-center justify-center shadow-xl shadow-slate-950/10 cursor-pointer transform group-hover:scale-110 transition-transform duration-350 relative">
                        <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping" />
                        <Play className="w-6 h-6 fill-current stroke-none ml-1 relative z-10" />
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US (Core competencies row of 6) */}
      <section className="py-20 bg-slate-50/60 border-y border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          
          <ScrollReveal className="mb-14">
            <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-4 mb-2 tracking-tight">
              Care You Can Trust, Results You'll <span className="bg-gradient-to-r from-brand-blue to-brand-accent bg-clip-text text-transparent">Love</span>
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 text-left">
            
            {[
              {
                icon: <Smile className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Advanced Technology",
                desc: "We use the latest dental technology for accurate diagnosis and effective treatments."
              },
              {
                icon: <Users className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Experienced Professionals",
                desc: "Our skilled dentists bring years of expertise to provide the best care for you and your family."
              },
              {
                icon: <HeartHandshake className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Patient-Centered Approach",
                desc: "Your comfort and satisfaction are at the heart of everything we do."
              },
              {
                icon: <Activity className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Comprehensive Care",
                desc: "From routine checkups to advanced treatments, we cover all your dental needs."
              },
              {
                icon: <ShieldCheck className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Safe & Hygienic",
                desc: "We maintain the highest standards of hygiene and sterilization for your safety."
              },
              {
                icon: <Percent className="w-5.5 h-5.5 text-brand-blue" />,
                title: "Affordable Pricing",
                desc: "Quality dental care that fits your budget with transparent pricing."
              }
            ].map((card, index) => (
              <StaggerItem key={index}>
                <div className="p-6 rounded-[24px] bg-white border border-slate-200/60 hover:border-brand-blue/20 hover:shadow-[0_15px_30px_rgba(29,78,216,0.04)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col items-start group">
                  <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center mb-5 flex-shrink-0 border border-brand-blue/5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>
                  <h3 className="font-sans font-black text-sm text-slate-800 mb-2 leading-tight group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[11.5px] text-slate-400 font-bold leading-relaxed mt-auto">
                    {card.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}

          </StaggerContainer>

        </div>
      </section>

      {/* SECTION 3: OUR STORY (Landscape Split with absolute patient count card) */}
      <section className="py-24 max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 text-left">
            <ScrollReveal>
              <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase bg-brand-blue/5 border border-brand-blue/10 px-4 py-1.5 rounded-full">
                Our Story
              </span>
              
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-6 mb-5 tracking-tight">
                A Legacy of <span className="bg-gradient-to-r from-brand-blue via-brand-accent to-indigo-600 bg-clip-text text-transparent">Healthy Smiles</span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-500 font-semibold leading-relaxed mb-8">
                Founded with a vision to provide world-class dental care in a comfortable environment, DentaCare has grown into a trusted name in the community. Our journey is built on trust, innovation, and thousands of beautiful smiles.
              </p>

              <Magnetic>
                <button
                  onClick={() => {
                    const el = document.getElementById('experts');
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-hover text-white font-extrabold text-[11px] uppercase tracking-wider shadow-md shadow-brand-blue/15 hover:shadow-lg transition-all duration-300 group"
                >
                  Meet Our Dentists
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Magnetic>
            </ScrollReveal>
          </div>

          {/* Right Image Column with overlapping Blue Card */}
          <div className="lg:col-span-7 relative flex justify-center items-center">
            
            <ScrollReveal delay={200} className="w-full">
              <TiltCard>
                <div className="relative rounded-[32px] overflow-hidden shadow-[0_25px_50px_rgba(0,0,0,0.1)] border-[8px] border-white bg-slate-50 group">
                  <img 
                    src="/assets/happy_family_dentist.png" 
                    alt="Happy Family and Dentists Smiling" 
                    className="w-full h-[360px] object-cover transition-transform duration-700 group-hover:scale-102" 
                  />

                  {/* Overlapping Blue Badge Card */}
                  <div className="absolute bottom-6 right-6 p-5 rounded-[22px] bg-brand-blue text-white shadow-xl max-w-[210px] z-20 border border-white/10 text-left">
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:8px_8px] opacity-20" />
                    
                    <h4 className="text-xl font-black leading-none mb-1">10K+</h4>
                    <p className="text-[10px] font-bold text-slate-200 uppercase tracking-wider mb-4">Happy Patients</p>
                    
                    <div className="flex items-center">
                      <div className="flex -space-x-2.5 overflow-hidden">
                        {[
                          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100",
                          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
                          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=100",
                          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100"
                        ].map((src, i) => (
                          <img 
                            key={i} 
                            className="inline-block h-6.5 w-6.5 rounded-full ring-2 ring-brand-blue object-cover" 
                            src={src} 
                            alt="Patient Review Avatar" 
                          />
                        ))}
                      </div>
                      <div className="ml-3 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center cursor-pointer transition-colors shadow-sm">
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* SECTION 4: OUR VALUES (Centered Blue Bar layout with Glassmorphism) */}
      <section className="py-16 max-w-[1240px] mx-auto px-6">
        <ScrollReveal>
          <div className="rounded-[40px] bg-brand-blue text-white p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden shadow-2xl shadow-brand-blue/15">
            {/* White dots decoration grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span className="text-[10px] font-black text-white tracking-widest uppercase">
                  Our Values
                </span>
              </div>
              
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-16 tracking-tight max-w-2xl mx-auto leading-tight">
                Guided by Values, Driven by Care
              </h2>
              
              {/* Four columns values grid with brand-blue themed cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                
                {[
                  {
                    icon: <Heart className="w-5.5 h-5.5 text-brand-blue" />,
                    title: "Integrity",
                    desc: "We believe in honest communication and ethical care."
                  },
                  {
                    icon: <Users className="w-5.5 h-5.5 text-brand-blue" />,
                    title: "Compassion",
                    desc: "We treat every patient with empathy and respect."
                  },
                  {
                    icon: <Star className="w-5.5 h-5.5 text-brand-blue" />,
                    title: "Excellence",
                    desc: "We are committed to continuous learning and excellence."
                  },
                  {
                    icon: <Smile className="w-5.5 h-5.5 text-brand-blue" />,
                    title: "Community",
                    desc: "We care for our community and contribute to its well-being."
                  }
                ].map((val, idx) => (
                  <div 
                    key={idx} 
                    className="p-6.5 rounded-[24px] bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-start"
                  >
                    {/* Circle icon container: solid white with brand blue icon */}
                    <div className="w-12 h-12 rounded-2xl bg-white text-brand-blue flex items-center justify-center mb-6 shadow-md transition-transform duration-300 transform group-hover:scale-105 group-hover:rotate-6">
                      {val.icon}
                    </div>
                    
                    <h4 className="text-base font-black text-white mb-2.5 leading-tight tracking-tight">
                      {val.title}
                    </h4>
                    
                    <p className="text-[12px] text-blue-50 font-medium leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 5: MEET OUR EXPERTS */}
      <section id="experts" className="py-24 max-w-[1240px] mx-auto px-6">
        
        {/* Header container */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 text-left">
          <div>
            <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase">
              Meet Our Experts
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-4 tracking-tight">
              The Specialists Behind Your Smile
            </h2>
          </div>
          
          <div className="flex items-center gap-4 mt-6 sm:mt-0">
            {/* View All button */}
            <button
              onClick={() => {
                const el = document.getElementById('footer');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-xs font-black text-brand-blue hover:text-brand-hover transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              View All Dentists
              <ArrowRight className="w-4 h-4" />
            </button>
            
            {/* Carousel Arrow Navs */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleScroll('left')}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 hover:border-brand-blue/30 text-slate-600 hover:text-brand-blue flex items-center justify-center transition-all duration-300"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => handleScroll('right')}
                className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200 hover:border-brand-blue/30 text-slate-600 hover:text-brand-blue flex items-center justify-center transition-all duration-300"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Doctor Cards container */}
        <div 
          ref={doctorRowRef}
          className="flex overflow-x-auto gap-6 scrollbar-hide pb-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {specialists.map((doc, idx) => (
            <div 
              key={idx} 
              className="min-w-[280px] sm:min-w-[320px] lg:min-w-[280px] lg:flex-1 snap-start"
            >
              <TiltCard>
                <div className="rounded-[28px] overflow-hidden bg-white border border-slate-200/60 hover:border-brand-blue/20 hover:shadow-[0_15px_35px_rgba(29,78,216,0.05)] transition-all duration-300 group text-left">
                  
                  {/* Portrait Frame */}
                  <div className="aspect-[4/5] bg-slate-50 overflow-hidden relative">
                    <img 
                      src={doc.image} 
                      alt={doc.name} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-104" 
                    />
                    
                    {/* Social Hover Overlay */}
                    <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <a href={doc.fb} className="w-8.5 h-8.5 rounded-full bg-white hover:bg-brand-blue text-slate-800 hover:text-white flex items-center justify-center shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V2h-3a5 5 0 0 0-5 5v1z" />
                        </svg>
                      </a>
                      <a href={doc.li} className="w-8.5 h-8.5 rounded-full bg-white hover:bg-brand-blue text-slate-800 hover:text-white flex items-center justify-center shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a href={doc.ig} className="w-8.5 h-8.5 rounded-full bg-white hover:bg-brand-blue text-slate-800 hover:text-white flex items-center justify-center shadow-md transition-all duration-200">
                        <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="p-5">
                    <h4 className="font-sans font-black text-base text-slate-900 mb-0.5 group-hover:text-brand-blue transition-colors">
                      {doc.name}
                    </h4>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {doc.role}
                    </p>
                  </div>

                </div>
              </TiltCard>
            </div>
          ))}
        </div>

      </section>

      {/* SECTION 6: SOCIAL PROOF / REVIEWS ROW */}
      <TrustBanner />

      {/* SECTION 7: FINAL CONTACT CTA BANNER */}
      <CTABanner setCurrentPage={setCurrentPage} />

    </div>
  );
}
