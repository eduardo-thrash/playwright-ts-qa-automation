import { DragAndDropPage } from '@pages/herokuapp/drag-and-drop-page';
import { expect, type Page } from '@playwright/test';
export class DragAndDropValidations {
  private readonly optionPage: DragAndDropPage;
  constructor(page: Page) {
    this.optionPage = new DragAndDropPage(page);
  }

  async expectOrder(first: 'A' | 'B', second: 'A' | 'B'): Promise<void> {
    await expect(this.optionPage.columns.locator('header')).toHaveText([first, second]);
  }
}
