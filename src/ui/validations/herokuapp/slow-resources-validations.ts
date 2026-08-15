import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { SlowResourcesPage } from '@pages/herokuapp/slow-resources-page';
import { expect, type Page } from '@playwright/test';
export class SlowResourcesValidations {
  private readonly optionPage: SlowResourcesPage;
  constructor(private readonly page: Page) {
    this.optionPage = new SlowResourcesPage(page);
  }

  async expectSlowResourceStatusToBe200(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'slowResourceStatus')).toBe(200);
  }

  async expectContentVisible(): Promise<void> {
    await expect(this.optionPage.heading).toBeVisible();
    await expect(this.optionPage.content).toContainText('This page has a slow loading resource');
  }

  async expectNotCompletedWithinShortTimeout(): Promise<void> {
    expect(requireScenarioValue<boolean>(this.page, 'slowCompletedWithinShortTimeout')).toBe(false);
  }

  async expectRequestPending(): Promise<void> {
    expect(requireScenarioValue<Promise<number>>(this.page, 'slowResourcePromise')).toBeInstanceOf(Promise);
  }

  async expectEveryPageContent(): Promise<void> {
    for (const page of requireScenarioValue<Page[]>(this.page, 'slowPages'))
      await expect(page.getByRole('heading', { name: 'Slow Resources' })).toBeVisible();
  }
}
