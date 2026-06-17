"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const images = [
  "/images/project-1.jpg",
  "/images/project-2.jpg",
  "/images/project-3.jpg",
  "/images/project-4.jpg",
  "/images/project-5.jpg",
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold font-semibold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary leading-tight">
              Our Featured <span className="italic text-gold">Projects</span>
            </h2>
          </div>
          <Link href="/projects" className="mt-6 md:mt-0 flex items-center gap-2 text-primary font-medium hover:text-gold transition-colors">
            View All Projects <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative h-[400px] rounded-2xl overflow-hidden group"
          >
            <Image src={images[0]} alt="Featured Project" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-2xl text-white font-playfair font-bold mb-1">The Azure Villa</h3>
              <p className="text-gold">Kochi, Kerala</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative h-[400px] rounded-2xl overflow-hidden group"
          >
            <Image src={images[1]} alt="Featured Project" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="text-2xl text-white font-playfair font-bold mb-1">Emerald Heights</h3>
              <p className="text-gold">Kannur, Kerala</p>
            </div>
          </motion.div>

          {images.slice(2).map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * (idx + 1) }}
              className="relative h-[300px] rounded-2xl overflow-hidden group"
            >
              <Image src={img} alt="Featured Project" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="text-xl text-white font-playfair font-bold mb-1">Modern Project {idx + 1}</h3>
                <p className="text-gold text-sm">Luxury Residence</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
