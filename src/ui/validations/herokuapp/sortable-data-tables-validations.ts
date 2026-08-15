import { SortableDataTablesPage } from '@pages/herokuapp/sortable-data-tables-page';
import { expect, type Page } from '@playwright/test';
export class SortableDataTablesValidations {
  private readonly optionPage: SortableDataTablesPage;
  constructor(page: Page) {
    this.optionPage = new SortableDataTablesPage(page);
  }

  async expectColumnOrder(className: string, expected: string[]): Promise<void> {
    await expect(this.optionPage.cells(className)).toHaveText(expected);
  }

  async expectFourRows(): Promise<void> {
    await expect(this.optionPage.rows).toHaveCount(4);
  }

  async expectDueAmountsSorted(): Promise<void> {
    const values = (await this.optionPage.cells('dues').allTextContents()).map(value => Number(value.replace('$', '')));
    expect(values).toEqual([...values].sort((a, b) => a - b));
  }

  async expectUnknownHeaderAbsent(): Promise<void> {
    await expect(this.optionPage.header('unknown')).toHaveCount(0);
  }

  async expectDuplicateFiftyAmounts(): Promise<void> {
    await expect(this.optionPage.cells('dues').filter({ hasText: '$50.00' })).toHaveCount(2);
  }
}
