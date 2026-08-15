import { InputActions } from '@actions/common/input-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { DropdownPage } from '@pages/herokuapp/dropdown-page';
import { type Page } from '@playwright/test';

export class DropdownActions {
  private readonly inputActions: InputActions;
  private readonly optionPage: DropdownPage;
  private readonly homeActions: HomeActions;
  constructor(page: Page) {
    this.inputActions = new InputActions(page);
    this.optionPage = new DropdownPage(page);
    this.homeActions = new HomeActions(page);
  }
  async openPage(): Promise<void> { await this.homeActions.openOptionPage('Dropdown'); }
  async selectOption(label: string): Promise<void> { await this.inputActions.selectOption(this.optionPage.optionsSelect, { 'Option 1': '1', 'Option 2': '2' }[label] ?? label); }
  async focusDropdown(): Promise<void> { await this.inputActions.focusOn(this.optionPage.optionsSelect); }
  async selectNextOptionWithKeyboard(): Promise<void> { await this.inputActions.pressKey('ArrowDown'); }
  async requestUnsupportedOption(): Promise<void> {
    await this.optionPage.optionsSelect.evaluate(select => {
      const element = select as HTMLSelectElement;
      element.value = 'unsupported';
      element.dispatchEvent(new Event('change', { bubbles: true }));
    });
  }
}
