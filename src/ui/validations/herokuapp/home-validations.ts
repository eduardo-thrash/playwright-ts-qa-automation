import { HomePage } from '@pages/herokuapp/home-page';
import { getHerokuappOptionConfig } from '@helpers/herokuapp/herokuapp-options';
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

  async pageIsDisplayed(): Promise<void> {
    await expect(this.homePage.heading).toBeVisible();
    await expect(this.homePage.heading).toHaveText('Welcome to the-internet');
  }

  async optionPageIsDisplayed(option: string): Promise<void> {
    const { expectedPath } = getHerokuappOptionConfig(option);

    await this.commonValidations.pathIsDisplayed(expectedPath);

    if (option === 'Nested Frames') {
      await this.nestedFramesValidations.pageIsDisplayed();
      return;
    }

    await expect(this.page.locator('body')).toBeVisible();
  }
}
