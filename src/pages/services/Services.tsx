import bgLogistic from "@/assets/logistics.jpg";
import bgDistribution from "@/assets/distribution.avif";
import bgStoring from "@/assets/storing.avif";
import { Link } from "react-router";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { pageBreadcrumbs, webPageSchema } from "@/lib/schema";

const PATH = "/servicii";
const TITLE = "Servicii de Distribuție, Logistică și Depozitare";
const DESCRIPTION =
  "Descoperă gama completă de servicii Comar Net: distribuție națională, logistică eficientă, depozitare profesională și soluții personalizate pentru afacerea ta.";

const breadcrumbs = [{ name: "Servicii", path: PATH }];

const schema = [
  pageBreadcrumbs(breadcrumbs),
  webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH }),
];

const Services = () => {
  useSEO({
    title: TITLE,
    description: DESCRIPTION,
    keywords:
      "servicii distribuție, logistică România, depozitare produse, transport marfă",
    canonical: PATH,
    schema,
  });
  return (
    <main className="min-h-screen mt-22">
      <Breadcrumbs items={breadcrumbs} className="pt-4 pb-6" />
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10 max-w-3xl">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Serviciile Comar Net
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Acoperim întregul lanț de aprovizionare — de la depozitare și
          gestiunea stocurilor, la logistică și distribuție națională. Alegeți
          serviciul care vă interesează pentru detalii.
        </p>
      </header>
      <Link to={"/servicii/logistica"}>
        <section className="relative h-[33vh] w-full overflow-hidden clip-diagonal-top group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${bgLogistic})` }}
          >
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out group-hover:bg-black/20" />
          </div>
          <div className="relative z-10 flex items-center justify-end h-full px-8 md:px-16 lg:px-24">
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight transition-all duration-300 ease-out group-hover:underline group-hover:-translate-y-2">
              Logistică
            </h2>
          </div>
        </section>
      </Link>
      <Link to={"/servicii/distributie"}>
        <section className="relative h-[33vh] w-full overflow-hidden clip-diagonal-middle group cursor-pointer">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ backgroundImage: `url(${bgDistribution})` }}
          >
            <div className="absolute inset-0 bg-black/40 transition-all duration-500 ease-out group-hover:bg-black/20" />
          </div>
          <div className="relative z-10 flex items-center justify-start h-full px-8 md:px-16 lg:px-24">
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-2xl transition-all duration-300 ease-out group-hover:underline group-hover:-translate-y-2">
              Distribuție
            </h2>
          </div>
        </section>
      </Link>
      <Link to={"/servicii/depozitare"}>
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
      </Link>
    </main>
  );
};

export default Services;
