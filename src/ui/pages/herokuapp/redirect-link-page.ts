import { type Page } from '@playwright/test';
export class RedirectLinkPage {
  constructor(readonly page: Page) {}

  get redirectLink() {
    return this.page.getByRole('link', { name: 'here' });
  }

  get sourceContent() {
    return this.page.locator('.example');
  }
}
