import { type Page } from '@playwright/test';
export class FramesPage {
  constructor(readonly page: Page) {}

  get exampleLinks() {
    return this.page.locator('.example a');
  }

  get nestedFramesLink() {
    return this.page.getByRole('link', { name: 'Nested Frames' });
  }

  get iframeLink() {
    return this.page.getByRole('link', { name: 'iFrame' });
  }
}
