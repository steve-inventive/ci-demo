const { test, expect } = require('@playwright/test');

test('Check button exists on CI Demo', async ({ browser }) => {
  const context = await browser.newContext({ headless: true });
  const page = await context.newPage();
  await page.goto('https://steve-inventive.github.io/ci-demo');
  const button = await page.$('#demo-button2');
  expect(button).not.toBeNull();
});
