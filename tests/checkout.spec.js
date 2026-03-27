// tests/checkout.spec.js
const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');
const testData = require('../test-data/testData');

test.describe('SauceDemo Checkout', () => {
  test('user can add item to cart and complete checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
    await loginPage.login(
      testData.users.standard.username,
      testData.users.standard.password
    );

    await inventoryPage.verifyInventoryLoaded();
    await inventoryPage.addItemToCart(testData.products.backpack);
    await inventoryPage.openCart();

    await cartPage.verifyCartLoaded();
    await cartPage.verifyItemPresent(testData.products.backpack);
    await cartPage.clickCheckout();

    await checkoutPage.fillCheckoutInfo(
      testData.checkout.firstName,
      testData.checkout.lastName,
      testData.checkout.postalCode
    );

    await checkoutPage.finishOrder();
    await checkoutPage.verifyOrderSuccess();
  });
});
