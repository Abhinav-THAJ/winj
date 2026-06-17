import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us | WIN-J Building Solutions LLP",
  description: "Get in touch with WIN-J Building Solutions LLP for a free consultation on your dream project.",
};

export default function ContactPage() {
  return (
    <div className="pt-24">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Contact Us</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          Ready to start your project? We&apos;re here to answer any questions you may have.
        </p>
      </div>
      <ContactSection />
    </div>
  );
}
