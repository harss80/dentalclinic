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
  ChevronLeft,
  Check,
  CalendarCheck,
  ClipboardList,
  Heart,
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

const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'];
const doctors = ['Any Doctor', 'Dr. Sarah Smith', 'Dr. Michael Chen', 'Dr. Emily Jones'];

export default function AppointmentPage({ setCurrentPage, initialService }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3500);
  };

  // Form State
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    doctor: 'Any Doctor',
    message: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (initialService) {
      const match = servicesData.find(s => s.title.toLowerCase() === initialService.toLowerCase());
      if (match) setSelectedService(match);
    } else {
      setSelectedService(servicesData[0]);
    }
  }, [initialService]);

  const steps = [
    { num: 1, title: 'Service', desc: 'Choose Treatment' },
    { num: 2, title: 'Date & Time', desc: 'Pick Schedule' },
    { num: 3, title: 'Your Details', desc: 'Review & Confirm' }
  ];

  const handleNextStep = () => {
    if (currentStep === 1 && !selectedService) {
      showToast("Please select a service before continuing.");
      return;
    }
    if (currentStep === 2 && (!selectedDate || !selectedTime)) {
      showToast("Please select both your preferred date and time.");
      return;
    }
    if (currentStep === 3 && (!userDetails.name || !userDetails.phone)) {
      showToast("Please provide your Name and Phone Number.");
      return;
    }
    
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    } else if (currentStep === 3) {
      handleConfirm();
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
    setSelectedDate('');
    setSelectedTime('');
    setUserDetails({ name: '', phone: '', email: '', doctor: 'Any Doctor', message: '' });
  };

  return (
    <div className="bg-white min-h-screen pt-[72px] lg:pt-[88px] flex flex-col relative overflow-hidden">
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: -50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -50, x: '-50%' }}
            className="fixed top-[100px] left-1/2 z-[100] bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 w-[90%] max-w-sm"
          >
            <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
              <Info className="w-4 h-4 text-brand-blue" />
            </div>
            <span className="text-[13px] font-bold leading-tight">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Header */}
      <section className="relative w-full h-[280px] lg:h-[320px] bg-gradient-to-r from-[#f4f7fa] to-[#e6eef5] overflow-hidden flex items-center">
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
            <div className="flex overflow-x-auto sm:overflow-visible scrollbar-hide items-start sm:items-center justify-between max-w-[600px] mx-auto mb-12 sm:mb-16 relative gap-4 sm:gap-0 pb-4 sm:pb-0 -mx-6 px-6 sm:mx-auto sm:px-0 snap-x">
              {/* Connecting Line */}
              <div className="hidden sm:block absolute top-5 left-[15%] right-[15%] z-0">
                <div className="h-0 border-t-2 border-dotted border-slate-200 w-full relative">
                  <div className="absolute top-[-2px] left-0 h-0 border-t-2 border-solid border-brand-blue transition-all duration-500" style={{ width: `${((currentStep - 1) / 2) * 100}%` }} />
                </div>
              </div>
              
              {steps.map((step, idx) => {
                const isActive = currentStep === step.num;
                const isPast = currentStep > step.num;
                return (
                  <div key={idx} className="flex flex-col items-center relative z-10 w-[100px] sm:w-auto flex-shrink-0 snap-center">
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
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[1000px] mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">What do you need help with?</h2>
                  <p className="text-sm text-slate-500 font-bold">Select the primary service you are looking for</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {servicesData.map((service) => {
                    const isSelected = selectedService?.id === service.id;
                    return (
                      <button
                        key={service.id}
                        onClick={() => setSelectedService(service)}
                        className={`flex flex-col text-left rounded-[20px] overflow-hidden transition-all duration-300 cursor-pointer border-2 ${
                          isSelected 
                            ? 'border-brand-blue bg-[#f0f5ff] shadow-[0_8px_20px_rgba(29,78,216,0.12)] -translate-y-1' 
                            : 'border-slate-100 bg-white hover:border-slate-200 hover:shadow-md'
                        }`}
                      >
                        <div className="w-full h-[140px] relative overflow-hidden bg-slate-100">
                          <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                          {!isSelected && <div className="absolute inset-0 bg-white/10" />}
                          {isSelected && (
                            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center shadow-md">
                              <Check className="w-5 h-5 text-white stroke-[3]" />
                            </div>
                          )}
                        </div>
                        <div className="p-5 flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className={`text-[15px] font-black mb-1.5 transition-colors ${isSelected ? 'text-brand-blue' : 'text-slate-900'}`}>
                              {service.title}
                            </h3>
                            <p className="text-[11px] text-slate-500 font-semibold leading-relaxed line-clamp-2">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-12 flex justify-center w-full">
                  <button 
                    onClick={handleNextStep}
                    className={`w-full sm:w-auto px-10 py-4 font-black text-[14px] rounded-[14px] flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      selectedService 
                        ? 'bg-brand-blue hover:bg-brand-hover text-white shadow-[0_6px_20px_rgba(29,78,216,0.25)] hover:-translate-y-0.5' 
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    Continue to Date & Time <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Select Date & Time */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[800px] mx-auto bg-white rounded-[24px] border border-slate-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Select Date & Time</h2>
                  <p className="text-sm text-slate-500 font-bold">Choose your preferred schedule for {selectedService?.title}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                  
                  {/* Modern Date Input */}
                  <div>
                    <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">Select Date</h3>
                    <div className="relative">
                      <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border-2 border-slate-100 focus:border-brand-blue focus:ring-4 focus:ring-blue-50 focus:outline-none text-[15px] font-bold text-slate-800 transition-all duration-200 cursor-pointer appearance-none"
                      />
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h3 className="text-sm font-black text-slate-800 mb-4 uppercase tracking-wider">Select Time</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(time => {
                        const isSelected = selectedTime === time;
                        return (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-3.5 px-2 rounded-[14px] text-[13px] font-black transition-all border-2 ${
                              isSelected 
                                ? 'bg-brand-blue border-brand-blue text-white shadow-[0_4px_12px_rgba(29,78,216,0.2)]' 
                                : 'bg-white border-slate-100 text-slate-600 hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 cursor-pointer'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                </div>

                <div className="mt-12 flex flex-col-reverse sm:flex-row items-center justify-between border-t border-slate-100 pt-8 gap-4">
                  <button onClick={handlePrevStep} className="w-full sm:w-auto px-6 py-3.5 bg-slate-50 border-2 border-slate-100 text-slate-600 font-bold text-[13px] rounded-[12px] hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                  <button 
                    onClick={handleNextStep} 
                    className={`w-full sm:w-auto px-8 py-3.5 font-black text-[13px] rounded-[12px] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      selectedDate && selectedTime
                        ? 'bg-brand-blue text-white hover:bg-brand-hover shadow-[0_6px_20px_rgba(29,78,216,0.25)] hover:-translate-y-0.5'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    Continue <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Your Details & Confirm */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-[900px] mx-auto bg-white rounded-[24px] border border-slate-100 p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
                <div className="text-center mb-10">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Review & Confirm</h2>
                  <p className="text-sm text-slate-500 font-bold">Please fill in your contact info to confirm the booking.</p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: Appointment Summary */}
                  <div className="bg-[#f8fafc] rounded-2xl p-8 border border-slate-200/60 h-fit">
                    <h3 className="text-[14px] font-black text-slate-900 mb-6 pb-4 border-b border-slate-200">Appointment Summary</h3>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Service</span>
                          <span className="text-[15px] font-black text-slate-800">{selectedService?.title}</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-4 items-start">
                        <div className="w-10 h-10 rounded-full bg-blue-100 text-brand-blue flex items-center justify-center flex-shrink-0">
                          <CalendarIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">Date & Time</span>
                          <span className="text-[15px] font-black text-slate-800">{selectedDate} at {selectedTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: User Details Form */}
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-2 uppercase tracking-wide">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="text" 
                          placeholder="e.g. John Doe"
                          required
                          value={userDetails.name}
                          onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-2 uppercase tracking-wide">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input 
                          type="tel" 
                          placeholder="+1 234 567 8900"
                          required
                          value={userDetails.phone}
                          onChange={(e) => setUserDetails({...userDetails, phone: e.target.value})}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black text-slate-700 mb-2 uppercase tracking-wide">Preferred Doctor (Optional)</label>
                      <div className="relative">
                        <select 
                          value={userDetails.doctor}
                          onChange={(e) => setUserDetails({...userDetails, doctor: e.target.value})}
                          className="w-full px-4 py-3.5 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-800 appearance-none focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
                        >
                          {doctors.map(doc => <option key={doc} value={doc}>{doc}</option>)}
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                  <button onClick={handlePrevStep} className="w-full sm:w-auto px-6 py-3.5 bg-slate-50 border-2 border-slate-100 text-slate-600 font-bold text-[13px] rounded-[12px] hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </button>
                  <button 
                    onClick={handleNextStep} 
                    className={`w-full sm:w-auto px-10 py-4 font-black text-[14px] rounded-[12px] flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      userDetails.name && userDetails.phone
                        ? 'bg-slate-900 text-white hover:bg-brand-blue shadow-[0_6px_20px_rgba(15,23,42,0.2)] hover:-translate-y-0.5'
                        : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    <Lock className="w-4 h-4" /> Confirm Booking
                  </button>
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
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 border-4 border-green-100 shadow-sm">
              <Check className="w-12 h-12 text-green-500 stroke-[3]" />
            </div>
            
            <h2 className="text-3xl font-black text-slate-900 mb-3">Booking Confirmed!</h2>
            
            <p className="text-[15px] font-semibold text-slate-500 leading-relaxed mb-10 max-w-md mx-auto">
              Thank you, <strong className="text-slate-800">{userDetails.name}</strong>. We've received your request for <strong className="text-brand-blue">{selectedService?.title}</strong> on <strong className="text-slate-800">{selectedDate}</strong> at <strong className="text-slate-800">{selectedTime}</strong>. We will call you shortly.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <a href="tel:+12345678900" className="w-full sm:w-auto px-8 py-4 border-2 border-slate-200 text-slate-700 font-black text-[14px] rounded-[14px] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm">
                <Phone className="w-4 h-4" /> Call Clinic
              </a>
              <a href="https://wa.me/12345678900" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-black text-[14px] rounded-[14px] hover:bg-[#1ebd5a] transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)] flex items-center justify-center gap-2 hover:-translate-y-0.5">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.891-4.443 9.893-9.892.001-5.451-4.444-9.894-9.894-9.894-5.448 0-9.893 4.443-9.893 9.892.001 1.83.473 3.447 1.341 5.012l-1.096 4.004 4.157-1.096zm10.741-7.142c-.59-.295-3.484-1.722-4.024-1.918-.54-.196-.934-.295-1.328.295-.394.59-1.524 1.918-1.868 2.311-.344.394-.688.443-1.278.148-.59-.295-2.488-.918-4.74-2.935-1.751-1.568-2.932-3.504-3.276-4.094-.344-.59-.037-.909.258-1.203.266-.265.59-.688.885-1.033.295-.344.394-.59.59-.983.197-.394.098-.738-.049-1.033-.148-.295-1.328-3.203-1.819-4.383-.48-1.15-1.034-1.025-1.428-1.042-.344-.015-.738-.016-1.132-.016-.394 0-1.033.148-1.574.738-.54.59-2.066 2.016-2.066 4.918 0 2.902 2.115 5.705 2.41 6.098.295.394 4.156 6.34 10.065 8.895 1.408.61 2.507.974 3.364 1.246 1.414.45 2.702.386 3.719.234 1.144-.171 3.484-1.424 3.976-2.802.492-1.378.492-2.559.344-2.802-.148-.246-.54-.394-1.132-.689z"/></svg>
                WhatsApp Us
              </a>
            </div>
            
            <button onClick={resetFlow} className="mt-8 text-xs font-bold text-slate-400 hover:text-brand-blue underline decoration-2 underline-offset-4 transition-colors cursor-pointer">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            <div className="hidden lg:block absolute top-[45%] left-10 right-10 h-[1px] border-t border-dashed border-slate-200 -z-10" />
            
            {[
              { num: 1, icon: <Heart className="w-6 h-6" />, title: 'Choose a Service', desc: 'Select the dental treatment you are interested in.' },
              { num: 2, icon: <CalendarIcon className="w-6 h-6" />, title: 'Pick Date & Time', desc: 'Choose your preferred date and time.' },
              { num: 3, icon: <CheckCircle2 className="w-6 h-6" />, title: 'Confirm Booking', desc: 'Provide your details and confirm your slot instantly.' }
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
