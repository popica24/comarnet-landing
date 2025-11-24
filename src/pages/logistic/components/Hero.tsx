import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              De încredere pentru <CountUp end={50} suffix="+" duration={2.5} />{" "}
              de afaceri
            </span>
          </div>

          <div data-aos="fade-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Crește-ți afacerea
              <span className="block bg-gradient-primary bg-clip-text text-primary mt-2">
                Cu logistica noastră
              </span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Cu o echipă dedicată și infrastructură modernă, transformăm
            logistica într-un avantaj competitiv. Îți oferim rapiditate,
            siguranță și eficiență, pentru ca tu să te concentrezi pe creșterea
            afacerii.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="shadow-elegant group">
              Cere o ofertă
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Rapiditate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Siguranță</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span>Fiabilitate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
