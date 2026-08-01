# Wathiq Website — Claims Audit

> **Addendum (Phase 2–3):** This audit covers the Phase 1 claims-cleanup pass. Phase 2–3 (positioning, new IA, bilingual `/en` `/ar` routing) has since shipped on top of it — see `SITEMAP.md` for the new page structure, `SCREENSHOTS_AND_INFO_NEEDED.md` for what's still outstanding, and `QA_REPORT.md` for verification results. No claims flagged ❌ here were reintroduced; the Company page's positioning copy was additionally updated to lead with Syria/Arabic-first framing instead of "Middle East and beyond," consistent with §0 of this audit.


Generated from the current live codebase (`master` branch) prior to any redesign work, per the audit-first requirement. Columns match the requested format: **Current claim | Page | Confirmed | Evidence required | Remove | Replacement wording**.

Legend: ✅ Confirmed true (per known-true product facts) · ⚠️ Evidence required (business must confirm before publishing) · ❌ Remove (matches the banned-claims list or is otherwise unsupportable)

---

## 0. Critical structural finding — read first

The single biggest issue is not a list of individual bad claims — it's that **the current site describes a different company than the one described in the brief.**

- The confirmed source of truth says Wathiq is "primarily focused on the Syrian market."
- The live site never says "Syria" in any customer-facing copy except one line on the Partnership page. Everywhere else — Hero, About, FAQ, meta description, footer tagline — it describes a **UK-registered company** ("Wathiq Digital Ltd," 71-75 Shelton Street, London) serving **"the Middle East and North Africa — including Saudi Arabia, UAE, Egypt, Jordan, Iraq, and the wider GCC."** Syria is not in that list.
- The one confirmed, true, differentiating number Wathiq has — **140 supported ePassports** — appears **nowhere** in the current copy. Meanwhile the site is full of unverified/banned claims (SOC 2, ICO, eIDAS, GDPR badges, biometrics, liveness, AML/KYC, sandbox, SDKs, 99.9% uptime, fabricated case studies with dollar figures).

Net effect: this isn't primarily a wording problem, it's a positioning problem. Before any copy rewrite, I need to know: **is "Wathiq Digital Ltd," UK-registered, London-addressed, a real legal entity that should stay in Company/Legal pages (with Syria as the market focus, not the registration jurisdiction)? Or is that entire entity/address fabricated and needs to be replaced with real company/legal details?** This affects Company, Contact, Privacy, Terms, and footer on every page — see questions at the end.

---

## 1. Claims to remove (match the banned-claims list exactly) — ❌

