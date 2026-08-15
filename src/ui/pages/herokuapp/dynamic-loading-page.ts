import { type Page } from '@playwright/test';
export class DynamicLoadingPage {
  constructor(readonly page: Page) {}
  get exampleLinks() {
    return this.page.locator('#content a');
  }
  get startButton() {
    return this.page.getByRole('button', { name: 'Start' });
  }
  get loadingIndicator() {
    return this.page.locator('#loading');
  }
  get finalContent() {
    return this.page.locator('#finish');
  }
  get description() {
    return this.page.locator('.example h4');
  }
}
