import { Truck } from "lucide-react";
import fleetImage from "@/assets/fleet-image.jpg";

const Fleet = () => {
  const fleetDetails = [
    "autoutilitare moderne pentru intervenții rapide;",
    "vehicule comerciale pentru transport echipamente;",
    "dube izolate pentru transport sigur al materialelor sensibile;",
    "mașini de teren pentru acces în zone dificile;",
    "autoturisme de serviciu pentru echipele tehnice;",
    "Flota noastră este mereu extinsă și optimizată pentru a răspunde rapid nevoilor clienților.",
  ];

  return (
    <section className="grid md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[600px]">
      {/* Left side – Text */}
      <div className="bg-background p-6 md:p-8 lg:p-12 flex flex-col justify-center order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
          FLOTA COMAR NET
        </h2>
        <div className="w-12 md:w-16 h-1 bg-primary mb-4 md:mb-6"></div>

        <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6 leading-relaxed">
          Comar Net asigură eficiența serviciilor printr-o flotă modernă,
          adaptată proiectelor industriale, telecom și infrastructură
          energetică.
        </p>

        <p className="text-sm md:text-base text-foreground/80 mb-6 md:mb-8 leading-relaxed">
          Vehiculele sunt echipate pentru transportul în siguranță al
          echipamentelor, materialelor și instrumentelor folosite în lucrările
          noastre. Indiferent de locație, echipele noastre se pot deplasa rapid
          și eficient.
        </p>

        <div className="mb-6 md:mb-8">
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            Toate vehiculele sunt dotate cu sisteme GPS, întreținute periodic și
            beneficiază de asigurările necesare pentru protecția mărfurilor și a
            echipamentelor transportate.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
          <div className="bg-primary rounded-full p-3 md:p-4 flex-shrink-0">
            <Truck className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 md:mb-4">
              Flota Comar Net
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
              Flota noastră cuprinde:
            </p>
            <ul className="space-y-2">
              {fleetDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3">
                  <span className="text-primary mt-1 flex-shrink-0 text-sm md:text-base">
                    ●
                  </span>
                  <span className="text-sm md:text-base text-foreground/80">
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Right side – Image */}
      <div
        className="relative bg-cover bg-center flex items-center justify-center order-1 md:order-2 min-h-[300px] md:min-h-0 rounded-xl"
        style={{ backgroundImage: `url(${fleetImage})` }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <h2 className="relative text-white text-xl md:text-xl lg:text-2xl font-bold tracking-wider z-10 px-4">
          COMAR NET
        </h2>
      </div>
    </section>
  );
};

export default Fleet;
