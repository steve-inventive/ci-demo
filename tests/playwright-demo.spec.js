const { test, expect } = require('@playwright/test');

test('Check button and h1 text on CI Demo', async ({ page }) => {
  await page.goto('https://steve-inventive.github.io/ci-demo');  

  // Check if the <h1> tag contains the correct text
  const headerText = await page.textContent('h1');
  expect.soft(headerText).toBe('Welcome to Demo Website');
  console.log('made it past the H1 text check');

  // Check if the button exists
  const button = await page.$('#demo-button-fail');
  expect.soft(button).not.toBeNull();
  console.log('passing button check');

});
