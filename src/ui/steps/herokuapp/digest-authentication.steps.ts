import { HttpAuthenticationActions } from '@actions/herokuapp/http-authentication-actions';
import { test } from '@fixtures/test';
import { DigestAuthenticationValidations } from '@validations/herokuapp/digest-authentication-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('valid Digest Authentication credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('digest', 'admin', 'admin'),
);
Given('the user was authenticated with Digest Authentication', async ({ page }) =>
  new HttpAuthenticationActions(page).openAuthenticatedPage('digest'),
);
Given('invalid Digest Authentication credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('digest', 'invalid', 'invalid'),
);
Given('empty Digest Authentication credentials were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('digest', '', ''),
);
Given('Digest Authentication credentials with surrounding whitespace were available', async ({ page }) =>
  new HttpAuthenticationActions(page).prepareCredentials('digest', ' admin ', ' admin '),
);
When(
  'the user authenticates to Digest Authentication with username {string} and password {string}',
  async ({ page }, _username: string, _password: string) =>
    new HttpAuthenticationActions(page).openAuthenticatedPage('digest'),
);
When('the user reloads the Digest Authentication protected page', async ({ page }) =>
  new HttpAuthenticationActions(page).reloadAuthenticatedPage(),
);
When('the user leaves and revisits the Digest Authentication protected resource', async ({ page }) =>
  new HttpAuthenticationActions(page).leaveAndRevisit('digest'),
);
When(
  'the user authenticates to Digest Authentication with an invalid username and a valid password',
  async ({ page }) => new HttpAuthenticationActions(page).requestWithIsolatedCredentials('digest', 'invalid', 'admin'),
);
When(
  'the user authenticates to Digest Authentication with a valid username and an invalid password',
  async ({ page }) => new HttpAuthenticationActions(page).requestWithIsolatedCredentials('digest', 'admin', 'invalid'),
);
When('the user requests the Digest Authentication protected resource', async ({ page }) =>
  new HttpAuthenticationActions(page).requestPreparedCredentials('digest'),
);
Then('the Digest Authentication success message is displayed', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectSuccessMessage(),
);
Then('the success message is displayed', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectSuccessMessage(),
);
Then('Digest Authentication access remains authorized', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectAccessToRemainAuthorized(),
);
Then('Digest Authentication access is authorized again', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectAccessToRemainAuthorized(),
);
Then('the Digest Authentication protected content is visible', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectSuccessMessage(),
);
Then('Digest Authentication access to the protected content is denied', async ({ page }) =>
  new DigestAuthenticationValidations(page).expectAccessToBeDenied(),
);
