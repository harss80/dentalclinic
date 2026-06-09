import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  Calendar as CalendarIcon, 
  User, 
  Phone, 
  ChevronDown, 
  Check,
  CalendarCheck,
  ClipboardList,
  Heart,
  ChevronLeft,
  ChevronRight,
  Lock
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CTABanner from './CTABanner';

const servicesData = [
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with natural look and feel.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&auto=format&fit=crop&q=80',
    features: [
      'Natural Look & Feel',
      'Long Lasting Results',
      'High Success Rate',
      'Improved Oral Health'
    ]
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with veneers, bonding, and aesthetic contouring.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&auto=format&fit=crop&q=80',
    features: [
      'Customized Smile Design',
      'Stain-Resistant Materials',
      'Minimally Invasive',
      'Boosts Confidence'
    ]
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics (Braces)',
    description: 'Straighten your teeth effectively with modern orthodontic solutions.',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&auto=format&fit=crop&q=80',
    features: [
      'Clear Aligner Options',
      'Corrects Bite Issues',
      'Improves Jaw Alignment',
      'Comfortable Treatments'
    ]
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment',
    description: 'Relieve pain and save your natural teeth with advanced endodontic care.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&auto=format&fit=crop&q=80',
    features: [
      'Painless Procedure',
      'Preserves Natural Tooth',
      'Prevents Infection Spread',
      'Quick Recovery'
    ]
  },
  {
    id: 'whitening',
    title: 'Teeth Whitening',
    description: 'Professional bleaching to remove deep stains and brighten your smile.',
    image: 'https://images.unsplash.com/photo-1590664095641-7fa05f689813?w=400&auto=format&fit=crop&q=80',
    features: [
      'Immediate Results',
      'Safe for Enamel',
      'Removes Coffee/Tea Stains',
      'Long-lasting Brightness'
    ]
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Special dental care for children in a fun and safe environment.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&auto=format&fit=crop&q=80',
    features: [
      'Child-Friendly Staff',
      'Cavity Prevention',
      'Gentle Cleanings',
      'Early Orthodontic Checks'
    ]
  },
  {
    id: 'periodontal',
    title: 'Periodontal Treatment',
    description: 'Specialized care for your gums to treat and prevent gum disease.',
    image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?w=400&auto=format&fit=crop&q=80',
    features: [
      'Deep Cleaning',
      'Gum Grafting',
      'Prevents Tooth Loss',
      'Reduces Inflammation'
    ]
  },
  {
    id: 'general',
    title: 'General Checkup',
    description: 'Routine examination, cleaning, and preventative dental care.',
    image: 'https://images.unsplash.com/photo-1574482620826-40685ca5ebe2?w=400&auto=format&fit=crop&q=80',
    features: [
      'Comprehensive Exam',
      'Digital X-Rays',
      'Professional Scaling',
      'Oral Cancer Screening'
    ]
  }
];

const faqs = [
  {
    question: 'How do I book an appointment?',
    answer: 'You can easily book an appointment by selecting a service from the list above, choosing a convenient date and time, and providing your contact details. Alternatively, you can call our clinic directly or use the WhatsApp chat option.'
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major dental insurance plans. Our administrative team will help verify your benefits and handle claims on your behalf. We also offer flexible financing options for out-of-pocket expenses.'
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'If you have a dental emergency (like a knocked-out tooth or severe pain), please call our emergency hotline immediately. We reserve time slots every day specifically for urgent care patients.'
  },
  {
    question: 'How long will my appointment take?',
    answer: 'A standard general checkup and cleaning usually takes about 45 to 60 minutes. More complex procedures like root canals or implant consultations may require 60 to 90 minutes. We always strive to see you exactly at your scheduled time.'
  }
];

// Helper to generate dates for simple custom calendar
const generateCalendarDays = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const days = [];
  // Empty slots for previous month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  return { days, monthName: today.toLocaleString('default', { month: 'long', year: 'numeric' }), currentDay: today.getDate() };
};

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
const doctors = ['Any Doctor', 'Dr. Sarah Smith', 'Dr. Michael Chen', 'Dr. Emily Jones'];

