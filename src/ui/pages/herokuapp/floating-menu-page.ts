import { type Page } from '@playwright/test';
export class FloatingMenuPage {
  constructor(readonly page: Page) {}

  get menu() {
    return this.page.locator('#menu');
  }

  get menuLinks() {
    return this.menu.getByRole('link');
  }

  menuLink(name: string) {
    return this.menu.getByRole('link', { name, exact: true });
  }
}
