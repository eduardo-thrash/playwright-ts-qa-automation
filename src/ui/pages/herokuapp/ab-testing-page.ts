import { type Page } from '@playwright/test';
export class AbTestingPage {
  constructor(readonly page: Page) {}
  get experimentHeading() { return this.page.locator('.example h3'); }
  get experimentDescription() { return this.page.locator('.example p'); }
}
