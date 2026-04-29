import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('login page loads', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.getByText(/Welcome back/i)).toBeVisible();
    await expect(page.getByPlaceholder(/email/i)).toBeVisible();
    await expect(page.getByPlaceholder(/password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign In/i })).toBeVisible();
  });

  test('signup page loads', async ({ page }) => {
    await page.goto('/signup');
    await expect(page).toHaveTitle(/RenewalIQ/);
    await expect(page.getByText(/Start your free trial/i)).toBeVisible();
    await expect(page.getByPlaceholder(/Full Name/i)).toBeVisible();
    await expect(page.getByPlaceholder(/Work Email/i)).toBeVisible();
    await expect(page.getByPlaceholder(/Password/i)).toBeVisible();
    await expect(page.getByPlaceholder(/Company Name/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Start Free Trial/i })).toBeVisible();
  });

  test('Google OAuth button is present on login', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('button', { name: /Sign in with Google/i })).toBeVisible();
  });

  test('Google OAuth button is present on signup', async ({ page }) => {
    await page.goto('/signup');
    await expect(page.getByRole('button', { name: /Sign up with Google/i })).toBeVisible();
  });

  test('login form has required fields', async ({ page }) => {
    await page.goto('/login');
    
    // Try to submit without filling fields
    await page.getByRole('button', { name: /Sign In/i }).click();
    
    // Check that validation prevents submission (form should still be visible)
    await expect(page.getByPlaceholder(/email/i)).toBeVisible();
  });

  test('signup form has required fields', async ({ page }) => {
    await page.goto('/signup');
    
    // Try to submit without filling fields
    await page.getByRole('button', { name: /Start Free Trial/i }).click();
    
    // Check that validation prevents submission
    await expect(page.getByPlaceholder(/Full Name/i)).toBeVisible();
  });

  test('terms and privacy links on signup', async ({ page }) => {
    await page.goto('/signup');
    
    await page.getByRole('link', { name: /Terms of Service/i }).click();
    await expect(page).toHaveURL('/terms');
    
    await page.goto('/signup');
    await page.getByRole('link', { name: /Privacy Policy/i }).click();
    await expect(page).toHaveURL('/privacy');
  });

  test('forgot password link exists', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByRole('link', { name: /Forgot password/i })).toBeVisible();
  });

  test('navigation between login and signup', async ({ page }) => {
    await page.goto('/login');
    await page.getByRole('link', { name: /Sign up/i }).click();
    await expect(page).toHaveURL('/signup');

    await page.getByRole('link', { name: /Sign in/i }).click();
    await expect(page).toHaveURL('/login');
  });
});
