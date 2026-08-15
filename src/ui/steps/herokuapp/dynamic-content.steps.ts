import { DynamicContentActions } from '@actions/herokuapp/dynamic-content-actions';
import { test } from '@fixtures/test';
import { DynamicContentValidations } from '@validations/herokuapp/dynamic-content-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the dynamic content blocks were visible', async ({ page }) => {
  const actions = new DynamicContentActions(page);
  await actions.openPage();
  await actions.waitForContent();
  await actions.recordContent();
});
Given('the static content variant was visible', async ({ page }) => {
  const actions = new DynamicContentActions(page);
  await actions.openStaticVariant();
  await actions.recordContent();
});
Given('the dynamic content finished loading', async ({ page }) => {
  const actions = new DynamicContentActions(page);
  await actions.openPage();
  await actions.waitForContent();
});
Given('the dynamic content page was visible', async ({ page }) => new DynamicContentActions(page).openPage());
When('the user reloads the Dynamic Content page', async ({ page }) =>
  new DynamicContentActions(page).reloadAndRecord(),
);
When('the user opens the static content variant', async ({ page }) =>
  new DynamicContentActions(page).openStaticVariant(),
);
When('the user reloads the static Dynamic Content page', async ({ page }) =>
  new DynamicContentActions(page).reloadAndRecord(),
);
When('the user requests an unsupported content mode', async ({ page }) =>
  new DynamicContentActions(page).requestUnsupportedMode(),
);
When('the content blocks are displayed', async ({ page }) => new DynamicContentActions(page).waitForContent());
When('the user reloads the Dynamic Content page repeatedly', async ({ page }) =>
  new DynamicContentActions(page).reloadRepeatedly(),
);
When('the user follows the static content link', async ({ page }) =>
  new DynamicContentActions(page).followStaticLink(),
);
Then('at least one content block has changed', async ({ page }) =>
  new DynamicContentValidations(page).expectAtLeastOneBlockToChange(),
);
Then('three content blocks are visible', async ({ page }) => new DynamicContentValidations(page).expectThreeBlocks());
Then('the documented static content is displayed', async ({ page }) =>
  new DynamicContentValidations(page).expectStaticQuery(),
);
Then('every static content block remains unchanged', async ({ page }) =>
  new DynamicContentValidations(page).expectStaticContentUnchanged(),
);
Then('every static image source remains unchanged', async ({ page }) =>
  new DynamicContentValidations(page).expectStaticContentUnchanged(),
);
Then('three supported content blocks are displayed', async ({ page }) =>
  new DynamicContentValidations(page).expectThreeBlocks(),
);
Then('no unsupported content block is added', async ({ page }) =>
  new DynamicContentValidations(page).expectThreeBlocks(),
);
Then('no content block is empty', async ({ page }) => new DynamicContentValidations(page).expectNoEmptyBlocks());
Then('every block has an associated image', async ({ page }) =>
  new DynamicContentValidations(page).expectNoEmptyBlocks(),
);
Then('every response contains three content blocks', async ({ page }) =>
  new DynamicContentValidations(page).expectEveryRecordedResponseToHaveThreeBlocks(),
);
Then('every response remains usable', async ({ page }) =>
  new DynamicContentValidations(page).expectEveryRecordedResponseToHaveThreeBlocks(),
);
Then('the static content query is present', async ({ page }) =>
  new DynamicContentValidations(page).expectStaticQuery(),
);
