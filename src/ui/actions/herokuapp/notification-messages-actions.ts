import { ClickActions } from '@actions/common/click-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { NotificationMessagesPage } from '@pages/herokuapp/notification-messages-page';
import { type Page } from '@playwright/test';
export class NotificationMessagesActions {
  private readonly clickActions = new ClickActions();
  private readonly homeActions: HomeActions;
  private readonly optionPage: NotificationMessagesPage;
  constructor(private readonly page: Page) { this.homeActions = new HomeActions(page); this.optionPage = new NotificationMessagesPage(page); }
  async openPage(): Promise<void> { await this.homeActions.openOptionPage('Notification Messages'); }
  async requestNotification(): Promise<string> { await this.clickActions.clickOn(this.optionPage.requestMessageLink); return (await this.optionPage.notificationMessage.textContent())?.replace('×', '').trim() ?? ''; }
  async requestUntilSuccessful(): Promise<void> { for (let attempt = 0; attempt < 20; attempt += 1) if ((await this.requestNotification()).startsWith('Action successful')) return; throw new Error('A successful notification was not returned'); }
  async closeNotification(): Promise<void> { await this.clickActions.clickOn(this.optionPage.closeButton); }
  async requestRepeatedly(): Promise<void> { const messages: string[] = []; for (let attempt = 0; attempt < 5; attempt += 1) messages.push(await this.requestNotification()); setScenarioValue(this.page, 'notificationMessages', messages); }
  async viewMessage(): Promise<void> { await this.optionPage.notificationMessage.waitFor({ state: 'visible' }); }
}
