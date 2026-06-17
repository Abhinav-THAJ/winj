"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Engineering Excellence",
  "Architectural Expertise",
  "Structural Safety",
  "Quality Construction",
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about.jpg"
                alt="Modern Luxury Villa"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 border-4 border-white/20 m-6 rounded-xl z-10 pointer-events-none" />
              
              {/* Badge */}
              <div className="absolute bottom-8 right-8 bg-white text-primary p-6 rounded-xl shadow-xl z-20 max-w-xs">
                <p className="font-playfair font-bold text-4xl text-gold mb-1">30+</p>
                <p className="font-sans font-medium text-sm leading-tight">Years of building excellence in Kerala</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">About Win-J</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
              We Don&apos;t Just Build Houses, We Craft <span className="italic text-gold">Legacies</span>.
            </h2>
            
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Established three decades ago in the heart of Kannur, WIN-J Building Solutions LLP has grown into one of Kerala&apos;s most trusted names in luxury architecture and construction.
            </p>
            <p className="text-slate-600 mb-10 leading-relaxed">
              Our holistic approach combines structural safety, innovative 3D design, and premium materials to deliver homes that stand the test of time. We believe every project is a masterpiece waiting to be brought to life.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                  <CheckCircle2 className="text-gold shrink-0" size={24} />
                  <span className="font-medium text-primary">{feature}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-primary hover:bg-slate-800 text-white font-semibold rounded-full transition-all transform hover:-translate-y-1">
              Read Our Full Story
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
