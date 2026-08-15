import { type Page } from '@playwright/test';
export class JqueryUiMenusPage {
  constructor(readonly page: Page) {}

  menuItem(name: string) {
    return this.page.getByRole('menuitem', { name, exact: true });
  }

  get heading() {
    return this.page.getByRole('heading', { name: 'JQueryUI - Menu' });
  }

  get downloadOptions() {
    return this.page.getByRole('menuitem').filter({ hasText: /^(PDF|CSV|Excel)$/ });
  }
}
