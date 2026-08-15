import { PointerActions } from '@actions/common/pointer-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { HoversPage } from '@pages/herokuapp/hovers-page';
import { type Page } from '@playwright/test';
export class HoversActions {
  private readonly pointer: PointerActions;
  private readonly home: HomeActions;
  private readonly optionPage: HoversPage;
  constructor(private readonly page: Page) {
    this.pointer = new PointerActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new HoversPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Hovers');
  }

  async hoverAvatar(position: number): Promise<void> {
    await this.pointer.hoverOver(this.optionPage.figure(position));
  }

  async moveOutsideAvatars(): Promise<void> {
    await this.pointer.hoverOver(this.page.getByRole('heading', { name: 'Hovers' }));
  }

  async hoverRepeatedly(position: number): Promise<void> {
    for (let count = 0; count < 3; count += 1) {
      await this.hoverAvatar(position);
      await this.moveOutsideAvatars();
    }
    await this.hoverAvatar(position);
  }
}
