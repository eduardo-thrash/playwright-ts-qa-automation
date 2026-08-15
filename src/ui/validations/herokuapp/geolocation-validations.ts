import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { GeolocationPage } from '@pages/herokuapp/geolocation-page';
import { expect, type Page } from '@playwright/test';
export class GeolocationValidations {
  private readonly optionPage: GeolocationPage;
  constructor(private readonly page: Page) {
    this.optionPage = new GeolocationPage(page);
  }

  async expectLatitude(): Promise<void> {
    const value = requireScenarioValue<{ latitude: number; longitude: number }>(this.page, 'expectedCoordinates');
    await expect(this.optionPage.latitudeLabel).toHaveText(String(value.latitude));
  }

  async expectLongitude(): Promise<void> {
    const value = requireScenarioValue<{ latitude: number; longitude: number }>(this.page, 'expectedCoordinates');
    await expect(this.optionPage.longitudeLabel).toHaveText(String(value.longitude));
  }

  async expectMapHrefCoordinates(): Promise<void> {
    const coordinates = requireScenarioValue<{ latitude: number; longitude: number }>(this.page, 'expectedCoordinates');
    expect(requireScenarioValue<string>(this.page, 'mapHref')).toContain(
      `${coordinates.latitude},${coordinates.longitude}`,
    );
  }

  async expectNoCoordinates(): Promise<void> {
    await expect(this.optionPage.latitudeLabel).toHaveCount(0);
    await expect(this.optionPage.longitudeLabel).toHaveCount(0);
  }

  async expectUnavailableMessage(): Promise<void> {
    await expect(this.optionPage.result).toContainText(/denied|unavailable|error/i);
  }

  async expectPageUsable(): Promise<void> {
    await expect(this.optionPage.locateButton).toBeEnabled();
  }
}
