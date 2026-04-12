import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowRight, MapPin, Home, Coffee, Image as ImageIcon, Info, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Menu', path: '/menu', icon: Coffee },
    { name: 'Our Café', path: '/gallery', icon: ImageIcon },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Visit us', path: '/contact', icon: Store },
  ];

  const handleGetDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById('find-your-spot');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      const element = document.getElementById('find-your-spot');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform-opacity ${
          isScrolled 
            ? 'py-3 lg:py-5 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl rounded-b-2xl' 
            : 'py-6 lg:py-8 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="lg:w-1/4">
            <Link to="/" className="text-xl md:text-2xl font-display font-bold tracking-[0.3em] text-text-primary uppercase group">
              Caff<span className="text-gold-primary group-hover:text-gold-glow transition-colors">cio</span>
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-10 lg:w-2/4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1.5 text-[10px] lg:text-xs tracking-[0.25em] uppercase transition-all duration-500 relative group font-bold lg:hover:bg-transparent lg:after:content-[''] lg:after:absolute lg:after:-bottom-2 lg:after:left-0 lg:after:right-0 lg:after:h-[1px] lg:after:bg-gold-primary lg:after:scale-x-0 lg:hover:after:scale-x-100 lg:after:transition-transform lg:after:origin-center lg:after:duration-300 ${
                  location.pathname === link.path 
                    ? 'text-gold-primary lg:after:scale-x-100' 
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <link.icon className="w-3.5 h-3.5 mb-0.5" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Right: CTA */}
          <div className="hidden lg:flex items-center justify-end lg:w-1/4">
            <button
              onClick={handleGetDirections}
              className="group flex items-center space-x-3 px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 whitespace-nowrap"
            >
              <MapPin className="w-3.5 h-3.5 text-gold-primary group-hover:scale-110 transition-transform" />
              <span>Get Direction</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-text-primary p-2 hover:text-gold-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/60"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="relative w-[80%] max-w-sm bg-[#111111] h-full flex flex-col shadow-xl rounded-l-[2.5rem] border-l border-white/5 overflow-hidden will-change-transform hardware-accelerated"
            >
              <div className="p-8 md:p-10 flex flex-col h-full relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xl font-display font-bold tracking-[0.3em] text-text-primary uppercase">
                    Caff<span className="text-gold-primary">cio</span>
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group active:scale-90"
                  >
                    <ArrowRight className="w-5 h-5 text-text-secondary group-hover:text-gold-primary transition-colors" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.05 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between w-full px-7 py-5 rounded-full shadow-lg group transition-all duration-300 active:scale-[0.97] border ${
                          location.pathname === link.path 
                            ? 'bg-gradient-to-r from-[#C8A96A] to-[#D9B97A] border-transparent shadow-gold-primary/20' 
                            : 'bg-white/5 hover:bg-white/10 border-white/5'
                        }`}
                      >
                        <span className={`flex items-center gap-3 font-bold uppercase tracking-[0.2em] text-sm transition-colors ${
                          location.pathname === link.path ? 'text-[#2A1E1A]' : 'text-text-primary group-hover:text-gold-primary'
                        }`}>
                          <link.icon className="w-4 h-4" />
                          {link.name}
                        </span>
                        <ChevronRight className={`w-5 h-5 transition-all duration-300 ${
                          location.pathname === link.path ? 'text-[#2A1E1A]' : 'text-text-secondary group-hover:text-gold-primary group-hover:translate-x-1'
                        }`} />
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + navLinks.length * 0.05 }}
                  >
                    <button
                      onClick={handleGetDirections}
                      className="flex items-center gap-4 w-full px-7 py-5 rounded-full shadow-lg group transition-all duration-300 active:scale-[0.97] border bg-white/5 hover:bg-white/10 border-white/5"
                    >
                      <MapPin className="w-5 h-5 transition-all duration-300 text-text-secondary group-hover:text-gold-primary group-hover:scale-110" />
                      <span className="font-bold uppercase tracking-[0.2em] text-sm transition-colors text-text-primary group-hover:text-gold-primary whitespace-nowrap">
                        Get Direction
                      </span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
