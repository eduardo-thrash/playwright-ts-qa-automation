import { type Page, type Response } from '@playwright/test';

export class NavigationActions {
  constructor(private readonly page: Page) {}

  async navigateTo(path: string): Promise<void> {
    await this.page.goto(path);
  }

  async navigateToAndReturnResponse(path: string): Promise<Response | null> {
    return this.page.goto(path);
  }

  async reloadPage(): Promise<void> {
    await this.page.reload();
  }

  async navigateBack(): Promise<void> {
    await this.page.goBack();
  }
}
