import { SecureFileDownloadActions } from '@actions/herokuapp/secure-file-download-actions';
import { test } from '@fixtures/test';
import { SecureFileDownloadValidations } from '@validations/herokuapp/secure-file-download-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('valid secure-download credentials were available', async ({ page }) =>
  new SecureFileDownloadActions(page).openPage(),
);
Given('the user was authorized for secure downloads', async ({ page }) =>
  new SecureFileDownloadActions(page).openPage(),
);
Given('at least one protected file was available', async ({ page }) =>
  new SecureFileDownloadActions(page).waitForFiles(),
);
Given('an invalid username and a valid secure-download password were available', async ({ page }) =>
  new SecureFileDownloadActions(page).prepareInvalidCredentials('invalid', 'admin'),
);
Given('a valid username and an invalid secure-download password were available', async ({ page }) =>
  new SecureFileDownloadActions(page).prepareInvalidCredentials('admin', 'invalid'),
);
When('the user downloads the first protected file', async ({ page }) =>
  new SecureFileDownloadActions(page).downloadFile('first'),
);
When('the user downloads the last protected file', async ({ page }) =>
  new SecureFileDownloadActions(page).downloadFile('last'),
);
When('the user reloads the Secure File Download page', async ({ page }) =>
  new SecureFileDownloadActions(page).reloadPage(),
);
When('the user requests the protected download list', async ({ page }) =>
  new SecureFileDownloadActions(page).requestWithPreparedCredentials(),
);
When('the user downloads the first protected file twice', async ({ page }) =>
  new SecureFileDownloadActions(page).downloadFirstFileTwice(),
);
Then('the protected download has completed', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectDownloadCountToBe(1),
);
Then('the protected downloaded file has a nonempty name', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectDownloadedNamesNotToBeEmpty(),
);
Then('the protected suggested name matches the selected link', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectSuggestedNamesToMatchSelection(),
);
Then('the protected file list remains visible', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectFileListToBeVisible(),
);
Then('the available files remain actionable', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectFilesToBeActionable(),
);
Then('access to the protected file list is denied', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectAccessToBeDenied(),
);
Then('two protected downloads have completed', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectDownloadCountToBe(2),
);
Then('each protected download has the selected suggested filename', async ({ page }) =>
  new SecureFileDownloadValidations(page).expectSuggestedNamesToMatchSelection(),
);
