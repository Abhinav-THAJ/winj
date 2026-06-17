"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-primary/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-transparent to-primary/90" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="max-w-4xl text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-white leading-tight mb-6">
              Building Trust Through <span className="text-gold italic">Design & Construction</span> For Over 30 Years
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Creating exceptional homes, commercial spaces, architectural designs and structural solutions across Kerala.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/projects" 
              className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-full transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight size={18} />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              Get Free Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full bg-primary/90 backdrop-blur border-t border-white/10 py-6"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 text-center">
            <div className="py-2 md:py-0">
              <div className="text-3xl font-playfair font-bold text-gold mb-1">30+</div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Years Experience</div>
            </div>
            <div className="py-2 md:py-0">
              <div className="text-3xl font-playfair font-bold text-gold mb-1">500+</div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Projects Completed</div>
            </div>
            <div className="py-2 md:py-0">
              <div className="text-3xl font-playfair font-bold text-gold mb-1">100%</div>
              <div className="text-sm font-medium text-slate-300 uppercase tracking-wider">Commitment</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
