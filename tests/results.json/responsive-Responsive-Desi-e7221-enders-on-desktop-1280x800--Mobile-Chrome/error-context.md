# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Design >> Pricing Page Responsiveness >> pricing page renders on desktop (1280x800)
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
    - generic [ref=e20]:
      - generic [ref=e21]:
        - heading "Simple pricing for sales teams" [level=1] [ref=e22]
        - paragraph [ref=e23]: 14-day free trial. No credit card required. Cancel anytime.
      - generic [ref=e24]:
        - generic [ref=e25]:
          - generic [ref=e26]:
            - heading "Explorer" [level=3] [ref=e27]
            - generic [ref=e28]:
              - generic [ref=e29]: $99
              - text: /month
            - paragraph [ref=e30]: For individual sales reps getting started
          - list [ref=e32]:
            - listitem [ref=e33]:
              - img [ref=e34]
              - generic [ref=e36]: 100 searches/month
            - listitem [ref=e37]:
              - img [ref=e38]
              - generic [ref=e40]: 3 states
            - listitem [ref=e41]:
              - img [ref=e42]
              - generic [ref=e45]: CRM Sync
            - listitem [ref=e46]:
              - img [ref=e47]
              - generic [ref=e50]: Renewal alerts
            - listitem [ref=e51]:
              - img [ref=e52]
              - generic [ref=e55]: API access
            - listitem [ref=e56]:
              - img [ref=e57]
              - generic [ref=e59]: Email support
            - listitem [ref=e60]:
              - img [ref=e61]
              - generic [ref=e63]: CSV export
          - link "Start Free Trial" [ref=e65] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e66]
        - generic [ref=e67]:
          - generic [ref=e68]: Most Popular
          - generic [ref=e69]:
            - heading "Professional" [level=3] [ref=e70]
            - generic [ref=e71]:
              - generic [ref=e72]: $499
              - text: /month
            - paragraph [ref=e73]: For growing sales teams
          - list [ref=e75]:
            - listitem [ref=e76]:
              - img [ref=e77]
              - generic [ref=e79]: Unlimited searches
            - listitem [ref=e80]:
              - img [ref=e81]
              - generic [ref=e83]: All 50 states
            - listitem [ref=e84]:
              - img [ref=e85]
              - generic [ref=e87]: CRM Sync
            - listitem [ref=e88]:
              - img [ref=e89]
              - generic [ref=e91]: Renewal alerts
            - listitem [ref=e92]:
              - img [ref=e93]
              - generic [ref=e96]: API access
            - listitem [ref=e97]:
              - img [ref=e98]
              - generic [ref=e100]: Priority email support
            - listitem [ref=e101]:
              - img [ref=e102]
              - generic [ref=e104]: CSV + Auto-sync
          - link "Start Free Trial" [ref=e106] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e107]
        - generic [ref=e108]:
          - generic [ref=e109]:
            - heading "Enterprise" [level=3] [ref=e110]
            - generic [ref=e111]:
              - generic [ref=e112]: $999
              - text: /month
            - paragraph [ref=e113]: For large teams with custom needs
          - list [ref=e115]:
            - listitem [ref=e116]:
              - img [ref=e117]
              - generic [ref=e119]: Unlimited searches
            - listitem [ref=e120]:
              - img [ref=e121]
              - generic [ref=e123]: All 50 states
            - listitem [ref=e124]:
              - img [ref=e125]
              - generic [ref=e127]: CRM Sync
            - listitem [ref=e128]:
              - img [ref=e129]
              - generic [ref=e131]: Renewal alerts
            - listitem [ref=e132]:
              - img [ref=e133]
              - generic [ref=e135]: API access
            - listitem [ref=e136]:
              - img [ref=e137]
              - generic [ref=e139]: Dedicated support + SLA
            - listitem [ref=e140]:
              - img [ref=e141]
              - generic [ref=e143]: All formats + API
          - link "Start Free Trial" [ref=e145] [cursor=pointer]:
            - /url: /signup
            - button "Start Free Trial" [ref=e146]
      - generic [ref=e147]:
        - heading "Frequently asked questions" [level=2] [ref=e148]
        - generic [ref=e149]:
          - generic [ref=e151]:
            - heading "Can I change plans later?" [level=3] [ref=e152]
            - paragraph [ref=e153]: Yes, you can upgrade or downgrade at any time from your account settings. Changes take effect immediately.
          - generic [ref=e155]:
            - heading "Is there an annual discount?" [level=3] [ref=e156]
            - paragraph [ref=e157]: Yes! Save 20% when you pay annually. Contact us for Enterprise annual pricing.
          - generic [ref=e159]:
            - heading "What payment methods do you accept?" [level=3] [ref=e160]
            - paragraph [ref=e161]: We accept all major credit cards (Visa, Mastercard, Amex) and ACH bank transfers for Enterprise plans.
  - contentinfo [ref=e162]:
    - generic [ref=e163]:
      - generic [ref=e164]:
        - generic [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]: Renewal
            - generic [ref=e168]: IQ
          - paragraph [ref=e169]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e170]:
          - heading "Product" [level=3] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Pricing" [ref=e174] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e175]:
              - link "About" [ref=e176] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e177]:
              - link "Contact" [ref=e178] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e179]:
          - heading "Legal" [level=3] [ref=e180]
          - list [ref=e181]:
            - listitem [ref=e182]:
              - link "Privacy Policy" [ref=e183] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e184]:
              - link "Terms of Service" [ref=e185] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e186]:
          - heading "Connect" [level=3] [ref=e187]
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Twitter" [ref=e190] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e191]:
              - link "LinkedIn" [ref=e192] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e194]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e200] [cursor=pointer]:
    - img [ref=e201]
  - alert [ref=e204]
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