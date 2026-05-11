import { motion } from 'motion/react';
import { Heart, Users, Coffee, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Layering */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030202]">
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-gold-primary/[0.02] blur-[150px] rounded-full animate-pulse-soft" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-espresso-dark/[0.05] blur-[120px] rounded-full animate-float" />
        
        {/* Moving Particles/Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.05, 0.15, 0.05],
                scale: [1, 1.2, 1],
                x: [0, 20, 0],
                y: [0, -30, 0]
              }}
              transition={{ 
                duration: 8 + i * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 1.5
              }}
              className="absolute w-1 h-1 bg-gold-primary rounded-full blur-[1px]"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="will-change-transform-opacity hardware-accelerated"
          >
            <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-6 block font-bold">Our Story</span>
            <h1 className="text-5xl md:text-8xl lg:text-7xl font-display font-bold mb-8 uppercase tracking-tight leading-[0.9]">More Than <br /><span className="text-gradient">Just Coffee</span></h1>
            <div className="space-y-6 text-text-secondary text-base md:text-lg lg:text-base leading-relaxed font-light opacity-80">
              <p>
                Caffcio started with a simple idea: to create a place where you can truly relax, eat, and spend time. We wanted to build a café that feels like a second home.
              </p>
              <p>
                In India, a café is where stories happen. It's where you meet friends, finish that pending work, or just enjoy a quiet moment with a good burger and coffee.
              </p>
              <p>
                Whether you're here for a quick bite or a long conversation, we make sure every visit feels special. Good food, great vibes—that's our simple promise to you.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
            className="relative h-[500px] md:h-[650px] lg:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/10 group will-change-transform-opacity hardware-accelerated"
          >
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=60&w=1200&auto=format&fit=crop&fm=webp" 
              alt="Our Café Vibe" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform img-cinematic"
              referrerPolicy="no-referrer"
              fetchPriority="high"
              decoding="async"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-8 left-8 right-8 bg-black/30 backdrop-blur-sm px-6 py-4 rounded-full border border-white/10 max-w-max">
              <p className="text-gold-primary text-[7px] tracking-[0.3em] uppercase mb-1 font-bold">The Vibe</p>
              <p className="text-sm md:text-base font-display font-bold uppercase tracking-widest leading-tight">Comfort, Food & Conversations</p>
            </div>
          </motion.div>
        </div>

        {/* Why People Love Us / Promises */}
        <div className="mb-32 content-auto">
          <div className="text-center mb-16">
            <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">What Makes Us Special</span>
            <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6">Our Promise</h2>
            <p className="text-text-secondary max-w-xl mx-auto font-light text-base opacity-70">We focus on the things that matter most to make your visit perfect.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { 
                title: "Quality Food", 
                desc: "Fresh burgers & hand-picked coffee.",
                img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=60&w=800&auto=format&fit=crop&fm=webp"
              },
              { 
                title: "Real Comfort", 
                desc: "A space designed for you to chill.",
                img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=60&w=800&auto=format&fit=crop&fm=webp"
              },
              { 
                title: "Great Vibes", 
                desc: "Perfect spot for friends & dates.",
                img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=60&w=800&auto=format&fit=crop&fm=webp"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ delay: i * 0.05, duration: 0.3, ease: "easeOut" }}
                className="relative h-[360px] md:h-[460px] lg:h-[400px] rounded-[3rem] overflow-hidden hover:-translate-y-3 transition-all duration-500 group border border-white/10 shadow-xl will-change-transform-opacity bg-[#0D0D0D] hardware-accelerated"
              >
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform img-cinematic" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto mb-6 border border-white/10">
                    <span className="text-gold-primary text-xl font-display font-bold">0{i + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 uppercase tracking-widest text-white group-hover:text-gold-primary transition-colors">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed font-light text-sm opacity-80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="py-24 relative overflow-hidden rounded-[3.5rem] bg-white/[0.05] backdrop-blur-md border border-white/10 mb-10 content-auto shadow-2xl will-change-transform-opacity hardware-accelerated"
        >
          <div className="absolute inset-0 opacity-40 bg-[#0D0D0D]">
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=60&w=1200&auto=format&fit=crop&fm=webp" loading="lazy" decoding="async" alt="Experience" className="w-full h-full object-cover img-cinematic" referrerPolicy="no-referrer" />
          </div>
          <div className="relative z-10 text-center px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="will-change-transform-opacity"
            >
              <h2 className="text-3xl md:text-6xl font-display font-bold uppercase tracking-tight mb-8 leading-tight">Our Space, <br /><span className="text-gradient">Your Time</span></h2>
              <p className="text-text-secondary max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light mb-10 opacity-80">
                We are more than just a café. We are a sanctuary for your best moments. Whether it's a celebration or a quiet work day, we've got the perfect spot for you.
              </p>
              <div className="flex justify-center">
                <div className="w-16 h-[1px] bg-gold-primary/40" />
              </div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
