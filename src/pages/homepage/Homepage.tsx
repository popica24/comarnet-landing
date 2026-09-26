import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Coverage from "./components/Coverage";
import HeroSection from "./components/HeroSection";
import Kpis from "./components/Kpis";
import PartnerBrands from "./components/PartnerBrands";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import LocationMap from "./components/LocationMap";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Homepage = () => {
  useSEO(SEO.home);
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
