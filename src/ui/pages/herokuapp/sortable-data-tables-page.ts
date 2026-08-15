import { type Page } from '@playwright/test';
export class SortableDataTablesPage {
  constructor(readonly page: Page) {}

  get secondTable() {
    return this.page.locator('#table2');
  }

  get rows() {
    return this.secondTable.locator('tbody tr');
  }

  header(className: string) {
    return this.secondTable.locator(`th.${className}`);
  }

  cells(className: string) {
    return this.rows.locator(`td.${className}`);
  }

  get firstEditLink() {
    return this.rows.first().getByRole('link', { name: 'edit' });
  }
}
