// hooks/useSEO.ts
import { useEffect } from "react";
import { getHeadTags, SEO_ATTR } from "@/seo/head";
import type { PageSEO } from "@/seo/pages";

// Replaces the managed <head> tags with the ones for `page`. The first render of a
// prerendered page already has identical tags in the HTML (see scripts/prerender.mjs);
// this keeps them correct after client-side navigation.
export const useSEO = (page: PageSEO): void => {
  useEffect(() => {
    document.title = page.title;

    document.head
      .querySelectorAll(`[${SEO_ATTR}]`)
      .forEach((element) => element.remove());

    for (const { tag, attrs, content } of getHeadTags(page)) {
      const element = document.createElement(tag);
      for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(key, value);
      }
      element.setAttribute(SEO_ATTR, "");
      if (content) element.textContent = content;
      document.head.appendChild(element);
    }
  }, [page]);
};
