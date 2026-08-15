import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { RedirectLinkPage } from '@pages/herokuapp/redirect-link-page';
import { type Page } from '@playwright/test';
export class RedirectLinkActions {
  private readonly clickActions = new ClickActions();
  private readonly navigationActions: NavigationActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: RedirectLinkPage;
  constructor(page: Page) {
    this.navigationActions = new NavigationActions(page);
    this.homeActions = new HomeActions(page);
    this.optionPage = new RedirectLinkPage(page);
  }

  async openSourcePage(): Promise<void> {
    await this.homeActions.openOptionPage('Redirect Link');
  }

  async followRedirect(): Promise<void> {
    await this.clickActions.clickOn(this.optionPage.redirectLink);
  }

  async openSourceAndFollowRedirect(): Promise<void> {
    await this.openSourcePage();
    await this.followRedirect();
  }

  async navigateBack(): Promise<void> {
    await this.navigationActions.navigateBack();
  }

  async reloadLandingPage(): Promise<void> {
    await this.navigationActions.reloadPage();
  }

  async viewRedirectActions(): Promise<void> {
    await this.optionPage.redirectLink.waitFor({ state: 'visible' });
  }
}
