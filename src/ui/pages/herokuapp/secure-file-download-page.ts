import { type Page } from '@playwright/test';
export class SecureFileDownloadPage {
  constructor(readonly page: Page) {}

  get fileLinks() {
    return this.page.locator('.example a');
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'Secure File Downloader' });
  }
}
