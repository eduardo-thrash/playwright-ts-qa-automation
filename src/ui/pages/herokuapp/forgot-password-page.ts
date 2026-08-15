import { type Page } from '@playwright/test';
export class ForgotPasswordPage {
  constructor(readonly page: Page) {}

  get emailInput() {
    return this.page.locator('#email');
  }

  get retrievePasswordButton() {
    return this.page.getByRole('button', { name: 'Retrieve password' });
  }

  get recoveryForm() {
    return this.page.locator('#forgot_password');
  }
}
