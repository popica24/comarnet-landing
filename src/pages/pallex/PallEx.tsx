import AboutPallex from "./components/AboutPallex";
import Hero from "./components/Hero";
import LogisticsSolutions from "./components/LogisticsSolutions";
import PalletTable from "./components/PallteTable";
import Fleet from "./components/Fleet";

const PallEx = () => {
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
