import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NavigationProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navigation({ cartCount, onCartClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-emerald-950/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo mock */}
          <div className="w-10 h-10 border-2 border-gold-500 rounded-full flex items-center justify-center">
            <span className="text-gold-500 font-display font-bold text-xl">R</span>
          </div>
          <span className={`font-display font-semibold tracking-widest uppercase text-xl ${isScrolled ? 'text-cream-50' : 'text-cream-50'}`}>
            Royal Spice<span className="text-gold-500 ml-1">Garden</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-cream-50/80 hover:text-gold-500 text-sm tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onCartClick}
            className="relative p-2 text-cream-50 hover:text-gold-500 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold-500 text-emerald-950 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <a href="#reservations" className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-colors uppercase tracking-wider text-sm">
            Book Table
          </a>
          <button onClick={() => window.print()} className="px-6 py-2 bg-gold-500 text-emerald-950 hover:bg-cream-50 transition-colors uppercase tracking-wider text-sm font-semibold">
            Brochure
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="xl:hidden flex items-center gap-4">
          <button onClick={onCartClick} className="relative p-2 text-cream-50">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-gold-500 text-emerald-950 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-cream-50 p-2">
            {isMobileMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="xl:hidden absolute top-full left-0 w-full bg-emerald-950 border-t border-emerald-900"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-cream-50 hover:text-gold-500 tracking-widest uppercase py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
