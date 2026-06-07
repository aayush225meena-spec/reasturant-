import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop")' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-emerald-950/80 via-emerald-950/40 to-emerald-950" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-2 text-gold-500 mb-4">
            <Star className="w-4 h-4 fill-current" />
            <span className="uppercase tracking-[0.3em] text-sm">Fine Indian Dining</span>
            <Star className="w-4 h-4 fill-current" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-cream-50 font-display mb-6 leading-tight drop-shadow-2xl">
            Royal Spice Garden<br/>
            <span className="text-2xl md:text-4xl text-gold-500 italic font-light block mt-4">Authentic Indian Flavors, Crafted with Love</span>
          </h1>

          <p className="text-cream-50/80 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-10">
            Experience the pinnacle of vegetarian fine dining. A harmonious blend of heritage recipes, premium ingredients, and Michelin-tier execution.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full">
            <a 
              href="#menu" 
              className="px-8 py-4 bg-gold-500 text-emerald-950 uppercase tracking-widest text-sm font-semibold hover:bg-cream-50 transition-colors w-full sm:w-auto"
            >
              Explore Menu
            </a>
            <a 
              href="#reservations" 
              className="px-8 py-4 border border-gold-500 text-gold-500 uppercase tracking-widest text-sm font-semibold hover:bg-gold-500 hover:text-emerald-950 transition-colors w-full sm:w-auto"
            >
              Reserve Table
            </a>
          </div>

          <div className="pt-16 hidden md:flex items-center gap-12 text-cream-50/70 border-t border-gold-500/20 w-fit mx-auto mt-12 px-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display text-gold-500">4.9★</span>
              <span className="text-xs uppercase tracking-widest mt-1">Customer Rating</span>
            </div>
            <div className="w-px h-10 bg-gold-500/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display text-gold-500">50K+</span>
              <span className="text-xs uppercase tracking-widest mt-1">Happy Guests</span>
            </div>
            <div className="w-px h-10 bg-gold-500/20" />
            <div className="flex flex-col items-center">
              <span className="text-2xl font-display text-gold-500">100+</span>
              <span className="text-xs uppercase tracking-widest mt-1">Signature Dishes</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}
