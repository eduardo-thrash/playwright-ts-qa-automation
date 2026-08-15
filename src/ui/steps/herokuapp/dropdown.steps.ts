import { DropdownActions } from '@actions/herokuapp/dropdown-actions';
import { test } from '@fixtures/test';
import { DropdownValidations } from '@validations/herokuapp/dropdown-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

Given('{string} was selected', async ({ page }, option: string) => {
  const actions = new DropdownActions(page);
  await actions.openPage();
  await actions.selectOption(option);
});
Given('the dropdown had keyboard focus', async ({ page }) => {
  const actions = new DropdownActions(page);
  await actions.openPage();
  await actions.focusDropdown();
});
When('the user selects {string}', async ({ page }, option: string) => new DropdownActions(page).selectOption(option));
When('the user selects {string} again', async ({ page }, option: string) =>
  new DropdownActions(page).selectOption(option),
);
When('the user attempts to select the placeholder', async ({ page }) => new DropdownActions(page).selectOption(''));
When('the user requests an unsupported option', async ({ page }) =>
  new DropdownActions(page).requestUnsupportedOption(),
);
When('the user selects the next option with the keyboard', async ({ page }) =>
  new DropdownActions(page).selectNextOptionWithKeyboard(),
);
Then('{string} is selected', async ({ page }, option: string) =>
  new DropdownValidations(page).expectOptionToBeSelected(option),
);
Then('{string} remains selected', async ({ page }, option: string) =>
  new DropdownValidations(page).expectOptionToBeSelected(option),
);
Then('{string} is not selected', async ({ page }, option: string) =>
  new DropdownValidations(page).expectOptionNotToBeSelected(option),
);
Then('the placeholder remains disabled', async ({ page }) =>
  new DropdownValidations(page).expectPlaceholderToRemainDisabled(),
);
Then('no enabled option is selected', async ({ page }) =>
  new DropdownValidations(page).expectNoEnabledOptionToBeSelected(),
);
Then('no unsupported option is selected', async ({ page }) =>
  new DropdownValidations(page).expectUnsupportedOptionNotToBeSelected(),
);
Then('the available options remain unchanged', async ({ page }) =>
  new DropdownValidations(page).expectAvailableOptionsToRemainUnchanged(),
);
Then('only one option is selected', async ({ page }) =>
  new DropdownValidations(page).expectOnlyOneOptionToBeSelected(),
);
