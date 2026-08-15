import { ClickActions } from '@actions/common/click-actions';
import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ForgotPasswordPage } from '@pages/herokuapp/forgot-password-page';
import { type Page } from '@playwright/test';
export class ForgotPasswordActions {
  private readonly clickActions = new ClickActions();
  private readonly inputActions: InputActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: ForgotPasswordPage;
  constructor(private readonly page: Page) {
    this.inputActions = new InputActions(page);
    this.homeActions = new HomeActions(page);
    this.optionPage = new ForgotPasswordPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Forgot Password');
  }

  async enterRecoveryEmail(email: string): Promise<void> {
    await this.openPage();
    await this.inputActions.fillIn(this.optionPage.emailInput, email);
    setScenarioValue(this.page, 'recoveryEmail', email);
  }

  async reviewRecoveryForm(): Promise<void> {
    await this.optionPage.recoveryForm.waitFor({ state: 'visible' });
  }

  async submitRecoveryForm(): Promise<void> {
    await this.clickActions.clickOn(this.optionPage.retrievePasswordButton);
  }
}
