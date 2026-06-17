"use client";

import { motion } from "framer-motion";
import { Building2, Home, PenTool, Ruler } from "lucide-react";

const services = [
  {
    title: "Building Construction",
    description: "End-to-end luxury construction services managed by expert engineers ensuring quality, durability, and on-time delivery.",
    icon: Building2,
    bgImage: "/images/service1.jpg",
  },
  {
    title: "Renovation & Remodeling",
    description: "Transform your existing spaces into modern, elegant homes with our premium renovation and remodeling expertise.",
    icon: Home,
    bgImage: "/images/service2.jpg",
  },
  {
    title: "3D Architecture & Design",
    description: "State-of-the-art 3D visualizations and architectural blueprints that bring your dream project to life before construction begins.",
    icon: PenTool,
    bgImage: "/images/service3.jpg",
  },
  {
    title: "Structural Design & Planning",
    description: "Rigorous structural engineering and planning to ensure maximum safety, stability, and longevity for your buildings.",
    icon: Ruler,
    bgImage: "/images/service4.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Our Expertise</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
            Comprehensive <span className="italic text-gold">Building Solutions</span>
          </h2>
          <p className="text-slate-600 text-lg">
            From initial blueprints to the final handover, we provide a seamless, premium experience across all phases of your project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:-translate-y-2 transition-all duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
