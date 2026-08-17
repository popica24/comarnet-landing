# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Comar Net**, a Romanian distribution, logistics and warehousing company (also a Pall-Ex network member). All user-facing copy is in **Romanian** — write new copy in Romanian and keep diacritics correct.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b (type-check, project references) then vite build
npm run lint      # eslint .
npm run preview   # serve the production build
```

There is no test setup. `npm run build` is the only real correctness gate — it runs `tsc -b` with `strict`, `noUnusedLocals`, and `noUnusedParameters`, so unused imports/vars fail the build even though `npm run dev` tolerates them. Run it before claiming a change compiles.

`README.md` is the untouched Vite template — ignore it.

## Architecture

React 19 + Vite (SWC) + TypeScript, React Router v7 in `createBrowserRouter` mode, Tailwind CSS v4, deployed to Vercel (`vercel.json` rewrites everything to `/index.html` for client-side routing).

**Entry chain:** `src/main.tsx` → `RouterProvider` → `src/router.tsx` → `src/layout/Layout.tsx` (shell) → page.

**Routing.** All routes live in `src/router.tsx` as children of the single `Layout` route. Paths are Romanian: `/`, `/servicii`, `/servicii/distributie`, `/servicii/logistica`, `/servicii/depozitare`, `/pallex`, `/sustenabilitate`, `/contact`, `/termeni`, `/confidentialitate`, `/cookies`, `/anpc`. A `*` catch-all and the layout's `errorElement` both render `NotFound`. Adding a page means adding a folder under `src/pages/`, one entry here, **and one `<url>` in `public/sitemap.xml`**.

**Page structure convention.** Every page is `src/pages/<name>/` containing:
- `<Name>.tsx` — thin composition root: calls `useSEO(...)` then renders section components in order.
- `index.ts` — re-export default (`import Homepage from "./Homepage"; export default Homepage;`), so router imports stay short.
- `components/` — the page's own sections (`Hero`, `Features`, `Benefits`, `CTA`, …). These are page-local by design; the same section name in different pages is a different file with different content. Don't try to unify them.

`src/components/ui/` is shadcn/ui (new-york style, `components.json`) — only genuinely shared primitives live there.

**Layout shell.** `Layout.tsx` renders fixed `Navigation`, a `framer-motion` `AnimatePresence` page transition keyed on `location.pathname`, then `Footer`. `AnimatedOutlet` freezes the outlet in `useState` so the exiting page keeps rendering its old content during the transition — don't replace it with a plain `<Outlet />`. `ScrollToTop` scrolls to top on navigation with a 500ms delay matched to the exit animation duration; the two must stay in sync.

**Company data.** `src/config/company.ts` is the single source of truth for address, phone, email, hours, geo coordinates, legal identifiers (CUI, Reg. Com.) and Google Maps URLs. Never hardcode these — schemas, footer, nav, contact page and legal pages all read from it.

**SEO.** `src/hooks/useSEO.ts` imperatively writes `document.title`, meta tags (OG/Twitter/robots/geo), the canonical link and JSON-LD into `<head>` on mount, cleaning up on unmount. There is no react-helmet. Every page component must call it, passing `canonical` as a site-relative path — the hook derives the URL from `SITE_URL` and strips query/hash so one page never yields several canonical URLs. It injects `Organization` + `WebSite` + `LocalBusiness` on every indexable page; pass page-specific nodes via `schema`. Set `noIndex` for error pages (it also suppresses the site-wide nodes).

Schema builders live in `src/lib/schema.ts` (`pageBreadcrumbs`, `serviceSchema`, `faqSchema`, `webPageSchema`, …). Define the `schema` array at **module scope**, not inline in the component — `useSEO` depends on it by reference and an inline literal re-runs the effect every render.

Breadcrumbs: render `<Breadcrumbs items={...} />` and pass the *same* array to `pageBreadcrumbs(...)`, so markup and structured data cannot drift. "Acasă" is implicit in both — don't include it.

Caveat: this is all client-side. Google renders JS and sees it, but social crawlers (Facebook, LinkedIn, WhatsApp) do not — they read the static fallback tags in `index.html`, which must stay accurate. Per-route share previews need build-time prerendering, which is not set up.

**Styling.** Tailwind v4 via `@tailwindcss/vite`, but `src/index.css` pulls in a v3-shaped config with `@config "../tailwind.config.ts"`. Consequence: theme extensions (colors, keyframes, plugins) go in `tailwind.config.ts`; the HSL CSS variables they reference are defined in `src/index.css` under `@layer base`. Semantic tokens only — use `bg-primary`, `text-foreground`, `border-border`, `text-gold`, never raw hex. Brand color is teal `#2FABB7`; `--gold` is aliased to the same teal (historical name, kept for the `gold` Button variant). Dark mode tokens exist (`darkMode: "class"`) but nothing toggles `.dark` today.

`Button` (`src/components/ui/button.tsx`) is CVA-based with project-specific variants beyond stock shadcn: `gold`, `outlineLight`, and sizes `xl`. Custom clip-path utilities (`clip-diagonal-top/middle/bottom`) are in `index.css`.

**Animations.** Two systems coexist: `framer-motion` (page transitions, in-component motion) and **AOS**, loaded from a unpkg CDN `<script>` in `index.html` and driven by `data-aos` / `data-aos-delay` / `data-aos-duration` attributes on elements. AOS is not an npm dep and has no types — it's global, initialized once with `once: true`.

**Dialogs.** `sweetalert2` (`Swal.fire`) is the modal layer — the "Cere o ofertă" flow and "coming soon" nav items in `Navigation.tsx` build modals with raw HTML strings and attach listeners in `didOpen`.

**Forms.** `react-hook-form` + `yup` via `@hookform/resolvers`. The homepage `Contact` form POSTs to a Google Apps Script endpoint with `mode: "no-cors"`, so the response is unreadable and success is assumed when no error throws.

**Env vars.** `VITE_APPS_SCRIPT` (contact form endpoint) and `VITE_PHONE_NUMBER` (displayed in nav). `.env` is gitignored; missing values fail silently at runtime.

**Imports.** `@/` → `src/` (aliased in both `vite.config.ts` and `tsconfig.app.json` — update both if changed). Import from `react-router`, not `react-router-dom`. Images are imported as modules from `src/assets/`; `public/` holds only the files that need stable URLs: `logo.png`, `og-image.jpg` (1200×630), `robots.txt`, `sitemap.xml`.

**Images.** Every `<img>` needs a descriptive Romanian `alt`. Below-the-fold images get `loading="lazy" decoding="async"`; the homepage hero is the LCP element and uses `fetchPriority="high"` instead.
