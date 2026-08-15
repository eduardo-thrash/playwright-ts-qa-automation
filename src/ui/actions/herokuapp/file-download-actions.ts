import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { FileDownloadPage } from '@pages/herokuapp/file-download-page';
import { type Locator, type Page } from '@playwright/test';
export class FileDownloadActions {
  private readonly clickActions = new ClickActions();
  private readonly homeActions: HomeActions;
  private readonly optionPage: FileDownloadPage;
  constructor(private readonly page: Page) {
    this.homeActions = new HomeActions(page);
    this.optionPage = new FileDownloadPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('File Download');
  }

  async waitForFiles(): Promise<void> {
    await this.optionPage.fileLinks.first().waitFor({ state: 'visible' });
  }

  private async downloadFrom(link: Locator): Promise<void> {
    const selected = (await link.textContent())?.trim() ?? '';
    const href = (await link.getAttribute('href')) ?? '';
    const fileResponse = await this.page.request.get(href);
    const promise = this.page.waitForEvent('download');
    await this.clickActions.clickOn(link);
    const name = (await promise).suggestedFilename();
    setScenarioValue(this.page, 'fileDownloads', [name]);
    setScenarioValue(this.page, 'fileSelectedName', selected);
    setScenarioValue(this.page, 'fileContentLength', (await fileResponse.body()).length);
  }

  async downloadFile(position: 'first' | 'last'): Promise<void> {
    await this.downloadFrom(
      position === 'first' ? this.optionPage.fileLinks.first() : this.optionPage.fileLinks.last(),
    );
  }

  async requestMissingFile(): Promise<void> {
    const response = await this.page.request.get('/download/nonexistent-file.invalid');
    setScenarioValue(this.page, 'missingDownloadStatus', response.status());
  }

  async viewPageWithoutDownload(): Promise<void> {
    await this.waitForFiles();
    setScenarioValue(this.page, 'fileDownloads', []);
  }

  async downloadFirstTwice(): Promise<void> {
    const link = this.optionPage.fileLinks.first();
    const selected = (await link.textContent())?.trim() ?? '';
    const names: string[] = [];
    for (let count = 0; count < 2; count += 1) {
      const promise = this.page.waitForEvent('download');
      await this.clickActions.clickOn(link);
      names.push((await promise).suggestedFilename());
    }
    setScenarioValue(this.page, 'fileDownloads', names);
    setScenarioValue(this.page, 'fileSelectedName', selected);
  }
}
