import { type Page } from '@playwright/test';
export class FormAuthenticationPage {
  constructor(readonly page: Page) {}
  get usernameInput() { return this.page.locator('#username'); }
  get passwordInput() { return this.page.locator('#password'); }
  get loginButton() { return this.page.getByRole('button', { name: /Login/i }); }
  get logoutButton() { return this.page.getByRole('link', { name: /Logout/i }); }
  get flashMessage() { return this.page.locator('#flash'); }
  get secureHeading() { return this.page.getByRole('heading', { name: 'Secure Area' }); }
  get loginHeading() { return this.page.getByRole('heading', { name: 'Login Page' }); }
}
