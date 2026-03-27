// tests/login.spec.js
const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const testData = require('../test-data/testData');

test.describe('SauceDemo Login', () => {
  test('valid login should navigate to inventory page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.verifyLoginPageLoaded();
    await loginPage.login(
      testData.users.standard.username,
      testData.users.standard.password
    );

    await inventoryPage.verifyInventoryLoaded();
  });

  test('locked out user should see error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(
      testData.users.locked.username,
      testData.users.locked.password
    );

    await loginPage.verifyErrorContains('Sorry, this user has been locked out');
  });
});