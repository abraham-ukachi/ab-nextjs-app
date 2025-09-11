# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js 15 (App Router) with React 19 and TypeScript
- Styling: Tailwind CSS v4 via PostCSS
- Linting: ESLint 9 (flat config) with Next.js presets
- PWA: Web App Manifest configured under public/manifest.json with multiple icon sizes and screenshots
- Status: Work in progress until v1.0 (see README)

Core commands
- Install (pnpm is preferred as pnpm-lock.yaml is present)
```bash path=null start=null
pnpm install
```
- Dev server (Turbopack enabled). Opens http://localhost:3000 by default.
```bash path=null start=null
pnpm dev
```
- Production build
```bash path=null start=null
pnpm build
```
- Start production server (after build)
```bash path=null start=null
pnpm start
```
- Lint
```bash path=null start=null
pnpm lint
```
- Tests
  - No test framework or scripts are configured in this repo at present. Running a single test is not applicable until tests are added.

High-level architecture
- App Router structure (app/)
  - app/layout.tsx is the root layout. It:
    - Loads the Inter Google font and imports global styles from app/globals.css
    - Exposes static metadata and viewport via re-exported Next types from app/metadata.ts and app/viewport.ts
  - Routing and 404 behavior
    - app/page.tsx renders the homepage (a coming-soon screen)
    - app/[...rest]/page.tsx explicitly calls notFound() for all unknown routes
    - app/not-found.tsx immediately permanentRedirect('/')
      - Net effect: any unknown route redirects to the homepage. This is an intentional temporary setup per in-code comments.

- Metadata and viewport (centralized)
  - app/metadata.ts exports StaticMetadata using Next’s Metadata type:
    - Sets applicationName, title template, description, keywords, PWA manifest path (/manifest.json), authors, and a suite of icons under public/assets/images/manifest/*
  - app/viewport.ts exports StaticViewport using Next’s Viewport type:
    - Defines device-scale settings, color scheme, and theme colors for light/dark

- Styling
  - Tailwind v4 is wired via PostCSS only (postcss.config.mjs uses "@tailwindcss/postcss")
  - app/globals.css imports tailwindcss and defines CSS variables and a small utilities layer (e.g., .text-balance)

- Configuration and tooling
  - next.config.mjs: minimal export with default Next config
  - tsconfig.json: strict TS, bundler moduleResolution, Next TS plugin, and a project-level alias
    - paths: "@/*" -> "./*" (import from project root)
  - eslint.config.mjs: ESLint 9 flat config via FlatCompat extending "next/core-web-vitals" and "next/typescript"; disables @typescript-eslint/no-explicit-any

- Public assets and PWA
  - public/manifest.json defines PWA metadata (name, start_url, display, theme/background colors)
  - Protocol handlers are registered (e.g., web+projects, web+apps, etc.)
  - Icons and screenshots live under public/assets/images/** and are referenced by the manifest and metadata

Important notes from README.md
- Use the dev server to iterate locally; the main page to edit is app/page.tsx
- Project was bootstrapped with create-next-app and initially deployed on Vercel; see README for Next.js and deployment documentation links

Conventions and expectations
- Package manager: pnpm (preferred)
- No CI workflows or AI assistant rule files (Claude/Cursor/Copilot) were found in this repo at the time of writing

