// hooks/useSEO.ts
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
  ogType?: string;
  publishedTime?: string;
  modifiedTime?: string;
  schema?: Record<string, any>;
}

export const useSEO = ({
  title,
  description,
  keywords = "",
  ogImage = "logo.png",
  canonical,
  ogType = "website",
  publishedTime,
  modifiedTime,
  schema,
}: SEOProps): void => {
  useEffect(() => {
    const siteName = "Comar Net";
    const fullTitle = `${title} | ${siteName}`;
    const currentUrl = canonical || window.location.href;

    // Set title
    document.title = fullTitle;

    // Helper function to set or update meta tags
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

    // Set canonical link
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
    setMetaTag("geo.region", "RO");
    setMetaTag("geo.placename", "România");

    // Open Graph
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", currentUrl, true);
    setMetaTag("og:title", fullTitle, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", ogImage, true);
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
    setMetaTag("twitter:image", ogImage);

    // Robots
    setMetaTag(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMetaTag("googlebot", "index, follow");

    // Language and content type
    setMetaTag("content-language", "ro");

    // JSON-LD Schema
    if (schema) {
      let schemaScript = document.querySelector(
        'script[type="application/ld+json"]'
      ) as HTMLScriptElement | null;
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    }

    // Cleanup function to remove schema on unmount
    return () => {
      if (schema) {
        const schemaScript = document.querySelector(
          'script[type="application/ld+json"]'
        );
        if (schemaScript) {
          schemaScript.remove();
        }
      }
    };
  }, [
    title,
    description,
    keywords,
    ogImage,
    canonical,
    ogType,
    publishedTime,
    modifiedTime,
    schema,
  ]);
};
