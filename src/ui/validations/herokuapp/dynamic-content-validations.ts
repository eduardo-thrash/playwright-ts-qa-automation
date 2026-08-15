import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { DynamicContentPage } from '@pages/herokuapp/dynamic-content-page';
import { expect, type Page } from '@playwright/test';
export class DynamicContentValidations {
  private readonly optionPage: DynamicContentPage;
  constructor(private readonly page: Page) {
    this.optionPage = new DynamicContentPage(page);
  }

  async expectAtLeastOneBlockToChange(): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'dynamicTextsAfter')).not.toEqual(
      requireScenarioValue<string[]>(this.page, 'dynamicTextsBefore'),
    );
  }

  async expectThreeBlocks(): Promise<void> {
    await expect(this.optionPage.contentRows).toHaveCount(3);
  }

  async expectStaticQuery(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.searchParams.get('with_content') === 'static');
  }

  async expectStaticContentUnchanged(): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'dynamicTextsAfter')).toEqual(
      requireScenarioValue<string[]>(this.page, 'dynamicTextsBefore'),
    );
    expect(requireScenarioValue<string[]>(this.page, 'dynamicImagesAfter')).toEqual(
      requireScenarioValue<string[]>(this.page, 'dynamicImagesBefore'),
    );
  }

  async expectNoEmptyBlocks(): Promise<void> {
    for (const text of await this.optionPage.contentTexts.allTextContents())
      expect(text.trim().length).toBeGreaterThan(0);
    await expect(this.optionPage.avatarImages).toHaveCount(3);
  }

  async expectEveryRecordedResponseToHaveThreeBlocks(): Promise<void> {
    expect(requireScenarioValue<number[]>(this.page, 'dynamicRowCounts')).toEqual([3, 3, 3]);
  }
}
