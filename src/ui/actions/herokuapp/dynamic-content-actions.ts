import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { DynamicContentPage } from '@pages/herokuapp/dynamic-content-page';
import { type Page } from '@playwright/test';
export class DynamicContentActions {
  private readonly click = new ClickActions();
  private readonly navigation: NavigationActions;
  private readonly home: HomeActions;
  private readonly optionPage: DynamicContentPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new DynamicContentPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Dynamic Content');
  }

  async recordContent(): Promise<void> {
    setScenarioValue(this.page, 'dynamicTextsBefore', await this.optionPage.contentTexts.allTextContents());
    setScenarioValue(
      this.page,
      'dynamicImagesBefore',
      await this.optionPage.avatarImages.evaluateAll(images => images.map(image => image.getAttribute('src') ?? '')),
    );
  }

  async reloadAndRecord(): Promise<void> {
    await this.navigation.reloadPage();
    setScenarioValue(this.page, 'dynamicTextsAfter', await this.optionPage.contentTexts.allTextContents());
    setScenarioValue(
      this.page,
      'dynamicImagesAfter',
      await this.optionPage.avatarImages.evaluateAll(images => images.map(image => image.getAttribute('src') ?? '')),
    );
  }

  async openStaticVariant(): Promise<void> {
    await this.navigation.navigateTo('/dynamic_content?with_content=static');
  }

  async requestUnsupportedMode(): Promise<void> {
    await this.navigation.navigateTo('/dynamic_content?with_content=unsupported');
  }

  async reloadRepeatedly(): Promise<void> {
    const counts: number[] = [];
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await this.navigation.reloadPage();
      counts.push(await this.optionPage.contentRows.count());
    }
    setScenarioValue(this.page, 'dynamicRowCounts', counts);
  }

  async followStaticLink(): Promise<void> {
    await this.click.clickOn(this.optionPage.staticContentLink);
  }

  async waitForContent(): Promise<void> {
    await this.optionPage.contentRows.first().waitFor({ state: 'visible' });
  }
}
