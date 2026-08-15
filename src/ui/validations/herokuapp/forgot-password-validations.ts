import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ForgotPasswordPage } from '@pages/herokuapp/forgot-password-page';
import { expect, type Page } from '@playwright/test';
export class ForgotPasswordValidations {
  private readonly optionPage: ForgotPasswordPage;
  constructor(private readonly page: Page) {
    this.optionPage = new ForgotPasswordPage(page);
  }

  async expectRecoveryEmailToBeAccepted(): Promise<void> {
    await expect(this.optionPage.emailInput).toHaveValue(requireScenarioValue<string>(this.page, 'recoveryEmail'));
    await expect(this.optionPage.emailInput).toHaveJSProperty('validity.valid', true);
  }

  async expectRecoveryActionToBeAvailable(): Promise<void> {
    await expect(this.optionPage.retrievePasswordButton).toBeEnabled();
  }

  async expectRequestNotToBeSubmitted(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/forgot_password');
  }

  async expectEmailToRemainRequired(): Promise<void> {
    await expect(this.optionPage.emailInput).toHaveAttribute('required', '');
  }

  async expectEmailToBeInvalid(): Promise<void> {
    await expect(this.optionPage.emailInput).toHaveJSProperty('validity.valid', false);
  }
}
