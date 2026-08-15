import { ShiftingContentActions } from '@actions/herokuapp/shifting-content-actions';
import { test } from '@fixtures/test';
import { ShiftingContentValidations } from '@validations/herokuapp/shifting-content-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the shifting list example was visible', async ({ page }) => new ShiftingContentActions(page).openList());
Given('the shifting menu example was visible', async ({ page }) => new ShiftingContentActions(page).openMenu());
Given('the shifting image example was visible', async ({ page }) => new ShiftingContentActions(page).openImage());
When('the user reloads the list example', async ({ page }) => new ShiftingContentActions(page).reloadList());
When('the user opens the Menu Element example', async ({ page }) => new ShiftingContentActions(page).openMenu());
When('the user opens the Image example', async ({ page }) => new ShiftingContentActions(page).openImage());
When('the available examples are displayed', async ({ page }) => new ShiftingContentActions(page).viewExamples());
When('the user reloads the list repeatedly', async ({ page }) =>
  new ShiftingContentActions(page).reloadListRepeatedly(),
);
When('the user enables random shifting', async ({ page }) => new ShiftingContentActions(page).openMenu('?mode=random'));
When('the user requests a simple image with a pixel shift', async ({ page }) =>
  new ShiftingContentActions(page).openImage('?image_type=simple&pixel_shift=25'),
);
Then('the list content remains usable', async ({ page }) =>
  new ShiftingContentValidations(page).expectImportantRecord(),
);
Then('the documented navigation menu is visible', async ({ page }) =>
  new ShiftingContentValidations(page).expectMenu(),
);
Then('every menu item remains actionable', async ({ page }) => new ShiftingContentValidations(page).expectMenu());
Then('the shifting image is visible', async ({ page }) => new ShiftingContentValidations(page).expectImageLoaded());
Then('the image has loaded successfully', async ({ page }) => new ShiftingContentValidations(page).expectImageLoaded());
Then('only Menu Element, An image, and List are actionable', async ({ page }) =>
  new ShiftingContentValidations(page).expectThreeExamples(),
);
Then('the important information record is never absent', async ({ page }) =>
  new ShiftingContentValidations(page).expectImportantRecordNeverAbsent(),
);
Then('the navigation menu remains visible', async ({ page }) => new ShiftingContentValidations(page).expectMenu());
Then('the shifted image is visible', async ({ page }) => new ShiftingContentValidations(page).expectImageLoaded());
