# CalorieTest.com — Manual Task List

Tasks that require external tools, accounts, or outreach — not code changes.

---

## Do Immediately (One-Time Setup)

- [ ] **Submit sitemap to Google Search Console**
  - Go to GSC → Sitemaps → submit `https://www.calorietest.com/sitemap.xml`
  - Verify it shows all calculator pages and article pages with no errors

- [ ] **Request indexing for key pages via GSC URL Inspection tool**
  - `https://www.calorietest.com/`
  - `https://www.calorietest.com/calorie-calculator`
  - `https://www.calorietest.com/weight-loss-calculator`
  - `https://www.calorietest.com/calorie-deficit-calculator`
  - `https://www.calorietest.com/maintenance-calorie-calculator`
  - `https://www.calorietest.com/bmr-calculator`
  - `https://www.calorietest.com/bmi-calculator`
  - `https://www.calorietest.com/body-fat-percentage-calculator`

- [ ] **Check for manual actions or security issues in GSC**
  - GSC → Security & Manual Actions → Manual Actions
  - If any manual action exists, this is why Google isn't indexing the site

- [ ] **Run `site:calorietest.com` search on Google**
  - Check how many pages are actually indexed right now
  - If fewer than 5 pages show, there's likely a deeper indexing problem

---

## Audits & Validation (Do Soon)

- [ ] **Run Lighthouse audit** on all calculator pages — target 95+ performance score
  - Open Chrome DevTools → Lighthouse → run on mobile + desktop
  - Key pages to test: `/calorie-calculator`, `/bmr-calculator`, `/bmi-calculator`

- [ ] **Validate schema markup with Google Rich Results Test**
  - Go to: https://search.google.com/test/rich-results
  - Test each calculator page for FAQPage and BreadcrumbList schema
  - Test homepage for Organization schema

- [ ] **Check Core Web Vitals in GSC**
  - GSC → Core Web Vitals → check LCP, INP, CLS for both mobile and desktop
  - Fix any pages flagged as "Poor"

- [ ] **Test all pages with Google URL Inspection tool**
  - Confirm Google can render the pages correctly (not blocked by JS issues)
  - Check "View crawled page" to see what Googlebot actually sees

---

## Ongoing — Content (2–4 per month)

Blog articles to write targeting long-tail keywords. Each must be 1,500–2,500 words and link to at least 2 CalorieTest calculators.

- [ ] "How Many Calories Should a Teenager Eat?"
- [ ] "Calorie Needs While Breastfeeding: A Complete Guide"
- [ ] "How to Calculate Calories for Bodybuilding: Bulking vs Cutting"
- [ ] "Maintenance Calories After Dieting: How to Reverse Diet Safely"
- [ ] "Sedentary vs Lightly Active: Which Activity Level Should You Choose?"
- [ ] "How to Lose 20 Pounds: A Realistic Calorie-Based Timeline"
- [ ] "TDEE vs BMR: What's the Difference and Which Should You Track?"
- [ ] "The Science of Metabolic Adaptation: Why Your Deficit Stops Working"
- [ ] "How to Count Calories Without Losing Your Mind: A Practical Guide"
- [ ] "Calorie Cycling: Should You Eat More on Training Days?"
- [ ] "Set a Weight Loss Deadline: How Our Calendar Calculator Works" ← use this to promote the date feature USP
- [ ] "Calorie Needs During Menopause: What Changes and Why"
- [ ] "How to Calculate Calories for Weight Loss After 40"
- [ ] "Calorie Calculator for Couples: How to Eat Together With Different Goals"
- [ ] "Calorie Needs for Shift Workers and Irregular Schedules"

---

## Ongoing — Backlinks

- [ ] Find "best calorie calculator" and "best TDEE calculator" roundup articles and request inclusion
- [ ] Identify 50 fitness/nutrition blogs that accept guest posts — pitch 2 per month with natural links back
- [ ] Find broken links on health/fitness resource pages (use Ahrefs or Check My Links browser extension) and offer CalorieTest as a replacement
- [ ] Submit to relevant web directories and health tool aggregators
- [ ] Engage on Reddit (r/fitness, r/loseit, r/nutrition) — provide value first, link only when genuinely helpful
- [ ] Reach out to fitness YouTubers/bloggers who review online tools
- [ ] Create a shareable asset (infographic or PDF) that others would naturally link to

---

## Ongoing — Analytics & Monitoring

- [ ] Set up goal tracking in GA4 for calculator completions (already have custom events — just need conversion goals configured)
- [ ] Monitor Core Web Vitals monthly in GSC
- [ ] Track keyword rankings weekly for top 20 target keywords (use GSC Performance report or Ubersuggest free)
- [ ] Review top-performing pages monthly — double down on what's working
- [ ] Monitor ChatGPT referral traffic in GA4 — already getting 17 users/month from it

---

## Social Media (Lower Priority)

- [ ] Create TikTok/Instagram Reels showing the calculator in action
- [ ] Post weight loss journey content ("I calculated my calories for 30 days — here's what happened")
- [ ] Share new articles on Twitter/X with fitness hashtags
- [ ] Create a Pinterest presence with infographics
- [ ] Consider a free "calorie cheat sheet" PDF as lead magnet for email list
