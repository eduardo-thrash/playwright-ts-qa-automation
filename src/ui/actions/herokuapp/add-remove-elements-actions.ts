import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { WaitActions } from '@actions/common/wait-actions';
import { AddRemoveElementsPage } from '@pages/herokuapp/add-remove-elements-page';
import { type Page } from '@playwright/test';

export class AddRemoveElementsActions {
  private readonly clickActions = new ClickActions();
  private readonly optionPage: AddRemoveElementsPage;
  private readonly homeActions: HomeActions;
  private readonly waitActions: WaitActions;

  constructor(page: Page) {
    this.optionPage = new AddRemoveElementsPage(page);
    this.homeActions = new HomeActions(page);
    this.waitActions = new WaitActions(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Add/Remove Elements');
  }

  async addElements(count: number): Promise<void> {
    for (let index = 0; index < count; index += 1) {
      await this.clickActions.clickOn(this.optionPage.addElementButton);
    }
  }

  async removeElements(count: number): Promise<void> {
    for (let index = 0; index < count; index += 1) {
      await this.clickActions.clickOn(this.optionPage.deleteButtons.first());
    }
  }

  async addAndRemoveRepeatedly(): Promise<void> {
    for (let index = 0; index < 3; index += 1) {
      await this.addElements(1);
      await this.removeElements(1);
    }
  }

  async viewRemovalArea(): Promise<void> {
    await this.waitActions.waitForVisibility(this.optionPage.addElementButton);
  }
}
