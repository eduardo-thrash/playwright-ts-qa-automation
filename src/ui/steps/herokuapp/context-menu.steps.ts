import { ContextMenuActions } from '@actions/herokuapp/context-menu-actions';
import { test } from '@fixtures/test';
import { ContextMenuValidations } from '@validations/herokuapp/context-menu-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the custom context alert was displayed', async ({ page }) => {
  const actions = new ContextMenuActions(page);
  await actions.openPage();
  await actions.openInside();
});
Given('the user accepted a previous context alert', async ({ page }) => {
  const actions = new ContextMenuActions(page);
  await actions.openPage();
  await actions.openInside();
});
Given('the custom context alert was dismissed', async ({ page }) => {
  const actions = new ContextMenuActions(page);
  await actions.openPage();
  await actions.openInside(false);
});
When('the user opens the context menu inside the target area', async ({ page }) =>
  new ContextMenuActions(page).openInside(),
);
When('the user accepts the alert', async ({ page }) => new ContextMenuActions(page).openInside());
When('the user opens the context menu inside the target area again', async ({ page }) =>
  new ContextMenuActions(page).openInside(),
);
When('the user left-clicks inside the target area', async ({ page }) => new ContextMenuActions(page).leftClickInside());
When('the user opens the context menu outside the target area', async ({ page }) =>
  new ContextMenuActions(page).openOutside(),
);
When('the user opens the context menu at the boundary of the target area', async ({ page }) =>
  new ContextMenuActions(page).openInside(true, { x: 1, y: 1 }),
);
Then('the custom context alert is displayed', async ({ page }) =>
  new ContextMenuValidations(page).expectDialogCountToBe(1),
);
Then('the custom context alert is displayed again', async ({ page }) =>
  new ContextMenuValidations(page).expectDialogCountToBe(1),
);
Then('a new custom context alert is displayed', async ({ page }) =>
  new ContextMenuValidations(page).expectDialogCountToBe(1),
);
Then('the alert text is {string}', async ({ page }, text: string) =>
  new ContextMenuValidations(page).expectDialogTextToBe(text),
);
Then('the alert is closed', async ({ page }) => new ContextMenuValidations(page).expectPageToRemainVisible());
Then('the Context Menu page remains visible', async ({ page }) =>
  new ContextMenuValidations(page).expectPageToRemainVisible(),
);
Then('no custom context alert is displayed', async ({ page }) =>
  new ContextMenuValidations(page).expectDialogCountToBe(0),
);
