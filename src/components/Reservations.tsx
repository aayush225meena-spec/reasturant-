import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users } from 'lucide-react';

export default function Reservations() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="reservations" className="py-24 bg-cream-50 relative">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-emerald-950 p-8 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 border border-gold-500/20 translate-x-1/2 -translate-y-1/2 rotate-45" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border border-gold-500/20 -translate-x-1/2 translate-y-1/2 rotate-45" />
          
          <div className="relative z-10 text-center mb-12">
            <span className="uppercase tracking-widest text-gold-500 text-sm font-semibold mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-display text-cream-50 leading-tight">
              Reserve Your <span className="italic text-gold-400">Table</span>
            </h2>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 text-cream-50"
            >
              <div className="w-20 h-20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-500 font-display text-4xl">✓</span>
              </div>
              <h3 className="font-display text-2xl text-gold-500 mb-2">Request Received</h3>
              <p className="text-cream-50/70">Our concierge will contact you shortly to confirm your booking.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Full Name</label>
                <input required type="text" className="bg-transparent border-b border-cream-50/20 text-cream-50 py-2 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Phone Number</label>
                <input required type="tel" className="bg-transparent border-b border-cream-50/20 text-cream-50 py-2 focus:outline-none focus:border-gold-500 transition-colors" />
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Date</label>
                <div className="flex items-center border-b border-cream-50/20 py-2 focus-within:border-gold-500 transition-colors">
                  <Calendar className="w-4 h-4 text-cream-50/50 mr-2" />
                  <input required type="date" className="bg-transparent text-cream-50 w-full focus:outline-none [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Time</label>
                <div className="flex items-center border-b border-cream-50/20 py-2 focus-within:border-gold-500 transition-colors">
                  <Clock className="w-4 h-4 text-cream-50/50 mr-2" />
                  <input required type="time" className="bg-transparent text-cream-50 w-full focus:outline-none [&::-webkit-calendar-picker-indicator]:invert" />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative md:col-span-2">
                <label className="text-xs uppercase tracking-widest text-gold-500 font-semibold">Number of Guests</label>
                <div className="flex items-center border-b border-cream-50/20 py-2 focus-within:border-gold-500 transition-colors">
                  <Users className="w-4 h-4 text-cream-50/50 mr-2" />
                  <select required className="bg-emerald-950 text-cream-50 w-full focus:outline-none appearance-none">
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 relative md:col-span-2 pt-4">
                <button type="submit" className="w-full py-4 bg-gold-500 text-emerald-950 uppercase tracking-widest text-sm font-semibold hover:bg-cream-50 transition-colors">
                  Confirm Reservation
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </section>
  );
}
