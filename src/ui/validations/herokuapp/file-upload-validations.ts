import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { FileUploadPage } from '@pages/herokuapp/file-upload-page';
import { expect, type Page } from '@playwright/test';
export class FileUploadValidations {
  private readonly optionPage: FileUploadPage;
  constructor(private readonly page: Page) {
    this.optionPage = new FileUploadPage(page);
  }

  async expectUploadToSucceed(): Promise<void> {
    await expect(this.optionPage.uploadedHeading).toBeVisible();
  }

  async expectUploadedFilenameToBeDisplayed(): Promise<void> {
    await expect(this.optionPage.uploadedFilename).toHaveText(
      requireScenarioValue<string>(this.page, 'uploadedFilename'),
    );
  }

  async expectEmptyUploadToBeRejected(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'emptyUploadStatus')).toBeGreaterThanOrEqual(400);
  }

  async expectNoSuccessConfirmation(): Promise<void> {
    await expect(this.optionPage.uploadedHeading).toHaveCount(0);
  }

  async expectMissingFileToBeRejected(): Promise<void> {
    expect(requireScenarioValue<boolean>(this.page, 'missingFileRejected')).toBe(true);
    await expect(this.optionPage.fileInput).toHaveValue('');
  }

  async expectUploadFormToRemainAvailable(): Promise<void> {
    await expect(this.optionPage.uploadButton).toBeEnabled();
  }
}
