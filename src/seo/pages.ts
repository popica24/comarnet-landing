// Single source of truth for per-page SEO. Used by `useSEO` in the browser and by
// the build-time prerender (scripts/prerender.mjs), which also builds sitemap.xml from it.

export const SITE_URL = "https://comarnet.ro";
export const SITE_NAME = "Comar Net";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export interface PageSEO {
  path: string;
  /** Full `<title>`, brand included. Keep it under ~60 characters. */
  title: string;
  /** Keep it under ~155 characters, or Google truncates it. */
  description: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  /** Sitemap priority, 0–1. Pages without it are left out of the sitemap. */
  priority?: number;
  schema?: Record<string, unknown>[];
}

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Județul Argeș" },
  { "@type": "AdministrativeArea", name: "Județul Teleorman" },
];

const phone = import.meta.env.VITE_PHONE_NUMBER as string | undefined;

const organization = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  legalName: "Comar Net Building SRL",
  alternateName: ["Comarnet", "Comar Net Pitești"],
  description:
    "Distribuție de produse alimentare și non-alimentare, logistică și depozitare pentru profesioniști din Argeș și Teleorman. Partener afiliat Pall-Ex România.",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  ...(phone ? { telephone: phone } : {}),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pitești",
    addressRegion: "Argeș",
    addressCountry: "RO",
  },
  areaServed: AREA_SERVED,
  knowsLanguage: "ro",
};

const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ name: "Acasă", path: "/" }, ...items].map(
    (item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })
  ),
});

const service = (
  name: string,
  serviceType: string,
  path: string,
  areaServed: unknown = AREA_SERVED
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  serviceType,
  url: `${SITE_URL}${path}`,
  provider: { "@id": ORGANIZATION_ID },
  areaServed,
});

export const SEO = {
  home: {
    path: "/",
    title: "Comar Net – Distribuție alimentară în Argeș și Teleorman",
    description:
      "Distribuție de produse alimentare și non-alimentare pentru retail și HoReCa în Argeș și Teleorman. Depozit de 5.000 m² în Pitești, peste 18 ani de experiență.",
    keywords:
      "comar net, comarnet, distribuitor produse alimentare pitesti, distributie alimentara arges, distributie teleorman, depozitare pitesti, pallex pitesti",
    priority: 1,
    schema: [
      organization,
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        inLanguage: "ro-RO",
        publisher: { "@id": ORGANIZATION_ID },
      },
    ],
  },
  services: {
    path: "/servicii",
    title: "Servicii de distribuție, logistică și depozitare | Comar Net",
    description:
      "Distribuție, logistică și depozitare din Pitești pentru afaceri din Argeș și Teleorman: livrări prompte, depozit de 5.000 m² și transport paletizat Pall-Ex.",
    keywords:
      "servicii distributie pitesti, logistica arges, depozitare pitesti, transport marfa arges",
    priority: 0.9,
    schema: [breadcrumb([{ name: "Servicii", path: "/servicii" }])],
  },
  distribution: {
    path: "/servicii/distributie",
    title: "Distribuție produse alimentare Argeș și Teleorman | Comar Net",
    description:
      "Distribuitor de produse alimentare și non-alimentare pentru retail și HoReCa în Argeș și Teleorman. Peste 4.300 de clienți, livrări prompte și stocuri constante.",
    keywords:
      "distributie produse alimentare, distribuitor alimentar pitesti, distributie arges, distributie teleorman, distribuitor horeca",
    priority: 0.9,
    schema: [
      service(
        "Distribuție produse alimentare și non-alimentare",
        "Distribuție alimentară",
        "/servicii/distributie"
      ),
      breadcrumb([
        { name: "Servicii", path: "/servicii" },
        { name: "Distribuție", path: "/servicii/distributie" },
      ]),
    ],
  },
  logistic: {
    path: "/servicii/logistica",
    title: "Logistică și transport marfă în Pitești | Comar Net",
    description:
      "Servicii de logistică din Pitești: transport marfă, gestionarea comenzilor și livrări la timp în Argeș și Teleorman, plus transport paletizat în toată țara.",
    keywords:
      "logistica pitesti, transport marfa pitesti, servicii logistice arges, firma logistica teleorman",
    priority: 0.9,
    schema: [
      service(
        "Logistică și transport marfă",
        "Logistică",
        "/servicii/logistica"
      ),
      breadcrumb([
        { name: "Servicii", path: "/servicii" },
        { name: "Logistică", path: "/servicii/logistica" },
      ]),
    ],
  },
  storage: {
    path: "/servicii/depozitare",
    title: "Depozitare marfă în Pitești – depozit de 5.000 m² | Comar Net",
    description:
      "Depozit de peste 5.000 m² în Pitești, pregătit pentru orice tip de marfă. Spațiu generos, siguranță și servicii de depozitare adaptate afacerii tale.",
    keywords:
      "depozitare pitesti, depozit marfa pitesti, spatiu depozitare arges, inchiriere spatiu depozitare",
    priority: 0.9,
    schema: [
      service("Depozitare marfă", "Depozitare", "/servicii/depozitare"),
      breadcrumb([
        { name: "Servicii", path: "/servicii" },
        { name: "Depozitare", path: "/servicii/depozitare" },
      ]),
    ],
  },
  pallex: {
    path: "/pallex",
    title: "Pall-Ex Pitești – transport paletizat din Argeș | Comar Net",
    description:
      "Comar Net este partener afiliat Pall-Ex România: preluăm și livrăm mărfuri paletizate din județul Argeș către orice destinație din țară, rapid și sigur.",
    keywords:
      "pallex pitesti, pall-ex arges, transport paletizat pitesti, transport paleti arges, curierat paleti",
    priority: 0.8,
    schema: [
      service(
        "Transport paletizat Pall-Ex",
        "Transport marfă paletizată",
        "/pallex",
        { "@type": "Country", name: "România" }
      ),
      breadcrumb([{ name: "Pall-Ex", path: "/pallex" }]),
    ],
  },
  sustainability: {
    path: "/sustenabilitate",
    title: "Combaterea risipei alimentare | Comar Net",
    description:
      "Angajamentul Comar Net pentru un viitor sustenabil: monitorizare digitală a termenelor de valabilitate, redistribuire către ONG-uri și depozitare în condiții optime.",
    keywords:
      "risipa alimentara, sustenabilitate, redistribuire alimente, ONG-uri, lant de aprovizionare responsabil",
    priority: 0.5,
    schema: [breadcrumb([{ name: "Sustenabilitate", path: "/sustenabilitate" }])],
  },
  notFound: {
    path: "/404",
    title: "Pagina nu a fost găsită | Comar Net",
    description: "Pagina căutată nu există sau a fost mutată.",
    noindex: true,
  },
} satisfies Record<string, PageSEO>;

export const SITEMAP_PAGES: PageSEO[] = Object.values(SEO).filter(
  (page: PageSEO) => page.priority !== undefined && !page.noindex
);
