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
    title: "Livrare Rapida",
    description:
      "Transport eficient si rute optimizate pentru ca produsele tale sa ajunga la timp, de fiecare data.",
  },
  {
    icon: ShieldCheck,
    title: "Siguranta Garantata",
    description:
      "Manipulare responsabila si sisteme sigure pentru protejarea marfurilor pe tot parcursul livrarii.",
  },
  {
    icon: Network,
    title: "Acoperire Extinsa",
    description:
      "Rețea operationala care iti permite sa livrezi rapid oriunde ai nevoie.",
  },
  {
    icon: LineChart,
    title: "Tracking & Analize",
    description:
      "Monitorizeaza in timp real si obtine date esentiale pentru optimizarea distributiei.",
  },
  {
    icon: Timer,
    title: "Eficienta Operationala",
    description:
      "Procese automatizate care reduc timpii morti si cresc productivitatea.",
  },
  {
    icon: BadgeCheck,
    title: "Servicii Profesionale",
    description:
      "Standard ridicat de calitate, oferit de o echipa cu experienta in logistica si distributie.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Tot ce ai nevoie pentru distributie
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Solutii puternice create pentru a-ti duce produsele mai rapid si mai
            eficient acolo unde conteaza
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
