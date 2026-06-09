import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BottomNav from './components/BottomNav';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Services from './components/Services';
import Doctor from './components/Doctor';
import WhyChooseUs from './components/WhyChooseUs';
import BeforeAfter from './components/BeforeAfter';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './components/AboutUs';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import AppointmentPage from './components/AppointmentPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [appointmentService, setAppointmentService] = useState(null);

  const handleSetCurrentPage = (page, service = null) => {
    setCurrentPage(page);
    setActiveBlogPost(null);
    setIsMobileMenuOpen(false);
    if (page === 'appointment' && service) {
      setAppointmentService(service);
    } else if (page !== 'appointment') {
      setAppointmentService(null);
    }
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const scrollToSection = (id) => {
    setCurrentPage('home');
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(id);
      if (element) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white text-slate-700 antialiased font-sans selection:bg-brand-blue/10 selection:text-brand-blue pb-16 lg:pb-0">
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={handleSetCurrentPage} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main>
        {currentPage === 'home' && (
          <>
            {/* Hero Banner Section (includes inline Appointment Form and Stats) */}
            <Hero setCurrentPage={handleSetCurrentPage} />
            
            {/* Trust/Brands Banner Section */}
            <TrustBanner />
            
            {/* Clinical Services Grid */}
            <Services setCurrentPage={handleSetCurrentPage} />

            {/* Featured Dentists */}
            <Doctor setCurrentPage={handleSetCurrentPage} />
            
            {/* Core Clinic Benefits */}
            <WhyChooseUs />
            
            {/* Before & After Interactive Slider (Smile Transformations) */}
            <BeforeAfter />
            
            {/* Testimonials Side-by-Side Cards */}
            <Testimonials />
            
            {/* Latest Dental Tips & Insights Blog */}
            <Blog 
              setCurrentPage={handleSetCurrentPage}
              setActiveBlogPost={setActiveBlogPost}
            />
            
            {/* Ready to Transform Your Smile CTA */}
            <CTABanner setCurrentPage={handleSetCurrentPage} />
          </>
        )}
        {currentPage === 'about' && (
          <AboutUs setCurrentPage={handleSetCurrentPage} />
        )}
        {currentPage === 'blog' && (
          <BlogPage 
            setCurrentPage={handleSetCurrentPage} 
            activeBlogPost={activeBlogPost}
            setActiveBlogPost={setActiveBlogPost}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage setCurrentPage={handleSetCurrentPage} />
        )}
        {currentPage === 'appointment' && (
          <AppointmentPage 
            setCurrentPage={handleSetCurrentPage} 
            initialService={appointmentService}
          />
        )}
      </main>

      {/* Footer Navigation */}
      <Footer currentPage={currentPage} setCurrentPage={handleSetCurrentPage} />

      {/* Floating Instant Chat Toggle */}
      <WhatsAppButton />

      {/* Sticky Bottom Navigation Bar (Mobile & Tablet) */}
      <BottomNav 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        onBookClick={() => handleSetCurrentPage('appointment')}
        onLocationClick={() => scrollToSection('#footer')}
      />
    </div>
  );
}

export default App;
