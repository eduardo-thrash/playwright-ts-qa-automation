import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { requireHerokuappOptionConfig } from '@helpers/herokuapp/herokuapp-options';
import { HomePage } from '@pages/herokuapp/home-page';
import { type Page } from '@playwright/test';

export class HomeActions {
  private readonly clickActions = new ClickActions();
  private readonly homePage: HomePage;
  private readonly navigationActions: NavigationActions;
  private readonly waitActions: WaitActions;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
    this.navigationActions = new NavigationActions(page);
    this.waitActions = new WaitActions(page);
  }

  async openHomePage(): Promise<void> {
    await this.navigationActions.navigateTo('/');
  }

  async openOption(option: string): Promise<void> {
    const { href, expectedPath } = requireHerokuappOptionConfig(option);

    await this.clickActions.clickOn(this.homePage.optionLink(href));
    await this.waitActions.waitForPath(expectedPath);
  }
}
