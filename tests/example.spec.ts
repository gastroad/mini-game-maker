import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/maze-maker/);
});

test('maze-maker', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  await page.getByRole('link', { name: 'Make' }).click()
  await expect(page.getByRole('heading', { name: 'Maker' })).toBeVisible();
  await page.click('#body > div > div.maze-form > div:nth-child(1) > input')
  await page.keyboard.type('playwright test map name');
  await page.click('#body > div > div.maze-form > div:nth-child(2) > input')
  await page.keyboard.type('playwright test maker name');
  await page.click('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(2)');
  await page.click('#body > div > div.maker-maze-controller > div:nth-child(2) > button:nth-child(1)');
  await page.click('#body > div > div.maze-maker > div > div:nth-child(1) > div:nth-child(3)');
  await page.click('#body > div > div.maze-maker > div > div:nth-child(3) > div:nth-child(1)');
  await page.click('#body > div > div.maker-maze-controller > div:nth-child(1) > button:nth-child(2)');
  await page.click('#body > div > div.maze-maker > div > div:nth-child(5) > div:nth-child(4)');
  await page.click('#body > div > div.maker-maze-controller > button');

  await expect(page).toHaveTitle(/maze-maker/);
  await page.click('#body > div > a:nth-child(2)');

  await expect(page).toHaveTitle(/maze-maker-maplist/);
  await page.screenshot({ path: 'example.png' });




});
