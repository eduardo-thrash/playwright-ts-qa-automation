import { ScrollActions } from '@actions/common/scroll-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { InfiniteScrollPage } from '@pages/herokuapp/infinite-scroll-page';
import { type Page } from '@playwright/test';
export class InfiniteScrollActions {
  private readonly scroll: ScrollActions;
  private readonly home: HomeActions;
  private readonly optionPage: InfiniteScrollPage;
  constructor(private readonly page: Page) {
    this.scroll = new ScrollActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new InfiniteScrollPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Infinite Scroll');
    await this.optionPage.scrollContainer.waitFor({ state: 'visible' });
    setScenarioValue(this.page, 'initialInfiniteCount', await this.optionPage.contentBlocks.count());
  }

  async scrollToBottom(times = 1): Promise<void> {
    for (let count = 0; count < times; count += 1) {
      await this.scroll.scrollToBottom();
      await this.page.waitForFunction(() => document.querySelectorAll('.jscroll-added').length >= 1);
    }
  }

  async remainAtTop(): Promise<void> {
    await this.scroll.scrollToTop();
  }

  async scrollSmallDistance(): Promise<void> {
    await this.scroll.scrollBy(0, 50);
  }

  async resizeViewport(): Promise<void> {
    await this.page.setViewportSize({ width: 1280, height: 400 });
    await this.openPage();
  }
}
