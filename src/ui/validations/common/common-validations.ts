import { expect, type Page } from "@playwright/test";

export class CommonValidations {
  constructor(private readonly page: Page) {}

  async pathIsDisplayed(expectedPath: string): Promise<void> {
    await expect(this.page).toHaveURL((url) => url.pathname === expectedPath);
  }
}
