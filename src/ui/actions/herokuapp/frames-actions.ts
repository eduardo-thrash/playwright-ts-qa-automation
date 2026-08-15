import { ClickActions } from '@actions/common/click-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { EditorActions } from '@actions/herokuapp/editor-actions';
import { HomeActions } from '@actions/herokuapp/home-actions';
import { FramesPage } from '@pages/herokuapp/frames-page';
import { type Page } from '@playwright/test';
export class FramesActions {
  private readonly click = new ClickActions();
  private readonly navigation: NavigationActions;
  private readonly editor: EditorActions;
  private readonly home: HomeActions;
  private readonly optionPage: FramesPage;
  constructor(private readonly page: Page) {
    this.navigation = new NavigationActions(page);
    this.editor = new EditorActions(page);
    this.home = new HomeActions(page);
    this.optionPage = new FramesPage(page);
  }

  async openPage(): Promise<void> {
    await this.home.openOptionPage('Frames');
  }

  async openIframe(): Promise<void> {
    await this.editor.openEditor('/iframe');
  }

  async openNestedFrames(): Promise<void> {
    await this.click.clickOn(this.optionPage.nestedFramesLink);
  }

  async replaceEditorContent(text: string): Promise<void> {
    await this.editor.replaceContent(text);
  }

  async enterMultilineContent(): Promise<void> {
    await this.editor.enterMultilineContent();
  }

  async inspectParentContent(): Promise<void> {
    await this.page.locator('body').waitFor({ state: 'visible' });
  }

  async viewExamples(): Promise<void> {
    await this.optionPage.exampleLinks.first().waitFor({ state: 'visible' });
  }

  async switchBetweenExamples(): Promise<void> {
    await this.openNestedFrames();
    await this.navigation.navigateBack();
    await this.click.clickOn(this.optionPage.iframeLink);
  }
}
