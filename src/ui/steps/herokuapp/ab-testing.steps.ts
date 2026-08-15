import { AbTestingActions } from '@actions/herokuapp/ab-testing-actions';
import { test } from '@fixtures/test';
import { AbTestingValidations } from '@validations/herokuapp/ab-testing-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('an experiment variant was assigned to the user', async ({ page }) => new AbTestingActions(page).openPage());
Given('the experiment cookies were cleared', async ({ page }) => {
  const actions = new AbTestingActions(page);
  await actions.clearExperimentCookies();
  await actions.openPage();
});
Given('an unknown experiment cookie was stored', async ({ page }) => {
  const actions = new AbTestingActions(page);
  await actions.storeUnknownCookie();
  await actions.openPage();
});
Given('no experiment assignment was available', async ({ page }) => {
  const actions = new AbTestingActions(page);
  await actions.clearExperimentCookies();
});
When('the assigned experiment content loads', async ({ page }) => new AbTestingActions(page).waitForContent());
When(/^the user reloads the A\/B Testing page$/, async ({ page }) => new AbTestingActions(page).reloadPage());
When(/^the user opens the A\/B Testing page again$/, async ({ page }) => new AbTestingActions(page).openPage());
When(/^the user opens the A\/B Testing page$/, async ({ page }) => new AbTestingActions(page).openPage());
When('the user requests an unsupported experiment variant', async ({ page }) =>
  new AbTestingActions(page).requestUnsupportedVariant(),
);
When(/^the user reloads the A\/B Testing page repeatedly$/, async ({ page }) =>
  new AbTestingActions(page).reloadRepeatedly(),
);
Then('a supported experiment heading is displayed', async ({ page }) =>
  new AbTestingValidations(page).expectSupportedHeading(),
);
Then('the assigned experiment variant remains supported', async ({ page }) =>
  new AbTestingValidations(page).expectSupportedHeading(),
);
Then('the experiment description is visible', async ({ page }) =>
  new AbTestingValidations(page).expectDescriptionToBeVisible(),
);
Then('the experiment content is not empty', async ({ page }) =>
  new AbTestingValidations(page).expectContentNotToBeEmpty(),
);
Then('no unsupported experiment heading is displayed', async ({ page }) =>
  new AbTestingValidations(page).expectNoUnsupportedHeading(),
);
Then(/^the page remains on the A\/B Testing example$/, async ({ page }) =>
  new AbTestingValidations(page).expectPageToRemainOnExample(),
);
Then('every displayed heading belongs to the supported experiment variants', async ({ page }) =>
  new AbTestingValidations(page).expectEveryRecordedHeadingToBeSupported(),
);
Then('every response contains the experiment description', async ({ page }) =>
  new AbTestingValidations(page).expectEveryResponseToContainDescription(),
);
