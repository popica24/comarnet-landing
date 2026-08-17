import { useSEO } from "@/hooks/useSEO";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Practices from "./components/Practices";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/sustenabilitate";
const TITLE = "Combaterea Risipei Alimentare";
const DESCRIPTION =
  "Angajamentul Comar Net pentru un viitor sustenabil: monitorizare digitală a termenelor de valabilitate, redistribuire către ONG-uri și depozitare în condiții optime.";

const breadcrumbs = [{ name: "Sustenabilitate", path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Sustainability = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords:
      "risipa alimentara, sustenabilitate, redistribuire alimente, ONG-uri, lant de aprovizionare responsabil",
    canonical: PATH,
    schema,
  });

  return (
    <div className="min-h-screen">
      <Hero />
      <Breadcrumbs items={breadcrumbs} className="py-6" />
      <Practices />
      <CTA />
    </div>
  );
};

export default Sustainability;
