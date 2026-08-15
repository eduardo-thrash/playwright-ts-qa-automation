import { type Locator, type Page } from '@playwright/test';

export class WaitActions {
  constructor(private readonly page: Page) {}

  async waitForPath(expectedPath: string): Promise<void> {
    await this.page.waitForURL(url => url.pathname === expectedPath);
  }

  async waitForVisibility(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  async waitForHidden(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'hidden' });
  }
}
