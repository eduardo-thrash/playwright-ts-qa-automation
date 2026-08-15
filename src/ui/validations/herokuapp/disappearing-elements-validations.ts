import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { DisappearingElementsPage } from '@pages/herokuapp/disappearing-elements-page';
import { expect, type Page } from '@playwright/test';
const REQUIRED = ['Home', 'About', 'Contact Us', 'Portfolio'];
export class DisappearingElementsValidations {
  private readonly optionPage: DisappearingElementsPage;
  constructor(private readonly page: Page) {
    this.optionPage = new DisappearingElementsPage(page);
  }

  async expectRequiredLinks(): Promise<void> {
    for (const name of REQUIRED) await expect(this.optionPage.menuLink(name)).toBeVisible();
  }

  async expectHomePage(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/');
  }

  async expectGalleryOptional(): Promise<void> {
    expect([0, 1]).toContain(await this.optionPage.menuLink('Gallery').count());
  }

  async expectGalleryAbsent(): Promise<void> {
    await expect(this.optionPage.menuLink('Gallery')).toHaveCount(0);
  }

  async expectGalleryPresent(): Promise<void> {
    await expect(this.optionPage.menuLink('Gallery')).toBeEnabled();
    await expect(this.optionPage.menuLinks).toHaveCount(5);
  }

  async expectRecordedMenuSizes(): Promise<void> {
    for (const count of requireScenarioValue<number[]>(this.page, 'disappearingMenuCounts'))
      expect([4, 5]).toContain(count);
  }
}
