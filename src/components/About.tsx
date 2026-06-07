import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1000&auto=format&fit=crop" 
                alt="South Indian Food Spread" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-emerald-950 z-0" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border border-gold-500 z-20" />
            
            <div className="absolute bottom-10 -right-4 lg:-right-20 z-30 bg-cream-50 p-6 shadow-xl max-w-xs border-l-4 border-gold-500">
              <p className="font-display italic text-emerald-950 text-xl leading-snug">
                "We don't just cook food; we craft memories rooted in centuries of Indian tradition."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="uppercase tracking-widest text-gold-600 text-sm font-semibold">Our Heritage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display text-emerald-950 leading-tight">
              A Legacy of <br />
              <span className="italic text-emerald-800">Spices & Tradition</span>
            </h2>

            <p className="text-emerald-900/80 leading-relaxed text-lg">
              Founded over 15 years ago, Royal Spice Garden has stood as a beacon of vegetarian culinary excellence. We dive deep into the royal kitchens of India to source heritage recipes that have been passed down through generations.
            </p>
            
            <p className="text-emerald-900/80 leading-relaxed text-lg">
              Every dish is a testament to our commitment to farm-fresh ingredients, traditional slow-cooking methods, and a passion for creating a luxury atmosphere. 
            </p>

            <div className="grid grid-cols-2 gap-8 mt-8 border-t border-emerald-900/10 pt-8">
              <div>
                <span className="block text-4xl font-display text-gold-500 mb-2">15+</span>
                <span className="uppercase tracking-widest text-xs text-emerald-900 font-semibold">Years of Excellence</span>
              </div>
              <div>
                <span className="block text-4xl font-display text-gold-500 mb-2">20+</span>
                <span className="uppercase tracking-widest text-xs text-emerald-900 font-semibold">Master Chefs</span>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
