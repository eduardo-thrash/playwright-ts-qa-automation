import { InputsPage } from '@pages/herokuapp/inputs-page';
import { expect, type Page } from '@playwright/test';
export class InputsValidations {
  private readonly optionPage: InputsPage;
  constructor(page: Page) {
    this.optionPage = new InputsPage(page);
  }
  async expectValueToBe(value: string): Promise<void> {
    await expect(this.optionPage.numberInput).toHaveValue(value);
  }
  async expectValueToContainNoLetters(): Promise<void> {
    await expect(this.optionPage.numberInput).not.toHaveValue(/[A-Za-z]/);
  }
  async expectUnsupportedValueNotToBeRetained(): Promise<void> {
    await expect(this.optionPage.numberInput).not.toHaveValue('1e');
  }
}
