import { reviews } from '../data';
import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-emerald-950 text-cream-50 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-900 border-l border-gold-500/10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <span className="uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-display leading-tight mb-6">
              Words of <span className="italic text-gold-400">Praise</span>
            </h2>
            <p className="text-cream-50/70 mb-8 leading-relaxed">
              We take immense pride in the memories we create. Here is what our esteemed guests have to say about their Royal Spice Garden experience.
            </p>
            <div className="flex items-center gap-4 border-t border-gold-500/20 pt-6">
              <span className="text-5xl font-display text-gold-500">4.9</span>
              <div>
                <div className="flex text-gold-500 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs uppercase tracking-widest text-cream-50/50">Based on 10,000+ Reviews</span>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid gap-6 md:grid-cols-2">
            {reviews.map((review, idx) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.5 }}
                className="bg-emerald-900/40 border border-emerald-800/50 backdrop-blur-sm p-8 flex flex-col relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold-500/20" />
                <div className="flex items-center gap-4 mb-6">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full border border-gold-500/50" />
                  <div>
                    <h4 className="font-display text-lg">{review.name}</h4>
                    <div className="flex text-gold-500">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                    </div>
                  </div>
                </div>
                <p className="text-cream-50/80 text-sm leading-relaxed italic">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
