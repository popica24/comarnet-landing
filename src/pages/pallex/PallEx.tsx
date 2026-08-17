import AboutPallex from "./components/AboutPallex";
import Hero from "./components/Hero";
import LogisticsSolutions from "./components/LogisticsSolutions";
import PalletTable from "./components/PallteTable";
import Fleet from "./components/Fleet";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, serviceSchema } from "@/lib/schema";

const PATH = "/pallex";
const DESCRIPTION =
  "Partener Pallex România - acces la cea mai mare rețea europeană de distribuție paletizată. Transport internațional rapid și eficient pentru afacerea ta.";

const breadcrumbs = [{ name: "Pall-Ex", path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  serviceSchema({
    name: "Transport paletizat prin rețeaua Pall-Ex",
    description: DESCRIPTION,
    path: PATH,
    serviceType: "Transport paletizat internațional",
  }),
];

const PallEx = () => {
  useSEO({
    title: "Pallex - Rețea Europeană de Distribuție",
    description: DESCRIPTION,
    keywords:
      "Pallex România, transport paletizat, distribuție europeană, transport internațional",
    canonical: PATH,
    schema,
  });
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
