import { HomeActions } from '@actions/herokuapp/home-actions';
import { test } from '@fixtures/test';
import { HomeValidations } from '@validations/herokuapp/home-validations';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

Given('the user was on the the-internet homepage', async ({ page }) => {
  await new HomeActions(page).openHomePage();
});

Then('the homepage is displayed', async ({ page }) => {
  await new HomeValidations(page).pageIsDisplayed();
});

When('the user opens the {string} option', async ({ page }, option: string) => {
  await new HomeActions(page).openOption(option);
});

Then('the {string} page is displayed', async ({ page }, option: string) => {
  await new HomeValidations(page).optionPageIsDisplayed(option);
});
