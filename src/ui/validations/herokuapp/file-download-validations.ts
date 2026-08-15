import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { expect, type Page } from '@playwright/test';
export class FileDownloadValidations {
  constructor(private readonly page: Page) {}

  async expectDownloadCountToBe(count: number): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'fileDownloads')).toHaveLength(count);
  }

  async expectNamesNotToBeEmpty(): Promise<void> {
    for (const name of requireScenarioValue<string[]>(this.page, 'fileDownloads'))
      expect(name.length).toBeGreaterThan(0);
  }

  async expectContentNotToBeEmpty(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'fileContentLength')).toBeGreaterThan(0);
  }

  async expectNamesToMatchSelection(): Promise<void> {
    const selected = requireScenarioValue<string>(this.page, 'fileSelectedName');
    for (const name of requireScenarioValue<string[]>(this.page, 'fileDownloads')) expect(name).toBe(selected);
  }

  async expectMissingStatusToBe404(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'missingDownloadStatus')).toBe(404);
  }
}
