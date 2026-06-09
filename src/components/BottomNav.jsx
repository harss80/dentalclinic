import React from 'react';
import { Phone, Calendar, MapPin, Menu } from 'lucide-react';

export default function BottomNav({ onMenuToggle, onBookClick, onLocationClick }) {
  return (
    <div className="fixed bottom-0 left-0 w-full z-45 bg-white/95 backdrop-blur-lg shadow-[0_-8px_30px_rgba(0,0,0,0.06)] border-t border-slate-100 lg:hidden pb-safe">
      <div className="flex items-center justify-around h-16 px-1 relative">
        {/* Call Us */}
        <a 
          href="tel:+12345678900" 
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 active:text-brand-blue transition-colors cursor-pointer"
        >
          <Phone className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[9px] font-black tracking-tight mt-1">Call Us</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/+919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 active:text-emerald-500 transition-colors cursor-pointer"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-5 h-5 text-slate-500 hover:text-emerald-500"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.725-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.116-2.905-6.993C16.643 1.87 14.167.839 11.53.837c-5.442 0-9.87 4.42-9.874 9.865-.001 1.714.453 3.39 1.317 4.877L1.97 21.12l5.73-1.503c-1.04.593-1.636 1.055-1.053 1.537z" />
          </svg>
          <span className="text-[9px] font-black tracking-tight mt-1">WhatsApp</span>
        </a>

        {/* Center Booking Action */}
        <div className="flex-1 flex flex-col items-center justify-end h-full pb-1 relative">
          <button 
            onClick={onBookClick}
            className="absolute -top-4 w-12 h-12 bg-brand-blue hover:bg-brand-hover text-white rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(29,78,216,0.3)] active:scale-95 transition-all cursor-pointer z-50"
            aria-label="Book Appointment"
          >
            <Calendar className="w-5 h-5 stroke-[2.2]" />
          </button>
          <span className="text-[9px] font-black tracking-tight text-slate-500 mt-auto">Book Appointment</span>
        </div>

        {/* Location */}
        <button 
          onClick={onLocationClick}
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 active:text-brand-blue transition-colors cursor-pointer"
        >
          <MapPin className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[9px] font-black tracking-tight mt-1">Location</span>
        </button>

        {/* Menu Toggle */}
        <button 
          onClick={onMenuToggle}
          className="flex flex-col items-center justify-center flex-1 py-1 text-slate-500 active:text-brand-blue transition-colors cursor-pointer"
        >
          <Menu className="w-5 h-5 stroke-[2.2]" />
          <span className="text-[9px] font-black tracking-tight mt-1">Menu</span>
        </button>
      </div>
    </div>
  );
}
