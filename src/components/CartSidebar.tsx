import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
}

export default function CartSidebar({ isOpen, onClose, items, onUpdateQuantity }: CartSidebarProps) {
  const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const taxes = subtotal * 0.05; // 5% GST
  const total = subtotal + taxes;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-emerald-950/80 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream-50 shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-emerald-950/10 flex items-center justify-between">
              <h2 className="font-display text-2xl text-emerald-950 flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-gold-500" />
                Your Order
              </h2>
              <button 
                onClick={onClose}
                className="p-2 text-emerald-950/50 hover:text-emerald-950 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {items.length === 0 ? (
                <div className="text-center text-emerald-900/50 pt-20 flex flex-col items-center">
                  <ShoppingBag className="w-16 h-16 mb-6 opacity-20" />
                  <p>Your royal feast awaits selection.</p>
                </div>
              ) : (
                items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-20 h-20 bg-emerald-100 overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h4 className="font-display text-lg text-emerald-950">{item.name}</h4>
                        <span className="font-semibold text-emerald-950">₹{item.price * item.quantity}</span>
                      </div>
                      <p className="text-sm text-emerald-900/60 mb-2">{item.category}</p>
                      <div className="mt-auto flex items-center gap-4 bg-emerald-50 w-fit px-2 py-1 border border-emerald-900/10">
                        <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-emerald-950 hover:text-gold-500">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold w-4 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-emerald-950 hover:text-gold-500">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-emerald-950/10 p-6 bg-cream-100">
                <div className="flex flex-col gap-3 text-sm text-emerald-950/70 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-emerald-950">₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Fees</span>
                    <span className="font-semibold text-emerald-950">₹{taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-emerald-950/10 text-lg text-emerald-950 font-display">
                    <span>Total</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-emerald-950 text-gold-500 uppercase tracking-widest text-sm font-semibold hover:bg-emerald-900 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
