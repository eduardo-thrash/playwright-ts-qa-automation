import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ContextMenuPage } from '@pages/herokuapp/context-menu-page';
import { type Page } from '@playwright/test';
export class ContextMenuActions {
  private readonly clickActions = new ClickActions();
  private readonly homeActions: HomeActions;
  private readonly optionPage: ContextMenuPage;
  constructor(private readonly page: Page) {
    this.homeActions = new HomeActions(page);
    this.optionPage = new ContextMenuPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Context Menu');
  }

  private observeNextDialog(accept: boolean): void {
    const messages: string[] = [];
    this.page.once('dialog', async dialog => {
      messages.push(dialog.message());
      if (accept) await dialog.accept();
      else await dialog.dismiss();
    });
    setScenarioValue(this.page, 'contextDialogMessages', messages);
  }

  async openInside(accept = true, position?: { x: number; y: number }): Promise<void> {
    this.observeNextDialog(accept);
    await this.clickActions.rightClickOn(this.optionPage.targetArea, position);
  }

  async leftClickInside(): Promise<void> {
    const messages: string[] = [];
    this.page.once('dialog', async dialog => {
      messages.push(dialog.message());
      await dialog.dismiss();
    });
    await this.clickActions.clickOn(this.optionPage.targetArea);
    setScenarioValue(this.page, 'contextDialogMessages', messages);
  }

  async openOutside(): Promise<void> {
    const messages: string[] = [];
    this.page.once('dialog', async dialog => {
      messages.push(dialog.message());
      await dialog.dismiss();
    });
    await this.clickActions.rightClickOn(this.optionPage.pageContent, { x: 1, y: 1 });
    setScenarioValue(this.page, 'contextDialogMessages', messages);
  }
}
