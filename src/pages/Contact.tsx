import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, ArrowRight, ExternalLink } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full pt-32 pb-20 min-h-screen relative overflow-hidden">
      {/* Background Layering */}
      <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#030202]">
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] bg-gold-primary/[0.02] blur-[150px] rounded-full" />
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-espresso-dark/[0.05] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-20 will-change-transform-opacity hardware-accelerated"
        >
          <span className="text-gold-primary text-[10px] tracking-[0.4em] uppercase mb-4 block font-bold">Visit Us</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 uppercase tracking-tight leading-none">Get in <span className="text-gradient">Touch</span></h1>
          <p className="text-text-secondary max-w-xl mx-auto text-base font-light leading-relaxed opacity-70">We're here for you. Say hi or plan your next visit.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 lg:mb-32 lg:items-start max-w-6xl mx-auto">
          {/* Form Panel */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
            className="glass-strong p-8 md:p-16 lg:p-12 rounded-[3.5rem] border border-white/10 shadow-xl relative overflow-hidden will-change-transform-opacity lg:col-span-7 hardware-accelerated"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="block text-[9px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-4">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-text-primary focus:outline-none focus:border-gold-primary/40 focus:ring-1 focus:ring-gold-primary/20 transition-all duration-300 placeholder:text-text-secondary/30 text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-[9px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-4">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 text-text-primary focus:outline-none focus:border-gold-primary/40 focus:ring-1 focus:ring-gold-primary/20 transition-all duration-300 placeholder:text-text-secondary/30 text-sm"
                    placeholder="Mobile Number"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="block text-[9px] font-bold text-text-secondary uppercase tracking-[0.2em] ml-4">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-[2rem] px-8 py-5 text-text-primary focus:outline-none focus:border-gold-primary/40 focus:ring-1 focus:ring-gold-primary/20 transition-all duration-300 resize-none placeholder:text-text-secondary/30 text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button 
                type="button"
                className="w-full py-5 rounded-2xl bg-accent-gradient text-bg-primary font-bold tracking-[0.3em] uppercase text-[11px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-[0_15px_30px_rgba(197,160,89,0.2)] shine-effect border border-white/10"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Info & Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="flex flex-col space-y-10 will-change-transform-opacity lg:space-y-8 lg:col-span-5 hardware-accelerated"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-panel p-8 rounded-[2.5rem] flex items-start space-x-5 group shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/10 transition-colors border border-white/5">
                  <MapPin className="w-5 h-5 text-gold-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold mb-2 uppercase tracking-widest group-hover:text-gold-primary transition-colors">Location</h4>
                  <p className="text-text-secondary text-sm leading-relaxed font-light opacity-80">123 Luxury Avenue<br/>Metropolis, NY 10001</p>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-[2.5rem] flex items-start space-x-5 group shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/10 transition-colors border border-white/5">
                  <Phone className="w-5 h-5 text-gold-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold mb-2 uppercase tracking-widest group-hover:text-gold-primary transition-colors">Contact</h4>
                  <p className="text-text-secondary text-sm leading-relaxed font-light opacity-80">+91 98765 43210<br/>hello@caffcio.com</p>
                </div>
              </div>
              <div className="glass-panel p-8 rounded-[2.5rem] flex items-start space-x-5 group shadow-lg md:col-span-2">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-primary/10 transition-colors border border-white/5">
                  <Clock className="w-5 h-5 text-gold-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-bold mb-2 uppercase tracking-widest group-hover:text-gold-primary transition-colors">Hours</h4>
                  <p className="text-text-secondary text-sm leading-relaxed font-light opacity-80">Open Daily: 08:00 AM - 11:00 PM</p>
                </div>
              </div>
            </div>

            {/* Clean Map Section */}
            <div className="space-y-6">
              <div className="rounded-[3rem] overflow-hidden relative h-[300px] lg:h-[250px] border border-white/10 shadow-2xl group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215707164132!2d-73.9878441234255!3d40.75797873483563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sin!4v1712740000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-50 group-hover:opacity-70 transition-opacity duration-1000"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-bg-primary/40 to-transparent" />
              </div>
              <div className="flex justify-center">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-8 py-4 rounded-xl bg-gradient-to-br from-[#B38B4D] to-[#C5A059] text-bg-primary font-bold tracking-[0.2em] uppercase text-[9px] hover:scale-[1.03] active:scale-[0.97] transition-all duration-500 shadow-lg hover:shadow-gold-primary/20 border border-white/20 group relative overflow-hidden"
                >
                  <MapPin className="w-3.5 h-3.5 relative z-10" />
                  <span className="relative z-10">Get Directions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stay Connected Section - Consistent with Homepage */}
        <section className="mb-24 relative px-0 overflow-hidden content-auto">
          <div className="absolute inset-0 z-0 bg-[#0D0D0D]">
            <img src="https://images.unsplash.com/photo-1495474472205-51f750c07a16?q=60&w=1200&auto=format&fit=crop&fm=webp" loading="lazy" decoding="async" className="w-full h-full object-cover opacity-20 grayscale img-cinematic" alt="texture" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050302] via-[#050302]/90 to-[#050302]" />
          </div>
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A]/80 backdrop-blur-md rounded-[3rem] p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 border border-white/10 shadow-xl will-change-transform-opacity hardware-accelerated"
            >
              <div className="text-center lg:text-left max-w-lg">
                <span className="text-gold-primary text-[10px] tracking-[0.5em] uppercase mb-4 block font-bold">Join the Community</span>
                <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight mb-6 leading-tight">Stay <span className="text-gradient">Connected</span></h2>
                <p className="text-text-secondary leading-relaxed font-light text-base opacity-90">Order on WhatsApp or follow us on Instagram for daily vibes and special offers.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
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
      </div>
    </div>
  );
}
