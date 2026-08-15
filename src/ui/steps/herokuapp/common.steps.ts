import { test } from '@fixtures/test';
import { CommonValidations } from '@validations/common/common-validations';
import { createBdd } from 'playwright-bdd';

const { Then } = createBdd(test);

Then('the page remains usable', async ({ page }) => {
  await new CommonValidations(page).expectPageToRemainUsable();
});

Then('the page remains responsive', async ({ page }) => {
  await new CommonValidations(page).expectPageToRemainResponsive();
});

Then('the page content remains available', async ({ page }) => {
  await new CommonValidations(page).expectPageToRemainUsable();
});

Then('the page content remains visible', async ({ page }) => {
  await new CommonValidations(page).expectPageToRemainUsable();
});

Then('{string} is visible', async ({ page }, text: string) => {
  await new CommonValidations(page).expectTextToBeVisible(text);
});

Then('{string} remains visible', async ({ page }, text: string) => {
  await new CommonValidations(page).expectTextToBeVisible(text);
});

Then('{string} is not visible', async ({ page }, text: string) => {
  await new CommonValidations(page).expectTextToBeHidden(text);
});

Then('{string} is not present', async ({ page }, text: string) => {
  await new CommonValidations(page).expectTextNotToBePresent(text);
});

Then('the result is {string}', async ({ page }, text: string) => {
  await new CommonValidations(page).expectResultTextToBe(text);
});
