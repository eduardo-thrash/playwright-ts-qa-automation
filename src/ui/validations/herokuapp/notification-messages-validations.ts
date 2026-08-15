import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { NotificationMessagesPage } from '@pages/herokuapp/notification-messages-page';
import { expect, type Page } from '@playwright/test';
const SUPPORTED_MESSAGES = ['Action successful', 'Action unsuccesful, please try again'];
export class NotificationMessagesValidations {
  private readonly optionPage: NotificationMessagesPage;
  constructor(private readonly page: Page) {
    this.optionPage = new NotificationMessagesPage(page);
  }

  private async messageText(): Promise<string> {
    return (await this.optionPage.notificationMessage.textContent())?.replace('×', '').trim() ?? '';
  }

  async expectSuccessfulMessage(): Promise<void> {
    await expect(this.optionPage.notificationMessage).toContainText('Action successful');
  }

  async expectSupportedMessage(): Promise<void> {
    expect(SUPPORTED_MESSAGES).toContain(await this.messageText());
  }

  async expectNotificationCountToBe(count: number): Promise<void> {
    await expect(this.optionPage.notificationMessage).toHaveCount(count);
  }

  async expectNotificationToBeHidden(): Promise<void> {
    await expect(this.optionPage.notificationMessage).toBeHidden();
  }

  async expectNotificationNotToBeEmpty(): Promise<void> {
    await expect(this.optionPage.notificationMessage).not.toBeEmpty();
  }

  async expectEveryRecordedMessageToBeSupported(): Promise<void> {
    for (const message of requireScenarioValue<string[]>(this.page, 'notificationMessages'))
      expect(SUPPORTED_MESSAGES).toContain(message);
  }
}
