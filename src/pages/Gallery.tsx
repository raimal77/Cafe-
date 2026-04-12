import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

const categories = ["All", "Interiors & Seating", "Outdoor & Vibes", "Food & Drinks", "Lounge"];

const galleryImages = [
  { id: 1, category: "Interiors & Seating", title: "The Main Hall", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop", height: "h-[400px] md:h-[600px]" },
  { id: 2, category: "Food & Drinks", title: "Signature Brew", img: "https://images.unsplash.com/photo-1495474472205-51f750c07a16?q=80&w=2070&auto=format&fit=crop", height: "h-[300px] md:h-[400px]" },
  { id: 3, category: "Outdoor & Vibes", title: "Garden Seating", img: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2070&auto=format&fit=crop", height: "h-[350px] md:h-[500px]" },
  { id: 4, category: "Lounge", title: "Cozy Corner", img: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=2070&auto=format&fit=crop", height: "h-[320px] md:h-[450px]" },
  { id: 5, category: "Interiors & Seating", title: "Warm Ambience", img: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop", height: "h-[400px] md:h-[600px]" },
  { id: 6, category: "Food & Drinks", title: "Gourmet Bites", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop", height: "h-[300px] md:h-[400px]" },
  { id: 7, category: "Outdoor & Vibes", title: "Evening Glow", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1974&auto=format&fit=crop", height: "h-[380px] md:h-[550px]" },
  { id: 8, category: "Interiors & Seating", title: "Modern Design", img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2074&auto=format&fit=crop", height: "h-[320px] md:h-[450px]" },
  { id: 9, category: "Food & Drinks", title: "Artisan Coffee", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop", height: "h-[350px] md:h-[500px]" },
  { id: 10, category: "Lounge", title: "Private Nook", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", height: "h-[350px] md:h-[500px]" },
  { id: 11, category: "Outdoor & Vibes", title: "Street View", img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop", height: "h-[300px] md:h-[400px]" },
  { id: 12, category: "Food & Drinks", title: "Sweet Treats", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1964&auto=format&fit=crop", height: "h-[380px] md:h-[550px]" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = useMemo(() => {
    return activeCategory === "All" 
      ? galleryImages 
      : galleryImages.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="w-full pt-24 pb-24 min-h-screen relative overflow-hidden">
      {/* Immersive Background Effects */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030202]">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-gold-primary/[0.02] blur-[180px] rounded-full animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-espresso-dark/[0.05] blur-[150px] rounded-full" />
        {/* Subtle Light Particles */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-primary rounded-full blur-sm animate-float" />
          <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-gold-primary rounded-full blur-sm animate-float-delayed" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mb-12 text-center hardware-accelerated"
        >
          <span className="text-gold-primary text-[9px] tracking-[0.4em] uppercase mb-4 block font-bold">The Vibe</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 uppercase tracking-tighter leading-none">Our <span className="text-gradient">Café</span></h1>
          <p className="text-text-secondary max-w-xl mx-auto text-base font-light leading-relaxed opacity-70">
            Explore the vibes and corners of our café.
          </p>
        </motion.div>

        {/* Category Filters - Mobile Optimized */}
        <div className="flex overflow-x-auto hide-scrollbar gap-3 mb-16 pb-4 -mx-6 md:mx-0 snap-x lg:justify-center lg:gap-4">
          <div className="flex gap-3 pl-12 md:pl-0">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.2, 
                  delay: 0.05 + i * 0.03,
                  ease: "easeOut" 
                }}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-8 py-3 lg:px-10 lg:py-4 rounded-full text-[10px] lg:text-sm tracking-[0.15em] uppercase font-bold transition-all duration-300 border snap-start lg:hover:-translate-y-0.5 hardware-accelerated ${
                  activeCategory === cat 
                    ? 'bg-gold-primary text-bg-primary border-gold-primary shadow-lg shadow-gold-primary/20 lg:shadow-[0_4px_15px_rgba(197,160,89,0.3)]' 
                    : 'bg-white/5 text-text-secondary border-white/5 hover:bg-white/10 hover:text-text-primary'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Masonry Grid with AnimatePresence */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12 space-y-8 lg:space-y-12 mb-24 mx-auto max-w-7xl">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="break-inside-avoid relative group overflow-hidden rounded-[2.5rem] cursor-pointer border border-white/5 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] will-change-transform-opacity hardware-accelerated"
              >
                <div className={`w-full ${item.height} relative overflow-hidden`}>
                  <motion.img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05] will-change-transform img-cinematic"
                    loading={i < 3 ? "eager" : "lazy"}
                    fetchPriority={i < 3 ? "high" : "auto"}
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  {/* Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  
                  {/* Content Overlay - Small Blur Panel */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="bg-black/30 backdrop-blur-sm px-5 py-3 rounded-full border border-white/10 transform transition-transform duration-300 group-hover:-translate-y-2 shadow-lg flex flex-col items-start"
                    >
                      <span className="text-gold-primary text-[7px] tracking-[0.3em] uppercase font-bold mb-1 block">{item.category}</span>
                      <h3 className="text-sm md:text-base font-display font-bold text-white uppercase tracking-widest leading-tight">{item.title}</h3>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Section - Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden p-10 md:p-16 text-center border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 uppercase tracking-tight">Experience <span className="text-gradient">The Vibe</span></h2>
            <p className="text-text-secondary max-w-md mx-auto mb-10 text-sm font-light opacity-70">
              Come and find your spot in our sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/contact" 
                className="w-full sm:w-auto group flex items-center justify-center space-x-4 px-10 py-5 rounded-full bg-accent-gradient text-bg-primary font-bold tracking-[0.15em] uppercase text-[10px] hover:scale-105 transition-all duration-500 shadow-[0_15px_30px_rgba(197,160,89,0.2)] active:scale-95 shine-effect border border-white/10"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group flex items-center justify-center space-x-4 px-10 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold tracking-[0.15em] uppercase text-[10px] hover:bg-white/10 transition-all duration-300 active:scale-95 shadow-xl"
              >
                <MapPin className="w-4 h-4 text-gold-primary" />
                <span>See Location</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
