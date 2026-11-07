import { expect, test } from '@playwright/test';

test('demo user can sign in and reach the secure area', async ({ page }) => {
  await page.goto('/login', { waitUntil: 'domcontentloaded' });
  // The practice site publishes these demo credentials on its login page.
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/\/secure$/);
  await expect(page.getByRole('heading', { name: 'Secure Area', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
});
