import { SlowResourcesActions } from '@actions/herokuapp/slow-resources-actions';
import { test } from '@fixtures/test';
import { SlowResourcesValidations } from '@validations/herokuapp/slow-resources-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('sufficient time was available for the slow resource', async ({ page }) =>
  new SlowResourcesActions(page).openAndWaitForSlowResource(),
);
Given('the slow resource request was in progress', async ({ page }) =>
  new SlowResourcesActions(page).openUntilDocumentCommits(),
);
Given('the Slow Resources page completed once', async ({ page }) =>
  new SlowResourcesActions(page).openAndWaitForSlowResource(),
);
Given('a timeout shorter than the documented delay was configured', async ({ page }) =>
  new SlowResourcesActions(page).openUntilDocumentCommits(),
);
Given('the user opened the Slow Resources page', async ({ page }) =>
  new SlowResourcesActions(page).openUntilDocumentCommits(),
);
Given('two browser pages were available', async ({ page }) => new SlowResourcesActions(page).openTwoPages());
When('the user opens the Slow Resources page', async ({ page }) =>
  new SlowResourcesActions(page).openAndWaitForSlowResource(),
);
When('the document content becomes available', async ({ page }) =>
  new SlowResourcesActions(page).waitForDocumentContent(),
);
When('the user reloads the page with sufficient time', async ({ page }) =>
  new SlowResourcesActions(page).reloadAndWait(),
);
When('the user waits for the slow resource', async ({ page }) => new SlowResourcesActions(page).waitWithShortTimeout());
When('the slow request has only just started', async ({ page }) =>
  new SlowResourcesActions(page).waitForDocumentContent(),
);
When('the request is aborted', async ({ page }) => new SlowResourcesActions(page).abortSlowRequest());
When('both pages open Slow Resources', async ({ page }) => new SlowResourcesActions(page).openTwoPages());
Then('the slow resource request completes successfully', async ({ page }) =>
  new SlowResourcesValidations(page).expectSlowResourceStatusToBe200(),
);
Then('the slow resource request completes again', async ({ page }) =>
  new SlowResourcesValidations(page).expectSlowResourceStatusToBe200(),
);
Then('the Slow Resources heading is visible', async ({ page }) =>
  new SlowResourcesValidations(page).expectContentVisible(),
);
Then('the explanation of the delayed request is visible', async ({ page }) =>
  new SlowResourcesValidations(page).expectContentVisible(),
);
Then('the resource does not complete within that timeout', async ({ page }) =>
  new SlowResourcesValidations(page).expectNotCompletedWithinShortTimeout(),
);
Then('the document content remains identifiable', async ({ page }) =>
  new SlowResourcesValidations(page).expectContentVisible(),
);
Then('the slow resource is still pending', async ({ page }) =>
  new SlowResourcesValidations(page).expectRequestPending(),
);
Then('no successful completion is reported yet', async ({ page }) =>
  new SlowResourcesValidations(page).expectRequestPending(),
);
Then('the Slow Resources content remains visible', async ({ page }) =>
  new SlowResourcesValidations(page).expectContentVisible(),
);
Then('each page displays its own content', async ({ page }) =>
  new SlowResourcesValidations(page).expectEveryPageContent(),
);
Then('each slow request is tracked independently', async ({ page }) =>
  new SlowResourcesValidations(page).expectEveryPageContent(),
);
