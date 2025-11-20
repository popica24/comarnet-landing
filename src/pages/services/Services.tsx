import bgLogistic from "@/assets/logitsics.jpg";
import bgDistribution from "@/assets/distribution.jpg";
import bgStoring from "@/assets/storing.jpg";

const Services = () => {
  return (
    <main className="min-h-screen mt-22">
      <section className="relative h-[33vh] w-full overflow-hidden clip-diagonal-top group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${bgLogistic})` }}
        >
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out group-hover:bg-black/20" />
        </div>
        <div className="relative z-10 flex items-center justify-end h-full px-8 md:px-16 lg:px-24">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-300 ease-out group-hover:underline group-hover:-translate-y-2">
            Logistica
          </h1>
        </div>
      </section>

      <section className="relative h-[33vh] w-full overflow-hidden clip-diagonal-middle group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${bgDistribution})` }}
        >
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out group-hover:bg-black/20" />
        </div>
        <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16 lg:px-24">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-2xl transition-all duration-300 ease-out group-hover:underline group-hover:-translate-y-2">
            Sisteme de distribuire
          </h2>
        </div>
      </section>

      <section className="relative h-[33vh] w-full overflow-hidden clip-diagonal-bottom group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${bgStoring})` }}
        >
          <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out group-hover:bg-black/20" />
        </div>
        <div className="relative z-10 flex items-center justify-end h-full px-8 md:px-16 lg:px-24">
          <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-300 ease-out group-hover:underline group-hover:-translate-y-2">
            Depozitare
          </h2>
        </div>
      </section>
    </main>
  );
};

export default Services;
