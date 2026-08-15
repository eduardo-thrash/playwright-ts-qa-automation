import { DisappearingElementsActions } from '@actions/herokuapp/disappearing-elements-actions';
import { test } from '@fixtures/test';
import { DisappearingElementsValidations } from '@validations/herokuapp/disappearing-elements-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the Disappearing Elements menu was visible', async ({ page }) => {
  const actions = new DisappearingElementsActions(page);
  await actions.openPage();
  await actions.waitForMenu();
});
Given('Gallery was absent from the navigation menu', async ({ page }) =>
  new DisappearingElementsActions(page).reloadUntilGallery(false),
);
Given('Gallery was present in the navigation menu', async ({ page }) =>
  new DisappearingElementsActions(page).reloadUntilGallery(true),
);
When('the navigation menu loads', async ({ page }) => new DisappearingElementsActions(page).waitForMenu());
When('the user opens Home', async ({ page }) => new DisappearingElementsActions(page).openHome());
When('the user reloads the page', async ({ page }) => new DisappearingElementsActions(page).reloadPage());
When('the user views the available menu items', async ({ page }) =>
  new DisappearingElementsActions(page).waitForMenu(),
);
When('the user attempts to locate Gallery', async ({ page }) => new DisappearingElementsActions(page).waitForMenu());
When('the user reloads the Disappearing Elements page repeatedly', async ({ page }) =>
  new DisappearingElementsActions(page).reloadRepeatedly(),
);
Then('Home, About, Contact Us, and Portfolio are visible', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRequiredLinks(),
);
Then('the menu remains usable', async ({ page }) => new DisappearingElementsValidations(page).expectRequiredLinks());
Then('the the-internet homepage is displayed', async ({ page }) =>
  new DisappearingElementsValidations(page).expectHomePage(),
);
Then('every required navigation element is visible', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRequiredLinks(),
);
Then('Gallery may be visible or absent', async ({ page }) =>
  new DisappearingElementsValidations(page).expectGalleryOptional(),
);
Then('the four required navigation elements remain visible', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRequiredLinks(),
);
Then('no empty menu item is displayed', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRequiredLinks(),
);
Then('no Gallery navigation action is available', async ({ page }) =>
  new DisappearingElementsValidations(page).expectGalleryAbsent(),
);
Then('five navigation elements are visible', async ({ page }) =>
  new DisappearingElementsValidations(page).expectGalleryPresent(),
);
Then('Gallery is actionable', async ({ page }) => new DisappearingElementsValidations(page).expectGalleryPresent());
Then('each menu contains four or five navigation elements', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRecordedMenuSizes(),
);
Then('every menu contains the required navigation elements', async ({ page }) =>
  new DisappearingElementsValidations(page).expectRequiredLinks(),
);
