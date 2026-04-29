import { test, expect } from '@playwright/test';

test.describe('Dashboard', () => {
  test('dashboard page loads', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveTitle(/RenewalIQ/);
    
    // Check dashboard elements
    await expect(page.getByText(/Dashboard/i)).toBeVisible();
  });

  test('dashboard has search functionality', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Check search bar is present
    await expect(page.getByPlaceholder(/Search/i)).toBeVisible();
  });

  test('dashboard has filter panel', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Check filter button/panel exists
    await expect(page.getByText(/Filter/i)).toBeVisible();
  });

  test('dashboard has export button', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Check export button exists
    await expect(page.getByRole('button', { name: /Export/i })).toBeVisible();
  });

  test('license table is present', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Check table structure
    const table = page.getByRole('table');
    await expect(table).toBeVisible();
  });

  test('dashboard sidebar navigation', async ({ page }) => {
    await page.goto('/dashboard');
    
    // Check sidebar is present
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});

test.describe('License Detail Page', () => {
  test('license detail page loads', async ({ page }) => {
    await page.goto('/dashboard/license/1');
    await expect(page).toHaveTitle(/RenewalIQ/);
    
    // Check license detail elements
    await expect(page.getByText(/Professional Information/i)).toBeVisible();
  });

  test('license detail has renewal timeline', async ({ page }) => {
    await page.goto('/dashboard/license/1');
    
    // Check renewal timeline component
    await expect(page.getByText(/Renewal Timeline/i)).toBeVisible();
  });

  test('license detail has action buttons', async ({ page }) => {
    await page.goto('/dashboard/license/1');
    
    // Check action buttons
    await expect(page.getByRole('button', { name: /Export/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Set Alert/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Share/i })).toBeVisible();
  });
});
