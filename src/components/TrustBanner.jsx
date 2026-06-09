import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function TrustBanner() {
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

  const brandLogos = [
    {
      src: "/assets/Invisalign-logo.webp",
      alt: "Invisalign",
      wrapperClass: "max-w-[140px] sm:max-w-[170px] flex-shrink-0",
      className: "h-[38px] sm:h-[48px] md:h-[54px] w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300"
    },
    {
      src: "/assets/ivoclar-vivadent-logo.webp",
      alt: "Ivoclar Vivadent",
      wrapperClass: "max-w-[110px] sm:max-w-[130px] flex-shrink-0",
      className: "h-[36px] sm:h-[44px] md:h-[50px] w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300"
    },
    {
      src: "/assets/osstem-logo.webp",
      alt: "OSSTEM Implant",
      wrapperClass: "max-w-[110px] sm:max-w-[130px] flex-shrink-0",
      className: "h-[24px] sm:h-[28px] md:h-[32px] w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300"
    },
    {
      src: "/assets/3shape-logo.webp",
      alt: "3shape",
      wrapperClass: "max-w-[100px] sm:max-w-[120px] flex-shrink-0",
      className: "h-[18px] sm:h-[22px] md:h-[24px] w-auto object-contain mix-blend-multiply opacity-85 hover:opacity-100 transition-opacity duration-300"
    }
  ];

  return (
    <section className="relative bg-white py-6 md:py-8 overflow-hidden z-20 hidden lg:block">
      <div className="max-w-[1240px] mx-auto px-6">
        <ScrollReveal yOffset={30} delay={100}>
          <div className="bg-white rounded-[24px] sm:rounded-[32px] border border-slate-100 shadow-[0_12px_45px_rgba(29,78,216,0.04)] px-6 py-6 md:py-7 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* Avatar & Trusted Message Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <div className="flex -space-x-3">
                {patientAvatars.map((avatar, idx) => (
                  <img
                    key={idx}
                    src={avatar.url}
                    alt={avatar.alt}
                    className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  />
                ))}
              </div>
              <div>
                <span className="block text-sm font-black text-slate-800 tracking-tight leading-tight">
                  Trusted by Thousands
                </span>
                <span className="block text-[11px] font-bold text-slate-400 mt-0.5">
                  of Happy Patients
                </span>
              </div>
            </div>

            {/* Vertical Divider 1 */}
            <div className="hidden md:block w-[1px] h-10 bg-slate-100" />

            {/* Ratings & Stars Group */}
            <div className="flex items-center gap-3.5">
              <span className="text-2xl font-black text-slate-800 leading-none tracking-tight">
                4.9
              </span>
              <div className="flex flex-col gap-1.5 justify-center">
                {/* 5 Stars Row */}
                <div className="flex text-amber-500 gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 fill-current"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="block text-[11px] font-bold text-slate-400 leading-none">
                  (2,500+ Reviews)
                </span>
              </div>
            </div>

            {/* Vertical Divider 2 */}
            <div className="hidden lg:block w-[1px] h-10 bg-slate-100" />

            {/* Partner Logos Group */}
            <div className="grid grid-cols-2 gap-y-5 gap-x-8 md:flex md:flex-nowrap items-center justify-center lg:gap-10 xl:gap-12 flex-grow md:flex-grow-0 md:justify-end">
              {brandLogos.map((logo, idx) => (
                <div key={idx} className={`flex items-center justify-center mx-auto md:mx-0 ${logo.wrapperClass}`}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.className}
                  />
                </div>
              ))}
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
