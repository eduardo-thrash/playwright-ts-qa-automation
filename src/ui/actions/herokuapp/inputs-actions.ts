import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { InputsPage } from '@pages/herokuapp/inputs-page';
import { type Page } from '@playwright/test';

export class InputsActions {
  private readonly inputActions: InputActions;
  private readonly optionPage: InputsPage;
  private readonly homeActions: HomeActions;
  constructor(page: Page) {
    this.inputActions = new InputActions(page);
    this.optionPage = new InputsPage(page);
    this.homeActions = new HomeActions(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Inputs');
  }

  async enterNumber(value: string): Promise<void> {
    await this.inputActions.fillIn(this.optionPage.numberInput, value);
  }

  async focusInput(): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.numberInput);
  }

  async pressArrowUp(): Promise<void> {
    await this.inputActions.pressKey('ArrowUp');
  }

  async enterAlphabeticText(): Promise<void> {
    await this.optionPage.numberInput.pressSequentially('letters');
  }

  async enterUnsupportedNumber(): Promise<void> {
    await this.inputActions.fillIn(this.optionPage.numberInput, '1e');
  }
}
