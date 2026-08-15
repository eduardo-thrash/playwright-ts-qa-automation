import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { SortableDataTablesPage } from '@pages/herokuapp/sortable-data-tables-page';
import { type Page } from '@playwright/test';
const HEADERS: Record<string, string> = { 'Last Name': 'last-name', 'First Name': 'first-name', Due: 'dues' };
export class SortableDataTablesActions {
  private readonly click = new ClickActions();
  private readonly home: HomeActions;
  private readonly optionPage: SortableDataTablesPage;
  constructor(page: Page) {
    this.home = new HomeActions(page);
    this.optionPage = new SortableDataTablesPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Sortable Data Tables');
  }

  async sortBy(name: string): Promise<void> {
    await this.click.clickOn(this.optionPage.header(HEADERS[name] ?? name));
  }

  async openEdit(): Promise<void> {
    await this.click.clickOn(this.optionPage.firstEditLink);
  }

  async viewHeaders(): Promise<void> {
    await this.optionPage.secondTable.waitFor({ state: 'visible' });
  }
}
