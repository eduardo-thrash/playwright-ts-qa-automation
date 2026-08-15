import { type Page } from '@playwright/test';

export class HomePage {
  constructor(readonly page: Page) {}

  get mainHeading() {
    return this.page.getByRole('heading', { level: 1 });
  }

  get examplesHeading() {
    return this.page.getByRole('heading', { level: 2 });
  }

  optionLink(href: string) {
    return this.page.locator(`a[href="${href}"]`);
  }
}
