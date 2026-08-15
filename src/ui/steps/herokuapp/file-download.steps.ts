import { FileDownloadActions } from '@actions/herokuapp/file-download-actions';
import { test } from '@fixtures/test';
import { FileDownloadValidations } from '@validations/herokuapp/file-download-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('at least one downloadable file was available', async ({ page }) => {
  const actions = new FileDownloadActions(page);
  await actions.openPage();
  await actions.waitForFiles();
});
Given('a nonexistent download path was available', async ({ page }) => new FileDownloadActions(page).openPage());
When('the user downloads the first available file', async ({ page }) =>
  new FileDownloadActions(page).downloadFile('first'),
);
When('the user downloads the last available file', async ({ page }) =>
  new FileDownloadActions(page).downloadFile('last'),
);
When('the user requests the missing file', async ({ page }) => new FileDownloadActions(page).requestMissingFile());
When('the page content is displayed without selecting a file', async ({ page }) =>
  new FileDownloadActions(page).viewPageWithoutDownload(),
);
When('the user downloads the first available file twice', async ({ page }) =>
  new FileDownloadActions(page).downloadFirstTwice(),
);
Then('the download has completed', async ({ page }) => new FileDownloadValidations(page).expectDownloadCountToBe(1));
Then('the downloaded file has a nonempty name', async ({ page }) =>
  new FileDownloadValidations(page).expectNamesNotToBeEmpty(),
);
Then('the downloaded file is not empty', async ({ page }) =>
  new FileDownloadValidations(page).expectContentNotToBeEmpty(),
);
Then('its suggested name matches the selected link', async ({ page }) =>
  new FileDownloadValidations(page).expectNamesToMatchSelection(),
);
Then('the download response status is 404', async ({ page }) =>
  new FileDownloadValidations(page).expectMissingStatusToBe404(),
);
Then('no successful download is produced', async ({ page }) =>
  new FileDownloadValidations(page).expectMissingStatusToBe404(),
);
Then('no download is started', async ({ page }) => new FileDownloadValidations(page).expectDownloadCountToBe(0));
Then('two downloads have completed', async ({ page }) => new FileDownloadValidations(page).expectDownloadCountToBe(2));
Then('each download has the selected suggested filename', async ({ page }) =>
  new FileDownloadValidations(page).expectNamesToMatchSelection(),
);
