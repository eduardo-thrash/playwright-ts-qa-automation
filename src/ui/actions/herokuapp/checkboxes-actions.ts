import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { CheckboxesPage } from '@pages/herokuapp/checkboxes-page';
import { type Page } from '@playwright/test';

export class CheckboxesActions {
  private readonly inputActions: InputActions;
  private readonly optionPage: CheckboxesPage;
  private readonly homeActions: HomeActions;

  constructor(page: Page) {
    this.inputActions = new InputActions(page);
    this.optionPage = new CheckboxesPage(page);
    this.homeActions = new HomeActions(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Checkboxes');
  }

  async checkCheckbox(position: number): Promise<void> {
    await this.inputActions.check(this.optionPage.checkbox(position));
  }

  async uncheckCheckbox(position: number): Promise<void> {
    await this.inputActions.uncheck(this.optionPage.checkbox(position));
  }

  async focusCheckbox(position: number): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.checkbox(position));
  }

  async toggleFocusedCheckbox(): Promise<void> {
    await this.inputActions.pressKey('Space');
  }
}
