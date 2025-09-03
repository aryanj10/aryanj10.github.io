import { test, expect } from '@playwright/test'

// Simple smoke test checking the home page title

test('home page has expected heading', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Data Scientist/)
})
