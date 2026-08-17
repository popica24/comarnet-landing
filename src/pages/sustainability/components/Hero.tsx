import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background">
      <div className="container mx-auto px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Sprout className="h-4 w-4" />
            <span className="text-sm font-medium">
              Combaterea risipei alimentare
            </span>
          </div>

          <h1
            className="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Misiunea noastră pentru
            <span className="mt-2 block text-primary">un viitor sustenabil</span>
          </h1>

          <p
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            În calitate de distribuitor de top, știm că hrana este o resursă
            prețioasă. Ne-am asumat angajamentul să reducem la zero pierderile
            de alimente din lanțul nostru de aprovizionare. Prin măsuri
            concrete, ne asigurăm că produsele sigure pentru consum ajung la cei
            care au nevoie, în loc să ajungă la gunoi.
          </p>

          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button
              size="lg"
              variant="gold"
              className="group rounded-full"
              onClick={() => {
                document
                  .getElementById("masuri")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Vezi măsurile noastre
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
