import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Hero from "./components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";

const { breadcrumbs } = SEO.storage;

const Storage = () => {
  useSEO(SEO.storage);
  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
    </div>
  );
};

export default Storage;
