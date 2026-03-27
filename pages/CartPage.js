// pages/CartPage.js
const { expect } = require('@playwright/test');

class CartPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  cartItem(productName) {
    return this.page.locator('.cart_item', { hasText: productName });
  }

  async verifyCartLoaded() {
    await expect(this.title).toHaveText('Your Cart');
  }

  async verifyItemPresent(productName) {
    await expect(this.cartItem(productName)).toBeVisible();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
