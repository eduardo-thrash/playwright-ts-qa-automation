import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { AbTestingPage } from '@pages/herokuapp/ab-testing-page';
import { type Page } from '@playwright/test';
export class AbTestingActions {
  private readonly navigationActions: NavigationActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: AbTestingPage;
  constructor(private readonly page: Page) {
    this.navigationActions = new NavigationActions(page);
    this.homeActions = new HomeActions(page);
    this.optionPage = new AbTestingPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('A/B Testing');
  }

  async reloadPage(): Promise<void> {
    await this.navigationActions.reloadPage();
  }

  async clearExperimentCookies(): Promise<void> {
    await this.page.context().clearCookies();
  }

  async storeUnknownCookie(): Promise<void> {
    await this.page
      .context()
      .addCookies([{ name: 'unknown_experiment', value: 'unsupported', url: 'https://the-internet.herokuapp.com' }]);
  }

  async requestUnsupportedVariant(): Promise<void> {
    await this.navigationActions.navigateTo('/abtest?variant=unsupported');
  }

  async reloadRepeatedly(): Promise<void> {
    const headings: string[] = [];
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await this.reloadPage();
      headings.push((await this.optionPage.experimentHeading.textContent())?.trim() ?? '');
    }
    setScenarioValue(this.page, 'abTestingHeadings', headings);
  }

  async waitForContent(): Promise<void> {
    await this.optionPage.experimentHeading.waitFor({ state: 'visible' });
  }
}
