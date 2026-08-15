import { FramesActions } from '@actions/herokuapp/frames-actions';
import { test } from '@fixtures/test';
import { FramesValidations } from '@validations/herokuapp/frames-validations';
import { NestedFramesValidations } from '@validations/herokuapp/nested-frames-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the user was on the iFrame example', async ({ page }) => new FramesActions(page).openIframe());
Given('the iFrame example was visible', async ({ page }) => new FramesActions(page).openIframe());
When('the user replaces the editor content with {string}', async ({ page }, text: string) =>
  new FramesActions(page).replaceEditorContent(text),
);
When('the user opens Nested Frames', async ({ page }) => new FramesActions(page).openNestedFrames());
When('the user opens the iFrame example', async ({ page }) => new FramesActions(page).openIframe());
When('the parent document content is inspected', async ({ page }) => new FramesActions(page).inspectParentContent());
When('the available frame examples are displayed', async ({ page }) => new FramesActions(page).viewExamples());
When('the user enters multiline editor content', async ({ page }) => new FramesActions(page).enterMultilineContent());
When('the user opens Nested Frames and returns to open iFrame', async ({ page }) =>
  new FramesActions(page).switchBetweenExamples(),
);
Then('the iFrame editor contains {string}', async ({ page }, text: string) =>
  new FramesValidations(page).expectContentToBe(text),
);
Then('the top and bottom frame groups are present', async ({ page }) =>
  new NestedFramesValidations(page).expectTopAndBottomGroupsToBeAttached(),
);
Then('all documented frame contents are visible', async ({ page }) =>
  new NestedFramesValidations(page).expectPageToBeDisplayed(),
);
Then('the editor displays {string}', async ({ page }, text: string) =>
  new FramesValidations(page).expectContentToBe(text),
);
Then('the editor is available', async ({ page }) => new FramesValidations(page).expectEditorToBeUsable());
Then('the editor text is not part of the parent document body', async ({ page }) =>
  new FramesValidations(page).expectEditorTextOutsideParentBody(),
);
Then('the editor remains inside its frame', async ({ page }) =>
  new FramesValidations(page).expectEditorToRemainInsideFrame(),
);
Then('only Nested Frames and iFrame are actionable', async ({ page }) =>
  new FramesValidations(page).expectOnlyDocumentedExamples(),
);
Then('no unsupported frame example is available', async ({ page }) =>
  new FramesValidations(page).expectOnlyDocumentedExamples(),
);
Then('every entered line is present in the iFrame editor', async ({ page }) =>
  new FramesValidations(page).expectMultilineContent(),
);
Then('the iFrame editor is available', async ({ page }) => new FramesValidations(page).expectEditorToBeUsable());
Then('its initial content is visible', async ({ page }) => new FramesValidations(page).expectInitialContent());
