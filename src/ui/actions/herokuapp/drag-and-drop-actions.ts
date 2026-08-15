import { PointerActions } from '@actions/common/pointer-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { DragAndDropPage } from '@pages/herokuapp/drag-and-drop-page';
import { type Page } from '@playwright/test';
export class DragAndDropActions {
  private readonly pointerActions: PointerActions;
  private readonly homeActions: HomeActions;
  private readonly optionPage: DragAndDropPage;
  constructor(page: Page) {
    this.pointerActions = new PointerActions(page);
    this.homeActions = new HomeActions(page);
    this.optionPage = new DragAndDropPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Drag and Drop');
  }

  async dragColumn(source: 'A' | 'B', target: 'A' | 'B'): Promise<void> {
    await this.pointerActions.dragTo(this.optionPage.column(source), this.optionPage.column(target));
  }

  async dragOutside(source: 'A' | 'B'): Promise<void> {
    await this.pointerActions.dragTo(this.optionPage.column(source), this.optionPage.heading);
  }

  async swapTwice(): Promise<void> {
    await this.dragColumn('A', 'B');
    await this.dragColumn('B', 'A');
  }
}
