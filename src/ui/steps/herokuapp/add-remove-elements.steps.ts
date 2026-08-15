import { AddRemoveElementsActions } from '@actions/herokuapp/add-remove-elements-actions';
import { test } from '@fixtures/test';
import { AddRemoveElementsValidations } from '@validations/herokuapp/add-remove-elements-validations';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd(test);

Given('three elements were added', async ({ page }) => {
  const actions = new AddRemoveElementsActions(page);
  await actions.openPage();
  await actions.addElements(3);
});

Given('no removable element was available', async ({ page }) => {
  await new AddRemoveElementsActions(page).openPage();
});

Given('one added element was removed', async ({ page }) => {
  const actions = new AddRemoveElementsActions(page);
  await actions.openPage();
  await actions.addElements(1);
  await actions.removeElements(1);
});

When('the user adds one element', async ({ page }) => new AddRemoveElementsActions(page).addElements(1));
When('the user adds three elements', async ({ page }) => new AddRemoveElementsActions(page).addElements(3));
When('the user adds fifty elements', async ({ page }) => new AddRemoveElementsActions(page).addElements(50));
When('removes the added element', async ({ page }) => new AddRemoveElementsActions(page).removeElements(1));
When('the user removes one element', async ({ page }) => new AddRemoveElementsActions(page).removeElements(1));
When('the user repeatedly adds and removes an element', async ({ page }) =>
  new AddRemoveElementsActions(page).addAndRemoveRepeatedly(),
);
When('the user views the removal area', async ({ page }) =>
  new AddRemoveElementsActions(page).viewRemovalArea(),
);
When('the user views the removal area again', async ({ page }) =>
  new AddRemoveElementsActions(page).viewRemovalArea(),
);

Then('no Delete button is visible', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(0),
);
Then('no Delete button remains visible', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(0),
);
Then('the removed element is no longer actionable', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(0),
);
Then('three Delete buttons are visible', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(3),
);
Then('two Delete buttons remain visible', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(2),
);
Then('fifty Delete buttons are visible', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(50),
);
Then('the number of Delete buttons matches the remaining elements', async ({ page }) =>
  new AddRemoveElementsValidations(page).expectDeleteButtonCountToBe(0),
);
