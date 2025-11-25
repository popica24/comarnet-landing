import AboutPallex from "./components/AboutPallex";
import Hero from "./components/Hero";
import LogisticsSolutions from "./components/LogisticsSolutions";
import PalletTable from "./components/PallteTable";
import Fleet from "./components/Fleet";
import { useSEO } from "@/hooks/useSEO";

const PallEx = () => {
  useSEO({
    title: "Pallex - Rețea Europeană de Distribuție",
    description:
      "Partener Pallex România - acces la cea mai mare rețea europeană de distribuție paletizată. Transport internațional rapid și eficient pentru afacerea ta.",
    keywords:
      "Pallex România, transport paletizat, distribuție europeană, transport internațional",
  });
  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 min-h-screen">
      <Hero />
      <LogisticsSolutions />
      <PalletTable />
      <Fleet />
      <AboutPallex />
    </main>
  );
};

export default PallEx;
