import { type Page } from '@playwright/test';
export class SlowResourcesPage {
  constructor(readonly page: Page) {}

  get heading() {
    return this.page.getByRole('heading', { name: 'Slow Resources' });
  }

  get content() {
    return this.page.locator('body');
  }
}
