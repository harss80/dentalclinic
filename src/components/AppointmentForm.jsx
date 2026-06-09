import React, { useState } from 'react';
import { Calendar, Phone, User, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import ScrollReveal, { Magnetic } from './ScrollReveal';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Teeth Whitening',
    'Braces & Aligners',
    'Root Canal Therapy',
    'Dental Implants',
    'Kids Dentistry',
    'Smile Makeover'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone && formData.service && formData.date) {
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', service: '', date: '', notes: '' });
    setIsSubmitted(false);
  };

  return (
    <section id="appointment" className="relative py-32 bg-white overflow-hidden border-t border-slate-100">
      {/* Background patterns */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Headline / Text */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <ScrollReveal>
              <span className="text-xs font-black text-teal-600 tracking-widest uppercase bg-teal-50 px-4 py-2 rounded-full border border-teal-100">
                Book a Visit
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-[44px] text-slate-900 leading-tight mt-6 mb-5">
                Ready to Experience <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Pristine Care?</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-505 font-medium leading-relaxed mb-9">
                Schedule your appointment online today. Choose your preferred service and date, and our patient coordinator will reach out to confirm your slot within 2 hours.
              </p>
              
              {/* Call support & info cards */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/60 p-4.5 rounded-2xl w-full sm:w-auto shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center font-bold flex-shrink-0">
                    <Phone className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Helpline Contact</h4>
                    <p className="text-sm font-black text-slate-800">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-slate-50 border border-slate-200/60 p-4.5 rounded-2xl w-full sm:w-auto shadow-sm">
                  <div className="w-11 h-11 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold flex-shrink-0">
                    <Clock className="w-5.5 h-5.5" />
                  </div>
                  <div className="text-left">
                    <h4 className="text-[10px] font-black text-slate-400 tracking-wider uppercase">Active Scheduling</h4>
                    <p className="text-sm font-black text-slate-800">2-Hour Confirmation</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Interactive Form Card */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={200}>
              {/* Overhauled form container with glass design */}
              <div className="bg-white p-8 sm:p-11 rounded-[32px] border border-slate-200 shadow-[0_20px_50px_rgba(13,148,136,0.04)] max-w-[620px] mx-auto relative overflow-hidden">
                {isSubmitted ? (
                  /* Success State Screen */
                  <div className="text-center py-10 flex flex-col items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-8 shadow-sm">
                      <CheckCircle className="w-11 h-11" />
                    </div>
                    <h3 className="font-sans font-black text-2xl text-slate-900 mb-3">
                      Appointment Requested!
                    </h3>
                    <p className="text-sm text-slate-500 font-semibold max-w-sm mb-8 leading-relaxed">
                      Thank you, <span className="text-teal-600 font-black">{formData.name}</span>. We have received your request for <span className="text-slate-800 font-black">{formData.service}</span> on <span className="text-slate-800 font-black">{formData.date}</span>. Our representative will contact you shortly.
                    </p>
                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-slate-900 hover:bg-teal-600 text-white font-black text-sm transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5"
                    >
                      Book Another Slot
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                ) : (
                  /* Form Fields */
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Your Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-semibold text-slate-800 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Phone input */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                          <input
                            type="tel"
                            required
                            placeholder="+91 XXXXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-11 pr-4 py-3.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-semibold text-slate-800 transition-all duration-200"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Service Dropdown */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Select Service</label>
                        <div className="relative">
                          <select
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-semibold text-slate-800 transition-all duration-200 cursor-pointer appearance-none"
                          >
                            <option value="" disabled className="text-slate-400">Choose a service</option>
                            {services.map((svc) => (
                              <option key={svc} value={svc} className="text-slate-800">{svc}</option>
                            ))}
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Date Picker */}
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Preferred Date</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-semibold text-slate-800 transition-all duration-200 cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Additional Notes (Optional)</label>
                      <textarea
                        rows="3"
                        placeholder="Brief description of symptoms, or dental history..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50 hover:bg-slate-100/50 focus:bg-white rounded-2xl border border-slate-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-50 focus:outline-none text-sm font-semibold text-slate-800 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button with Magnetic Pull */}
                    <div className="w-full text-center">
                      <Magnetic strength={0.15}>
                        <button
                          type="submit"
                          className="w-full min-w-[280px] inline-flex items-center justify-center py-4 px-10 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-black text-base shadow-[0_4px_14px_rgba(13,148,136,0.2)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                        >
                          <Calendar className="w-5 h-5 mr-2" />
                          Request Appointment Slot
                        </button>
                      </Magnetic>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
