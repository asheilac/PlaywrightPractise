import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // create a locator
  const getStarted = page.locator('text=Get Started');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('BBCNews homepage has News in the title and link to the english news page', async ({page})=>{
  await page.goto('https://www.bbc.co.uk/news');

  await expect(page).toHaveTitle(/News/);

  const england = page.locator('text=england').first();

  await expect(england).toHaveAttribute('href','/news/england');

  await england.click();

  await expect(page).toHaveURL(/.*england/);
});

test('Starbucks homepage has Starbucks in the title and link to the find a store page',async ({page}) => {
  await page.goto('https://www.starbucks.co.uk/');

  await expect(page).toHaveTitle(/Starbucks/);
  
  const findStore = page.locator('text=menu-item-find-a-store');

  await expect(findStore).toHaveAttribute('href','/store-locator');
});

test('SkewerHouse homepage has SkewerHouseTaunton in the title and link to the takeaway page',async ({page}) => {
  await page.goto('https://www.skewerhousetaunton.co.uk/');

  await expect(page).toHaveTitle(/skewerhousetaunton/);
  
  const findStore = page.locator('text=Takeaway');

  await expect(findStore).toHaveAttribute('href','https://www.skewerhousetaunton.co.uk/takeaway');
});

test('Admiralty homepage has Admiralty in the title and link to the Accessibility page',async ({page}) => {
  await page.goto('https://www.admiralty.co.uk/');

  await expect(page).toHaveTitle(/ADMIRALTY/);
  
  const accessibility = page.locator('text=Accessibility');

  await expect(accessibility).toHaveAttribute('href','/accessibility');

  await Promise.all([accessibility.click(), page.waitForNavigation()])

  await expect(page).toHaveURL(/.*accessibility/);
});

test('Demoblaze homepage has cart',async ({page}) => {
  await page.goto('https://www.demoblaze.com/');

  const cart = page.locator('text=Cart').first();

  await expect(cart).toHaveAttribute('href','cart.html');

  await cart.click();

  await expect(page).toHaveURL(/.*cart.html/);
});

