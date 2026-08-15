import { NestedFramesPage } from '@pages/herokuapp/nested-frames-page';
import { expect, type Page } from '@playwright/test';

export class NestedFramesValidations {
  private readonly nestedFramesPage: NestedFramesPage;

  constructor(page: Page) {
    this.nestedFramesPage = new NestedFramesPage(page);
  }

  async expectPageToBeDisplayed(): Promise<void> {
    await expect(this.nestedFramesPage.topFrame).toBeAttached();
    await expect(this.nestedFramesPage.bottomFrame).toBeAttached();
    await expect(this.nestedFramesPage.leftContent).toHaveText('LEFT');
    await expect(this.nestedFramesPage.middleContent).toHaveText('MIDDLE');
    await expect(this.nestedFramesPage.rightContent).toHaveText('RIGHT');
    await expect(this.nestedFramesPage.bottomContent).toHaveText('BOTTOM');
  }
}
