import { type Page } from '@playwright/test';
export class JavaScriptErrorPage {
  constructor(readonly page: Page) {}
  get explanatoryContent() { return this.page.locator('body'); }
}
