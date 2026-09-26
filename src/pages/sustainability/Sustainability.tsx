import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Practices from "./components/Practices";

const Sustainability = () => {
  useSEO(SEO.sustainability);

  return (
    <div className="min-h-screen">
      <Hero />
      <Practices />
      <CTA />
    </div>
  );
};

export default Sustainability;
