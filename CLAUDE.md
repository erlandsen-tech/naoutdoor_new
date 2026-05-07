# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- Dev server: `npm run dev` (Next.js with Turbopack)
- Build: `npm run build`
- Production server: `npm run start`
- Lint: `npm run lint` (ESLint flat config: `next/core-web-vitals` + `next/typescript`)

There is no test runner configured. Node `>=20 <25` (see `.nvmrc` and `package.json#engines`).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind v4 (via `@tailwindcss/postcss`) · `next-intl` v4. Path alias `@/*` → `src/*`. Server Components by default — only opt into `"use client"` for interactivity (menu toggles, language switcher, etc.).

## Architecture

### i18n is the load-bearing concept

Eight locales: `en, nb, sv, da, nl, de, fr, fi`. `localePrefix: "as-needed"` — `en` is served at the root with **no** `/en` prefix; all others get `/{locale}/...`. This routing convention shows up everywhere (sitemap, hreflang alternates, redirects, nav active-state matching) and must be preserved when adding routes.

Two layout files cooperate, and the split matters:

- `src/app/layout.tsx` — minimal HTML shell (fonts, metadataBase, viewport). It does **not** mount `NextIntlClientProvider`.
- `src/app/[locale]/layout.tsx` — calls `setRequestLocale(locale)`, loads messages, and wraps children in `<NextIntlClientProvider locale={locale} messages={messages}>`. The explicit `locale` + `messages` props are required: without them, the client provider caches the initial server-resolved locale and never refreshes on client-side navigation between locales. Don't "simplify" this.

Routing helpers live in `src/i18n/`:
- `routing.ts` — single source of truth for `locales` and `defaultLocale`. Import `Locale` type from here.
- `navigation.ts` — exports locale-aware `Link`, `usePathname`, `useRouter`, `redirect`. **Always use these** instead of `next/link` / `next/navigation` for in-app navigation; they handle the prefix-on-non-default-locale rule automatically. `next/navigation`'s `usePathname` is fine when you only need the raw path (e.g. for `stripLocalePrefix` matching in `nav/navConfig.ts`).
- `request.ts` — server-side message loader. Merges `messages/{locale}.json` (UI strings) with `messages/pamphlets/{locale}.json` (long-form NA literature) under the `pamphlets` namespace.

### Content lives in JSON, not page components

Pamphlet bodies (Who/What/Why/How/Traditions/Just for Today/We Do Recover) are stored in `messages/pamphlets/{locale}.json` as `{ title, body }` pairs. `body` contains raw HTML with `<br />` tags preserved for paragraph/soft breaks and is rendered via `dangerouslySetInnerHTML` from `t.raw(...)` in `src/app/[locale]/readings/[slug]/page.tsx`. When editing pamphlet text, edit the JSON — do not move content back into TSX.

`scripts/extract-pamphlets.mjs` was the one-shot extractor that pulled content out of the legacy `old/{language}/{slug}/page.tsx` files into the JSON bundles. The `old/` directory has since been deleted; the script is now historical reference and should not be re-run.

### Pamphlet styling uses Norwegian-sourced CSS IDs

Each pamphlet slug maps to a stable CSS id in `src/app/pamflets.css` that controls the card background:

```
who → pam-hvem · what → pam-hva · why → pam-hvorfor · how → pam-hvordan
traditions → pam-trad · just-for-today → pam-bare · we-do-recover → pam-vitil
```

The mapping is in `[locale]/readings/[slug]/page.tsx` (`SLUG_ID`). IDs are deliberately Norwegian-sourced and shared across all locales so the color scheme stays consistent. Do not rename them.

### Legacy URL compatibility

`next.config.ts` declares permanent redirects from the old language-named paths (`/english`, `/norwegian`, `/swedish`, …) to the new locale-prefixed `/readings` (or `/{locale}/readings`). Leave these in place — external links and SEO depend on them.

### Navigation layout

`src/components/Layout.tsx` is the chrome (Header + Footer + MobileTabBar). Locale layout wraps every page in it. Nav config in `src/components/nav/navConfig.ts` uses default-locale paths in `href` — `Link` from `@/i18n/navigation` injects the prefix. `activeId` and `hasReadableText` strip the locale prefix before matching, using a hardcoded list of non-default locale codes; if you add a locale, update `LOCALE_CODES` there too.

Pages with long-form text (pamphlets, meeting formats) opt into the `TextSizeControl` UX via `hasReadableText(pathname)`.

### Events data

`src/lib/events.ts` is the calendar. `EVENTS` is hand-edited annually (Ski & Recovery winter / Bike 2 Basic summer). `getUpcomingEvents()` picks the soonest event still in its window as `primary`, plus the next event of the other kind as `secondary`. End dates are inclusive — an event stays "current" through its final day.

### SEO

`src/app/sitemap.ts` enumerates every (locale, route) pair plus pamphlet slugs and emits hreflang alternates using the BCP-47 map (`nb-NO`, `sv-SE`, …). The same BCP-47 map appears in `[locale]/layout.tsx` for `openGraph.locale` and `alternates.languages` — **keep these two maps in sync** when changing locales.

## Conventions

- TypeScript is strict; no `any`. Define explicit prop interfaces.
- Tailwind utilities for styling. Global CSS only in `src/app/globals.css` (theme tokens) or `src/app/pamflets.css` (pamphlet-only). Don't add new global stylesheets.
- Design tokens (colors `cream`/`espresso`/`sunset`/`coral`/`teal`/`gold-line`, fluid `--fs-*` sizes, `--shadow-card`, `--tabbar-h`) are defined in `globals.css` — prefer them over magic values.
- `next/image` for images with explicit `width`/`height`. Static assets in `public/` referenced by absolute path.
- Keep client-component surface area small. Most pages should be async server components calling `setRequestLocale(locale)` and `getTranslations({ locale, namespace })`.
