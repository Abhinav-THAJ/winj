"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Consultation", desc: "Understanding your vision, requirements, and budget." },
  { id: "02", title: "Planning", desc: "Detailed structural planning and material selection." },
  { id: "03", title: "3D Design", desc: "Visualizing the project with high-end 3D renders." },
  { id: "04", title: "Approval", desc: "Finalizing designs and obtaining necessary permits." },
  { id: "05", title: "Construction", desc: "Executing the build with expert engineering." },
  { id: "06", title: "Handover", desc: "Delivering your dream project on time, beautifully finished." },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">How We Work</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 leading-tight">
            Our Proven <span className="italic text-gold">Construction Process</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px border-t border-dashed border-slate-600 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative z-10 p-6 bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl hover:border-gold transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-slate-900 border-2 border-gold flex items-center justify-center text-2xl font-playfair font-bold text-gold mb-6 mx-auto lg:mx-0">
                {step.id}
              </div>
              <h3 className="text-xl font-bold font-playfair mb-3 text-center lg:text-left text-white">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed text-center lg:text-left">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
