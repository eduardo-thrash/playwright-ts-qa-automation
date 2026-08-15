import { HorizontalSliderActions } from '@actions/herokuapp/horizontal-slider-actions';
import { test } from '@fixtures/test';
import { HorizontalSliderValidations } from '@validations/herokuapp/horizontal-slider-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

Given(/^the horizontal slider was set to (\d(?:\.\d)?)$/, async ({ page }, value: string) => {
  const actions = new HorizontalSliderActions(page);
  await actions.openPage();
  await actions.setValue(Number(value));
});
Given('the horizontal slider had a value above 0', async ({ page }) => {
  const actions = new HorizontalSliderActions(page);
  await actions.openPage();
  await actions.setValue(2.5);
});
Given('the horizontal slider had a value below 5', async ({ page }) => {
  const actions = new HorizontalSliderActions(page);
  await actions.openPage();
  await actions.setValue(2.5);
});
When(/^the user moves the slider to (\d(?:\.\d)?)$/, async ({ page }, value: string) =>
  new HorizontalSliderActions(page).setValue(Number(value)),
);
When('the user moves the slider to its minimum', async ({ page }) => new HorizontalSliderActions(page).moveToMinimum());
When('the user moves the slider to its maximum', async ({ page }) => new HorizontalSliderActions(page).moveToMaximum());
When('the user attempts to decrease the value', async ({ page }) => new HorizontalSliderActions(page).decreaseOnce());
When('the user attempts to increase the value', async ({ page }) => new HorizontalSliderActions(page).increaseOnce());
When('the user increases the slider once', async ({ page }) => new HorizontalSliderActions(page).increaseOnce());
When('the user increases and decreases the slider once', async ({ page }) =>
  new HorizontalSliderActions(page).increaseAndDecreaseOnce(),
);
Then(/^the displayed slider value is (\d(?:\.\d)?)$/, async ({ page }, value: string) =>
  new HorizontalSliderValidations(page).expectDisplayedValueToBe(value),
);
Then(/^the displayed slider value remains (\d(?:\.\d)?)$/, async ({ page }, value: string) =>
  new HorizontalSliderValidations(page).expectDisplayedValueToBe(value),
);
