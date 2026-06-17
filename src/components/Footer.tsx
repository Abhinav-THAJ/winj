import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-primary text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <Logo className="w-16 h-16 md:w-20 md:h-20 text-gold hover:scale-105 transition-transform" />
                <div className="flex flex-col text-white">
                  <span className="font-playfair font-bold text-xl leading-tight tracking-wide">
                    WIN-J
                  </span>
                  <span className="text-[10px] tracking-[0.2em] font-sans uppercase text-gold">
                    Building Solutions
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              With over 30 years of trust, engineering expertise, and construction excellence, we build luxury spaces across Kerala, India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-gold transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Building Construction</li>
              <li>Renovation & Remodeling</li>
              <li>3D Architecture & Design</li>
              <li>Structural Design & Planning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-playfair text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-gold shrink-0 mt-0.5" />
                <span>
                  Elamba, Kooranmukku,<br />
                  Uliyil P.O, Kannur,<br />
                  Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-gold shrink-0" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 12345 67890</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-gold shrink-0" />
                <a href="mailto:info@winjbuildings.com" className="hover:text-white transition-colors">info@winjbuildings.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} WIN-J Building Solutions LLP. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
