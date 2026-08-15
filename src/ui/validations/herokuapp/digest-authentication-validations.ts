import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { HttpAuthenticationPage } from '@pages/herokuapp/http-authentication-page';
import { expect, type Page } from '@playwright/test';
export class DigestAuthenticationValidations {
  private readonly authPage: HttpAuthenticationPage;
  constructor(private readonly page: Page) {
    this.authPage = new HttpAuthenticationPage(page);
  }

  async expectSuccessMessage(): Promise<void> {
    await expect(this.authPage.successMessage).toContainText('Congratulations! You must have the proper credentials.');
  }

  async expectAccessToRemainAuthorized(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/digest_auth');
    await this.expectSuccessMessage();
  }

  async expectAccessToBeDenied(): Promise<void> {
    expect(requireScenarioValue<number>(this.page, 'digestAuthStatus')).toBe(401);
  }
}
