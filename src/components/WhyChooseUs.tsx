"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  "30 Years Experience",
  "Transparent Pricing",
  "Engineering Expertise",
  "Architectural Excellence",
  "Quality Materials",
  "On-Time Delivery",
  "Dedicated Support",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Why Choose Us</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
              The Standard of <span className="italic text-gold">Excellence</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We stand apart through our unwavering commitment to quality, transparency, and superior craftsmanship. Your vision is our blueprint.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-gold" />
                  <span className="font-medium text-slate-700">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 relative h-[500px]"
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/why.jpg"
                alt="Engineering Expertise"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-xl shadow-xl max-w-[240px]">
              <h3 className="font-playfair text-xl font-bold mb-2">Award Winning</h3>
              <p className="text-sm text-slate-300">Recognized for structural and architectural brilliance.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
