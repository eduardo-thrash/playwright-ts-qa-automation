import { AddRemoveElementsPage } from '@pages/herokuapp/add-remove-elements-page';
import { expect, type Page } from '@playwright/test';

export class AddRemoveElementsValidations {
  private readonly optionPage: AddRemoveElementsPage;

  constructor(page: Page) {
    this.optionPage = new AddRemoveElementsPage(page);
  }

  async expectDeleteButtonCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.deleteButtons).toHaveCount(count);
  }

  async expectPageToRemainUsable(): Promise<void> {
    await expect(this.optionPage.addElementButton).toBeEnabled();
  }
}
