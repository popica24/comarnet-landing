import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-card px-6 py-16 text-center shadow-sm sm:px-12">
          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ai o organizație care poate prelua alimente?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Lucrăm cu ONG-uri și parteneri caritabili care distribuie produse cu
            termen scurt de valabilitate. Scrie-ne și stabilim împreună un flux
            de redistribuire.
          </p>

          <Button
            size="lg"
            variant="gold"
            className="group rounded-full"
            onClick={() => {
              window.location.href = "/#contact";
            }}
          >
            Contactează-ne
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
