import { MultipleWindowsActions } from '@actions/herokuapp/multiple-windows-actions';
import { test } from '@fixtures/test';
import { MultipleWindowsValidations } from '@validations/herokuapp/multiple-windows-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the new window was opened', async ({ page }) => new MultipleWindowsActions(page).openWindow());
When('the user opens the new window', async ({ page }) => new MultipleWindowsActions(page).openWindow());
When('the user returns to the original window', async ({ page }) =>
  new MultipleWindowsActions(page).returnToOriginal(),
);
When('the user closes the new window', async ({ page }) => new MultipleWindowsActions(page).closeLatestWindow());
When('the user interacts outside the new-window link', async ({ page }) =>
  new MultipleWindowsActions(page).interactOutsideLink(),
);
When('the user activates the new-window link twice', async ({ page }) =>
  new MultipleWindowsActions(page).openTwoWindows(),
);
When('the user switches between both windows repeatedly', async ({ page }) =>
  new MultipleWindowsActions(page).switchRepeatedly(),
);
Then('a second window is created', async ({ page }) =>
  new MultipleWindowsValidations(page).expectAdditionalWindowCount(1),
);
Then('the new window heading is {string}', async ({ page }, text: string) =>
  new MultipleWindowsValidations(page).expectChildHeadings(text),
);
Then('the original window heading is {string}', async ({ page }, text: string) =>
  new MultipleWindowsValidations(page).expectOriginalHeading(text),
);
Then('the Click Here link remains available', async ({ page }) =>
  new MultipleWindowsValidations(page).expectLinkAvailable(),
);
Then('the original window remains open', async ({ page }) => new MultipleWindowsValidations(page).expectOriginalOpen());
Then('its content is visible', async ({ page }) => new MultipleWindowsValidations(page).expectOriginalOpen());
Then('no additional window is created', async ({ page }) =>
  new MultipleWindowsValidations(page).expectNoAdditionalWindow(),
);
Then('its URL remains unchanged', async ({ page }) => new MultipleWindowsValidations(page).expectOriginalUrl());
Then('two additional windows are created', async ({ page }) =>
  new MultipleWindowsValidations(page).expectAdditionalWindowCount(2),
);
Then('each new window displays {string}', async ({ page }, text: string) =>
  new MultipleWindowsValidations(page).expectChildHeadings(text),
);
Then('both windows remain accessible', async ({ page }) => new MultipleWindowsValidations(page).expectBothAccessible());
Then('each window retains its expected heading', async ({ page }) => {
  const validation = new MultipleWindowsValidations(page);
  await validation.expectOriginalHeading('Opening a new window');
  await validation.expectChildHeadings('New Window');
});