export default function AppointmentPage({ setCurrentPage, initialService }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Form State
  const [selectedService, setSelectedService] = useState(servicesData[0]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: 'Any Doctor',
    message: ''
  });

  const { days: calendarDays, monthName, currentDay } = generateCalendarDays();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (initialService) {
      const match = servicesData.find(s => s.title.toLowerCase() === initialService.toLowerCase());
      if (match) setSelectedService(match);
    }
  }, [initialService]);

  const steps = [
    { num: 1, title: 'Service', desc: 'Choose Treatment' },
    { num: 2, title: 'Date & Time', desc: 'Pick Schedule' },
    { num: 3, title: 'Your Details', desc: 'Fill Information' },
    { num: 4, title: 'Confirmation', desc: 'Review & Confirm' }
  ];

  const handleNextStep = () => {
    if (currentStep === 2 && (!selectedDate || !selectedTime)) {
      alert("Please select both a date and time.");
      return;
    }
    if (currentStep === 3 && (!userDetails.name || !userDetails.phone)) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }
    
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  const handleConfirm = () => {
    // In a real app, API call goes here
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const resetFlow = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserDetails({ name: '', phone: '', email: '', doctor: 'Any Doctor', message: '' });
  };

  return (
    <div className="bg-white min-h-screen pt-[72px] lg:pt-[88px] flex flex-col">
      
      {/* Hero Header */}
      <section className="relative w-full h-[280px] lg:h-[320px] bg-gradient-to-r from-[#f4f7fa] to-[#e6eef5] overflow-hidden flex items-center">
        {/* Background Image */}
        <div className="absolute top-0 right-0 h-full w-full lg:w-1/2 z-0">
          <img 
            src="/assets/herosectionimage.webp" 
            alt="Dentist and Patient" 
            className="w-full h-full object-cover object-[center_top] opacity-80 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f4f7fa] via-[#f4f7fa]/80 to-transparent w-full lg:w-[85%]" />
        </div>
        
        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-6 tracking-wide">
            <button onClick={() => setCurrentPage && setCurrentPage('home')} className="hover:text-brand-blue transition-colors">Home</button>
            <ChevronDown className="w-3 h-3 -rotate-90 text-slate-400" />
            <span className="text-slate-400">Book Appointment</span>
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-5xl lg:text-[64px] text-slate-900 leading-[1.05] mb-4 sm:mb-5 tracking-tight">
            Book Your <br />
            <span className="text-brand-blue">Appointment</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-semibold leading-relaxed max-w-sm">
            We're here to make your booking <br className="hidden sm:block" />
            simple and convenient.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-[1240px] w-full mx-auto px-6 py-12 lg:py-16">
        
        {!isSubmitted ? (
          <>
            {/* Stepper Wizard */}
            <div className="flex overflow-x-auto sm:overflow-visible scrollbar-hide items-start sm:items-center justify-between max-w-[700px] mx-auto mb-12 sm:mb-16 relative gap-4 sm:gap-0 pb-4 sm:pb-0 -mx-6 px-6 sm:mx-auto sm:px-0 snap-x">
              {/* Connecting Line */}
              <div className="hidden sm:block absolute top-5 left-[10%] right-[10%] z-0">
                <div className="h-0 border-t-2 border-dotted border-slate-200 w-full relative">
                  <div className="absolute top-[-2px] left-0 h-0 border-t-2 border-solid border-brand-blue transition-all duration-500" style={{ width: `${((currentStep - 1) / 3) * 100}%` }} />
                </div>
              </div>
              
              {steps.map((step, idx) => {
                const isActive = currentStep === step.num;
                const isPast = currentStep > step.num;
                return (
                  <div key={idx} className="flex flex-col items-center relative z-10 w-[90px] sm:w-auto flex-shrink-0 snap-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-[15px] mb-3 transition-all duration-300 shadow-sm ${
                      isActive || isPast 
                        ? 'bg-brand-blue text-white shadow-brand-blue/20' 
                        : 'bg-slate-100 text-slate-400 border-2 border-white'
                    }`}>
                      {isPast ? <Check className="w-5 h-5" /> : step.num}
                    </div>
                    <div className={`text-[11px] sm:text-xs font-black uppercase tracking-wider text-center ${isActive ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.title}
                    </div>
                    <div className={`text-[9px] sm:text-[10px] font-bold text-center mt-0.5 ${isActive ? 'text-slate-500' : 'text-slate-400'}`}>
                      {step.desc}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* STEP 1: Choose Service */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                
                {/* Left: Services List */}
                <div className="lg:col-span-4 flex flex-col">
                  <h2 className="text-[22px] font-black text-slate-900 mb-1">1. Choose Your Service</h2>
                  <p className="text-[11px] text-slate-500 font-bold mb-6">Select the dental service you need</p>
                  
                  <div className="flex lg:flex-col gap-3 lg:gap-2 overflow-x-auto lg:overflow-visible pb-6 lg:pb-0 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 snap-x">
                    {servicesData.map((service) => {
                      const isSelected = selectedService.id === service.id;
                      return (
                        <button
                          key={service.id}
                          onClick={() => setSelectedService(service)}
                          className={`flex items-center gap-3 sm:gap-4 p-2.5 rounded-xl border transition-all duration-300 cursor-pointer flex-shrink-0 w-[240px] lg:w-auto snap-start ${
                            isSelected 
                              ? 'border-brand-blue bg-[#f0f5ff] shadow-[0_4px_12px_rgba(29,78,216,0.08)]' 
                              : 'border-slate-100 bg-white hover:border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100 relative shadow-sm">
                            <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                            {/* Overlay for inactive */}
                            {!isSelected && <div className="absolute inset-0 bg-white/20" />}
                          </div>
                          <span className={`text-[13px] font-black flex-grow text-left transition-colors ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                            {service.title}
                          </span>
                          {isSelected ? (
                            <div className="w-[18px] h-[18px] rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 mr-2 shadow-sm">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-[18px] h-[18px] rounded-full border-2 border-slate-200 flex-shrink-0 mr-2 transition-colors hover:border-slate-300" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right: Service Details */}
                <div className="lg:col-span-8">
                  <div className="h-full flex flex-col mt-2">
                    
                    <div className="flex flex-col sm:flex-row gap-8 mb-10">
                      {/* Large Image Preview */}
                      <div className="w-full sm:w-[260px] h-[220px] sm:h-[260px] rounded-[20px] overflow-hidden flex-shrink-0 bg-slate-50 shadow-md">
                        <motion.img 
                          key={selectedService.id}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4 }}
                          src={selectedService.image} 
                          alt={selectedService.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Details Info */}
                      <div className="flex flex-col justify-center py-2">
                        <motion.h3 
                          key={`title-${selectedService.id}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-[20px] font-black text-slate-900 mb-2"
                        >
                          {selectedService.title}
                        </motion.h3>
                        <motion.p 
                          key={`desc-${selectedService.id}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-xs text-slate-500 font-semibold leading-relaxed mb-6 max-w-sm"
                        >
                          {selectedService.description}
                        </motion.p>
                        
                        <div className="flex flex-col gap-3.5 mb-6">
                          {selectedService.features.map((feature, idx) => (
                            <motion.div 
                              key={`feature-${selectedService.id}-${idx}`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-4 h-4 rounded-full bg-brand-blue flex items-center justify-center flex-shrink-0 shadow-[0_2px_8px_rgba(29,78,216,0.3)]">
                                <Check className="w-2.5 h-2.5 text-white stroke-[3.5]" />
                              </div>
                              <span className="text-[12px] font-bold text-slate-800">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-5 mt-auto border-t border-slate-100 pt-8">
                      {/* Help Box */}
                      <div className="bg-[#f8fafc] border border-slate-200/60 rounded-[16px] p-5 flex flex-col sm:flex-row items-center justify-between gap-4 self-start w-full max-w-[600px]">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-9 h-9 rounded-full bg-brand-blue flex items-center justify-center text-white flex-shrink-0 shadow-[0_4px_12px_rgba(29,78,216,0.25)]">
                            <Info className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <div>
                            <h4 className="text-[12px] font-black text-slate-900 mb-0.5">Need help choosing the right treatment?</h4>
                            <p className="text-[11px] text-slate-500 font-bold">Our experts are here to guide you.</p>
                          </div>
                        </div>
                        <a 
                          href="tel:+12345678900"
                          className="whitespace-nowrap px-6 py-2 rounded-[10px] border border-brand-blue/30 text-brand-blue hover:bg-brand-blue hover:text-white font-bold text-[11px] transition-colors flex items-center gap-1.5 bg-white shadow-sm"
                        >
                          <Phone className="w-3 h-3" /> Talk to Expert
                        </a>
                      </div>

                      {/* Continue Button */}
                      <button 
                        onClick={handleNextStep}
                        className="w-full sm:w-auto self-start px-8 py-3.5 bg-brand-blue hover:bg-brand-hover text-white text-[13px] font-black rounded-[12px] flex items-center justify-center gap-2 transition-all shadow-[0_6px_20px_rgba(29,78,216,0.25)] hover:-translate-y-0.5 cursor-pointer"
                      >
                        Continue <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Select Date & Time */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[800px] mx-auto bg-white rounded-[24px] border border-slate-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Select Date & Time</h2>
                <p className="text-xs text-slate-500 font-semibold mb-8">Choose your preferred date and time for {selectedService.title}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  
                  {/* Custom Calendar UI */}
                  <div>
                    <h3 className="text-sm font-black text-slate-800 mb-4">Select Date</h3>
                    <div className="border border-slate-200 rounded-2xl p-4">
                      {/* Calendar Header */}
                      <div className="flex items-center justify-between mb-4">
                        <button className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-[13px] font-black text-slate-800">{monthName}</span>
                        <button className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {/* Days of week */}
                      <div className="grid grid-cols-7 mb-2 text-center">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                          <div key={d} className="text-[10px] font-black text-slate-400 uppercase">{d}</div>
                        ))}
                      </div>
                      
                      {/* Days grid */}
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {calendarDays.map((day, idx) => {
                          const isSelected = selectedDate === day;
                          const isPast = day && day < currentDay;
                          
                          if (!day) return <div key={`empty-${idx}`} className="h-8" />;
                          
                          return (
                            <button
                              key={`day-${day}`}
                              disabled={isPast}
                              onClick={() => setSelectedDate(day)}
                              className={`h-8 w-8 mx-auto rounded-full text-xs font-bold transition-all ${
                                isSelected ? 'bg-brand-blue text-white shadow-md' :
                                isPast ? 'text-slate-300 cursor-not-allowed' :
                                'text-slate-700 hover:bg-blue-50 hover:text-brand-blue cursor-pointer'
                              }`}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h3 className="text-sm font-black text-slate-800 mb-4">Select Time</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(time => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 px-2 rounded-xl text-[12px] font-black transition-all border ${
                              isSelected 
                                ? 'bg-brand-blue border-brand-blue text-white shadow-[0_4px_12px_rgba(29,78,216,0.2)]' 
                                : 'bg-white border-slate-200 text-slate-600 hover:border-brand-blue hover:text-brand-blue cursor-pointer'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                <div className="mt-10 flex items-center gap-4">
                  <button onClick={handlePrevStep} className="px-6 py-3 border border-slate-200 text-slate-600 font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    Back
                  </button>
                  <button onClick={handleNextStep} className="px-8 py-3 bg-brand-blue text-white font-black text-[13px] rounded-xl hover:bg-brand-hover transition-all shadow-[0_6px_20px_rgba(29,78,216,0.25)] flex items-center gap-2 cursor-pointer">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Your Details */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[700px] mx-auto bg-white rounded-[24px] border border-slate-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Your Details</h2>
                <p className="text-xs text-slate-500 font-semibold mb-8">Please fill in your contact information.</p>
                
                <div className="flex flex-col gap-5">
                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      value={userDetails.name}
                      onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                      <input 
                        type="tel" 
                        placeholder="+1 234 567 8900"
                        value={userDetails.phone}
                        onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-1.5 uppercase tracking-wide">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="youremail@domain.com"
                        value={userDetails.email}
                        onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1.5 uppercase tracking-wide">Preferred Doctor (Optional)</label>
                    <div className="relative">
                      <select 
                        value={userDetails.doctor}
                        onChange={(e) => setUserDetails({...userDetails, doctor: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 appearance-none focus:outline-none focus:border-brand-blue transition-colors cursor-pointer"
                      >
                        {doctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-black text-slate-700 mb-1.5 uppercase tracking-wide">Your Message (Optional)</label>
                    <textarea 
                      placeholder="Write your message or concerns..."
                      rows="3"
                      value={userDetails.message}
                      onChange={(e) => setUserDetails({...userDetails, message: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <button onClick={handlePrevStep} className="px-6 py-3 border border-slate-200 text-slate-600 font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
                    Back
                  </button>
                  <button onClick={handleNextStep} className="px-8 py-3 bg-brand-blue text-white font-black text-[13px] rounded-xl hover:bg-brand-hover transition-all shadow-[0_6px_20px_rgba(29,78,216,0.25)] flex items-center gap-2 cursor-pointer">
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Confirm Appointment */}
            {currentStep === 4 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[700px] mx-auto bg-white rounded-[24px] border border-slate-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <h2 className="text-2xl font-black text-slate-900 mb-2">Confirm Appointment</h2>
                <p className="text-xs text-slate-500 font-semibold mb-8">Review your appointment details and confirm.</p>
                
                <div className="bg-[#f8fafc] rounded-2xl p-6 border border-slate-200/60 mb-6">
                  <h3 className="text-[13px] font-black text-slate-900 mb-5 pb-3 border-b border-slate-200">Appointment Summary</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Service</span>
                      <span className="text-sm font-bold text-slate-800">{selectedService.title}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Date</span>
                      <span className="text-sm font-bold text-slate-800">{selectedDate} {monthName.split(' ')[0]} {monthName.split(' ')[1]}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Time</span>
                      <span className="text-sm font-bold text-slate-800">{selectedTime}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Doctor</span>
                      <span className="text-sm font-bold text-slate-800">{userDetails.doctor}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50/50 rounded-xl p-4 flex items-start gap-3 border border-brand-blue/10 mb-8">
                  <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                    You will receive a confirmation call / message shortly after submitting to verify your appointment details.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button onClick={handlePrevStep} className="w-full sm:w-auto px-6 py-4 border border-slate-200 text-slate-600 font-bold text-[13px] rounded-xl hover:bg-slate-50 transition-colors cursor-pointer text-center">
                    Back
                  </button>
                  <button onClick={handleConfirm} className="w-full sm:w-auto px-10 py-4 bg-brand-blue text-white font-black text-[13px] rounded-xl hover:bg-brand-hover transition-all shadow-[0_6px_20px_rgba(29,78,216,0.25)] flex items-center justify-center gap-2 cursor-pointer flex-grow">
                    <Lock className="w-4 h-4" /> Confirm Appointment
                  </button>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-[10px] font-bold text-slate-400">Your information is secure and safe.</span>
                </div>
              </motion.div>
            )}
          </>
        ) : (
          /* SUCCESS SCREEN */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="max-w-[600px] mx-auto bg-white rounded-[24px] border border-slate-100 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-center flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner ring-8 ring-green-50">
              <Check className="w-10 h-10 text-green-500 stroke-[3]" />
            </div>
            
            <h2 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h2>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Your Appointment Has Been Submitted</h3>
            
            <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-8 max-w-md mx-auto">
              We have received your request for <strong className="text-slate-800">{selectedService.title}</strong> on <strong className="text-slate-800">{selectedDate} {monthName.split(' ')[0]}</strong> at <strong className="text-slate-800">{selectedTime}</strong>. We will contact you within 15 minutes to confirm your appointment.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a href="tel:+12345678900" className="w-full sm:w-auto px-8 py-3.5 border border-slate-200 text-slate-700 font-black text-[13px] rounded-xl hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="https://wa.me/12345678900" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-[#25D366] text-white font-black text-[13px] rounded-xl hover:bg-[#1ebd5a] transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.443 9.893-9.892.001-5.451-4.444-9.894-9.894-9.894-5.448 0-9.893 4.443-9.893 9.892.001 1.83.473 3.447 1.341 5.012l-1.096 4.004 4.157-1.096zm10.741-7.142c-.59-.295-3.484-1.722-4.024-1.918-.54-.196-.934-.295-1.328.295-.394.59-1.524 1.918-1.868 2.311-.344.394-.688.443-1.278.148-.59-.295-2.488-.918-4.74-2.935-1.751-1.568-2.932-3.504-3.276-4.094-.344-.59-.037-.909.258-1.203.266-.265.59-.688.885-1.033.295-.344.394-.59.59-.983.197-.394.098-.738-.049-1.033-.148-.295-1.328-3.203-1.819-4.383-.48-1.15-1.034-1.025-1.428-1.042-.344-.015-.738-.016-1.132-.016-.394 0-1.033.148-1.574.738-.54.59-2.066 2.016-2.066 4.918 0 2.902 2.115 5.705 2.41 6.098.295.394 4.156 6.34 10.065 8.895 1.408.61 2.507.974 3.364 1.246 1.414.45 2.702.386 3.719.234 1.144-.171 3.484-1.424 3.976-2.802.492-1.378.492-2.559.344-2.802-.148-.246-.54-.394-1.132-.689z"/></svg>
                WhatsApp Us
              </a>
            </div>
            
            <button onClick={resetFlow} className="mt-8 text-xs font-bold text-brand-blue hover:text-brand-hover underline decoration-2 underline-offset-4 transition-colors">
              Book Another Appointment
            </button>
          </motion.div>
        )}

      </section>

      {/* Features Blue Banner */}
      <section className="w-full bg-[#0050ff] text-white py-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-white/20 rounded-[14px] flex items-center justify-center bg-white/10">
                <CalendarCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[13px] font-black mb-0.5">Quick & Easy Booking</h4>
                <p className="text-[10px] font-semibold text-white/80">Schedule your appointment in just a few clicks.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-white/20 rounded-[14px] flex items-center justify-center bg-white/10">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[13px] font-black mb-0.5">Expert Dental Care</h4>
                <p className="text-[10px] font-semibold text-white/80">Our experienced dentists are here for you.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-white/20 rounded-[14px] flex items-center justify-center bg-white/10">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[13px] font-black mb-0.5">Personalized Treatment</h4>
                <p className="text-[10px] font-semibold text-white/80">We provide the best care tailored to your needs.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 border border-white/20 rounded-[14px] flex items-center justify-center bg-white/10">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-[13px] font-black mb-0.5">Trusted by Thousands</h4>
                <p className="text-[10px] font-semibold text-white/80">Join thousands of happy patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue">How It Works</span>
          <h2 className="text-3xl font-black text-slate-900 mt-2 mb-12">Simple Steps to Book Your Appointment</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="hidden lg:block absolute top-[45%] left-10 right-10 h-[1px] border-t border-dashed border-slate-200 -z-10" />
            
            {[
              { num: 1, icon: <Heart className="w-6 h-6" />, title: 'Choose a Service', desc: 'Select the dental treatment you are interested in.' },
              { num: 2, icon: <CalendarIcon className="w-6 h-6" />, title: 'Pick Date & Time', desc: 'Choose your preferred date and time.' },
              { num: 3, icon: <ClipboardList className="w-6 h-6" />, title: 'Fill Your Details', desc: 'Provide your information and tell us about your dental concerns.' },
              { num: 4, icon: <CheckCircle2 className="w-6 h-6" />, title: 'Confirm Appointment', desc: 'We will confirm your appointment and see you at our clinic.' }
            ].map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="bg-white rounded-[20px] p-8 border border-slate-100 shadow-sm relative h-full flex flex-col items-center">
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center font-black text-xs shadow-md shadow-brand-blue/20">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-5 ring-4 ring-white">
                    {step.icon}
                  </div>
                  <h3 className="font-black text-[14px] text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section custom layout */}
      <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black tracking-widest uppercase text-brand-blue">FAQs</span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">Frequently Asked Questions</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Graphic */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <ScrollReveal>
                <div className="relative w-[300px] sm:w-[350px] h-[250px] sm:h-[300px]">
                  {/* Decorative blur behind */}
                  <div className="absolute inset-0 bg-blue-100/40 rounded-full blur-3xl -z-10" />
                  <img src="/assets/contactimage.webp" alt="Dental Care FAQ" className="w-full h-full object-cover rounded-[24px] shadow-lg"/>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Accordions */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <ScrollReveal key={idx} delay={idx * 50}>
                    <div className="rounded-[16px] bg-[#f8fafc] border border-slate-100 overflow-hidden transition-all duration-300">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                      >
                        <span className={`font-black text-xs sm:text-[13px] transition-colors ${isOpen ? 'text-brand-blue' : 'text-slate-800 hover:text-brand-blue'}`}>
                          {faq.question}
                        </span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 text-[11px] sm:text-xs text-slate-500 font-bold leading-relaxed">
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
          </div>
        </div>
      </section>

      <CTABanner setCurrentPage={setCurrentPage} />
      
    </div>
  );
}
