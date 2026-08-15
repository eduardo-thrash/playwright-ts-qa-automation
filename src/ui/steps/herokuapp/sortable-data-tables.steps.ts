import { SortableDataTablesActions } from '@actions/herokuapp/sortable-data-tables-actions';
import { test } from '@fixtures/test';
import { SortableDataTablesValidations } from '@validations/herokuapp/sortable-data-tables-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the second data table was visible', async ({ page }) => new SortableDataTablesActions(page).openPage());
Given('the sortable table headers were visible', async ({ page }) => new SortableDataTablesActions(page).openPage());
Given('the second table was sorted by Last Name ascending', async ({ page }) => {
  const actions = new SortableDataTablesActions(page);
  await actions.openPage();
  await actions.sortBy('Last Name');
});
When(/^the user sorts by (Last Name|First Name|Due)$/, async ({ page }, name: string) =>
  new SortableDataTablesActions(page).sortBy(name),
);
When('the user looks for an unknown column', async ({ page }) => new SortableDataTablesActions(page).viewHeaders());
When('the user opens an edit action', async ({ page }) => new SortableDataTablesActions(page).openEdit());
When('the user sorts by Last Name again', async ({ page }) => new SortableDataTablesActions(page).sortBy('Last Name'));
Then('the rows are ordered as Bach, Conway, Doe, and Smith', async ({ page }) =>
  new SortableDataTablesValidations(page).expectColumnOrder('last-name', ['Bach', 'Conway', 'Doe', 'Smith']),
);
Then('the rows are ordered as Smith, Doe, Conway, and Bach', async ({ page }) =>
  new SortableDataTablesValidations(page).expectColumnOrder('last-name', ['Smith', 'Doe', 'Conway', 'Bach']),
);
Then('the rows are ordered by first name', async ({ page }) =>
  new SortableDataTablesValidations(page).expectColumnOrder('first-name', ['Frank', 'Jason', 'John', 'Tim']),
);
Then('all four records remain visible', async ({ page }) => new SortableDataTablesValidations(page).expectFourRows());
Then('the rows are ordered by numeric amount', async ({ page }) =>
  new SortableDataTablesValidations(page).expectDueAmountsSorted(),
);
Then('both 50-dollar records remain visible', async ({ page }) =>
  new SortableDataTablesValidations(page).expectDuplicateFiftyAmounts(),
);
Then('no unknown sortable header is available', async ({ page }) =>
  new SortableDataTablesValidations(page).expectUnknownHeaderAbsent(),
);
Then('the documented columns remain unchanged', async ({ page }) =>
  new SortableDataTablesValidations(page).expectFourRows(),
);
Then('no table record is removed', async ({ page }) => new SortableDataTablesValidations(page).expectFourRows());
Then('both records owing {string} remain present', async ({ page }) =>
  new SortableDataTablesValidations(page).expectDuplicateFiftyAmounts(),
);
Then('four total records are visible', async ({ page }) => new SortableDataTablesValidations(page).expectFourRows());
