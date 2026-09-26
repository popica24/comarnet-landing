/* eslint-disable react-refresh/only-export-components -- build-time module, never hot-reloaded */
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router";
import routes from "./routes";
import { SITE_URL } from "./seo/pages";

export { SEO, SITEMAP_PAGES, SITE_URL } from "./seo/pages";
export { renderHeadTags, canonicalUrl } from "./seo/head";

// Build-time only: scripts/prerender.mjs loads the SSR build of this file.
export const render = async (path: string): Promise<string> => {
  const { query, dataRoutes } = createStaticHandler(routes);
  const context = await query(new Request(new URL(path, SITE_URL)));
  if (context instanceof Response) {
    throw new Error(`Unexpected redirect while prerendering ${path}`);
  }
  const router = createStaticRouter(dataRoutes, context);
  return renderToString(
    <StrictMode>
      <StaticRouterProvider router={router} context={context} hydrate={false} />
    </StrictMode>
  );
};
