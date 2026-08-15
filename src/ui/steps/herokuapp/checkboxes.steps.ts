import { CheckboxesActions } from '@actions/herokuapp/checkboxes-actions';
import { test } from '@fixtures/test';
import { CheckboxesValidations } from '@validations/herokuapp/checkboxes-validations';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

Given('the first checkbox was unchecked and the second was checked', async ({ page }) => {
  await new CheckboxesActions(page).openPage();
});
Given('the first checkbox was unchecked', async ({ page }) => new CheckboxesActions(page).openPage());
Given('the second checkbox was checked', async ({ page }) => new CheckboxesActions(page).openPage());
Given('the first checkbox was checked', async ({ page }) => {
  const actions = new CheckboxesActions(page);
  await actions.openPage();
  await actions.checkCheckbox(1);
});
Given('the first checkbox had keyboard focus', async ({ page }) => {
  const actions = new CheckboxesActions(page);
  await actions.openPage();
  await actions.focusCheckbox(1);
});

When('the user checks the first checkbox', async ({ page }) => new CheckboxesActions(page).checkCheckbox(1));
When('unchecks the second checkbox', async ({ page }) => new CheckboxesActions(page).uncheckCheckbox(2));
When('the user unchecks the second checkbox', async ({ page }) => new CheckboxesActions(page).uncheckCheckbox(2));
When('the user requests the checked state again', async ({ page }) => new CheckboxesActions(page).checkCheckbox(1));
When('the user checks both checkboxes', async ({ page }) => {
  const actions = new CheckboxesActions(page);
  await actions.checkCheckbox(1);
  await actions.checkCheckbox(2);
});
When('the user presses Space on the focused checkbox', async ({ page }) =>
  new CheckboxesActions(page).toggleFocusedCheckbox(),
);
When('the checkbox group is displayed', async ({ page }) => new CheckboxesActions(page).focusCheckbox(1));

Then('the first checkbox is checked', async ({ page }) => new CheckboxesValidations(page).expectCheckboxToBeChecked(1));
Then('the first checkbox remains checked', async ({ page }) =>
  new CheckboxesValidations(page).expectCheckboxToBeChecked(1),
);
Then('the second checkbox is unchecked', async ({ page }) =>
  new CheckboxesValidations(page).expectCheckboxToBeUnchecked(2),
);
Then('exactly two checkboxes are available', async ({ page }) =>
  new CheckboxesValidations(page).expectCheckboxCountToBe(2),
);
Then('no third checkbox is actionable', async ({ page }) => new CheckboxesValidations(page).expectCheckboxCountToBe(2));
Then('no additional checkbox is created', async ({ page }) =>
  new CheckboxesValidations(page).expectCheckboxCountToBe(2),
);
Then('the first checkbox changes its selected state', async ({ page }) =>
  new CheckboxesValidations(page).expectCheckboxToBeChecked(1),
);
Then('both checkboxes are checked', async ({ page }) => {
  const validations = new CheckboxesValidations(page);
  await validations.expectCheckboxToBeChecked(1);
  await validations.expectCheckboxToBeChecked(2);
});
