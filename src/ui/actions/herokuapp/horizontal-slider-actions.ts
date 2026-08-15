import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { HorizontalSliderPage } from '@pages/herokuapp/horizontal-slider-page';
import { type Page } from '@playwright/test';
export class HorizontalSliderActions {
  private readonly inputActions: InputActions;
  private readonly optionPage: HorizontalSliderPage;
  private readonly homeActions: HomeActions;
  constructor(page: Page) {
    this.inputActions = new InputActions(page);
    this.optionPage = new HorizontalSliderPage(page);
    this.homeActions = new HomeActions(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Horizontal Slider');
  }

  async setValue(value: number): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.sliderInput);
    await this.inputActions.pressKey('Home');
    for (let step = 0; step < value * 2; step += 1) await this.inputActions.pressKey('ArrowRight');
  }

  async moveToMinimum(): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.sliderInput);
    await this.inputActions.pressKey('Home');
  }

  async moveToMaximum(): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.sliderInput);
    await this.inputActions.pressKey('End');
  }

  async increaseOnce(): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.sliderInput);
    await this.inputActions.pressKey('ArrowRight');
  }

  async decreaseOnce(): Promise<void> {
    await this.inputActions.focusOn(this.optionPage.sliderInput);
    await this.inputActions.pressKey('ArrowLeft');
  }

  async increaseAndDecreaseOnce(): Promise<void> {
    await this.increaseOnce();
    await this.decreaseOnce();
  }
}
