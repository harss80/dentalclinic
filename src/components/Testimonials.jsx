import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isHovered, setIsHovered] = useState(false);
  const interactedRef = useRef(false);

  const testimonials = [
    {
      text: "Amazing experience! The team is so professional and friendly. My smile has never looked better.",
      name: "Priya Sharma",
      role: "Verified Patient • Teeth Whitening",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      stars: 5
    },
    {
      text: "The best dental clinic I've ever visited. Highly recommend for anyone looking for quality care.",
      name: "Rahul Verma",
      role: "Verified Patient • Root Canal Treatment",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      stars: 5
    },
    {
      text: "Very comfortable environment and painless treatment. Thank you, DentaCare!",
      name: "Seema Kapoor",
      role: "Verified Patient • Invisalign Aligners",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      stars: 5
    },
    {
      text: "Had a complete smile makeover with veneers. The results exceeded my expectations. Dr. Mitchell and the team are true artists.",
      name: "Vikram Malhotra",
      role: "Verified Patient • Cosmetic Veneers",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      stars: 5
    },
    {
      text: "Excellent service and care. They sorted out my dental issues in just two visits. Extremely professional doctors.",
      name: "Ananya Sen",
      role: "Verified Patient • Dental Implants",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
      stars: 5
    }
  ];

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered || interactedRef.current) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    interactedRef.current = true;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    interactedRef.current = true;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAvatarClick = (idx) => {
    interactedRef.current = true;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Framer Motion slide variants
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : dir < 0 ? -80 : 0,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : dir > 0 ? -80 : 0,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="testimonials" className="relative py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Background blurs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-[1240px] mx-auto px-6 relative">
        
        {/* Two Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Title & Rating Stats */}
          <div className="lg:col-span-5 text-center lg:text-left flex flex-col justify-between py-2">
            <div>
              <ScrollReveal>
                <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase bg-brand-light px-3.5 py-1.5 rounded-full border border-brand-blue/10 inline-block mb-4">
                  TESTIMONIALS
                </span>
                <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-2 mb-3 block">
                  What Our Patients Say
                </h2>
                <div className="w-12 h-1 bg-brand-blue mx-auto lg:mx-0 mb-6 rounded-full" />
                <p className="hidden lg:block text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                  We take pride in providing exceptional care that transforms smiles and lives. Discover stories from our verified patients.
                </p>
              </ScrollReveal>

              {/* Rating Summary Card (visible only on desktop to keep mobile neat) */}
              <ScrollReveal delay={100} className="hidden lg:block">
                <div className="mt-8 flex items-center gap-6 p-5 rounded-2xl bg-slate-50 border border-slate-100 max-w-[340px]">
                  <div className="text-4xl font-black text-slate-900 leading-none">
                    4.9
                  </div>
                  <div className="flex flex-col text-left">
                    <div className="flex text-amber-500 gap-0.5">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current animate-pulse" />
                    </div>
                    <span className="text-xs text-slate-400 font-black uppercase tracking-wider mt-1">
                      Over 2,500+ Reviews
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Navigation Chevrons (Desktop Only) */}
            <ScrollReveal delay={150} className="hidden lg:flex items-center gap-3 mt-10">
              <button 
                onClick={handlePrev}
                className="w-11 h-11 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all cursor-pointer hover:-translate-y-0.5 active:scale-95"
                aria-label="Previous Testimonial"
              >
                <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-11 h-11 rounded-xl bg-brand-blue hover:bg-brand-hover flex items-center justify-center text-white transition-all shadow-md shadow-brand-blue/10 cursor-pointer hover:-translate-y-0.5 active:scale-95"
                aria-label="Next Testimonial"
              >
                <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Testimonial Slider */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Mobile/Tablet Vertical Stack (lg:hidden) */}
            <div className="flex flex-col gap-4 lg:hidden mb-8">
              {testimonials.slice(0, 3).map((t, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-100 rounded-[20px] p-5 shadow-[0_8px_30px_rgba(29,78,216,0.02)] text-left relative flex flex-col gap-3.5"
                >
                  <Quote className="w-5 h-5 text-brand-blue fill-current" />
                  
                  {/* Feedback Text */}
                  <p className="font-sans font-medium text-slate-700 italic text-[11.5px] leading-relaxed pr-4">
                    "{t.text}"
                  </p>

                  {/* Author Details */}
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3.5">
                    <img 
                      src={t.avatar} 
                      alt={t.name} 
                      className="w-8.5 h-8.5 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div className="flex items-center gap-2.5">
                      <h4 className="font-sans font-black text-xs text-slate-950">
                        {t.name}
                      </h4>
                      {/* Stars */}
                      <div className="flex text-amber-500 gap-0.5">
                        {[...Array(t.stars)].map((_, i) => (
                          <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Mobile Testimonials Pagination Dots */}
              <div className="flex justify-center items-center gap-2 mt-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
              </div>
            </div>

            {/* Animated Testimonial Card */}
            <div 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="hidden lg:flex relative min-h-[340px] sm:min-h-[300px] bg-slate-50 border border-slate-100 rounded-[32px] p-8 sm:p-10 shadow-md flex-col justify-between overflow-hidden text-left"
            >
              {/* Decorative background quote mark */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-200/40 pointer-events-none fill-current" />
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="flex flex-col justify-between h-full w-full"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex text-amber-500 gap-1 mb-5">
                      {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                        <Star key={i} className="w-4.5 h-4.5 fill-current" />
                      ))}
                    </div>

                    {/* Feedback Text */}
                    <p className="font-sans font-medium text-slate-700 italic text-base sm:text-lg leading-relaxed mb-8 pr-6">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>

                  {/* Author Details */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-5 mt-auto">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="font-sans font-black text-sm text-slate-900">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-[11px] font-black text-slate-400 uppercase tracking-wider mt-0.5">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Horizontal Avatar Selector */}
            <div className="hidden lg:flex justify-start items-center gap-3 mt-6">
              {testimonials.map((t, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAvatarClick(idx)}
                  className={`relative w-10 h-10 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ${
                    currentIndex === idx 
                      ? 'ring-2 ring-brand-blue ring-offset-2 scale-110' 
                      : 'opacity-50 hover:opacity-85'
                  }`}
                  aria-label={`Show testimonial from ${t.name}`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Mobile Navigation Chevrons (hidden since vertical stack is used on mobile) */}
            <div className="hidden">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all cursor-pointer active:scale-95"
                aria-label="Previous Testimonial"
              >
                <svg className="w-4.5 h-4.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-brand-blue hover:bg-brand-hover flex items-center justify-center text-white transition-all shadow-sm cursor-pointer active:scale-95"
                aria-label="Next Testimonial"
              >
                <svg className="w-4.5 h-4.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
