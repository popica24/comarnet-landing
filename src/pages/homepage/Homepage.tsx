import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Coverage from "./components/Coverage";
import HeroSection from "./components/HeroSection";
import Kpis from "./components/Kpis";
import PartnerBrands from "./components/PartnerBrands";
import Roadmap from "./components/Roadmap";
import Contact from "./components/Contact";
import { useEffect } from "react";
import { useLocation } from "react-router";

const Homepage = () => {
  useSEO(SEO.home);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
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
      <Contact />
    </>
  );
};

export default Homepage;
