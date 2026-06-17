"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z.string().min(10, { message: "Phone number is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Submit form logic here
    alert("Thank you for your message! We will get back to you shortly.");
    form.reset();
  }

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Get In Touch</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 leading-tight">
            Let&apos;s Discuss Your <span className="italic text-gold">Project</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-100">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 bg-primary text-white p-10 md:p-12 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl pointer-events-none" />
            
            <h3 className="text-3xl font-playfair font-bold mb-8 relative z-10">Contact Information</h3>
            
            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-slate-300 leading-relaxed">
                    Elamba, Kooranmukku,<br />
                    Uliyil P.O, Kannur,<br />
                    Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Call Us</h4>
                  <p className="text-slate-300">
                    <a href="tel:+911234567890" className="hover:text-gold transition-colors">+91 12345 67890</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Us</h4>
                  <p className="text-slate-300">
                    <a href="mailto:info@winjbuildings.com" className="hover:text-gold transition-colors">info@winjbuildings.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-gold shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-slate-300">
                    Mon - Sat: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3 p-10 md:p-12">
            <h3 className="text-2xl font-playfair font-bold text-primary mb-6">Send Us A Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Your Name</label>
                  <Input placeholder="John Doe" {...form.register("name")} className="bg-white border-slate-200 focus-visible:ring-gold" />
                  {form.formState.errors.name && <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-slate-700 font-medium">Email Address</label>
                  <Input placeholder="john@example.com" {...form.register("email")} className="bg-white border-slate-200 focus-visible:ring-gold" />
                  {form.formState.errors.email && <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 font-medium">Phone Number</label>
                <Input placeholder="+91 98765 43210" {...form.register("phone")} className="bg-white border-slate-200 focus-visible:ring-gold" />
                {form.formState.errors.phone && <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-slate-700 font-medium">Your Message</label>
                <Textarea 
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[150px] bg-white border-slate-200 focus-visible:ring-gold"
                  {...form.register("message")} 
                />
                {form.formState.errors.message && <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>}
              </div>
              <button type="submit" className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-slate-800 text-white font-semibold rounded-md transition-colors shadow-lg shadow-primary/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
