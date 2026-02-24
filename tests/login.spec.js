const { test, expect } = require('@playwright/test');
const path = require('path');

test('Valid login should succeed', async ({ page }) => {

  const filePath = 'file://' + path.resolve(__dirname, '../index.html');
  await page.goto(filePath);

  await page.fill('#username', 'qa');
  await page.fill('#password', '1234');
  await page.click('#loginBtn');

  await expect(page.locator('#message')).toHaveText('Login Successful1');
});
