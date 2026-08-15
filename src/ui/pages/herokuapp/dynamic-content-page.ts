import { type Page } from '@playwright/test';
export class DynamicContentPage {
  constructor(readonly page: Page) {}

  get contentRows() {
    return this.page.locator('.example .row');
  }

  get contentTexts() {
    return this.contentRows.locator('.large-10');
  }

  get avatarImages() {
    return this.contentRows.locator('img');
  }

  get staticContentLink() {
    return this.page.getByRole('link', { name: 'click here' });
  }
}
