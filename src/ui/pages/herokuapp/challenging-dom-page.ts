import { type Page } from '@playwright/test';
export class ChallengingDomPage {
  constructor(readonly page: Page) {}

  get dynamicButtons() {
    return this.page.locator('.large-2 a.button');
  }

  get dataTable() {
    return this.page.locator('table');
  }

  get rows() {
    return this.dataTable.locator('tbody tr');
  }

  row(position: number) {
    return this.rows.nth(position);
  }

  get canvas() {
    return this.page.locator('#canvas');
  }
}
