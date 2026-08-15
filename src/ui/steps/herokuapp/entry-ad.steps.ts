import { EntryAdActions } from '@actions/herokuapp/entry-ad-actions';
import { test } from '@fixtures/test';
import { ModalValidations } from '@validations/common/modal-validations';
import { EntryAdValidations } from '@validations/herokuapp/entry-ad-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the entry modal was visible', async ({ page }) => new EntryAdActions(page).openCleanPage());
Given('the entry modal was closed', async ({ page }) => {
  const actions = new EntryAdActions(page);
  await actions.openCleanPage();
  await actions.closeModal();
});
Given('no Entry Ad state was stored', async ({ page }) => page.context().clearCookies());
Given('the Entry Ad page was visible', async ({ page }) => new EntryAdActions(page).openPage());
When('the user re-enables the entry modal', async ({ page }) => new EntryAdActions(page).reEnableModal());
When('the user reloads the Entry Ad page', async ({ page }) => new EntryAdActions(page).reloadPage());
When('the user attempts to interact with the covered page content', async ({ page }) =>
  new EntryAdActions(page).attemptCoveredInteraction(),
);
When('the modal activation is requested again', async ({ page }) => new EntryAdActions(page).requestActivationAgain());
When('the user opens the Entry Ad page', async ({ page }) => new EntryAdActions(page).openPage());
When('the user repeatedly re-enables and closes the modal', async ({ page }) =>
  new EntryAdActions(page).reEnableAndCloseRepeatedly(),
);
Then('the Entry Ad content is accessible', async ({ page }) => new EntryAdValidations(page).expectContentAccessible());
Then('the entry modal is visible again', async ({ page }) => new ModalValidations(page).expectModalToBeVisible());
Then('the page content is visible', async ({ page }) => new EntryAdValidations(page).expectContentAccessible());
Then('the covered interaction is not completed', async ({ page }) =>
  new EntryAdValidations(page).expectCoveredInteractionNotCompleted(),
);
Then('only one entry modal is visible', async ({ page }) => new ModalValidations(page).expectOnlyOneModal());
Then('the entry modal is visible', async ({ page }) => new ModalValidations(page).expectModalToBeVisible());
Then('the Close action is available', async ({ page }) => new ModalValidations(page).expectCloseActionToBeAvailable());
