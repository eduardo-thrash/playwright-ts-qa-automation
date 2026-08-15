import { ShadowDomActions } from '@actions/herokuapp/shadow-dom-actions';
import { test } from '@fixtures/test';
import { ShadowDomValidations } from '@validations/herokuapp/shadow-dom-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the first shadow host was rendered', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.accessFirstHost();
});
Given('the second shadow host was rendered', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.accessSecondHost();
});
Given('the shadow content finished rendering', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.waitForHosts();
});
Given('every shadow host was rendered', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.waitForHosts();
});
Given('the shadow content was visible', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.waitForHosts();
});
Given('both shadow hosts were rendered', async ({ page }) => {
  const actions = new ShadowDomActions(page);
  await actions.openPage();
  await actions.waitForHosts();
});
When('the shadow content finishes rendering', async ({ page }) => new ShadowDomActions(page).waitForHosts());
When('the user accesses its shadow content', async ({ page }) => new ShadowDomActions(page).waitForHosts());
When('the shadow host collection is inspected', async ({ page }) => new ShadowDomActions(page).waitForHosts());
When('the shadow content is inspected', async ({ page }) => new ShadowDomActions(page).waitForHosts());
When('the user reloads the Shadow DOM page', async ({ page }) => new ShadowDomActions(page).reloadPage());
When('the repeated shadow text is accessed', async ({ page }) => new ShadowDomActions(page).waitForHosts());
Then('both shadow hosts display their expected text', async ({ page }) =>
  new ShadowDomValidations(page).expectExpectedContent(),
);
Then('the shadow list item is visible', async ({ page }) => new ShadowDomValidations(page).expectListItemCountToBe(2));
Then('the shadow list contains two items', async ({ page }) =>
  new ShadowDomValidations(page).expectListItemCountToBe(2),
);
Then('exactly two shadow hosts are present', async ({ page }) => new ShadowDomValidations(page).expectHostCountToBe(2));
Then('no expected shadow text is empty', async ({ page }) =>
  new ShadowDomValidations(page).expectNoExpectedContentToBeMissing(),
);
Then('no expected list item is missing', async ({ page }) =>
  new ShadowDomValidations(page).expectNoExpectedContentToBeMissing(),
);
Then('both shadow hosts display their expected content again', async ({ page }) =>
  new ShadowDomValidations(page).expectExpectedContent(),
);
Then('the text appears in both documented shadow locations', async ({ page }) =>
  new ShadowDomValidations(page).expectRepeatedTextCountToBe(2),
);
Then('the list-only text appears once', async ({ page }) =>
  new ShadowDomValidations(page).expectListOnlyTextCountToBe(1),
);
