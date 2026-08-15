import { HttpAuthenticationActions } from '@actions/herokuapp/http-authentication-actions';
import { test } from '@fixtures/test';
import { BasicAuthValidations } from '@validations/herokuapp/basic-auth-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('valid Basic Auth credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('basic', 'admin', 'admin'),
);
Given('the user was authenticated with Basic Auth', async ({ page }) =>
  new HttpAuthenticationActions(page).openAuthenticatedPage('basic'),
);
Given('invalid Basic Auth credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('basic', 'invalid', 'invalid'),
);
Given('empty Basic Auth credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('basic', '', ''),
);
Given('Basic Auth credentials with surrounding whitespace were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('basic', ' admin ', ' admin '),
);
When(
  'the user authenticates to Basic Auth with username {string} and password {string}',
  async ({ page }, _username: string, _password: string) =>
    new HttpAuthenticationActions(page).openAuthenticatedPage('basic'),
);
When('the user reloads the Basic Auth protected page', async ({ page }) =>
  new HttpAuthenticationActions(page).reloadAuthenticatedPage(),
);
When('the user leaves and revisits the Basic Auth protected resource', async ({ page }) =>
  new HttpAuthenticationActions(page).leaveAndRevisit('basic'),
);
When('the user authenticates to Basic Auth with an invalid username and a valid password', async ({ page }) =>
  new HttpAuthenticationActions(page).requestWithIsolatedCredentials('basic', 'invalid', 'admin'),
);
When('the user authenticates to Basic Auth with a valid username and an invalid password', async ({ page }) =>
  new HttpAuthenticationActions(page).requestWithIsolatedCredentials('basic', 'admin', 'invalid'),
);
When('the user requests the Basic Auth protected resource', async ({ page }) =>
  new HttpAuthenticationActions(page).requestPreparedCredentials('basic'),
);
Then('the Basic Auth success message is displayed', async ({ page }) =>
  new BasicAuthValidations(page).expectSuccessMessage(),
);
Then('Basic Auth access remains authorized', async ({ page }) =>
  new BasicAuthValidations(page).expectAccessToRemainAuthorized(),
);
Then('Basic Auth access is authorized again', async ({ page }) =>
  new BasicAuthValidations(page).expectAccessToRemainAuthorized(),
);
Then('the Basic Auth protected content is visible', async ({ page }) =>
  new BasicAuthValidations(page).expectSuccessMessage(),
);
Then('Basic Auth access to the protected content is denied', async ({ page }) =>
  new BasicAuthValidations(page).expectAccessToBeDenied(),
);
