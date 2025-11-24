export const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    category: "Fundație",
    date: "Mar. 2015",
    title: "Înființarea companiei de distribuție",
    description:
      "Compania a fost înființată cu scopul de a oferi servicii de distribuție de calitate. Am început cu o echipă mică și o viziune clară pentru viitor.",
  },
  {
    id: 2,
    category: "Dezvoltare",
    date: "Mar. 2017",
    title: "Extinderea rețelei de distribuție",
    description:
      "Am extins rețeaua de distribuție la nivel național. Am deschis noi depozite și am îmbunătățit procesele logistice pentru o eficiență mai mare.",
  },
  {
    id: 3,
    category: "Creștere",
    date: "Mar. 2019",
    title: "Diversificarea portofoliului de produse",
    description:
      "Am adăugat noi categorii de produse în portofoliu. Colaborările cu furnizori de încredere ne-au permis să oferim o gamă mai largă de servicii clienților.",
  },
  {
    id: 4,
    category: "Modernizare",
    date: "Mar. 2021",
    title: "Implementarea sistemelor digitale",
    description:
      "Am investit în tehnologie modernă pentru optimizarea proceselor. Sistemele digitale au îmbunătățit viteza de livrare și transparența operațiunilor.",
  },
  {
    id: 5,
    category: "Expansiune",
    date: "Mar. 2022",
    title: "Deschiderea de noi centre logistice",
    description:
      "Am deschis centre logistice în zone strategice. Această expansiune ne-a permis să servim mai eficient clienții din toate regiunile țării.",
  },
  {
    id: 6,
    category: "Inovație",
    date: "Mar. 2023",
    title: "Lansarea serviciilor de livrare rapidă",
    description:
      "Am introdus servicii de livrare în 24 de ore. Flota modernizată și procesele optimizate asigură livrări rapide și sigure pentru toți clienții.",
  },
  {
    id: 7,
    category: "Sustenabilitate",
    date: "Mar. 2024",
    title: "Implementarea soluțiilor ecologice",
    description:
      "Am adoptat practici sustenabile în operațiunile noastre. Vehicule ecologice și ambalaje reciclabile demonstrează angajamentul nostru pentru mediu.",
  },
];

type RoadmapItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
};

type RoadmapItemProps = {
  item: RoadmapItem;
  isLast: boolean;
};

type RoadmapProps = {
  data?: RoadmapItem[];
  title?: string;
  subtitle?: string;
};

const Roadmap: React.FC<RoadmapProps> = ({
  data = roadmapData,
  title = "Principalele etape și realizări care ne-au consolidat poziția pe piață",
  subtitle = "PARCURSUL NOSTRU",
}) => {
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
            {subtitle}
          </span>
          <h1
            className="text-4xl text-gray-900 text-center font-bold"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="600"
          >
            {title}
          </h1>
        </div>
        {data.map((item, index) => (
          <RoadmapItem
            key={item.id}
            item={item}
            isLast={index === data.length - 1}
          />
        ))}
      </div>
    </section>
  );
};

const RoadmapItem: React.FC<RoadmapItemProps> = ({ item, isLast }) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div
        className="font-caveat font-medium text-2xl text-primary mb-1 sm:mb-0"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay={300 * item.id}
        data-aos-easing="ease-in-out"
      >
        {item.category}
      </div>
      <div
        data-aos="fade-in"
        data-aos-duration="800"
        data-aos-delay={300 * item.id}
        data-aos-easing="ease-in-out"
        className={`flex flex-col sm:flex-row items-start mb-1 ${
          !isLast ? "group-last:before:hidden" : ""
        } before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-26 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-26 after:-translate-x-1/2 after:translate-y-1.5`}
      >
        <time
          className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay={300 * item.id}
          data-aos-easing="ease-in-out"
        >
          {item.date}
        </time>
        <div
          className="text-xl font-bold text-slate-900"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay={300 * item.id}
          data-aos-easing="ease-in-out"
        >
          {item.title}
        </div>
      </div>
      <div
        className="text-slate-500"
        data-aos="fade-left"
        data-aos-duration="800"
        data-aos-delay={300 * item.id}
        data-aos-easing="ease-in-out"
      >
        {item.description}
      </div>
    </div>
  );
};

export default Roadmap;
