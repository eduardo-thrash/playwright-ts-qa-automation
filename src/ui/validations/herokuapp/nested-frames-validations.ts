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

  async expectTopFrameContents(): Promise<void> {
    await expect(this.nestedFramesPage.leftContent).toHaveText('LEFT');
    await expect(this.nestedFramesPage.middleContent).toHaveText('MIDDLE');
    await expect(this.nestedFramesPage.rightContent).toHaveText('RIGHT');
  }

  async expectBottomFrameContent(): Promise<void> {
    await expect(this.nestedFramesPage.bottomContent).toHaveText('BOTTOM');
  }

  async expectTopAndBottomGroupsToBeAttached(): Promise<void> {
    await expect(this.nestedFramesPage.topFrame).toBeAttached();
    await expect(this.nestedFramesPage.bottomFrame).toBeAttached();
  }

  async expectValuesToBelongToDifferentFrames(): Promise<void> {
    await this.expectTopFrameContents();
  }

  async expectFrameValuesOutsideParentBody(): Promise<void> {
    await expect(this.nestedFramesPage.topFrame.locator('xpath=..')).not.toContainText(/LEFT|MIDDLE|RIGHT|BOTTOM/);
  }

  async expectFourContentFrames(): Promise<void> {
    await expect(this.nestedFramesPage.topFrame).toHaveCount(1);
    await expect(this.nestedFramesPage.bottomFrame).toHaveCount(1);
    await this.expectPageToBeDisplayed();
  }

  async expectSiblingFramesToRemainAttached(): Promise<void> {
    await this.expectTopFrameContents();
  }
}
