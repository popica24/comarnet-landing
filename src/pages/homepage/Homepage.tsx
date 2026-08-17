import { useSEO } from "@/hooks/useSEO";
import Coverage from "./components/Coverage";
import HeroSection from "./components/HeroSection";
import Kpis from "./components/Kpis";
import PartnerBrands from "./components/PartnerBrands";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import { faqItems } from "./components/faqItems";
import LocationMap from "./components/LocationMap";
import { useEffect } from "react";
import { useLocation } from "react-router";
import { faqSchema } from "@/lib/schema";

// Defined at module scope: `useSEO` depends on this object by reference, so an
// inline literal would re-run the effect on every render.
const schema = [faqSchema(faqItems)];

const Homepage = () => {
  useSEO({
    title: "Distribuție Produse Alimentare și Non-Alimentare",
    description:
      "Comar Net - Lider în distribuția de produse alimentare și non-alimentare pentru profesioniști. Peste 18 ani de experiență, livrări prompte și stocuri consistente.",
    keywords:
      "distributie alimente, pallex, transport marfa, magazin online, depozitare",
    canonical: "/",
    schema,
  });
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 500);
    }
  }, [location]);
  return (
    <>
      <HeroSection />
      <PartnerBrands />
      <Coverage />
      <Roadmap />
      <Kpis />
      <Faq />
      <LocationMap />
      <Contact />
    </>
  );
};

export default Homepage;
