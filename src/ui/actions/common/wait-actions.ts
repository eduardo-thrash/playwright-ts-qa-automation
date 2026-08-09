import { type Page } from '@playwright/test';

export class WaitActions {
  constructor(private readonly page: Page) {}

  async waitForPath(expectedPath: string): Promise<void> {
    await this.page.waitForURL(url => url.pathname === expectedPath);
  }
}
