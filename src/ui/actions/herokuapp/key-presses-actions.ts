import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { KeyPressesPage } from '@pages/herokuapp/key-presses-page';
import { type Page } from '@playwright/test';
export class KeyPressesActions {
  private readonly inputActions: InputActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: KeyPressesPage;
  constructor(page: Page) { this.inputActions = new InputActions(page); this.homeActions = new HomeActions(page); this.optionPage = new KeyPressesPage(page); }
  async openPageAndFocusInput(): Promise<void> { await this.homeActions.openOptionPage('Key Presses'); await this.inputActions.focusOn(this.optionPage.keyInput); }
  async pressKey(key: string): Promise<void> { await this.inputActions.pressKey(key); }
  async viewEmptyResult(): Promise<void> { await this.optionPage.resultMessage.waitFor({ state: 'attached' }); }
}
