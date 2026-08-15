import { type Page } from '@playwright/test';
export class JavaScriptAlertsPage {
  constructor(readonly page: Page) {}

  get alertButton() {
    return this.page.getByRole('button', { name: 'Click for JS Alert' });
  }

  get confirmationButton() {
    return this.page.getByRole('button', { name: 'Click for JS Confirm' });
  }

  get promptButton() {
    return this.page.getByRole('button', { name: 'Click for JS Prompt' });
  }

  get resultMessage() {
    return this.page.locator('#result');
  }
}
