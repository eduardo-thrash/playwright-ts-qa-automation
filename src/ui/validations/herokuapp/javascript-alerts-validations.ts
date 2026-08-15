import { JavaScriptAlertsPage } from '@pages/herokuapp/javascript-alerts-page';
import { expect, type Page } from '@playwright/test';
export class JavaScriptAlertsValidations {
  private readonly optionPage: JavaScriptAlertsPage;
  constructor(page: Page) {
    this.optionPage = new JavaScriptAlertsPage(page);
  }

  async expectResultToBe(text: string): Promise<void> {
    await expect(this.optionPage.resultMessage).toHaveText(text);
  }

  async expectUnicodeResultToBeComplete(): Promise<void> {
    await expect(this.optionPage.resultMessage).toHaveText('You entered: áéíóú 中文 🚀');
  }
}
