import AboutSection from "@/components/AboutSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "About Us | WIN-J Building Solutions LLP",
  description: "Learn more about WIN-J Building Solutions LLP, a premium architecture, engineering, and construction company with 30+ years of experience.",
};

export default function AboutPage() {
  return (
    <div className="pt-24">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">About WIN-J</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Discover our journey of building trust and excellence across Kerala for over three decades.
        </p>
      </div>
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
