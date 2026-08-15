import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { getScenarioValue, setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { MultipleWindowsPage } from '@pages/herokuapp/multiple-windows-page';
import { type Page } from '@playwright/test';
export class MultipleWindowsActions {
  private readonly clickActions = new ClickActions();
  private readonly optionPage: MultipleWindowsPage;
  constructor(private readonly page: Page) {
    this.optionPage = new MultipleWindowsPage(page);
  }

  async openWindow(): Promise<void> {
    if (new URL(this.page.url()).pathname !== '/windows')
      await new HomeActions(this.page).openOptionPage('Multiple Windows');
    const promise = this.page.context().waitForEvent('page');
    await this.clickActions.clickOn(this.optionPage.openWindowLink);
    const child = await promise;
    await child.waitForLoadState();
    setScenarioValue(this.page, 'childWindows', [
      ...(getScenarioValue<Page[]>(this.page, 'childWindows') ?? []),
      child,
    ]);
  }

  async returnToOriginal(): Promise<void> {
    await this.page.bringToFront();
  }

  async closeLatestWindow(): Promise<void> {
    const children = getScenarioValue<Page[]>(this.page, 'childWindows') ?? [];
    await children.at(-1)?.close();
    await this.page.bringToFront();
  }

  async interactOutsideLink(): Promise<void> {
    await this.clickActions.clickOn(this.optionPage.heading);
  }

  async openTwoWindows(): Promise<void> {
    await this.openWindow();
    await this.page.bringToFront();
    await this.openWindow();
  }

  async switchRepeatedly(): Promise<void> {
    const child = (getScenarioValue<Page[]>(this.page, 'childWindows') ?? [])[0];
    if (!child) throw new Error('No child window was opened');
    for (let count = 0; count < 3; count += 1) {
      await child.bringToFront();
      await this.page.bringToFront();
    }
  }
}
