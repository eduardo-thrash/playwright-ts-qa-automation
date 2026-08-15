import { ShadowDomPage } from '@pages/herokuapp/shadow-dom-page';
import { expect, type Page } from '@playwright/test';
export class ShadowDomValidations {
  private readonly optionPage: ShadowDomPage;
  constructor(page: Page) {
    this.optionPage = new ShadowDomPage(page);
  }

  async expectExpectedContent(): Promise<void> {
    await expect(this.optionPage.shadowHosts).toHaveCount(2);
    await expect(this.optionPage.shadowTextSlots).toHaveCount(2);
    await expect(this.optionPage.shadowTextSlots).toContainText([
      "Let's have some different text!",
      "Let's have some different text!",
    ]);
    await expect(this.optionPage.shadowListItems).toContainText(['In a list!']);
  }

  async expectListItemCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.shadowListItems).toHaveCount(count);
  }

  async expectHostCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.shadowHosts).toHaveCount(count);
  }

  async expectNoExpectedContentToBeMissing(): Promise<void> {
    await this.expectExpectedContent();
  }

  async expectRepeatedTextCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.shadowTextSlots.filter({ hasText: "Let's have some different text!" })).toHaveCount(
      count,
    );
  }

  async expectListOnlyTextCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.shadowListItems.filter({ hasText: 'In a list!' })).toHaveCount(count);
  }
}
