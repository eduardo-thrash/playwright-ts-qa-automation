import { JqueryUiMenusActions } from '@actions/herokuapp/jquery-ui-menus-actions';
import { test } from '@fixtures/test';
import { JqueryUiMenusValidations } from '@validations/herokuapp/jquery-ui-menus-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the Enabled menu was expanded', async ({ page }) => {
  const actions = new JqueryUiMenusActions(page);
  await actions.openPage();
  await actions.expandEnabled();
});
Given('the Enabled menu was collapsed', async ({ page }) => new JqueryUiMenusActions(page).openPage());
Given('the Downloads submenu was visible', async ({ page }) => {
  const actions = new JqueryUiMenusActions(page);
  await actions.openPage();
  await actions.expandDownloads();
});
Given('the Downloads submenu was hidden', async ({ page }) => new JqueryUiMenusActions(page).openPage());
When(/^the user opens Downloads and selects (CSV|PDF|Excel)$/, async ({ page }, format: 'CSV' | 'PDF' | 'Excel') =>
  new JqueryUiMenusActions(page).download(format),
);
When('the user hovers over Disabled', async ({ page }) => new JqueryUiMenusActions(page).hoverDisabled());
When('the user views the menu', async ({ page }) => new JqueryUiMenusActions(page).openPage());
When('the pointer leaves the menu', async ({ page }) => new JqueryUiMenusActions(page).leaveMenu());
When('the user expands Enabled and Downloads again', async ({ page }) =>
  new JqueryUiMenusActions(page).expandDownloads(),
);
Then('a CSV download is started', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.csv$/i),
);
Then('a PDF download is started', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.pdf$/i),
);
Then('an Excel download is started', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.xls$/i),
);
Then('the downloaded filename has a CSV extension', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.csv$/i),
);
Then('the downloaded filename has a PDF extension', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.pdf$/i),
);
Then('the downloaded filename has a spreadsheet extension', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadExtension(/\.xls$/i),
);
Then('no actionable disabled submenu is displayed', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDisabledSubmenuAbsent(),
);
Then('the Downloads submenu is not actionable', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectDownloadsHidden(),
);
Then('no download option is visible', async ({ page }) => new JqueryUiMenusValidations(page).expectOptionsHidden());
Then('the Downloads submenu is hidden', async ({ page }) => new JqueryUiMenusValidations(page).expectDownloadsHidden());
Then('PDF, CSV, and Excel are visible', async ({ page }) => new JqueryUiMenusValidations(page).expectOptionsVisible());
Then('every download option is actionable', async ({ page }) =>
  new JqueryUiMenusValidations(page).expectOptionsVisible(),
);
