import { FloatingMenuActions } from '@actions/herokuapp/floating-menu-actions';
import { test } from '@fixtures/test';
import { FloatingMenuValidations } from '@validations/herokuapp/floating-menu-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the floating menu was visible at the top of the page', async ({ page }) =>
  new FloatingMenuActions(page).openPage(),
);
Given('the floating menu was visible', async ({ page }) => new FloatingMenuActions(page).openPage());
When('the user selects Home', async ({ page }) => new FloatingMenuActions(page).selectMenu('Home'));
When('the user selects About', async ({ page }) => new FloatingMenuActions(page).selectMenu('About'));
When('the user scrolls through the page content', async ({ page }) =>
  new FloatingMenuActions(page).scrollThroughContent(),
);
When('the user looks for an unsupported menu option', async ({ page }) => new FloatingMenuActions(page).viewMenu());
When('the user scrolls to the middle', async ({ page }) => new FloatingMenuActions(page).scrollToMiddle());
When('the user rapidly scrolls between the top and bottom', async ({ page }) =>
  new FloatingMenuActions(page).scrollRapidly(),
);
Then('the floating menu remains visible', async ({ page }) => new FloatingMenuValidations(page).expectMenuVisible());
Then('all menu options remain actionable', async ({ page }) =>
  new FloatingMenuValidations(page).expectOptionsActionable(),
);
Then('the Home anchor is present in the URL', async ({ page }) =>
  new FloatingMenuValidations(page).expectHash('#home'),
);
Then('the About anchor is present in the URL', async ({ page }) =>
  new FloatingMenuValidations(page).expectHash('#about'),
);
Then('the floating menu does not leave the viewport', async ({ page }) =>
  new FloatingMenuValidations(page).expectMenuVisible(),
);
Then('no unsupported menu option is actionable', async ({ page }) =>
  new FloatingMenuValidations(page).expectUnsupportedOptionAbsent(),
);
Then('the documented menu remains unchanged', async ({ page }) =>
  new FloatingMenuValidations(page).expectOptionsActionable(),
);
Then('only one floating menu is rendered', async ({ page }) => new FloatingMenuValidations(page).expectOneMenu());
