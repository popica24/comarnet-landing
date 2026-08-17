//Boromir, Maspex, Apemin Tusnad, Perla Harghitei, Zarea,Alexandrion,Cotnari,Budureasca,Bergenbier, Purcari,Deroni, Djili, Jidvei, Kamis,  Prodvinalco, Vinexport, Zizin
import boromir from "@/assets/boromir.png";
import maspex from "@/assets/maspex.png";
import apeminTusnad from "@/assets/tusnad.png";
import perlaHarghitei from "@/assets/perla-harghitei.png";
import zarea from "@/assets/zarea.png";
import alexandrion from "@/assets/alexandrion.svg";
import cotnari from "@/assets/cotnari.png";
import budureasca from "@/assets/budureasca.png";
import bergenbier from "@/assets/bergenbier.png";
import purcari from "@/assets/purcari.png";
import deroni from "@/assets/deroni.png";
import djili from "@/assets/djili.png";
import jidvei from "@/assets/jidvei.png";
import kamis from "@/assets/kamis.png";
import prodvinalco from "@/assets/prodvinalco.png";
import vinexport from "@/assets/vinexport.jpeg";
import zizin from "@/assets/zizin.png";

const PartnerBrands = () => {
  const partners = [
    { name: "Boromir", logo: boromir },
    { name: "Maspex", logo: maspex },
    { name: "Apemin Tușnad", logo: apeminTusnad },
    { name: "Perla Harghitei", logo: perlaHarghitei },
    { name: "Zarea", logo: zarea },
    { name: "Alexandrion", logo: alexandrion },
    { name: "Cotnari", logo: cotnari },
    { name: "Budureasca", logo: budureasca },
    { name: "Bergenbier", logo: bergenbier },
    { name: "Purcari", logo: purcari },
    { name: "Deroni", logo: deroni },
    { name: "Djili", logo: djili },
    { name: "Jidvei", logo: jidvei },
    { name: "Kamis", logo: kamis },
    { name: "Prodvinalco", logo: prodvinalco },
    { name: "Vinexport", logo: vinexport },
    { name: "Zizin", logo: zizin },
  ];

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center">
          <span
            className="text-primary text-center font-medium mb-4 block"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="600"
          >
            PARTENERII NOȘTRI
          </span>
          <h1
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            Colaborăm cu cei mai buni parteneri
          </h1>
        </div>

        <div className="w-full py-12 bg-gray-50 rounded-lg">
          <div className="max-w-full mx-auto px-4">
            {/* Container pentru carousel */}
            <div className="relative overflow-hidden">
              {/* Gradient fade la margini */}
              <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

              {/* Carousel cu animație infinită */}
              <div className="flex animate-scroll">
                {/* Repetă logo-urile de 3 ori pentru smooth loop */}
                {[...partners, ...partners, ...partners].map(
                  (partner, index) => (
                    <div
                      key={index}
                      className="shrink-0 mx-8 flex items-center justify-center"
                      style={{ width: "150px" }}
                    >
                      <img
                        src={partner.logo}
                        alt={`Logo ${partner.name} - partener Comar Net`}
                        loading="lazy"
                        decoding="async"
                        className="max-h-16 w-auto object-contain transition-all duration-300"
                      />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-150px * ${partners.length} - ${
            partners.length * 64
          }px));
              }
            }

            .animate-scroll {
              animation: scroll 30s linear infinite;
              will-change: transform;
            }

            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default PartnerBrands;
