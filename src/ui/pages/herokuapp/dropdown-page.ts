import { type Page } from '@playwright/test';

export class DropdownPage {
  constructor(readonly page: Page) {}
  get optionsSelect() {
    return this.page.locator('#dropdown');
  }
  get options() {
    return this.optionsSelect.locator('option');
  }
  option(label: string) {
    return this.options.getByText(label, { exact: true });
  }
}
