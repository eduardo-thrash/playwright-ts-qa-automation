import { ForgotPasswordActions } from '@actions/herokuapp/forgot-password-actions';
import { test } from '@fixtures/test';
import { ForgotPasswordValidations } from '@validations/herokuapp/forgot-password-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('a valid email address was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail('user@example.com'),
);
Given('a valid uppercase email address was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail('USER@EXAMPLE.COM'),
);
Given('a valid plus-addressed email was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail('user+qa@example.com'),
);
Given('a malformed email address was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail('invalid-email'),
);
Given('a long valid email address was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail(`${'a'.repeat(64)}@example.com`),
);
Given('a valid email with supported special characters was available', async ({ page }) =>
  new ForgotPasswordActions(page).enterRecoveryEmail("qa.!#$%&'*+/=?^_`{|}~-@example.com"),
);
When('the user reviews the recovery form', async ({ page }) => new ForgotPasswordActions(page).reviewRecoveryForm());
When('the user submits an empty email', async ({ page }) => new ForgotPasswordActions(page).submitRecoveryForm());
When('the user requests password recovery', async ({ page }) => new ForgotPasswordActions(page).submitRecoveryForm());
Then('the recovery email value is accepted', async ({ page }) =>
  new ForgotPasswordValidations(page).expectRecoveryEmailToBeAccepted(),
);
Then('the recovery action is available', async ({ page }) =>
  new ForgotPasswordValidations(page).expectRecoveryActionToBeAvailable(),
);
Then('the recovery request is not submitted', async ({ page }) =>
  new ForgotPasswordValidations(page).expectRequestNotToBeSubmitted(),
);
Then('the email field remains required', async ({ page }) =>
  new ForgotPasswordValidations(page).expectEmailToRemainRequired(),
);
Then('the email field reports an invalid value', async ({ page }) =>
  new ForgotPasswordValidations(page).expectEmailToBeInvalid(),
);
