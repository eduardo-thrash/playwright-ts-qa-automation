import { NavigationActions } from '@actions/common/navigation-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { JavaScriptErrorPage } from '@pages/herokuapp/javascript-error-page';
import { type Page } from '@playwright/test';
export class JavaScriptErrorActions {
  private readonly navigationActions: NavigationActions;
  private readonly optionPage: JavaScriptErrorPage;
  constructor(private readonly page: Page) { this.navigationActions = new NavigationActions(page); this.optionPage = new JavaScriptErrorPage(page); }
  async openPageAndCaptureErrors(): Promise<void> { const errors: string[] = []; this.page.on('pageerror', error => errors.push(error.message)); await this.navigationActions.navigateTo('/javascript_error'); await this.optionPage.explanatoryContent.waitFor({ state: 'visible' }); setScenarioValue(this.page, 'javascriptPageErrors', errors); }
  async reloadAndCaptureErrors(): Promise<void> { const errors: string[] = []; this.page.on('pageerror', error => errors.push(error.message)); await this.navigationActions.reloadPage(); setScenarioValue(this.page, 'javascriptPageErrors', errors); }
  async waitForDocument(): Promise<void> { await this.optionPage.explanatoryContent.waitFor({ state: 'visible' }); }
}
