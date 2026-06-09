import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ArrowRight, ChevronDown, CheckCircle, Smile, Award, Heart, Activity, Sparkles } from 'lucide-react';
import { Magnetic } from './ScrollReveal';

export default function Hero({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const patientAvatars = [
    {
      url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80",
      alt: "Priya Sharma"
    },
    {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
      alt: "Rahul Verma"
    },
    {
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
      alt: "Sneha Kapoor"
    },
    {
      url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
      alt: "Amit Patel"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage('appointment');
    }
  };

  const handleScrollTo = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Happy Patients', value: '10K+', icon: Smile },
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Expert Dentists', value: '25+', icon: Activity },
    { label: 'Satisfaction Rate', value: '98%', icon: Heart },
  ];

  return (
    <section id="home" className="relative min-h-[640px] lg:h-[700px] pt-20 sm:pt-36 lg:pt-40 pb-12 lg:pb-16 bg-white overflow-hidden flex flex-col justify-center">
      {/* Background decoration blurs (subtle) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      
      {/* Large Patient Photo Background for Desktop */}
      <div className="absolute right-0 top-20 bottom-0 w-full lg:w-[70%] max-w-[950px] z-0 select-none pointer-events-none hidden lg:block">
        {/* Gradient overlays to fade the image into the layout */}
        <div className="absolute inset-y-0 left-0 w-72 lg:w-96 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
        <img 
          src="/assets/herosectionimage.webp" 
          alt="Modern Dentistry Clinic" 
          className="w-full h-full object-cover object-[95%_center]"
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column Content (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
          
          {/* Patient image container (Full bleed on Mobile & Tablet) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-[calc(100%+3rem)] -mx-6 h-[380px] sm:h-[450px] relative lg:hidden mb-0 bg-slate-50 overflow-hidden"
          >
            {/* Gradient to fade the image into the white background below */}
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            <img 
              src="/assets/herosectionimage.webp" 
              alt="DentaCare Patient Smiling" 
              className="w-full h-full object-cover object-[center_top]"
            />
          </motion.div>

          {/* Pill Tag */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-md border border-slate-100 rounded-full self-center lg:self-start mb-5 shadow-[0_4px_12px_rgba(0,0,0,0.05)] relative z-20 -mt-8 sm:-mt-10"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 tracking-wide">
              Modern Dentistry, Personalised for You
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-sans font-black text-4xl sm:text-5xl lg:text-[60px] leading-[1.15] text-slate-900 mb-4 tracking-tight"
          >
            Creating Beautiful <br />
            <span className="text-brand-blue relative inline-flex items-center flex-wrap sm:flex-nowrap justify-center lg:justify-start">
              Smiles Every Day
              {/* Smiley Curve SVG Accent */}
              <svg className="w-11 h-7 sm:w-16 sm:h-10 inline-block ml-2 sm:ml-4 align-middle text-brand-blue" viewBox="0 0 40 24" fill="currentColor">
                <circle cx="12" cy="6" r="2.5" />
                <circle cx="28" cy="6" r="2.5" />
                <path d="M 8,14 Q 20,26 32,14" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-xs sm:text-base text-slate-500 font-bold max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed px-2 sm:px-0"
          >
            Advanced technology, gentle care, and a passion for perfection — all for your best smile.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-row items-center justify-center lg:justify-start gap-2.5 sm:gap-4 mb-8 w-full px-2 sm:px-0"
          >
            <button
              onClick={() => setCurrentPage && setCurrentPage('appointment')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-2 py-3 sm:px-8 rounded-xl bg-brand-blue hover:bg-brand-hover text-white font-bold text-xs sm:text-sm shadow-[0_4px_12px_rgba(29,78,216,0.15)] transition-all cursor-pointer"
            >
              Book Appointment
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5" />
            </button>
            
            <button
              onClick={() => handleScrollTo('#services')}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-2 py-3 sm:px-8 rounded-xl border border-brand-blue/30 text-brand-blue font-bold text-xs sm:text-sm bg-white hover:bg-brand-light transition-all shadow-sm cursor-pointer"
            >
              Explore Services
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-1.5" />
            </button>
          </motion.div>
          
          {/* Bento-style Stats Cards Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="grid grid-cols-4 gap-1.5 sm:gap-4 pt-6 border-t border-slate-100 w-full"
          >
            {stats.map((stat, sIdx) => {
              const IconComp = stat.icon;
              return (
                <div 
                  key={sIdx} 
                  className="flex flex-col items-center text-center group"
                >
                  {/* Small round icon wrapper */}
                  <div className="w-8 h-8 rounded-full border border-brand-blue/10 bg-brand-light flex items-center justify-center text-brand-blue flex-shrink-0 mb-1.5 group-hover:scale-105 transition-transform duration-350">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm sm:text-lg font-black text-brand-blue leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[8.5px] sm:text-[10px] font-bold text-slate-500 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Mobile-only Trust Card & Partner Logos (Matches mockup Screen 1) */}
          <div className="lg:hidden flex flex-col gap-6 w-full mt-8">
            
            {/* Trust Card */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-5 shadow-[0_8px_30px_rgba(29,78,216,0.04)] flex flex-col gap-4 text-left">
              <div className="flex items-center gap-3">
                {/* Avatar Stack */}
                <div className="flex -space-x-2.5 flex-shrink-0">
                  {patientAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar.url}
                      alt={avatar.alt}
                      className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm"
                    />
                  ))}
                </div>
                <div>
                  <span className="block text-xs font-black text-slate-800 leading-tight">
                    Trusted by Thousands
                  </span>
                  <span className="block text-[10px] font-bold text-slate-400 mt-0.5">
                    of Happy Patients
                  </span>
                </div>
              </div>
              
              <div className="h-px bg-slate-100 w-full" />
              
              <div className="flex items-center gap-3.5">
                <span className="text-2xl font-black text-slate-800 leading-none">
                  4.9
                </span>
                <div className="flex flex-col">
                  {/* Stars Row */}
                  <div className="flex text-amber-500 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 fill-current"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 mt-1 leading-none">
                    (2,500+ Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Partner Logos 2x2 Grid */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 border-t border-slate-100 pt-6">
              <div className="flex items-center justify-center">
                <img src="/assets/Invisalign-logo.png" alt="Invisalign" className="h-[28px] w-auto object-contain opacity-80" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/ivoclar-vivadent-logo.png" alt="Ivoclar Vivadent" className="h-[26px] w-auto object-contain opacity-80" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/osstem-logo.png" alt="OSSTEM Implant" className="h-[18px] w-auto object-contain opacity-80" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/assets/3shape-logo.png" alt="3shape" className="h-[14px] w-auto object-contain opacity-80" />
              </div>
            </div>

          </div>

        </div>

        {/* Right Column Visual Media & Booking Card (lg:col-span-5) */}
        <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-center mt-12 lg:mt-0 w-full z-10">

          {/* Overlapping Booking Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, type: 'spring', stiffness: 80 }}
            id="appointment-form"
            className="w-full max-w-[360px] bg-white rounded-[32px] border border-slate-100/80 p-6 sm:p-8 shadow-[0_20px_50px_rgba(29,78,216,0.06)] relative"
          >
            <h3 className="font-sans font-black text-2xl text-slate-900 mb-6 leading-tight">
              <span className="text-brand-blue">Book</span> Your<br />
              Appointment
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  {/* Name field */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all duration-200 text-slate-800"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="relative">
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold placeholder-slate-400 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all duration-200 text-slate-800"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="relative">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-500 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select Service</option>
                      <option value="teeth-whitening">Teeth Whitening</option>
                      <option value="aligners">Clear Aligners</option>
                      <option value="implants">Dental Implants</option>
                      <option value="root-canal">Root Canal</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  {/* Date Input */}
                  <div className="relative">
                    <input 
                      type="text" 
                      name="date"
                      placeholder="Select Date"
                      onFocus={(e) => (e.target.type = 'date')}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = 'text';
                      }}
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-500 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/5 transition-all duration-200 cursor-pointer pr-10 appearance-none relative"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 rounded-xl bg-brand-blue hover:bg-brand-hover text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md shadow-brand-blue/10 cursor-pointer hover:-translate-y-0.5 duration-200"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  
                  <p className="text-[10px] text-slate-400 font-bold text-center mt-1 leading-snug">
                    We'll confirm your appointment
                  </p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-500 mb-3.5 animate-[spin_8s_linear_infinite]" />
                  <span className="text-sm font-black text-slate-800">Appointment Sent!</span>
                  <p className="text-xs text-slate-400 font-bold mt-1.5 max-w-[200px] leading-relaxed">
                    We will call you shortly to verify your schedule. Thank you!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

    </section>
  );
}
