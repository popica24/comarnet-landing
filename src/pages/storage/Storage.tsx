import { useSEO } from "@/hooks/useSEO";
import Hero from "./components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, serviceSchema } from "@/lib/schema";

const PATH = "/servicii/depozitare";
const DESCRIPTION =
  "Spații moderne de depozitare cu control de temperatură, sistem de management WMS, securitate 24/7 și acces rapid la stocuri pentru afacerea ta.";

const breadcrumbs = [
  { name: "Servicii", path: "/servicii" },
  { name: "Depozitare", path: PATH },
];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  serviceSchema({
    name: "Servicii de depozitare și warehousing",
    description: DESCRIPTION,
    path: PATH,
    serviceType: "Depozitare și warehousing",
  }),
];

const Storage = () => {
  useSEO({
    title: "Servicii de Depozitare și Warehousing",
    description: DESCRIPTION,
    keywords:
      "depozitare produse, warehousing România, spații depozitare, gestiune stocuri",
    canonical: PATH,
    schema,
  });
  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
    </div>
  );
};

export default Storage;
