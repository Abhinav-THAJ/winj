import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Services | WIN-J Building Solutions LLP",
  description: "Explore our premium construction, remodeling, 3D architecture, and structural design services.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Services</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Comprehensive building solutions tailored to your unique requirements.
        </p>
      </div>
      <ServicesSection />
      <ProcessSection />
      <CTA />
    </div>
  );
}
