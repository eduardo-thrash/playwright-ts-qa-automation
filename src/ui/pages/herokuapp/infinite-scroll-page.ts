import { type Page } from '@playwright/test';
export class InfiniteScrollPage {
  constructor(readonly page: Page) {}

  get contentBlocks() {
    return this.page.locator('.jscroll-added');
  }

  get scrollContainer() {
    return this.page.locator('.jscroll-inner');
  }
}
