// Single source of truth for per-page SEO. Used by `useSEO` in the browser and by
// the build-time prerender (scripts/prerender.mjs), which also builds sitemap.xml
// from it. Company facts come from src/config/company.ts, JSON-LD builders from
// src/lib/schema.ts.
import { company, formattedAddress } from "@/config/company";
import {
  contactPageSchema,
  faqSchema,
  serviceSchema,
  webPageSchema,
  type Crumb,
  type Schema,
} from "@/lib/schema";
import { faqItems } from "@/pages/homepage/components/faqItems";

export { SITE_URL } from "@/config/company";

export interface PageSEO {
  path: string;
  /** Full `<title>`, brand included. Keep it under ~60 characters. */
  title: string;
  /** Keep it under ~155 characters, or Google truncates it. */
  description: string;
  keywords?: string;
  ogImage?: string;
  /** Keeps the page out of the index and drops the site-wide JSON-LD. */
  noindex?: boolean;
  /** Sitemap priority, 0–1. Pages without it are left out of the sitemap. */
  priority?: number;
  /**
   * Rendered by `<Breadcrumbs>` and emitted as BreadcrumbList JSON-LD, so the
   * two cannot drift. "Acasă" is implicit in both.
   */
  breadcrumbs?: Crumb[];
  /** Page-specific JSON-LD; Organization/WebSite/LocalBusiness are added for every indexable page. */
  schema?: Schema[];
}

const ARGES_TELEORMAN = [
  { "@type": "AdministrativeArea", name: "Județul Argeș" },
  { "@type": "AdministrativeArea", name: "Județul Teleorman" },
];

const brand = (title: string) => `${title} | ${company.name}`;

// Generic so each entry keeps its literal shape (e.g. `breadcrumbs` stays
// non-optional for pages that define it).
const page = <T extends PageSEO>(seo: T) => seo;

/** Service page whose Service node reuses the page's own path and description. */
const servicePage = <T extends PageSEO>(
  seo: T,
  service: { name: string; serviceType: string; areaServed?: Schema | Schema[] }
) => ({
  ...seo,
  schema: [
    serviceSchema({
      ...service,
      description: seo.description,
      path: seo.path,
    }),
  ],
});

/** Informational page declared as a plain WebPage. */
const infoPage = <T extends PageSEO & { name: string }>({
  name,
  ...seo
}: T) => ({
  ...seo,
  schema: [webPageSchema({ name, description: seo.description, path: seo.path })],
});

