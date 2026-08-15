import { LargeDeepDomPage } from '@pages/herokuapp/large-deep-dom-page';
import { expect, type Page } from '@playwright/test';
export class LargeDeepDomValidations {
  private readonly optionPage: LargeDeepDomPage;
  constructor(page: Page) {
    this.optionPage = new LargeDeepDomPage(page);
  }

  async expectDeepestTextToBe(text: string): Promise<void> {
    await expect(this.optionPage.deepestElement).toHaveText(text);
  }

  async expectCellTextToBe(row: number, column: number, text: string): Promise<void> {
    await expect(this.optionPage.tableCell(row, column)).toHaveText(text);
  }

  async expectTableDimensionsToBe(rows: number, columns: number): Promise<void> {
    await expect(this.optionPage.tableRows).toHaveCount(rows);
    await expect(this.optionPage.tableColumns).toHaveCount(columns);
  }

  async expectRowNotToExist(row: number): Promise<void> {
    await expect(this.optionPage.dataTable.locator(`.row-${row}`)).toHaveCount(0);
  }

  async expectColumnNotToExist(column: number): Promise<void> {
    await expect(this.optionPage.dataTable.locator(`.column-${column}`)).toHaveCount(0);
  }

  async expectTableToRemainAttached(): Promise<void> {
    await expect(this.optionPage.dataTable).toBeAttached();
  }
}
