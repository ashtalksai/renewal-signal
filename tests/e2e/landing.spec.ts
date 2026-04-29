import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('landing page loads with all sections', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/RenewalIQ/);

    // Check navbar is present
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByText('RenewalIQ')).toBeVisible();

    // Check hero section
    await expect(page.getByText(/Real-time license data for/)).toBeVisible();
    await expect(page.getByText(/B2B sales teams/)).toBeVisible();
    
    // Check problem section exists
    await expect(page.getByText(/Your directory is 4 months old/)).toBeVisible();
    
    // Check solution section
    await expect(page.getByText(/How It Works/)).toBeVisible();
    
    // Check features section
    await expect(page.getByText(/Advanced Search/)).toBeVisible();
    await expect(page.getByText(/Renewal Alerts/)).toBeVisible();

    // Check footer is present
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.getByText('Privacy Policy')).toBeVisible();
    await expect(page.getByText('Terms of Service')).toBeVisible();
  });

  test('hero section has CTA buttons', async ({ page }) => {
    await expect(page.getByRole('link', { name: /Start Free Trial/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /View Pricing/i })).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.getByRole('link', { name: 'Pricing' }).click();
    await expect(page).toHaveURL('/pricing');

    await page.goto('/');
    await page.getByRole('link', { name: 'About' }).click();
    await expect(page).toHaveURL('/about');
  });

  test('mobile responsive layout', async ({ page }) => {
    // Test mobile viewport (375px)
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('header')).toBeVisible();
    
    // Check mobile menu button is visible
    await expect(page.getByLabel('Toggle menu')).toBeVisible();
  });

  test('tablet responsive layout', async ({ page }) => {
    // Test tablet viewport (768px)
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('header')).toBeVisible();
  });

  test('desktop responsive layout', async ({ page }) => {
    // Test desktop viewport (1280px)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.locator('header')).toBeVisible();
  });
});
