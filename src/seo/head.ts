import {
  localBusinessSchema,
  organizationSchema,
  pageBreadcrumbs,
  websiteSchema,
} from "@/lib/schema";
import { SITE_URL, type PageSEO } from "./pages";

// Every managed head element carries this attribute, so `useSEO` can swap the
// prerendered tags for the current route's tags on client-side navigation.
// Tags that are identical on every page (og:type, og:site_name, twitter:card, …)
// live in index.html instead.
export const SEO_ATTR = "data-seo";

export interface HeadTag {
  tag: "meta" | "link" | "script";
  attrs: Record<string, string>;
  content?: string;
}

const DEFAULT_OG_IMAGE = {
  path: "og-image.jpg",
  width: "1200",
  height: "630",
  alt: "Comar Net - excelență în distribuție",
};

const absolute = (url: string) =>
  /^https?:\/\//.test(url) ? url : `${SITE_URL}/${url.replace(/^\//, "")}`;

export const canonicalUrl = (path: string) =>
  path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;

export const getHeadTags = (page: PageSEO): HeadTag[] => {
  const url = canonicalUrl(page.path);
  const image = absolute(page.ogImage ?? DEFAULT_OG_IMAGE.path);
  const meta = (key: "name" | "property", id: string, content: string) => ({
    tag: "meta" as const,
    attrs: { [key]: id, content },
  });

  const tags: HeadTag[] = [
    meta("name", "description", page.description),
    meta(
      "name",
      "robots",
      page.noindex
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    ),
    meta("property", "og:title", page.title),
    meta("property", "og:description", page.description),
    meta("property", "og:image", image),
    meta("name", "twitter:title", page.title),
    meta("name", "twitter:description", page.description),
    meta("name", "twitter:image", image),
  ];

  if (!page.ogImage) {
    tags.push(
      meta("property", "og:image:width", DEFAULT_OG_IMAGE.width),
      meta("property", "og:image:height", DEFAULT_OG_IMAGE.height),
      meta("property", "og:image:alt", DEFAULT_OG_IMAGE.alt)
    );
  }

  if (page.keywords) tags.push(meta("name", "keywords", page.keywords));

  if (!page.noindex) {
    tags.push(
      { tag: "link", attrs: { rel: "canonical", href: url } },
      meta("property", "og:url", url)
    );
  }

  // Site-wide identity first, then the page's own nodes. Error pages get none,
  // so business data is never asserted on a 404.
  const schemas = page.noindex
    ? []
    : [
        organizationSchema,
        websiteSchema,
        localBusinessSchema,
        ...(page.breadcrumbs ? [pageBreadcrumbs(page.breadcrumbs)] : []),
        ...(page.schema ?? []),
      ];

  for (const schema of schemas) {
    tags.push({
      tag: "script",
      attrs: { type: "application/ld+json" },
      content: JSON.stringify(schema),
    });
  }

  return tags;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Serializes the `<title>` and managed tags for the prerendered HTML. */
export const renderHeadTags = (page: PageSEO): string => {
  const tags = getHeadTags(page).map(({ tag, attrs, content }) => {
    const attrString = Object.entries({ ...attrs, [SEO_ATTR]: "" })
      .map(([key, value]) => (value ? `${key}="${escapeHtml(value)}"` : key))
      .join(" ");
    if (tag === "script") {
      // "<" is escaped so JSON-LD can never close the script tag early.
      return `<script ${attrString}>${content?.replace(/</g, "\\u003c")}</script>`;
    }
    return `<${tag} ${attrString} />`;
  });
  return [`<title>${escapeHtml(page.title)}</title>`, ...tags].join("\n    ");
};
