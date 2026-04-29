# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pricing.spec.ts >> Pricing Page >> pricing tiers show correct prices
- Location: tests/e2e/pricing.spec.ts:14:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('$99')
Expected: visible
Error: strict mode violation: getByText('$99') resolved to 2 elements:
    1) <span class="text-4xl font-bold">…</span> aka getByText('$99', { exact: true })
    2) <span class="text-4xl font-bold">…</span> aka getByText('$999')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('$99')

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
  3  | test.describe('Pricing Page', () => {
  4  |   test('pricing page loads with 3 tiers', async ({ page }) => {
  5  |     await page.goto('/pricing');
  6  |     await expect(page).toHaveTitle(/RenewalIQ/);
  7  |     
  8  |     // Check all 3 pricing tiers are present
  9  |     await expect(page.getByText('Explorer')).toBeVisible();
  10 |     await expect(page.getByText('Professional')).toBeVisible();
  11 |     await expect(page.getByText('Enterprise')).toBeVisible();
  12 |   });
  13 | 
  14 |   test('pricing tiers show correct prices', async ({ page }) => {
  15 |     await page.goto('/pricing');
  16 |     
  17 |     // Check prices
> 18 |     await expect(page.getByText('$99')).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  19 |     await expect(page.getByText('$499')).toBeVisible();
  20 |     await expect(page.getByText('$999')).toBeVisible();
  21 |   });
  22 | 
  23 |   test('Professional tier is marked as popular', async ({ page }) => {
  24 |     await page.goto('/pricing');
  25 |     
  26 |     // Check that Professional tier has "Most Popular" badge
  27 |     const professionalCard = page.getByText('Professional').locator('..').locator('..');
  28 |     await expect(professionalCard.getByText(/Most Popular/i)).toBeVisible();
  29 |   });
  30 | 
  31 |   test('pricing tiers have CTA buttons', async ({ page }) => {
  32 |     await page.goto('/pricing');
  33 |     
  34 |     // Check all tiers have CTA buttons
  35 |     const ctaButtons = page.getByRole('button', { name: /Start Free Trial/i });
  36 |     await expect(ctaButtons).toHaveCount(3);
  37 |   });
  38 | 
  39 |   test('pricing page has FAQ section', async ({ page }) => {
  40 |     await page.goto('/pricing');
  41 |     
  42 |     // Check FAQ section exists
  43 |     await expect(page.getByText(/Frequently asked questions/i)).toBeVisible();
  44 |     
  45 |     // Check FAQ items
  46 |     await expect(page.getByText(/Can I change plans later/i)).toBeVisible();
  47 |     await expect(page.getByText(/Is there an annual discount/i)).toBeVisible();
  48 |     await expect(page.getByText(/What payment methods/i)).toBeVisible();
  49 |   });
  50 | 
  51 |   test('pricing features are listed', async ({ page }) => {
  52 |     await page.goto('/pricing');
  53 |     
  54 |     // Check key features are listed
  55 |     await expect(page.getByText(/Unlimited searches/i)).toBeVisible();
  56 |     await expect(page.getByText(/All 50 states/i)).toBeVisible();
  57 |     await expect(page.getByText(/CRM Sync/i)).toBeVisible();
  58 |     await expect(page.getByText(/Renewal alerts/i)).toBeVisible();
  59 |   });
  60 | });
  61 | 
```