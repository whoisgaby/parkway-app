# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev           # Start dev server at localhost:4321
npm run build         # Build static site to dist/
npm run preview       # Preview the built site
npm run check         # Run astro check (type checking)
npm run lint          # Lint src/ with ESLint
npm run lint:fix       # Lint and auto-fix
npm run format         # Format src/ with Prettier
npm run format:check   # Check formatting without writing
```

No test runner is configured.

## Architecture

**Parkway App** is a static Astro site (output: "static") about the Parkway neighborhood in Bogotá — a local guide for events, restaurants, places, and articles. It's deployed to Cloudflare Pages, git-connected to this repo: every PR gets an automatic preview deployment, and merges to `main` deploy to production. There is no `base` path — internal links and asset paths in templates are plain root-relative (e.g. `/eventos`, `/images/web/parque.webp`).

### Content collections (`src/content/`)

All content is managed via Astro's Content Layer API. The schema is defined in `src/content.config.ts` (project root of `src/`, not inside `src/content/`) using `defineCollection` + `glob()` loaders, with four collections sharing a `baseSchema`:

| Collection    | Extra fields                          |
|---------------|---------------------------------------|
| `eventos`     | `date` (required), `location` (required) |
| `restaurantes`| `address`, `category` (Cafe/Restaurante/Bar) |
| `lugares`     | *(base only)*                         |
| `articulos`   | `author`                              |

All entries require `title`, `description`, and `image`. Content files are Markdown (`.md`) with frontmatter, one subfolder per collection under `src/content/`.

### Pages and routing (`src/pages/`)

File-based routing. Dynamic detail pages use `[slug].astro` with `getStaticPaths()` + `getCollection()`. The nav menu maps to: `/explorar`, `/eventos`, `/restaurantes`, `/lugares` (places), `/guias` (maps to `articulos` collection), `/sobre`.

Note: `/guias` in the nav resolves to the `articulos` collection — the URL path and collection name differ.

`/catalog` is an internal, `noindex` style-guide page (using `CatalogLayout`) that showcases every module in `src/components/modules/` for design review — not part of the public site nav.

### Component model

- `src/layouts/BaseLayout.astro` — root shell (HTML, head, `SiteHeader`, `Footer`); accepts `title` and `description` props
- `src/layouts/CatalogLayout.astro` — minimal shell used only by `/catalog`
- `src/components/global/` — `SiteHeader.astro` (site-wide nav), `Footer.astro` (footer with link columns)
- `src/components/modules/` — page-section building blocks: `HeroFullbleed`, `HeroAsimetrico`, `HeroEditorial`, `HeroSimple`, `IntroStrip`, `Marquee`, `EventsGrid`, `CardsSection`, `AgendaSection`, `SplitSection`, `PhotoCollage`, `StatsBlock`, `RestaurantList`, `NewsletterForm`, `CtaBand`

### Styles (`src/styles/global.css`)

Single global stylesheet with CSS custom properties defined on `:root`:

- Colors: `--color-bg`, `--color-primary` (dark green `#2f4a2d`), `--color-accent` (terracotta `#bb7a46`), `--color-neutral`, `--color-secondary`, `--color-text`, `--color-border`
- Fonts: `--font-title` (Georgia serif) and `--font-body` (Trebuchet MS sans-serif)
- Other: `--shadow-soft`
- Utility classes: `.section`, `.section-header`, `.card-grid`, `.card`, `.card-body`, `.tag`, `.button` / `.button-primary` / `.button-secondary`, `.button-row`, `.hero`, `.hero-text`, `.hero-image`, `.gallery`, `.color-dots` / `.color-dot`

All layout uses CSS Grid (`auto-fit` / `minmax`). No CSS framework or component library.

### Images

Static images live in `public/images/web/` as `.webp`. Reference them root-relative, e.g. `/images/web/parque.webp`.
