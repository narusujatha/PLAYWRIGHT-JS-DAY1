const{test,expect}= require('@playwright/test');
test('Saucelabs login page',async({page})=>
{
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
  //await expect(page).toHaveTitle(/Swag Labs/);
});

test('Valid Login in SauceDemo',async({page}) =>
{
  await page.goto('https://www.saucedemo.com/')
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.getByRole('button',{name:'Login'}).click();
  //await expect(page.locator('.title')).toHaveText('Products');
  await expect(page.getByText('Products')).toBeVisible();

  //await expect(page.locator('.title')).toHaveText('Products');
}

)

