import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";

const { breadcrumbs } = SEO.logistic;

const Logistic = () => {
  useSEO(SEO.logistic);
  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Logistic;
