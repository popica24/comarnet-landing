// hooks/useSEO.ts
import { useEffect, useId } from "react";
import { SITE_URL, absoluteUrl } from "@/config/company";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  type Schema,
} from "@/lib/schema";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  /** Absolute URL, or a site-relative path which gets absolutised. */
  ogImage?: string;
  /** Site-relative path. Defaults to the current pathname. */
  canonical?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  /** Page-specific JSON-LD, appended after the site-wide nodes. */
  schema?: Schema | Schema[];
  /** Keeps the page out of the index — used by the 404. */
  noIndex?: boolean;
}

const DEFAULT_OG_IMAGE = absoluteUrl("/og-image.jpg");

/**
 * Marks the nodes this hook owns. The value is per component instance, because
 * `AnimatePresence` keeps the exiting page mounted for 500ms after the incoming
 * page has already injected its own nodes — a shared marker would let the old
 * page's cleanup delete the new page's structured data.
 */
const MANAGED_ATTR = "data-seo-schema";

export const useSEO = ({
  title,
  description,
  keywords = "",
  ogImage = DEFAULT_OG_IMAGE,
  canonical,
  ogType = "website",
  publishedTime,
  modifiedTime,
  schema,
  noIndex = false,
}: SEOProps): void => {
  const instanceId = useId();

  useEffect(() => {
    const siteName = "Comar Net";
    const fullTitle = `${title} | ${siteName}`;

    // Canonicals must be one stable URL per page: no query string, no hash,
    // no trailing slash. `location.href` carries all three and would split
    // ranking signals across near-duplicate URLs.
    const path = canonical ?? window.location.pathname;
    const normalisedPath =
      path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
    const currentUrl = normalisedPath.startsWith("http")
      ? normalisedPath
      : `${SITE_URL}${normalisedPath}`;

    // Relative image paths are silently dropped by social crawlers.
    const absoluteImage = ogImage.startsWith("http")
      ? ogImage
      : absoluteUrl(ogImage);

    document.title = fullTitle;
    document.documentElement.lang = "ro";

    const setMetaTag = (
      property: string,
      content: string,
      isProperty: boolean = false
    ): void => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attr}="${property}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", currentUrl);

    // Basic Meta Tags
    setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);
    setMetaTag("language", "Romanian");
    setMetaTag("geo.region", "RO-AG");
    setMetaTag("geo.placename", "Pitești");

    // Open Graph
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", currentUrl, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", absoluteImage, true);
    setMetaTag("og:image:alt", title, true);
    setMetaTag("og:site_name", siteName, true);
    setMetaTag("og:locale", "ro_RO", true);

    // Article specific tags
    if (publishedTime)
      setMetaTag("article:published_time", publishedTime, true);
    if (modifiedTime) setMetaTag("article:modified_time", modifiedTime, true);

    // Twitter
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:url", currentUrl);
    setMetaTag("twitter:title", fullTitle);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", absoluteImage);
    setMetaTag("twitter:image:alt", title);

    // Robots
    setMetaTag(
      "robots",
      noIndex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMetaTag("googlebot", noIndex ? "noindex, follow" : "index, follow");

    // Language and content type
    setMetaTag("content-language", "ro");

    // JSON-LD. Site-wide identity first, then whatever the page adds.
    // 404s are excluded so we never assert business data on an error page.
    const pageSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const allSchemas: Schema[] = noIndex
      ? pageSchemas
      : [organizationSchema, websiteSchema, localBusinessSchema, ...pageSchemas];

    allSchemas.forEach((entry) => {
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute(MANAGED_ATTR, instanceId);
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    // Always clean up, and only this instance's nodes — the previous
    // implementation ran only when a page happened to pass a schema, and
    // grabbed the first ld+json on the page regardless of who owned it.
    return () => {
      document
        .querySelectorAll(`script[${MANAGED_ATTR}="${instanceId}"]`)
        .forEach((node) => node.remove());
    };
  }, [
    instanceId,
    title,
    description,
    keywords,
    ogImage,
    canonical,
    ogType,
    publishedTime,
    modifiedTime,
    schema,
    noIndex,
  ]);
};
