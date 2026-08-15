import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { AbTestingPage } from '@pages/herokuapp/ab-testing-page';
import { expect, type Page } from '@playwright/test';
const SUPPORTED_HEADINGS = ['A/B Test Control', 'A/B Test Variation 1'];
export class AbTestingValidations {
  private readonly optionPage: AbTestingPage;
  constructor(private readonly page: Page) {
    this.optionPage = new AbTestingPage(page);
  }
  async expectSupportedHeading(): Promise<void> {
    await expect(this.optionPage.experimentHeading).toHaveText(new RegExp(`^(${SUPPORTED_HEADINGS.join('|')})$`));
  }
  async expectDescriptionToBeVisible(): Promise<void> {
    await expect(this.optionPage.experimentDescription).toBeVisible();
    await expect(this.optionPage.experimentDescription).not.toBeEmpty();
  }
  async expectContentNotToBeEmpty(): Promise<void> {
    await expect(this.optionPage.experimentHeading).not.toBeEmpty();
    await this.expectDescriptionToBeVisible();
  }
  async expectNoUnsupportedHeading(): Promise<void> {
    await this.expectSupportedHeading();
  }
  async expectPageToRemainOnExample(): Promise<void> {
    await expect(this.page).toHaveURL(url => url.pathname === '/abtest');
  }
  async expectEveryRecordedHeadingToBeSupported(): Promise<void> {
    for (const heading of requireScenarioValue<string[]>(this.page, 'abTestingHeadings'))
      expect(SUPPORTED_HEADINGS).toContain(heading);
  }
  async expectEveryResponseToContainDescription(): Promise<void> {
    await this.expectDescriptionToBeVisible();
  }
}
