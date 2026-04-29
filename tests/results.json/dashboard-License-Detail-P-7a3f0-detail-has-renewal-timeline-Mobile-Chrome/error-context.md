# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> License Detail Page >> license detail has renewal timeline
- Location: tests/e2e/dashboard.spec.ts:58:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Renewal Timeline/i)
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Renewal Timeline/i)

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e5]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - generic [ref=e8]:
          - button "Toggle Sidebar" [ref=e9]:
            - img
            - generic [ref=e10]: Toggle Sidebar
          - generic [ref=e11]:
            - generic [ref=e12]:
              - heading "John Smith" [level=1] [ref=e13]
              - generic [ref=e14]: Active
            - paragraph [ref=e15]: INS-2024-001234
        - generic [ref=e16]:
          - button "Export" [ref=e17]:
            - img
            - text: Export
          - button "Set Alert" [ref=e18]:
            - img
            - text: Set Alert
          - button "Share" [ref=e19]:
            - img
            - text: Share
      - generic [ref=e20]:
        - generic [ref=e22]:
          - heading "Professional Information" [level=2] [ref=e23]
          - separator [ref=e24]
          - generic [ref=e25]:
            - generic [ref=e26]:
              - text: Full Name
              - paragraph [ref=e27]: John Smith
            - generic [ref=e28]:
              - text: Specialty
              - paragraph [ref=e29]: Life Insurance
            - generic [ref=e30]:
              - text: Address
              - paragraph [ref=e31]: 123 Main Street, Los Angeles, CA 90001
            - generic [ref=e32]:
              - text: Phone
              - paragraph [ref=e33]: (555) 123-4567
            - generic [ref=e34]:
              - text: Email
              - paragraph [ref=e35]: john.smith@example.com
        - generic [ref=e37]:
          - heading "License Information" [level=2] [ref=e38]
          - separator [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - text: License Number
              - paragraph [ref=e42]: INS-2024-001234
            - generic [ref=e43]:
              - text: State
              - paragraph [ref=e44]: California
            - generic [ref=e45]:
              - text: Profession
              - paragraph [ref=e46]: Insurance Agent
            - generic [ref=e47]:
              - text: Issue Date
              - paragraph [ref=e48]: 2024-08-15
            - generic [ref=e49]:
              - text: Renewal Date
              - generic [ref=e51]:
                - generic [ref=e52]: Aug 15, 2026
                - generic [ref=e53]: Active
      - generic [ref=e56]:
        - heading "Status History" [level=2] [ref=e57]
        - separator [ref=e58]
        - generic [ref=e59]:
          - generic [ref=e62]:
            - generic [ref=e63]:
              - paragraph [ref=e64]: Active
              - paragraph [ref=e65]: 2024-08-15
            - paragraph [ref=e66]: License issued
          - generic [ref=e69]:
            - generic [ref=e70]:
              - paragraph [ref=e71]: Renewed
              - paragraph [ref=e72]: 2025-08-15
            - paragraph [ref=e73]: Annual renewal completed
      - link "Back to Dashboard" [ref=e75] [cursor=pointer]:
        - /url: /dashboard
        - button "Back to Dashboard" [ref=e76]
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e82] [cursor=pointer]:
    - img [ref=e83]
  - alert [ref=e86]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Dashboard', () => {
  4  |   test('dashboard page loads', async ({ page }) => {
  5  |     await page.goto('/dashboard');
  6  |     await expect(page).toHaveTitle(/RenewalIQ/);
  7  |     
  8  |     // Check dashboard elements
  9  |     await expect(page.getByText(/Dashboard/i)).toBeVisible();
  10 |   });
  11 | 
  12 |   test('dashboard has search functionality', async ({ page }) => {
  13 |     await page.goto('/dashboard');
  14 |     
  15 |     // Check search bar is present
  16 |     await expect(page.getByPlaceholder(/Search/i)).toBeVisible();
  17 |   });
  18 | 
  19 |   test('dashboard has filter panel', async ({ page }) => {
  20 |     await page.goto('/dashboard');
  21 |     
  22 |     // Check filter button/panel exists
  23 |     await expect(page.getByText(/Filter/i)).toBeVisible();
  24 |   });
  25 | 
  26 |   test('dashboard has export button', async ({ page }) => {
  27 |     await page.goto('/dashboard');
  28 |     
  29 |     // Check export button exists
  30 |     await expect(page.getByRole('button', { name: /Export/i })).toBeVisible();
  31 |   });
  32 | 
  33 |   test('license table is present', async ({ page }) => {
  34 |     await page.goto('/dashboard');
  35 |     
  36 |     // Check table structure
  37 |     const table = page.getByRole('table');
  38 |     await expect(table).toBeVisible();
  39 |   });
  40 | 
  41 |   test('dashboard sidebar navigation', async ({ page }) => {
  42 |     await page.goto('/dashboard');
  43 |     
  44 |     // Check sidebar is present
  45 |     await expect(page.getByRole('navigation')).toBeVisible();
  46 |   });
  47 | });
  48 | 
  49 | test.describe('License Detail Page', () => {
  50 |   test('license detail page loads', async ({ page }) => {
  51 |     await page.goto('/dashboard/license/1');
  52 |     await expect(page).toHaveTitle(/RenewalIQ/);
  53 |     
  54 |     // Check license detail elements
  55 |     await expect(page.getByText(/Professional Information/i)).toBeVisible();
  56 |   });
  57 | 
  58 |   test('license detail has renewal timeline', async ({ page }) => {
  59 |     await page.goto('/dashboard/license/1');
  60 |     
  61 |     // Check renewal timeline component
> 62 |     await expect(page.getByText(/Renewal Timeline/i)).toBeVisible();
     |                                                       ^ Error: expect(locator).toBeVisible() failed
  63 |   });
  64 | 
  65 |   test('license detail has action buttons', async ({ page }) => {
  66 |     await page.goto('/dashboard/license/1');
  67 |     
  68 |     // Check action buttons
  69 |     await expect(page.getByRole('button', { name: /Export/i })).toBeVisible();
  70 |     await expect(page.getByRole('button', { name: /Set Alert/i })).toBeVisible();
  71 |     await expect(page.getByRole('button', { name: /Share/i })).toBeVisible();
  72 |   });
  73 | });
  74 | 
```