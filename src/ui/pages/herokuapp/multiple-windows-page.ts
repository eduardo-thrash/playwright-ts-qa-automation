import { type Page } from '@playwright/test';
export class MultipleWindowsPage {
  constructor(readonly page: Page) {}

  get openWindowLink() {
    return this.page.getByRole('link', { name: 'Click Here' });
  }

  get heading() {
    return this.page.getByRole('heading');
  }
}
