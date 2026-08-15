import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { SecureFileDownloadPage } from '@pages/herokuapp/secure-file-download-page';
import { expect, type Page } from '@playwright/test';
export class SecureFileDownloadValidations {
  private readonly optionPage: SecureFileDownloadPage;
  constructor(private readonly page: Page) {
    this.optionPage = new SecureFileDownloadPage(page);
  }

  async expectDownloadCountToBe(count: number): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'secureDownloads')).toHaveLength(count);
  }

  async expectDownloadedNamesNotToBeEmpty(): Promise<void> {
    for (const name of requireScenarioValue<string[]>(this.page, 'secureDownloads'))
      expect(name.length).toBeGreaterThan(0);
  }

  async expectSuggestedNamesToMatchSelection(): Promise<void> {
    const selected = requireScenarioValue<string>(this.page, 'secureSelectedName');
    for (const name of requireScenarioValue<string[]>(this.page, 'secureDownloads')) expect(name).toBe(selected);
  }

  async expectFileListToBeVisible(): Promise<void> {
    await expect(this.optionPage.heading).toBeVisible();
    await expect(this.optionPage.fileLinks.first()).toBeVisible();
  }

  async expectFilesToBeActionable(): Promise<void> {
    await expect(this.optionPage.fileLinks.first()).toBeEnabled();
  }

  async expectAccessToBeDenied(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'secureAuthStatus')).toBe(401);
  }
}
