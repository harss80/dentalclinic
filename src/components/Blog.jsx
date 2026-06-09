import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, X, Clock, Award } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Blog({ setCurrentPage, setActiveBlogPost }) {
  const [activeArticle, setActiveArticle] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalScrollRef = useRef(null);

  const handleArticleClick = (art) => {
    if (setCurrentPage && setActiveBlogPost) {
      let searchTitle = "5 Tips for Maintaining a Healthy Smile";
      if (art.title.toLowerCase().includes("implants")) {
        searchTitle = "Dental implants: Everything You Need to Know";
      } else if (art.title.toLowerCase().includes("whitening")) {
        searchTitle = "Teeth Whitening: Myths vs Facts";
      }
      setActiveBlogPost({ title: searchTitle });
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveArticle(art);
    }
  };

  const articles = [
    {
      title: '5 Tips for Maintaining a Healthy Smile',
      category: 'Hygiene',
      date: 'May 20, 2026',
      readTime: '3 min read',
      image: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=800&auto=format&fit=crop&q=80',
      description: 'Discover simple daily habits that can significantly improve your oral hygiene and maintain a sparkling smile.',
      fullContent: {
        intro: "Oral health is a key indicator of your overall health, well-being, and quality of life. Maintaining a healthy smile doesn't just keep your teeth white; it prevents plaque buildup, gum disease, and tooth decay. Here are 5 expert tips from our clinical team to keep your smile healthy and radiant.",
        points: [
          { title: "Brush Twice Daily for Two Minutes", text: "Use a soft-bristled toothbrush and fluoride toothpaste. Brush at a 45-degree angle to your gums and ensure you cover all surfaces of your teeth." },
          { title: "Don't Forget to Floss", text: "Flossing removes food particles and plaque from places your toothbrush cannot reach. Floss at least once a day, preferably before bedtime." },
          { title: "Clean Your Tongue Daily", text: "Plaque can also build up on your tongue, leading to bad breath and oral bacteria buildup. Use a tongue scraper or brush your tongue gently." },
          { title: "Limit Sugary and Acidic Foods", text: "Sugar feeds bacteria that produce acid, causing enamel erosion. Rinse your mouth with water after eating sweet or acidic foods." },
          { title: "Visit Your Dentist Every 6 Months", text: "Regular cleanings and examinations help detect early signs of decay, gum disease, or oral health issues before they become severe." }
        ],
        conclusion: "Consistency is key to oral health. By incorporating these daily habits, you can prevent most dental issues and enjoy a lifetime of healthy smiles."
      }
    },
    {
      title: 'Dental implants: Everything You Need to Know',
      category: 'Treatments',
      date: 'May 18, 2026',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&auto=format&fit=crop&q=80',
      description: 'Explore the complete clinical process of getting dental implants and why they are the gold standard for tooth replacement.',
      fullContent: {
        intro: "Losing a tooth can affect your confidence, speech, and ability to chew. Fortunately, modern dentistry offers a permanent, highly realistic solution: dental implants. Implants are designed to look, feel, and function exactly like natural teeth.",
        points: [
          { title: "What is a Dental Implant?", text: "An implant is a small titanium post that is surgically inserted into the jawbone, acting as a root replacement for the missing tooth." },
          { title: "The Osseointegration Phase", text: "Over a few months, the implant post fuses with your jawbone in a process called osseointegration, creating an extremely strong, permanent anchor." },
          { title: "Placing the Abutment and Crown", text: "Once fully fused, a connector called an abutment is attached to the post, and a custom-crafted porcelain crown is secured on top, matching your natural teeth." },
          { title: "Bone Preservation Benefits", text: "Implants stimulate the jawbone, preventing the bone loss and facial sagging that typically occur with missing teeth." },
          { title: "Longevity and Success Rate", text: "Dental implants have a success rate of over 95% and can last a lifetime with proper oral hygiene and regular dental checkups." }
        ],
        conclusion: "Implants represent the gold standard in tooth replacement, offering unmatched stability, aesthetic beauty, and long-term oral health benefits."
      }
    },
    {
      title: 'Teeth Whitening: Myths vs Facts',
      category: 'Cosmetic',
      date: 'May 15, 2026',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&auto=format&fit=crop&q=80',
      description: 'Separate clinical facts from cosmetic myths regarding professional laser bleaching systems versus DIY home remedies.',
      fullContent: {
        intro: "With the rise of social media, everyone wants a whiter smile. However, this has led to a flood of DIY whitening hacks, many of which can permanently damage your tooth enamel. Here, we separate clinical facts from popular whitening myths.",
        points: [
          { title: "Myth: Charcoal Toothpaste is Safe and Effective", text: "Fact: Activated charcoal is highly abrasive. While it might remove superficial stains, it can wear down your enamel, exposing the yellow dentin underneath." },
          { title: "Myth: Lemon Juice and Baking Soda are Natural Alternatives", text: "Fact: Lemon juice is highly acidic and baking soda is abrasive. Combining them creates a mixture that aggressively strips enamel, leaving teeth vulnerable to decay." },
          { title: "Fact: Professional Whitening is Safe and Controlled", text: "Fact: Clinical whitening treatments use prescription-grade whitening gel and specialized LED lights under a dentist's supervision, protecting gums and enamel." },
          { title: "Myth: Bleaching Damages Teeth Permanently", text: "Fact: Under clinical supervision, teeth whitening is completely safe. The gel temporarily opens microscopic pores in the enamel to lift deep stains, which close shortly after." },
          { title: "Fact: Whitened Teeth Require Maintenance", text: "Fact: Whitening isn't permanent. To maintain results, limit dark foods and beverages like coffee, red wine, and berries, or rinse your mouth after consumption." }
        ],
        conclusion: "For a bright and safe smile, avoid abrasive home remedies and consult with your dentist to find the whitening treatment that suits your teeth."
      }
    }
  ];

  // Slice to exactly 3 featured articles for the Home Page view
  const homeArticles = articles.slice(0, 3);

  // Track scrolling progress in article modal
  const handleScroll = (e) => {
    const container = e.target;
    const totalHeight = container.scrollHeight - container.clientHeight;
    const scrollPosition = container.scrollTop;
    if (totalHeight > 0) {
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    }
  };

  // Reset scroll progress when modal opens/closes
  useEffect(() => {
    if (activeArticle) {
      setScrollProgress(0);
    }
  }, [activeArticle]);

  return (
    <section id="blog" className="relative py-16 md:py-24 bg-slate-50/40 overflow-hidden border-t border-slate-100">
      {/* Background soft blurs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-[1240px] mx-auto px-6 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <ScrollReveal className="max-w-2xl text-left">
            <span className="text-[11px] font-black text-brand-blue tracking-widest uppercase bg-brand-light px-4 py-2 rounded-full border border-brand-blue/10">
              From Our Blog
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-slate-900 leading-tight mt-6 mb-4">
              Latest Dental Tips & Insights
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
              Stay updated with professional advice and expert dental care tutorials.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={100} className="hidden lg:flex flex-shrink-0 text-left">
            <button 
              onClick={() => {
                if (setCurrentPage) setCurrentPage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl border-2 border-brand-blue/20 hover:border-brand-blue hover:text-brand-blue text-slate-700 font-bold text-sm bg-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
            >
              View All Articles
            </button>
          </ScrollReveal>
        </div>

        {/* 3 Featured Blog Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {homeArticles.map((art, idx) => (
            <ScrollReveal key={art.title} delay={idx * 100}>
              <div 
                onClick={() => handleArticleClick(art)}
                className="rounded-[24px] overflow-hidden bg-white border border-slate-200/60 hover:border-brand-blue/20 hover:shadow-[0_20px_40px_rgba(29,78,216,0.05)] transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer text-left"
              >
                {/* Image Header with Zoom */}
                <div className="h-[180px] w-full relative overflow-hidden bg-slate-50">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                  />
                  
                  {/* Floating Category Tag Overlapping the border */}
                  <span className="absolute bottom-0 left-5 translate-y-[50%] z-10 text-[9px] font-black uppercase tracking-wider bg-white text-brand-blue px-3 py-1.5 rounded-lg shadow-md border border-slate-100/50">
                    {art.category}
                  </span>
                </div>

                {/* Body Content */}
                <div className="p-4 sm:p-5 pt-5 sm:pt-7 flex flex-col flex-grow">
                  {/* Date & Read Time */}
                  <div className="flex items-center gap-2 text-slate-400 font-black text-[9px] sm:text-[10px] uppercase tracking-wider mb-3 pb-3 border-b border-slate-50">
                    <Clock className="w-3.5 h-3.5 text-brand-blue" />
                    <span>{art.date}</span>
                    <span className="text-slate-300">•</span>
                    <span>{art.readTime}</span>
                  </div>

                  {/* Article Title */}
                  <h3 className="font-sans font-black text-[14px] sm:text-[16px] text-slate-900 mb-2 leading-snug tracking-tight transition-colors group-hover:text-brand-blue line-clamp-2">
                    {art.title}
                  </h3>

                  {/* Short Description */}
                  <p className="hidden lg:block text-[11.5px] text-slate-500 font-semibold leading-relaxed mb-6 line-clamp-3">
                    {art.description}
                  </p>

                  {/* Action Link */}
                  <span className="hidden lg:inline-flex items-center gap-1.5 text-xs font-black text-brand-blue uppercase tracking-widest mt-auto group-hover:text-brand-hover transition-colors">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile View All Articles Button */}
        <div className="flex justify-center mt-8 lg:hidden w-full">
          <button 
            onClick={() => {
              if (setCurrentPage) setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full py-3.5 border border-brand-blue/30 text-brand-blue font-black text-[11px] uppercase tracking-wider rounded-xl bg-white hover:bg-brand-light transition-all duration-300 cursor-pointer text-center"
          >
            View All Articles
          </button>
        </div>

      </div>

      {/* Advanced Article Modal/Drawer */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-slate-100 text-left"
            >
              {/* Reading Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-100 z-50">
                <div 
                  className="h-full bg-brand-blue transition-all duration-100" 
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-900/90 text-white transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {/* Scrollable Article Area */}
              <div 
                ref={modalScrollRef}
                onScroll={handleScroll}
                className="overflow-y-auto overflow-x-hidden flex-grow scroll-smooth"
              >
                {/* Hero Header Image */}
                <div className="h-[240px] sm:h-[300px] w-full relative bg-slate-100">
                  <img 
                    src={activeArticle.image} 
                    alt={activeArticle.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                  
                  {/* Category Badge overlay */}
                  <span className="absolute bottom-5 left-6 text-[10px] font-black uppercase tracking-wider bg-brand-blue text-white px-3 py-1.5 rounded-lg shadow-md">
                    {activeArticle.category}
                  </span>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  {/* Meta Details */}
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-5 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-brand-blue" />
                      <span>{activeArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-brand-blue" />
                      <span>{activeArticle.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="font-sans font-black text-2xl sm:text-3xl text-slate-900 leading-tight mb-5">
                    {activeArticle.title}
                  </h2>

                  {/* Intro */}
                  <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed mb-8">
                    {activeArticle.fullContent.intro}
                  </p>

                  {/* Bullet Points */}
                  <div className="flex flex-col gap-6.5 mb-8">
                    {activeArticle.fullContent.points.map((p, idx) => (
                      <div key={idx} className="flex gap-4">
                        {/* Number Circle */}
                        <div className="w-7.5 h-7.5 rounded-full bg-brand-light border border-brand-blue/15 text-brand-blue font-black text-xs flex items-center justify-center flex-shrink-0 shadow-sm mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex flex-col text-left">
                          <h4 className="font-sans font-black text-sm sm:text-base text-slate-800 mb-1">
                            {p.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                            {p.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Clinical Recommendation Card */}
                  <div className="p-5 rounded-2xl bg-brand-light border-l-4 border-brand-blue flex gap-4 mb-8">
                    <Award className="w-6 h-6 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div className="flex flex-col text-left">
                      <h4 className="text-xs font-black uppercase text-brand-blue tracking-wider mb-1">Clinic Recommendation</h4>
                      <p className="text-xs text-slate-600 font-bold leading-relaxed">
                        For specific guidance and personalized advice, our clinical specialists recommend checking in for regular cleans. Complete your oral check-ups semi-annually!
                      </p>
                    </div>
                  </div>

                  {/* Conclusion */}
                  <p className="text-slate-505 font-medium text-xs sm:text-sm leading-relaxed mb-6">
                    {activeArticle.fullContent.conclusion}
                  </p>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <span className="text-xs font-bold text-slate-500">Want to discuss this with a doctor?</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="px-4.5 py-2.5 text-xs text-slate-600 font-bold hover:text-slate-800 cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="#appointment-form"
                    onClick={() => setActiveArticle(null)}
                    className="px-5 py-2.5 bg-brand-blue hover:bg-brand-hover text-white text-xs font-black rounded-xl shadow-md shadow-brand-blue/10 flex items-center gap-1.5 transition-colors"
                  >
                    Schedule Consult
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
