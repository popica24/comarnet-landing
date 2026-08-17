import { useSEO } from "@/hooks/useSEO";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Practices from "./components/Practices";

const Sustainability = () => {
  useSEO({
    title: "Combaterea Risipei Alimentare",
    description:
      "Angajamentul Comar Net pentru un viitor sustenabil: monitorizare digitală a termenelor de valabilitate, redistribuire către ONG-uri și depozitare în condiții optime.",
    keywords:
      "risipa alimentara, sustenabilitate, redistribuire alimente, ONG-uri, lant de aprovizionare responsabil",
  });

  return (
    <div className="min-h-screen">
      <Hero />
      <Practices />
      <CTA />
    </div>
  );
};

export default Sustainability;
