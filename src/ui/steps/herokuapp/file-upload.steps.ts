import { FileUploadActions } from '@actions/herokuapp/file-upload-actions';
import { test } from '@fixtures/test';
import { FileUploadValidations } from '@validations/herokuapp/file-upload-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('a valid text file was available', async ({ page }) =>
  new FileUploadActions(page).prepareFile('sample.txt', 'text/plain', 'Playwright upload'),
);
Given('a valid JSON file was available', async ({ page }) =>
  new FileUploadActions(page).prepareFile('sample.json', 'application/json', '{"valid":true}'),
);
Given('a valid image file was available', async ({ page }) =>
  new FileUploadActions(page).prepareFile('sample.png', 'image/png', 'image-content'),
);
Given('no upload file was selected', async ({ page }) => new FileUploadActions(page).openPage());
Given('the selected local file did not exist', async ({ page }) => new FileUploadActions(page).openPage());
Given('an empty file was available', async ({ page }) =>
  new FileUploadActions(page).prepareFile('empty.txt', 'text/plain', ''),
);
Given('a valid file with a Unicode name was available', async ({ page }) =>
  new FileUploadActions(page).prepareFile('archivo-ñ-测试.txt', 'text/plain', 'Unicode filename'),
);
When('the user uploads the text file', async ({ page }) => new FileUploadActions(page).uploadPreparedFile());
When('the user uploads the JSON file', async ({ page }) => new FileUploadActions(page).uploadPreparedFile());
When('the user uploads the image file', async ({ page }) => new FileUploadActions(page).uploadPreparedFile());
When('the user submits the upload form', async ({ page }) => new FileUploadActions(page).submitWithoutFile());
When('the user attempts to attach the file', async ({ page }) => new FileUploadActions(page).attemptMissingFile());
When('the user uploads the empty file', async ({ page }) => new FileUploadActions(page).uploadPreparedFile());
When('the user uploads the file', async ({ page }) => new FileUploadActions(page).uploadPreparedFile());
Then('the file has been uploaded successfully', async ({ page }) =>
  new FileUploadValidations(page).expectUploadToSucceed(),
);
Then('the uploaded filename is displayed', async ({ page }) =>
  new FileUploadValidations(page).expectUploadedFilenameToBeDisplayed(),
);
Then('the upload request is rejected by the server', async ({ page }) =>
  new FileUploadValidations(page).expectEmptyUploadToBeRejected(),
);
Then('no successful upload confirmation is shown', async ({ page }) =>
  new FileUploadValidations(page).expectNoSuccessConfirmation(),
);
Then('no file is selected for upload', async ({ page }) =>
  new FileUploadValidations(page).expectMissingFileToBeRejected(),
);
Then('the upload form remains available', async ({ page }) =>
  new FileUploadValidations(page).expectUploadFormToRemainAvailable(),
);
Then('the Unicode filename is displayed', async ({ page }) =>
  new FileUploadValidations(page).expectUploadedFilenameToBeDisplayed(),
);
