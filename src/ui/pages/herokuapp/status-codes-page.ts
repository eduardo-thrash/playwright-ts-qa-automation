import { type Page } from '@playwright/test';
export class StatusCodesPage {
  constructor(readonly page: Page) {}
  get statusLinks() {
    return this.page.locator('.example a').filter({ hasText: /^(200|301|404|500)$/ });
  }
  statusLink(status: number) {
    return this.page.getByRole('link', { name: String(status), exact: true });
  }
  get detailText() {
    return this.page.locator('.example p');
  }
  get returnLink() {
    return this.page.getByRole('link', { name: 'here' });
  }
}
