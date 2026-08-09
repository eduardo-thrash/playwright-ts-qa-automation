import { type Page } from '@playwright/test';

export class NavigationActions {
  constructor(private readonly page: Page) {}

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }
}
