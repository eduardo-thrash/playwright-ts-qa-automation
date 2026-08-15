import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { BrokenImagesPage } from '@pages/herokuapp/broken-images-page';
import { expect, type Page } from '@playwright/test';
export class BrokenImagesValidations {
  private readonly optionPage: BrokenImagesPage;
  constructor(private readonly page: Page) {
    this.optionPage = new BrokenImagesPage(page);
  }
  private async naturalWidths(): Promise<number[]> {
    return this.optionPage.exampleImages.evaluateAll(images =>
      images.map(image => (image as HTMLImageElement).naturalWidth),
    );
  }
  async expectLoadedImageCountToBe(count: number): Promise<void> {
    expect((await this.naturalWidths()).filter(width => width > 0)).toHaveLength(count);
  }
  async expectBrokenImageCountToBe(count: number): Promise<void> {
    expect((await this.naturalWidths()).filter(width => width === 0)).toHaveLength(count);
  }
  async expectValidImageDimensions(): Promise<void> {
    await expect
      .poll(async () =>
        this.optionPage
          .image(3)
          .evaluate(image => ({
            width: (image as HTMLImageElement).naturalWidth,
            height: (image as HTMLImageElement).naturalHeight,
          })),
      )
      .toMatchObject({ width: expect.any(Number), height: expect.any(Number) });
    expect(await this.optionPage.image(3).evaluate(image => (image as HTMLImageElement).naturalWidth)).toBeGreaterThan(
      0,
    );
    expect(await this.optionPage.image(3).evaluate(image => (image as HTMLImageElement).naturalHeight)).toBeGreaterThan(
      0,
    );
  }
  async expectEveryImageToRemainInDocument(): Promise<void> {
    await expect(this.optionPage.exampleImages).toHaveCount(3);
  }
  async expectMissingResourceStatusToBe(status: number): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'missingImageStatus')).toBe(status);
  }
  async expectEveryImageToBeClassified(): Promise<void> {
    expect(await this.naturalWidths()).toHaveLength(3);
  }
  async expectPageContentToBeVisible(): Promise<void> {
    await expect(this.optionPage.pageContent).toBeVisible();
  }
}
