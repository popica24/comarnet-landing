import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";

const Logistic = () => {
  useSEO(SEO.logistic);
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Logistic;
