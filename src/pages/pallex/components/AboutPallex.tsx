import pallexImage from "@/assets/Pall-Ex-Group-Logo.webp";

const AboutPallex = () => {
  return (
    <section className="bg-background pt-8 md:pt-12 lg:pt-16">
      <div className="grid md:grid-cols-2 gap-0">
        <div
          className="relative bg-contain bg-no-repeat bg-center flex items-center justify-center bg-black rounded-xl"
          style={{ backgroundImage: `url(${pallexImage})` }}
        ></div>

        <div className="bg-background p-6 md:p-8 lg:p-12 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
            DESPRE PALL-EX
          </h2>
          <div className="w-12 md:w-16 h-1 bg-primary mb-4 md:mb-6"></div>

          <p className="text-sm md:text-base text-foreground/80 mb-4 md:mb-6 leading-relaxed">
            Rețeaua PALL-EX a fost fondată în 1996 în Marea Britanie și este
            astăzi unul dintre marii lideri logistici din Europa.
          </p>

          <div className="border-t border-border pt-4 md:pt-6">
            <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
              PALL-EX este un standard de excelență în transporturile
              paletizate, datorită modelului sau inovativ de business. Compania
              operează printr-o rețea de transportatori locali pentru a
              distribui eficient mărfurile pe teritoriul statelor europene,
              orunde este nevoi. România este prima țară PALL-EX din Europa de
              Est și suntem bucuroși să putem contribui direct la un sistem de
              distribuție performant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPallex;
