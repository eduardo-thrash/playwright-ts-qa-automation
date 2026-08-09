import { HomePage } from "@pages/herokuapp/HomePage";
import { expect, type Page } from "@playwright/test";

export class HomeValidations {
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.homePage = new HomePage(page);
  }

  async pageIsDisplayed(): Promise<void> {
    await expect(this.homePage.heading).toBeVisible();
    await expect(this.homePage.heading).toHaveText("Welcome to the-internet");
  }
}
