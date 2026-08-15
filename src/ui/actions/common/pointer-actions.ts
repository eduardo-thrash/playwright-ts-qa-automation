import { type Locator, type Page } from '@playwright/test';

export class PointerActions {
  constructor(private readonly page: Page) {}

  async hoverOver(locator: Locator): Promise<void> {
    await locator.hover();
  }

  async moveTo(x: number, y: number): Promise<void> {
    await this.page.mouse.move(x, y);
  }

  async dragTo(source: Locator, target: Locator): Promise<void> {
    await source.dragTo(target);
  }
}
