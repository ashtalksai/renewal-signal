# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Design >> Landing Page Responsiveness >> landing page renders on mobile (375x667)
- Location: tests/e2e/responsive.spec.ts:12:11

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('navigation')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('navigation')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e3]:
      - link "Renewal IQ" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]:
          - generic [ref=e6]: Renewal
          - generic [ref=e7]: IQ
      - button "Toggle menu" [ref=e8]:
        - img [ref=e9]
  - main [ref=e10]:
    - generic [ref=e14]:
      - generic [ref=e15]:
        - heading "Real-time license data for B2B sales teams" [level=1] [ref=e16]
        - paragraph [ref=e17]: See who's renewing before your competitors know they exist. Government-fed license database updated daily from all 50 states.
      - generic [ref=e18]:
        - link "Start Free Trial" [ref=e19] [cursor=pointer]:
          - /url: /signup
          - button "Start Free Trial" [ref=e20]
        - link "View Pricing" [ref=e21] [cursor=pointer]:
          - /url: /pricing
          - button "View Pricing" [ref=e22]
      - paragraph [ref=e23]: 14-day free trial · No credit card required · Cancel anytime
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Your directory is 4 months old. State boards update daily." [level=2] [ref=e27]
        - paragraph [ref=e28]: Traditional sales intelligence tools rely on outdated data. By the time you get a lead, the license has already expired.
      - generic [ref=e29]:
        - generic [ref=e31]:
          - img [ref=e33]
          - heading "Data Freshness Gap" [level=3] [ref=e36]
          - paragraph [ref=e37]: Most databases update quarterly. State licensing boards update daily. That's a 90-day blind spot.
        - generic [ref=e39]:
          - img [ref=e41]
          - heading "Missed Renewal Windows" [level=3] [ref=e43]
          - paragraph [ref=e44]: 67% of professionals renew within 30 days of expiration. If you're not tracking renewals, you're too late.
        - generic [ref=e46]:
          - img [ref=e48]
          - heading "Fragmented Sources" [level=3] [ref=e52]
          - paragraph [ref=e53]: 50 state boards, 15+ professions, different update schedules. Manually tracking this is impossible.
    - generic [ref=e55]:
      - generic [ref=e56]:
        - generic [ref=e57]: How RenewalIQ Works
        - heading "Built for sales reps who need data before morning standup" [level=2] [ref=e58]
        - paragraph [ref=e59]: No marketing fluff. No consumer-grade UI. Just fast, accurate license data in a Bloomberg terminal-style interface.
      - generic [ref=e60]:
        - generic [ref=e62]:
          - img [ref=e64]
          - heading "Real-time Data Pipeline" [level=3] [ref=e67]
          - paragraph [ref=e68]: Direct feeds from all 50 state licensing boards. Updated daily, not quarterly.
        - generic [ref=e70]:
          - img [ref=e72]
          - heading "Renewal Timeline Visualization" [level=3] [ref=e75]
          - paragraph [ref=e76]: See exactly when each professional's license renews. Filter by 30/60/90 day windows.
        - generic [ref=e78]:
          - img [ref=e80]
          - heading "CRM Sync" [level=3] [ref=e83]
          - paragraph [ref=e84]: Push leads directly to Salesforce or HubSpot. Auto-sync renewal alerts to your pipeline.
      - generic [ref=e87]:
        - generic [ref=e88]:
          - heading "Renewal Timeline" [level=3] [ref=e89]
          - paragraph [ref=e90]: Visual indicator showing renewal status at a glance
        - generic [ref=e92]:
          - generic [ref=e94]: Today
          - generic [ref=e100]:
            - generic [ref=e101]: Renewal Window
            - generic [ref=e102]:
              - generic [ref=e103]: Active (>90 days)
              - generic [ref=e104]: Warning (30-90 days)
              - generic [ref=e105]: Critical (<30 days)
              - generic [ref=e106]: Expired
    - generic [ref=e108]:
      - generic [ref=e109]:
        - heading "Everything you need to find renewing licenses" [level=2] [ref=e110]
        - paragraph [ref=e111]: Built for power users who need speed, accuracy, and actionable data.
      - generic [ref=e112]:
        - generic [ref=e114]:
          - img [ref=e116]
          - heading "Advanced Search" [level=3] [ref=e119]
          - paragraph [ref=e120]: Search by name, license number, state, profession, specialty, or renewal date. Filter by status and renewal window.
        - generic [ref=e122]:
          - img [ref=e124]
          - heading "Renewal Alerts" [level=3] [ref=e127]
          - paragraph [ref=e128]: Get notified when licenses in your target segment are approaching renewal. Never miss a timing window again.
        - generic [ref=e130]:
          - img [ref=e132]
          - heading "CSV Export" [level=3] [ref=e135]
          - paragraph [ref=e136]: Export filtered results to CSV. Bulk selection support. Auto-sync to CRM on Professional tier.
        - generic [ref=e138]:
          - img [ref=e140]
          - heading "Government-Fed Data" [level=3] [ref=e142]
          - paragraph [ref=e143]: Direct feeds from state licensing boards. No scraping, no third-party aggregators. Official data only.
        - generic [ref=e145]:
          - img [ref=e147]
          - heading "Real-time Updates" [level=3] [ref=e149]
          - paragraph [ref=e150]: Daily updates from all 50 states. Data freshness you can verify, not marketing claims.
        - generic [ref=e152]:
          - img [ref=e154]
          - heading "15+ Professions" [level=3] [ref=e159]
          - paragraph [ref=e160]: Insurance agents, contractors, healthcare professionals, financial advisors, and more.
    - generic [ref=e162]:
      - heading "Three steps to perfectly-timed leads" [level=2] [ref=e164]
      - generic [ref=e165]:
        - generic [ref=e166]:
          - img [ref=e168]
          - generic [ref=e171]:
            - heading "Search" [level=3] [ref=e172]
            - paragraph [ref=e173]: Filter by profession, state, renewal window, and license status. Find your ideal prospects.
        - generic [ref=e174]:
          - img [ref=e176]
          - generic [ref=e178]:
            - heading "Export" [level=3] [ref=e179]
            - paragraph [ref=e180]: Download CSV or auto-sync to CRM. Get contact details and renewal dates instantly.
        - generic [ref=e181]:
          - img [ref=e183]
          - generic [ref=e186]:
            - heading "Close" [level=3] [ref=e187]
            - paragraph [ref=e188]: Reach out at the perfect time. Your prospects are renewing— they need your solution now.
      - link "Start Your Free Trial" [ref=e190] [cursor=pointer]:
        - /url: /signup
        - button "Start Your Free Trial" [ref=e191]
    - generic [ref=e193]:
      - generic [ref=e194]:
        - heading "Simple pricing for sales teams" [level=2] [ref=e195]
        - paragraph [ref=e196]: 14-day free trial. No credit card required.
      - generic [ref=e197]:
        - generic [ref=e198]:
          - generic [ref=e199]:
            - heading "Explorer" [level=3] [ref=e200]
            - generic [ref=e201]: $99/month
            - paragraph [ref=e202]: For individual sales reps getting started
          - generic [ref=e203]:
            - list [ref=e204]:
              - listitem [ref=e205]:
                - img [ref=e206]
                - generic [ref=e208]: 100 searches/month
              - listitem [ref=e209]:
                - img [ref=e210]
                - generic [ref=e212]: 3 states
              - listitem [ref=e213]:
                - img [ref=e214]
                - generic [ref=e216]: CSV export
              - listitem [ref=e217]:
                - img [ref=e218]
                - generic [ref=e220]: Email support
            - link "Start Free Trial" [ref=e221] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e222]
        - generic [ref=e223]:
          - generic [ref=e224]: Most Popular
          - generic [ref=e225]:
            - heading "Professional" [level=3] [ref=e226]
            - generic [ref=e227]: $499/month
            - paragraph [ref=e228]: For growing sales teams
          - generic [ref=e229]:
            - list [ref=e230]:
              - listitem [ref=e231]:
                - img [ref=e232]
                - generic [ref=e234]: Unlimited searches
              - listitem [ref=e235]:
                - img [ref=e236]
                - generic [ref=e238]: All 50 states
              - listitem [ref=e239]:
                - img [ref=e240]
                - generic [ref=e242]: Salesforce + HubSpot sync
              - listitem [ref=e243]:
                - img [ref=e244]
                - generic [ref=e246]: Renewal alerts
              - listitem [ref=e247]:
                - img [ref=e248]
                - generic [ref=e250]: Priority email support
            - link "Start Free Trial" [ref=e251] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e252]
        - generic [ref=e253]:
          - generic [ref=e254]:
            - heading "Enterprise" [level=3] [ref=e255]
            - generic [ref=e256]: $999/month
            - paragraph [ref=e257]: For large teams with custom needs
          - generic [ref=e258]:
            - list [ref=e259]:
              - listitem [ref=e260]:
                - img [ref=e261]
                - generic [ref=e263]: Unlimited searches
              - listitem [ref=e264]:
                - img [ref=e265]
                - generic [ref=e267]: All 50 states
              - listitem [ref=e268]:
                - img [ref=e269]
                - generic [ref=e271]: Custom integrations
              - listitem [ref=e272]:
                - img [ref=e273]
                - generic [ref=e275]: Renewal alerts + SMS
              - listitem [ref=e276]:
                - img [ref=e277]
                - generic [ref=e279]: API access
              - listitem [ref=e280]:
                - img [ref=e281]
                - generic [ref=e283]: Dedicated support + SLA
            - link "Start Free Trial" [ref=e284] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e285]
      - link "View full feature comparison →" [ref=e287] [cursor=pointer]:
        - /url: /pricing
        - button "View full feature comparison →" [ref=e288]
    - generic [ref=e290]:
      - heading "Frequently asked questions" [level=2] [ref=e292]
      - generic [ref=e293]:
        - generic [ref=e296] [cursor=pointer]:
          - heading "How current is the license data?" [level=3] [ref=e297]
          - img [ref=e298]
        - generic [ref=e302] [cursor=pointer]:
          - heading "Which professions are covered?" [level=3] [ref=e303]
          - img [ref=e304]
        - generic [ref=e308] [cursor=pointer]:
          - heading "Can I export data to my CRM?" [level=3] [ref=e309]
          - img [ref=e310]
        - generic [ref=e314] [cursor=pointer]:
          - heading "What happens if a license expires?" [level=3] [ref=e315]
          - img [ref=e316]
        - generic [ref=e320] [cursor=pointer]:
          - heading "Is there a free trial?" [level=3] [ref=e321]
          - img [ref=e322]
        - generic [ref=e326] [cursor=pointer]:
          - heading "Can I cancel anytime?" [level=3] [ref=e327]
          - img [ref=e328]
    - generic [ref=e332]:
      - heading "Ready to find renewing licenses before your competitors?" [level=2] [ref=e333]
      - paragraph [ref=e334]: Join sales teams using RenewalIQ to close more deals with perfectly-timed outreach.
      - link "Start Your 14-Day Free Trial" [ref=e336] [cursor=pointer]:
        - /url: /signup
        - button "Start Your 14-Day Free Trial" [ref=e337]
      - paragraph [ref=e338]: No credit card required · Cancel anytime
  - contentinfo [ref=e339]:
    - generic [ref=e340]:
      - generic [ref=e341]:
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]: Renewal
            - generic [ref=e345]: IQ
          - paragraph [ref=e346]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e347]:
          - heading "Product" [level=3] [ref=e348]
          - list [ref=e349]:
            - listitem [ref=e350]:
              - link "Pricing" [ref=e351] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e352]:
              - link "About" [ref=e353] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e354]:
              - link "Contact" [ref=e355] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e356]:
          - heading "Legal" [level=3] [ref=e357]
          - list [ref=e358]:
            - listitem [ref=e359]:
              - link "Privacy Policy" [ref=e360] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e361]:
              - link "Terms of Service" [ref=e362] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e363]:
          - heading "Connect" [level=3] [ref=e364]
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link "Twitter" [ref=e367] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e368]:
              - link "LinkedIn" [ref=e369] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e371]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e377] [cursor=pointer]:
    - img [ref=e378]
  - alert [ref=e381]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Responsive Design', () => {
  4  |   const viewports = [
  5  |     { name: 'mobile', width: 375, height: 667 },
  6  |     { name: 'tablet', width: 768, height: 1024 },
  7  |     { name: 'desktop', width: 1280, height: 800 },
  8  |   ];
  9  | 
  10 |   test.describe('Landing Page Responsiveness', () => {
  11 |     viewports.forEach(({ name, width, height }) => {
  12 |       test(`landing page renders on ${name} (${width}x${height})`, async ({ page }) => {
  13 |         await page.setViewportSize({ width, height });
  14 |         await page.goto('/');
  15 |         
  16 |         // Check navbar is visible
> 17 |         await expect(page.getByRole('navigation')).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  18 |         
  19 |         // Check hero section is visible
  20 |         await expect(page.getByRole('heading', { name: /Real-time license data/i })).toBeVisible();
  21 |         
  22 |         // Check footer is visible
  23 |         await expect(page.getByText('©')).toBeVisible();
  24 |         
  25 |         // Take screenshot for visual verification
  26 |         await page.screenshot({ 
  27 |           path: `tests/screenshots/landing-${name}.png`,
  28 |           fullPage: true 
  29 |         });
  30 |       });
  31 |     });
  32 |   });
  33 | 
  34 |   test.describe('Pricing Page Responsiveness', () => {
  35 |     viewports.forEach(({ name, width, height }) => {
  36 |       test(`pricing page renders on ${name} (${width}x${height})`, async ({ page }) => {
  37 |         await page.setViewportSize({ width, height });
  38 |         await page.goto('/pricing');
  39 |         
  40 |         // Check pricing tiers are visible
  41 |         await expect(page.getByText('Explorer')).toBeVisible();
  42 |         await expect(page.getByText('Professional')).toBeVisible();
  43 |         await expect(page.getByText('Enterprise')).toBeVisible();
  44 |         
  45 |         // Take screenshot for visual verification
  46 |         await page.screenshot({ 
  47 |           path: `tests/screenshots/pricing-${name}.png`,
  48 |           fullPage: true 
  49 |         });
  50 |       });
  51 |     });
  52 |   });
  53 | 
  54 |   test.describe('Dashboard Responsiveness', () => {
  55 |     viewports.forEach(({ name, width, height }) => {
  56 |       test(`dashboard renders on ${name} (${width}x${height})`, async ({ page }) => {
  57 |         await page.setViewportSize({ width, height });
  58 |         await page.goto('/dashboard');
  59 |         
  60 |         // Check dashboard elements are visible
  61 |         await expect(page.getByText(/Dashboard/i)).toBeVisible();
  62 |         
  63 |         // Take screenshot for visual verification
  64 |         await page.screenshot({ 
  65 |           path: `tests/screenshots/dashboard-${name}.png`,
  66 |           fullPage: true 
  67 |         });
  68 |       });
  69 |     });
  70 |   });
  71 | 
  72 |   test('mobile menu toggle works', async ({ page }) => {
  73 |     await page.setViewportSize({ width: 375, height: 667 });
  74 |     await page.goto('/');
  75 |     
  76 |     // Check mobile menu button is visible
  77 |     const menuButton = page.getByLabel('Toggle menu');
  78 |     await expect(menuButton).toBeVisible();
  79 |     
  80 |     // Click to open menu
  81 |     await menuButton.click();
  82 |     
  83 |     // Check mobile navigation is visible
  84 |     await expect(page.getByRole('navigation').locator('a').first()).toBeVisible();
  85 |     
  86 |     // Click to close menu
  87 |     await menuButton.click();
  88 |   });
  89 | });
  90 | 
```