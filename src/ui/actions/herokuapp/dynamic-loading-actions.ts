import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { DynamicLoadingPage } from '@pages/herokuapp/dynamic-loading-page';
import { type Page } from '@playwright/test';
export class DynamicLoadingActions {
  private readonly clickActions = new ClickActions();
  private readonly navigationActions: NavigationActions;
  private readonly waitActions: WaitActions;
  private readonly optionPage: DynamicLoadingPage;
  constructor(private readonly page: Page) { this.navigationActions = new NavigationActions(page); this.waitActions = new WaitActions(page); this.optionPage = new DynamicLoadingPage(page); }
  async openExample(example: 1 | 2): Promise<void> { await this.navigationActions.navigateTo(`/dynamic_loading/${example}`); }
  async startLoading(): Promise<void> { await this.clickActions.clickOn(this.optionPage.startButton); await this.waitActions.waitForVisibility(this.optionPage.finalContent); }
  async startLoadingWithoutWaiting(): Promise<void> { await this.clickActions.clickOn(this.optionPage.startButton); }
  async viewLoadingControls(): Promise<void> { await this.waitActions.waitForVisibility(this.optionPage.loadingIndicator); }
  async openEveryExample(): Promise<void> { for (const example of [1, 2] as const) { await this.openExample(example); await this.page.goBack(); } }
  async reopenCurrentExample(): Promise<void> { await this.page.reload(); }
}
