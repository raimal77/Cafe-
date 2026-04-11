import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Coffee", "Burgers", "Pizza", "Shakes", "Snacks", "Desserts"];

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
  { id: 13, category: "Snacks", name: "Fries", price: "129", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 14, category: "Snacks", name: "Nachos", price: "159", img: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 15, category: "Snacks", name: "Garlic Bread", price: "149", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 16, category: "Desserts", name: "Brownie", price: "199", img: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 17, category: "Desserts", name: "Red Velvet", price: "149", img: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?q=60&w=600&auto=format&fit=crop&fm=webp" },
  { id: 18, category: "Snacks", name: "Fresh Paste Premium", price: "279", img: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=60&w=600&auto=format&fit=crop&fm=webp" },
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
          className="relative h-32 md:h-40 w-full rounded-2xl overflow-hidden mb-6 border border-white/10 will-change-transform-opacity shadow-2xl"
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
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="hidden md:block w-24 h-24 lg:w-32 lg:h-32 relative"
            >
              <div className="absolute inset-0 bg-gold-primary/20 blur-2xl rounded-full animate-pulse" />
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=60&w=400&auto=format&fit=crop&fm=webp" 
                alt="Decorative Coffee" 
                className="w-full h-full object-cover rounded-full border border-white/20 shadow-2xl animate-float-slow relative z-10"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* UI Framework Style Filter Bar */}
        <div className="mb-6 sticky top-24 z-20 bg-[#0A0A0A]/80 backdrop-blur-md py-3 lg:py-5 -mx-4 px-10 md:px-12 border-b border-white/5 ml-[-50px]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex overflow-x-auto gap-2 lg:gap-4 hide-scrollbar snap-x snap-mandatory lg:justify-center"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2 lg:px-10 lg:py-4 rounded-xl lg:rounded-2xl text-[10px] lg:text-sm font-bold uppercase tracking-widest transition-all duration-300 border lg:hover:-translate-y-0.5 snap-start relative overflow-hidden ${
                  activeCategory === cat 
                    ? 'text-bg-primary border-gold-primary lg:shadow-[0_4px_15px_rgba(197,160,89,0.3)]' 
                    : 'bg-white/5 text-text-secondary border-transparent hover:bg-white/10'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gold-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Speedy Menu Grid */}
        <div className="pb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8"
              >
                {filteredItems.map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -10 : 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.2, ease: "easeOut" }}
                    className="relative aspect-square lg:aspect-[4/3] rounded-xl lg:rounded-2xl overflow-hidden group border border-white/5 bg-[#1A1A1A]/20 will-change-transform-opacity lg:hover:-translate-y-1 lg:transition-all lg:duration-300 lg:hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hardware-accelerated"
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
                    <div className="absolute inset-0 flex flex-col justify-end p-4 lg:p-8">
                      <h3 className="text-[11px] lg:text-lg font-bold text-white uppercase tracking-wider mb-1 lg:mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gold-primary font-bold text-[11px] lg:text-lg">
                        ₹{item.price}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* AR Menu Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-4 relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group h-full min-h-[600px] hardware-accelerated"
          >
            <img 
              src="https://images.unsplash.com/photo-1544145945-f904253d0c71?q=60&w=800&auto=format&fit=crop&fm=webp" 
              alt="AR Menu Experience" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 img-cinematic"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-12 left-12 right-12 glass-strong p-8 rounded-3xl border border-white/10">
              <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Experience</span>
              <h3 className="text-3xl font-display font-bold text-white uppercase tracking-widest leading-tight">AR <br /><span className="text-gradient">Menu</span></h3>
              <p className="text-text-secondary text-sm mt-4 font-light opacity-80 leading-relaxed">
                Visualize your favorite dishes in 3D before you order. The future of dining is here.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