| Current claim | Page(s) | Confirmed | Evidence required | Remove | Replacement wording |
|---|---|---|---|---|---|
| "GDPR Compliant" (unqualified badge) | Homepage meta, SecurityCompliance section, TrustedBy badges | No | — | ❌ | Remove badge. If legal counsel confirms specific GDPR alignment measures, state them factually (e.g. named measures), never the bare badge. |
| "ICO Registered" | Homepage meta, SecurityCompliance, TrustedBy, About | No | — | ❌ | Remove unless registration number can be shown. |
| "eIDAS Compliant" | SecurityCompliance, TrustedBy | No | — | ❌ | Remove. |
| "SOC 2 Type II" | SecurityCompliance, TrustedBy | No | — | ❌ | Remove unless a report/auditor can be named. |
| "Zero-knowledge architecture — we cannot read your data" | SecurityCompliance | No | — | ❌ | Remove; describe actual access-control model instead, factually. |
| "EU/UK data residency options available" | SecurityCompliance | No | — | ❌ | Remove unless hosting locations are confirmed; then state actual location(s). |
| "Penetration tested annually by independent third parties" | SecurityCompliance | No | — | ❌ | Remove unless a pen-test cadence/vendor is confirmed. |
| "RESTful API" / "REST API" | HowItWorks, FAQ | No | — | ❌ | Say "API" only, unless docs confirm REST. |
| "Pre-built SDKs for all major languages" / "SDKs" | HowItWorks, FAQ | No — contradicts confirmed "no mobile SDK" | — | ❌ | Remove entirely. Do not show SDK logos/download buttons anywhere. |
| "No-code configuration dashboard" / "rules engine" / "risk thresholds" | HowItWorks | No | — | ❌ | Remove; dashboard section may only list functions confirmed to exist (see §3 below). |
| "Full sandbox environment" / "sandbox access" | HowItWorks, FAQ | No | — | ❌ | Remove. |
| "Average integration time: under 48 hours" / "live within 24–48 hours" | HowItWorks, FAQ | No | — | ❌ | Remove; do not promise a specific integration time. |
| "99.9% Uptime Reliability" | About stats, HowItWorks | No | — | ❌ | Remove unless an SLA document exists. |
| "24/7 Expert Support" / "24/7 monitoring" | Industries stats, FAQ | No | — | ❌ | Remove unless support hours are confirmed (site elsewhere lists "Sun–Thu, 9AM–5PM," which contradicts 24/7). |
| "50+ Enterprise Partners" | About stats, Industries stats, TrustedBy | No | — | ❌ | Remove unless real partner count is confirmed and nameable. |
| "5+ Years of Innovation" | About stats | No | — | ❌ | Remove unless founding year is confirmed; if so, state the year, not a rounded age claim. |
| "Technology... handling millions of verification events" | Careers | No | — | ❌ | Remove or replace with real volume once confirmed. |
| Fraud Blocked / "Risk score: Low" / "Trust Score: 98%" (hero floating cards) | Hero | No | — | ❌ | Replace hero product visual with the 5-stage real workflow from the brief (initiate → mobile journey → result → dashboard → webhook), fictional sample data only, no risk/trust/fraud outputs. |
| Case Management tab, "flagged cases," full audit trail workflow | ProductPreview | No | — | ❌ | Remove unless dashboard genuinely has case management. |
| Liveness detection / anti-spoofing (multiple: workflow step, capability chip, FAQ) | ProductPreview, FAQ | No | — | ❌ | Remove entirely. |
| "KYC" / "AML" / "eKYC" badges and case fields | ProductPreview, FAQ, Solutions | No | — | ❌ | Remove entirely. |
| "Sanctions & PEP Check — Worldcheck · Dow Jones" | ProductPreview | No — also names unverified third-party vendors | — | ❌ | Remove entirely; do not name any screening vendor without a confirmed partnership. |
| "ePassport & national eID chip reading," "ICAO 9303 · NFC / eMRTD," "Chip authentic & verified" | ProductPreview | No — explicitly barred unless tech team confirms | — | ❌ | Remove unless technical team confirms NFC/ICAO 9303/eMRTD support. Describe only the confirmed verification flow. |
| Biometric facial matching / "Biometric Integration Concepts" / behavioural analysis / risk scoring / trust scores | Solutions, FAQ, ProductPreview | No | — | ❌ | Remove. |
| "Business Verification" / "Partner Due Diligence" / "Business Identity Verification" | Solutions, Pricing, Footer | No | — | ❌ | Remove as a product pillar; footer link to `/solutions#business` should be deleted. |
| "Identity Lifecycle Management" / "Multi-Factor Authentication" | Solutions | No | — | ❌ | Remove. |
| Pricing tiers: Startup / Growth / Enterprise, "Unlimited verifications," "Custom SLA," "White-label options," "On-premise deployment," "no setup fees," "20% annual discount" | Pricing | No | — | ❌ | Replace entire page with the single commercial statement specified in the brief: "Pricing is based on verification requirements, expected volume and integration needs. Contact Wathiq for a tailored proposal." |
| All 3 case studies (Regional Bank GCC, Middle East Marketplace, National Government Agency) — fraud-reduction %, dollar savings, citizen-onboarding counts | Case Studies | No — anonymous, unattributed | — | ❌ | Remove entire page/section until a real, approved, attributable case study exists. |
| "All systems operational" (static) | Footer | No — not connected to a real status service | — | ❌ | Remove, or replace with a genuinely live status-monitoring integration. |
| GDPR/SOC2/ICO/eIDAS badge row | TrustedBy | No | — | ❌ | Remove entire badge row until any item is evidenced. |

---

## 2. Claims needing business confirmation before publishing — ⚠️

| Current claim | Page(s) | Confirmed | Evidence required | Notes |
|---|---|---|---|---|
| "UK-registered technology company," "Wathiq Digital Ltd," "71-75 Shelton Street, London, WC2H 9JQ" | About, Contact, Privacy, Terms, footer | ⚠️ | **Is this the real registered entity?** | Blocking question — see below. Affects every legal page. |
| Company phone "+44 7547 044020," business hours "Sun–Thu 9AM–5PM" | Contact, Careers | ⚠️ | Confirm current, correct | Also contradicts the "24/7 support" claim elsewhere (being removed). |
| "AES-256 at rest / TLS 1.3 in transit" | Security, Privacy | ⚠️ | Confirm with technical team | Not banned outright, but must be technically accurate before publishing. |
| "Role-based access control (RBAC)" | SecurityCompliance | ⚠️ | Confirm dashboard actually has RBAC | |
| Data retention periods (24 months contact data, 12 months usage data) | Privacy | ⚠️ | Confirm with legal/technical | |
| "We currently use no third-party analytics cookies" | Cookies page | ⚠️ | **Contradicted by code** — `app/layout.tsx` conditionally loads Google Analytics (`gtag.js`) when `NEXT_PUBLIC_GA_ID` is set. If GA runs in production, this statement is false today. | Needs reconciling before republishing the cookie notice either way. |
| Customer segments implied by TrustedBy marquee (Banking, Government, Higher Education, Insurance, FinTech, Healthcare, Legal, Telecom) and Industries page sub-lists | TrustedBy, Industries | ⚠️ | Confirm which sectors, if any, Wathiq genuinely serves today | Brief allows use-case content only for **approved** target sectors — need the approved list. |
| Founding year / team size / "10+ Industries Served" / "6+ Industries Served" / "100% Regional Focus" | About, Industries | ⚠️ | Confirm actual figures or remove | |
| "career@wathiq.digital" and role postings implying an active hiring pipeline | Careers | ⚠️ | Confirm roles are currently open | |
| Blog post topics implying AI fraud detection / biometric authentication / GDPR-compliance-guide content | Blog | ⚠️ | Per brief, don't publish blog articles until content is genuinely written and approved; also don't let topics imply capabilities not confirmed | |
| Social links (LinkedIn/X/Facebook) | Footer | ⚠️ | All currently point to `#` placeholders — need real URLs or removal | |
| Copyright year hardcoded "© 2025" | Footer | ⚠️ | Should auto-update to current year, not hardcoded | |

