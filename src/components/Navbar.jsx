import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, ArrowRight, Calendar } from 'lucide-react';
import { Magnetic } from './ScrollReveal';

import {
  TeethWhiteningIcon,
  ClearAlignersIcon,
  DentalImplantsIcon,
  RootCanalIcon,
  PediatricIcon,
  ScalingIcon
} from './DentalIcons';

export default function Navbar({ currentPage, setCurrentPage, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (currentPage === 'about') {
      setActiveLink('About Us');
    } else if (currentPage === 'blog') {
      setActiveLink('Blog');
    } else if (currentPage === 'home') {
      if (activeLink === 'About Us' || activeLink === 'Blog') {
        setActiveLink('Home');
      }
    }
  }, [currentPage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150); // 150ms delay for smooth hover transition
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#why-us' },
    { name: 'Services', href: '#services' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesList = [
    {
      name: 'Teeth Whitening',
      desc: 'Stain removal & professional bleaching',
      href: '#services',
      icon: 'sparkles'
    },
    {
      name: 'Clear Aligners',
      desc: 'Discreet orthodontic alignment',
      href: '#services',
      icon: 'smile'
    },
    {
      name: 'Dental Implants',
      desc: 'Permanent surgical tooth restoration',
      href: '#services',
      icon: 'shield'
    },
    {
      name: 'Root Canal Treatment',
      desc: 'Painless infected nerve restoration',
      href: '#services',
      icon: 'activity'
    },
    {
      name: 'Pediatric Dentistry',
      desc: 'Friendly care tailored for kids',
      href: '#services',
      icon: 'heart'
    },
    {
      name: 'Scaling & Cleaning',
      desc: 'Plaque removal & deep cleaning',
      href: '#services',
      icon: 'refresh'
    }
  ];

  const handleLinkClick = (e, href, name) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveLink(name);

    if (name === 'About Us') {
      if (setCurrentPage) {
        setCurrentPage('about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (name === 'Blog') {
      if (setCurrentPage) {
        setCurrentPage('blog');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (name === 'Contact') {
      if (setCurrentPage) {
        setCurrentPage('contact');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (setCurrentPage) {
        setCurrentPage('home');
      }

      const scrollToElement = () => {
        const element = document.querySelector(href);
        if (element) {
          const offset = 90; // offset for the header height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      };

      if (currentPage === 'about' || currentPage === 'blog') {
        setTimeout(scrollToElement, 120);
      } else {
        scrollToElement();
      }
    }
  };

  const handleAppointmentClick = (e) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    setActiveLink('');
    if (setCurrentPage) {
      setCurrentPage('appointment');
    }
  };

  const renderServiceIcon = (iconName) => {
    const classes = "w-4.5 h-4.5 text-brand-blue";
    switch(iconName) {
      case 'sparkles': return <TeethWhiteningIcon className={classes} />;
      case 'smile': return <ClearAlignersIcon className={classes} />;
      case 'shield': return <DentalImplantsIcon className={classes} />;
      case 'activity': return <RootCanalIcon className={classes} />;
      case 'heart': return <PediatricIcon className={classes} />;
      case 'refresh': return <ScalingIcon className={classes} />;
      default: return <TeethWhiteningIcon className={classes} />;
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-[background-color,box-shadow,padding] duration-300 ${
      isScrolled 
        ? 'bg-white shadow-[0_10px_30px_rgba(29,78,216,0.04)] py-4.5' 
        : 'bg-transparent py-5.5'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home', 'Home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          {/* Tooth Logo Icon - Outline directly on transparent/white background */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-8 h-8 text-brand-blue flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
          >
            <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 4.5 2 6 .5 1.5.5 3 0 4.5-.3 1-1.2 1.5-2.2 1.5h-.8c-.6 0-1 .4-1 1v0c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v0c0-.6-.4-1-1-1h-.8c-1 0-1.9-.5-2.2-1.5-.5-1.5-.5-3 0-4.5.5-1.5 2-3 2-6 0-3.5-2.5-6-6-6Z" />
            <path d="M9 12c.5-1 1-2.5 1-4" />
            <path d="M15 12c-.5-1-1-2.5-1-4" />
          </svg>
          <div className="flex flex-col">
            <span className="font-sans font-black text-2xl leading-none tracking-tight">
              <span className="text-slate-900">Denta</span>
              <span className="text-brand-blue">Care</span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 mt-1 tracking-wider">
              Your Smile, Our Care
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            if (link.name === 'Services') {
              return (
                <div 
                  key={link.name} 
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`relative text-[14px] font-bold px-4 py-1.5 transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                      activeLink === link.name 
                        ? 'text-slate-900' 
                        : 'text-slate-600 hover:text-brand-blue'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className={`w-3.5 h-3.5 opacity-80 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                    {activeLink === link.name && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-brand-blue rounded-full" />
                    )}
                  </a>

                  {/* Services Hover Dropdown Mega Menu with Framer Motion */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.96 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[580px] bg-white/95 backdrop-blur-md border border-slate-100 rounded-[24px] shadow-[0_20px_50px_rgba(29,78,216,0.12)] p-4 flex gap-4 z-50 origin-top"
                      >
                        
                        {/* Left Column: Services Grid (2 Columns) */}
                        <div className="grid grid-cols-2 gap-2 w-[65%] flex-shrink-0">
                          {servicesList.map((service) => (
                            <a
                              key={service.name}
                              href={service.href}
                              onClick={(e) => {
                                handleLinkClick(e, service.href, 'Services');
                                setIsDropdownOpen(false);
                              }}
                              className="flex items-center gap-3 text-left px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group/item cursor-pointer"
                            >
                              {/* Icon Wrapper */}
                              <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110">
                                {renderServiceIcon(service.icon)}
                              </div>
                              
                              {/* Text Wrapper */}
                              <div className="flex flex-col">
                                <span className="text-xs font-black text-slate-800 group-hover/item:text-brand-blue transition-colors">
                                  {service.name}
                                </span>
                                <span className="text-[9px] text-slate-400 font-bold mt-0.5 leading-snug">
                                  {service.desc}
                                </span>
                              </div>
                            </a>
                          ))}
                        </div>

                        {/* Right Column: Promotional Visual Card */}
                        <div className="w-[35%] relative overflow-hidden rounded-[18px] bg-slate-950 flex flex-col justify-end p-4 group/promo self-stretch min-h-[170px] shadow-sm border border-slate-100/5">
                          <img 
                            src="/assets/docterchekingimage.jpg" 
                            alt="Dental Care Promo" 
                            className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none opacity-60 transition-transform duration-700 group-hover/promo:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                          
                          {/* Promo Card Content */}
                          <div className="relative z-20 flex flex-col text-left">
                            <span className="text-[9px] font-black uppercase text-brand-blue bg-white/95 px-2 py-0.5 rounded-md self-start mb-2 tracking-wider shadow-sm">
                              Featured Offer
                            </span>
                            <h4 className="font-sans font-black text-xs text-white leading-tight mb-1">
                              Painless Laser Treatments
                            </h4>
                            <p className="text-[9px] text-slate-300 font-bold leading-normal mb-2.5">
                              Experience advanced clinical dental care.
                            </p>
                            <button 
                              onClick={handleAppointmentClick}
                              className="text-[10px] font-black text-white hover:text-brand-blue flex items-center gap-1 transition-colors duration-300"
                            >
                              Book Now
                              <ArrowRight className="w-3 h-3 text-white transition-transform duration-300 group-hover/promo:translate-x-0.5" />
                            </button>
                          </div>
                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href, link.name)}
                className={`relative text-[14px] font-bold px-4 py-2 transition-all duration-200 flex items-center gap-1 cursor-pointer ${
                  activeLink === link.name 
                    ? 'text-slate-900' 
                    : 'text-slate-600 hover:text-brand-blue'
                }`}
              >
                <span>{link.name}</span>
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-brand-blue rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Action Button & Contact (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+12345678900" className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-brand-blue transition-colors">
            <Phone className="w-4.5 h-4.5 text-brand-blue" />
            <span>+1 234 567 8900</span>
          </a>
          <Magnetic strength={0.2}>
            <button
              onClick={handleAppointmentClick}
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] bg-brand-blue text-white font-bold text-[13px] shadow-[0_4px_14px_rgba(29,78,216,0.15)] hover:bg-brand-hover hover:shadow-[0_6px_20px_rgba(29,78,216,0.25)] transition-all duration-300 cursor-pointer gap-2"
            >
              Book Appointment
              <Calendar className="w-4 h-4 opacity-90" />
            </button>
          </Magnetic>
        </div>

        {/* Hamburger Toggle (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-2xl hover:bg-slate-100 text-slate-700 transition-all border border-slate-200/60"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Advanced Full-Screen Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed inset-0 z-40 bg-white flex flex-col pt-[84px] pb-6 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-4 flex-grow mt-2">
              {navLinks.map((link, idx) => {
                if (link.name === 'Services') {
                  return (
                    <motion.div 
                      key={link.name} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + idx * 0.05 }}
                      className="flex flex-col border-b border-slate-100/60 pb-3"
                    >
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`text-3xl font-black transition-colors py-1 flex items-center justify-between w-full cursor-pointer ${
                          activeLink === 'Services' ? 'text-brand-blue' : 'text-slate-800'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className={`w-7 h-7 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-brand-blue' : 'text-slate-300'}`} />
                      </button>
                      
                      {/* Collapsible Services */}
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-3 pt-4 pb-2"
                          >
                            {servicesList.map((sub) => (
                              <a
                                key={sub.name}
                                href={sub.href}
                                onClick={(e) => handleLinkClick(e, sub.href, 'Services')}
                                className="text-sm font-bold text-slate-500 hover:text-brand-blue flex items-center gap-3"
                              >
                                <div className="w-9 h-9 rounded-full bg-brand-light/50 flex items-center justify-center flex-shrink-0">
                                  {renderServiceIcon(sub.icon)}
                                </div>
                                {sub.name}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.05 }}
                    className="border-b border-slate-100/60 pb-3"
                  >
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href, link.name)}
                      className={`text-3xl font-black transition-colors py-1 block ${
                        activeLink === link.name ? 'text-brand-blue' : 'text-slate-800 hover:text-brand-blue'
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.div>
                );
              })}

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-sm font-bold text-slate-700 py-3 mt-2"
              >
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider">Call Us 24/7</span>
                  <a href="tel:+12345678900" className="text-slate-800 text-base">+1 234 567 8900</a>
                </div>
              </motion.div>
            </div>

            {/* Promo Card at bottom of mobile menu */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-6 relative w-full h-[190px] rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(29,78,216,0.15)] flex-shrink-0"
            >
              <img 
                src="/assets/docterchekingimage.jpg" 
                alt="Advanced Dental Care" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col">
                <span className="text-white font-black text-xl leading-tight mb-1">
                  Ready for a Brighter Smile?
                </span>
                <p className="text-slate-300 text-[11px] font-bold mb-3.5">
                  Book your consultation today.
                </p>
                <button
                  onClick={handleAppointmentClick}
                  className="bg-brand-blue hover:bg-brand-hover text-white text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 w-full transition-colors shadow-sm cursor-pointer"
                >
                  Book Appointment <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
