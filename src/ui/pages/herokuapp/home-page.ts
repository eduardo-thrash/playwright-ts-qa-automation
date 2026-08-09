import { type Page } from '@playwright/test';

export class HomePage {
  constructor(readonly page: Page) {}

  get heading() {
    return this.page.getByRole('heading', { level: 1 });
  }

  get subheading() {
    return this.page.getByRole('heading', { level: 2 });
  }

  exampleLink(href: string) {
    return this.page.locator(`a[href="${href}"]`);
  }
}
