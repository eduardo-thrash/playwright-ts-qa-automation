import { NavigationActions } from '@actions/common/navigation-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { NestedFramesPage } from '@pages/herokuapp/nested-frames-page';
import { type Page } from '@playwright/test';
export class NestedFramesActions {
  private readonly homeActions: HomeActions;
  private readonly navigationActions: NavigationActions;
  private readonly waitActions: WaitActions;
  private readonly optionPage: NestedFramesPage;
  constructor(page: Page) { this.homeActions = new HomeActions(page); this.navigationActions = new NavigationActions(page); this.waitActions = new WaitActions(page); this.optionPage = new NestedFramesPage(page); }
  async openPage(): Promise<void> { await this.homeActions.openOptionPage('Nested Frames'); }
  async waitForEveryFrame(): Promise<void> { await this.waitActions.waitForVisibility(this.optionPage.leftContent); await this.waitActions.waitForVisibility(this.optionPage.middleContent); await this.waitActions.waitForVisibility(this.optionPage.rightContent); await this.waitActions.waitForVisibility(this.optionPage.bottomContent); }
  async waitForTopGroup(): Promise<void> { await this.waitActions.waitForVisibility(this.optionPage.middleContent); }
  async waitForBottomFrame(): Promise<void> { await this.waitActions.waitForVisibility(this.optionPage.bottomContent); }
  async reloadPage(): Promise<void> { await this.navigationActions.reloadPage(); await this.waitForEveryFrame(); }
}
