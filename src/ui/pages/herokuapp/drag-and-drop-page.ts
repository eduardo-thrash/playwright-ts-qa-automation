import { type Page } from '@playwright/test';
export class DragAndDropPage {
  constructor(readonly page: Page) {}

  column(label: 'A' | 'B') {
    return this.page.locator(`#column-${label.toLowerCase()}`);
  }

  get columns() {
    return this.page.locator('#columns > div');
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'Drag and Drop' });
  }
}
