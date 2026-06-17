"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    text: "WIN-J turned our dream home into a reality. Their attention to detail, adherence to timelines, and exceptional structural quality exceeded all our expectations.",
    image: "/images/gallery1.jpg",
  },
  {
    name: "Priya Sharma",
    role: "Commercial Client",
    text: "We hired them for our office remodeling. The 3D designs were spot on, and the execution was flawless. Highly recommend them for premium construction.",
    image: "/images/gallery2.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full border-[20px] border-white" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full border-[30px] border-white" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Client Stories</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6 leading-tight">
            Hear From Our <span className="italic text-gold">Clients</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-slate-800/50 backdrop-blur p-8 rounded-2xl border border-slate-700 relative"
            >
              <Quote size={40} className="text-gold/20 absolute top-8 right-8" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gold shrink-0">
                  <Image src={t.image} alt={t.name} fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-playfair font-bold text-lg">{t.name}</h4>
                  <p className="text-gold text-sm">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed italic">&quot;{t.text}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
