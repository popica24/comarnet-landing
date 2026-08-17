import { useSEO } from "@/hooks/useSEO";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, serviceSchema } from "@/lib/schema";

const PATH = "/servicii/distributie";
const DESCRIPTION =
  "Distribuție rapidă și eficientă de produse alimentare în toată România. Rețea extinsă de livrare, stocuri optime și servicii dedicate pentru HoReCa și retail.";

const breadcrumbs = [
  { name: "Servicii", path: "/servicii" },
  { name: "Distribuție", path: PATH },
];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  serviceSchema({
    name: "Distribuție produse alimentare și non-alimentare",
    description: DESCRIPTION,
    path: PATH,
    serviceType: "Distribuție produse alimentare",
  }),
];

const Distribution = () => {
  useSEO({
    title: "Servicii de Distribuție Produse Alimentare",
    description: DESCRIPTION,
    keywords:
      "distribuție alimentare, livrare produse, distribuitor național, retail, HoReCa",
    canonical: PATH,
    schema,
  });
  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Distribution;
