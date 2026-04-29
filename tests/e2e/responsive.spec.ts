import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'mobile', width: 375, height: 667 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'desktop', width: 1280, height: 800 },
  ];

  test.describe('Landing Page Responsiveness', () => {
    viewports.forEach(({ name, width, height }) => {
      test(`landing page renders on ${name} (${width}x${height})`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/');
        
        // Check navbar is visible
        await expect(page.getByRole('navigation')).toBeVisible();
        
        // Check hero section is visible
        await expect(page.getByRole('heading', { name: /Real-time license data/i })).toBeVisible();
        
        // Check footer is visible
        await expect(page.getByText('©')).toBeVisible();
        
        // Take screenshot for visual verification
        await page.screenshot({ 
          path: `tests/screenshots/landing-${name}.png`,
          fullPage: true 
        });
      });
    });
  });

  test.describe('Pricing Page Responsiveness', () => {
    viewports.forEach(({ name, width, height }) => {
      test(`pricing page renders on ${name} (${width}x${height})`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/pricing');
        
        // Check pricing tiers are visible
        await expect(page.getByText('Explorer')).toBeVisible();
        await expect(page.getByText('Professional')).toBeVisible();
        await expect(page.getByText('Enterprise')).toBeVisible();
        
        // Take screenshot for visual verification
        await page.screenshot({ 
          path: `tests/screenshots/pricing-${name}.png`,
          fullPage: true 
        });
      });
    });
  });

  test.describe('Dashboard Responsiveness', () => {
    viewports.forEach(({ name, width, height }) => {
      test(`dashboard renders on ${name} (${width}x${height})`, async ({ page }) => {
        await page.setViewportSize({ width, height });
        await page.goto('/dashboard');
        
        // Check dashboard elements are visible
        await expect(page.getByText(/Dashboard/i)).toBeVisible();
        
        // Take screenshot for visual verification
        await page.screenshot({ 
          path: `tests/screenshots/dashboard-${name}.png`,
          fullPage: true 
        });
      });
    });
  });

  test('mobile menu toggle works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check mobile menu button is visible
    const menuButton = page.getByLabel('Toggle menu');
    await expect(menuButton).toBeVisible();
    
    // Click to open menu
    await menuButton.click();
    
    // Check mobile navigation is visible
    await expect(page.getByRole('navigation').locator('a').first()).toBeVisible();
    
    // Click to close menu
    await menuButton.click();
  });
});
