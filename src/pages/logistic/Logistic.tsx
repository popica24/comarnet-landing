import { useSEO } from "@/hooks/useSEO";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, serviceSchema } from "@/lib/schema";

const PATH = "/servicii/logistica";
const DESCRIPTION =
  "Soluții complete de logistică pentru afacerea ta: transport dedicat, gestionare eficientă a comenzilor, tracking în timp real și livrări la timp.";

const breadcrumbs = [
  { name: "Servicii", path: "/servicii" },
  { name: "Logistică", path: PATH },
];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  serviceSchema({
    name: "Servicii de logistică și transport marfă",
    description: DESCRIPTION,
    path: PATH,
    serviceType: "Logistică și transport marfă",
  }),
];

const Logistic = () => {
  useSEO({
    title: "Servicii de Logistică și Transport Marfă",
    description: DESCRIPTION,
    keywords:
      "logistică România, transport marfă, servicii logistice, fleet management",
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

export default Logistic;
