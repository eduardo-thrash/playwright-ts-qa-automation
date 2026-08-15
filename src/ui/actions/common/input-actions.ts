import { type Locator, type Page } from '@playwright/test';

export type UploadFilePayload = {
  name: string;
  mimeType: string;
  buffer: Buffer;
};

export class InputActions {
  constructor(private readonly page: Page) {}

  async fillIn(locator: Locator, value: string): Promise<void> {
    await locator.fill(value);
  }

  async check(locator: Locator): Promise<void> {
    await locator.check();
  }

  async uncheck(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  async selectOption(locator: Locator, value: string): Promise<void> {
    await locator.selectOption(value);
  }

  async pressKey(key: string): Promise<void> {
    await this.page.keyboard.press(key);
  }

  async typeText(text: string): Promise<void> {
    await this.page.keyboard.type(text);
  }

  async focusOn(locator: Locator): Promise<void> {
    await locator.focus();
  }

  async selectText(locator: Locator): Promise<void> {
    await locator.selectText();
  }

  async uploadFile(locator: Locator, file: string | UploadFilePayload): Promise<void> {
    await locator.setInputFiles(file);
  }

  async clearSelectedFiles(locator: Locator): Promise<void> {
    await locator.setInputFiles([]);
  }
}
