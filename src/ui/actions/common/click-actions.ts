import { type Locator } from "@playwright/test";

export class ClickActions {
  async clickOn(
    locator: Locator,
    options?: { noWaitAfter?: boolean },
  ): Promise<void> {
    await locator.click(options);
  }
}
