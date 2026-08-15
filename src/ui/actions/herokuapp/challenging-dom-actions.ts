import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ChallengingDomPage } from '@pages/herokuapp/challenging-dom-page';
import { type Page } from '@playwright/test';
export class ChallengingDomActions {
  private readonly click = new ClickActions();
  private readonly navigation: NavigationActions;
  private readonly home: HomeActions;
  private readonly optionPage: ChallengingDomPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new ChallengingDomPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Challenging DOM');
  }

  async activateDynamicButton(): Promise<void> {
    setScenarioValue(
      this.page,
      'dynamicButtonIdBefore',
      await this.optionPage.dynamicButtons.first().getAttribute('id'),
    );
    await this.click.clickOn(this.optionPage.dynamicButtons.first());
  }

  async openRowAction(position: 'first' | 'last', action: 'edit' | 'delete'): Promise<void> {
    const row = position === 'first' ? this.optionPage.rows.first() : this.optionPage.rows.last();
    await this.click.clickOn(row.getByRole('link', { name: action }));
  }

  async recordRows(): Promise<void> {
    setScenarioValue(this.page, 'challengingRows', await this.optionPage.rows.allTextContents());
  }

  async requestUnsupportedAction(): Promise<void> {
    await this.recordRows();
    await this.navigation.navigateTo('/challenging_dom?action=unsupported');
  }

  async viewTable(): Promise<void> {
    await this.optionPage.dataTable.waitFor({ state: 'visible' });
  }
}
