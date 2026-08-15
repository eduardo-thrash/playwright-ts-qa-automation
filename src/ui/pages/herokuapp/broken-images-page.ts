import { type Page } from '@playwright/test';
export class BrokenImagesPage {
  constructor(readonly page: Page) {}
  get exampleImages() { return this.page.locator('.example img'); }
  image(position: number) { return this.exampleImages.nth(position - 1); }
  get pageContent() { return this.page.locator('.example'); }
}
