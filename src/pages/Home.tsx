import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Coffee, Star, Clock, Shield, MapPin, Instagram, MessageCircle, ExternalLink, Users, Heart, Briefcase, PartyPopper, ChevronDown, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  { q: "What are your opening hours?", a: "We are open every day from 8:00 AM to 11:00 PM." },
  { q: "Do you have vegetarian options?", a: "Yes, we have a wide range of pure vegetarian burgers, pizzas, and snacks." },
  { q: "Is this café good for small gatherings or dates?", a: "Absolutely! We have cozy corners and a great vibe perfect for dates and hanging out with friends." },
  { q: "Do you offer takeaway or WhatsApp orders?", a: "Yes, you can easily order for takeaway or message us on WhatsApp for quick pickup." },
  { q: "Is parking available nearby?", a: "Yes, there is ample parking space available right outside the café." },
  { q: "Do you host birthday or small events?", a: "Yes, we do! You can book a section of our café for birthdays and small celebrations. Contact us to know more." }
];

export default function Home() {
  const [visibleFaqs, setVisibleFaqs] = useState(2);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="w-full relative">
      {/* Background Layering */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gold-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-espresso-dark/10 blur-[150px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 lg:pt-0 lg:items-center">
        <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
          <img 
            src="https://files.yappe.in/place/full/the-village-best-family-restaurant-in-kashipur-10466689.webp" 
            alt="The Village - Premium family restaurant ambience" 
            className="w-full h-full object-cover opacity-[0.45] lg:opacity-50 lg:hover:scale-[1.03] transition-transform duration-300 animate-fade-in img-cinematic"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/95 via-bg-primary/10 to-bg-primary lg:bg-gradient-to-b lg:from-bg-primary/80 lg:via-bg-primary/30 lg:to-bg-primary" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center w-full lg:flex-col lg:items-center lg:text-center lg:justify-center">
          <div
            className="max-w-5xl lg:max-w-3xl hardware-accelerated animate-fade-in-up"
          >
            <span className="inline-block text-gold-primary text-[10px] md:text-xs tracking-[0.5em] uppercase mb-8 font-bold">
              Your Everyday Café Spot
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-[9rem] lg:text-[5.5rem] font-display font-bold leading-[0.85] mb-10 uppercase tracking-tighter hover:opacity-90 transition-opacity duration-300">
              Good Food, <br className="lg:hidden" />
              <span className="text-gradient">Great Vibes</span>
            </h1>
            <div className="backdrop-blur-sm bg-black/20 p-4 md:p-5 rounded-2xl border border-white/5 mb-14 max-w-2xl mx-auto shadow-lg">
              <p className="text-base md:text-xl lg:text-base text-text-secondary leading-relaxed font-light opacity-100 text-white">
                Bites, Brews & Chill. Experience a premium sanctuary crafted for your best moments and everyday cravings.
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
              <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}>
                <Link
                  to="/menu"
                  className="group px-12 py-5 lg:px-8 lg:py-4 rounded-full bg-accent-gradient text-bg-primary font-bold tracking-[0.2em] uppercase text-[10px] lg:text-[9px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-[0_10px_30px_rgba(197,160,89,0.2)] flex items-center space-x-3 shine-effect border border-white/10 relative overflow-hidden"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="flex items-center gap-6">
                <a href="#" className="flex items-center space-x-3 px-6 py-3 lg:px-5 lg:py-2.5 rounded-full bg-transparent border border-[#B38B4D]/40 text-gold-primary hover:bg-[#B38B4D] hover:text-bg-primary transition-all duration-300 group cta-glow-instagram shine-effect">
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] lg:text-[8px] tracking-[0.2em] uppercase font-bold">Instagram</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-6 py-3 lg:px-5 lg:py-2.5 rounded-full bg-transparent border border-[#B38B4D]/40 text-gold-primary hover:bg-[#B38B4D] hover:text-bg-primary transition-all duration-500 group cta-glow-whatsapp shine-effect">
                  <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] lg:text-[8px] tracking-[0.2em] uppercase font-bold">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Panels Section */}
      <section className="py-24 bg-bg-secondary/30 relative overflow-hidden content-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">The Experience</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Why You'll <br/>Love Us</h2>
            </div>
            <p className="text-text-secondary max-w-sm text-base leading-relaxed font-light opacity-80">We've combined the best of coffee culture with a vibe that feels like home.</p>
          </div>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-6 px-4 md:px-12 pb-12 hide-scrollbar snap-x snap-mandatory lg:max-w-[1400px] lg:mx-auto ml-[20px]">
          {[
            { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Interiors", subtitle: "Comfortable & aesthetic seating" },
            { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Fresh Food", subtitle: "Gourmet bites prepared daily" },
            { img: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=50&w=600&auto=format&fit=crop&fm=webp", title: "The Vibe", subtitle: "Cinematic sanctuary for focus" },
            { img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Baristas", subtitle: "Mastering the art of extraction" }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="min-w-[260px] md:min-w-[380px] lg:min-w-0 aspect-[3/4] lg:aspect-[4/5] snap-start glass-strong rounded-[3rem] overflow-hidden group border border-white/5 shadow-2xl relative will-change-transform-opacity bg-[#0D0D0D] lg:hover:-translate-y-2 lg:hover:rotate-1 lg:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] lg:transition-all lg:duration-300"
            >
            <motion.img 
              initial={{ scale: 1.05, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 + 0.1 }}
              src={feature.img} 
              alt={feature.title} 
              loading="lazy" 
              decoding="async" 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04] will-change-transform img-cinematic" 
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-10">
                <h4 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-widest text-white mb-2">{feature.title}</h4>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold-primary font-bold opacity-80">{feature.subtitle}</p>
              </div>
            </motion.div>
          ))}
          <div className="min-w-[20px] md:min-w-[40px]" />
        </div>
      </section>

      {/* Your Space / Time Section - Horizontal Scroll */}
      <section className="py-24 relative content-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Perfect For Every Moment</span>
          <h2 className="text-4xl md:text-[5rem] lg:text-[4rem] font-display font-bold uppercase tracking-tight">Your Space, Your Time</h2>
        </div>

        <div className="relative max-w-[1400px] mx-auto">
          <div className="flex overflow-x-auto lg:grid lg:grid-cols-4 gap-10 px-4 md:px-12 pb-20 hide-scrollbar snap-x snap-mandatory perspective-1000">
            {[
              { icon: Heart, title: "Dates", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=50&w=600&auto=format&fit=crop&fm=webp" },
              { icon: Users, title: "Friends Hangout", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=50&w=600&auto=format&fit=crop&fm=webp" },
              { icon: Briefcase, title: "Work & Meetings", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=50&w=600&auto=format&fit=crop&fm=webp" },
              { icon: PartyPopper, title: "Celebrations", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=50&w=600&auto=format&fit=crop&fm=webp" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.2, delay: i * 0.05, ease: "easeOut" }}
                className="min-w-[280px] md:min-w-[350px] lg:min-w-0 aspect-[3/4] lg:aspect-[4/5] snap-center relative rounded-[4rem] lg:rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/5 shadow-xl hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 will-change-transform-opacity bg-[#0D0D0D] animate-float-subtle hardware-accelerated"
              >
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 will-change-transform img-cinematic" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-gold-primary/10 backdrop-blur-xl flex items-center justify-center mb-6 border border-gold-primary/20 group-hover:bg-gold-primary group-hover:text-bg-primary transition-all duration-500">
                    <item.icon className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-500" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-widest">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Café Gallery */}
      <section className="py-24 relative bg-bg-secondary/20 content-auto -mt-[19px]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Interiors & Exteriors</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight">Our Café</h2>
            </div>
          </div>
        </div>

        <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-8 px-4 md:px-12 pb-12 hide-scrollbar snap-x snap-mandatory lg:max-w-[1400px] lg:mx-auto">
          {[
            { img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=50&w=600&auto=format&fit=crop&fm=webp", title: "The Lounge" },
            { img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Outdoor Seating" },
            { img: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Barista Bar" },
            { img: "https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?q=50&w=600&auto=format&fit=crop&fm=webp", title: "The Roastery" },
            { img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Atmosphere" },
            { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=50&w=600&auto=format&fit=crop&fm=webp", title: "Quiet Corners" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
              className="min-w-[280px] md:min-w-[400px] lg:min-w-0 aspect-[4/5] lg:aspect-[16/11] snap-center relative rounded-[3rem] lg:rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl border border-white/5 will-change-transform-opacity bg-[#0D0D0D] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04] will-change-transform img-cinematic" 
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                <div className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 transform transition-transform duration-300 group-hover:-translate-y-2 shadow-lg">
                  <h3 className="text-sm md:text-base font-display font-bold uppercase tracking-widest text-white">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
              <Link to="/gallery" className="group px-8 py-4 rounded-full bg-accent-gradient text-bg-primary font-bold tracking-[0.3em] uppercase text-[9px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-300 shadow-xl flex items-center space-x-3 shine-effect cta-glow-whatsapp">
                <span>View All Images</span>
                <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
        </div>
      </section>

      {/* Stay Connected Section */}
      <section className="py-24 relative px-6 overflow-hidden content-auto">
        <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
          <img src="https://images.unsplash.com/photo-1495474472205-51f750c07a16?q=40&w=600&auto=format&fit=crop&fm=webp" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-50 img-cinematic" alt="texture" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050302] via-[#050302]/90 to-[#050302]" />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.01] backdrop-blur-xl rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)] will-change-transform-opacity overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 via-transparent to-transparent opacity-50 pointer-events-none" />
            <div className="relative z-10 text-center lg:text-left max-w-lg">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 leading-tight">Stay <span className="text-gradient">Connected</span></h2>
              <p className="text-text-secondary leading-relaxed font-light text-base opacity-90">Order on WhatsApp or follow us on Instagram for daily vibes and special offers.</p>
            </div>
            
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a href="#" className="flex-1 lg:min-w-[160px] flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-gradient-to-br from-[#B38B4D] to-[#C5A059] border-t border-white/20 border-b-4 border-[#8A6B3A] text-bg-primary hover:scale-[1.05] hover:brightness-110 transition-all duration-300 group shadow-lg hover:shadow-gold-primary/20 active:scale-[0.97] active:border-b-0 active:translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine-infinite" />
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[7px] uppercase tracking-widest opacity-80 font-bold">WhatsApp</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase">Order Now</p>
                </div>
              </a>
              <a href="#" className="flex-1 lg:min-w-[160px] flex items-center justify-center space-x-3 px-6 py-4 rounded-full bg-gradient-to-br from-[#B38B4D] to-[#C5A059] border-t border-white/20 border-b-4 border-[#8A6B3A] text-bg-primary hover:scale-[1.05] hover:brightness-110 transition-all duration-300 group shadow-lg hover:shadow-gold-primary/20 active:scale-[0.97] active:border-b-0 active:translate-y-1 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine-infinite" />
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[7px] uppercase tracking-widest opacity-80 font-bold">Instagram</p>
                  <p className="text-[10px] font-bold tracking-widest uppercase">Follow Us</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-24 relative overflow-hidden content-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">What People Say</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4">Customer <span className="text-gradient">Reviews</span></h2>
            <p className="text-text-secondary max-w-xl mx-auto text-base font-light leading-relaxed opacity-70">
              Real experiences from our guests
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-[1400px] mx-auto perspective-1000">
          <div className="flex overflow-x-auto hide-scrollbar gap-6 px-4 md:px-12 pb-12 snap-x snap-mandatory lg:gap-8">
            <div className="flex gap-6 lg:gap-8">
              {[
                { name: "Rohit Sharma", rating: 5, text: "Amazing ambience and food. The coffee here is truly world-class. Perfect spot for a weekend hangout.", time: "3 days ago", initial: "R" },
                { name: "Priya Patel", rating: 5, text: "Great place to chill with friends. The staff is very polite and the music is just right. Loved the pasta!", time: "1 week ago", initial: "P" },
                { name: "Arjun Kapoor", rating: 4, text: "Loved the vibe and food quality. The interiors are so premium. A bit crowded on weekends but worth it.", time: "2 weeks ago", initial: "A" },
                { name: "Sneha Reddy", rating: 5, text: "Perfect spot for evening coffee. The outdoor seating is beautiful. Highly recommend their signature brew.", time: "1 month ago", initial: "S" },
                { name: "Vikram Singh", rating: 5, text: "Best coffee in town, highly recommended. The attention to detail in the decor is impressive.", time: "2 months ago", initial: "V" },
                { name: "Ananya Iyer", rating: 5, text: "The interiors are so aesthetic! Every corner is Instagrammable. And the desserts are heavenly.", time: "3 months ago", initial: "A" },
                { name: "Siddharth Malhotra", rating: 5, text: "A true sanctuary in the city. The atmosphere is calm and the food is consistently great.", time: "4 months ago", initial: "S" },
                { name: "Kavya Gupta", rating: 5, text: "Excellent service and premium vibes. This has become my go-to place for meetings.", time: "5 months ago", initial: "K" }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 1 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="w-[280px] md:w-[320px] aspect-square snap-center glass-strong p-8 rounded-[2.5rem] border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-gold-primary/20 hover:-translate-y-3 hover:rotate-1 transition-all duration-500 group relative overflow-hidden flex-shrink-0 hardware-accelerated flex flex-col justify-between"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.48 10.92v3.28h4.78c-.19 1.06-1.22 3.08-4.78 3.08-3.09 0-5.61-2.56-5.61-5.72s2.52-5.72 5.61-5.72c1.76 0 2.94.75 3.61 1.39l2.6-2.51C17.03 3.05 14.95 2 12.48 2 6.69 2 2 6.69 2 12.48s4.69 10.48 10.48 10.48c5.81 0 10.48-4.69 10.48-10.48 0-.75-.09-1.32-.2-1.92h-10.28z"/>
                    </svg>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-primary to-espresso-dark flex items-center justify-center text-bg-primary font-bold text-lg border border-white/10 shadow-lg">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="text-base font-display font-bold text-white tracking-wide">{review.name}</h4>
                      <p className="text-[10px] text-text-secondary uppercase tracking-widest opacity-60">{review.time}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, index) => (
                      <Star 
                        key={index} 
                        className={`w-4 h-4 ${index < review.rating ? 'fill-gold-primary text-gold-primary' : 'text-white/10'} transition-transform group-hover:scale-110`} 
                        style={{ transitionDelay: `${index * 50}ms` }}
                      />
                    ))}
                  </div>

                  <p className="text-text-secondary text-sm md:text-base leading-relaxed font-light italic opacity-90">
                    "{review.text}"
                  </p>
                  
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-gold-primary font-bold opacity-70">Verified Review</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="min-w-[20px] md:min-w-[40px]" />
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="find-your-spot" className="py-24 content-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold-primary text-[9px] tracking-[0.3em] uppercase mb-4 block font-bold">Visit us</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-10 leading-tight">Find Your <br/>Spot</h2>
              <div className="space-y-10">
                <div className="flex items-start space-x-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-xl">
                    <MapPin className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold uppercase tracking-widest mb-2">Location</h4>
                    <p className="text-text-secondary leading-relaxed font-light text-base opacity-80">123 Luxury Avenue, Metropolis, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 shadow-xl">
                    <Clock className="w-6 h-6 text-gold-primary" />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-bold uppercase tracking-widest mb-2">Hours</h4>
                    <p className="text-text-secondary leading-relaxed font-light text-base opacity-80">Open Daily: 08:00 AM - 11:00 PM</p>
                  </div>
                </div>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-xl bg-gradient-to-br from-[#B38B4D] to-[#C5A059] text-bg-primary font-bold tracking-[0.2em] uppercase text-[9px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-500 shadow-lg hover:shadow-gold-primary/20 border border-white/20 group relative overflow-hidden"
                >
                  <span className="relative z-10">Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
                </a>
              </div>
            </div>

            <div className="h-[500px] rounded-[4rem] overflow-hidden relative border border-white/10 shadow-2xl group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164132!2d-73.9878441234255!3d40.75797873483563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1712740000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Google Maps Location"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-primary/60 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative content-auto bg-bg-secondary/20">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Got Questions?</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6">Frequently Asked <br/>Questions</h2>
          </div>

          <div className="space-y-2">
            {faqs.slice(0, visibleFaqs).map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-b border-white/10"
              >
                <button
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="text-sm md:text-base font-display font-bold tracking-wide text-white group-hover:text-gold-primary transition-colors pr-4">
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10"
                  >
                    <ChevronDown className="w-4 h-4 text-gold-primary" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-text-secondary text-sm md:text-base font-light leading-relaxed opacity-80">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {visibleFaqs < faqs.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setVisibleFaqs(prev => Math.min(prev + 2, faqs.length))}
                className="px-8 py-4 rounded-full bg-transparent border border-gold-primary/40 text-gold-primary hover:bg-gold-primary hover:text-bg-primary transition-all duration-300 text-[10px] uppercase tracking-[0.2em] font-bold shine-effect"
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
