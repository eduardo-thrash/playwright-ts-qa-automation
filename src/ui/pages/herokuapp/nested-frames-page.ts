import { type Page } from '@playwright/test';

export class NestedFramesPage {
  constructor(private readonly page: Page) {}

  get topFrame() {
    return this.page.locator('frame[name="frame-top"]');
  }

  get bottomFrame() {
    return this.page.locator('frame[name="frame-bottom"]');
  }

  get leftContent() {
    return this.page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-left"]').locator('body');
  }

  get middleContent() {
    return this.page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]').locator('body');
  }

  get rightContent() {
    return this.page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-right"]').locator('body');
  }

  get bottomContent() {
    return this.page.frameLocator('frame[name="frame-bottom"]').locator('body');
  }
}
