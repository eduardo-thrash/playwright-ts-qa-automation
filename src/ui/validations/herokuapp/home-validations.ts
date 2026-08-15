import { HomePage } from '@pages/herokuapp/home-page';
import { requireHerokuappOptionConfig } from '@helpers/herokuapp/herokuapp-options';
import { CommonValidations } from '@validations/common/common-validations';
import { NestedFramesValidations } from '@validations/herokuapp/nested-frames-validations';
import { expect, type Page } from '@playwright/test';

export class HomeValidations {
  private readonly commonValidations: CommonValidations;
  private readonly homePage: HomePage;
  private readonly nestedFramesValidations: NestedFramesValidations;
  private readonly page: Page;

  constructor(page: Page) {
    this.commonValidations = new CommonValidations(page);
    this.homePage = new HomePage(page);
    this.nestedFramesValidations = new NestedFramesValidations(page);
    this.page = page;
  }

  async expectPageToBeDisplayed(): Promise<void> {
    await expect(this.homePage.mainHeading).toBeVisible();
    await expect(this.homePage.mainHeading).toHaveText('Welcome to the-internet');
  }

  async expectOptionPageToBeDisplayed(option: string): Promise<void> {
    const { expectedPath } = requireHerokuappOptionConfig(option);

    await this.commonValidations.expectPathToBe(expectedPath);

    if (option === 'Nested Frames') {
      await this.nestedFramesValidations.expectPageToBeDisplayed();
      return;
    }

    await expect(this.page.locator('body')).toBeVisible();
  }
}
