import { test } from '@fixtures/test';
import { SortableDataTablesValidations } from '@validations/herokuapp/sortable-data-tables-validations';
import { createBdd } from 'playwright-bdd';
const { Then } = createBdd(test);
Then('both fifty-dollar records remain present', async ({ page }) =>
  new SortableDataTablesValidations(page).expectDuplicateFiftyAmounts(),
);
