// pages/InventoryPage.js
const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  addProductToCart(productName) {
    return this.page.locator('.inventory_item', { hasText: productName })
      .locator('button');
  }

  async verifyInventoryLoaded() {
    await expect(this.title).toHaveText('Products');
  }

  async addItemToCart(productName) {
    await this.addProductToCart(productName).click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = InventoryPage;
