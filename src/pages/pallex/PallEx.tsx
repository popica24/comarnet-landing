import AboutPallex from "./components/AboutPallex";
import Hero from "./components/Hero";
import LogisticsSolutions from "./components/LogisticsSolutions";
import PalletTable from "./components/PallteTable";
import Fleet from "./components/Fleet";
import { useSEO } from "@/hooks/useSEO";
import { SEO } from "@/seo/pages";
import Breadcrumbs from "@/components/Breadcrumbs";

const { breadcrumbs } = SEO.pallex;

const PallEx = () => {
  useSEO(SEO.pallex);
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen">
      <Breadcrumbs items={breadcrumbs} className="!px-0 mb-6" />
      <Hero />
      <LogisticsSolutions />
      <PalletTable />
      <Fleet />
      <AboutPallex />
    </main>
  );
};

export default PallEx;
