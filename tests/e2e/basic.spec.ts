import { test, expect } from '@playwright/test';

test.describe('Basic Functionality', () => {
  test('health endpoint returns 200', async ({ request }) => {
    const response = await request.get('/health');
    expect(response.status()).toBe(200);
    const json = await response.json();
    expect(json.status).toBe('healthy');
  });

  test('landing page loads', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('pricing page loads with 3 tiers', async ({ page }) => {
    await page.goto('/pricing');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.getByRole('heading', { name: 'Explorer' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Professional' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Enterprise' })).toBeVisible();
  });

  test('login page loads', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.getByText(/Welcome back/)).toBeVisible();
  });

  test('signup page loads', async ({ page }) => {
    await page.goto('/signup');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.getByText(/Start your free trial/)).toBeVisible();
  });

  test('about page loads', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('privacy page loads', async ({ page }) => {
    await page.goto('/privacy');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('docs page loads', async ({ page }) => {
    await page.goto('/docs');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('deck page loads', async ({ page }) => {
    await page.goto('/deck');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('dashboard page loads', async ({ page }) => {
    await page.goto('/dashboard');
    await expect(page).toHaveTitle(/RenewalIQ/);
  });

  test('mobile responsive - landing page', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
  });

  test('tablet responsive - landing page', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
  });

  test('desktop responsive - landing page', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    await expect(page.locator('header')).toBeVisible();
  });
});
