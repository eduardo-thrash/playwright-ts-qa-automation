import { ClickActions } from '@actions/common/click-actions';
import { InputActions } from '@actions/common/input-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { FormAuthenticationPage } from '@pages/herokuapp/form-authentication-page';
import { type Page } from '@playwright/test';
export class FormAuthenticationActions {
  private readonly clickActions = new ClickActions();
  private readonly inputActions: InputActions;
  private readonly navigationActions: NavigationActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: FormAuthenticationPage;
  constructor(page: Page) { this.inputActions = new InputActions(page); this.navigationActions = new NavigationActions(page); this.homeActions = new HomeActions(page); this.optionPage = new FormAuthenticationPage(page); }
  async openPage(): Promise<void> { await this.homeActions.openOptionPage('Form Authentication'); }
  async enterCredentials(username: string, password: string): Promise<void> { await this.inputActions.fillIn(this.optionPage.usernameInput, username); await this.inputActions.fillIn(this.optionPage.passwordInput, password); }
  async submitLogin(): Promise<void> { await this.clickActions.clickOn(this.optionPage.loginButton); }
  async login(username = 'tomsmith', password = 'SuperSecretPassword!'): Promise<void> { await this.openPage(); await this.enterCredentials(username, password); await this.submitLogin(); }
  async logout(): Promise<void> { await this.clickActions.clickOn(this.optionPage.logoutButton); }
  async reloadSecurePage(): Promise<void> { await this.navigationActions.reloadPage(); }
}
