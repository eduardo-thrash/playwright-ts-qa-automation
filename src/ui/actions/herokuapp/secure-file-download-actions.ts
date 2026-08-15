import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { HttpAuthenticationActions } from '@actions/herokuapp/http-authentication-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { SecureFileDownloadPage } from '@pages/herokuapp/secure-file-download-page';
import { type Page } from '@playwright/test';
export class SecureFileDownloadActions {
  private readonly clickActions = new ClickActions();
  private readonly navigationActions: NavigationActions;
  private readonly homeActions: HomeActions;
  private readonly authActions: HttpAuthenticationActions;
  private readonly optionPage: SecureFileDownloadPage;
  constructor(private readonly page: Page) {
    this.navigationActions = new NavigationActions(page);
    this.homeActions = new HomeActions(page);
    this.authActions = new HttpAuthenticationActions(page);
    this.optionPage = new SecureFileDownloadPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Secure File Download');
  }

  async waitForFiles(): Promise<void> {
    await this.optionPage.fileLinks.first().waitFor({ state: 'visible' });
  }

  async downloadFile(position: 'first' | 'last'): Promise<void> {
    const link = position === 'first' ? this.optionPage.fileLinks.first() : this.optionPage.fileLinks.last();
    const selectedName = (await link.textContent())?.trim() ?? '';
    const downloadPromise = this.page.waitForEvent('download');
    await this.clickActions.clickOn(link);
    const download = await downloadPromise;
    setScenarioValue(this.page, 'secureDownloads', [download.suggestedFilename()]);
    setScenarioValue(this.page, 'secureSelectedName', selectedName);
  }

  async downloadFirstFileTwice(): Promise<void> {
    const names: string[] = [];
    const link = this.optionPage.fileLinks.first();
    const selectedName = (await link.textContent())?.trim() ?? '';
    for (let count = 0; count < 2; count += 1) {
      const downloadPromise = this.page.waitForEvent('download');
      await this.clickActions.clickOn(link);
      names.push((await downloadPromise).suggestedFilename());
    }
    setScenarioValue(this.page, 'secureDownloads', names);
    setScenarioValue(this.page, 'secureSelectedName', selectedName);
  }

  async reloadPage(): Promise<void> {
    await this.navigationActions.reloadPage();
  }

  prepareInvalidCredentials(username: string, password: string): void {
    this.authActions.prepareCredentials('secure', username, password);
  }

  async requestWithPreparedCredentials(): Promise<void> {
    await this.authActions.requestPreparedCredentials('secure');
  }
}
