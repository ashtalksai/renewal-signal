# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Authentication Flow >> terms and privacy links on signup
- Location: tests/e2e/auth.spec.ts:54:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Terms of Service/i }) resolved to 2 elements:
    1) <a href="/terms" class="text-primary hover:underline">Terms of Service</a> aka getByRole('main').getByRole('link', { name: 'Terms of Service' })
    2) <a href="/terms" class="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a> aka getByRole('contentinfo').getByRole('link', { name: 'Terms of Service' })

Call log:
  - waiting for getByRole('link', { name: /Terms of Service/i })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]: Start your free trial
        - generic [ref=e7]: 14 days full access. No credit card required.
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: Full Name
            - textbox "Full Name" [ref=e11]:
              - /placeholder: John Smith
          - generic [ref=e12]:
            - text: Work Email
            - textbox "Work Email" [ref=e13]:
              - /placeholder: you@company.com
          - generic [ref=e14]:
            - text: Password
            - textbox "Password" [ref=e15]
            - paragraph [ref=e16]: Must be at least 8 characters
          - generic [ref=e17]:
            - text: Company Name
            - textbox "Company Name" [ref=e18]:
              - /placeholder: Acme Inc.
          - generic [ref=e19]:
            - checkbox "I agree to the Terms of Service and Privacy Policy" [ref=e20]
            - generic [ref=e21]:
              - text: I agree to the
              - link "Terms of Service" [ref=e22] [cursor=pointer]:
                - /url: /terms
              - text: and
              - link "Privacy Policy" [ref=e23] [cursor=pointer]:
                - /url: /privacy
          - button "Start Free Trial" [ref=e24]
        - generic [ref=e29]: Or continue with
        - button "Sign up with Google" [ref=e30]:
          - img
          - text: Sign up with Google
        - paragraph [ref=e31]:
          - text: Already have an account?
          - link "Sign in" [ref=e32] [cursor=pointer]:
            - /url: /login
  - contentinfo [ref=e33]:
    - generic [ref=e34]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - generic [ref=e37]:
            - generic [ref=e38]: Renewal
            - generic [ref=e39]: IQ
          - paragraph [ref=e40]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e41]:
          - heading "Product" [level=3] [ref=e42]
          - list [ref=e43]:
            - listitem [ref=e44]:
              - link "Pricing" [ref=e45] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e46]:
              - link "About" [ref=e47] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e48]:
              - link "Contact" [ref=e49] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e50]:
          - heading "Legal" [level=3] [ref=e51]
          - list [ref=e52]:
            - listitem [ref=e53]:
              - link "Privacy Policy" [ref=e54] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e55]:
              - link "Terms of Service" [ref=e56] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e57]:
          - heading "Connect" [level=3] [ref=e58]
          - list [ref=e59]:
            - listitem [ref=e60]:
              - link "Twitter" [ref=e61] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e62]:
              - link "LinkedIn" [ref=e63] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e65]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e71] [cursor=pointer]:
    - img [ref=e72]
  - alert [ref=e75]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Authentication Flow', () => {
  4  |   test('login page loads', async ({ page }) => {
  5  |     await page.goto('/login');
  6  |     await expect(page).toHaveTitle(/RenewalIQ/);
  7  |     await expect(page.getByText(/Welcome back/i)).toBeVisible();
  8  |     await expect(page.getByPlaceholder(/email/i)).toBeVisible();
  9  |     await expect(page.getByPlaceholder(/password/i)).toBeVisible();
  10 |     await expect(page.getByRole('button', { name: /Sign In/i })).toBeVisible();
  11 |   });
  12 | 
  13 |   test('signup page loads', async ({ page }) => {
  14 |     await page.goto('/signup');
  15 |     await expect(page).toHaveTitle(/RenewalIQ/);
  16 |     await expect(page.getByText(/Start your free trial/i)).toBeVisible();
  17 |     await expect(page.getByPlaceholder(/Full Name/i)).toBeVisible();
  18 |     await expect(page.getByPlaceholder(/Work Email/i)).toBeVisible();
  19 |     await expect(page.getByPlaceholder(/Password/i)).toBeVisible();
  20 |     await expect(page.getByPlaceholder(/Company Name/i)).toBeVisible();
  21 |     await expect(page.getByRole('button', { name: /Start Free Trial/i })).toBeVisible();
  22 |   });
  23 | 
  24 |   test('Google OAuth button is present on login', async ({ page }) => {
  25 |     await page.goto('/login');
  26 |     await expect(page.getByRole('button', { name: /Sign in with Google/i })).toBeVisible();
  27 |   });
  28 | 
  29 |   test('Google OAuth button is present on signup', async ({ page }) => {
  30 |     await page.goto('/signup');
  31 |     await expect(page.getByRole('button', { name: /Sign up with Google/i })).toBeVisible();
  32 |   });
  33 | 
  34 |   test('login form has required fields', async ({ page }) => {
  35 |     await page.goto('/login');
  36 |     
  37 |     // Try to submit without filling fields
  38 |     await page.getByRole('button', { name: /Sign In/i }).click();
  39 |     
  40 |     // Check that validation prevents submission (form should still be visible)
  41 |     await expect(page.getByPlaceholder(/email/i)).toBeVisible();
  42 |   });
  43 | 
  44 |   test('signup form has required fields', async ({ page }) => {
  45 |     await page.goto('/signup');
  46 |     
  47 |     // Try to submit without filling fields
  48 |     await page.getByRole('button', { name: /Start Free Trial/i }).click();
  49 |     
  50 |     // Check that validation prevents submission
  51 |     await expect(page.getByPlaceholder(/Full Name/i)).toBeVisible();
  52 |   });
  53 | 
  54 |   test('terms and privacy links on signup', async ({ page }) => {
  55 |     await page.goto('/signup');
  56 |     
> 57 |     await page.getByRole('link', { name: /Terms of Service/i }).click();
     |                                                                 ^ Error: locator.click: Error: strict mode violation: getByRole('link', { name: /Terms of Service/i }) resolved to 2 elements:
  58 |     await expect(page).toHaveURL('/terms');
  59 |     
  60 |     await page.goto('/signup');
  61 |     await page.getByRole('link', { name: /Privacy Policy/i }).click();
  62 |     await expect(page).toHaveURL('/privacy');
  63 |   });
  64 | 
  65 |   test('forgot password link exists', async ({ page }) => {
  66 |     await page.goto('/login');
  67 |     await expect(page.getByRole('link', { name: /Forgot password/i })).toBeVisible();
  68 |   });
  69 | 
  70 |   test('navigation between login and signup', async ({ page }) => {
  71 |     await page.goto('/login');
  72 |     await page.getByRole('link', { name: /Sign up/i }).click();
  73 |     await expect(page).toHaveURL('/signup');
  74 | 
  75 |     await page.getByRole('link', { name: /Sign in/i }).click();
  76 |     await expect(page).toHaveURL('/login');
  77 |   });
  78 | });
  79 | 
```