import { EditorActions } from '@actions/herokuapp/editor-actions';
import { test } from '@fixtures/test';
import { WysiwygEditorValidations } from '@validations/herokuapp/wysiwyg-editor-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the WYSIWYG editor was ready', async ({ page }) => new EditorActions(page).openEditor());
Given('text was selected in the WYSIWYG editor', async ({ page }) => {
  const actions = new EditorActions(page);
  await actions.openEditor();
  await actions.selectEditorText();
});
Given('the WYSIWYG editor contained its initial text', async ({ page }) => {
  const actions = new EditorActions(page);
  await actions.openEditor();
  await actions.recordInitialContent();
});
Given('the WYSIWYG editor toolbar was visible', async ({ page }) => new EditorActions(page).openEditor());
When('the user replaces the content with {string}', async ({ page }, text: string) =>
  new EditorActions(page).replaceContent(text),
);
When('the user enters multiple lines', async ({ page }) => new EditorActions(page).enterMultilineContent());
When('the user applies bold formatting', async ({ page }) => new EditorActions(page).applyBold());
When('the user types outside the editor frame', async ({ page }) => new EditorActions(page).typeOutsideEditor());
When('the user looks for an unsupported toolbar action', async ({ page }) =>
  new EditorActions(page).recordInitialContent(),
);
When('the user enters Unicode text', async ({ page }) => new EditorActions(page).enterUnicode());
When('the user enters a long content block', async ({ page }) => new EditorActions(page).enterLongBlock());
Then('the editor contains {string}', async ({ page }, text: string) =>
  new WysiwygEditorValidations(page).expectContentToBe(text),
);
Then('every entered line is present in the editor', async ({ page }) =>
  new WysiwygEditorValidations(page).expectMultilineContent(),
);
Then('the selected text is bold', async ({ page }) => new WysiwygEditorValidations(page).expectSelectedTextToBeBold());
Then('the text content remains unchanged', async ({ page }) =>
  new WysiwygEditorValidations(page).expectTextToRemainUnchanged(),
);
Then('the editor content remains unchanged', async ({ page }) =>
  new WysiwygEditorValidations(page).expectOutsideTypingNotToChangeContent(),
);
Then('no unsupported toolbar action is available', async ({ page }) =>
  new WysiwygEditorValidations(page).expectToolbarNotToContain('Unsupported'),
);
Then('the editor remains usable', async ({ page }) => new WysiwygEditorValidations(page).expectEditorToBeUsable());
Then('the complete Unicode text is present in the editor', async ({ page }) =>
  new WysiwygEditorValidations(page).expectExpectedContent(),
);
Then('the complete content is retained', async ({ page }) =>
  new WysiwygEditorValidations(page).expectExpectedContent(),
);
Then('the editor remains responsive', async ({ page }) => new WysiwygEditorValidations(page).expectEditorToBeUsable());