---

## 3. Confirmed claims currently missing or under-stated — ✅ (add these)

| Confirmed fact | Currently appears? | Action |
|---|---|---|
| 140 supported ePassports worldwide | **Nowhere in current copy** | Add prominently — hero stat row, coverage page. **Must confirm**: does "140" mean passports issued by 140 countries, or 140 distinct electronic-passport document types? These are different claims; brief requires resolving this before publishing. |
| Syrian market focus | Only one line, on Partnership page | Make this the lead of the positioning, not a footnote. |
| Arabic-first UI | Present as a language toggle, not positioned as a differentiator | Elevate to a full platform pillar per brief §homepage section 6. |
| API + webhooks | Present but buried under false SDK/REST/sandbox claims | Keep the real parts (API, webhooks), strip the invented parts. |
| Client dashboard | Present but shows unconfirmed features (case management, risk scores, AML queues) | Rebuild to show only confirmed dashboard functions (§3 of brief: references, status, search/filter, details, submission/result dates, webhook delivery status, team access) — **need to confirm which of these the real dashboard actually has**. |
| Mobile application | Present, but described as reading passport chips via NFC (unconfirmed) and framed as reachable via SDK | Strip chip/NFC claims unless confirmed; never call it a mobile SDK. |
| No mobile SDK | Directly contradicted by current FAQ/HowItWorks claiming "pre-built SDKs" | Use the brief's exact FAQ answer once rebuilt. |

---

## 4. Information architecture issues found (not claims, but blocking for the rebuild)

- **No bilingual URL routing.** Arabic and English render at the *same* URL via a client-side cookie/localStorage toggle (`contexts/LanguageContext.tsx`), not `/en/...` and `/ar/...`. This fails the brief's requirement for dedicated, crawlable, hreflang-linked locale URLs and needs an app-router restructure (e.g. `app/[locale]/...` with middleware), not a copy edit.
- **Primary nav omits real pages.** Header only links Home / Solutions / Industries / Security / Partnership / Contact. `/about`, `/pricing`, `/blog`, `/careers`, `/case-studies` exist but aren't in nav — inconsistent with brief's new IA (Platform / ePassport Coverage / Developers / Client Dashboard / Mobile App / Security / Company).
- **Footer links to anchors that won't exist** after content changes (e.g. `/solutions#business`, `/industries#industry-*`) — will need a full link audit once pages are restructured.

---

## Open questions (blocking — need your answers before I proceed)

1. **Legal entity**: Is "Wathiq Digital Ltd" / UK registration / the London Shelton Street address real and correct? Should it stay (as registration jurisdiction, distinct from Syrian market focus), or is it fabricated placeholder content that needs replacing with the real registered entity/address?
2. **The "140" figure**: passports issued by 140 countries, or 140 distinct electronic-passport document types?
3. **API**: Is it confirmed RESTful? Any real, publishable API documentation I can source endpoint/parameter names from (I won't invent any)?
4. **Dashboard features**: Which of the brief's candidate list (references, status, search/filter, submission/result dates, webhook delivery status, team access) does the current dashboard actually have?
5. **Security/compliance facts**: Any documented answers to the Security & Privacy questionnaire (encryption, hosting location, retention, subprocessors, access controls)? Or is that still to be gathered — in which case I'd build that page last, after everything else.
6. **Approved target sectors** for use-case content — which of financial/remittance, telecom, education, NGOs, recruitment, travel, digital platforms (if any) does Wathiq genuinely serve or target today?
7. **Assets**: Do you have real (redactable) dashboard and mobile-app screenshots, or should the initial build use structural placeholders clearly marked "pending real product screenshots"?
8. **Scope/pacing**: Given the size of this brief (new IA, bilingual routing, full design system, 14 pages, legal review), do you want this done in one large pass, or phased (e.g. Phase 1: strip all ❌ claims and fix nav on the existing site now; Phase 2: new positioning/design system; Phase 3: bilingual URL architecture and full page rebuild)?
