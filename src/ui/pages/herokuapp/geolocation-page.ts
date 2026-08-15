import { type Page } from '@playwright/test';
export class GeolocationPage {
  constructor(readonly page: Page) {}

  get locateButton() {
    return this.page.getByRole('button', { name: 'Where am I?' });
  }

  get latitudeLabel() {
    return this.page.locator('#lat-value');
  }

  get longitudeLabel() {
    return this.page.locator('#long-value');
  }

  get mapLink() {
    return this.page.locator('#map-link');
  }

  get result() {
    return this.page.locator('#demo');
  }
}
