import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  ChevronDown, 
  Sparkles, 
  ChevronRight,
  Send,
  Check,
  LayoutGrid,
  Bookmark,
  Mail,
  X,
  Award
} from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem, TiltCard, Magnetic } from './ScrollReveal';

export default function BlogPage({ setCurrentPage, activeBlogPost, setActiveBlogPost }) {
  const [selectedCategory, setSelectedCategory] = useState('All Articles');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Latest First');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [expandedContent, setExpandedContent] = useState(false);

  const modalScrollRef = useRef(null);
  const sortRef = useRef(null);

  // Author bios lookup dictionary
  const authorsData = {
    "Dr. Priya Sharma": {
      role: "Cosmetic Dentist",
      bio: "Dr. Priya Sharma has over 10 years of experience in cosmetic and preventive dentistry. She is passionate about helping patients achieve healthy, confident smiles.",
      socials: { facebook: "#", linkedin: "#", instagram: "#" }
    },
    "Dr. Rahul Verma": {
      role: "Dental Implant Specialist",
      bio: "Dr. Rahul Verma is an expert in restorative and implant dentistry with a focus on advanced surgical techniques and smile reconstruction.",
      socials: { facebook: "#", linkedin: "#", instagram: "#" }
    },
    "Dr. Sneha Kapoor": {
      role: "Endodontist",
      bio: "Dr. Sneha Kapoor specializes in root canal therapy and microscopic endodontics, dedicated to saving teeth and providing pain-free treatments.",
      socials: { facebook: "#", linkedin: "#", instagram: "#" }
    },
    "Dr. Amit Malhotra": {
      role: "Pediatric Dentist",
      bio: "Dr. Amit Malhotra has a gentle and friendly approach, specializing in children's dentistry and making dental visits fun and anxiety-free.",
      socials: { facebook: "#", linkedin: "#", instagram: "#" }
    }
  };

  const handleSelectArticle = (art) => {
    setActiveArticle(art);
    setExpandedContent(false);
    if (setActiveBlogPost) {
      setActiveBlogPost(art ? { title: art.title } : null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setIsSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = (e) => {
    const container = e.target;
    const totalHeight = container.scrollHeight - container.clientHeight;
    const scrollPosition = container.scrollTop;
    if (totalHeight > 0) {
      const progress = (scrollPosition / totalHeight) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    if (activeBlogPost && articles) {
      const match = articles.find(art => 
        art.title.toLowerCase().includes(activeBlogPost.title.toLowerCase()) ||
        activeBlogPost.title.toLowerCase().includes(art.title.toLowerCase())
      );
      if (match) {
        setActiveArticle(match);
        setExpandedContent(false);
      }
    } else if (activeBlogPost === null) {
      setActiveArticle(null);
    }
  }, [activeBlogPost]);

  useEffect(() => {
    if (activeArticle) {
      setScrollProgress(0);
    }
  }, [activeArticle]);

  const categories = [
    'All Articles',
    'Oral Health Tips',
    'Dental Treatments',
    'Kids Dental Care',
    'Cosmetic Dentistry',
    'Dental Implants',
    'Orthodontics',
    'Preventive Care'
  ];

  // Map category tab labels to their actual categories in items
  const categoryMap = {
    'All Articles': 'All Articles',
    'Oral Health Tips': 'Oral Health Tips',
    'Treatments': 'Dental Treatments',
    'Kids Care': 'Kids Dental Care',
    'Cosmetic': 'Cosmetic Dentistry',
    'Implants': 'Dental Implants'
  };

  const articles = [
    {
      title: "10 Tips for Maintaining a Healthy Smile",
      category: "Oral Health Tips",
      subtitle: "Simple daily habits that can make a big difference in your oral health and keep your smile bright.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Priya Sharma",
      authorImage: "/assets/dr_mitchell_portrait.png",
      date: "May 15, 2026",
      readTime: "5 min read",
      dateVal: new Date("2026-05-15"),
      fullContent: {
        intro: "A healthy smile is a beautiful asset. Daily care and smart choices keep teeth and gums in top shape. Here are 10 practical tips to maintain a bright, healthy smile.",
        points: [
          { title: "Brush Twice Daily for Two Minutes", text: "Use a soft-bristled toothbrush and fluoride toothpaste. Brush at a 45-degree angle to your gums and cover all surfaces of your teeth." },
          { title: "Don't Forget to Floss", text: "Flossing removes food particles and plaque from places your toothbrush cannot reach. Floss at least once a day, preferably before bedtime." },
          { title: "Clean Your Tongue Daily", text: "Plaque can also build up on your tongue, leading to bad breath and oral bacteria buildup. Use a tongue scraper or brush your tongue gently." },
          { title: "Limit Sugary and Acidic Foods", text: "Sugar feeds bacteria that produce acid, causing enamel erosion. Rinse your mouth with water after eating sweet or acidic foods." },
          { title: "Drink Plenty of Water", text: "Water helps wash away food particles and keeps your saliva levels high, which naturally protects your teeth against decay." },
          { title: "Change Your Toothbrush Regularly", text: "Replace your toothbrush or brush head every 3 months, or sooner if the bristles are frayed, to ensure effective cleaning." },
          { title: "Avoid Tobacco Products", text: "Tobacco stains teeth, causes bad breath, and significantly increases the risk of gum disease and oral cancers." },
          { title: "Use a Fluoride Mouthwash", text: "Rinsing with fluoride mouthwash helps strengthen enamel and wash away remaining bacteria after brushing and flossing." },
          { title: "Wear a Mouthguard During Sports", text: "Protect your teeth from physical trauma during contact sports by using a custom-fitted mouthguard." },
          { title: "Visit DentaCare Every 6 Months", text: "Regular cleanings and examinations help detect early signs of decay, gum disease, or oral health issues before they become severe." }
        ],
        conclusion: "Consistency is key to oral health. By incorporating these daily habits, you can prevent most dental issues and enjoy a lifetime of healthy smiles."
      }
    },
    {
      title: "Dental Implants: Everything You Need to Know",
      category: "Dental Implants",
      subtitle: "A complete guide to dental implants, procedure, benefits, and recovery for a confident smile.",
      image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Rahul Verma",
      authorImage: "/assets/dr_marcus_vance.png",
      date: "May 10, 2026",
      readTime: "6 min read",
      dateVal: new Date("2026-05-10"),
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
      title: "Teeth Whitening: Myths vs Facts",
      category: "Cosmetic Dentistry",
      subtitle: "Separating facts from fiction to help you achieve a whiter, healthier smile safely.",
      image: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Sneha Kapoor",
      authorImage: "/assets/dr_elena_rostova.png",
      date: "May 8, 2026",
      readTime: "4 min read",
      dateVal: new Date("2026-05-08"),
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
    },
    {
      title: "How to Prepare Your Child for a Dental Visit",
      category: "Kids Dental Care",
      subtitle: "Helpful tips to make your child's dental visit comfortable and stress-free.",
      image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Amit Malhotra",
      authorImage: "/assets/dr_david_kim.png",
      date: "May 5, 2026",
      readTime: "4 min read",
      dateVal: new Date("2026-05-05"),
      fullContent: {
        intro: "Establishing good dental habits early sets your child up for a lifetime of healthy smiles. Preparing your child for their first dental visit can help reduce anxiety and build a positive relationship with dental care.",
        points: [
          { title: "Start Dental Visits Early", text: "Take your child to the dentist around their first birthday or within six months of their first tooth appearing, to build familiarity." },
          { title: "Keep it Positive and Simple", text: "Explain what will happen using simple, positive language. Avoid using scary words like 'pain', 'shot', or 'drill'." },
          { title: "Role-Play at Home", text: "Practice dental visits at home. Let your child sit in a chair, count their teeth with a small mirror, and brush a stuffed animal's teeth." },
          { title: "Read Dental Books or Watch Shows", text: "Share children's stories or cartoons showing their favorite characters visiting the dentist happily and getting clean teeth." },
          { title: "Be Mindful of Your Own Anxiety", text: "Children easily sense their parents' emotions. Stay calm, positive, and supportive during the appointment to help them feel secure." }
        ],
        conclusion: "With preparation and a supportive team, your child's dental visit can be an exciting, positive milestone on their journey to healthy habits."
      }
    },
    {
      title: "The Importance of Regular Dental Checkups",
      category: "Preventive Care",
      subtitle: "Why regular dental checkups are essential for preventing problems and maintaining oral health.",
      image: "https://images.unsplash.com/photo-1579684389782-64d84b5e902a?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Priya Sharma",
      authorImage: "/assets/dr_mitchell_portrait.png",
      date: "May 2, 2026",
      readTime: "5 min read",
      dateVal: new Date("2026-05-02"),
      fullContent: {
        intro: "Preventive dental care is key to avoiding painful and costly treatments. Regular dental checkups and cleanings twice a year are vital for maintaining oral health and diagnosing issues early.",
        points: [
          { title: "Early Detection of Cavities", text: "Dentists can detect minor tooth decay and cavities early, allowing for simple fillings before they require root canals or extractions." },
          { title: "Removal of Tartar and Plaque", text: "Even with regular brushing, tartar builds up in hard-to-reach spots. Professional dental hygienists remove this buildup to prevent gum disease." },
          { title: "Gum Disease Screening", text: "Early-stage gum disease (gingivitis) can be reversed. Checking your gums regularly prevents progress into severe periodontitis." },
          { title: "Oral Cancer Screening", text: "A routine checkup includes examining your throat, tongue, and soft tissues for early signs of oral cancer, which is highly treatable if caught early." },
          { title: "X-Rays for Hidden Issues", text: "Digital X-rays allow dentists to find issues below the gumline, such as impacted teeth, jaw bone decay, or decay between teeth." }
        ],
        conclusion: "Investing time in regular dental checkups keeps your smile bright, saves money in the long run, and protects your overall health."
      }
    },
    {
      title: "Clear Aligners vs Braces: Which is Right for You?",
      category: "Orthodontics",
      subtitle: "Compare clear aligners and braces to find the best orthodontic solution for your needs.",
      image: "https://images.unsplash.com/photo-1513412855154-e1f7bc00242d?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Rahul Verma",
      authorImage: "/assets/dr_marcus_vance.png",
      date: "Apr 28, 2026",
      readTime: "6 min read",
      dateVal: new Date("2026-04-28"),
      fullContent: {
        intro: "Choosing how to straighten your teeth is a major decision. Both traditional metal braces and clear aligners are highly effective orthodontic tools, but they suit different lifestyles and orthodontic needs.",
        points: [
          { title: "Aesthetics and Visibility", text: "Clear aligners are virtually invisible, making them popular for adults and teens. Traditional braces are visible but can be customized with colored bands." },
          { title: "Removability and Diet", text: "Aligners are removable, allowing you to eat any food and brush/floss easily. Braces are fixed, requiring you to avoid sticky or hard foods." },
          { title: "Complexity of Treatment", text: "Braces are highly effective for severe crowding, rotation, or complex bite issues. Clear aligners work best for mild to moderate alignment adjustments." },
          { title: "Compliance and Discipline", text: "Clear aligners must be worn for 20-22 hours a day to work. If you might forget to wear them, fixed braces are a more reliable choice." },
          { title: "Comfort and Maintenance", text: "Aligners have smooth edges and cause less irritation to cheeks. Braces may cause initial discomfort but require fewer adjustments." }
        ],
        conclusion: "The best choice depends on your specific alignment needs, lifestyle, and preferences. Schedule a consultation with our orthodontist to find your fit."
      }
    },
    {
      title: "Root Canal Treatment: What to Expect",
      category: "Dental Treatments",
      subtitle: "Learn about the root canal procedure, benefits, and what you can expect during recovery.",
      image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Sneha Kapoor",
      authorImage: "/assets/dr_elena_rostova.png",
      date: "Apr 25, 2026",
      readTime: "4 min read",
      dateVal: new Date("2026-04-25"),
      fullContent: {
        intro: "Root canals have a reputation for being painful, but modern dental techniques make the procedure as comfortable as getting a routine filling. It is a vital treatment designed to save an infected tooth.",
        points: [
          { title: "Relieving Pain, Not Causing It", text: "A root canal is performed to relieve pain caused by an infected pulp. Local anesthetics ensure you feel no discomfort during treatment." },
          { title: "Removing the Infection", text: "The dentist creates a tiny access point in the tooth to remove infected nerves, blood vessels, and bacteria from the root canals." },
          { title: "Cleaning and Sealing", text: "Once cleaned, the canals are filled with a biocompatible material called gutta-percha and sealed to prevent future infections." },
          { title: "Restoring with a Crown", text: "Because the tooth is weakened after pulp removal, a custom porcelain crown is usually placed to restore strength and function." },
          { title: "Quick Recovery Time", text: "Most patients experience only mild sensitivity for a few days post-procedure, which is easily managed with over-the-counter medication." }
        ],
        conclusion: "Root canal therapy is a highly successful, routine procedure that saves your natural tooth and keeps your smile healthy."
      }
    },
    {
      title: "Dental Veneers: Types, Benefits & Procedure",
      category: "Cosmetic Dentistry",
      subtitle: "Everything you need to know about dental veneers and how they can transform your smile.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Amit Malhotra",
      authorImage: "/assets/dr_david_kim.png",
      date: "Apr 22, 2026",
      readTime: "5 min read",
      dateVal: new Date("2026-04-22"),
      fullContent: {
        intro: "Dental veneers are ultra-thin shells custom-crafted to cover the front surface of your teeth, instantly hiding imperfections and creating a bright, symmetrical smile.",
        points: [
          { title: "Porcelain vs Composite Veneers", text: "Porcelain veneers are highly stain-resistant, natural-looking, and durable. Composite veneers are more affordable and can be applied in one visit." },
          { title: "Correcting Multiple Flaws", text: "Veneers are a versatile solution to hide severe stains, close gaps, fix minor chips, and align slightly crooked teeth." },
          { title: "The Preparation Phase", text: "To ensure a flush fit, a microscopic layer of enamel (less than 1mm) is removed before taking impressions for your custom shells." },
          { title: "Long-Lasting Performance", text: "With proper care (avoiding biting hard objects and brushing regularly), porcelain veneers can last between 10 to 15 years." },
          { title: "Stain Resistance", text: "Porcelain is non-porous, meaning it resists staining from coffee, tea, and red wine better than natural tooth enamel." }
        ],
        conclusion: "Veneers offer a dramatic, natural-looking transformation for patients wishing to achieve their dream smile."
      }
    },
    {
      title: "Tooth Sensitivity: Causes and Home Remedies",
      category: "Oral Health Tips",
      subtitle: "Understand the causes of tooth sensitivity and effective ways to find relief at home.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&auto=format&fit=crop&q=80",
      author: "Dr. Priya Sharma",
      authorImage: "/assets/dr_mitchell_portrait.png",
      date: "Apr 18, 2026",
      readTime: "4 min read",
      dateVal: new Date("2026-04-18"),
      fullContent: {
        intro: "A sharp pain when eating hot soup or drinking ice water is a sign of sensitive teeth. Sensitivity happens when the protective enamel wears down, exposing the dentin underneath.",
        points: [
          { title: "Common Causes of Exposed Dentin", text: "Receding gums, aggressive brushing with hard bristles, tooth decay, and acid erosion can expose the sensitive dentin layer." },
          { title: "Use Desensitizing Toothpaste", text: "These toothpastes contain potassium nitrate or fluoride, which help block the tiny pathways leading to the tooth nerve." },
          { title: "Brush Gently with Soft Bristles", text: "Always use a soft-bristled toothbrush and brush in gentle circular motions to protect both your enamel and your gums." },
          { title: "Limit Acidic Foods and Drinks", text: "Sodas, citrus juices, and wine wear down enamel over time. Rinse your mouth with water after consuming acidic products." },
          { title: "Wear a Nightguard for Teeth Grinding", text: "Grinding (bruxism) wears down enamel and causes severe sensitivity. A custom nightguard shields teeth from damage." }
        ],
        conclusion: "If sensitivity persists or causes severe pain, visit us for a checkup, as it can indicate underlying cavities or gum recession."
      }
    }
  ];

  const popularPosts = articles.slice(0, 5);

  // Filter and sort logic
  const filteredArticles = useMemo(() => {
    return articles
      .filter((art) => {
        const matchesCategory = 
          selectedCategory === 'All Articles' || 
          art.category === selectedCategory;

        const matchesSearch = 
          art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          art.subtitle.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'Latest First') {
          return b.dateVal.getTime() - a.dateVal.getTime();
        } else {
          return a.dateVal.getTime() - b.dateVal.getTime();
        }
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const articlesPerPage = 6;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  
  useEffect(() => {
    if (currentPageNum > totalPages && totalPages > 0) {
      setCurrentPageNum(1);
    }
  }, [filteredArticles, totalPages, currentPageNum]);

  const currentArticles = useMemo(() => {
    const indexOfLastArticle = currentPageNum * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    return filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  }, [filteredArticles, currentPageNum]);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <div className="relative bg-white text-slate-700 antialiased font-sans selection:bg-brand-blue/10 selection:text-brand-blue overflow-x-hidden">
      
      {activeArticle ? (
        <div className="max-w-[1240px] mx-auto px-6 pt-32 pb-24 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[11px] font-extrabold text-slate-500 mb-6 bg-slate-50/50 border border-slate-100 py-1.5 px-4 rounded-full w-fit">
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} 
              className="hover:text-brand-blue flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5 text-brand-blue" />
              <span>Home</span>
            </a>
            <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
            <a 
              href="#blog" 
              onClick={(e) => { e.preventDefault(); handleSelectArticle(null); }} 
              className="hover:text-brand-blue transition-colors"
            >
              Blog
            </a>
            <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
            <span className="text-slate-800 font-black truncate max-w-[200px] sm:max-w-none">{activeArticle.title}</span>
          </nav>

          {/* Category Tag & Title & Meta */}
          <div className="max-w-4xl mb-8">
            <div className="mb-4">
              <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase bg-brand-light border border-brand-blue/15 px-3.5 py-1.5 rounded-full">
                {activeArticle.category}
              </span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-[45px] text-slate-900 leading-tight mt-6 mb-6 tracking-tight">
              {activeArticle.title}
            </h1>
            
            {/* Author info */}
            <div className="flex items-center gap-3">
              <img 
                src={activeArticle.authorImage} 
                alt={activeArticle.author} 
                className="w-11 h-11 rounded-full border border-slate-200 object-cover shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black text-slate-900">{activeArticle.author}</span>
                <div className="flex items-center gap-1.5 mt-1.5 text-[9.5px] text-slate-400 font-bold uppercase tracking-wider">
                  <span>{activeArticle.date}</span>
                  <span className="opacity-50">•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Layout: Left Content, Right Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Shorter Hero Banner Image inside the content column */}
              <div className="w-full h-[200px] sm:h-[280px] md:h-[340px] rounded-[24px] overflow-hidden border border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.02)] bg-slate-50">
                <img 
                  src={activeArticle.image} 
                  alt={activeArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Intro paragraph */}
              <p className="text-[14px] sm:text-[15px] text-slate-500 font-semibold leading-relaxed">
                {activeArticle.fullContent.intro}
              </p>

              {/* Numbered list of points */}
              <div className="space-y-8">
                {activeArticle.fullContent.points
                  .slice(0, expandedContent ? activeArticle.fullContent.points.length : 5)
                  .map((point, idx) => (
                    <div key={idx} id={`point-${idx}`} className="flex gap-4 sm:gap-5 group scroll-mt-28">
                      {/* Circle Number badge */}
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-brand-blue text-white font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-blue/15 transition-transform duration-300 group-hover:scale-105">
                        {idx + 1}
                      </div>
                      <div className="flex flex-col text-left pt-0.5">
                        <h3 className="font-sans font-black text-[15px] sm:text-[16px] text-slate-900 mb-2 tracking-tight group-hover:text-brand-blue transition-colors">
                          {point.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                          {point.text}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Read More Toggle Button (only if points > 5) */}
              {activeArticle.fullContent.points.length > 5 && (
                <div className="pt-4 flex justify-center lg:justify-start">
                  <button 
                    onClick={() => setExpandedContent(!expandedContent)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-blue/20 hover:border-brand-blue text-brand-blue font-bold text-xs sm:text-sm bg-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>{expandedContent ? "Read Less Tips" : "Read More Tips"}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedContent ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}

              {/* Clinical Recommendation Callout Card */}
              <div className="p-6 rounded-[24px] bg-brand-light/70 border border-brand-blue/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm mt-8">
                <div className="flex gap-4 text-left">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-blue/15 text-brand-blue flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-6 h-6 text-brand-blue"
                    >
                      <path d="M12 2C8.5 2 6 4.5 6 8c0 3 1.5 4.5 2 6 .5 1.5.5 3 0 4.5-.3 1-1.2 1.5-2.2 1.5h-.8c-.6 0-1 .4-1 1v0c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v0c0-.6-.4-1-1-1h-.8c-1 0-1.9-.5-2.2-1.5-.5-1.5-.5-3 0-4.5.5-1.5 2-3 2-6 0-3.5-2.5-6-6-6Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-sans font-black text-sm text-slate-900 mb-1">Your Smile Deserves the Best Care</h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-bold leading-normal">
                      Regular care today leads to a healthier, brighter smile tomorrow.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handleSelectArticle(null);
                    if (setCurrentPage) setCurrentPage('appointment');
                  }}
                  className="px-5 py-3 bg-brand-blue hover:bg-brand-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-brand-blue/10 flex items-center gap-1.5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  Book Appointment
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Social Share Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-y border-slate-100 mt-10">
                <div className="flex items-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  <span>Share this article:</span>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => window.open(`https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center hover:bg-brand-blue hover:text-white text-slate-500 transition-all cursor-pointer shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                  </button>
                  <button 
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(activeArticle.title)}`, '_blank')}
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center hover:bg-brand-blue hover:text-white text-slate-500 transition-all cursor-pointer shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                  </button>
                  <button 
                    onClick={() => window.open(`https://linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(activeArticle.title)}`, '_blank')}
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center hover:bg-brand-blue hover:text-white text-slate-500 transition-all cursor-pointer shadow-sm hover:scale-105"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Link copied to clipboard!");
                    }}
                    className="w-9 h-9 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center hover:bg-brand-blue hover:text-white text-slate-500 transition-all cursor-pointer shadow-sm hover:scale-105"
                    title="Copy Link"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  </button>
                </div>
              </div>

              {/* Prev / Next Article Navigation Links */}
              <div className="flex items-center justify-between pt-6">
                {/* Previous */}
                {articles.findIndex(a => a.title === activeArticle.title) > 0 ? (
                  <button 
                    onClick={() => handleSelectArticle(articles[articles.findIndex(a => a.title === activeArticle.title) - 1])}
                    className="group flex items-center gap-2 text-slate-600 hover:text-brand-blue font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    <span>Previous Article</span>
                  </button>
                ) : <div />}

                {/* Next */}
                {articles.findIndex(a => a.title === activeArticle.title) < articles.length - 1 ? (
                  <button 
                    onClick={() => handleSelectArticle(articles[articles.findIndex(a => a.title === activeArticle.title) + 1])}
                    className="group flex items-center gap-2 text-slate-600 hover:text-brand-blue font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <span>Next Article</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                ) : <div />}
              </div>

            </div>

            {/* Right Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Table of Contents */}
              <div className="p-6 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] text-left">
                <h3 className="font-sans font-black text-sm text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <LayoutGrid className="w-4 h-4 text-brand-blue" />
                  Table of Contents
                </h3>
                <ul className="space-y-3">
                  {activeArticle.fullContent.points.map((point, idx) => (
                    <li key={idx}>
                      <a 
                        href={`#point-${idx}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const targetEl = document.getElementById(`point-${idx}`);
                          if (targetEl) {
                            const offset = 100;
                            const bodyRect = document.body.getBoundingClientRect().top;
                            const elementRect = targetEl.getBoundingClientRect().top;
                            const offsetPos = elementRect - bodyRect - offset;
                            window.scrollTo({ top: offsetPos, behavior: 'smooth' });
                          }
                        }}
                        className="text-[11.5px] font-bold text-slate-500 hover:text-brand-blue flex gap-2 transition-colors duration-200 text-left"
                      >
                        <span className="text-brand-blue/70 font-black">{idx + 1}.</span>
                        <span>{point.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Author Bio Card */}
              <div className="p-6.5 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] text-center">
                <div className="flex flex-col items-center">
                  <img 
                    src={activeArticle.authorImage} 
                    alt={activeArticle.author} 
                    className="w-18 h-18 rounded-full border border-slate-200/80 object-cover shadow-md mb-4"
                  />
                  <h4 className="font-sans font-black text-[15px] text-slate-900 leading-tight mb-1">{activeArticle.author}</h4>
                  <span className="text-[10px] font-extrabold text-brand-blue uppercase tracking-wider mb-4">
                    {authorsData[activeArticle.author]?.role || "Dental Specialist"}
                  </span>
                  <p className="text-[11px] text-slate-500 font-semibold leading-relaxed mb-5">
                    {authorsData[activeArticle.author]?.bio || `${activeArticle.author} is a dedicated practitioner at DentaCare.`}
                  </p>
                  {/* Author socials */}
                  <div className="flex items-center gap-2.5">
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-all shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-all shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="#" className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200/60 flex items-center justify-center text-slate-400 hover:text-brand-blue transition-all shadow-sm">
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Categories Sidebar List */}
              <div className="p-6 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)] text-left">
                <h3 className="font-sans font-black text-sm text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                  <LayoutGrid className="w-4 h-4 text-brand-blue" />
                  Categories
                </h3>
                <ul className="space-y-1">
                  {categories.slice(1).map((cat) => {
                    const isActive = activeArticle.category === cat;
                    return (
                      <li key={cat}>
                        <button
                          onClick={() => {
                            setSelectedCategory(cat);
                            setCurrentPageNum(1);
                            handleSelectArticle(null); // Goes back to listing with this category selected
                          }}
                          className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all duration-250 cursor-pointer ${
                            isActive 
                              ? 'bg-blue-50/80 text-brand-blue font-extrabold border border-blue-100/50' 
                              : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:text-slate-900 font-bold'
                          }`}
                        >
                          {cat}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Have Questions Banner */}
              <div className="p-6.5 rounded-[28px] bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-100/60 relative overflow-hidden text-center shadow-sm">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl" />
                
                <h3 className="font-sans font-black text-sm text-slate-900 mb-3 flex items-center justify-center gap-2">
                  <Award className="w-4 h-4 text-brand-blue" />
                  Need Dental Help?
                </h3>
                
                <p className="text-[11px] text-slate-500 font-bold leading-relaxed mb-5">
                  Have questions about your dental hygiene, or want to speak with one of our experienced dentists?
                </p>

                <button
                  onClick={() => {
                    handleSelectArticle(null);
                    setCurrentPage('home');
                    setTimeout(() => {
                      const el = document.getElementById('footer');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 120);
                  }}
                  className="w-full py-3 bg-brand-blue hover:bg-brand-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>

          {/* Related Articles Section */}
          <div className="mt-20 pt-12 border-t border-slate-100 text-left">
            <h3 className="font-sans font-black text-2xl text-slate-900 mb-8 tracking-tight">Related Articles You May Like</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {articles
                .filter(art => art.title !== activeArticle.title)
                .slice(0, 4)
                .map((art, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => handleSelectArticle(art)}
                    className="rounded-[20px] overflow-hidden bg-white border border-slate-200/60 hover:border-brand-blue/20 hover:shadow-[0_15px_30px_rgba(29,78,216,0.04)] transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="h-[140px] w-full relative bg-slate-50 overflow-hidden">
                      <img 
                        src={art.image} 
                        alt={art.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103" 
                      />
                      <span className="absolute bottom-3 left-4 text-[8px] font-black uppercase tracking-wider bg-white text-brand-blue px-2.5 py-1 rounded-md shadow-sm border border-slate-50">
                        {art.category}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="p-4.5 flex flex-col flex-grow">
                      <h4 className="font-sans font-black text-[13px] text-slate-900 mb-2 leading-snug group-hover:text-brand-blue transition-colors line-clamp-2">
                        {art.title}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-slate-50 text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                        <span>{art.date}</span>
                        <span className="opacity-50">•</span>
                        <span>{art.readTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Newsletter Subscription Bar */}
          <div className="mt-16 p-8 sm:p-10 rounded-[32px] bg-brand-light/40 border border-brand-blue/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_35px_rgba(29,78,216,0.02)]">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h4 className="font-sans font-black text-[17px] text-slate-900 mb-1">Stay Updated with Dental Tips & Insights</h4>
                <p className="text-xs text-slate-500 font-medium">Subscribe to our newsletter and never miss an update.</p>
              </div>
            </div>
            {subscribed ? (
              <div className="px-6 py-3 rounded-xl bg-white border border-emerald-200/60 flex items-center gap-2 shadow-sm">
                <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-sm">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs font-black text-emerald-700">Subscribed Successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:max-w-md">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  required
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none focus:border-brand-blue/30 focus:shadow-sm w-full sm:w-[220px]"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 bg-brand-blue hover:bg-brand-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      ) : (
        <>
          {/* HERO SECTION WITH SELF-CONTAINED ROUNDED CARD */}
          <section className="relative pt-28 pb-6 max-w-[1240px] mx-auto px-6">
            <div className="relative rounded-[36px] border border-blue-100/50 overflow-hidden py-14 px-8 sm:px-12 lg:px-16 shadow-[0_20px_50px_rgba(29,78,216,0.03)] min-h-[380px] lg:min-h-[420px] flex items-center">
              
              {/* Absolute Background Image covering the entire card */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/assets/blog-image.webp" 
                  alt="Dental Tips and Insights Header" 
                  className="w-full h-full object-cover object-[80%_center] lg:object-right select-none pointer-events-none" 
                />
                {/* Soft overlay on the left for text readability on small screens */}
                <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#f0f7ff]/95 via-[#f0f7ff]/85 to-transparent pointer-events-none" />
              </div>
              
              {/* Content overlay */}
              <div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Text & Search */}
                <div className="lg:col-span-7 text-left">
                  <ScrollReveal>
                    {/* Integrated Breadcrumb as a Pill Badge */}
                    <nav className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-full text-[10.5px] font-extrabold text-slate-500 mb-8 shadow-sm">
                      <a 
                        href="#home" 
                        onClick={(e) => { e.preventDefault(); setCurrentPage('home'); }} 
                        className="flex items-center gap-1 text-slate-500 hover:text-brand-blue transition-colors"
                      >
                        <Home className="w-3 h-3 text-brand-blue" />
                        <span>Home</span>
                      </a>
                      <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
                      <span className="text-slate-700">Blog</span>
                    </nav>
                    
                    <div className="block">
                      <span className="text-[10px] font-black text-brand-blue tracking-widest uppercase bg-brand-blue/5 border border-brand-blue/10 px-3.5 py-1.5 rounded-full">
                        Dental Blog & Insights
                      </span>
                    </div>
                    
                    <h1 className="font-sans font-black text-4xl sm:text-[46px] text-slate-900 leading-tight mt-6 mb-4 tracking-tight">
                      Stay Updated with <br />
                      <span className="text-brand-blue">
                        Dental Tips & Insights
                      </span>
                    </h1>
                    
                    <p className="text-xs sm:text-sm text-slate-500 font-semibold leading-relaxed mb-8 max-w-md">
                      Expert advice, helpful tips, and the latest updates to help you maintain a healthy smile.
                    </p>

                    {/* Search Bar with clean shadow */}
                    <div className="relative max-w-md w-full flex items-center bg-white border border-slate-200/80 rounded-2xl p-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:border-brand-blue/20 focus-within:border-brand-blue/30 focus-within:shadow-[0_12px_35px_rgba(29,78,216,0.04)] transition-all duration-300">
                      <Search className="w-4.5 h-4.5 text-slate-400 ml-3" />
                      <input 
                        type="text" 
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-transparent border-none outline-none pl-2 pr-2 text-xs font-bold text-slate-800 placeholder-slate-400"
                      />
                      <button className="px-4.5 py-3 bg-brand-blue hover:bg-brand-hover text-white rounded-xl shadow-md flex items-center justify-center transition-all duration-300 cursor-pointer">
                        <Search className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </ScrollReveal>
                </div>
                
                {/* Empty right column on desktop to leave room for the background tooth */}
                <div className="hidden lg:block lg:col-span-5" />
              </div>
            </div>
          </section>

          {/* MAIN LAYOUT: SIDEBAR + GRID */}
          <section className="py-16 max-w-[1240px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* LEFT COLUMN: SIDEBAR */}
              <div className="lg:col-span-3 space-y-8 text-left order-2 lg:order-1 mt-10 lg:mt-0">
                
                {/* 1. Categories List Card */}
                <div className="p-6 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)]">
                  <h3 className="font-sans font-black text-sm text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <LayoutGrid className="w-4 h-4 text-brand-blue" />
                    Categories
                  </h3>
                  <ul className="space-y-1">
                    {categories.map((cat) => {
                      const isActive = selectedCategory === cat;
                      return (
                        <li key={cat}>
                          <button
                            onClick={() => {
                              setSelectedCategory(cat);
                              setCurrentPageNum(1);
                            }}
                            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs transition-all duration-250 cursor-pointer ${
                              isActive 
                                ? 'bg-blue-50/80 text-brand-blue font-extrabold border border-blue-100/50' 
                                : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:text-slate-900 font-bold'
                            }`}
                          >
                            {cat}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* 2. Popular Posts List Card */}
                <div className="p-6 rounded-[28px] bg-white border border-slate-200/60 shadow-[0_2px_15px_rgba(0,0,0,0.01)]">
                  <h3 className="font-sans font-black text-sm text-slate-900 mb-5 flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Bookmark className="w-4 h-4 text-brand-blue" />
                    Popular Posts
                  </h3>
                  <div className="space-y-4.5">
                    {popularPosts.map((post, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => handleSelectArticle(post)}
                        className="flex gap-3.5 group cursor-pointer items-center"
                      >
                        {/* Thumbnail */}
                        <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/60 flex-shrink-0 relative">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                          />
                          {/* Overlapping Number Badge */}
                          <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-slate-900 text-white font-black text-[9px] flex items-center justify-center shadow-md border border-white z-10">
                            {idx + 1}
                          </span>
                        </div>
                        {/* Text info */}
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-xs font-bold text-slate-800 group-hover:text-brand-blue leading-snug transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <span className="text-[9.5px] font-bold text-slate-400 mt-1 uppercase tracking-wider">{post.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Stay Informed Newsletter Card */}
                <div className="p-6.5 rounded-[28px] bg-gradient-to-br from-blue-50/70 to-indigo-50/40 border border-blue-100/60 relative overflow-hidden text-center shadow-sm">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/5 rounded-full blur-xl" />
                  
                  <h3 className="font-sans font-black text-sm text-slate-900 mb-3 flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 text-brand-blue" />
                    Stay Informed
                  </h3>
                  
                  <p className="text-[11px] text-slate-500 font-bold leading-relaxed mb-5">
                    Subscribe to our newsletter for the latest dental tips and updates.
                  </p>

                  {subscribed ? (
                    <div className="p-4 rounded-xl bg-white border border-emerald-200/60 flex flex-col items-center justify-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shadow-sm">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <span className="text-[11px] font-black text-emerald-700">Subscribed Successfully!</span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="space-y-2.5">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs font-semibold text-slate-800 placeholder-slate-400 outline-none focus:border-brand-blue/30 focus:shadow-sm"
                      />
                      <button 
                        type="submit"
                        className="w-full py-3 bg-brand-blue hover:bg-brand-hover text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-md shadow-brand-blue/10 flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                      >
                        <span>Subscribe</span>
                        <Send className="w-3 h-3" />
                      </button>
                    </form>
                  )}

                  <p className="text-[9.5px] text-slate-400 font-bold leading-relaxed mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>

              </div>

              {/* RIGHT COLUMN: MAIN ARTICLE GRID */}
              <div className="lg:col-span-9 text-left order-1 lg:order-2">
                
                {/* Category Filter Tabs & Sort Dropdown */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 border-b border-slate-100 pb-5 mb-8">
                  
                  {/* Category Pills */}
                  <div className="flex overflow-x-auto gap-2.5 scrollbar-hide pb-2 sm:pb-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                    {['All Articles', 'Oral Health Tips', 'Treatments', 'Kids Care', 'Cosmetic', 'Implants'].map((tab) => {
                      const canonicalTab = categoryMap[tab] || tab;
                      const isActive = selectedCategory === canonicalTab;
                      return (
                        <button
                          key={tab}
                          onClick={() => {
                            setSelectedCategory(canonicalTab);
                            setCurrentPageNum(1);
                          }}
                          className={`px-4.5 py-2.5 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap hover:scale-102 active:scale-95 ${
                            isActive 
                              ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15' 
                              : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }`}
                        >
                          {tab}
                        </button>
                      );
                    })}
                  </div>

                  {/* Sort Dropdown */}
                  <div className="relative flex items-center justify-end self-end sm:self-auto flex-shrink-0" ref={sortRef}>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-2">Sort:</span>
                    <button 
                      onClick={() => setIsSortOpen(!isSortOpen)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 cursor-pointer hover:border-slate-300 transition-colors shadow-sm focus:outline-none"
                    >
                      <span>{sortBy}</span>
                      <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isSortOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isSortOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute right-0 top-full mt-1.5 w-40 bg-white border border-slate-200 rounded-xl shadow-lg z-35 py-1.5 origin-top-right"
                        >
                          {['Latest First', 'Oldest First'].map((option) => (
                            <button
                              key={option}
                              onClick={() => {
                                setSortBy(option);
                                setIsSortOpen(false);
                                setCurrentPageNum(1);
                              }}
                              className={`w-full text-left px-4 py-2 text-xs font-bold transition-colors hover:bg-slate-50 ${
                                sortBy === option ? 'text-brand-blue bg-blue-50/40' : 'text-slate-600'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Articles Grid (3x3 matching image) */}
                {filteredArticles.length === 0 ? (
                  <div className="py-20 text-center rounded-[28px] border border-dashed border-slate-200 bg-slate-50/50">
                    <span className="text-sm font-black text-slate-400">No articles found matching your criteria.</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6.5">
                    {currentArticles.map((art, idx) => (
                      <ScrollReveal key={idx} delay={idx * 40}>
                        <div 
                          onClick={() => handleSelectArticle(art)}
                          className="rounded-[24px] overflow-hidden bg-white border border-slate-200/60 hover:border-brand-blue/20 hover:shadow-[0_20px_40px_rgba(29,78,216,0.05)] transition-all duration-300 flex flex-col justify-between group h-full cursor-pointer"
                        >
                          
                          {/* Article Image Frame */}
                          <div className="h-[180px] w-full relative bg-slate-50">
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

                          {/* Article Text Content */}
                          <div className="p-5 pt-7 flex flex-col flex-grow">
                            
                            {/* Title */}
                            <h3 className="font-sans font-black text-[15px] sm:text-[16px] text-slate-900 mb-2 leading-snug tracking-tight group-hover:text-brand-blue transition-colors duration-300 line-clamp-2">
                              {art.title}
                            </h3>
                            
                            {/* Subtitle */}
                            <p className="text-[11.5px] text-slate-500 font-semibold leading-relaxed mb-6 line-clamp-3">
                              {art.subtitle}
                            </p>
                            
                            {/* Author & Read Time Group */}
                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                              {/* Author avatar */}
                              <img 
                                src={art.authorImage} 
                                alt={art.author} 
                                className="w-8 h-8 rounded-full border border-slate-200/60 object-cover shadow-sm"
                              />
                              
                              {/* Author details */}
                              <div className="flex flex-col min-w-0">
                                <span className="text-[10.5px] font-black text-slate-800 leading-none truncate">{art.author}</span>
                                <div className="flex items-center gap-1 mt-1.5 text-[9.5px] text-slate-400 font-bold leading-none">
                                  <span>{art.date}</span>
                                  <span className="opacity-50">•</span>
                                  <span>{art.readTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                )}

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => {
                          setCurrentPageNum(pageNum);
                          window.scrollTo({ top: 350, behavior: 'smooth' });
                        }}
                        className={`w-9 h-9 rounded-lg text-xs font-extrabold transition-all duration-200 cursor-pointer flex items-center justify-center hover:scale-105 active:scale-95 ${
                          pageNum === currentPageNum 
                            ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/15' 
                            : 'bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-slate-200 shadow-sm'
                        }`}
                      >
                        {pageNum}
                      </button>
                    ))}
                    
                    {/* Next button */}
                    {currentPageNum < totalPages && (
                      <button 
                        onClick={() => {
                          setCurrentPageNum((prev) => prev + 1);
                          window.scrollTo({ top: 350, behavior: 'smooth' });
                        }}
                        className="w-9 h-9 rounded-lg bg-white border border-slate-200 shadow-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}

              </div>

            </div>
          </section>

          {/* FINAL CTA BANNER (DentaCare Blue Banner matching reference) */}
          <section className="py-16 max-w-[1240px] mx-auto px-6 relative z-10">
            <ScrollReveal>
              {/* Banner Container Box */}
              <div className="rounded-[36px] bg-brand-blue text-white relative overflow-hidden min-h-[320px] md:h-[280px] flex items-center shadow-xl">
                
                {/* Background design accents */}
                <div className="absolute left-[-10%] bottom-[-20%] w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl -z-10" />

                {/* Background grid pattern inside a clipped container */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

                {/* Right Side Image with Gradient Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-[85%] sm:w-[70%] md:w-[60%] h-full z-10">
                  <img 
                    src="/assets/readytotransformwithus.webp" 
                    alt="Smiling Female Dentist" 
                    className="w-full h-full object-cover object-[30%_center] md:object-[35%_center] select-none pointer-events-none"
                  />
                  {/* Gradient Overlay for blending */}
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-blue via-40% md:via-45% to-transparent to-85% md:to-75% z-20" />
                </div>

                {/* Left Content */}
                <div className="relative z-30 max-w-xl text-left p-8 sm:p-12 md:w-[55%] flex flex-col items-start">
                  <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-[36px] text-white leading-tight mb-4 tracking-tight">
                    Have Questions About <br className="hidden sm:inline" />
                    Your Dental Health?
                  </h2>
                  <p className="text-xs sm:text-sm text-white/90 font-medium leading-relaxed mb-6 max-w-md">
                    Our experts are here to help you achieve a healthy, confident smile.
                  </p>
                  <button
                    onClick={() => {
                      if (setCurrentPage) setCurrentPage('appointment');
                    }}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-brand-blue hover:text-brand-hover font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer"
                  >
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                
              </div>
            </ScrollReveal>
          </section>
        </>
      )}
    </div>
  );
}
