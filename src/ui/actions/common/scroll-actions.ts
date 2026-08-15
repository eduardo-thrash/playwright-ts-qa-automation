import { type Locator, type Page } from '@playwright/test';

export class ScrollActions {
  constructor(private readonly page: Page) {}

  async scrollTo(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  async scrollBy(x: number, y: number): Promise<void> {
    await this.page.evaluate(({ deltaX, deltaY }) => window.scrollBy(deltaX, deltaY), {
      deltaX: x,
      deltaY: y,
    });
  }

  async scrollToTop(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom(): Promise<void> {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }
}
