import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-24 pb-12 px-6 md:px-12 mt-24 bg-[#030202] relative overflow-hidden">
      <div className="hidden lg:block absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 lg:gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2 max-w-sm">
            <Link to="/" className="text-3xl font-display font-bold tracking-[0.3em] text-text-primary uppercase mb-8 block group">
              Caff<span className="text-gold-primary group-hover:text-gold-glow transition-colors">cio</span>
            </Link>
            <p className="text-text-secondary leading-relaxed font-light text-sm opacity-80">
              Your everyday café spot for comfort and conversations. Experience the finest blends in a space designed for you.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-primary mb-8">Explore</h4>
            <ul className="space-y-5">
              <li><Link to="/" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Home</Link></li>
              <li><Link to="/menu" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Menu</Link></li>
              <li><Link to="/gallery" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Gallery</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Our Story</Link></li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-gold-primary mb-8">Connect</h4>
            <ul className="space-y-5">
              <li><Link to="/contact" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Visit Us</Link></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">WhatsApp</a></li>
              <li><a href="#" className="text-text-secondary hover:text-text-primary lg:hover:text-gold-primary lg:hover:translate-x-1 transition-all duration-300 text-sm tracking-widest uppercase block">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] text-text-secondary tracking-[0.2em] uppercase font-bold">
          <p>&copy; {new Date().getFullYear()} Caffcio. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-gold-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold-primary transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
