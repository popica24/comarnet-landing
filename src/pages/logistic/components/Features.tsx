import { Card } from "@/components/ui/card";
import {
  BadgeCheck,
  LineChart,
  Network,
  ShieldCheck,
  Timer,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Livrare Rapidă",
    description:
      "Transport eficient și rute optimizate pentru ca produsele tale să ajungă la timp, de fiecare dată.",
  },
  {
    icon: ShieldCheck,
    title: "Siguranță Garantată",
    description:
      "Manipulare responsabilă și sisteme sigure pentru protejarea mărfurilor pe tot parcursul livrării.",
  },
  {
    icon: Network,
    title: "Acoperire Extinsă",
    description:
      "Rețea operațională care îți permite să livrezi rapid oriunde ai nevoie.",
  },
  {
    icon: LineChart,
    title: "Tracking & Analize",
    description:
      "Monitorizează în timp real și obține date esențiale pentru optimizarea distribuției.",
  },
  {
    icon: Timer,
    title: "Eficiență Operațională",
    description:
      "Procese automatizate care reduc timpii morți și cresc productivitatea.",
  },
  {
    icon: BadgeCheck,
    title: "Servicii Profesionale",
    description:
      "Standard ridicat de calitate, oferit de o echipă cu experiență în logistică și distribuție.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Tot ce ai nevoie pentru distribuție
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluții puternice create pentru a-ți duce produsele mai rapid și mai
            eficient acolo unde contează
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              data-aos="flip-right"
              data-aos-delay={150 * index}
              key={index}
              className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
