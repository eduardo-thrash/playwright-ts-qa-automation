import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { ContextMenuPage } from '@pages/herokuapp/context-menu-page';
import { expect, type Page } from '@playwright/test';
export class ContextMenuValidations {
  private readonly optionPage: ContextMenuPage;
  constructor(private readonly page: Page) {
    this.optionPage = new ContextMenuPage(page);
  }

  async expectDialogCountToBe(count: number): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'contextDialogMessages')).toHaveLength(count);
  }

  async expectDialogTextToBe(text: string): Promise<void> {
    expect(requireScenarioValue<string[]>(this.page, 'contextDialogMessages')[0]).toBe(text);
  }

  async expectPageToRemainVisible(): Promise<void> {
    await expect(this.optionPage.targetArea).toBeVisible();
  }
}
