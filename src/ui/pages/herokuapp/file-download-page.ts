import { type Page } from '@playwright/test';
export class FileDownloadPage {
  constructor(readonly page: Page) {}

  get fileLinks() {
    return this.page.locator('.example a');
  }
}
