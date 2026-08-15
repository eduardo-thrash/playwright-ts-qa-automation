import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ShiftingContentPage } from '@pages/herokuapp/shifting-content-page';
import { type Page } from '@playwright/test';
export class ShiftingContentActions {
  private readonly navigation: NavigationActions;
  private readonly home: HomeActions;
  private readonly optionPage: ShiftingContentPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new ShiftingContentPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Shifting Content');
  }

  async openList(): Promise<void> {
    await this.navigation.navigateTo('/shifting_content/list');
  }

  async openMenu(query = ''): Promise<void> {
    await this.navigation.navigateTo(`/shifting_content/menu${query}`);
  }

  async openImage(query = ''): Promise<void> {
    await this.navigation.navigateTo(`/shifting_content/image${query}`);
  }

  async reloadList(): Promise<void> {
    await this.navigation.reloadPage();
  }

  async reloadListRepeatedly(): Promise<void> {
    const present: boolean[] = [];
    for (let count = 0; count < 5; count += 1) {
      await this.reloadList();
      present.push(await this.optionPage.importantRecord.isVisible());
    }
    setScenarioValue(this.page, 'importantRecordPresence', present);
  }

  async viewExamples(): Promise<void> {
    await this.optionPage.exampleLinks.first().waitFor({ state: 'visible' });
  }
}
