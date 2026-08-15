import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { JqueryUiMenusPage } from '@pages/herokuapp/jquery-ui-menus-page';
import { expect, type Page } from '@playwright/test';
export class JqueryUiMenusValidations {
  private readonly optionPage: JqueryUiMenusPage;
  constructor(private readonly page: Page) {
    this.optionPage = new JqueryUiMenusPage(page);
  }

  async expectDownloadExtension(extension: RegExp): Promise<void> {
    const names = requireScenarioValue<string[]>(this.page, 'jqueryDownloads');
    expect(names).toHaveLength(1);
    expect(names[0]).toMatch(extension);
  }

  async expectNoDownload(): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'jqueryDownloads')).toHaveLength(0);
  }

  async expectDownloadsHidden(): Promise<void> {
    await expect(this.optionPage.menuItem('Downloads')).toBeHidden();
  }

  async expectOptionsHidden(): Promise<void> {
    await expect(this.optionPage.downloadOptions).toBeHidden();
  }

  async expectOptionsVisible(): Promise<void> {
    await expect(this.optionPage.downloadOptions).toHaveCount(3);
    for (const item of await this.optionPage.downloadOptions.all()) await expect(item).toBeVisible();
  }

  async expectDisabledSubmenuAbsent(): Promise<void> {
    await expect(this.optionPage.menuItem('Disabled')).toHaveAttribute('aria-disabled', 'true');
  }
}
