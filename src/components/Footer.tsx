import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 pt-24 pb-8 border-t border-gold-500/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1 border-r border-gold-500/10 pr-8 hidden lg:block">
            <div className="w-16 h-16 border-2 border-gold-500 flex items-center justify-center mb-6">
              <span className="text-gold-500 font-display font-bold text-3xl">R</span>
            </div>
            <p className="text-cream-50/70 text-sm leading-loose">
              Authentic Indian Flavors, Crafted with Love. Experience luxury vegetarian dining in the heart of the city.
            </p>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6">Contact Us</h4>
            <div className="flex flex-col gap-4 text-cream-50/70 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-gold-500" />
                <span>123 Elite Avenue, Culinary District<br/>New Delhi, India 110001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-gold-500" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-gold-500" />
                <span>reservations@royalspice.in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6">Opening Hours</h4>
            <ul className="flex flex-col gap-3 text-cream-50/70 text-sm">
              <li className="flex justify-between border-b border-cream-50/10 pb-2">
                <span>Mon - Thu</span>
                <span>12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-cream-50/10 pb-2 text-gold-400">
                <span>Fri - Sun</span>
                <span>12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-6">Newsletter</h4>
            <p className="text-cream-50/70 text-sm mb-4">Subscribe to receive exclusive offers and seasonal menu updates.</p>
            <form className="flex border border-gold-500/30">
              <input type="email" placeholder="Your email address" className="bg-transparent px-4 py-2 w-full text-cream-50 text-sm focus:outline-none" />
              <button type="submit" className="bg-gold-500 text-emerald-950 px-4 text-sm font-semibold hover:bg-cream-50 transition-colors uppercase">Join</button>
            </form>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="p-2 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-colors rounded-full">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-colors rounded-full">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 border border-gold-500/30 text-gold-500 hover:bg-gold-500 hover:text-emerald-950 transition-colors rounded-full">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-gold-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-50/50 text-xs">
            © {new Date().getFullYear()} Royal Spice Garden. All rights reserved.
          </p>
          <div className="flex gap-6 text-cream-50/50 text-xs">
            <a href="#" className="hover:text-gold-500">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
