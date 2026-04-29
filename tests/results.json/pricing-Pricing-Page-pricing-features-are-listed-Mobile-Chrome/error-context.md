# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pricing.spec.ts >> Pricing Page >> pricing features are listed
- Location: tests/e2e/pricing.spec.ts:51:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Unlimited searches/i)
Expected: visible
Error: strict mode violation: getByText(/Unlimited searches/i) resolved to 2 elements:
    1) <span>Unlimited searches</span> aka getByText('Unlimited searches').first()
    2) <span>Unlimited searches</span> aka getByText('Unlimited searches').nth(1)

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Unlimited searches/i)

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
  18 |     await expect(page.getByText('$99')).toBeVisible();
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
> 55 |     await expect(page.getByText(/Unlimited searches/i)).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  56 |     await expect(page.getByText(/All 50 states/i)).toBeVisible();
  57 |     await expect(page.getByText(/CRM Sync/i)).toBeVisible();
  58 |     await expect(page.getByText(/Renewal alerts/i)).toBeVisible();
  59 |   });
  60 | });
  61 | 
```