import { DynamicControlsActions } from '@actions/herokuapp/dynamic-controls-actions';
import { test } from '@fixtures/test';
import { DynamicControlsValidations } from '@validations/herokuapp/dynamic-controls-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the dynamic input was disabled', async ({ page }) => new DynamicControlsActions(page).openPage());
Given('the dynamic checkbox was visible', async ({ page }) => new DynamicControlsActions(page).openPage());
Given('the dynamic input was enabled', async ({ page }) => {
  const actions = new DynamicControlsActions(page);
  await actions.openPage();
  await actions.toggleInput();
});
Given('a dynamic control action was in progress', async ({ page }) => {
  const actions = new DynamicControlsActions(page);
  await actions.openPage();
  await actions.startCheckboxChange();
});
Given('the checkbox was visible and the input was disabled', async ({ page }) =>
  new DynamicControlsActions(page).openPage(),
);
Given('the checkbox was removed and the input was enabled', async ({ page }) => {
  const actions = new DynamicControlsActions(page);
  await actions.openPage();
  await actions.toggleCheckbox();
  await actions.toggleInput();
});
When('the user enables the input', async ({ page }) => new DynamicControlsActions(page).toggleInput());
When('enters {string}', async ({ page }, text: string) => new DynamicControlsActions(page).enterText(text));
When('the user removes the checkbox', async ({ page }) => new DynamicControlsActions(page).toggleCheckbox());
When('adds the checkbox again', async ({ page }) => new DynamicControlsActions(page).toggleCheckbox());
When('the user disables the input', async ({ page }) => new DynamicControlsActions(page).toggleInput());
When('the user attempts to enter text', async ({ page }) => new DynamicControlsActions(page).attemptDisabledInput());
When('the user attempts the same action again', async ({ page }) =>
  new DynamicControlsActions(page).attemptDuplicateCheckboxChange(),
);
When('enables the input', async ({ page }) => new DynamicControlsActions(page).toggleInput());
When('the user adds the checkbox', async ({ page }) => new DynamicControlsActions(page).toggleCheckbox());
When('disables the input', async ({ page }) => new DynamicControlsActions(page).toggleInput());
Then('the input contains {string}', async ({ page }, text: string) =>
  new DynamicControlsValidations(page).expectInputValue(text),
);
Then('the enabled confirmation message is visible', async ({ page }) =>
  new DynamicControlsValidations(page).expectMessage(/enabled/i),
);
Then('the checkbox is visible', async ({ page }) => new DynamicControlsValidations(page).expectCheckboxVisible());
Then('the add confirmation message is replaced', async ({ page }) =>
  new DynamicControlsValidations(page).expectMessage(/back/i),
);
Then('the input is disabled', async ({ page }) => new DynamicControlsValidations(page).expectInputDisabled());
Then('the disabled confirmation message is visible', async ({ page }) =>
  new DynamicControlsValidations(page).expectMessage(/disabled/i),
);
Then('the input remains empty', async ({ page }) => new DynamicControlsValidations(page).expectInputValue(''));
Then('the input remains disabled', async ({ page }) => new DynamicControlsValidations(page).expectInputDisabled());
Then('only one state change is completed', async ({ page }) =>
  new DynamicControlsValidations(page).expectCheckboxAbsent(),
);
Then('only one resulting control is visible', async ({ page }) =>
  new DynamicControlsValidations(page).expectOneResultingControl(),
);
Then('the checkbox is absent', async ({ page }) => new DynamicControlsValidations(page).expectCheckboxAbsent());
Then('the input is enabled', async ({ page }) => new DynamicControlsValidations(page).expectInputEnabled());
