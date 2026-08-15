import { HorizontalSliderPage } from '@pages/herokuapp/horizontal-slider-page';
import { expect, type Page } from '@playwright/test';
export class HorizontalSliderValidations {
  private readonly optionPage: HorizontalSliderPage;
  constructor(page: Page) {
    this.optionPage = new HorizontalSliderPage(page);
  }

  async expectDisplayedValueToBe(value: string): Promise<void> {
    await expect(this.optionPage.sliderValueLabel).toHaveText(value);
  }
}
