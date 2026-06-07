import { galleryImages } from '../data';
import { motion } from 'motion/react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-gold-600 text-sm font-semibold mb-4 block">Visual Diary</span>
          <h2 className="text-4xl md:text-5xl font-display text-emerald-950 leading-tight">
            The <span className="italic text-emerald-800">Gallery</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="break-inside-avoid relative group overflow-hidden"
            >
              <img 
                src={src} 
                alt="Gallery Experience" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
