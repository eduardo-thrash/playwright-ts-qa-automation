import { type Page } from '@playwright/test';
export class ExitIntentPage {
  constructor(readonly page: Page) {}

  get content() {
    return this.page.locator('.example');
  }
}
