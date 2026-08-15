import { type Page } from '@playwright/test';
export class ShiftingContentPage {
  constructor(readonly page: Page) {}

  get exampleLinks() {
    return this.page.locator('.example a');
  }

  get menuLinks() {
    return this.page.locator('#content ul li a');
  }

  get shiftingImage() {
    return this.page.locator('.shift img');
  }

  get importantRecord() {
    return this.page.getByText("Important Information You're Looking For", { exact: true });
  }
}
