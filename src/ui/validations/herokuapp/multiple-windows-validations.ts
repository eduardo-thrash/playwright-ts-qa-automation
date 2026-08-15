import { getScenarioValue } from '@helpers/herokuapp/scenario-state';
import { MultipleWindowsPage } from '@pages/herokuapp/multiple-windows-page';
import { expect, type Page } from '@playwright/test';
export class MultipleWindowsValidations {
  private readonly optionPage: MultipleWindowsPage;
  constructor(private readonly page: Page) {
    this.optionPage = new MultipleWindowsPage(page);
  }

  private children(): Page[] {
    return getScenarioValue<Page[]>(this.page, 'childWindows') ?? [];
  }

  async expectAdditionalWindowCount(count: number): Promise<void> {
    expect(this.children()).toHaveLength(count);
  }

  async expectChildHeadings(text: string): Promise<void> {
    for (const child of this.children()) await expect(child.getByRole('heading')).toHaveText(text);
  }

  async expectOriginalHeading(text: string): Promise<void> {
    await expect(this.optionPage.heading).toHaveText(text);
  }

  async expectLinkAvailable(): Promise<void> {
    await expect(this.optionPage.openWindowLink).toBeEnabled();
  }

  async expectOriginalOpen(): Promise<void> {
    expect(this.page.isClosed()).toBe(false);
    await expect(this.optionPage.heading).toBeVisible();
  }

  async expectNoAdditionalWindow(): Promise<void> {
    expect(this.children()).toHaveLength(0);
  }

  async expectOriginalUrl(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/windows');
  }

  async expectBothAccessible(): Promise<void> {
    await this.expectOriginalOpen();
    expect(this.children()[0]?.isClosed()).toBe(false);
  }
}
