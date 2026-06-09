import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem, TiltCard } from './ScrollReveal';
import {
  TeethWhiteningIcon,
  ClearAlignersIcon,
  DentalImplantsIcon,
  RootCanalIcon,
  PediatricIcon,
  ScalingIcon
} from './DentalIcons';

export default function Services({ setCurrentPage }) {
  const sliderRef = useRef(null);

  const servicesList = [
    {
      icon: DentalImplantsIcon,
      title: 'Dental Implants',
      description: 'Permanent solutions for missing teeth with natural look and feel.',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: TeethWhiteningIcon,
      title: 'Cosmetic Dentistry',
      description: 'Enhance your smile with veneers, whitening, and more.',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: ClearAlignersIcon,
      title: 'Orthodontics',
      description: 'Straighten your teeth effectively with modern orthodontic solutions.',
      image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: RootCanalIcon,
      title: 'Root Canal Treatment',
      description: 'Relieve pain and save your natural teeth with advanced care.',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80'
    },
    {
      icon: PediatricIcon,
      title: 'Pediatric Dentistry',
      description: 'Special dental care for children in a fun and safe environment.',
      image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop&q=80'
    }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft } = sliderRef.current;
      const card = sliderRef.current.querySelector('.service-card-wrapper');
      if (card) {
        const cardWidth = card.offsetWidth + 24; // card width + gap
        const scrollAmount = direction === 'left' 
          ? scrollLeft - cardWidth 
          : scrollLeft + cardWidth;
        sliderRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleServiceClick = (title) => {
    if (setCurrentPage) {
      setCurrentPage('appointment', title);
    }
  };

  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
      {/* Background blurs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <ScrollReveal className="max-w-2xl text-left">
            <span className="text-[11px] font-black text-brand-blue tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full border border-brand-blue/10">
              Our Services
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-6 mb-4">
              Comprehensive Dental Care Under One Roof
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              From routine checkups to smile makeovers — we've got you covered.
            </p>
          </ScrollReveal>
                   <ScrollReveal delay={100} className="hidden lg:flex flex-shrink-0 items-center gap-3.5 text-left">
            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-xl border border-slate-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-slate-500 bg-white transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                aria-label="Slide Left"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-xl border border-slate-200 hover:border-brand-blue hover:text-brand-blue flex items-center justify-center text-slate-500 bg-white transition-all cursor-pointer shadow-sm hover:shadow-md active:scale-95"
                aria-label="Slide Right"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>

            <button 
              onClick={() => setCurrentPage && setCurrentPage('appointment')}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border-2 border-brand-blue/25 hover:border-brand-blue hover:text-brand-blue text-slate-700 font-bold text-sm bg-white transition-all duration-300 cursor-pointer"
            >
              View All Services
            </button>
          </ScrollReveal>
        </div>

        {/* Mobile/Tablet Vertical List (lg:hidden) */}
        <div className="flex flex-col gap-3 lg:hidden mb-8">
          {servicesList.map((service, idx) => {
            return (
              <div 
                key={idx} 
                onClick={() => handleServiceClick(service.title)}
                className="flex items-center gap-4 p-3 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
              >
                {/* Left: Small rounded image */}
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Middle: Title & Description */}
                <div className="flex-grow text-left">
                  <h3 className="text-xs font-black text-slate-800 group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-bold mt-1 leading-snug">
                    {service.description}
                  </p>
                </div>

                {/* Right: Blue arrow chevron */}
                <div className="w-8 h-8 rounded-lg bg-brand-light flex items-center justify-center text-brand-blue flex-shrink-0 group-hover:translate-x-0.5 transition-transform duration-350">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            );
          })}

          {/* Mobile View All Services Button */}
          <button 
            onClick={() => setCurrentPage && setCurrentPage('appointment')}
            className="w-full mt-2 py-3.5 border border-brand-blue/30 text-brand-blue font-black text-[11px] uppercase tracking-wider rounded-xl bg-white hover:bg-brand-light transition-all duration-300 cursor-pointer text-center"
          >
            View All Services
          </button>
        </div>

        {/* Swipeable Snap-Scroll Horizontal Slider Grid Container */}
        <div 
          ref={sliderRef}
          className="hidden lg:flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory pb-6"
        >
          {servicesList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx} 
                className="service-card-wrapper snap-start flex-shrink-0 w-[85vw] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]"
              >
                <TiltCard className="h-full">
                  <div 
                    onClick={() => handleServiceClick(service.title)}
                    className="bento-card-light h-full overflow-hidden flex flex-col justify-between group relative transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(29,78,216,0.08)] hover:border-brand-blue/15 cursor-pointer"
                  >
                    
                    {/* Visual Preview Image */}
                    <div className="h-[150px] w-full relative overflow-hidden bg-slate-50">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Overlapping circular icon badge */}
                    <div className="absolute top-[126px] left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md z-20 border border-slate-100/80">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-blue text-white shadow-inner transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                        <IconComponent className="w-4.5 h-4.5" />
                      </div>
                    </div>

                    {/* Detail Card Content */}
                    <div className="p-6 pt-10 flex flex-col items-center text-center flex-grow bg-white">
                      <h3 className="font-sans font-black text-[14.5px] text-slate-800 mb-2 leading-tight transition-colors group-hover:text-brand-blue">
                        {service.title}
                      </h3>
                      <p className="text-[11.5px] text-slate-500 font-bold leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-black text-brand-blue uppercase tracking-wider mt-auto hover:text-brand-hover transition-colors">
                        Learn More
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>

                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
