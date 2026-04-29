import { test, expect } from '@playwright/test';

test.describe('Pricing Page', () => {
  test('pricing page loads with 3 tiers', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page).toHaveTitle(/RenewalIQ/);
    
    // Check all 3 pricing tiers are present
    await expect(page.getByText('Explorer')).toBeVisible();
    await expect(page.getByText('Professional')).toBeVisible();
    await expect(page.getByText('Enterprise')).toBeVisible();
  });

  test('pricing tiers show correct prices', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check prices
    await expect(page.getByText('$99')).toBeVisible();
    await expect(page.getByText('$499')).toBeVisible();
    await expect(page.getByText('$999')).toBeVisible();
  });

  test('Professional tier is marked as popular', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check that Professional tier has "Most Popular" badge
    const professionalCard = page.getByText('Professional').locator('..').locator('..');
    await expect(professionalCard.getByText(/Most Popular/i)).toBeVisible();
  });

  test('pricing tiers have CTA buttons', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check all tiers have CTA buttons
    const ctaButtons = page.getByRole('button', { name: /Start Free Trial/i });
    await expect(ctaButtons).toHaveCount(3);
  });

  test('pricing page has FAQ section', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check FAQ section exists
    await expect(page.getByText(/Frequently asked questions/i)).toBeVisible();
    
    // Check FAQ items
    await expect(page.getByText(/Can I change plans later/i)).toBeVisible();
    await expect(page.getByText(/Is there an annual discount/i)).toBeVisible();
    await expect(page.getByText(/What payment methods/i)).toBeVisible();
  });

  test('pricing features are listed', async ({ page }) => {
    await page.goto('/pricing');
    
    // Check key features are listed
    await expect(page.getByText(/Unlimited searches/i)).toBeVisible();
    await expect(page.getByText(/All 50 states/i)).toBeVisible();
    await expect(page.getByText(/CRM Sync/i)).toBeVisible();
    await expect(page.getByText(/Renewal alerts/i)).toBeVisible();
  });
});
