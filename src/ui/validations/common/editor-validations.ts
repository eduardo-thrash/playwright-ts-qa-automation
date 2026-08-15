import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { EditorPage } from '@pages/herokuapp/editor-page';
import { expect, type Page } from '@playwright/test';
export class EditorValidations {
  private readonly editorPage: EditorPage;
  constructor(private readonly page: Page) {
    this.editorPage = new EditorPage(page);
  }

  async expectContentToBe(text: string): Promise<void> {
    await expect(this.editorPage.editorBody).toHaveText(text);
  }

  async expectMultilineContent(): Promise<void> {
    await expect(this.editorPage.editorBody).toContainText('First line');
    await expect(this.editorPage.editorBody).toContainText('Second line');
    await expect(this.editorPage.editorBody).toContainText('Third line');
  }

  async expectSelectedTextToBeBold(): Promise<void> {
    await expect(this.editorPage.editorBody.locator('strong, b')).toBeVisible();
  }

  async expectTextToRemainUnchanged(): Promise<void> {
    await expect(this.editorPage.editorBody).toHaveText(
      requireScenarioValue<string>(this.page, 'editorTextBeforeFormatting'),
    );
  }

  async expectOutsideTypingNotToChangeContent(): Promise<void> {
    await expect(this.editorPage.editorBody).toHaveText(
      requireScenarioValue<string>(this.page, 'editorTextBeforeOutsideTyping'),
    );
  }

  async expectToolbarNotToContain(name: string): Promise<void> {
    await expect(this.editorPage.toolbarButtons.filter({ hasText: name })).toHaveCount(0);
  }

  async expectEditorToBeUsable(): Promise<void> {
    await expect(this.editorPage.editorBody).toBeEditable();
  }

  async expectExpectedContent(): Promise<void> {
    await expect(this.editorPage.editorBody).toHaveText(requireScenarioValue<string>(this.page, 'editorExpectedText'));
  }

  async expectInitialContent(): Promise<void> {
    await expect(this.editorPage.editorBody).toContainText('Your content goes here.');
  }
}
