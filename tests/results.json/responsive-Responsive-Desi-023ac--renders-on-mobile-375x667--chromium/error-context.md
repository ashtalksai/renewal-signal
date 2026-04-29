# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Design >> Pricing Page Responsiveness >> pricing page renders on mobile (375x667)
- Location: tests/e2e/responsive.spec.ts:36:11

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enterprise')
Expected: visible
Error: strict mode violation: getByText('Enterprise') resolved to 3 elements:
    1) <h3 class="text-2xl font-bold">Enterprise</h3> aka getByRole('heading', { name: 'Enterprise' })
    2) <p class="text-muted-foreground">Yes! Save 20% when you pay annually. Contact us f…</p> aka getByText('Yes! Save 20% when you pay')
    3) <p class="text-muted-foreground">We accept all major credit cards (Visa, Mastercar…</p> aka getByText('We accept all major credit')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Enterprise')

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
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "Simple pricing for sales teams" [level=1] [ref=e14]
        - paragraph [ref=e15]: 14-day free trial. No credit card required. Cancel anytime.
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e18]:
            - heading "Explorer" [level=3] [ref=e19]
            - generic [ref=e20]:
              - generic [ref=e21]: $99
              - text: /month
            - paragraph [ref=e22]: For individual sales reps getting started
          - list [ref=e24]:
            - listitem [ref=e25]:
              - img [ref=e26]
              - generic [ref=e28]: 100 searches/month
            - listitem [ref=e29]:
              - img [ref=e30]
              - generic [ref=e32]: 3 states
            - listitem [ref=e33]:
              - img [ref=e34]
              - generic [ref=e37]: CRM Sync
            - listitem [ref=e38]:
              - img [ref=e39]
              - generic [ref=e42]: Renewal alerts
            - listitem [ref=e43]:
              - img [ref=e44]
              - generic [ref=e47]: API access
            - listitem [ref=e48]:
              - img [ref=e49]
              - generic [ref=e51]: Email support
            - listitem [ref=e52]:
              - img [ref=e53]
              - generic [ref=e55]: CSV export
          - link "Start Free Trial" [ref=e57] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e58]
        - generic [ref=e59]:
          - generic [ref=e60]: Most Popular
          - generic [ref=e61]:
            - heading "Professional" [level=3] [ref=e62]
            - generic [ref=e63]:
              - generic [ref=e64]: $499
              - text: /month
            - paragraph [ref=e65]: For growing sales teams
          - list [ref=e67]:
            - listitem [ref=e68]:
              - img [ref=e69]
              - generic [ref=e71]: Unlimited searches
            - listitem [ref=e72]:
              - img [ref=e73]
              - generic [ref=e75]: All 50 states
            - listitem [ref=e76]:
              - img [ref=e77]
              - generic [ref=e79]: CRM Sync
            - listitem [ref=e80]:
              - img [ref=e81]
              - generic [ref=e83]: Renewal alerts
            - listitem [ref=e84]:
              - img [ref=e85]
              - generic [ref=e88]: API access
            - listitem [ref=e89]:
              - img [ref=e90]
              - generic [ref=e92]: Priority email support
            - listitem [ref=e93]:
              - img [ref=e94]
              - generic [ref=e96]: CSV + Auto-sync
          - link "Start Free Trial" [ref=e98] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e99]
        - generic [ref=e100]:
          - generic [ref=e101]:
            - heading "Enterprise" [level=3] [ref=e102]
            - generic [ref=e103]:
              - generic [ref=e104]: $999
              - text: /month
            - paragraph [ref=e105]: For large teams with custom needs
          - list [ref=e107]:
            - listitem [ref=e108]:
              - img [ref=e109]
              - generic [ref=e111]: Unlimited searches
            - listitem [ref=e112]:
              - img [ref=e113]
              - generic [ref=e115]: All 50 states
            - listitem [ref=e116]:
              - img [ref=e117]
              - generic [ref=e119]: CRM Sync
            - listitem [ref=e120]:
              - img [ref=e121]
              - generic [ref=e123]: Renewal alerts
            - listitem [ref=e124]:
              - img [ref=e125]
              - generic [ref=e127]: API access
            - listitem [ref=e128]:
              - img [ref=e129]
              - generic [ref=e131]: Dedicated support + SLA
            - listitem [ref=e132]:
              - img [ref=e133]
              - generic [ref=e135]: All formats + API
          - link "Start Free Trial" [ref=e137] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e138]
      - generic [ref=e139]:
        - heading "Frequently asked questions" [level=2] [ref=e140]
        - generic [ref=e141]:
          - generic [ref=e143]:
            - heading "Can I change plans later?" [level=3] [ref=e144]
            - paragraph [ref=e145]: Yes, you can upgrade or downgrade at any time from your account settings. Changes take effect immediately.
          - generic [ref=e147]:
            - heading "Is there an annual discount?" [level=3] [ref=e148]
            - paragraph [ref=e149]: Yes! Save 20% when you pay annually. Contact us for Enterprise annual pricing.
          - generic [ref=e151]:
            - heading "What payment methods do you accept?" [level=3] [ref=e152]
            - paragraph [ref=e153]: We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for Enterprise plans.
  - contentinfo [ref=e154]:
    - generic [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - generic [ref=e158]:
            - generic [ref=e159]: Renewal
            - generic [ref=e160]: IQ
          - paragraph [ref=e161]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e162]:
          - heading "Product" [level=3] [ref=e163]
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Pricing" [ref=e166] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e167]:
              - link "About" [ref=e168] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e169]:
              - link "Contact" [ref=e170] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e171]:
          - heading "Legal" [level=3] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "Privacy Policy" [ref=e175] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e176]:
              - link "Terms of Service" [ref=e177] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e178]:
          - heading "Connect" [level=3] [ref=e179]
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Twitter" [ref=e182] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e183]:
              - link "LinkedIn" [ref=e184] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e186]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e192] [cursor=pointer]:
    - img [ref=e193]
  - alert [ref=e196]
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
  17 |         await expect(page.getByRole('navigation')).toBeVisible();
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
> 43 |         await expect(page.getByText('Enterprise')).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
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