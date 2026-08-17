/**
 * Single source of truth for company data.
 *
 * Everything SEO-facing reads from here: JSON-LD schemas, canonical URLs, the
 * sitemap, the footer, the contact page and the legal pages. Change a value
 * once and it propagates everywhere.
 */

export const SITE_URL = "https://comarnet.ro";

export const company = {
  /** Public-facing brand name. */
  name: "Comar Net",
  /** Registered legal entity. */
  legalName: "COMAR NET BUILDING SRL",
  cui: "23625416",
  regCom: "J03/730/2008",
  euid: "ROONRC.J3/730/2008",
  /** ISO date the company was registered. */
  foundingDate: "2008-03-31",

  email: "office@comarnet.ro",
  /** E.164 form, for tel: links and schema. */
  phone: "+40741111555",
  /** Human-readable form, for display. */
  phoneDisplay: "0741 111 555",

  address: {
    street: "Str. Constantin Dobrogeanu Gherea 4C, Bl. 2",
    locality: "Pitești",
    region: "Argeș",
    postalCode: "110104",
    country: "RO",
  },

  geo: {
    latitude: 44.885499,
    longitude: 24.837359,
  },

  /** Short link to the verified Google Maps listing. */
  googleMapsShortUrl: "https://maps.app.goo.gl/9J7Zi3HwRC8qpYye6",

  /** Mo–Fr 08:00–16:00, in schema.org openingHours notation. */
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:00",
  },
  openingHoursDisplay: "Luni – Vineri, 08:00 – 16:00",

  social: {
    facebook: "https://www.facebook.com/p/Comar-Net-100079960000510/",
  },
} as const;

/** "Str. …, Pitești, Argeș 110104" — one-line address for display and map queries. */
export const formattedAddress = `${company.address.street}, ${company.address.locality}, ${company.address.region} ${company.address.postalCode}`;

/** Opens the verified Google Maps listing. */
export const googleMapsUrl: string = company.googleMapsShortUrl;

/**
 * Opens Google Maps directions, letting Google pick the user's origin.
 * Destination is given as coordinates so the pin lands on the depot exactly,
 * rather than depending on Google geocoding the street address.
 */
export const googleDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${company.geo.latitude},${company.geo.longitude}`;

/** Keyless embed — no API key needed, and it renders the pin at our coordinates. */
export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${company.geo.latitude},${company.geo.longitude}&z=16&output=embed`;

/** Absolute URL helper — schema and canonicals must never be relative. */
export const absoluteUrl = (path: string): string =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
