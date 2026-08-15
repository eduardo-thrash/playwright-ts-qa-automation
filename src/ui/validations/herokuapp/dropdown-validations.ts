import { DropdownPage } from '@pages/herokuapp/dropdown-page';
import { expect, type Page } from '@playwright/test';

export class DropdownValidations {
  private readonly optionPage: DropdownPage;
  constructor(page: Page) {
    this.optionPage = new DropdownPage(page);
  }

  async expectOptionToBeSelected(label: string): Promise<void> {
    await expect(this.optionPage.optionsSelect).toHaveValue(label === 'Option 1' ? '1' : '2');
  }

  async expectOptionNotToBeSelected(label: string): Promise<void> {
    await expect(this.optionPage.optionsSelect).not.toHaveValue(label === 'Option 1' ? '1' : '2');
  }

  async expectPlaceholderToRemainDisabled(): Promise<void> {
    await expect(this.optionPage.options.first()).toBeDisabled();
  }

  async expectNoEnabledOptionToBeSelected(): Promise<void> {
    await expect(this.optionPage.optionsSelect).toHaveValue('');
  }

  async expectUnsupportedOptionNotToBeSelected(): Promise<void> {
    await expect(this.optionPage.optionsSelect).toHaveValue('');
  }

  async expectAvailableOptionsToRemainUnchanged(): Promise<void> {
    await expect(this.optionPage.options).toHaveCount(3);
  }

  async expectOnlyOneOptionToBeSelected(): Promise<void> {
    await expect(this.optionPage.options.locator(':checked')).toHaveCount(1);
  }
}
