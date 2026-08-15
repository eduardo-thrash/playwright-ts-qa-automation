import { type Page } from '@playwright/test';
export class HorizontalSliderPage {
  constructor(readonly page: Page) {}
  get sliderInput() { return this.page.locator('input[type="range"]'); }
  get sliderValueLabel() { return this.page.locator('#range'); }
}
