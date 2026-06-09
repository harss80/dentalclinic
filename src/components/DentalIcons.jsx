import React from 'react';

// 1. Teeth Whitening / Cosmetic Dentistry Icon
// Features: A clean contour of a healthy tooth with three bright, multi-pointed sparkles.
export const TeethWhiteningIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Clean tooth outline */}
    <path d="M7.2 8.5c0-2.3 1.8-4.2 4.8-4.2s4.8 1.9 4.8 4.2c0 1.8-.8 3-1.4 4-.3.6-.3 1.3 0 1.9.4 1 1.4 1.9 1.4 3.3 0 1-.5 1.8-1.8 1.8H13c-.7 0-1.3-.6-1.8-1.3-.4-.6-.8-.6-1.2 0-.5.7-1.1 1.3-1.8 1.3H9c-1.3 0-1.8-.8-1.8-1.8 0-1.4 1-2.3 1.4-3.3.3-.6.3-1.3 0-1.9-.6-1-1.4-2.2-1.4-4z" />
    {/* Primary Sparkle - Golden Amber */}
    <path d="M19.5 4.5l-2.5 2.5M17 4.5l2.5 2.5" strokeWidth="1.6" className="text-amber-500" stroke="currentColor" />
    {/* Secondary Sparkle - Golden Amber */}
    <path d="M5.5 15.5l-2 2M3.5 15.5l2 2" strokeWidth="1.6" className="text-amber-500" stroke="currentColor" />
    {/* Inner tooth reflection path */}
    <path d="M10 7.5a1.5 1.5 0 011.5-1.5" strokeWidth="1.5" className="opacity-60" />
  </svg>
);

// 2. Clear Aligners / Orthodontics Icon
// Features: Two front teeth aligned perfectly with a sleek outer clear aligner wrap band and brackets.
export const ClearAlignersIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Left central tooth */}
    <path d="M6 7.5c0-1.8 1.2-3 3-3s3 1.2 3 3v4c0 1.2-.4 2-1 2.5-.2.2-.4.5-.4.8v3.7c0 .8-.4 1.2-1.2 1.2s-1.2-.4-1.2-1.2V14.8c0-.3-.2-.6-.4-.8-.6-.5-1.8-1.3-1.8-2.5v-4z" />
    {/* Right central tooth */}
    <path d="M12 7.5c0-1.8 1.2-3 3-3s3 1.2 3 3v4c0 1.2-.4 2-1 2.5-.2.2-.4.5-.4.8v3.7c0 .8-.4 1.2-1.2 1.2s-1.2-.4-1.2-1.2V14.8c0-.3-.2-.6-.4-.8-.6-.5-1.8-1.3-1.8-2.5v-4z" />
    {/* Clear Aligner wrap band overlay - Accent colored */}
    <path d="M4.2 9c2 .5 5 .8 7.8.8s5.8-.3 7.8-.8" strokeWidth="2.4" className="text-cyan-500" stroke="currentColor" />
    {/* Bracket alignment coordinates */}
    <rect x="7.5" y="8.5" width="2" height="2" rx="0.5" fill="currentColor" stroke="none" />
    <rect x="13.5" y="8.5" width="2" height="2" rx="0.5" fill="currentColor" stroke="none" />
  </svg>
);

// 3. Dental Implants Icon
// Features: Sleek visual display of a tooth crown on top, structural abutment core, and a medical titanium screw post.
export const DentalImplantsIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Crown cap */}
    <path d="M7 6c0-2 2-3 5-3s5 1 5 3v2.5c0 1.2-.8 2-1.8 2.5H8.8C7.8 8.5 7 7.7 7 6.5V6z" />
    {/* Abutment connection core */}
    <path d="M9.5 9h5v2.5h-5z" fill="currentColor" className="text-slate-400" stroke="none" />
    {/* Implant root screw post */}
    <path d="M12 11.5v8.5" strokeWidth="2.4" className="text-slate-500" stroke="currentColor" />
    {/* Thread ridges */}
    <path d="M9.5 13.5h5M9.5 15.5h5M10.2 17.5h3.6M11 19.5h2" strokeWidth="1.8" className="text-slate-400" stroke="currentColor" />
  </svg>
);

