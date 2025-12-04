import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Ești gata să-ți optimizezi distribuția?
          </h2>
          <p className="text-xl text-primary mb-10 max-w-2xl mx-auto leading-relaxed">
            Alătură-te sutelor de afaceri care livrează mai rapid, mai sigur și
            mai eficient datorită serviciilor noastre de distribuție.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="secondary"
              className="shadow-lg group"
              onClick={() => {
                if (window.location.pathname === "/") {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                } else {
                  window.location.href = "/#contact";
                }
              }}
            >
              Cere o ofertă
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
