import { RedirectLinkPage } from '@pages/herokuapp/redirect-link-page';
import { expect, type Page } from '@playwright/test';
export class RedirectLinkValidations {
  private readonly optionPage: RedirectLinkPage;
  constructor(private readonly page: Page) {
    this.optionPage = new RedirectLinkPage(page);
  }
  async expectFinalPathToBe(path: string): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === path);
  }
  async expectSourcePageToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/redirector');
    await expect(this.optionPage.redirectLink).toBeVisible();
  }
  async expectFinalPageNotToBeIntermediateEndpoint(): Promise<void> {
    await expect(this.page).not.toHaveURL(url => url.pathname === '/redirect');
  }
  async expectOnlyDocumentedDestinationToBeActionable(): Promise<void> {
    await expect(this.optionPage.sourceContent.getByRole('link')).toHaveCount(1);
    await expect(this.optionPage.redirectLink).toBeEnabled();
  }
  async expectRedirectLinkToBeActionable(): Promise<void> {
    await expect(this.optionPage.redirectLink).toBeEnabled();
  }
}
