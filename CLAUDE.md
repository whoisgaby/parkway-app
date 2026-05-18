# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build static site to dist/
npm run preview   # Preview the built site
```

No linter or test runner is configured.

## Architecture

**Parkway App** is a static Astro site (output: "static") about the Parkway neighborhood in Bogotá — a local guide for events, restaurants, places, and articles.

### Content collections (`src/content/`)

All content is managed via Astro's Content Collections. The schema is defined in `src/content/config.ts` with four collections sharing a `baseSchema`:

| Collection    | Extra fields                          |
|---------------|---------------------------------------|
| `eventos`     | `date` (required), `location` (required) |
| `restaurantes`| `address`, `category` (Cafe/Restaurante/Bar) |
| `lugares`     | *(base only)*                         |
| `articulos`   | `author`                              |

All entries require `title`, `description`, and `image`. Content files are Markdown (`.md`) with frontmatter.

### Pages and routing (`src/pages/`)

File-based routing. Dynamic detail pages use `[slug].astro` with `getStaticPaths()` + `getCollection()`. The nav menu maps to: `/explorar`, `/eventos`, `/restaurantes`, `/lugares` (places), `/guias` (maps to `articulos` collection), `/sobre`.

Note: `/guias` in the nav resolves to the `articulos` collection — the URL path and collection name differ.

### Component model (`src/components/`)

- `BaseLayout.astro` — root shell (HTML, head, SiteHeader, footer); accepts `title` and `description` props
- `SiteHeader.astro` — site-wide nav
- `Hero.astro` — full-bleed hero with image, heading, and two CTA buttons
- `SectionHeader.astro` — section title + subtitle + optional action link
- `Card.astro` — content card with image, tag, title, description, and optional link
- `Gallery.astro` — image grid

### Styles (`src/styles/global.css`)

Single global stylesheet with CSS custom properties defined on `:root`:

- Colors: `--color-bg`, `--color-primary` (dark green `#2f4a2d`), `--color-accent` (terracotta `#bb7a46`), `--color-neutral`, `--color-secondary`, `--color-text`, `--color-border`
- Fonts: `--font-title` (Georgia serif) and `--font-body` (Trebuchet MS sans-serif)
- Utility classes: `.section`, `.card-grid`, `.card`, `.button` / `.button-primary` / `.button-secondary`, `.button-row`, `.hero`, `.gallery`

All layout uses CSS Grid (`auto-fit` / `minmax`). No CSS framework or component library.

### Images

Static images live in `public/images/`. Reference them as `/images/filename.png` in templates.
