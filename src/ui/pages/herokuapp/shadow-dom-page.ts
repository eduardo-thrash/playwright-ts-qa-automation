import { type Page } from '@playwright/test';
export class ShadowDomPage {
  constructor(readonly page: Page) {}
  get shadowHosts() { return this.page.locator('my-paragraph'); }
  get shadowTextSlots() { return this.shadowHosts.locator('[slot="my-text"]'); }
  get shadowListItems() { return this.shadowHosts.locator('li'); }
}
