import { type Page } from '@playwright/test';
export class LargeDeepDomPage {
  constructor(readonly page: Page) {}
  get deepestElement() { return this.page.locator('#no-siblings'); }
  get dataTable() { return this.page.locator('#large-table'); }
  get tableRows() { return this.dataTable.locator('tbody tr'); }
  get tableColumns() { return this.tableRows.first().locator('td'); }
  tableCell(row: number, column: number) { return this.dataTable.locator(`.row-${row} .column-${column}`); }
}
