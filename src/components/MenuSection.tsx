import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, Plus } from 'lucide-react';
import { menuItems, menuCategories } from '../data';
import { MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export default function MenuSection({ onAddToCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return searchQuery ? matchesSearch : matchesCategory;
  });

  return (
    <section id="menu" className="py-24 bg-emerald-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Culinary Arts</span>
          <h2 className="text-4xl md:text-6xl font-display text-cream-50 leading-tight mb-8">
            The Royal <span className="italic text-gold-400">Menu</span>
          </h2>
          
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cream-50/50 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for dishes, ingredients..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-900/50 border border-emerald-800 text-cream-50 px-12 py-4 rounded-none focus:outline-none focus:border-gold-500 transition-colors placeholder:text-cream-50/30"
            />
          </div>
        </div>

        {!searchQuery && (
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 uppercase tracking-widest text-xs font-semibold transition-all duration-300 border ${
                  activeCategory === cat 
                    ? 'border-gold-500 bg-gold-500 text-emerald-950' 
                    : 'border-emerald-800 text-cream-50/70 hover:border-gold-500/50 hover:text-gold-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group bg-emerald-900/20 border border-emerald-800/50 hover:border-gold-500/50 transition-colors flex flex-col h-full overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  {item.isSignature && (
                    <div className="absolute top-4 left-4 bg-gold-500 text-emerald-950 text-xs uppercase tracking-widest font-bold px-3 py-1 shadow-lg">
                      Signature
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 bg-emerald-950/90 text-gold-500 text-sm font-semibold px-3 py-1 border border-gold-500/30 backdrop-blur-sm">
                    ₹{item.price}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display text-2xl text-cream-50">{item.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: item.spiceLevel }).map((_, i) => (
                        <span key={i} className="text-red-500 text-sm">🌶</span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-cream-50/60 text-sm leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-emerald-800/50 pt-4 mt-auto">
                    <div className="flex items-center gap-4 text-xs text-cream-50/40 uppercase tracking-widest">
                      <span>★ {item.rating}</span>
                      <span>{item.prepTime}</span>
                    </div>
                    
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="w-10 h-10 rounded-full border border-gold-500 bg-gold-500/10 text-gold-500 flex items-center justify-center hover:bg-gold-500 hover:text-emerald-950 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-cream-50/50">
            <Info className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No culinary delights found matching your exact criteria.</p>
          </div>
        )}

      </div>
    </section>
  );
}
