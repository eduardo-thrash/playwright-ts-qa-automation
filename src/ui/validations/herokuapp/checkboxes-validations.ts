import { CheckboxesPage } from '@pages/herokuapp/checkboxes-page';
import { expect, type Page } from '@playwright/test';

export class CheckboxesValidations {
  private readonly optionPage: CheckboxesPage;

  constructor(page: Page) {
    this.optionPage = new CheckboxesPage(page);
  }

  async expectCheckboxToBeChecked(position: number): Promise<void> {
    await expect(this.optionPage.checkbox(position)).toBeChecked();
  }

  async expectCheckboxToBeUnchecked(position: number): Promise<void> {
    await expect(this.optionPage.checkbox(position)).not.toBeChecked();
  }

  async expectCheckboxCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.checkboxes).toHaveCount(count);
  }
}
