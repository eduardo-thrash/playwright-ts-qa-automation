import { type Page } from '@playwright/test';
export class ContextMenuPage {
  constructor(readonly page: Page) {}

  get targetArea() {
    return this.page.locator('#hot-spot');
  }

  get pageContent() {
    return this.page.locator('.example');
  }
}
