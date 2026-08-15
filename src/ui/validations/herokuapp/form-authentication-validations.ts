import { FormAuthenticationPage } from '@pages/herokuapp/form-authentication-page';
import { expect, type Page } from '@playwright/test';
export class FormAuthenticationValidations {
  private readonly optionPage: FormAuthenticationPage;
  constructor(private readonly page: Page) {
    this.optionPage = new FormAuthenticationPage(page);
  }

  async expectSecureAreaToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/secure');
    await expect(this.optionPage.secureHeading).toBeVisible();
  }

  async expectLoginPageToBeDisplayed(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/login');
    await expect(this.optionPage.loginHeading).toBeVisible();
  }

  async expectFlashMessageToContain(text: string): Promise<void> {
    await expect(this.optionPage.flashMessage).toContainText(text);
  }

  async expectLogoutActionToBeVisible(): Promise<void> {
    await expect(this.optionPage.logoutButton).toBeVisible();
  }
}
