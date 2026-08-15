import { type Page } from '@playwright/test';

export class CheckboxesPage {
  constructor(readonly page: Page) {}

  get checkboxes() {
    return this.page.locator('#checkboxes input[type="checkbox"]');
  }

  checkbox(position: number) {
    return this.checkboxes.nth(position - 1);
  }
}
