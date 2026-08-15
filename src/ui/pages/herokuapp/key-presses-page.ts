import { type Page } from '@playwright/test';
export class KeyPressesPage {
  constructor(readonly page: Page) {}

  get keyInput() {
    return this.page.locator('#target');
  }

  get resultMessage() {
    return this.page.locator('#result');
  }
}
