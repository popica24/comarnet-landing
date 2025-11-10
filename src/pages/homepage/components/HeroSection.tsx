import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/hero-section-header.avif";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const HeroSection = () => {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Distribuție produse alimentare Comar Net"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/70 md:from-hero-overlay/90 md:via-hero-overlay/70 md:to-hero-overlay/60" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <Carousel
            orientation="vertical"
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-[400px] md:h-[800px]">
              <CarouselItem className="h-full">
                {/* Badge */}
                <div className="inline-block mb-4 md:mb-6 mt-2">
                  <span className="px-4 py-2 md:px-6 border-2 border-primary-foreground rounded-full text-xs md:text-sm font-semibold text-primary-foreground tracking-wider backdrop-blur-sm">
                    EXCELENȚĂ ÎN DISTRIBUȚIE
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
                  Partenerul Dumneavoastră de Încredere
                </h1>

                {/* Divider Line */}
                <div className="w-20 md:w-32 h-1 bg-gold mb-6 md:mb-8" />

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 md:mb-10 leading-relaxed max-w-2xl">
                  Peste două decenii de experiență în distribuția de produse
                  alimentare de calitate superioară pentru profesioniști din
                  industrie.
                </p>

                {/* CTA Button */}
                <div className="mb-2">
                  <Button
                    variant="outlineLight"
                    size="lg"
                    className="gap-2 rounded-full md:text-base"
                  >
                    Deveniți Partener
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </div>
              </CarouselItem>

              <CarouselItem className="h-full">
                {/* Badge */}
                <div className="inline-block mb-4 md:mb-6 mt-2">
                  <span className="px-4 py-2 md:px-6 border-2 border-primary-foreground rounded-full text-xs md:text-sm font-semibold text-primary-foreground tracking-wider backdrop-blur-sm">
                    CALITATE GARANTATĂ
                  </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
                  Soluții Complete
                  <br />
                  Pentru Afacerea Ta
                </h1>

                {/* Divider Line */}
                <div className="w-20 md:w-32 h-1 bg-gold mb-6 md:mb-8" />

                {/* Subheading */}
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 md:mb-10 leading-relaxed max-w-2xl">
                  Livrări prompte, stocuri consistente și suport dedicat pentru
                  succesul afacerii dumneavoastră în industria HoReCa.
                </p>

                {/* CTA Button */}
                <Button
                  variant="outlineLight"
                  size="lg"
                  className="gap-2 rounded-full md:text-base mb-4"
                >
                  Deveniți Partener
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
