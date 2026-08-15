import { DynamicControlsPage } from '@pages/herokuapp/dynamic-controls-page';
import { expect, type Page } from '@playwright/test';
export class DynamicControlsValidations {
  private readonly optionPage: DynamicControlsPage;
  constructor(page: Page) {
    this.optionPage = new DynamicControlsPage(page);
  }

  async expectInputEnabled(): Promise<void> {
    await expect(this.optionPage.input).toBeEnabled();
  }

  async expectInputDisabled(): Promise<void> {
    await expect(this.optionPage.input).toBeDisabled();
  }

  async expectInputValue(text: string): Promise<void> {
    await expect(this.optionPage.input).toHaveValue(text);
  }

  async expectCheckboxVisible(): Promise<void> {
    await expect(this.optionPage.checkbox).toBeVisible();
  }

  async expectCheckboxAbsent(): Promise<void> {
    await expect(this.optionPage.checkbox).toHaveCount(0);
  }

  async expectMessage(text: RegExp): Promise<void> {
    await expect(this.optionPage.messages).toContainText(text);
  }

  async expectOneResultingControl(): Promise<void> {
    await expect(this.optionPage.checkbox).toHaveCount(0);
  }
}
