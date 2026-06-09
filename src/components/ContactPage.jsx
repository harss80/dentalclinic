import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  ArrowRight
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CTABanner from './CTABanner';

export default function ContactPage({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', phone: '', service: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="bg-white text-slate-700 antialiased font-sans selection:bg-brand-blue/10 selection:text-brand-blue">
      
      {/* HERO SECTION */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-20 overflow-hidden flex items-center">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 bg-[#eef3f9]">
          <img 
            src="/assets/contactimage.webp" 
            alt="Contact Us Background" 
            className="w-full h-full object-cover object-[75%_10%] md:object-[60%_10%] lg:object-[center_10%] opacity-90 mix-blend-multiply"
          />
          {/* Gradient Overlay for Text Readability - Fades from solid #eef3f9 on the left to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef3f9] via-[#eef3f9]/95 to-[#eef3f9]/0 w-full lg:w-[65%]" />
        </div>

        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content (Text & Info) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50/80 text-[#0050ff] rounded-md text-[9.5px] font-black uppercase tracking-widest mb-6 border border-blue-100 backdrop-blur-sm shadow-sm">
                  <Mail className="w-3.5 h-3.5" />
                  Contact Us
                </div>
                
                <h1 className="font-sans font-black text-[38px] sm:text-[46px] lg:text-[52px] text-[#0a1128] leading-[1.1] mb-5 tracking-tight">
                  We'd Love to Hear <br />
                  <span className="text-[#0050ff]">From You!</span>
                </h1>
                
                <p className="text-sm sm:text-[14.5px] text-slate-600 font-semibold leading-relaxed mb-10 max-w-md">
                  Have a question, need assistance, or want to book an appointment? Our friendly team is here to help.
                </p>

                {/* Vertical Contact Info List */}
                <div className="flex flex-col gap-7">
                  {/* Item 1 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-[#0050ff] flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-slate-900">Call Us</span>
                      <a href="tel:+12345678900" className="text-sm font-bold text-slate-600 hover:text-[#0050ff] transition-colors mt-0.5">+1 234 567 8900</a>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-[#0050ff] flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-slate-900">Email Us</span>
                      <a href="mailto:info@dentacare.com" className="text-sm font-bold text-slate-600 hover:text-[#0050ff] transition-colors mt-0.5">info@dentacare.com</a>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-[14px] bg-blue-50/80 border border-blue-100/50 flex items-center justify-center text-[#0050ff] flex-shrink-0 shadow-sm transition-transform group-hover:scale-105">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-black text-slate-900">Opening Hours</span>
                      <span className="text-sm font-bold text-slate-600 mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</span>
                      <span className="text-sm font-bold text-slate-600">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content (Form Card) */}
            <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-center">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-[16px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-100/50 p-7 sm:p-9">
                  <h3 className="font-sans font-black text-[22px] text-slate-900 mb-7 tracking-tight">Send Us a Message</h3>
                  
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center text-center py-10"
                    >
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-6 h-6 ml-1" />
                      </div>
                      <h4 className="font-black text-lg text-slate-900 mb-1">Message Sent!</h4>
                      <p className="text-xs text-slate-500 font-semibold">We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-full bg-white border border-slate-200/80 rounded-lg px-4 py-3.5 text-[12px] font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0050ff]/50 focus:ring-2 focus:ring-[#0050ff]/10 transition-all shadow-sm"
                        />
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          required
                          className="w-full bg-white border border-slate-200/80 rounded-lg px-4 py-3.5 text-[12px] font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0050ff]/50 focus:ring-2 focus:ring-[#0050ff]/10 transition-all shadow-sm"
                        />
                      </div>

                      {/* Service */}
                      <select 
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white border border-slate-200/80 rounded-lg px-4 py-3.5 text-[12px] font-bold text-slate-500 focus:text-slate-800 focus:outline-none focus:border-[#0050ff]/50 focus:ring-2 focus:ring-[#0050ff]/10 transition-all shadow-sm appearance-none cursor-pointer"
                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23475569' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }}
                      >
                        <option value="">Select Service</option>
                        <option value="General Consultation">General Consultation</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Orthodontics / Braces">Orthodontics</option>
                      </select>

                      {/* Email */}
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        className="w-full bg-white border border-slate-200/80 rounded-lg px-4 py-3.5 text-[12px] font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0050ff]/50 focus:ring-2 focus:ring-[#0050ff]/10 transition-all shadow-sm"
                      />

                      {/* Message */}
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                        rows="4"
                        className="w-full bg-white border border-slate-200/80 rounded-lg px-4 py-3.5 text-[12px] font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0050ff]/50 focus:ring-2 focus:ring-[#0050ff]/10 transition-all shadow-sm resize-none"
                      ></textarea>

                      {/* Submit */}
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-2 py-3.5 bg-[#0050ff] hover:bg-blue-700 text-white text-[12px] font-black rounded-lg flex items-center justify-center gap-2 transition-all shadow-md shadow-brand-blue/20"
                      >
                        {isSubmitting ? (
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4 -rotate-12" />
                            Send Message
                          </>
                        )}
                      </button>
                      <p className="text-center text-[10.5px] text-slate-500 font-semibold mt-4">
                        We'll get back to you as soon as possible.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* MIDDLE SECTION: 4 Grid Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl lg:text-[38px] font-black text-slate-900 mt-4 mb-3 tracking-tight">
              We Are Here for You
            </h2>
            <div className="w-12 h-1 bg-brand-blue mx-auto mb-12 rounded-full" />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <ScrollReveal delay={100}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full group">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[15px] text-slate-900 mb-3">Visit Our Clinic</h3>
                <p className="text-[11.5px] text-slate-500 font-semibold mb-6 leading-relaxed">
                  123 Smile Avenue,<br/>New Delhi, India<br/>110001
                </p>
                <a href="#" className="text-[11px] font-black text-brand-blue uppercase tracking-wider flex items-center gap-1.5 mt-auto group/btn">
                  Get Directions <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full group">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[15px] text-slate-900 mb-3">Call Us Anytime</h3>
                <a href="tel:+12345678900" className="text-[11.5px] text-slate-500 font-semibold leading-relaxed hover:text-brand-blue transition-colors">+1 234 567 8900</a>
                <a href="tel:+19876543210" className="text-[11.5px] text-slate-500 font-semibold leading-relaxed hover:text-brand-blue transition-colors">+1 987 654 3210</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full group">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[15px] text-slate-900 mb-3">Email Us</h3>
                <a href="mailto:info@dentacare.com" className="text-[11.5px] text-slate-500 font-semibold leading-relaxed hover:text-brand-blue transition-colors">info@dentacare.com</a>
                <a href="mailto:support@dentacare.com" className="text-[11.5px] text-slate-500 font-semibold leading-relaxed hover:text-brand-blue transition-colors">support@dentacare.com</a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:border-brand-blue/20 hover:shadow-lg transition-all duration-300 flex flex-col items-center h-full group">
                <div className="w-14 h-14 rounded-full bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-black text-[15px] text-slate-900 mb-3">Opening Hours</h3>
                <p className="text-[11.5px] text-slate-500 font-semibold leading-relaxed">Mon - Sat: 9:00 AM - 6:00 PM</p>
                <p className="text-[11.5px] text-slate-500 font-semibold leading-relaxed">Sunday: Closed</p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-24 max-w-[1240px] mx-auto px-6">
        <ScrollReveal>
          <div className="w-full h-[350px] lg:h-[450px] rounded-[32px] overflow-hidden relative border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] group bg-slate-100">
            {/* Embedded Google Map (Placeholder address for New Delhi) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000.72595604157!2d77.138945!3d28.644800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic Location Map"
              className="absolute inset-0 grayscale opacity-90 transition-all duration-700"
            ></iframe>
            
            {/* Floating Location Card */}
            <div className="absolute bottom-6 left-6 sm:bottom-1/2 sm:translate-y-1/2 sm:left-10 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-slate-100/50 max-w-[280px] z-10 transition-transform duration-500 sm:group-hover:translate-x-2">
              <h3 className="font-sans font-black text-xs text-slate-500 uppercase tracking-widest mb-1.5">Our Location</h3>
              <h4 className="font-black text-sm text-slate-900 mb-2">DentaCare Dental Clinic</h4>
              <p className="text-[11px] text-slate-500 font-bold mb-4 leading-relaxed">
                123 Smile Avenue, New Delhi, India 110001
              </p>
              <a href="#" className="text-[11px] font-black text-brand-blue flex items-center gap-1.5 hover:gap-2 transition-all">
                View on Google Maps <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA BANNER */}
      <CTABanner />

    </div>
  );
}
