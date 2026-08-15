import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { BrokenImagesPage } from '@pages/herokuapp/broken-images-page';
import { type Page } from '@playwright/test';
export class BrokenImagesActions {
  private readonly homeActions: HomeActions;
  private readonly navigationActions: NavigationActions;
  private readonly optionPage: BrokenImagesPage;
  constructor(private readonly page: Page) {
    this.homeActions = new HomeActions(page);
    this.navigationActions = new NavigationActions(page);
    this.optionPage = new BrokenImagesPage(page);
  }
  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Broken Images');
  }
  async waitForImages(): Promise<void> {
    await this.optionPage.exampleImages.last().waitFor({ state: 'attached' });
  }
  async requestMissingImage(): Promise<void> {
    const response = await this.page.request.get('/asdf.jpg');
    setScenarioValue(this.page, 'missingImageStatus', response.status());
  }
  async reloadPage(): Promise<void> {
    await this.navigationActions.reloadPage();
    await this.waitForImages();
  }
}
