import Link from "next/link";
import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary p-1.5 rounded-lg text-white">
                <Car size={24} />
              </div>
              <span className="text-2xl font-bold text-charcoal tracking-tight">
                Car<span className="text-primary">Fiti</span>
              </span>
            </Link>
            <p className="text-charcoal/60 leading-relaxed">
              Professional car services you can rely on. Keeping Kenyan vehicles clean, safe, and road-ready.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-light-grey rounded-full flex items-center justify-center text-charcoal hover:bg-primary hover:text-white transition-all shadow-sm"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["About CarFiti", "Our Services", "How It Works", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-charcoal/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Services</h4>
            <ul className="space-y-4">
              {["Basic Wash", "Full Detailing", "Engine Check", "Fleet Management"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-charcoal/60 hover:text-primary transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-charcoal mb-6">Our Promise</h4>
            <p className="text-charcoal/60 italic leading-relaxed">
              "Every vehicle entrusted to CarFiti receives careful attention, clear communication, and service delivered to professional standards."
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-charcoal/40 text-sm">
          <p>© 2026 CarFiti. All Rights Reserved.</p>
          <div className="flex space-x-8">
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
