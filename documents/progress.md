# CalorieTest.com — Dev Progress Log

---

## Completed (Session: April 3–4, 2026)

### Critical SEO Bug Fixes
- [x] **Fixed canonical domain mismatch** — 6 pages (BMR, BMI, Body Fat, Calorie Deficit, Weight Loss, Maintenance) had canonical/OG URLs pointing to `https://calorietest.app/...` instead of `https://www.calorietest.com/...`. Switched to relative paths via `metadataBase`.
- [x] **Fixed OG/Twitter image URLs** — same 6 pages were referencing `calorietest.app/og-image.jpg` (which likely doesn't exist). Now use `/calorie-calculator-og.png`.
- [x] **Fixed root layout canonical** — was incorrectly pointing to `/calorie-calculator` instead of `/`.
- [x] **Set real Google Search Console verification code** — replaced placeholder with `0kRlm7uLqR3P12YdSYxgzu7SKYz09N0G4umvdHK7Uaw`. Removed duplicate `<meta>` tag.
- [x] **Fixed sitemap** — `/blog` entry changed to `/articles`; added both article URLs; excluded `/admin/*`.
- [x] **Fixed footer broken links** — `/blog` and `/blog/how-accurate-are-calorie-calculators` updated to `/articles/...`.
- [x] **Fixed React hydration error** — added `suppressHydrationWarning` to `<html>` in `app/layout.tsx` (caused by `next-themes` reordering classes on client).

### Navigation & Homepage
- [x] **Homepage grid** — added Weight Loss, Calorie Deficit, and Maintenance calculators (was only showing 4 of 7).
- [x] **Desktop nav** — added Weight Loss and Deficit links (abbreviated to fit).
- [x] **Mobile nav** — added all 3 missing calculator links.
- [x] **Footer** — added new "Body & Fitness" column with BMR, BMI, Body Fat links. Fixed Resources links.

### Schema Markup
- [x] **BreadcrumbList schema** — created `components/shared/breadcrumb-schema.tsx`; added to all 7 calculator pages.
- [x] **Organization schema** — added to homepage.
- [x] **RelatedCalculators** — replaced hardcoded 3-link sections in Calorie, BMR, BMI, and Body Fat pages with the shared `<RelatedCalculators>` component. Each page now cross-links to all 6 other calculators.

---

## Completed (Session: April 4, 2026)

### Duplicate Page Differentiation
- [x] **Weight Loss Calculator** — complete rewrite. Hero now leads with the calendar/date USP ("enter your goal weight and a target date"). Tips section replaced with 6 cards specifically about using the date feature (picking a date, checking deficit safety, recalculating, falling behind). SEO article rewritten around date-based planning psychology, the backwards-calculation algorithm, and choosing a realistic deadline.
- [x] Calorie Deficit Calculator — already sufficiently distinct (deficit math, 15-20% rule, metabolic adaptation, protein catabolism). No changes needed.

### New Calculator Pages (5 built)
- [x] **TDEE Calculator** (`/tdee-calculator`) — reuses `CalorieCalculator` with `initialGoal="maintain"`. Full page with 4-question FAQ schema, 6 tip cards explaining how to apply TDEE to different goals, and long-form SEO content on TDEE vs BMR and activity multipliers.
- [x] **Protein Intake Calculator** (`/protein-intake-calculator`) — new `ProteinCalculator` component. Inputs: weight, goal (4 options), activity. Shows daily grams, per-meal split, calories from protein, and food source equivalents. Page includes 4-question FAQ and detailed SEO content on protein for fat loss, muscle building, and timing.
- [x] **Macro Calculator** (`/macro-calculator`) — new `MacroCalculator` component. Full form matching CalorieCalculator inputs. Calculates TDEE then splits by goal (40/30/30 lose fat, 30/40/30 maintain, 30/45/25 build muscle). Visual macro bar chart in results. Page with full FAQ and SEO content on IIFYM approach.
- [x] **Water Intake Calculator** (`/water-intake-calculator`) — new `WaterIntakeCalculator` component. Inputs: weight, exercise minutes, climate. 33ml/kg base + exercise and climate adjustments. Results in litres, oz, cups, glasses, and hourly target. Includes daily schedule card. Full page with 4-question FAQ and detailed SEO content on hydration science.
- [x] **Ideal Body Weight Calculator** (`/ideal-body-weight-calculator`) — new `IdealBodyWeightCalculator` component. Calculates all 4 clinical formulas (Devine, Robinson, Miller, Hamwi) plus healthy BMI range. Shows average and formula breakdown. Full page with 4-question FAQ and SEO content on IBW limitations and interpretation.

### Infrastructure
- [x] Updated `components/related-calculators.tsx` — added all 5 new calculators to the registry (now 12 total). Updated Weight Loss Calculator description to mention the date feature.
- [x] Updated `next-sitemap.config.js` — added all 5 new calculator paths with priority 0.8–0.9.
- [x] Build verified — 21 pages generated, zero errors.

---

## Up Next — Code Tasks

### High Priority
- [x] ~~Differentiate the duplicate calculator pages~~ — Done (see April 4 session above)
- [x] ~~Build new calculator pages~~ — Done (TDEE, Protein, Macro, Water, Ideal Body Weight)

### Medium Priority
- [x] **Promote the calendar/date feature** — added a callout badge on the homepage hero linking to the Weight Loss Calculator and explaining the target-date USP.
- [ ] **Write blog articles** — 2–4 per month targeting long-tail keywords (see `task.md` Priority 3 list). Each must link to at least 2 calculators. No m-dashes in content.
- [x] **Add `SoftwareApplication` schema** — created `components/shared/software-application-schema.tsx`; added to all 12 calculator pages with name, description, URL, free offer, and rating.
- [x] **Visible FAQ sections** — added FAQ rendering (`faqSchema.mainEntity.map`) to BMR, BMI, and Body Fat pages. Also removed unused `ChevronDown/ChevronUp/Scale` imports from those files.
- [x] **Add "last updated" dates** — added `Last updated: April 2026` text above the calculator h2 on all 12 calculator pages.
- [x] **HTML sitemap page** — created `/sitemap-page` at `app/sitemap-page/page.tsx`. Lists all 12 calculators, 2 articles, and general pages. Added link to footer Resources section.

### Manual / Non-Code Tasks
- [ ] Submit sitemap in Google Search Console: `https://www.calorietest.com/sitemap.xml`
- [ ] Use Google URL Inspection tool to request indexing of all 7 calculator pages
- [ ] Run Lighthouse audit on all pages — target 95+ performance score
- [ ] Validate schema with Google Rich Results Test
- [ ] Set up goal tracking in GA4 for calculator completions
- [ ] Backlink outreach (see `task.md` Priority 2)

---

## Notes

### Duplicate Calculator Pages Discussion (April 4, 2026)
The Calorie Calculator, Weight Loss Calculator, and Calorie Deficit Calculator all use the same underlying component. This is intentional SEO targeting of three distinct keyword clusters with different search intent:
- "calorie calculator" = general information intent
- "weight loss calculator" = planning/goal-setting intent
- "calorie deficit calculator" = mechanistic/science-of-deficit intent

**Risk**: Google may see them as thin duplicates and rank only one, suppressing the others (keyword cannibalization).

**Decision**: Keep all three pages but differentiate the SEO content meaningfully so each page addresses its specific user intent rather than giving the same generic weight-loss tips.
