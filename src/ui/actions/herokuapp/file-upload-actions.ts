import { ClickActions } from '@actions/common/click-actions';
import { InputActions, type UploadFilePayload } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { requireScenarioValue, setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { FileUploadPage } from '@pages/herokuapp/file-upload-page';
import { type Page } from '@playwright/test';
export class FileUploadActions {
  private readonly clickActions = new ClickActions();
  private readonly inputActions: InputActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: FileUploadPage;
  constructor(private readonly page: Page) {
    this.inputActions = new InputActions(page);
    this.homeActions = new HomeActions(page);
    this.optionPage = new FileUploadPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('File Upload');
  }

  async prepareFile(name: string, mimeType: string, content: string): Promise<void> {
    await this.openPage();
    setScenarioValue<UploadFilePayload>(this.page, 'uploadFile', { name, mimeType, buffer: Buffer.from(content) });
  }

  async uploadPreparedFile(): Promise<void> {
    const file = requirePreparedFile(this.page);
    await this.inputActions.uploadFile(this.optionPage.fileInput, file);
    setScenarioValue(this.page, 'uploadedFilename', file.name);
    await this.clickActions.clickOn(this.optionPage.uploadButton);
  }

  async submitWithoutFile(): Promise<void> {
    const responsePromise = this.page.waitForResponse(
      response => response.request().method() === 'POST' && response.url().endsWith('/upload'),
    );
    await this.clickActions.clickOn(this.optionPage.uploadButton);
    setScenarioValue(this.page, 'emptyUploadStatus', (await responsePromise).status());
  }

  async attemptMissingFile(): Promise<void> {
    try {
      await this.inputActions.uploadFile(this.optionPage.fileInput, 'missing-file-does-not-exist.txt');
    } catch {
      setScenarioValue(this.page, 'missingFileRejected', true);
    }
  }
}
function requirePreparedFile(page: Page): UploadFilePayload {
  return requireScenarioValue<UploadFilePayload>(page, 'uploadFile');
}
