import { type Page } from '@playwright/test';
export class DynamicControlsPage {
  constructor(readonly page: Page) {}

  get checkbox() {
    return this.page.locator('#checkbox');
  }

  get checkboxButton() {
    return this.page.locator('#checkbox-example button');
  }

  get input() {
    return this.page.locator('#input-example input');
  }

  get inputButton() {
    return this.page.locator('#input-example button');
  }

  get messages() {
    return this.page.locator('#message');
  }

  get loadingIndicators() {
    return this.page.locator('#loading');
  }
}
