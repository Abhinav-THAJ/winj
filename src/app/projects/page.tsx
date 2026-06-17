import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Projects | WIN-J Building Solutions LLP",
  description: "View our portfolio of luxury residential and commercial projects in Kerala.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <div className="bg-primary text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Our Portfolio</h1>
        <p className="text-slate-300 max-w-2xl mx-auto px-4">
          A showcase of our finest architectural and construction achievements.
        </p>
      </div>
      <div className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-2xl mb-8">
           <p className="text-slate-600 text-lg">
             Explore our diverse range of luxury villas, modern homes, and premium commercial spaces. Each project reflects our commitment to structural excellence and aesthetic brilliance.
           </p>
        </div>
      </div>
      <Gallery />
      <CTA />
    </div>
  );
}
