import { useSEO } from "@/hooks/useSEO";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";

const Distribution = () => {
  useSEO({
    title: "Servicii de Distribuție Produse Alimentare",
    description:
      "Distribuție rapidă și eficientă de produse alimentare în toată România. Rețea extinsă de livrare, stocuri optime și servicii dedicate pentru HoReCa și retail.",
    keywords:
      "distribuție alimentare, livrare produse, distribuitor național, retail, HoReCa",
  });
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Distribution;
