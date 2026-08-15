import { ExitIntentPage } from '@pages/herokuapp/exit-intent-page';
import { ModalPage } from '@pages/herokuapp/modal-page';
import { expect, type Page } from '@playwright/test';
export class ExitIntentValidations {
  private readonly optionPage: ExitIntentPage;
  private readonly modalPage: ModalPage;
  constructor(page: Page) {
    this.optionPage = new ExitIntentPage(page);
    this.modalPage = new ModalPage(page);
  }

  async expectContentAccessible(): Promise<void> {
    await expect(this.optionPage.content).toBeVisible();
  }

  async expectNoOverlay(): Promise<void> {
    await expect(this.modalPage.modal).toBeHidden();
  }

  async expectOneModal(): Promise<void> {
    await expect(this.modalPage.modal).toHaveCount(1);
  }

  async expectOneCloseAction(): Promise<void> {
    await expect(this.modalPage.closeButton).toHaveCount(1);
  }
}
