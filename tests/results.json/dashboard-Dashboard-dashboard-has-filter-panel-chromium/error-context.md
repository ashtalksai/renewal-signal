# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.ts >> Dashboard >> dashboard has filter panel
- Location: tests/e2e/dashboard.spec.ts:19:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/Filter/i)
Expected: visible
Error: strict mode violation: getByText(/Filter/i) resolved to 2 elements:
    1) <span>Saved Filters</span> aka getByRole('button', { name: 'Saved Filters' })
    2) <button tabindex="0" type="button" data-slot="button" class="group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:bor…>…</button> aka getByRole('button', { name: 'Filters', exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText(/Filter/i)

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
  - generic [ref=e22]:
    - generic [ref=e25]:
      - generic [ref=e27]:
        - generic [ref=e28]: Navigation
        - list [ref=e30]:
          - listitem [ref=e31]:
            - button "Dashboard" [ref=e32]:
              - img [ref=e33]
              - generic [ref=e38]: Dashboard
          - listitem [ref=e39]:
            - button "Search" [ref=e40]:
              - img [ref=e41]
              - generic [ref=e44]: Search
          - listitem [ref=e45]:
            - button "Saved Filters" [ref=e46]:
              - img [ref=e47]
              - generic [ref=e51]: Saved Filters
          - listitem [ref=e52]:
            - button "Exports" [ref=e53]:
              - img [ref=e54]
              - generic [ref=e57]: Exports
          - listitem [ref=e58]:
            - button "Settings" [ref=e59]:
              - img [ref=e60]
              - generic [ref=e63]: Settings
      - button "Sign Out" [ref=e65]:
        - img
        - text: Sign Out
    - main [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - generic [ref=e72]:
            - img [ref=e73]
            - textbox "Search by name, license number, state, or profession..." [ref=e76]
          - generic [ref=e77]:
            - button "Filters" [ref=e80]:
              - img
              - text: Filters
            - button "Export" [ref=e81]:
              - img
              - text: Export
        - generic [ref=e82]:
          - table [ref=e85]:
            - rowgroup [ref=e86]:
              - 'row "Name License # State Profession Status Renewal Date" [ref=e87]':
                - columnheader [ref=e88]:
                  - checkbox [ref=e89]
                  - checkbox [ref=e90]
                - columnheader "Name" [ref=e91]
                - 'columnheader "License #" [ref=e92]'
                - columnheader "State" [ref=e93]
                - columnheader "Profession" [ref=e94]
                - columnheader "Status" [ref=e95]
                - columnheader "Renewal Date" [ref=e96]
                - columnheader [ref=e97]
            - rowgroup [ref=e98]:
              - row "John Smith INS-2024-001234 California Insurance Agent Life Insurance Active Today 107 days" [ref=e99]:
                - cell [ref=e100]:
                  - checkbox [ref=e101]
                  - checkbox [ref=e102]
                - cell "John Smith" [ref=e103]
                - cell "INS-2024-001234" [ref=e104]
                - cell "California" [ref=e105]
                - cell "Insurance Agent Life Insurance" [ref=e106]:
                  - generic [ref=e107]:
                    - generic [ref=e108]: Insurance Agent
                    - generic [ref=e109]: Life Insurance
                - cell "Active" [ref=e110]:
                  - generic [ref=e111]: Active
                - cell "Today 107 days" [ref=e112]:
                  - generic [ref=e115]:
                    - generic [ref=e116]: Today
                    - generic [ref=e117]: 107 days
                - cell [ref=e118]:
                  - button [ref=e119]:
                    - button [ref=e120]:
                      - img
              - row "Sarah Johnson GC-2023-005678 Texas General Contractor Residential Pending Today 32 days" [ref=e121]:
                - cell [ref=e122]:
                  - checkbox [ref=e123]
                  - checkbox [ref=e124]
                - cell "Sarah Johnson" [ref=e125]
                - cell "GC-2023-005678" [ref=e126]
                - cell "Texas" [ref=e127]
                - cell "General Contractor Residential" [ref=e128]:
                  - generic [ref=e129]:
                    - generic [ref=e130]: General Contractor
                    - generic [ref=e131]: Residential
                - cell "Pending" [ref=e132]:
                  - generic [ref=e133]: Pending
                - cell "Today 32 days" [ref=e134]:
                  - generic [ref=e138]:
                    - generic [ref=e139]: Today
                    - generic [ref=e140]: 32 days
                - cell [ref=e141]:
                  - button [ref=e142]:
                    - button [ref=e143]:
                      - img
              - row "Michael Chen RE-2022-009012 Florida Real Estate Agent Commercial Renewing Soon Today 10 days" [ref=e144]:
                - cell [ref=e145]:
                  - checkbox [ref=e146]
                  - checkbox [ref=e147]
                - cell "Michael Chen" [ref=e148]
                - cell "RE-2022-009012" [ref=e149]
                - cell "Florida" [ref=e150]
                - cell "Real Estate Agent Commercial" [ref=e151]:
                  - generic [ref=e152]:
                    - generic [ref=e153]: Real Estate Agent
                    - generic [ref=e154]: Commercial
                - cell "Renewing Soon" [ref=e155]:
                  - generic [ref=e156]: Renewing Soon
                - cell "Today 10 days" [ref=e157]:
                  - generic [ref=e161]:
                    - generic [ref=e162]: Today
                    - generic [ref=e163]: 10 days
                - cell [ref=e164]:
                  - button [ref=e165]:
                    - button [ref=e166]:
                      - img
              - row "Emily Davis FA-2021-003456 New York Financial Advisor Investment Advisory Active Today 234 days" [ref=e167]:
                - cell [ref=e168]:
                  - checkbox [ref=e169]
                  - checkbox [ref=e170]
                - cell "Emily Davis" [ref=e171]
                - cell "FA-2021-003456" [ref=e172]
                - cell "New York" [ref=e173]
                - cell "Financial Advisor Investment Advisory" [ref=e174]:
                  - generic [ref=e175]:
                    - generic [ref=e176]: Financial Advisor
                    - generic [ref=e177]: Investment Advisory
                - cell "Active" [ref=e178]:
                  - generic [ref=e179]: Active
                - cell "Today 234 days" [ref=e180]:
                  - generic [ref=e183]:
                    - generic [ref=e184]: Today
                    - generic [ref=e185]: 234 days
                - cell [ref=e186]:
                  - button [ref=e187]:
                    - button [ref=e188]:
                      - img
              - row "Robert Wilson HC-2020-007890 Illinois Healthcare Professional Physical Therapy Expired Today -45 days" [ref=e189]:
                - cell [ref=e190]:
                  - checkbox [ref=e191]
                  - checkbox [ref=e192]
                - cell "Robert Wilson" [ref=e193]
                - cell "HC-2020-007890" [ref=e194]
                - cell "Illinois" [ref=e195]
                - cell "Healthcare Professional Physical Therapy" [ref=e196]:
                  - generic [ref=e197]:
                    - generic [ref=e198]: Healthcare Professional
                    - generic [ref=e199]: Physical Therapy
                - cell "Expired" [ref=e200]:
                  - generic [ref=e201]: Expired
                - cell "Today -45 days" [ref=e202]:
                  - generic [ref=e206]:
                    - generic [ref=e207]: Today
                    - generic [ref=e208]: "-45 days"
                - cell [ref=e209]:
                  - button [ref=e210]:
                    - button [ref=e211]:
                      - img
          - generic [ref=e212]:
            - paragraph [ref=e213]: Showing 1-5 of 5 results
            - generic [ref=e214]:
              - button "Previous" [disabled]
              - button "Next" [disabled]
  - region "Notifications alt+T"
  - alert [ref=e215]
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
> 23 |     await expect(page.getByText(/Filter/i)).toBeVisible();
     |                                             ^ Error: expect(locator).toBeVisible() failed
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
  62 |     await expect(page.getByText(/Renewal Timeline/i)).toBeVisible();
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