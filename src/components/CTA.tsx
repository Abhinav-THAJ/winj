"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/cta.jpg')" }}
      />
      <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
            Ready To Build Your <span className="italic text-gold">Dream Project?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 font-light">
            Contact WIN-J Building Solutions today for a free consultation and let&apos;s start creating something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-xl shadow-gold/20"
            >
              Get Free Estimate <ArrowRight size={18} />
            </Link>
            <a 
              href="tel:+911234567890" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
