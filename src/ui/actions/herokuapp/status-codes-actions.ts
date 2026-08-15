import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { StatusCodesPage } from '@pages/herokuapp/status-codes-page';
import { type Page } from '@playwright/test';
export class StatusCodesActions {
  private readonly clickActions = new ClickActions();
  private readonly navigationActions: NavigationActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: StatusCodesPage;
  constructor(private readonly page: Page) { this.navigationActions = new NavigationActions(page); this.homeActions = new HomeActions(page); this.optionPage = new StatusCodesPage(page); }
  async openPage(): Promise<void> { await this.homeActions.openOptionPage('Status Codes'); }
  async openStatus(status: number): Promise<number> { const response = await this.navigationActions.navigateToAndReturnResponse(`/status_codes/${status}`); const responseStatus = response?.status() ?? 0; setScenarioValue(this.page, 'statusCodeResponse', responseStatus); return responseStatus; }
  async openListedStatus(status: number): Promise<number> { const responsePromise = this.page.waitForResponse(response => response.url().endsWith(`/status_codes/${status}`)); await this.clickActions.clickOn(this.optionPage.statusLink(status)); const responseStatus = (await responsePromise).status(); setScenarioValue(this.page, 'statusCodeResponse', responseStatus); return responseStatus; }
  async followReturnLink(): Promise<void> { await this.clickActions.clickOn(this.optionPage.returnLink); }
  async openEveryDocumentedStatus(): Promise<void> { const results: Array<{ selected: number; response: number; text: string }> = []; for (const status of [200, 301, 404, 500]) { await this.openPage(); const response = await this.openListedStatus(status); results.push({ selected: status, response, text: (await this.optionPage.detailText.textContent()) ?? '' }); } setScenarioValue(this.page, 'documentedStatusResults', results); }
}
