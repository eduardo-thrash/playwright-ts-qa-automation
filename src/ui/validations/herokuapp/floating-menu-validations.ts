import { FloatingMenuPage } from '@pages/herokuapp/floating-menu-page';
import { expect, type Page } from '@playwright/test';
export class FloatingMenuValidations {
  private readonly optionPage: FloatingMenuPage;
  constructor(private readonly page: Page) {
    this.optionPage = new FloatingMenuPage(page);
  }

  async expectMenuVisible(): Promise<void> {
    await expect(this.optionPage.menu).toBeInViewport();
  }

  async expectOptionsActionable(): Promise<void> {
    await expect(this.optionPage.menuLinks).toHaveCount(4);
    for (const link of await this.optionPage.menuLinks.all()) await expect(link).toBeEnabled();
  }

  async expectHash(hash: string): Promise<void> {
    await expect(this.page).toHaveURL(url => url.hash === hash);
  }

  async expectUnsupportedOptionAbsent(): Promise<void> {
    await expect(this.optionPage.menuLink('Unsupported')).toHaveCount(0);
  }

  async expectOneMenu(): Promise<void> {
    await expect(this.optionPage.menu).toHaveCount(1);
  }
}
