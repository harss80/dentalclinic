import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer({ currentPage, setCurrentPage }) {
  const handleScrollTo = (id) => {
    if (id === '#why-us' || id === '#about') {
      if (setCurrentPage) {
        setCurrentPage('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === '#blog') {
      if (setCurrentPage) {
        setCurrentPage('blog');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === '#contact') {
      if (setCurrentPage) {
        setCurrentPage('contact');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (setCurrentPage) {
        setCurrentPage('home');
      }
      
      const scrollToElement = () => {
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

      if (currentPage === 'about' || currentPage === 'blog') {
        setTimeout(scrollToElement, 120);
      } else {
        scrollToElement();
      }
    }
  };

  return (
    <footer id="footer" className="relative bg-[#0a1128] text-slate-400 pt-16 pb-24 lg:pb-12 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        
        {/* 5-Column Grid Directory Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16 text-left">
          
          {/* Column 1: Brand Description (lg:col-span-3) */}
          <div className="md:col-span-2 lg:col-span-3 flex flex-col items-start">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }}
              className="flex items-center gap-2.5 mb-6 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-blue flex items-center justify-center text-white">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  className="w-4.5 h-4.5"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 4.5 2 6 .5 1.5.5 3 0 4.5-.3 1-1.2 1.5-2.2 1.5h-.8c-.6 0-1 .4-1 1v0c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v0c0-.6-.4-1-1-1h-.8c-1 0-1.9-.5-2.2-1.5-.5-1.5-.5-3 0-4.5.5-1.5 2-3 2-6 0-3.5-2.5-6-6-6Z" />
                  <path d="M9 12c.5-1 1-2.5 1-4" />
                  <path d="M15 12c-.5-1-1-2.5-1-4" />
                </svg>
              </div>
              <span className="font-sans font-black text-xl leading-none text-white tracking-tight">
                DentaCare
              </span>
            </a>
            
            <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed mb-6">
              We are committed to providing exceptional dental care in a comfortable and modern environment.
            </p>

            {/* Social Links (Inline SVGs) */}
            <div className="flex items-center gap-2.5">
              <a href="#" className="w-8.5 h-8.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white border border-white/5 text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-lg shadow-brand-blue/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="w-8.5 h-8.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white border border-white/5 text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-lg shadow-brand-blue/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="w-8.5 h-8.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white border border-white/5 text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-lg shadow-brand-blue/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="w-8.5 h-8.5 rounded-lg bg-white/5 hover:bg-brand-blue hover:text-white border border-white/5 text-slate-400 flex items-center justify-center transition-all duration-300 hover:scale-108 hover:shadow-lg shadow-brand-blue/5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (lg:col-span-2) */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6 border-l-2 border-brand-blue pl-2.5">
              Quick Links
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('#home'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Home</a></li>
              <li><a href="#why-us" onClick={(e) => { e.preventDefault(); handleScrollTo('#why-us'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">About Us</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Services</a></li>
              <li><a href="#before-after" onClick={(e) => { e.preventDefault(); handleScrollTo('#before-after'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Gallery</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services (lg:col-span-2) */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6 border-l-2 border-brand-blue pl-2.5">
              Our Services
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Dental Implants</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Cosmetic Dentistry</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Orthodontics</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Root Canal Treatment</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleScrollTo('#services'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Pediatric Dentistry</a></li>
            </ul>
          </div>

          {/* Column 4: Support (lg:col-span-2) */}
          <div className="md:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6 border-l-2 border-brand-blue pl-2.5">
              Support
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-semibold">
              <li><a href="#blog" onClick={(e) => { e.preventDefault(); handleScrollTo('#blog'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Terms & Conditions</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollTo('#contact'); }} className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block">Support Center</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us Details (lg:col-span-3) */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-xs font-black text-white uppercase tracking-widest mb-6 border-l-2 border-brand-blue pl-2.5">
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>123 Smile Avenue, New Delhi, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-brand-blue flex-shrink-0" />
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4.5 h-4.5 text-brand-blue flex-shrink-0" />
                <span>info@dentacare.com</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4.5 h-4.5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-white/5 pt-8 flex flex-row items-center justify-between gap-4 text-xs font-bold text-slate-500">
          <div className="text-left flex flex-col sm:flex-row gap-1.5 sm:gap-4.5">
            <span>© {new Date().getFullYear()} DentaCare. All rights reserved.</span>
            <div className="flex gap-2.5 sm:gap-4.5">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="opacity-30">|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            </div>
          </div>
          {/* Scroll to Top Circle Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-8.5 h-8.5 rounded-full bg-white/5 border border-white/10 hover:bg-brand-blue hover:text-white flex items-center justify-center text-slate-400 flex-shrink-0 transition-all cursor-pointer shadow-md hover:scale-105"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </footer>
  );
}
