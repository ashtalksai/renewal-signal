# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: responsive.spec.ts >> Responsive Design >> Dashboard Responsiveness >> dashboard renders on mobile (375x667)
- Location: tests/e2e/responsive.spec.ts:56:11

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Dashboard/i)
Expected: visible
Error: strict mode violation: getByText(/Dashboard/i) resolved to 4 elements:
    1) <span class="call-stack-frame-file" data-has-original-code-frame="true">src/components/dashboard/license-table.tsx (204:2…</span> aka getByText('src/components/dashboard/license-table.tsx (204:23)')
    2) <span class="call-stack-frame-file" data-has-original-code-frame="true">src/components/dashboard/license-table.tsx (168:2…</span> aka getByText('src/components/dashboard/license-table.tsx (168:27)')
    3) <div class="call-stack-frame-method-name">…</div> aka getByText('DashboardPage')
    4) <span class="call-stack-frame-file" data-has-original-code-frame="true">src/app/dashboard/page.tsx (37:15)</span> aka getByText('src/app/dashboard/page.tsx (')

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Dashboard/i)
    2 × locator resolved to <span>Dashboard</span>
      - unexpected value "hidden"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e6] [cursor=pointer]:
    - button "Open Next.js Dev Tools" [ref=e7]:
      - img [ref=e8]
    - generic [ref=e11]:
      - button "Open issues overlay" [ref=e12]:
        - generic [ref=e13]:
          - generic [ref=e14]: "2"
          - generic [ref=e15]: "3"
        - generic [ref=e16]:
          - text: Issue
          - generic [ref=e17]: s
      - button "Collapse issues badge" [ref=e18]:
        - img [ref=e19]
  - main [ref=e24]:
    - generic [ref=e25]:
      - generic [ref=e26]:
        - generic [ref=e27]:
          - button "Toggle Sidebar" [ref=e28]:
            - img
            - generic [ref=e29]: Toggle Sidebar
          - generic [ref=e31]:
            - img [ref=e32]
            - textbox "Search by name, license number, state, or profession..." [ref=e35]
        - generic [ref=e36]:
          - button "Filters" [ref=e39]:
            - img
            - text: Filters
          - button "Export" [ref=e40]:
            - img
            - text: Export
      - generic [ref=e41]:
        - table [ref=e44]:
          - rowgroup [ref=e45]:
            - 'row "Name License # State Profession Status Renewal Date" [ref=e46]':
              - columnheader [ref=e47]:
                - checkbox [ref=e48]
                - checkbox [ref=e49]
              - columnheader "Name" [ref=e50]
              - 'columnheader "License #" [ref=e51]'
              - columnheader "State" [ref=e52]
              - columnheader "Profession" [ref=e53]
              - columnheader "Status" [ref=e54]
              - columnheader "Renewal Date" [ref=e55]
              - columnheader [ref=e56]
          - rowgroup [ref=e57]:
            - row "John Smith INS-2024-001234 California Insurance Agent Life Insurance Active Today 107 days" [ref=e58]:
              - cell [ref=e59]:
                - checkbox [ref=e60]
                - checkbox [ref=e61]
              - cell "John Smith" [ref=e62]
              - cell "INS-2024-001234" [ref=e63]
              - cell "California" [ref=e64]
              - cell "Insurance Agent Life Insurance" [ref=e65]:
                - generic [ref=e66]:
                  - generic [ref=e67]: Insurance Agent
                  - generic [ref=e68]: Life Insurance
              - cell "Active" [ref=e69]:
                - generic [ref=e70]: Active
              - cell "Today 107 days" [ref=e71]:
                - generic [ref=e74]:
                  - generic [ref=e75]: Today
                  - generic [ref=e76]: 107 days
              - cell [ref=e77]:
                - button [ref=e78]:
                  - button [ref=e79]:
                    - img
            - row "Sarah Johnson GC-2023-005678 Texas General Contractor Residential Pending Today 32 days" [ref=e80]:
              - cell [ref=e81]:
                - checkbox [ref=e82]
                - checkbox [ref=e83]
              - cell "Sarah Johnson" [ref=e84]
              - cell "GC-2023-005678" [ref=e85]
              - cell "Texas" [ref=e86]
              - cell "General Contractor Residential" [ref=e87]:
                - generic [ref=e88]:
                  - generic [ref=e89]: General Contractor
                  - generic [ref=e90]: Residential
              - cell "Pending" [ref=e91]:
                - generic [ref=e92]: Pending
              - cell "Today 32 days" [ref=e93]:
                - generic [ref=e97]:
                  - generic [ref=e98]: Today
                  - generic [ref=e99]: 32 days
              - cell [ref=e100]:
                - button [ref=e101]:
                  - button [ref=e102]:
                    - img
            - row "Michael Chen RE-2022-009012 Florida Real Estate Agent Commercial Renewing Soon Today 10 days" [ref=e103]:
              - cell [ref=e104]:
                - checkbox [ref=e105]
                - checkbox [ref=e106]
              - cell "Michael Chen" [ref=e107]
              - cell "RE-2022-009012" [ref=e108]
              - cell "Florida" [ref=e109]
              - cell "Real Estate Agent Commercial" [ref=e110]:
                - generic [ref=e111]:
                  - generic [ref=e112]: Real Estate Agent
                  - generic [ref=e113]: Commercial
              - cell "Renewing Soon" [ref=e114]:
                - generic [ref=e115]: Renewing Soon
              - cell "Today 10 days" [ref=e116]:
                - generic [ref=e120]:
                  - generic [ref=e121]: Today
                  - generic [ref=e122]: 10 days
              - cell [ref=e123]:
                - button [ref=e124]:
                  - button [ref=e125]:
                    - img
            - row "Emily Davis FA-2021-003456 New York Financial Advisor Investment Advisory Active Today 234 days" [ref=e126]:
              - cell [ref=e127]:
                - checkbox [ref=e128]
                - checkbox [ref=e129]
              - cell "Emily Davis" [ref=e130]
              - cell "FA-2021-003456" [ref=e131]
              - cell "New York" [ref=e132]
              - cell "Financial Advisor Investment Advisory" [ref=e133]:
                - generic [ref=e134]:
                  - generic [ref=e135]: Financial Advisor
                  - generic [ref=e136]: Investment Advisory
              - cell "Active" [ref=e137]:
                - generic [ref=e138]: Active
              - cell "Today 234 days" [ref=e139]:
                - generic [ref=e142]:
                  - generic [ref=e143]: Today
                  - generic [ref=e144]: 234 days
              - cell [ref=e145]:
                - button [ref=e146]:
                  - button [ref=e147]:
                    - img
            - row "Robert Wilson HC-2020-007890 Illinois Healthcare Professional Physical Therapy Expired Today -45 days" [ref=e148]:
              - cell [ref=e149]:
                - checkbox [ref=e150]
                - checkbox [ref=e151]
              - cell "Robert Wilson" [ref=e152]
              - cell "HC-2020-007890" [ref=e153]
              - cell "Illinois" [ref=e154]
              - cell "Healthcare Professional Physical Therapy" [ref=e155]:
                - generic [ref=e156]:
                  - generic [ref=e157]: Healthcare Professional
                  - generic [ref=e158]: Physical Therapy
              - cell "Expired" [ref=e159]:
                - generic [ref=e160]: Expired
              - cell "Today -45 days" [ref=e161]:
                - generic [ref=e165]:
                  - generic [ref=e166]: Today
                  - generic [ref=e167]: "-45 days"
              - cell [ref=e168]:
                - button [ref=e169]:
                  - button [ref=e170]:
                    - img
        - generic [ref=e171]:
          - paragraph [ref=e172]: Showing 1-5 of 5 results
          - generic [ref=e173]:
            - button "Previous" [disabled]
            - button "Next" [disabled]
  - region "Notifications alt+T"
  - alert [ref=e174]
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
> 61 |         await expect(page.getByText(/Dashboard/i)).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
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