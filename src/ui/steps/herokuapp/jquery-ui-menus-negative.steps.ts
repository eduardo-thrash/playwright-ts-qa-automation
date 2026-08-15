import { test } from '@fixtures/test';
import { JqueryUiMenusValidations } from '@validations/herokuapp/jquery-ui-menus-validations';
import { createBdd } from 'playwright-bdd';
const { Then } = createBdd(test);
Then('no JQuery menu download is started', async ({ page }) => new JqueryUiMenusValidations(page).expectNoDownload());
