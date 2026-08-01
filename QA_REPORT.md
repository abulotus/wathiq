# QA Report — Phase 1–3

Covers the claims-cleanup pass (Phase 1) and the positioning/IA/bilingual-routing rebuild (Phase 2–3). Everything below was actually run in this environment; where something couldn't be verified here, that's stated explicitly rather than assumed.

## Claims accuracy

- Re-ran the full banned-claims grep sweep (GDPR/SOC2/ICO/eIDAS badges, liveness, biometric, sanctions/PEP, sandbox, no-code, RESTful, pre-built SDKs, 99.9%/24-7 uptime claims, fake stats, "All systems operational", fraud/trust scores, NFC/ICAO chip claims) across `app/`, `components/`, `lib/`. Zero matches except one legitimate negative statement in the Privacy Notice ("we do not collect biometric data through this website").
- Every public claim now traces to either a confirmed fact (140 supported ePassports, Arabic-first, API + webhooks, client dashboard, mobile app, no mobile SDK, Syria-focused, UK-registered entity) or an explicit "pending"/"finalizing" holding statement (Security, Privacy encryption specifics, Service Data Information, ePassport coverage last-updated date, Client Dashboard/Mobile App screenshots, Developers API specifics).
- Full before/after reasoning per original claim is in `CLAIMS_AUDIT.md`.

## Build & types

- `npx tsc --noEmit` — clean, no errors.
- `npm run build` — succeeds; all 19 routes statically generated for both `/en` and `/ar` (38 pages total) plus API routes, robots.txt, sitemap.xml.

## Routing & broken links

- Crawled every route in both locales with `curl` against a production build (`npm run start`) — all return 200.
- `/en/nonexistent-page` correctly returns 404 via the locale-aware not-found boundary.
- Bare root `/` redirects to the detected locale (`/en` or `/ar`) via middleware; verified with `curl -L`.
- Every `Link`/`<a>` to an internal route across `Header`, `Footer`, and all page content now resolves through the locale-aware `href()` helper, except cross-references between legal pages (`/privacy` ↔ `/cookies`, `/terms` → `/privacy`) which are defined outside component scope and rely on the middleware's locale-prefix redirect as a safety net — confirmed working via `curl` (one extra redirect hop, correct destination).
- No `#business`, `#fraud`, or other stale anchor links remain; footer/nav link sets were rebuilt to match the current page set.

## SEO

- `generateMetadata` on every route sets a per-page canonical URL and `hreflang` alternates (`en`/`ar`) — confirmed present in rendered HTML (`<link rel="canonical">`, `<link rel="alternate" hrefLang="...">`).
- `sitemap.ts` emits both locale variants of every route with language alternates.
- `robots.ts` unchanged (allows all, points to sitemap).
- Page titles/descriptions are unique per route and language, grounded in confirmed facts.

## RTL / bilingual

- `<html lang dir>` verified correct for both locales (`lang="ar" dir="rtl"` on `/ar/*`, `lang="en" dir="ltr"` on `/en/*`).
- Existing RTL implementation (logical Tailwind properties — `ps-`/`pe-`/`start-`/`end-`, `rtl:` variants) was preserved, not rebuilt, since it predates this engagement and wasn't flagged as broken.
- Language switcher now navigates to the equivalent path under the other locale (via `otherLocaleHref`) rather than mutating client state in place — confirmed the current page's path carries over correctly.
- **Not verified here**: visual RTL spacing/line-height quality on a real device or with a native Arabic speaker's review. The brief calls for professional Arabic copywriting review before publication — the Arabic copy in this pass is functional but has not had that review.

## Accessibility

- Semantic structure (headings, nav landmarks) is intact from the prior implementation.
- **Not verified here**: no automated accessibility audit (axe, Lighthouse) or screen-reader pass was run in this environment. Color contrast, focus states, and reduced-motion support were not re-audited beyond what existed before this engagement.

## Responsiveness

- No real device or browser-resize testing was performed. Existing responsive Tailwind classes (`sm:`, `lg:`) were preserved on all reused components; new components (`PlatformOverview`, `ArabicFirstExperience`, `UseCases`, `FinalCTA`, coverage/developers/dashboard/mobile-app pages) follow the same responsive grid patterns as existing ones but have not been visually verified at tablet/mobile breakpoints.

## Domain & legal consistency

- Canonical domain (`wathiq.digital` via `NEXT_PUBLIC_SITE_URL`) used consistently across metadata, sitemap, and robots.
- UK entity name/address kept as-is in Company/legal pages per confirmed-real status; copyright year is now computed at render time instead of hardcoded.
- Cookie Notice reconciled with actual conditional Google Analytics loading in the layout (previously contradicted it).

## Known gaps (see SCREENSHOTS_AND_INFO_NEEDED.md for the full list)

- Client Dashboard and Mobile App pages use labeled sample UI, not real screenshots.
- ePassport Coverage is a static page (140-country stat + contact route), not the searchable directory the brief describes — deferred per your decision until a real data source exists.
- Developers page shows a generic, non-specific architecture diagram — no real endpoint/parameter names, since none were provided.
- Security, Privacy (encryption specifics), and the new Service Data Information page carry honest "pending" statements rather than final content.
