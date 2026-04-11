import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Coffee", "Burgers", "Pizza", "Shakes"];

const menuItems = [
  { id: 1, category: "Coffee", name: "Cappuccino", price: "189", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 2, category: "Coffee", name: "Latte", price: "219", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 3, category: "Coffee", name: "Cold Brew", price: "249", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 4, category: "Burgers", name: "Veg Burger", price: "149", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 5, category: "Burgers", name: "Paneer Burger", price: "199", img: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 6, category: "Burgers", name: "Spicy Zinger", price: "229", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 7, category: "Pizza", name: "Margherita", price: "299", img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 8, category: "Pizza", name: "Farmhouse", price: "349", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 9, category: "Pizza", name: "Paneer Pizza", price: "399", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 10, category: "Shakes", name: "Chocolate", price: "179", img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 11, category: "Shakes", name: "Strawberry", price: "169", img: "https://images.unsplash.com/photo-1553784489-25d27f1777f1?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 12, category: "Shakes", name: "Oreo", price: "189", img: "https://images.unsplash.com/photo-1579954115545-a95591f28bee?q=60&w=600&auto=format&fit=crop&fm=webp" },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="w-full pt-20 min-h-screen relative overflow-hidden bg-[#0A0A0A]">
      {/* Visible Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1495474472205-51f750c07a16?q=60&w=1920&auto=format&fit=crop&fm=webp" 
          alt="Menu Background" 
          className="w-full h-full object-cover opacity-10 grayscale brightness-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Compact Hero Panel */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-32 md:h-40 w-full rounded-2xl overflow-hidden mb-12 border border-white/10 will-change-transform-opacity shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1550966842-2849a2208470?q=60&w=1200&auto=format&fit=crop&fm=webp" 
            alt="Menu" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 img-cinematic"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-between px-8 md:px-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-2xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter">
                Our <span className="text-gold-primary">Menu</span>
              </h1>
              <p className="text-text-secondary text-[10px] font-bold tracking-[0.3em] uppercase mt-2">
                Fresh • Fast • Premium
              </p>
            </div>
          </div>
        </motion.div>

        {/* Layout with Sidebar Filter */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Filter */}
          <aside className="lg:w-48 flex-shrink-0">
            <div className="sticky top-32 space-y-3">
              <p className="text-gold-primary text-[9px] font-bold tracking-[0.3em] uppercase mb-6 ml-2">Filter By</p>
              <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-2 pb-4 lg:pb-0 hide-scrollbar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border relative overflow-hidden text-left w-full ${
                      activeCategory === cat 
                        ? 'text-bg-primary border-gold-primary bg-gold-primary' 
                        : 'bg-white/5 text-text-secondary border-transparent hover:bg-white/10'
                    }`}
                  >
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Speedy Menu Grid */}
          <div className="flex-grow pb-16">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6"
              >
                {filteredItems.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2, ease: "easeOut" }}
                    className="relative aspect-square rounded-xl overflow-hidden group border border-white/5 bg-[#1A1A1A]/20 will-change-transform-opacity lg:hover:-translate-y-1 lg:transition-all lg:duration-300 lg:hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hardware-accelerated"
                  >
                    <img 
                      src={item.img} 
                      alt={item.name} 
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover lg:group-hover:scale-[1.04] lg:transition-transform lg:duration-300 will-change-transform img-cinematic"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-300" />
                    
                    {/* Overlay Text - Small & Static */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4">
                      <h3 className="text-[10px] lg:text-sm font-bold text-white uppercase tracking-wider mb-1">
                        {item.name}
                      </h3>
                      <p className="text-gold-primary font-bold text-[10px] lg:text-sm">
                        ₹{item.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
