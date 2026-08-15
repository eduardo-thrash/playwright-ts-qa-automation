import { type Page } from '@playwright/test';
export class ModalPage {
  constructor(readonly page: Page) {}

  get modal() {
    return this.page.locator('.modal');
  }

  get title() {
    return this.modal.locator('.modal-title h3');
  }

  get closeButton() {
    return this.modal.locator('.modal-footer p');
  }
}
