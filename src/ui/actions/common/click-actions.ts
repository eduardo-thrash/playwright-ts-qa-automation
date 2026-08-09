import { type Locator } from '@playwright/test';

export class ClickActions {
  async clickOn(locator: Locator): Promise<void> {
    await locator.click();
  }
}
