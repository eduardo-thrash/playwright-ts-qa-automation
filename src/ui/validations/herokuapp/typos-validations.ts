import { requireScenarioValue } from '@helpers/herokuapp/scenario-state';
import { TyposPage } from '@pages/herokuapp/typos-page';
import { expect, type Page } from '@playwright/test';
const ACCEPTED = [
  "Sometimes you'll see a typo, other times you won't.",
  "Sometimes you'll see a typo, other times you won,t.",
];
export class TyposValidations {
  private readonly optionPage: TyposPage;
  constructor(private readonly page: Page) {
    this.optionPage = new TyposPage(page);
  }

  async expectSentenceToBeDocumented(): Promise<void> {
    expect(ACCEPTED).toContain((await this.optionPage.dynamicSentence.textContent())?.trim());
  }

  async expectExplanatoryTextToBeVisible(): Promise<void> {
    await expect(this.optionPage.explanatoryText).toBeVisible();
  }

  async expectSentenceToContain(text: string): Promise<void> {
    await expect(this.optionPage.dynamicSentence).toContainText(text);
  }

  async expectSentenceNotToContain(text: string): Promise<void> {
    await expect(this.optionPage.dynamicSentence).not.toContainText(text);
  }

  async expectSentenceNotToBeEmpty(): Promise<void> {
    await expect(this.optionPage.dynamicSentence).not.toBeEmpty();
  }

  async expectEveryRecordedSentenceToBeDocumented(): Promise<void> {
    for (const sentence of requireScenarioValue<string[]>(this.page, 'typoSentences'))
      expect(ACCEPTED).toContain(sentence);
  }

  async expectVariablePunctuationToBeDocumented(): Promise<void> {
    await expect(this.optionPage.dynamicSentence).toHaveText(/you won(?:'|,)t\./);
  }

  async expectStableSentenceText(): Promise<void> {
    await expect(this.optionPage.dynamicSentence).toHaveText(
      /^Sometimes you'll see a typo, other times you won(?:'|,)t\.$/,
    );
  }
}
