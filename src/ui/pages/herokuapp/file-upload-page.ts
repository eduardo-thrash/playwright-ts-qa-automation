import { type Page } from '@playwright/test';
export class FileUploadPage {
  constructor(readonly page: Page) {}
  get fileInput() { return this.page.locator('#file-upload'); }
  get uploadButton() { return this.page.locator('#file-submit'); }
  get uploadedHeading() { return this.page.getByRole('heading', { name: 'File Uploaded!' }); }
  get uploadedFilename() { return this.page.locator('#uploaded-files'); }
  get uploadForm() { return this.page.locator('#file-upload').locator('..'); }
}
