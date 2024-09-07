const { test, expect } = require('@playwright/test');

test('Check button exists on CI Demo', async ({ page }) => {
  await page.goto('https://<username>.github.io/ci-demo');
  const button = await page.$('#demo-button');
  expect(button).not.toBeNull();
});
