import { EntryAdPage } from '@pages/herokuapp/entry-ad-page';
import { expect, type Page } from '@playwright/test';
export class EntryAdValidations {
  private readonly optionPage: EntryAdPage;
  constructor(page: Page) {
    this.optionPage = new EntryAdPage(page);
  }

  async expectContentAccessible(): Promise<void> {
    await expect(this.optionPage.content).toBeVisible();
  }

  async expectCoveredInteractionNotCompleted(): Promise<void> {
    await expect(this.optionPage.reEnableLink).toBeVisible();
  }
}
