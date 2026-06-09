import React, { useEffect, useState, useRef } from 'react';
import ScrollReveal, { StaggerContainer, StaggerItem } from './ScrollReveal';

function Counter({ target, duration = 1500, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const isFloat = String(target).includes('.');
    const end = parseFloat(target);
    if (isNaN(end)) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * end;
      
      setCount(isFloat ? currentVal.toFixed(1) : Math.floor(currentVal));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const statsList = [
    { target: 2000, suffix: '+', label: 'Happy Patients' },
    { target: 15, suffix: '+', label: 'Years Experience' },
    { target: 4.9, suffix: '', label: 'Google Rating' },
    { target: 12, suffix: '', label: 'Specialist MDs' },
  ];

  return (
    <section className="relative z-30 px-6 -mt-12 sm:-mt-16 pb-12">
      <div className="max-w-[1200px] mx-auto">
        <StaggerContainer className="bg-white/80 backdrop-blur-2xl rounded-[32px] border border-slate-200/80 shadow-[0_20px_45px_rgba(13,148,136,0.06)] p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {statsList.map((stat, idx) => (
            <StaggerItem 
              key={idx} 
              className="flex flex-col items-center justify-center text-center relative px-2"
            >
              {/* Visual vertical separators for desktop */}
              {idx > 0 && (
                <div className="hidden md:block absolute left-0 top-1/6 bottom-1/6 w-px bg-slate-200/60" />
              )}
              
              <div className="font-sans font-black text-3xl sm:text-4xl lg:text-[44px] bg-gradient-to-tr from-teal-600 to-blue-600 bg-clip-text text-transparent tracking-tight mb-2">
                <Counter target={stat.target} suffix={stat.suffix} />
              </div>
              <div className="text-[11px] sm:text-xs font-black text-slate-505 uppercase tracking-wider">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
