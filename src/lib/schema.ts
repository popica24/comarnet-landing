/**
 * JSON-LD builders. Every page feeds the result of these into `useSEO`.
 *
 * The Organization and LocalBusiness nodes carry stable `@id`s so other nodes
 * (Service, ContactPage, …) can reference them instead of repeating the data.
 */
import {
  SITE_URL,
  absoluteUrl,
  company,
  formattedAddress,
  googleMapsUrl,
} from "@/config/company";

export type Schema = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const postalAddress: Schema = {
  "@type": "PostalAddress",
  streetAddress: company.address.street,
  addressLocality: company.address.locality,
  addressRegion: company.address.region,
  postalCode: company.address.postalCode,
  addressCountry: company.address.country,
};

/** Site-wide company identity. Injected on every page. */
export const organizationSchema: Schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: company.name,
  legalName: company.legalName,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: absoluteUrl("/logo.png"),
  },
  image: absoluteUrl("/og-image.jpg"),
  description:
    "Distribuție de produse alimentare și non-alimentare, logistică și depozitare pentru profesioniști. Membru al rețelei Pall-Ex.",
  foundingDate: company.foundingDate,
  vatID: `RO${company.cui}`,
  taxID: company.cui,
  identifier: company.regCom,
  address: postalAddress,
  email: company.email,
  telephone: company.phone,
  sameAs: [company.social.facebook],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: company.phone,
    email: company.email,
    contactType: "customer service",
    areaServed: "RO",
    availableLanguage: ["Romanian"],
  },
};

/** Physical depot — drives the local pack, map results and "open now" data. */
export const localBusinessSchema: Schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#localbusiness`,
  name: company.name,
  parentOrganization: { "@id": ORGANIZATION_ID },
  url: SITE_URL,
  image: absoluteUrl("/og-image.jpg"),
  logo: absoluteUrl("/logo.png"),
  telephone: company.phone,
  email: company.email,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.geo.latitude,
    longitude: company.geo.longitude,
  },
  hasMap: googleMapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...company.openingHours.days],
      opens: company.openingHours.opens,
      closes: company.openingHours.closes,
    },
  ],
  areaServed: {
    "@type": "Country",
    name: "România",
  },
  priceRange: "$$",
};

export const websiteSchema: Schema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: company.name,
  inLanguage: "ro-RO",
  publisher: { "@id": ORGANIZATION_ID },
};

export interface Crumb {
  name: string;
  /** Site-relative path. Omit on the final crumb — the current page. */
  path?: string;
}

/**
 * BreadcrumbList. The trailing crumb intentionally carries no `item`, per
 * Google's guidance that the current page should not link to itself.
 */
export const breadcrumbSchema = (crumbs: Crumb[]): Schema => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    ...(crumb.path ? { item: absoluteUrl(crumb.path) } : {}),
  })),
});

/**
 * Same trail the `Breadcrumbs` component renders: "Acasă" is implicit there,
 * so it is prepended here to keep markup and structured data identical.
 */
export const pageBreadcrumbs = (crumbs: Crumb[]): Schema =>
  breadcrumbSchema([{ name: "Acasă", path: "/" }, ...crumbs]);

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqSchema = (items: FaqItem[]): Schema => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
});

export const serviceSchema = ({
  name,
  description,
  path,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}): Schema => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  url: absoluteUrl(path),
  provider: { "@id": ORGANIZATION_ID },
  areaServed: {
    "@type": "Country",
    name: "România",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: absoluteUrl(path),
    servicePhone: company.phone,
  },
});

export const contactPageSchema: Schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: absoluteUrl("/contact"),
  name: `Contact ${company.name}`,
  description: `Date de contact ${company.name}: ${formattedAddress}. Telefon ${company.phoneDisplay}, email ${company.email}.`,
  mainEntity: { "@id": ORGANIZATION_ID },
};

/** Legal/informational pages — thin wrapper so they still declare a type. */
export const webPageSchema = ({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Schema => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name,
  description,
  url: absoluteUrl(path),
  inLanguage: "ro-RO",
  isPartOf: { "@id": WEBSITE_ID },
  publisher: { "@id": ORGANIZATION_ID },
});
