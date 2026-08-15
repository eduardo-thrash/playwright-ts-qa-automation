import { InputsActions } from '@actions/herokuapp/inputs-actions';
import { test } from '@fixtures/test';
import { InputsValidations } from '@validations/herokuapp/inputs-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);

Given('the number input value was 10', async ({ page }) => {
  const actions = new InputsActions(page);
  await actions.openPage();
  await actions.enterNumber('10');
  await actions.focusInput();
});
Given('an unsupported number representation was entered', async ({ page }) => {
  const actions = new InputsActions(page);
  await actions.openPage();
  await actions.enterUnsupportedNumber();
});
When(/^the user enters (-?\d+)$/, async ({ page }, value: string) => new InputsActions(page).enterNumber(value));
When('the user presses ArrowUp', async ({ page }) => new InputsActions(page).pressArrowUp());
When('the user attempts to enter alphabetic text', async ({ page }) => new InputsActions(page).enterAlphabeticText());
When('the number input processes the value', async ({ page }) => new InputsActions(page).focusInput());
Then(/^the number input value is (-?\d+)$/, async ({ page }, value: string) =>
  new InputsValidations(page).expectValueToBe(value),
);
Then('the number input contains no alphabetic value', async ({ page }) =>
  new InputsValidations(page).expectValueToContainNoLetters(),
);
Then('no unsupported value is retained', async ({ page }) =>
  new InputsValidations(page).expectUnsupportedValueNotToBeRetained(),
);
Then('the complete number input value is retained', async ({ page }) =>
  new InputsValidations(page).expectValueToBe('9007199254740991'),
);
