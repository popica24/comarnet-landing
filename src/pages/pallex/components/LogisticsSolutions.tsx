import { Truck } from "lucide-react";

const LogisticsSolutions = () => {
  const solutions = [
    "Livrare garantată în 24 de ore",
    "Livrare la intervale flexibile, plată pe programul de operațiuni al nevoile punctuale ale companiei dumneavoastră",
    "Urmărirea expediției în timp real",
    "Dovada de livrare online",
    "Suntem specializați în paride marfă între 1 – 6 paleți.",
    "Oferim opțiuni pentru paleți full/half/quarter și alte mărime.",
  ];

  return (
    <section className="bg-background py-8 md:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <div className="bg-primary rounded-full p-4 md:p-6 flex-shrink-0">
            <Truck className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Soluții logistice personalizate
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
              Servicii de livrare rapidă pentru paleți
            </p>
            <ul className="space-y-2 md:space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="text-primary mt-1 flex-shrink-0 text-sm md:text-base">
                    ●
                  </span>
                  <span className="text-sm md:text-base text-foreground/80">
                    {solution}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSolutions;
