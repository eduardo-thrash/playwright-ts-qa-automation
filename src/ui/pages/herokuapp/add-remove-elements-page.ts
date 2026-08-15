import { type Page } from '@playwright/test';

export class AddRemoveElementsPage {
  constructor(readonly page: Page) {}

  get addElementButton() {
    return this.page.getByRole('button', { name: 'Add Element' });
  }

  get deleteButtons() {
    return this.page.getByRole('button', { name: 'Delete' });
  }
}
