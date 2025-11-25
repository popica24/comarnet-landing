import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[600px]">
      <div
        className="relative bg-cover bg-center flex items-center justify-center min-h-[300px] md:min-h-0 rounded-xl"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
        <h2 className="relative text-white text-xl md:text-xl lg:text-2xl font-bold tracking-wider z-10 px-4">
          COMAR NET
        </h2>
      </div>

      <div className="bg-background p-6 md:p-8 lg:p-12 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
          COMAR NET <br /> Peste două decenii de experiență în distribuția de
          produse alimentare pentru profesioniști din industrie.
        </h1>
        <p className="text-sm md:text-base text-foreground/80 mb-6 md:mb-8 leading-relaxed">
          Partener afiliat Pall-Ex România din 2025, oferă servicii de preluare
          și distribuire a mârfurilor paletizate din județul Argeș către orice
          destinație din țară.
        </p>
      </div>
    </section>
  );
};

export default Hero;
