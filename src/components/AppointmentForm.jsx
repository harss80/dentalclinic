import React, { useState } from 'react';
import { 
  Calendar, Phone, User, CheckCircle, ArrowRight, Clock, 
  Sparkles, Smile, Activity, Shield, HeartPulse, Star, ChevronRight, ChevronLeft
} from 'lucide-react';
import ScrollReveal, { Magnetic } from './ScrollReveal';

export default function AppointmentForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const servicesList = [
    { name: 'Teeth Whitening', icon: Sparkles },
    { name: 'Braces & Aligners', icon: Smile },
    { name: 'Root Canal Therapy', icon: Activity },
    { name: 'Dental Implants', icon: Shield },
    { name: 'Kids Dentistry', icon: HeartPulse },
    { name: 'Smile Makeover', icon: Star }
  ];

  const handleNext = () => {
    if (step === 1 && !formData.service) return;
    if (step === 2 && !formData.date) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service && formData.date) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', service: '', date: '', notes: '' });
    setStep(1);
    setIsSubmitted(false);
  };

  const isStep1Valid = formData.service !== '';
  const isStep2Valid = formData.date !== '';
  const isStep3Valid = formData.name !== '' && formData.phone !== '';

  return (
    <section id="appointment" className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-[1000px] mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-black text-teal-600 tracking-widest uppercase bg-teal-100/50 px-4 py-2 rounded-full border border-teal-200/50">
              Easy Booking
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-slate-900 leading-tight mt-6 mb-4">
              Book Your <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Appointment</span>
            </h2>
            <p className="text-base text-slate-500 font-medium max-w-2xl mx-auto">
              We've made scheduling your dental visit simple and stress-free. Follow the steps below to secure your slot in under a minute.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="bg-white rounded-[24px] sm:rounded-[32px] shadow-[0_20px_50px_rgba(13,148,136,0.06)] border border-slate-100 overflow-hidden relative min-h-[500px]">
            {isSubmitted ? (
               /* Success State */
               <div className="flex flex-col items-center justify-center p-10 sm:p-20 text-center h-full min-h-[500px]">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-500 flex items-center justify-center mb-8">
                   <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
                 </div>
                 <h3 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 mb-4">
                   Booking Confirmed!
                 </h3>
                 <p className="text-sm sm:text-base text-slate-500 font-medium max-w-md mb-10 leading-relaxed">
                   Thank you, <span className="text-teal-600 font-bold">{formData.name}</span>. Your appointment for <span className="text-slate-800 font-bold">{formData.service}</span> on <span className="text-slate-800 font-bold">{formData.date}</span> is processing. We will call you at <span className="text-slate-800 font-bold">{formData.phone}</span> to confirm the exact time.
                 </p>
                 <button
                   onClick={handleReset}
                   className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-slate-900 hover:bg-teal-600 text-white font-black text-sm transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-1"
                 >
                   Book Another Appointment
                   <ArrowRight className="w-4 h-4 ml-2" />
                 </button>
               </div>
            ) : (
              <div className="flex flex-col h-full min-h-[500px]">
                {/* Progress Bar Header */}
                <div className="bg-slate-50/50 border-b border-slate-100 px-6 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${step >= 1 ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'}`}>1</div>
                    <div className={`w-10 sm:w-16 h-1 rounded-full ${step >= 2 ? 'bg-teal-600' : 'bg-slate-200'}`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${step >= 2 ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                    <div className={`w-10 sm:w-16 h-1 rounded-full ${step >= 3 ? 'bg-teal-600' : 'bg-slate-200'}`} />
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-black ${step >= 3 ? 'bg-teal-600 text-white' : 'bg-slate-200 text-slate-500'}`}>3</div>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-400">
                    Step {step} of 3
                  </div>
                </div>

                {/* Form Content */}
                <div className="p-6 sm:p-12 flex-1 flex flex-col justify-center">
                  <form className="w-full max-w-2xl mx-auto h-full flex flex-col justify-center">
                    
                    {/* STEP 1: Service */}
                    {step === 1 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">What do you need help with?</h3>
                        <p className="text-slate-500 text-sm mb-8">Select the primary service you are looking for.</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {servicesList.map((svc) => {
                            const Icon = svc.icon;
                            const isSelected = formData.service === svc.name;
                            return (
                              <div
                                key={svc.name}
                                onClick={() => setFormData({ ...formData, service: svc.name })}
                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${
                                  isSelected 
                                    ? 'border-teal-500 bg-teal-50/50 shadow-sm' 
                                    : 'border-slate-100 hover:border-teal-200 hover:bg-slate-50'
                                }`}
                              >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${isSelected ? 'bg-teal-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <span className={`text-sm sm:text-base font-bold ${isSelected ? 'text-teal-900' : 'text-slate-700'}`}>
                                  {svc.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Date */}
                    {step === 2 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">When should we schedule this?</h3>
                        <p className="text-slate-500 text-sm mb-8">Pick your preferred date for the appointment.</p>
                        
                        <div className="max-w-md">
                          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Select Date</label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                              type="date"
                              required
                              min={new Date().toISOString().split('T')[0]}
                              value={formData.date}
                              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                              className="w-full pl-12 pr-4 py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-base font-bold text-slate-800 transition-all duration-200 cursor-pointer"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Details */}
                    {step === 3 && (
                      <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                        <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">Your Details</h3>
                        <p className="text-slate-500 text-sm mb-8">Let us know how we can reach you to confirm.</p>
                        
                        <div className="space-y-5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Full Name</label>
                              <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                  type="text"
                                  required
                                  placeholder="John Doe"
                                  value={formData.name}
                                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-bold text-slate-800 transition-all duration-200"
                                />
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                              <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                  type="tel"
                                  required
                                  placeholder="+91 XXXXX XXXXX"
                                  value={formData.phone}
                                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                  className="w-full pl-12 pr-4 py-3.5 sm:py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-bold text-slate-800 transition-all duration-200"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Additional Notes (Optional)</label>
                            <textarea
                              rows="3"
                              placeholder="Briefly describe your dental issue or any specific requirements..."
                              value={formData.notes}
                              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                              className="w-full px-4 py-3.5 sm:py-4 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border-2 border-slate-100 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-bold text-slate-800 transition-all duration-200 resize-none"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                  </form>
                </div>

                {/* Footer Navigation */}
                <div className="px-6 sm:px-8 py-5 sm:py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="inline-flex items-center justify-center px-4 sm:px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 font-bold text-sm transition-all shadow-sm"
                    >
                      <ChevronLeft className="w-4 h-4 mr-1" /> Back
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                        (step === 1 && isStep1Valid) || (step === 2 && isStep2Valid)
                          ? 'bg-teal-600 text-white hover:bg-teal-500 shadow-teal-500/25 hover:-translate-y-0.5'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Continue <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isStep3Valid}
                      className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-sm ${
                        isStep3Valid
                          ? 'bg-slate-900 text-white hover:bg-teal-600 shadow-lg hover:-translate-y-0.5'
                          : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Confirm <span className="hidden sm:inline">&nbsp;Booking</span> <CheckCircle className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

