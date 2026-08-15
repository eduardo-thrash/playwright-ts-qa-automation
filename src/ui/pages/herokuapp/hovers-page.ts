import { type Page } from '@playwright/test';
export class HoversPage {
  constructor(readonly page: Page) {}

  get figures() {
    return this.page.locator('.figure');
  }

  figure(position: number) {
    return this.figures.nth(position - 1);
  }

  caption(position: number) {
    return this.figure(position).locator('.figcaption');
  }

  profileLink(position: number) {
    return this.caption(position).getByRole('link');
  }
}
