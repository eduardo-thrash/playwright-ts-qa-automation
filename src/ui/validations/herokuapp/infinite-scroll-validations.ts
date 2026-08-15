import { getScenarioValue } from '@helpers/herokuapp/scenario-state';
import { InfiniteScrollPage } from '@pages/herokuapp/infinite-scroll-page';
import { expect, type Page } from '@playwright/test';
export class InfiniteScrollValidations {
  private readonly optionPage: InfiniteScrollPage;
  constructor(private readonly page: Page) {
    this.optionPage = new InfiniteScrollPage(page);
  }

  async expectAdditionalContent(): Promise<void> {
    const initial = getScenarioValue<number>(this.page, 'initialInfiniteCount') ?? 0;
    await expect.poll(() => this.optionPage.contentBlocks.count()).toBeGreaterThan(initial);
  }

  async expectMultipleAdditionalBlocks(): Promise<void> {
    const initial = getScenarioValue<number>(this.page, 'initialInfiniteCount') ?? 0;
    await expect.poll(() => this.optionPage.contentBlocks.count()).toBeGreaterThan(initial + 1);
  }

  async expectNoAdditionalContent(): Promise<void> {
    expect(await this.optionPage.contentBlocks.count()).toBe(
      getScenarioValue<number>(this.page, 'initialInfiniteCount') ?? 0,
    );
  }

  async expectContentToRemainVisible(): Promise<void> {
    await expect(this.optionPage.scrollContainer).toBeVisible();
  }
}
