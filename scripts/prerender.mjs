// Runs after `vite build` (client, into dist/) and `vite build --ssr` (into dist-ssr/).
// Writes one HTML file per route with its own <head>, plus 404.html and sitemap.xml.
// vercel.json's `cleanUrls` serves dist/servicii/distributie.html at /servicii/distributie.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

process.env.NODE_ENV ??= "production";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const ssrDir = join(root, "dist-ssr");

const { render, renderHeadTags, canonicalUrl, SEO, SITEMAP_PAGES } = await import(
  pathToFileURL(join(ssrDir, "entry-server.js")).href
);

const template = await readFile(join(dist, "index.html"), "utf8");
const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
if (!template.includes('<div id="root"></div>') || !SEO_BLOCK.test(template)) {
  throw new Error("index.html no longer has the expected seo:start/seo:end or #root markers");
}

const outputFile = (path) =>
  path === "/" ? "index.html" : path === SEO.notFound.path ? "404.html" : `${path.slice(1)}.html`;

const pages = [...SITEMAP_PAGES, SEO.notFound];
for (const page of pages) {
  const appHtml = await render(page.path);
  const html = template
    .replace(SEO_BLOCK, () => renderHeadTags(page))
    .replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
  const file = join(dist, outputFile(page.path));
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log(`prerendered ${page.path} -> ${outputFile(page.path)}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_PAGES.map(
  (page) => `  <url>
    <loc>${canonicalUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
).join("\n")}
</urlset>
`;
await writeFile(join(dist, "sitemap.xml"), sitemap);
console.log(`sitemap.xml: ${SITEMAP_PAGES.length} URLs`);

await rm(ssrDir, { recursive: true, force: true });
