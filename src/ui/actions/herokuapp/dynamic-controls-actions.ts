import { ClickActions } from '@actions/common/click-actions';
import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { DynamicControlsPage } from '@pages/herokuapp/dynamic-controls-page';
import { type Page } from '@playwright/test';
export class DynamicControlsActions {
  private readonly click = new ClickActions();
  private readonly inputActions: InputActions;
  private readonly home: HomeActions;
  private readonly optionPage: DynamicControlsPage;
  constructor(page: Page) {
    this.inputActions = new InputActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new DynamicControlsPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Dynamic Controls');
  }

  async toggleCheckbox(): Promise<void> {
    await this.click.clickOn(this.optionPage.checkboxButton);
    await this.optionPage.loadingIndicators.first().waitFor({ state: 'hidden' });
  }

  async toggleInput(): Promise<void> {
    await this.click.clickOn(this.optionPage.inputButton);
    await this.optionPage.loadingIndicators.last().waitFor({ state: 'hidden' });
  }

  async enterText(text: string): Promise<void> {
    await this.inputActions.fillIn(this.optionPage.input, text);
  }

  async attemptDisabledInput(): Promise<void> {
    await this.optionPage.input.fill('blocked').catch(() => undefined);
  }

  async startCheckboxChange(): Promise<void> {
    await this.click.clickOn(this.optionPage.checkboxButton);
  }

  async attemptDuplicateCheckboxChange(): Promise<void> {
    await this.optionPage.checkboxButton.click({ trial: true }).catch(() => undefined);
    await this.optionPage.loadingIndicators.first().waitFor({ state: 'hidden' });
  }
}
