import { HoversPage } from '@pages/herokuapp/hovers-page';
import { expect, type Page } from '@playwright/test';
export class HoversValidations {
  private readonly optionPage: HoversPage;
  constructor(page: Page) {
    this.optionPage = new HoversPage(page);
  }

  async expectProfileLinkToBeVisible(position: number): Promise<void> {
    await expect(this.optionPage.profileLink(position)).toBeVisible();
  }

  async expectCaptionToBeHidden(position: number): Promise<void> {
    await expect(this.optionPage.caption(position)).toBeHidden();
  }

  async expectEveryCaptionToBeHidden(): Promise<void> {
    for (let position = 1; position <= 3; position += 1) await this.expectCaptionToBeHidden(position);
  }

  async expectCaptionToBeVisible(position: number): Promise<void> {
    await expect(this.optionPage.caption(position)).toBeVisible();
  }

  async expectCaptionCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.figures.locator('.figcaption')).toHaveCount(count);
  }
}
