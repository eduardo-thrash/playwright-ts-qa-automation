import { type Page } from '@playwright/test';
export class NotificationMessagesPage {
  constructor(readonly page: Page) {}

  get notificationMessage() {
    return this.page.locator('#flash');
  }

  get closeButton() {
    return this.notificationMessage.locator('.close');
  }

  get requestMessageLink() {
    return this.page.getByRole('link', { name: 'Click here' });
  }
}
