# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.ts >> Authentication Flow >> login page loads
- Location: tests/e2e/auth.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder(/email/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByPlaceholder(/email/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - generic [ref=e6]: Welcome back
        - generic [ref=e7]: Sign in to access your RenewalIQ dashboard
      - generic [ref=e8]:
        - generic [ref=e9]:
          - generic [ref=e10]:
            - text: Email
            - textbox "Email" [ref=e11]:
              - /placeholder: you@company.com
          - generic [ref=e12]:
            - text: Password
            - textbox "Password" [ref=e13]
          - generic [ref=e14]:
            - generic [ref=e15]:
              - checkbox "Remember me" [ref=e16]
              - text: Remember me
            - link "Forgot password?" [ref=e17] [cursor=pointer]:
              - /url: /forgot-password
          - button "Sign In" [ref=e18]
        - generic [ref=e23]: Or continue with
        - button "Sign in with Google" [ref=e24]:
          - img
          - text: Sign in with Google
        - paragraph [ref=e25]:
          - text: Don't have an account?
          - link "Sign up" [ref=e26] [cursor=pointer]:
            - /url: /signup
  - contentinfo [ref=e27]:
    - generic [ref=e28]:
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]: Renewal
            - generic [ref=e33]: IQ
          - paragraph [ref=e34]: Real-time license data for B2B sales teams. See who's renewing before your competitors know they exist.
        - generic [ref=e35]:
          - heading "Product" [level=3] [ref=e36]
          - list [ref=e37]:
            - listitem [ref=e38]:
              - link "Pricing" [ref=e39] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e40]:
              - link "About" [ref=e41] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e42]:
              - link "Contact" [ref=e43] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e44]:
          - heading "Legal" [level=3] [ref=e45]
          - list [ref=e46]:
            - listitem [ref=e47]:
              - link "Privacy Policy" [ref=e48] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e49]:
              - link "Terms of Service" [ref=e50] [cursor=pointer]:
                - /url: /terms
        - generic [ref=e51]:
          - heading "Connect" [level=3] [ref=e52]
          - list [ref=e53]:
            - listitem [ref=e54]:
              - link "Twitter" [ref=e55] [cursor=pointer]:
                - /url: https://twitter.com/renewaliq
            - listitem [ref=e56]:
              - link "LinkedIn" [ref=e57] [cursor=pointer]:
                - /url: https://linkedin.com/company/renewaliq
      - paragraph [ref=e59]: © 2026 RenewalIQ. All rights reserved.
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e65] [cursor=pointer]:
    - img [ref=e66]
  - alert [ref=e69]
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
> 8  |     await expect(page.getByPlaceholder(/email/i)).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
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
  57 |     await page.getByRole('link', { name: /Terms of Service/i }).click();
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