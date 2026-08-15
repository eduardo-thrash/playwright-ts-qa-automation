import { ScrollActions } from '@actions/common/scroll-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { LargeDeepDomPage } from '@pages/herokuapp/large-deep-dom-page';
import { type Page } from '@playwright/test';
export class LargeDeepDomActions {
  private readonly optionPage: LargeDeepDomPage;
  private readonly scrollActions: ScrollActions;
  private readonly waitActions: WaitActions;
  private readonly navigationActions: NavigationActions;
  constructor(page: Page) { this.optionPage = new LargeDeepDomPage(page); this.scrollActions = new ScrollActions(page); this.waitActions = new WaitActions(page); this.navigationActions = new NavigationActions(page); }
  async openPage(): Promise<void> { await this.navigationActions.navigateTo('/large'); }
  async accessDeepestElement(): Promise<void> { await this.scrollActions.scrollTo(this.optionPage.deepestElement); }
  async accessTableCell(row: number, column: number): Promise<void> { await this.scrollActions.scrollTo(this.optionPage.tableCell(row, column)); }
  async waitForTable(): Promise<void> { await this.waitActions.waitForVisibility(this.optionPage.dataTable); }
  async accessTableBoundaries(): Promise<void> { await this.accessTableCell(1, 1); await this.accessTableCell(50, 50); }
}