// 4. Root Canal Treatment Icon
// Features: Vertical cross section view showing root chamber pulp canals with delicate nerve branches.
export const RootCanalIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Outer Tooth body */}
    <path d="M7.2 8c0-2.3 1.8-4 4.8-4s4.8 1.7 4.8 4c0 2.2-.8 3.5-1.4 4.5-.3.6-.3 1.3 0 1.9.4 1.1 1.4 2.3 1.4 4.1 0 .9-.5 1.4-1.4 1.4h-1c-.5 0-1-.3-1.2-.9-.3-.8-.8-1.4-1.2-1.4s-.9.6-1.2 1.4c-.2.6-.7.9-1.2.9H9c-.9 0-1.4-.5-1.4-1.4 0-1.8 1-3 1.4-4.1.3-.6.3-1.3 0-1.9-.6-1-1.4-2.3-1.4-4.5z" />
    {/* Pulp cavity chamber & nerve roots - Rose/Coral highlight */}
    <path d="M12 6.5v4.5M12 11c-.5.8-1 1.8-1.2 2.8M12 11c.5.8 1 1.8 1.2 2.8" strokeWidth="1.8" className="text-rose-500" stroke="currentColor" />
    {/* Endodontic micro file cleaning tool entering */}
    <path d="M12 1.5V5.5" strokeWidth="1.5" strokeDasharray="1.5 1.5" className="text-slate-400" stroke="currentColor" />
    <path d="M10.5 1.5h3" strokeWidth="2" className="text-slate-500" stroke="currentColor" />
  </svg>
);

// 5. Pediatric Dentistry Icon
// Features: A friendly, round, baby tooth with cartoon eyes, a smile, and a cute sparkling magic star/crown above.
export const PediatricIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Soft, rounded child tooth */}
    <path d="M8.2 9.5c0-1.8 1.5-2.8 3.8-2.8s3.8 1 3.8 2.8c0 1.5-.7 2.2-1 3-.2.6-.2 1.2 0 1.8.3.8.9 1.5.9 2.5 0 .8-.4 1.2-1.1 1.2h-.7c-.4 0-.8-.3-1-.9-.2-.6-.6-.9-1-.9s-.8.3-1 .9c-.2.6-.6.9-1 .9h-.7c-.7 0-1.1-.4-1.1-1.2 0-1 .6-1.7.9-2.5.2-.6.2-1.2 0-1.8-.3-.8-1-1.5-1-3z" />
    {/* Happy eyes */}
    <circle cx="10.5" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
    <circle cx="13.5" cy="11.5" r="0.75" fill="currentColor" stroke="none" />
    {/* Smile */}
    <path d="M11.2 13.8a1.2 1.2 0 001.6 0" strokeWidth="1.5" stroke="currentColor" />
    {/* Tiny star crown above - Cyan/Accent blue */}
    <path d="M12 2l.6 1.2 1.2.2-.8.8.2 1.2-1.2-.6-1.2.6.2-1.2-.8-.8 1.2-.2L12 2z" fill="currentColor" className="text-cyan-500" stroke="none" />
  </svg>
);

// 6. Scaling & Cleaning Icon
// Features: A clean tooth being treated with a curette/scaler hook tool, spraying clean water droplets.
export const ScalingIcon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Tooth outline */}
    <path d="M7.2 8.5c0-2.3 1.8-4.2 4.8-4.2s4.8 1.9 4.8 4.2c0 1.8-.8 3-1.4 4-.3.6-.3 1.3 0 1.9.4 1 1.4 1.9 1.4 3.3 0 1-.5 1.8-1.8 1.8H13c-.7 0-1.3-.6-1.8-1.3-.4-.6-.8-.6-1.2 0-.5.7-1.1 1.3-1.8 1.3H9c-1.3 0-1.8-.8-1.8-1.8 0-1.4 1-2.3 1.4-3.3.3-.6.3-1.3 0-1.9-.6-1-1.4-2.2-1.4-4z" />
    {/* Curved scaling instrument hook scraping tartar - Slate color */}
    <path d="M20.5 4.5c-2 0-3.5 1-3.5 2.5v3M17 10l-1.5 1.5" strokeWidth="2.0" className="text-slate-400" stroke="currentColor" />
    {/* Water droplets / freshness bubbles - Light sky blue */}
    <circle cx="9.5" cy="8.5" r="0.8" fill="currentColor" className="text-cyan-400" stroke="none" />
    <circle cx="14.5" cy="7.5" r="0.6" fill="currentColor" className="text-cyan-400" stroke="none" />
    <circle cx="8" cy="11.5" r="0.5" fill="currentColor" className="text-cyan-400" stroke="none" />
  </svg>
);
