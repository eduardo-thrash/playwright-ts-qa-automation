import { type Page } from '@playwright/test';
export class EditorPage {
  constructor(readonly page: Page) {}

  get editorFrame() {
    return this.page.frameLocator('#mce_0_ifr');
  }

  get editorBody() {
    return this.editorFrame.locator('#tinymce');
  }

  get boldButton() {
    return this.page.locator('button[title^="Bold"]');
  }

  get toolbarButtons() {
    return this.page.locator('.tox-toolbar button');
  }
}
