import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { JavaScriptErrorPage } from '@pages/herokuapp/javascript-error-page';
import { expect, type Page } from '@playwright/test';
export class JavaScriptErrorValidations {
  private readonly optionPage: JavaScriptErrorPage;
  constructor(private readonly page: Page) {
    this.optionPage = new JavaScriptErrorPage(page);
  }

  private errors(): string[] {
    return requireScenarioValue<string[]>(this.page, 'javascriptPageErrors');
  }

  async expectOneOnloadError(): Promise<void> {
    expect(this.errors()).toHaveLength(1);
    expect(this.errors()[0]).toMatch(/undefined|Cannot read/i);
  }

  async expectNoUnrelatedErrors(): Promise<void> {
    await this.expectOneOnloadError();
  }

  async expectExplanatoryContentToBeVisible(): Promise<void> {
    await expect(this.optionPage.explanatoryContent).toContainText(
      'This page has a JavaScript error in the onload event.',
    );
  }

  async expectNoBrowserErrorDocument(): Promise<void> {
    await this.expectExplanatoryContentToBeVisible();
  }
}
