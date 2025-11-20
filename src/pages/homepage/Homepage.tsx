import Coverage from "./components/Coverage";
import HeroSection from "./components/HeroSection";
import Kpis from "./components/Kpis";
import PartnerBrands from "./components/PartnerBrands";
import Roadmap from "./components/Roadmap";

const Homepage = () => {
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
