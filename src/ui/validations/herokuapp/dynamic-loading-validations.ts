import { DynamicLoadingPage } from '@pages/herokuapp/dynamic-loading-page';
import { expect, type Page } from '@playwright/test';
export class DynamicLoadingValidations {
  private readonly optionPage: DynamicLoadingPage;
  constructor(page: Page) { this.optionPage = new DynamicLoadingPage(page); }
  async expectFinalTextToBeDisplayed(): Promise<void> { await expect(this.optionPage.finalContent).toHaveText('Hello World!'); }
  async expectFinalTextToBeVisible(): Promise<void> { await expect(this.optionPage.finalContent).toBeVisible(); }
  async expectFinalTextToBeHidden(): Promise<void> { await expect(this.optionPage.finalContent).toBeHidden(); }
  async expectFinalTextNotToBePresent(): Promise<void> { await expect(this.optionPage.finalContent).toHaveCount(0); }
  async expectLoadingIndicatorToBeHidden(): Promise<void> { await expect(this.optionPage.loadingIndicator).toBeHidden(); }
  async expectLoadingIndicatorToBeVisible(): Promise<void> { await expect(this.optionPage.loadingIndicator).toBeVisible(); }
  async expectStartActionToBeHidden(): Promise<void> { await expect(this.optionPage.startButton).toBeHidden(); }
  async expectStartActionToBeAvailable(): Promise<void> { await expect(this.optionPage.startButton).toBeEnabled(); }
  async expectExamplesToBeDocumented(): Promise<void> { await expect(this.optionPage.exampleLinks).toHaveCount(2); await expect(this.optionPage.exampleLinks.first()).toContainText('Element on page that is hidden'); await expect(this.optionPage.exampleLinks.last()).toContainText('Element rendered after the fact'); }
}