export const SEO = {
  home: page({
    path: "/",
    title: `${company.name} – Distribuție alimentară în Argeș și Teleorman`,
    description:
      "Distribuție de produse alimentare și non-alimentare pentru retail și HoReCa în Argeș și Teleorman. Depozit de 5.000 m² în Pitești, peste 18 ani de experiență.",
    keywords:
      "comar net, comarnet, distribuitor produse alimentare pitesti, distributie alimentara arges, distributie teleorman, depozitare pitesti, pallex pitesti",
    priority: 1,
    schema: [faqSchema(faqItems)],
  }),
  services: infoPage({
    path: "/servicii",
    name: "Servicii de distribuție, logistică și depozitare",
    title: brand("Servicii de distribuție, logistică și depozitare"),
    description:
      "Distribuție, logistică și depozitare din Pitești pentru afaceri din Argeș și Teleorman: livrări prompte, depozit de 5.000 m² și transport paletizat Pall-Ex.",
    keywords:
      "servicii distributie pitesti, logistica arges, depozitare pitesti, transport marfa arges",
    priority: 0.9,
    breadcrumbs: [{ name: "Servicii", path: "/servicii" }],
  }),
  distribution: servicePage(
    {
      path: "/servicii/distributie",
      title: brand("Distribuție produse alimentare Argeș și Teleorman"),
      description:
        "Distribuitor de produse alimentare și non-alimentare pentru retail și HoReCa în Argeș și Teleorman. Peste 4.300 de clienți, livrări prompte și stocuri constante.",
      keywords:
        "distributie produse alimentare, distribuitor alimentar pitesti, distributie arges, distributie teleorman, distribuitor horeca",
      priority: 0.9,
      breadcrumbs: [
        { name: "Servicii", path: "/servicii" },
        { name: "Distribuție", path: "/servicii/distributie" },
      ],
    },
    {
      name: "Distribuție produse alimentare și non-alimentare",
      serviceType: "Distribuție produse alimentare",
      areaServed: ARGES_TELEORMAN,
    }
  ),
  logistic: servicePage(
    {
      path: "/servicii/logistica",
      title: brand("Logistică și transport marfă în Pitești"),
      description:
        "Servicii de logistică din Pitești: transport marfă, gestionarea comenzilor și livrări la timp în Argeș și Teleorman, plus transport paletizat în toată țara.",
      keywords:
        "logistica pitesti, transport marfa pitesti, servicii logistice arges, firma logistica teleorman",
      priority: 0.9,
      breadcrumbs: [
        { name: "Servicii", path: "/servicii" },
        { name: "Logistică", path: "/servicii/logistica" },
      ],
    },
    {
      name: "Servicii de logistică și transport marfă",
      serviceType: "Logistică și transport marfă",
    }
  ),
  storage: servicePage(
    {
      path: "/servicii/depozitare",
      title: brand("Depozitare marfă în Pitești – depozit de 5.000 m²"),
      description:
        "Depozit de peste 5.000 m² în Pitești, pregătit pentru orice tip de marfă. Spațiu generos, siguranță și servicii de depozitare adaptate afacerii tale.",
      keywords:
        "depozitare pitesti, depozit marfa pitesti, spatiu depozitare arges, inchiriere spatiu depozitare",
      priority: 0.9,
      breadcrumbs: [
        { name: "Servicii", path: "/servicii" },
        { name: "Depozitare", path: "/servicii/depozitare" },
      ],
    },
    {
      name: "Servicii de depozitare și warehousing",
      serviceType: "Depozitare și warehousing",
    }
  ),
  pallex: servicePage(
    {
      path: "/pallex",
      title: brand("Pall-Ex Pitești – transport paletizat din Argeș"),
      description:
        "Comar Net este partener afiliat Pall-Ex România: preluăm și livrăm mărfuri paletizate din județul Argeș către orice destinație din țară, rapid și sigur.",
      keywords:
        "pallex pitesti, pall-ex arges, transport paletizat pitesti, transport paleti arges, curierat paleti",
      priority: 0.8,
      breadcrumbs: [{ name: "Pall-Ex", path: "/pallex" }],
    },
    {
      name: "Transport paletizat prin rețeaua Pall-Ex",
      serviceType: "Transport marfă paletizată",
    }
  ),
  sustainability: infoPage({
    path: "/sustenabilitate",
    name: "Combaterea risipei alimentare",
    title: brand("Combaterea risipei alimentare"),
    description:
      "Angajamentul Comar Net pentru un viitor sustenabil: monitorizare digitală a termenelor de valabilitate, redistribuire către ONG-uri și depozitare în condiții optime.",
    keywords:
      "risipa alimentara, sustenabilitate, redistribuire alimente, ONG-uri, lant de aprovizionare responsabil",
    priority: 0.5,
    breadcrumbs: [{ name: "Sustenabilitate", path: "/sustenabilitate" }],
  }),
  contact: page({
    path: "/contact",
    title: brand("Contact – sediu și depozit în Pitești"),
    description: `Contactați Comar Net: ${formattedAddress}. Telefon ${company.phoneDisplay}, email ${company.email}. Program ${company.openingHoursDisplay}.`,
    keywords:
      "contact Comar Net, adresa Comar Net Pitesti, telefon distributie Pitesti, depozit Arges",
    priority: 0.8,
    breadcrumbs: [{ name: "Contact", path: "/contact" }],
    schema: [contactPageSchema],
  }),
  terms: infoPage({
    path: "/termeni",
    name: "Termeni și Condiții",
    title: brand("Termeni și Condiții"),
    description: `Termenii și condițiile de utilizare a site-ului ${company.legalName}: drepturi de proprietate intelectuală, condiții de utilizare, limitarea răspunderii și legea aplicabilă.`,
    keywords: "termeni si conditii, conditii utilizare, Comar Net",
    priority: 0.3,
    breadcrumbs: [{ name: "Termeni și Condiții", path: "/termeni" }],
  }),
  privacy: infoPage({
    path: "/confidentialitate",
    name: "Politica de Confidențialitate",
    title: brand("Politica de Confidențialitate"),
    description: `Politica de confidențialitate ${company.legalName}: ce date cu caracter personal prelucrăm, în ce scop, cât timp le păstrăm și care sunt drepturile dumneavoastră conform GDPR.`,
    keywords:
      "politica confidentialitate, GDPR, protectia datelor, date personale, Comar Net",
    priority: 0.3,
    breadcrumbs: [
      { name: "Politica de Confidențialitate", path: "/confidentialitate" },
    ],
  }),
  cookies: infoPage({
    path: "/cookies",
    name: "Politica de Cookies",
    title: brand("Politica de Cookies"),
    description: `Ce sunt cookie-urile, ce tipuri folosim pe site-ul ${company.name} și cum le puteți gestiona sau dezactiva din browserul dumneavoastră.`,
    keywords: "politica cookies, cookie-uri, setari cookies, Comar Net",
    priority: 0.3,
    breadcrumbs: [{ name: "Politica de Cookies", path: "/cookies" }],
  }),
  anpc: infoPage({
    path: "/anpc",
    name: "ANPC și Soluționarea Litigiilor",
    title: brand("ANPC și Soluționarea Litigiilor"),
    description: `Informații ANPC pentru clienții ${company.legalName}: cum ne transmiteți o reclamație și cum accesați platformele SAL și SOL pentru soluționarea alternativă a litigiilor.`,
    keywords: "ANPC, SAL, SOL, protectia consumatorilor, reclamatii",
    priority: 0.3,
    breadcrumbs: [{ name: "ANPC", path: "/anpc" }],
  }),
  notFound: page({
    path: "/404",
    title: brand("Pagina nu a fost găsită (404)"),
    description:
      "Pagina căutată nu există sau a fost mutată. Reveniți la pagina principală Comar Net sau consultați serviciile noastre de distribuție, logistică și depozitare.",
    noindex: true,
  }),
} satisfies Record<string, PageSEO>;

export const SITEMAP_PAGES: PageSEO[] = Object.values(SEO).filter(
  (page: PageSEO) => page.priority !== undefined && !page.noindex
);
