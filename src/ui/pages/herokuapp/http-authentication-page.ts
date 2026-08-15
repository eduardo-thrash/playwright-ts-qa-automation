import { type Page } from '@playwright/test';
export class HttpAuthenticationPage {
  constructor(readonly page: Page) {}

  get successMessage() {
    return this.page.locator('.example p');
  }
}
