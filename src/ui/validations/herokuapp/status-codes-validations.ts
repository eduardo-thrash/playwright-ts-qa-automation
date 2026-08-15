import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { StatusCodesPage } from '@pages/herokuapp/status-codes-page';
import { expect, type Page } from '@playwright/test';
export class StatusCodesValidations {
  private readonly optionPage: StatusCodesPage;
  constructor(private readonly page: Page) { this.optionPage = new StatusCodesPage(page); }
  async expectResponseStatusToBe(status: number): Promise<void> { expect(requireScenarioValue<number>(this.page, 'statusCodeResponse')).toBe(status); }
  async expectPageToReportStatus(status: number): Promise<void> { await expect(this.optionPage.detailText).toContainText(`This page returned a ${status} status code.`); }
  async expectListPageToBeDisplayed(): Promise<void> { await expect(this.page).toHaveURL(url => url.pathname === '/status_codes'); await expect(this.optionPage.statusLinks).toHaveCount(4); }
  async expectAllStatusLinksToBeVisible(): Promise<void> { await expect(this.optionPage.statusLinks).toHaveCount(4); }
  async expectEveryRecordedResponseToMatchSelection(): Promise<void> { for (const result of requireScenarioValue<Array<{ selected: number; response: number; text: string }>>(this.page, 'documentedStatusResults')) { expect(result.response).toBe(result.selected); expect(result.text).toContain(`This page returned a ${result.selected} status code.`); } }
}
