import { type Page } from '@playwright/test';
export class InputsPage {
  constructor(readonly page: Page) {}

  get numberInput() {
    return this.page.locator('input[type="number"]');
  }
}
