import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { GeolocationPage } from '@pages/herokuapp/geolocation-page';
import { type Page } from '@playwright/test';
export class GeolocationActions {
  private readonly click = new ClickActions();
  private readonly home: HomeActions;
  private readonly optionPage: GeolocationPage;
  constructor(private readonly page: Page) {
    this.home = new HomeActions(page);
    this.optionPage = new GeolocationPage(page);
  }

  async configure(latitude: number, longitude: number): Promise<void> {
    await this.page.context().grantPermissions(['geolocation']);
    await this.page.context().setGeolocation({ latitude, longitude });
    setScenarioValue(this.page, 'expectedCoordinates', { latitude, longitude });
    await this.home.openOptionPage('Geolocation');
  }

  async denyPermission(): Promise<void> {
    await this.page.context().clearPermissions();
    await this.home.openOptionPage('Geolocation');
  }

  async requestLocation(): Promise<void> {
    await this.click.clickOn(this.optionPage.locateButton);
  }

  async inspectMapLink(): Promise<void> {
    setScenarioValue(this.page, 'mapHref', await this.optionPage.mapLink.getAttribute('href'));
  }
}
