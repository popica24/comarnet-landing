import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Practices from "./components/Practices";
import Breadcrumbs from "@/components/Breadcrumbs";

const { breadcrumbs } = SEO.sustainability;

const Sustainability = () => {
  useSEO(SEO.sustainability);

  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
      <Practices />
      <CTA />
    </div>
  );
};

export default Sustainability;
