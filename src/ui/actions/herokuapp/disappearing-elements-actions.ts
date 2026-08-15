import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { DisappearingElementsPage } from '@pages/herokuapp/disappearing-elements-page';
import { type Page } from '@playwright/test';
export class DisappearingElementsActions {
  private readonly click = new ClickActions();
  private readonly navigation: NavigationActions;
  private readonly home: HomeActions;
  private readonly optionPage: DisappearingElementsPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new DisappearingElementsPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Disappearing Elements');
  }

  async waitForMenu(): Promise<void> {
    await this.optionPage.menuLinks.first().waitFor({ state: 'visible' });
  }

  async openHome(): Promise<void> {
    await this.click.clickOn(this.optionPage.menuLink('Home'));
  }

  async reloadPage(): Promise<void> {
    await this.navigation.reloadPage();
  }

  async reloadUntilGallery(present: boolean): Promise<void> {
    await this.openPage();
    for (let attempt = 0; attempt < 30; attempt += 1) {
      if ((await this.optionPage.menuLink('Gallery').count()) === (present ? 1 : 0)) return;
      await this.reloadPage();
    }
    throw new Error(`Gallery did not become ${present ? 'present' : 'absent'}`);
  }

  async reloadRepeatedly(): Promise<void> {
    const counts: number[] = [];
    for (let attempt = 0; attempt < 5; attempt += 1) {
      await this.reloadPage();
      counts.push(await this.optionPage.menuLinks.count());
    }
    setScenarioValue(this.page, 'disappearingMenuCounts', counts);
  }
}
