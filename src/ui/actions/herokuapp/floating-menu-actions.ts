import { ClickActions } from '@actions/common/click-actions';
import { ScrollActions } from '@actions/common/scroll-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { FloatingMenuPage } from '@pages/herokuapp/floating-menu-page';
import { type Page } from '@playwright/test';
export class FloatingMenuActions {
  private readonly click = new ClickActions();
  private readonly scroll: ScrollActions;
  private readonly home: HomeActions;
  private readonly optionPage: FloatingMenuPage;
  constructor(private readonly page: Page) {
    this.scroll = new ScrollActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new FloatingMenuPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Floating Menu');
  }

  async selectMenu(name: string): Promise<void> {
    await this.click.clickOn(this.optionPage.menuLink(name));
  }

  async scrollThroughContent(): Promise<void> {
    await this.scroll.scrollToBottom();
  }

  async scrollToMiddle(): Promise<void> {
    await this.scroll.scrollBy(0, 1500);
  }

  async scrollRapidly(): Promise<void> {
    for (let count = 0; count < 3; count += 1) {
      await this.scroll.scrollToBottom();
      await this.scroll.scrollToTop();
    }
  }

  async viewMenu(): Promise<void> {
    await this.optionPage.menu.waitFor({ state: 'visible' });
  }
}
