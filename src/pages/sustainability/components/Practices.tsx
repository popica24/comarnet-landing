import { Card } from "@/components/ui/card";
import { HeartHandshake, MonitorCheck, Thermometer } from "lucide-react";

const practices = [
  {
    icon: MonitorCheck,
    stage: "În stoc",
    title: "Monitorizare digitală",
    description:
      "Folosim un sistem modern pentru a urmări termenele de valabilitate și a reduce suprastocurile.",
  },
  {
    icon: HeartHandshake,
    stage: "Înainte de expirare",
    title: "Redistribuire",
    description:
      "Direcționăm rapid produsele alimentare cu termen scurt de valabilitate către parteneri caritabili și ONG-uri.",
  },
  {
    icon: Thermometer,
    stage: "În tranzit",
    title: "Depozitare sigură",
    description:
      "Asigurăm condiții optime de temperatură și igienă pe tot parcursul transportului pentru a păstra calitatea alimentelor.",
  },
];

const Practices = () => {
  return (
    <section id="masuri" className="bg-muted/40 py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Cum gestionăm stocurile și prevenim risipa
          </h2>
          <p className="text-lg text-muted-foreground">
            Trei măsuri care acoperă drumul alimentelor prin lanțul nostru de
            aprovizionare, de la recepție până la livrare.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice, index) => (
            <Card
              key={practice.title}
              data-aos="fade-up"
              data-aos-delay={150 * index}
              className="border-border/50 border-l-2 border-l-primary/30 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-l-primary hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                <practice.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="mb-3 block text-xs font-semibold tracking-widest text-primary uppercase">
                {practice.stage}
              </span>
              <h3 className="mb-3 text-xl font-semibold">{practice.title}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {practice.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practices;
