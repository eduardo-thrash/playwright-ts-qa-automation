import { ClickActions } from '@actions/common/click-actions';
import { PointerActions } from '@actions/common/pointer-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { ModalActions } from '@actions/herokuapp/modal-actions';
import { ExitIntentPage } from '@pages/herokuapp/exit-intent-page';
import { ModalPage } from '@pages/herokuapp/modal-page';
import { type Page } from '@playwright/test';
export class ExitIntentActions {
  private readonly click = new ClickActions();
  private readonly pointer: PointerActions;
  private readonly home: HomeActions;
  private readonly modal: ModalActions;
  private readonly modalPage: ModalPage;
  private readonly optionPage: ExitIntentPage;
  constructor(private readonly page: Page) {
    this.pointer = new PointerActions(page);
    this.home = new HomeActions(page);
    this.modal = new ModalActions(page);
    this.modalPage = new ModalPage(page);
    this.optionPage = new ExitIntentPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Exit Intent');
  }

  async moveInside(): Promise<void> {
    await this.pointer.moveTo(200, 200);
  }

  async triggerExitIntent(): Promise<void> {
    await this.moveInside();
    await this.pointer.moveTo(200, -1);
    await this.modalPage.modal.waitFor({ state: 'visible' });
  }

  async closeTriggeredModal(): Promise<void> {
    await this.modal.closeModal();
  }

  async clickContent(): Promise<void> {
    await this.click.clickOn(this.optionPage.content);
  }

  async triggerRepeatedly(): Promise<void> {
    await this.triggerExitIntent();
    for (let count = 0; count < 2; count += 1) {
      await this.pointer.moveTo(200, 200);
      await this.pointer.moveTo(200, -1);
    }
  }
}
