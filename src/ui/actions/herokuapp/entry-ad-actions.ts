import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { ModalActions } from '@actions/herokuapp/modal-actions';
import { EntryAdPage } from '@pages/herokuapp/entry-ad-page';
import { ModalPage } from '@pages/herokuapp/modal-page';
import { type Page } from '@playwright/test';
export class EntryAdActions {
  private readonly click = new ClickActions();
  private readonly navigation: NavigationActions;
  private readonly home: HomeActions;
  private readonly modal: ModalActions;
  private readonly modalPage: ModalPage;
  private readonly optionPage: EntryAdPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.home = new HomeActions(page);
    this.modal = new ModalActions(page);
    this.modalPage = new ModalPage(page);
    this.optionPage = new EntryAdPage(page);
  }

  async openCleanPage(): Promise<void> {
    await this.page.context().clearCookies();
    await this.home.openOptionPage('Entry Ad');
    await this.modalPage.modal.waitFor({ state: 'visible' });
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Entry Ad');
  }

  async closeModal(): Promise<void> {
    await this.modal.closeModal();
  }

  async reEnableModal(): Promise<void> {
    await this.click.clickOn(this.optionPage.reEnableLink);
    await this.modalPage.modal.waitFor({ state: 'visible' });
  }

  async reloadPage(): Promise<void> {
    await this.navigation.reloadPage();
  }

  async attemptCoveredInteraction(): Promise<void> {
    await this.optionPage.content.click({ position: { x: 5, y: 5 }, trial: true }).catch(() => undefined);
  }

  async requestActivationAgain(): Promise<void> {
    await this.page.evaluate(() => document.dispatchEvent(new Event('DOMContentLoaded')));
  }

  async reEnableAndCloseRepeatedly(): Promise<void> {
    if (await this.modalPage.modal.isVisible()) await this.closeModal();
    for (let count = 0; count < 2; count += 1) {
      await this.reEnableModal();
      await this.closeModal();
    }
  }
}
