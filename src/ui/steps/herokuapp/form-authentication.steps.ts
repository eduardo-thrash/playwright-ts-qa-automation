import { FormAuthenticationActions } from '@actions/herokuapp/form-authentication-actions';
import { test } from '@fixtures/test';
import { FormAuthenticationValidations } from '@validations/herokuapp/form-authentication-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('valid form credentials were available', async ({ page }) => new FormAuthenticationActions(page).openPage());
Given('the user was logged in to the secure area', async ({ page }) => new FormAuthenticationActions(page).login());
Given('an invalid username and a valid password were available', async ({ page }) => {
  const actions = new FormAuthenticationActions(page);
  await actions.openPage();
  await actions.enterCredentials('invalid-user', 'SuperSecretPassword!');
});
Given('a valid username and an invalid password were available', async ({ page }) => {
  const actions = new FormAuthenticationActions(page);
  await actions.openPage();
  await actions.enterCredentials('tomsmith', 'invalid-password');
});
Given('valid credentials with surrounding whitespace were available', async ({ page }) => {
  const actions = new FormAuthenticationActions(page);
  await actions.openPage();
  await actions.enterCredentials(' tomsmith ', ' SuperSecretPassword! ');
});
When(
  'the user logs in with username {string} and password {string}',
  async ({ page }, username: string, password: string) => {
    const actions = new FormAuthenticationActions(page);
    await actions.enterCredentials(username, password);
    await actions.submitLogin();
  },
);
When('the user logs out', async ({ page }) => new FormAuthenticationActions(page).logout());
When('the user reloads the secure page', async ({ page }) => new FormAuthenticationActions(page).reloadSecurePage());
When('the user submits the login form', async ({ page }) => new FormAuthenticationActions(page).submitLogin());
When('the user submits empty login fields', async ({ page }) => new FormAuthenticationActions(page).submitLogin());
Then('the secure area is displayed', async ({ page }) =>
  new FormAuthenticationValidations(page).expectSecureAreaToBeDisplayed(),
);
Then('the secure area remains displayed', async ({ page }) =>
  new FormAuthenticationValidations(page).expectSecureAreaToBeDisplayed(),
);
Then('the Login page is displayed', async ({ page }) =>
  new FormAuthenticationValidations(page).expectLoginPageToBeDisplayed(),
);
Then('the Login page remains displayed', async ({ page }) =>
  new FormAuthenticationValidations(page).expectLoginPageToBeDisplayed(),
);
Then('the successful login message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('You logged into a secure area!'),
);
Then('the successful logout message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('You logged out of the secure area!'),
);
Then('the invalid username message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('Your username is invalid!'),
);
Then('an invalid username message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('Your username is invalid!'),
);
Then('the invalid password message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('Your password is invalid!'),
);
Then('an authentication error message is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectFlashMessageToContain('is invalid!'),
);
Then('the Logout action is visible', async ({ page }) =>
  new FormAuthenticationValidations(page).expectLogoutActionToBeVisible(),
);
