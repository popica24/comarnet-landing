import { useSEO } from "@/hooks/useSEO";
import Hero from "./components/Hero";

const Storage = () => {
  useSEO({
    title: "Servicii de Depozitare și Warehousing",
    description:
      "Spații moderne de depozitare cu control de temperatură, sistem de management WMS, securitate 24/7 și acces rapid la stocuri pentru afacerea ta.",
    keywords:
      "depozitare produse, warehousing România, spații depozitare, gestiune stocuri",
  });
  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
};

export default Storage;
