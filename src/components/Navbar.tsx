"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        !isTransparent ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className={`w-16 h-16 md:w-20 md:h-20 ${!isTransparent || isOpen ? "text-primary" : "text-white"} group-hover:text-gold transition-colors`} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                pathname === link.href
                  ? "text-gold"
                  : !isTransparent
                  ? "text-slate-600 hover:text-primary"
                  : "text-white/90"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+911234567890"
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2 bg-white/10 backdrop-blur rounded-md"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className={!isTransparent ? "text-primary" : "text-white"} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-8 py-4 text-sm font-medium border-b border-slate-100 ${
                    pathname === link.href ? "text-gold bg-slate-50" : "text-slate-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="p-8">
                <a
                  href="tel:+911234567890"
                  className="flex items-center justify-center gap-2 bg-primary text-white w-full py-3 rounded text-sm font-medium"
                >
                  <Phone size={16} />
                  <span>Call Us Today</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
