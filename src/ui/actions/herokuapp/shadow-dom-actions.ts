import { NavigationActions } from '@actions/common/navigation-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { ShadowDomPage } from '@pages/herokuapp/shadow-dom-page';
import { type Page } from '@playwright/test';
export class ShadowDomActions {
  private readonly homeActions: HomeActions;
  private readonly navigationActions: NavigationActions;
  private readonly waitActions: WaitActions;
  private readonly optionPage: ShadowDomPage;
  constructor(page: Page) {
    this.homeActions = new HomeActions(page);
    this.navigationActions = new NavigationActions(page);
    this.waitActions = new WaitActions(page);
    this.optionPage = new ShadowDomPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Shadow DOM');
  }

  async waitForHosts(): Promise<void> {
    await this.waitActions.waitForVisibility(this.optionPage.shadowHosts.first());
  }

  async accessFirstHost(): Promise<void> {
    await this.waitActions.waitForVisibility(this.optionPage.shadowHosts.first());
  }

  async accessSecondHost(): Promise<void> {
    await this.waitActions.waitForVisibility(this.optionPage.shadowHosts.nth(1));
  }

  async reloadPage(): Promise<void> {
    await this.navigationActions.reloadPage();
  }
}
