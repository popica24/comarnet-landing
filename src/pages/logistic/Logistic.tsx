import { useSEO } from "@/hooks/useSEO";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";

const Logistic = () => {
  useSEO({
    title: "Servicii de Logistică și Transport Marfă",
    description:
      "Soluții complete de logistică pentru afacerea ta: transport dedicat, gestionare eficientă a comenzilor, tracking în timp real și livrări la timp.",
    keywords:
      "logistică România, transport marfă, servicii logistice, fleet management",
  });
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Benefits />
      <CTA />
    </div>
  );
};

export default Logistic;
