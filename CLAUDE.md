# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/landing site for **Comar Net**, a Romanian distribution, logistics and warehousing company (also a Pall-Ex network member). All user-facing copy is in **Romanian** — write new copy in Romanian and keep diacritics correct.

## Commands

```bash
npm run dev       # Vite dev server
npm run build     # tsc -b, vite build, SSR build of src/entry-server.tsx, then scripts/prerender.mjs
npm run lint      # eslint .
npm run preview   # serve the production build
```

There is no test setup. `npm run build` is the only real correctness gate — it runs `tsc -b` with `strict`, `noUnusedLocals`, and `noUnusedParameters`, so unused imports/vars fail the build even though `npm run dev` tolerates them. Run it before claiming a change compiles.

`README.md` is the untouched Vite template — ignore it.

## Architecture

React 19 + Vite (SWC) + TypeScript, React Router v7 in `createBrowserRouter` mode, Tailwind CSS v4. Hosted as static files on cPanel (LiteSpeed): the contents of `dist/` are uploaded to the site root — there is no Vercel/Node server, and `vercel.json`-style config has no effect.

**Entry chain:** `src/main.tsx` → `RouterProvider` → `src/router.tsx` (`createBrowserRouter(routes)`) → `src/routes.tsx` → `src/layout/Layout.tsx` (shell) → page. `main.tsx` hydrates when `#root` already has prerendered markup and does a plain client render otherwise (dev).

**Routing.** All routes live in `src/routes.tsx` as children of the single `Layout` route (kept separate from `router.tsx` so the build-time prerender can import them without a browser). Paths are Romanian: `/`, `/servicii`, `/servicii/distributie`, `/servicii/logistica`, `/servicii/depozitare`, `/pallex`, `/sustenabilitate`, plus a `*` catch-all rendering `pages/not-found`. Adding a page means adding a folder under `src/pages/`, one entry in `routes.tsx`, and one entry in `src/seo/pages.ts` (the prerender and sitemap iterate that file, not the routes).

**Page structure convention.** Every page is `src/pages/<name>/` containing:
- `<Name>.tsx` — thin composition root: calls `useSEO(SEO.<key>)` then renders section components in order.
- `index.ts` — re-export default (`import Homepage from "./Homepage"; export default Homepage;`), so router imports stay short.
- `components/` — the page's own sections (`Hero`, `Features`, `Benefits`, `CTA`, …). These are page-local by design; the same section name in different pages is a different file with different content. Don't try to unify them.

`src/components/ui/` is shadcn/ui (new-york style, `components.json`) — only genuinely shared primitives live there.

**Layout shell.** `Layout.tsx` renders fixed `Navigation`, a `framer-motion` `AnimatePresence` page transition keyed on `location.pathname`, then `Footer`. `AnimatedOutlet` freezes the outlet in `useState` so the exiting page keeps rendering its old content during the transition — don't replace it with a plain `<Outlet />`. `ScrollToTop` scrolls to top on navigation with a 500ms delay matched to the exit animation duration; the two must stay in sync.

**SEO & prerendering.** Per-page title, description, keywords and JSON-LD live in `src/seo/pages.ts` (`SEO`), with the canonical domain `SITE_URL = https://comarnet.ro`. `src/seo/head.ts` turns an entry into head tags; both consumers use it:
- `scripts/prerender.mjs` (after `vite build --ssr src/entry-server.tsx --outDir dist-ssr`) renders every sitemap page plus the 404 page with `renderToString` into `dist/<path>.html` with its own `<head>`, then writes `dist/sitemap.xml` and deletes `dist-ssr/`.
- `useSEO` swaps all `[data-seo]` head elements on client-side navigation.

Keep components render-safe in Node: browser APIs (`window`, `document`) only in effects and handlers. CommonJS deps that break in the SSR build go in `ssr.noExternal` in `vite.config.ts`. `Layout`'s `AnimatePresence` uses `initial={false}` so prerendered content is not rendered at `opacity: 0`. `public/.htaccess` (copied into `dist/`) serves `servicii/distributie.html` at `/servicii/distributie`, 301s trailing slashes, `.html` URLs and `/index.php` (an old-site URL still in Google), and has **no SPA fallback**: unknown paths get `404.html` with a real 404 status. `DirectorySlash Off` is required because `/servicii` is both `servicii.html` and a folder. `public/robots.txt` points to the sitemap. When deploying, upload `dist/` including the dotfile `.htaccess` (cPanel File Manager hides dotfiles by default).

**Styling.** Tailwind v4 via `@tailwindcss/vite`, but `src/index.css` pulls in a v3-shaped config with `@config "../tailwind.config.ts"`. Consequence: theme extensions (colors, keyframes, plugins) go in `tailwind.config.ts`; the HSL CSS variables they reference are defined in `src/index.css` under `@layer base`. Semantic tokens only — use `bg-primary`, `text-foreground`, `border-border`, `text-gold`, never raw hex. Brand color is teal `#2FABB7`; `--gold` is aliased to the same teal (historical name, kept for the `gold` Button variant). Dark mode tokens exist (`darkMode: "class"`) but nothing toggles `.dark` today.

`Button` (`src/components/ui/button.tsx`) is CVA-based with project-specific variants beyond stock shadcn: `gold`, `outlineLight`, and sizes `xl`. Custom clip-path utilities (`clip-diagonal-top/middle/bottom`) are in `index.css`.

**Animations.** Two systems coexist: `framer-motion` (page transitions, in-component motion) and **AOS**, loaded from a unpkg CDN `<script>` in `index.html` and driven by `data-aos` / `data-aos-delay` / `data-aos-duration` attributes on elements. AOS is not an npm dep and has no types — it's global, initialized once with `once: true`.

**Dialogs.** `sweetalert2` (`Swal.fire`) is the modal layer — the "Cere o ofertă" flow and "coming soon" nav items in `Navigation.tsx` build modals with raw HTML strings and attach listeners in `didOpen`.

**Forms.** `react-hook-form` + `yup` via `@hookform/resolvers`. The homepage `Contact` form POSTs to a Google Apps Script endpoint with `mode: "no-cors"`, so the response is unreadable and success is assumed when no error throws.

**Env vars.** `VITE_APPS_SCRIPT` (contact form endpoint) and `VITE_PHONE_NUMBER` (displayed in nav). `.env` is gitignored; missing values fail silently at runtime.

**Imports.** `@/` → `src/` (aliased in both `vite.config.ts` and `tsconfig.app.json` — update both if changed). Import from `react-router`, not `react-router-dom`. Images are imported as modules from `src/assets/`; only `logo.png` lives in `public/`.
