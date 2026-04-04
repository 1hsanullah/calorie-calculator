# CalorieTest.com — Growth & SEO Task List

## Current State (March 6 – April 2, 2026)

- **Active users:** 446 (435 new)
- **Average engagement:** 1m 42s
- **Event count:** 20k
- **90-day active users:** 1.3k (↑ 18.1%)
- **Google organic traffic:** 1 user (critical problem)
- **Bing organic:** 202 users
- **Direct:** 128 users
- **DuckDuckGo:** 47 users
- **Ecosia:** 23 users
- **Yahoo:** 19 users
- **ChatGPT referral:** 17 users

---

## Priority 1: Fix Google Visibility (Critical)

The site ranks on Bing, DuckDuckGo, Yahoo, and Ecosia but is almost completely invisible on Google. Google accounts for roughly 90% of global search traffic, meaning the site is missing the vast majority of potential visitors. This is the single highest-impact problem to solve.

### Technical audit checklist

- [ ] Log into Google Search Console and check for manual actions or security issues
- [ ] Verify that the sitemap.xml is submitted and all key pages are listed
- [ ] Search `site:calorietest.com` on Google to confirm how many pages are actually indexed
- [ ] Check for accidental `noindex` meta tags or `Disallow` rules in robots.txt that might block Googlebot specifically
- [ ] Ensure canonical tags are correctly set on every page (no self-referencing issues or duplicates)
- [ ] Run a Lighthouse audit and fix any critical performance, accessibility, or SEO flags
- [ ] Confirm that server-side rendering or static generation is working properly for Googlebot (Next.js/Vercel can sometimes serve JavaScript-heavy pages that Googlebot struggles with — test with Google's URL Inspection tool)
- [ ] Check that all pages return proper 200 status codes and there are no redirect chains
- [ ] Verify structured data / schema markup is present and valid (use Google's Rich Results Test)
- [ ] Ensure the site has a clean Core Web Vitals score (LCP, FID/INP, CLS) in Google Search Console

---

## Priority 2: Build Backlinks

The site currently has near-zero referring domains. Calculator.net has thousands of backlinks accumulated over 20+ years. Google weighs backlinks heavily when deciding rankings, and no amount of on-page SEO will compensate for having none.

### Backlink building tasks

- [ ] Create a list of 50 fitness/nutrition/health blogs that accept guest posts
- [ ] Write and pitch 2 guest posts per month with natural links back to CalorieTest
- [ ] Find "best calorie calculator" and "best TDEE calculator" roundup articles and reach out to the authors requesting inclusion
- [ ] Identify broken links on health/fitness resource pages (using tools like Ahrefs or Check My Links) and offer CalorieTest as a replacement
- [ ] Create a genuinely useful, shareable asset (e.g. an original infographic on "How Your Calorie Needs Change By Decade" or a downloadable PDF meal plan template) that people would naturally want to link to
- [ ] Engage authentically on Reddit (r/fitness, r/loseit, r/nutrition, r/bodyweightfitness) — provide value first, link only when genuinely helpful and permitted
- [ ] Submit the site to relevant web directories and health tool aggregators
- [ ] Reach out to fitness YouTubers and bloggers who review online tools and offer CalorieTest for review
- [ ] Monitor ChatGPT referral traffic (already 17 users) — ensure the site is well-described in your metadata so AI tools continue to recommend it

---

## Priority 3: Content Strategy — Go Deep on Long-Tail Keywords

Competing for "calorie calculator" directly is unrealistic in the short term. The sites holding those positions have institutional-level domain authority (Mayo Clinic, Healthline, NASM). The strategy is to rank for hundreds of specific, lower-competition queries that collectively drive significant traffic.

### Blog articles to write (aim for 2–4 per month)

- [ ] "How Many Calories Should a Teenager Eat?"
- [ ] "Calorie Needs While Breastfeeding: A Complete Guide"
- [ ] "How to Calculate Calories for Bodybuilding: Bulking vs Cutting"
- [ ] "Maintenance Calories After Dieting: How to Reverse Diet Safely"
- [ ] "Calorie Calculator for Couples: How to Eat Together With Different Goals"
- [ ] "Why Your Calorie Calculator Results Feel Wrong (And How to Fix It)"
- [ ] "Sedentary vs Lightly Active: Which Activity Level Should You Choose?"
- [ ] "How to Lose 20 Pounds: A Realistic Calorie-Based Timeline"
- [ ] "The Science of Metabolic Adaptation: Why Your Deficit Stops Working"
- [ ] "Calorie Needs for Shift Workers and Irregular Schedules"
- [ ] "Calorie Cycling: Should You Eat More on Training Days?"
- [ ] "How to Calculate Calories for Weight Loss After 40"
- [ ] "TDEE vs BMR: What's the Difference and Which Should You Track?"
- [ ] "How to Count Calories Without Losing Your Mind: A Practical Guide"
- [ ] "Calorie Needs During Menopause: What Changes and Why"

Each article should be 1,500–2,500 words, include internal links to relevant calculators, and target a specific long-tail keyword cluster.

### Content structure rules

- Every article links to at least 2 CalorieTest calculators
- Every calculator page links to at least 2 relevant articles
- Use proper heading hierarchy (H1 → H2 → H3) with keywords in H2s
- Include a FAQ section with schema markup on every article
- Add author bio/credentials to build E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)

---

## Priority 4: Build More Calculators

Every new calculator page is a new entry point from search. The fitness/nutrition calculator space has dozens of tool-specific keywords that each get thousands of monthly searches.

### New calculators to build

- [ ] **Protein Intake Calculator** — "how much protein do I need" gets massive search volume
- [ ] **Macro Calculator** — standalone macro split tool (protein/carbs/fat grams)
- [ ] **Water Intake Calculator** — simple but high search volume
- [ ] **Intermittent Fasting Calculator** — trending topic, limited good tools exist
- [ ] **Pregnancy Calorie Calculator** — underserved niche with dedicated audience
- [ ] **Walking Calorie Burn Calculator** — very high search volume, low competition
- [ ] **Running Calorie Burn Calculator** — complements walking calculator
- [ ] **One Rep Max Calculator** — popular with gym-goers
- [ ] **Body Recomposition Calculator** — growing search interest
- [ ] **Bulking Calorie Calculator** — dedicated page for muscle gain audience
- [ ] **Ideal Body Weight Calculator** — simple to build, good keyword target
- [ ] **TDEE Calculator** (dedicated page) — "TDEE calculator" is a high-volume keyword distinct from "calorie calculator"

Each calculator should have its own dedicated page with 500+ words of educational content below the tool explaining the methodology.

---

## Priority 5: Leverage the Calendar Feature as a Differentiator

The weight-loss-by-date calendar feature is something that calculator.net and most competitors do not offer. This is a genuine unique selling point.

### Tasks

- [ ] Make the calendar feature more prominent in the UI and marketing copy
- [ ] Write a dedicated article: "Set a Weight Loss Deadline: How Our Calendar Calculator Works"
- [ ] Use this feature as the hook in all outreach and guest posts ("the only calorie calculator that lets you set a target date")
- [ ] Create a short demo video or GIF showing the calendar in action for social media
- [ ] Add this differentiator to the homepage hero section

---

## Priority 6: Technical SEO Enhancements

### Schema markup

- [ ] Add `SoftwareApplication` schema to all calculator pages
- [ ] Add `FAQPage` schema to all pages with FAQ sections
- [ ] Add `Article` schema to all blog posts
- [ ] Add `BreadcrumbList` schema for site navigation
- [ ] Add `Organization` schema to the homepage
- [ ] Validate all schema with Google's Rich Results Test

### Performance

- [ ] Achieve a Lighthouse performance score of 95+ on all pages
- [ ] Optimise all images (WebP format, proper sizing, lazy loading)
- [ ] Ensure fonts are preloaded and don't cause layout shifts
- [ ] Minimize JavaScript bundle size — calculators should work instantly without loading delays

### On-page SEO

- [ ] Audit every page's title tag — make sure primary keyword is near the front
- [ ] Write unique, compelling meta descriptions for every page (include a call to action)
- [ ] Add alt text to all images
- [ ] Ensure internal linking structure connects every page to at least 3 others
- [ ] Add "last updated" dates to articles and calculator pages (signals freshness to Google)
- [ ] Create a comprehensive HTML sitemap page for users

---

## Priority 7: Social Media & Brand Awareness

Social signals don't directly boost rankings but drive direct traffic, brand searches, and occasionally backlinks.

### Tasks

- [ ] Create TikTok/Instagram Reels showing the calculator in action (screen recordings with voiceover)
- [ ] Post "I calculated my calories for 30 days — here's what happened" style content
- [ ] Create a Pinterest presence (infographics on calorie content, meal plans, calculator results)
- [ ] Share new articles and calculators on Twitter/X with relevant fitness hashtags
- [ ] Engage in fitness communities on Discord servers and Facebook groups (provide value, don't spam)
- [ ] Consider a free "calorie cheat sheet" PDF as a lead magnet to build an email list

---

## Priority 8: Analytics & Monitoring

### Ongoing tracking tasks

- [ ] Set up Google Search Console keyword tracking — monitor which queries are gaining impressions
- [ ] Track keyword rankings weekly for top 20 target keywords using a free tool (e.g. Google Search Console, Ubersuggest)
- [ ] Monitor Core Web Vitals monthly
- [ ] Set up goal tracking in GA4 for calculator completions (measure engagement quality, not just visits)
- [ ] Review top-performing pages monthly and double down on what's working
- [ ] Track backlink acquisition using Ahrefs free webmaster tools or Google Search Console's links report

---

## Realistic Timeline & Expectations

| Milestone | Timeframe | What it looks like |
|---|---|---|
| Fix Google indexing issues | Week 1–2 | All pages indexed, no technical blockers |
| First 10 backlinks acquired | Month 1–3 | Guest posts, directory listings, outreach |
| 10 new blog articles published | Month 1–5 | Long-tail traffic starts appearing |
| 5 new calculators launched | Month 2–6 | More keyword entry points |
| First page of Google for a long-tail keyword | Month 3–6 | Likely a specific query like "maintenance calorie calculator" |
| 1,000+ monthly users from Google | Month 6–12 | Compounding authority from content + backlinks |
| Competing for mid-tier keywords | Month 12–24 | "TDEE calculator", "macro calculator" etc. |
| Realistic shot at top results for "calorie calculator" | 2–4 years | Requires sustained effort and significant backlink profile |

The path to #1 for "calorie calculator" is a multi-year journey. The immediate goal should be owning the long-tail — hundreds of specific queries that collectively rival or exceed the traffic from a single head keyword.
