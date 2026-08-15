import { type Page } from '@playwright/test';
export class DisappearingElementsPage {
  constructor(readonly page: Page) {}

  get menuLinks() {
    return this.page.locator('ul li a');
  }

  menuLink(name: string) {
    return this.page.getByRole('link', { name, exact: true });
  }
}
