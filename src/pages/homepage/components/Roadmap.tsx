export const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    category: "Înființare",
    date: "2008",
    title: "Înființarea companiei",
    description:
      "Compania a luat startul în 2008 fiind o societate cu capital exclusiv privat, românesc, cu 2 asociați și are ca principal obiect de activitate comercializarea în sistem de distribuție a produselor de larg consum.",
  },
  {
    id: 2,
    category: "Creștere",
    date: "2016",
    title: "Creșterea veniturilor",
    description:
      "Creșterea veniturilor realizate de societatea noastră, de la un an la altul, din vânzarea produselor și serviciilor noastre, se explică în mare parte prin renegocierea contractelor cu furnizorii noștri principali și îmbunătățirea permanentă a portofoliului de clienți.",
  },
  {
    id: 3,
    category: "Dezvoltare",
    date: "2019",
    title: "Investiție strategică în depozitare",
    description:
      "Firma a realizat o investiție strategică prin achiziția unui nou spațiu de depozitare.",
  },
  {
    id: 4,
    category: "Expansiune",
    date: "2021",
    title: "Preluarea unei companii complementare",
    description:
      "Preluarea unei companii complementare a reprezentat un pas esențial în extinderea activității, generând sinergii operaționale și consolidând poziția pe piață.",
  },
  {
    id: 5,
    category: "Modernizare",
    date: "2024",
    title: "Implementarea sistemului informatic nou",
    description:
      "Procesul de modernizare a fost realizat prin implementarea unui nou program informatic și de gestiune, care optimizează fluxurile interne, crește eficiența operațională și asigură o mai bună monitorizare a resurselor.",
  },
  {
    id: 6,
    category: "Extindere",
    date: "2024",
    title: "Deschiderea punctului de lucru în Teleorman",
    description:
      "Extinderea companiei s-a materializat prin deschiderea unui nou punct de lucru în județul Teleorman, consolidând astfel prezența regională și facilitând accesul la noi piețe.",
  },
  {
    id: 7,
    category: "Viitor",
    date: "2025",
    title: "Povestea continuă",
    description:
      "Continuăm să ne dezvoltăm și să ne adaptăm la nevoile pieței, menținându-ne angajamentul față de clienți și parteneri.",
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
