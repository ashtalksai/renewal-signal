# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: landing.spec.ts >> Landing Page >> navigation links work
- Location: tests/e2e/landing.spec.ts:35:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Pricing/i }) resolved to 3 elements:
    1) <a href="/pricing" class="text-sm font-medium transition-colors hover:text-primary text-muted-foreground">Pricing</a> aka getByRole('navigation').getByRole('link', { name: 'Pricing' })
    2) <a href="/pricing">…</a> aka getByRole('link', { name: 'View Pricing' })
    3) <a href="/pricing" class="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a> aka getByRole('contentinfo').getByRole('link', { name: 'Pricing' })

Call log:
  - waiting for getByRole('link', { name: /Pricing/i })

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
      - navigation [ref=e8]:
        - link "Home" [ref=e9] [cursor=pointer]:
          - /url: /
        - link "Pricing" [ref=e10] [cursor=pointer]:
          - /url: /pricing
        - link "About" [ref=e11] [cursor=pointer]:
          - /url: /about
        - link "Contact" [ref=e12] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e13]:
        - link "Log in" [ref=e14] [cursor=pointer]:
          - /url: /login
          - button "Log in" [ref=e15]
        - link "Start Free Trial" [ref=e16] [cursor=pointer]:
          - /url: /signup
          - button "Start Free Trial" [ref=e17]
  - main [ref=e18]:
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "Real-time license data for B2B sales teams" [level=1] [ref=e24]
        - paragraph [ref=e25]: See who's renewing before your competitors know they exist. Government-fed license database updated daily from all 50 states.
      - generic [ref=e26]:
        - link "Start Free Trial" [ref=e27] [cursor=pointer]:
          - /url: /signup
          - button "Start Free Trial" [ref=e28]
        - link "View Pricing" [ref=e29] [cursor=pointer]:
          - /url: /pricing
          - button "View Pricing" [ref=e30]
      - paragraph [ref=e31]: 14-day free trial · No credit card required · Cancel anytime
    - generic [ref=e33]:
      - generic [ref=e34]:
        - heading "Your directory is 4 months old. State boards update daily." [level=2] [ref=e35]
        - paragraph [ref=e36]: Traditional sales intelligence tools rely on outdated data. By the time you get a lead, the license has already expired.
      - generic [ref=e37]:
        - generic [ref=e39]:
          - img [ref=e41]
          - heading "Data Freshness Gap" [level=3] [ref=e44]
          - paragraph [ref=e45]: Most databases update quarterly. State licensing boards update daily. That's a 90-day blind spot.
        - generic [ref=e47]:
          - img [ref=e49]
          - heading "Missed Renewal Windows" [level=3] [ref=e51]
          - paragraph [ref=e52]: 67% of professionals renew within 30 days of expiration. If you're not tracking renewals, you're too late.
        - generic [ref=e54]:
          - img [ref=e56]
          - heading "Fragmented Sources" [level=3] [ref=e60]
          - paragraph [ref=e61]: 50 state boards, 15+ professions, different update schedules. Manually tracking this is impossible.
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]: How RenewalIQ Works
        - heading "Built for sales reps who need data before morning standup" [level=2] [ref=e66]
        - paragraph [ref=e67]: No marketing fluff. No consumer-grade UI. Just fast, accurate license data in a Bloomberg terminal-style interface.
      - generic [ref=e68]:
        - generic [ref=e70]:
          - img [ref=e72]
          - heading "Real-time Data Pipeline" [level=3] [ref=e75]
          - paragraph [ref=e76]: Direct feeds from all 50 state licensing boards. Updated daily, not quarterly.
        - generic [ref=e78]:
          - img [ref=e80]
          - heading "Renewal Timeline Visualization" [level=3] [ref=e83]
          - paragraph [ref=e84]: See exactly when each professional's license renews. Filter by 30/60/90 day windows.
        - generic [ref=e86]:
          - img [ref=e88]
          - heading "CRM Sync" [level=3] [ref=e91]
          - paragraph [ref=e92]: Push leads directly to Salesforce or HubSpot. Auto-sync renewal alerts to your pipeline.
      - generic [ref=e95]:
        - generic [ref=e96]:
          - heading "Renewal Timeline" [level=3] [ref=e97]
          - paragraph [ref=e98]: Visual indicator showing renewal status at a glance
        - generic [ref=e100]:
          - generic [ref=e102]: Today
          - generic [ref=e108]:
            - generic [ref=e109]: Renewal Window
            - generic [ref=e110]:
              - generic [ref=e111]: Active (>90 days)
              - generic [ref=e112]: Warning (30-90 days)
              - generic [ref=e113]: Critical (<30 days)
              - generic [ref=e114]: Expired
    - generic [ref=e116]:
      - generic [ref=e117]:
        - heading "Everything you need to find renewing licenses" [level=2] [ref=e118]
        - paragraph [ref=e119]: Built for power users who need speed, accuracy, and actionable data.
      - generic [ref=e120]:
        - generic [ref=e122]:
          - img [ref=e124]
          - heading "Advanced Search" [level=3] [ref=e127]
          - paragraph [ref=e128]: Search by name, license number, state, profession, specialty, or renewal date. Filter by status and renewal window.
        - generic [ref=e130]:
          - img [ref=e132]
          - heading "Renewal Alerts" [level=3] [ref=e135]
          - paragraph [ref=e136]: Get notified when licenses in your target segment are approaching renewal. Never miss a timing window again.
        - generic [ref=e138]:
          - img [ref=e140]
          - heading "CSV Export" [level=3] [ref=e143]
          - paragraph [ref=e144]: Export filtered results to CSV. Bulk selection support. Auto-sync to CRM on Professional tier.
        - generic [ref=e146]:
          - img [ref=e148]
          - heading "Government-Fed Data" [level=3] [ref=e150]
          - paragraph [ref=e151]: Direct feeds from state licensing boards. No scraping, no third-party aggregators. Official data only.
        - generic [ref=e153]:
          - img [ref=e155]
          - heading "Real-time Updates" [level=3] [ref=e157]
          - paragraph [ref=e158]: Daily updates from all 50 states. Data freshness you can verify, not marketing claims.
        - generic [ref=e160]:
          - img [ref=e162]
          - heading "15+ Professions" [level=3] [ref=e167]
          - paragraph [ref=e168]: Insurance agents, contractors, healthcare professionals, financial advisors, and more.
    - generic [ref=e170]:
      - heading "Three steps to perfectly-timed leads" [level=2] [ref=e172]
      - generic [ref=e173]:
        - generic [ref=e174]:
          - img [ref=e176]
          - generic [ref=e179]:
            - heading "Search" [level=3] [ref=e180]
            - paragraph [ref=e181]: Filter by profession, state, renewal window, and license status. Find your ideal prospects.
          - img [ref=e182]
        - generic [ref=e184]:
          - img [ref=e186]
          - generic [ref=e188]:
            - heading "Export" [level=3] [ref=e189]
            - paragraph [ref=e190]: Download CSV or auto-sync to CRM. Get contact details and renewal dates instantly.
          - img [ref=e191]
        - generic [ref=e193]:
          - img [ref=e195]
          - generic [ref=e198]:
            - heading "Close" [level=3] [ref=e199]
            - paragraph [ref=e200]: Reach out at the perfect time. Your prospects are renewing— they need your solution now.
      - link "Start Your Free Trial" [ref=e202] [cursor=pointer]:
        - /url: /signup
        - button "Start Your Free Trial" [ref=e203]
    - generic [ref=e205]:
      - generic [ref=e206]:
        - heading "Simple pricing for sales teams" [level=2] [ref=e207]
        - paragraph [ref=e208]: 14-day free trial. No credit card required.
      - generic [ref=e209]:
        - generic [ref=e210]:
          - generic [ref=e211]:
            - heading "Explorer" [level=3] [ref=e212]
            - generic [ref=e213]: $99/month
            - paragraph [ref=e214]: For individual sales reps getting started
          - generic [ref=e215]:
            - list [ref=e216]:
              - listitem [ref=e217]:
                - img [ref=e218]
                - generic [ref=e220]: 100 searches/month
              - listitem [ref=e221]:
                - img [ref=e222]
                - generic [ref=e224]: 3 states
              - listitem [ref=e225]:
                - img [ref=e226]
                - generic [ref=e228]: CSV export
              - listitem [ref=e229]:
                - img [ref=e230]
                - generic [ref=e232]: Email support
            - link "Start Free Trial" [ref=e233] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e234]
        - generic [ref=e235]:
          - generic [ref=e236]: Most Popular
          - generic [ref=e237]:
            - heading "Professional" [level=3] [ref=e238]
            - generic [ref=e239]: $499/month
            - paragraph [ref=e240]: For growing sales teams
          - generic [ref=e241]:
            - list [ref=e242]:
              - listitem [ref=e243]:
                - img [ref=e244]
                - generic [ref=e246]: Unlimited searches
              - listitem [ref=e247]:
                - img [ref=e248]
                - generic [ref=e250]: All 50 states
              - listitem [ref=e251]:
                - img [ref=e252]
                - generic [ref=e254]: Salesforce + HubSpot sync
              - listitem [ref=e255]:
                - img [ref=e256]
                - generic [ref=e258]: Renewal alerts
              - listitem [ref=e259]:
                - img [ref=e260]
                - generic [ref=e262]: Priority email support
            - link "Start Free Trial" [ref=e263] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e264]
        - generic [ref=e265]:
          - generic [ref=e266]:
            - heading "Enterprise" [level=3] [ref=e267]
            - generic [ref=e268]: $999/month
            - paragraph [ref=e269]: For large teams with custom needs
          - generic [ref=e270]:
            - list [ref=e271]:
              - listitem [ref=e272]:
                - img [ref=e273]
                - generic [ref=e275]: Unlimited searches
              - listitem [ref=e276]:
                - img [ref=e277]
                - generic [ref=e279]: All 50 states
              - listitem [ref=e280]:
                - img [ref=e281]
                - generic [ref=e283]: Custom integrations
              - listitem [ref=e284]:
                - img [ref=e285]
                - generic [ref=e287]: Renewal alerts + SMS
              - listitem [ref=e288]:
                - img [ref=e289]
                - generic [ref=e291]: API access
              - listitem [ref=e292]:
                - img [ref=e293]
                - generic [ref=e295]: Dedicated support + SLA
            - link "Start Free Trial" [ref=e296] [cursor=pointer]:
              - /url: /signup
              - button "Start Free Trial" [ref=e297]
      - link "View full feature comparison →" [ref=e299] [cursor=pointer]:
        - /url: /pricing
        - button "View full feature comparison →" [ref=e300]
    - generic [ref=e302]:
      - heading "Frequently asked questions" [level=2] [ref=e304]
      - generic [ref=e305]:
        - generic [ref=e308] [cursor=pointer]:
          - heading "How current is the license data?" [level=3] [ref=e309]
          - img [ref=e310]
        - generic [ref=e314] [cursor=pointer]:
          - heading "Which professions are covered?" [level=3] [ref=e315]
          - img [ref=e316]
        - generic [ref=e320] [cursor=pointer]:
          - heading "Can I export data to my CRM?" [level=3] [ref=e321]
          - img [ref=e322]
        - generic [ref=e326] [cursor=pointer]:
          - heading "What happens if a license expires?" [level=3] [ref=e327]
          - img [ref=e328]
        - generic [ref=e332] [cursor=pointer]:
          - heading "Is there a free trial?" [level=3] [ref=e333]
          - img [ref=e334]
        - generic [ref=e338] [cursor=pointer]:
          - heading "Can I cancel anytime?" [level=3] [ref=e339]
          - img [ref=e340]
    - generic [ref=e344]:
      - heading "Ready to find renewing licenses before your competitors?" [level=2] [ref=e345]
      - paragraph [ref=e346]: Join sales teams using RenewalIQ to close more deals with perfectly-timed outreach.
      - link "Start Your 14-Day Free Trial" [ref=e348] [cursor=pointer]:
        - /url: /signup
        - button "Start Your 14-Day Free Trial" [ref=e349]
      - paragraph [ref=e350]: No credit card required · Cancel anytime
  - contentinfo [ref=e351]:
    - generic [ref=e352]:
      - generic [ref=e353]:
        - generic [ref=e354]:
          - generic [ref=e355]:
            - generic [ref=e356]: Renewal
            - generic [ref=e357]: IQ
          - paragraph [ref=e358]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e359]:
          - heading "Product" [level=3] [ref=e360]
          - list [ref=e361]:
            - listitem [ref=e362]:
              - link "Pricing" [ref=e363] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e364]:
              - link "About" [ref=e365] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e366]:
              - link "Contact" [ref=e367] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e368]:
          - heading "Legal" [level=3] [ref=e369]
          - list [ref=e370]:
            - listitem [ref=e371]:
              - link "Privacy Policy" [ref=e372] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e373]:
              - link "Terms of Service" [ref=e374] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e375]:
          - heading "Connect" [level=3] [ref=e376]
          - list [ref=e377]:
            - listitem [ref=e378]:
              - link "Twitter" [ref=e379] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e380]:
              - link "LinkedIn" [ref=e381] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e383]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e389] [cursor=pointer]:
    - img [ref=e390]
  - alert [ref=e393]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Landing Page', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     await page.goto('/');
  6  |   });
  7  | 
  8  |   test('landing page loads with all sections', async ({ page }) => {
  9  |     // Check page title
  10 |     await expect(page).toHaveTitle(/RenewalIQ/);
  11 | 
  12 |     // Check navbar is present
  13 |     await expect(page.getByRole('navigation')).toBeVisible();
  14 |     await expect(page.getByText('RenewalIQ')).toBeVisible();
  15 | 
  16 |     // Check all 8 sections are present
  17 |     await expect(page.getByRole('heading', { name: /Real-time license data/i })).toBeVisible();
  18 |     await expect(page.getByText(/sales teams miss perfect timing/i)).toBeVisible();
  19 |     await expect(page.getByText(/How It Works/i)).toBeVisible();
  20 |     await expect(page.getByText(/Features/i)).toBeVisible();
  21 |     await expect(page.getByText(/Pricing/i)).toBeVisible();
  22 |     await expect(page.getByText(/FAQ/i)).toBeVisible();
  23 | 
  24 |     // Check footer is present
  25 |     await expect(page.getByText('©')).toBeVisible();
  26 |     await expect(page.getByText('Privacy Policy')).toBeVisible();
  27 |     await expect(page.getByText('Terms of Service')).toBeVisible();
  28 |   });
  29 | 
  30 |   test('hero section has CTA buttons', async ({ page }) => {
  31 |     await expect(page.getByRole('button', { name: /Start Free Trial/i })).toBeVisible();
  32 |     await expect(page.getByRole('button', { name: /View Pricing/i })).toBeVisible();
  33 |   });
  34 | 
  35 |   test('navigation links work', async ({ page }) => {
> 36 |     await page.getByRole('link', { name: /Pricing/i }).click();
     |                                                        ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Pricing/i }) resolved to 3 elements:
  37 |     await expect(page).toHaveURL('/pricing');
  38 | 
  39 |     await page.goto('/');
  40 |     await page.getByRole('link', { name: /About/i }).click();
  41 |     await expect(page).toHaveURL('/about');
  42 |   });
  43 | 
  44 |   test('mobile responsive layout', async ({ page }) => {
  45 |     // Test mobile viewport (375px)
  46 |     await page.setViewportSize({ width: 375, height: 667 });
  47 |     await expect(page.getByRole('navigation')).toBeVisible();
  48 |     
  49 |     // Check mobile menu button is visible
  50 |     await expect(page.getByLabel('Toggle menu')).toBeVisible();
  51 |   });
  52 | 
  53 |   test('tablet responsive layout', async ({ page }) => {
  54 |     // Test tablet viewport (768px)
  55 |     await page.setViewportSize({ width: 768, height: 1024 });
  56 |     await expect(page.getByRole('navigation')).toBeVisible();
  57 |   });
  58 | 
  59 |   test('desktop responsive layout', async ({ page }) => {
  60 |     // Test desktop viewport (1280px)
  61 |     await page.setViewportSize({ width: 1280, height: 800 });
  62 |     await expect(page.getByRole('navigation')).toBeVisible();
  63 |   });
  64 | });
  65 | 
```