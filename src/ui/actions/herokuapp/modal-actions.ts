import { ClickActions } from '@actions/common/click-actions';
import { ModalPage } from '@pages/herokuapp/modal-page';
import { type Page } from '@playwright/test';
export class ModalActions {
  private readonly click = new ClickActions();
  private readonly modalPage: ModalPage;
  constructor(page: Page) {
    this.modalPage = new ModalPage(page);
  }

  async closeModal(): Promise<void> {
    await this.click.clickOn(this.modalPage.closeButton);
  }
}
