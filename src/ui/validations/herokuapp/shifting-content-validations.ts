import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ShiftingContentPage } from '@pages/herokuapp/shifting-content-page';
import { expect, type Page } from '@playwright/test';
export class ShiftingContentValidations {
  private readonly optionPage: ShiftingContentPage;
  constructor(page: Page) {
    this.optionPage = new ShiftingContentPage(page);
  }

  async expectImportantRecord(): Promise<void> {
    await expect(this.optionPage.importantRecord).toBeVisible();
  }

  async expectMenu(): Promise<void> {
    await expect(this.optionPage.menuLinks).toHaveCount(5);
    for (const link of await this.optionPage.menuLinks.all()) await expect(link).toBeEnabled();
  }

  async expectImageLoaded(): Promise<void> {
    await expect(this.optionPage.shiftingImage).toBeVisible();
    await expect
      .poll(() => this.optionPage.shiftingImage.evaluate(image => (image as HTMLImageElement).naturalWidth))
      .toBeGreaterThan(0);
  }

  async expectThreeExamples(): Promise<void> {
    await expect(this.optionPage.exampleLinks).toHaveCount(3);
  }

  async expectImportantRecordNeverAbsent(): Promise<void> {
    expect(requireScenarioValue<boolean[]>(this.optionPage.page, 'importantRecordPresence')).not.toContain(false);
  }
}
