import { JavaScriptErrorActions } from '@actions/herokuapp/javascript-error-actions';
import { test } from '@fixtures/test';
import { JavaScriptErrorValidations } from '@validations/herokuapp/javascript-error-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('JavaScript page errors were being observed', async ({ page }) =>
  new JavaScriptErrorActions(page).openPageAndCaptureErrors(),
);
Given('the onload error was emitted', async ({ page }) => new JavaScriptErrorActions(page).openPageAndCaptureErrors());
Given('the initial onload error was captured', async ({ page }) =>
  new JavaScriptErrorActions(page).openPageAndCaptureErrors(),
);
Given('the error listener was registered before navigation', async ({ page }) =>
  new JavaScriptErrorActions(page).openPageAndCaptureErrors(),
);
Given('the JavaScript error page was opened in a supported browser', async ({ page }) =>
  new JavaScriptErrorActions(page).openPageAndCaptureErrors(),
);
When('the user opens the JavaScript onload event error page', async ({ page }) =>
  new JavaScriptErrorActions(page).waitForDocument(),
);
When('the document finishes loading', async ({ page }) => new JavaScriptErrorActions(page).waitForDocument());
When('the user reloads the JavaScript error page', async ({ page }) =>
  new JavaScriptErrorActions(page).reloadAndCaptureErrors(),
);
When('the page content is displayed', async ({ page }) => new JavaScriptErrorActions(page).waitForDocument());
When('the onload error is emitted', async ({ page }) => new JavaScriptErrorActions(page).waitForDocument());
Then('one expected onload error is emitted', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectOneOnloadError(),
);
Then('the expected onload error is emitted again', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectOneOnloadError(),
);
Then('the initial onload error is captured', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectOneOnloadError(),
);
Then('the error identifies an undefined property access', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectOneOnloadError(),
);
Then('no unrelated page error is emitted', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectNoUnrelatedErrors(),
);
Then('the expected onload error is identifiable', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectOneOnloadError(),
);
Then('the explanatory page content is visible', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectExplanatoryContentToBeVisible(),
);
Then('the explanatory content remains visible', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectExplanatoryContentToBeVisible(),
);
Then('the expected explanatory text is visible', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectExplanatoryContentToBeVisible(),
);
Then('no browser error document replaces the example page', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectNoBrowserErrorDocument(),
);
Then('the page remains accessible', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectExplanatoryContentToBeVisible(),
);
Then('the document remains visible', async ({ page }) =>
  new JavaScriptErrorValidations(page).expectExplanatoryContentToBeVisible(),
);
