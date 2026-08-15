import { DynamicLoadingActions } from '@actions/herokuapp/dynamic-loading-actions';
import { test } from '@fixtures/test';
import { DynamicLoadingValidations } from '@validations/herokuapp/dynamic-loading-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given(/^the user was on Dynamic Loading Example ([12])$/, async ({ page }, example: string) =>
  new DynamicLoadingActions(page).openExample(Number(example) as 1 | 2),
);
Given('dynamic loading was in progress', async ({ page }) => {
  const actions = new DynamicLoadingActions(page);
  await actions.openExample(1);
  await actions.startLoadingWithoutWaiting();
});
Given('"Hello World!" was displayed in a dynamic example', async ({ page }) => {
  const actions = new DynamicLoadingActions(page);
  await actions.openExample(1);
  await actions.startLoading();
});
When('the user starts the dynamic loading', async ({ page }) => new DynamicLoadingActions(page).startLoading());
When('the user has not started the dynamic loading', async ({ page }) =>
  new DynamicLoadingActions(page).reopenCurrentExample(),
);
When('the user views the loading controls', async ({ page }) => new DynamicLoadingActions(page).viewLoadingControls());
When('the user reopens the same example', async ({ page }) => new DynamicLoadingActions(page).reopenCurrentExample());
When('the user opens each documented example', async ({ page }) => new DynamicLoadingActions(page).openEveryExample());
Then('"Hello World!" is displayed', async ({ page }) =>
  new DynamicLoadingValidations(page).expectFinalTextToBeDisplayed(),
);
Then('the loading indicator is hidden', async ({ page }) =>
  new DynamicLoadingValidations(page).expectLoadingIndicatorToBeHidden(),
);
Then('the loading indicator is visible', async ({ page }) =>
  new DynamicLoadingValidations(page).expectLoadingIndicatorToBeVisible(),
);
Then('the Start action is not available', async ({ page }) =>
  new DynamicLoadingValidations(page).expectStartActionToBeHidden(),
);
Then('the Start action is available again', async ({ page }) =>
  new DynamicLoadingValidations(page).expectStartActionToBeAvailable(),
);
Then('the final content is initially hidden or absent', async ({ page }) =>
  new DynamicLoadingValidations(page).expectFinalTextToBeHidden(),
);
Then('each example provides a Start action', async ({ page }) =>
  new DynamicLoadingValidations(page).expectExamplesToBeDocumented(),
);
Then('each example identifies its loading strategy', async ({ page }) =>
  new DynamicLoadingValidations(page).expectExamplesToBeDocumented(),
);
