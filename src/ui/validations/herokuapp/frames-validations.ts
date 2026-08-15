import { EditorPage } from '@pages/herokuapp/editor-page';
import { FramesPage } from '@pages/herokuapp/frames-page';
import { expect, type Page } from '@playwright/test';
import { EditorValidations } from '@validations/common/editor-validations';
export class FramesValidations extends EditorValidations {
  private readonly hostPage: Page;
  private readonly framesPage: FramesPage;
  private readonly frameEditorPage: EditorPage;
  constructor(page: Page) {
    super(page);
    this.hostPage = page;
    this.framesPage = new FramesPage(page);
    this.frameEditorPage = new EditorPage(page);
  }

  async expectOnlyDocumentedExamples(): Promise<void> {
    await expect(this.framesPage.exampleLinks).toHaveCount(2);
  }

  async expectEditorTextOutsideParentBody(): Promise<void> {
    await expect(this.hostPage.locator('body')).not.toContainText('Your content goes here.');
  }

  async expectEditorToRemainInsideFrame(): Promise<void> {
    await expect(this.frameEditorPage.editorBody).toBeVisible();
  }
}
