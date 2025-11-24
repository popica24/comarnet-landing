import { useSEO } from "@/hooks/useSEO";
import Coverage from "./components/Coverage";
import HeroSection from "./components/HeroSection";
import Kpis from "./components/Kpis";
import PartnerBrands from "./components/PartnerBrands";
import Roadmap from "./components/Roadmap";

const Homepage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Comar Net | Acasa",
    description:
      "Distribuție produse alimentare și non-alimentare pentru profesioniști",
    url: "https://www.comar-net.ro",
    logo: "https://www.comar-net.ro/logo.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "RO",
      addressRegion: "Argeș",
      addressLocality: "Pitești",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+40-XXX-XXX-XXX",
      contactType: "customer service",
      areaServed: "RO",
      availableLanguage: "Romanian",
    },
  };

  useSEO({
    title: "Distribuție Produse Alimentare și Non-Alimentare",
    description:
      "Comar Net - Lider în distribuția de produse alimentare și non-alimentare pentru profesioniști. Peste 18 ani de experiență, livrări prompte și stocuri consistente.",
    keywords:
      "distribuție alimente, produse alimentare, HoReCa, distribuitor Romania, produse non-alimentare",
    schema,
  });
  return (
    <>
      <HeroSection />
      <PartnerBrands />
      <Coverage />
      <Roadmap />
      <Kpis />
    </>
  );
};

export default Homepage;
