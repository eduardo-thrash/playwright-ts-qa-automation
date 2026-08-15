import { ExitIntentActions } from '@actions/herokuapp/exit-intent-actions';
import { test } from '@fixtures/test';
import { ModalValidations } from '@validations/common/modal-validations';
import { ExitIntentValidations } from '@validations/herokuapp/exit-intent-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the exit-intent modal was closed', async ({ page }) => {
  const actions = new ExitIntentActions(page);
  await actions.openPage();
  await actions.triggerExitIntent();
  await actions.closeTriggeredModal();
});
Given('the pointer was inside the viewport', async ({ page }) => {
  const actions = new ExitIntentActions(page);
  await actions.openPage();
  await actions.moveInside();
});
Given('the pointer triggered the exit-intent modal', async ({ page }) => {
  const actions = new ExitIntentActions(page);
  await actions.openPage();
  await actions.triggerExitIntent();
});
When('the pointer leaves the viewport', async ({ page }) => new ExitIntentActions(page).triggerExitIntent());
When('the user returns the pointer to the page', async ({ page }) => new ExitIntentActions(page).moveInside());
When('the pointer crosses the top viewport boundary', async ({ page }) =>
  new ExitIntentActions(page).triggerExitIntent(),
);
When('the user moves the pointer within the page', async ({ page }) => new ExitIntentActions(page).moveInside());
When('the user clicks the page content', async ({ page }) => new ExitIntentActions(page).clickContent());
When('the pointer crosses the exit boundary repeatedly', async ({ page }) =>
  new ExitIntentActions(page).triggerRepeatedly(),
);
Then('the exit-intent modal is visible', async ({ page }) => new ModalValidations(page).expectModalToBeVisible());
Then('the exit-intent modal is not visible', async ({ page }) => new ModalValidations(page).expectModalToBeHidden());
Then('the Exit Intent content is accessible', async ({ page }) =>
  new ExitIntentValidations(page).expectContentAccessible(),
);
Then('no overlay blocks the page', async ({ page }) => new ExitIntentValidations(page).expectNoOverlay());
Then('at most one exit-intent modal is visible', async ({ page }) => new ExitIntentValidations(page).expectOneModal());
Then('one Close action is available', async ({ page }) => new ExitIntentValidations(page).expectOneCloseAction());
