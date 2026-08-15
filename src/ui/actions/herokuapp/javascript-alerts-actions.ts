import { ClickActions } from '@actions/common/click-actions';
import { JavaScriptAlertsPage } from '@pages/herokuapp/javascript-alerts-page';
import { type Page } from '@playwright/test';
export class JavaScriptAlertsActions {
  private readonly clickActions = new ClickActions();
  private readonly optionPage: JavaScriptAlertsPage;
  constructor(private readonly page: Page) {
    this.optionPage = new JavaScriptAlertsPage(page);
  }

  async acceptAlert(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.clickActions.clickOn(this.optionPage.alertButton);
  }

  async acceptConfirmation(): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept());
    await this.clickActions.clickOn(this.optionPage.confirmationButton);
  }

  async dismissConfirmation(): Promise<void> {
    this.page.once('dialog', dialog => dialog.dismiss());
    await this.clickActions.clickOn(this.optionPage.confirmationButton);
  }

  async acceptPrompt(text = ''): Promise<void> {
    this.page.once('dialog', dialog => dialog.accept(text));
    await this.clickActions.clickOn(this.optionPage.promptButton);
  }

  async dismissPrompt(): Promise<void> {
    this.page.once('dialog', dialog => dialog.dismiss());
    await this.clickActions.clickOn(this.optionPage.promptButton);
  }
}
