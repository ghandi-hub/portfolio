# Ghandi.dev — Brutalist Engineering Portfolio

Personal portfolio for a software engineer, built as a **brutalist engineering workstation** that reads like a developer field notebook. Mobile-first, static-rendered, and dependency-light — it ships facts about the work rather than decoration about the designer.

This is a **portfolio site, not an application**: no database, no authentication, no CMS, no backend API. All content is versioned TypeScript data.

---

## Features

- **Mobile-first brutalist UI**: warm off-white ground, near-black ink, a single orange accent, hard 2px borders and hard offset shadows with square corners throughout.
- **Editorial mobile flow**: hero → selected work → engineering → stack → experience → about → contact, one vertical column with touch-sized (≥44px) controls and zero hover dependencies.
- **Asymmetric desktop layout**: 12-column split hero with a spec-sheet rail, alternating project rows, and a full-width poster-style contact block.
- **Project detail routes**: every project has a dedicated prerendered page with problem, solution, architecture flow, key features and challenges.
- **Data-driven content**: adding a project means adding one object to `src/lib/data/projects.ts` — routes and prerender entries follow automatically.
- **Real engineering metadata only**: no invented system status, no fake metrics, no fabricated uptime.
- **SEO complete**: per-route title/description, canonical URL, Open Graph and Twitter metadata, JSON-LD `Person` schema, generated `sitemap.xml`, `robots.txt`.
- **Accessibility**: semantic landmarks, skip link, keyboard-navigable mobile menu with `Escape` to close, visible `:focus-visible` outline, labelled sections, `aria-hidden` on pure decoration.
- **Reduced-motion aware**: marquee, scroll reveals, hover previews and pulse animations are all disabled under `prefers-reduced-motion: reduce`.
- **Zero animation dependencies**: all motion is CSS + a single `IntersectionObserver`; no animation library is shipped.

---

## Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5 runes
- **Language**: TypeScript
- **Runtime & Package Manager**: Bun
- **Styling**: Tailwind CSS v4 (design tokens via `@theme`, custom brutalist component layer)
- **Icons**: Lucide Svelte
- **Adapter**: `@sveltejs/adapter-node`

---

## Prerequisites

- [Bun](https://bun.sh/) (v1.1+) — or Node.js if you install dependencies elsewhere
- [Docker](https://www.docker.com/) + Docker Compose (only needed for containerized runs)

---

## Environment

The site needs a single variable, used by `adapter-node` for absolute URLs:

```bash
cp .env.example .env
```

```env
# Dev, without a domain
ORIGIN=http://localhost:3002
# Production, behind a domain
# ORIGIN=https://ghandi.dev
```

No secrets, no database credentials, no third-party API keys.

---

## How to Run

### Local development

```bash
bun install
bun run dev
```

Dev server runs on the Vite default port (`http://localhost:5173`).

### Type check

```bash
bun run check
```

### Production build and preview

```bash
bun run build
bun build/index.js
```

`ORIGIN`, `PORT` and `HOST` are read from the environment at runtime.

---

## Docker

`Dockerfile` is a two-stage Bun build (build stage → runtime stage). `docker-compose.yml` maps host port **3002** to container port **3000** and includes a healthcheck.

```bash
# Build and start
docker compose up -d --build

# Status and logs
docker compose ps
docker compose logs -f app

# Stop
docker compose down
```

The container does not need a database or any external service.

---

## Project Structure

```text
portfolio/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── layout/       # Navbar, MobileMenu, Footer
│   │   │   ├── brutal/       # BrutalButton, BrutalCard, BrutalTag, SectionHeader
│   │   │   ├── home/         # Hero, SelectedWork, ProjectCard, Engineering,
│   │   │   │                 # Stack, Experience, About, Contact
│   │   │   └── effects/      # Marquee, HoverPreview
│   │   └── data/             # projects.ts, experience.ts, skills.ts, site.ts, types.ts
│   ├── routes/
│   │   ├── +layout.svelte    # Shell: head/meta, navbar, footer
│   │   ├── +page.svelte      # Home: section composition + scroll reveals
│   │   ├── projects/[slug]/  # Prerendered project detail pages
│   │   └── sitemap.xml/      # Generated sitemap endpoint
│   ├── app.css               # Design tokens + brutalist component layer
│   └── app.html              # Document shell
├── static/                   # favicon.svg, robots.txt
├── Dockerfile
├── docker-compose.yml
└── .env.example
```

---

## Editing Content

| What | Where |
| --- | --- |
| Name, role, statement, contact links, nav items | `src/lib/data/site.ts` |
| Projects (title, stack, problem, solution, architecture, features, challenges) | `src/lib/data/projects.ts` |
| Work history | `src/lib/data/experience.ts` |
| Engineering disciplines | `src/lib/data/experience.ts` (`engineeringAreas`) |
| Stack matrix and marquee | `src/lib/data/skills.ts` |

Routes for new projects are generated from the `projects` array — no manual route registration.

---

## Design System

Tokens live in `src/app.css` under `@theme`:

```text
BACKGROUND   #F5F1E8     warm off-white ground
FOREGROUND   #111111     near-black ink
ACCENT       #FF4D00     CTAs, active state, key highlights
ACCENT-2     #D9FF00     experimental / status accent
MUTED        #6B6B6B     metadata only
BORDER       #111111     every edge
PAPER        #FFFFFF     inverted blocks
```

Surfaces: 2px borders by default, 3px for emphasized panels, `border-radius: 0`, and hard shadows (`2px 2px`, `6px 6px`, `10px 10px`) — no blur shadows. Buttons behave like physical controls: pressing one translates it 4px and drops its shadow from 6px to 2px.

Typography: Space Grotesk for display, Inter for body, JetBrains Mono for all labels and metadata, with fluid `clamp()` scaling for hero and section headings.

---

## Performance Notes

- Every route is prerendered at build time; there is no runtime data fetching.
- No animation, charting or UI framework dependencies — the only runtime dependencies are `lucide-svelte`, `clsx` and `tailwind-merge`.
- Scroll reveals use one shared `IntersectionObserver` that unobserves each element after it fires.
- Fonts are loaded from Google Fonts with `preconnect`; self-host them if you want a fully offline build.

---

## License

MIT.