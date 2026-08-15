import { expect, type Page } from '@playwright/test';

export class CommonValidations {
  constructor(private readonly page: Page) {}

  async expectPathToBe(expectedPath: string): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === expectedPath);
  }

  async expectPageToRemainUsable(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
  }

  async expectPageToRemainResponsive(): Promise<void> {
    await expect(this.page.locator('body')).toBeVisible();
    await expect(this.page.locator('body')).toBeAttached();
  }

  async expectTextToBeVisible(text: string): Promise<void> {
    await expect(this.page.getByText(text, { exact: true })).toBeVisible();
  }

  async expectTextToBeHidden(text: string): Promise<void> {
    await expect(this.page.getByText(text, { exact: true })).toBeHidden();
  }

  async expectTextNotToBePresent(text: string): Promise<void> {
    await expect(this.page.getByText(text, { exact: true })).toHaveCount(0);
  }

  async expectResultTextToBe(text: string): Promise<void> {
    await expect(this.page.locator('#result')).toHaveText(text);
  }
}
