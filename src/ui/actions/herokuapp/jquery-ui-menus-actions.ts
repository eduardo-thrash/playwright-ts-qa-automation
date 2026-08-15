import { ClickActions } from '@actions/common/click-actions';
import { PointerActions } from '@actions/common/pointer-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { JqueryUiMenusPage } from '@pages/herokuapp/jquery-ui-menus-page';
import { type Page } from '@playwright/test';
export class JqueryUiMenusActions {
  private readonly click = new ClickActions();
  private readonly pointer: PointerActions;
  private readonly home: HomeActions;
  private readonly optionPage: JqueryUiMenusPage;
  constructor(private readonly page: Page) {
    this.pointer = new PointerActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new JqueryUiMenusPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('JQuery UI Menus');
    setScenarioValue(this.page, 'jqueryDownloads', []);
  }

  async expandEnabled(): Promise<void> {
    await this.pointer.hoverOver(this.optionPage.menuItem('Enabled'));
  }

  async expandDownloads(): Promise<void> {
    await this.expandEnabled();
    await this.pointer.hoverOver(this.optionPage.menuItem('Downloads'));
  }

  async download(format: 'PDF' | 'CSV' | 'Excel'): Promise<void> {
    await this.expandDownloads();
    const promise = this.page.waitForEvent('download');
    await this.click.clickOn(this.optionPage.menuItem(format));
    setScenarioValue(this.page, 'jqueryDownloads', [(await promise).suggestedFilename()]);
  }

  async hoverDisabled(): Promise<void> {
    await this.pointer.hoverOver(this.optionPage.menuItem('Disabled'));
  }

  async leaveMenu(): Promise<void> {
    await this.pointer.hoverOver(this.optionPage.heading);
  }
}
