import { KeyPressesPage } from '@pages/herokuapp/key-presses-page';
import { expect, type Page } from '@playwright/test';
export class KeyPressesValidations {
  private readonly optionPage: KeyPressesPage;
  constructor(page: Page) { this.optionPage = new KeyPressesPage(page); }
  async expectNoResultToBeDisplayed(): Promise<void> { await expect(this.optionPage.resultMessage).toBeEmpty(); }
  async expectPreviousResultNotToBeAppended(): Promise<void> { await expect(this.optionPage.resultMessage).not.toContainText('You entered: A'); }
  async expectSpaceKeyToBeReported(): Promise<void> { await expect(this.optionPage.resultMessage).toContainText(/SPACE|You entered:/); }
}
