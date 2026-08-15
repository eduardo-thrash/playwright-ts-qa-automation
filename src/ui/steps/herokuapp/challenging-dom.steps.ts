import { ChallengingDomActions } from '@actions/herokuapp/challenging-dom-actions';
import { test } from '@fixtures/test';
import { ChallengingDomValidations } from '@validations/herokuapp/challenging-dom-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the Challenging DOM table was visible', async ({ page }) => {
  const actions = new ChallengingDomActions(page);
  await actions.openPage();
  await actions.viewTable();
});
When('the user activates a dynamic button', async ({ page }) =>
  new ChallengingDomActions(page).activateDynamicButton(),
);
When('the user opens the edit action for the first row', async ({ page }) =>
  new ChallengingDomActions(page).openRowAction('first', 'edit'),
);
When('the user opens the delete action for the last row', async ({ page }) =>
  new ChallengingDomActions(page).openRowAction('last', 'delete'),
);
When('the user looks for an action on a nonexistent row', async ({ page }) =>
  new ChallengingDomActions(page).viewTable(),
);
When('an unsupported table action is requested', async ({ page }) =>
  new ChallengingDomActions(page).requestUnsupportedAction(),
);
When('the user accesses the final row', async ({ page }) => new ChallengingDomActions(page).viewTable());
When('the dynamic controls finish rendering', async ({ page }) => new ChallengingDomActions(page).viewTable());
Then('the button receives a new dynamic identifier', async ({ page }) =>
  new ChallengingDomValidations(page).expectDynamicIdToChange(),
);
Then('the data table remains visible', async ({ page }) => new ChallengingDomValidations(page).expectTableVisible());
Then('the page URL identifies the edit action', async ({ page }) =>
  new ChallengingDomValidations(page).expectUrlAction('edit'),
);
Then('the page URL identifies the delete action', async ({ page }) =>
  new ChallengingDomValidations(page).expectUrlAction('delete'),
);
Then('the first row remains visible', async ({ page }) =>
  new ChallengingDomValidations(page).expectRowVisible('first'),
);
Then('the last row remains visible', async ({ page }) => new ChallengingDomValidations(page).expectRowVisible('last'));
Then('no action is available for that row', async ({ page }) =>
  new ChallengingDomValidations(page).expectNoNonexistentAction(),
);
Then('the table remains unchanged', async ({ page }) => new ChallengingDomValidations(page).expectTableVisible());
Then('no table row is modified', async ({ page }) => new ChallengingDomValidations(page).expectRowsUnchanged());
Then('the table remains visible', async ({ page }) => new ChallengingDomValidations(page).expectTableVisible());
Then('the final row contains its complete data', async ({ page }) =>
  new ChallengingDomValidations(page).expectFinalRowComplete(),
);
Then('edit and delete actions are available', async ({ page }) =>
  new ChallengingDomValidations(page).expectFinalRowComplete(),
);
Then('the canvas has a positive width and height', async ({ page }) =>
  new ChallengingDomValidations(page).expectCanvasDimensions(),
);
