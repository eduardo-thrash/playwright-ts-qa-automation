import { ClickActions } from '@actions/common/click-actions';
import { InputActions } from '@actions/common/input-actions';
import { NavigationActions } from '@actions/common/navigation-actions';
import { setScenarioValue } from '@helpers/herokuapp/scenario-state';
import { EditorPage } from '@pages/herokuapp/editor-page';
import { type Page } from '@playwright/test';
export class EditorActions {
  private readonly click = new ClickActions();
  private readonly input: InputActions;
  private readonly navigation: NavigationActions;
  private readonly editorPage: EditorPage;
  constructor(private readonly page: Page) {
    this.input = new InputActions(page);
    this.navigation = new NavigationActions(page);
    this.editorPage = new EditorPage(page);
  }

  async openEditor(path = '/tinymce'): Promise<void> {
    await this.navigation.navigateTo(path);
    await this.editorPage.editorBody.waitFor({ state: 'visible' });
  }

  async replaceContent(text: string): Promise<void> {
    await this.input.fillIn(this.editorPage.editorBody, text);
    setScenarioValue(this.page, 'editorExpectedText', text);
  }

  async enterMultilineContent(): Promise<void> {
    await this.replaceContent('First line\nSecond line\nThird line');
  }

  async selectEditorText(): Promise<void> {
    setScenarioValue(this.page, 'editorTextBeforeFormatting', await this.editorPage.editorBody.innerText());
    await this.input.selectText(this.editorPage.editorBody);
  }

  async applyBold(): Promise<void> {
    await this.click.clickOn(this.editorPage.boldButton);
  }

  async typeOutsideEditor(): Promise<void> {
    setScenarioValue(this.page, 'editorTextBeforeOutsideTyping', await this.editorPage.editorBody.innerText());
    await this.input.focusOn(this.page.getByRole('heading').first());
    await this.input.typeText('OutsideText');
  }

  async enterUnicode(): Promise<void> {
    await this.replaceContent('áéíóú 中文 🚀');
  }

  async enterLongBlock(): Promise<void> {
    await this.replaceContent('Long editor content '.repeat(500));
  }

  async recordInitialContent(): Promise<void> {
    setScenarioValue(this.page, 'editorInitialText', await this.editorPage.editorBody.innerText());
  }
}
