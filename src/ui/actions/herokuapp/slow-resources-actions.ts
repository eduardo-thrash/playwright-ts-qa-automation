import { NavigationActions } from '@actions/common/navigation-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { SlowResourcesPage } from '@pages/herokuapp/slow-resources-page';
import { type Page } from '@playwright/test';
export class SlowResourcesActions {
  private readonly navigation: NavigationActions;
  private readonly optionPage: SlowResourcesPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.optionPage = new SlowResourcesPage(page);
  }

  async openAndWaitForSlowResource(): Promise<void> {
    const responsePromise = this.page.waitForResponse(response => response.url().endsWith('/slow_external'), {
      timeout: 35_000,
    });
    await this.navigation.navigateTo('/slow');
    setScenarioValue(this.page, 'slowResourceStatus', (await responsePromise).status());
  }

  async openUntilDocumentCommits(): Promise<void> {
    const pending = this.page
      .waitForResponse(response => response.url().endsWith('/slow_external'), { timeout: 35_000 })
      .then(response => response.status());
    setScenarioValue(this.page, 'slowResourcePromise', pending);
    await this.page.goto('/slow', { waitUntil: 'commit' });
  }

  async waitForDocumentContent(): Promise<void> {
    await this.optionPage.heading.waitFor({ state: 'visible' });
  }

  async reloadAndWait(): Promise<void> {
    const responsePromise = this.page.waitForResponse(response => response.url().endsWith('/slow_external'), {
      timeout: 35_000,
    });
    await this.navigation.reloadPage();
    setScenarioValue(this.page, 'slowResourceStatus', (await responsePromise).status());
  }

  async waitWithShortTimeout(): Promise<void> {
    const completed = await this.page
      .waitForResponse(response => response.url().endsWith('/slow_external'), { timeout: 100 })
      .then(() => true)
      .catch(() => false);
    setScenarioValue(this.page, 'slowCompletedWithinShortTimeout', completed);
  }

  async abortSlowRequest(): Promise<void> {
    await this.page.route('**/slow_external', route => route.abort());
    await this.page.goto('/slow');
    await this.page.unroute('**/slow_external');
  }

  async openTwoPages(): Promise<void> {
    const secondPage = await this.page.context().newPage();
    await Promise.all([
      this.page.goto('/slow', { waitUntil: 'commit' }),
      secondPage.goto('/slow', { waitUntil: 'commit' }),
    ]);
    setScenarioValue(this.page, 'slowPages', [this.page, secondPage]);
  }
}
