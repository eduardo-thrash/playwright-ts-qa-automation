import { type Page } from '@playwright/test';
export class EntryAdPage {
  constructor(readonly page: Page) {}

  get reEnableLink() {
    return this.page.getByRole('link', { name: 'click here' });
  }

  get content() {
    return this.page.locator('.example');
  }
}
