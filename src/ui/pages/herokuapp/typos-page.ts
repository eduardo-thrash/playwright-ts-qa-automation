import { type Page } from '@playwright/test';
export class TyposPage {
  constructor(readonly page: Page) {}
  get explanatoryText() { return this.page.locator('.example p').first(); }
  get dynamicSentence() { return this.page.locator('.example p').nth(1); }
}
