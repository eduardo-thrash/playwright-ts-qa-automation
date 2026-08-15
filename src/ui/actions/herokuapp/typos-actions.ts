import { NavigationActions } from '@actions/common/navigation-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { TyposPage } from '@pages/herokuapp/typos-page';
import { type Page } from '@playwright/test';
export class TyposActions {
  private readonly homeActions: HomeActions;
  private readonly navigationActions: NavigationActions;
  private readonly optionPage: TyposPage;
  constructor(private readonly page: Page) {
    this.homeActions = new HomeActions(page);
    this.navigationActions = new NavigationActions(page);
    this.optionPage = new TyposPage(page);
  }

  async openPage(): Promise<void> {
    await this.homeActions.openOptionPage('Typos');
  }

  async waitForSentence(): Promise<void> {
    await this.optionPage.dynamicSentence.waitFor({ state: 'visible' });
  }

  async reloadUntilVariant(fragment: "won't" | 'won,t'): Promise<void> {
    await this.openPage();
    for (let attempt = 0; attempt < 20; attempt += 1) {
      if ((await this.optionPage.dynamicSentence.textContent())?.includes(fragment)) return;
      await this.navigationActions.reloadPage();
    }
    throw new Error(`Typos variant was not produced: ${fragment}`);
  }

  async reloadRepeatedly(): Promise<void> {
    const sentences: string[] = [];
    for (let attempt = 0; attempt < 5; attempt += 1) {
      await this.navigationActions.reloadPage();
      sentences.push((await this.optionPage.dynamicSentence.textContent())?.trim() ?? '');
    }
    setScenarioValue(this.page, 'typoSentences', sentences);
  }
}
