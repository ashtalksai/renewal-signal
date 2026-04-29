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
  - generic [ref=e3]:
    - generic [ref=e6]:
      - generic [ref=e8]:
        - generic [ref=e9]: Navigation
        - list [ref=e11]:
          - listitem [ref=e12]:
            - button "Dashboard" [ref=e13]:
              - img [ref=e14]
              - generic [ref=e19]: Dashboard
          - listitem [ref=e20]:
            - button "Search" [ref=e21]:
              - img [ref=e22]
              - generic [ref=e25]: Search
          - listitem [ref=e26]:
            - button "Saved Filters" [ref=e27]:
              - img [ref=e28]
              - generic [ref=e32]: Saved Filters
          - listitem [ref=e33]:
            - button "Exports" [ref=e34]:
              - img [ref=e35]
              - generic [ref=e38]: Exports
          - listitem [ref=e39]:
            - button "Settings" [ref=e40]:
              - img [ref=e41]
              - generic [ref=e44]: Settings
      - button "Sign Out" [ref=e46]:
        - img
        - text: Sign Out
    - main [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e52]:
            - generic [ref=e53]:
              - heading "John Smith" [level=1] [ref=e54]
              - generic [ref=e55]: Active
            - paragraph [ref=e56]: INS-2024-001234
          - generic [ref=e57]:
            - button "Export" [ref=e58]:
              - img
              - text: Export
            - button "Set Alert" [ref=e59]:
              - img
              - text: Set Alert
            - button "Share" [ref=e60]:
              - img
              - text: Share
        - generic [ref=e61]:
          - generic [ref=e63]:
            - heading "Professional Information" [level=2] [ref=e64]
            - separator [ref=e65]
            - generic [ref=e66]:
              - generic [ref=e67]:
                - text: Full Name
                - paragraph [ref=e68]: John Smith
              - generic [ref=e69]:
                - text: Specialty
                - paragraph [ref=e70]: Life Insurance
              - generic [ref=e71]:
                - text: Address
                - paragraph [ref=e72]: 123 Main Street, Los Angeles, CA 90001
              - generic [ref=e73]:
                - text: Phone
                - paragraph [ref=e74]: (555) 123-4567
              - generic [ref=e75]:
                - text: Email
                - paragraph [ref=e76]: john.smith@example.com
          - generic [ref=e78]:
            - heading "License Information" [level=2] [ref=e79]
            - separator [ref=e80]
            - generic [ref=e81]:
              - generic [ref=e82]:
                - text: License Number
                - paragraph [ref=e83]: INS-2024-001234
              - generic [ref=e84]:
                - text: State
                - paragraph [ref=e85]: California
              - generic [ref=e86]:
                - text: Profession
                - paragraph [ref=e87]: Insurance Agent
              - generic [ref=e88]:
                - text: Issue Date
                - paragraph [ref=e89]: 2024-08-15
              - generic [ref=e90]:
                - text: Renewal Date
                - generic [ref=e92]:
                  - generic [ref=e93]: Aug 15, 2026
                  - generic [ref=e94]: Active
        - generic [ref=e97]:
          - heading "Status History" [level=2] [ref=e98]
          - separator [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e103]:
              - generic [ref=e104]:
                - paragraph [ref=e105]: Active
                - paragraph [ref=e106]: 2024-08-15
              - paragraph [ref=e107]: License issued
            - generic [ref=e110]:
              - generic [ref=e111]:
                - paragraph [ref=e112]: Renewed
                - paragraph [ref=e113]: 2025-08-15
              - paragraph [ref=e114]: Annual renewal completed
        - link "Back to Dashboard" [ref=e116] [cursor=pointer]:
          - /url: /dashboard
          - button "Back to Dashboard" [ref=e117]
  - region "Notifications alt+T"
  - button "Open Next.js Dev Tools" [ref=e123] [cursor=pointer]:
    - img [ref=e124]
  - alert [ref=e127]
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