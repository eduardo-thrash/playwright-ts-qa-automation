import { ModalPage } from '@pages/herokuapp/modal-page';
import { expect, type Page } from '@playwright/test';
export class ModalValidations {
  private readonly modalPage: ModalPage;
  constructor(page: Page) {
    this.modalPage = new ModalPage(page);
  }

  async expectModalToBeVisible(): Promise<void> {
    await expect(this.modalPage.modal).toBeVisible();
  }

  async expectModalToBeHidden(): Promise<void> {
    await expect(this.modalPage.modal).toBeHidden();
  }

  async expectTitleToBe(text: string): Promise<void> {
    await expect(this.modalPage.title).toHaveText(text);
  }

  async expectOnlyOneModal(): Promise<void> {
    await expect(this.modalPage.modal).toHaveCount(1);
  }

  async expectCloseActionToBeAvailable(): Promise<void> {
    await expect(this.modalPage.closeButton).toBeVisible();
  }
}
