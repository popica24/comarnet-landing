import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Hero from "./components/Hero";

const Storage = () => {
  useSEO(SEO.storage);
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
};

export default Storage;
