import { TyposActions } from '@actions/herokuapp/typos-actions';
import { test } from '@fixtures/test';
import { TyposValidations } from '@validations/herokuapp/typos-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the Typos page was reloaded until the correct variant appeared', async ({ page }) =>
  new TyposActions(page).reloadUntilVariant("won't"),
);
Given('the Typos page was reloaded until the typo variant appeared', async ({ page }) =>
  new TyposActions(page).reloadUntilVariant('won,t'),
);
Given('the dynamic sentence was displayed', async ({ page }) => {
  const actions = new TyposActions(page);
  await actions.openPage();
  await actions.waitForSentence();
});
Given('a documented typo variant was displayed', async ({ page }) => {
  const actions = new TyposActions(page);
  await actions.openPage();
  await actions.waitForSentence();
});
When('the dynamic sentence loads', async ({ page }) => new TyposActions(page).waitForSentence());
When('the dynamic sentence is displayed', async ({ page }) => new TyposActions(page).waitForSentence());
When('its content is evaluated', async ({ page }) => new TyposActions(page).waitForSentence());
When('the user reloads the Typos page repeatedly', async ({ page }) => new TyposActions(page).reloadRepeatedly());
When('the sentence punctuation is inspected', async ({ page }) => new TyposActions(page).waitForSentence());
Then('the sentence matches one documented typo variant', async ({ page }) =>
  new TyposValidations(page).expectSentenceToBeDocumented(),
);
Then('the explanatory text is visible', async ({ page }) =>
  new TyposValidations(page).expectExplanatoryTextToBeVisible(),
);
Then('the explanatory text remains visible', async ({ page }) =>
  new TyposValidations(page).expectExplanatoryTextToBeVisible(),
);
Then('the sentence contains {string}', async ({ page }, text: string) =>
  new TyposValidations(page).expectSentenceToContain(text),
);
Then('no typo appears in that word', async ({ page }) =>
  new TyposValidations(page).expectSentenceNotToContain('won,t'),
);
Then('the sentence belongs to the documented variant set', async ({ page }) =>
  new TyposValidations(page).expectSentenceToBeDocumented(),
);
Then('no undocumented variant is accepted', async ({ page }) =>
  new TyposValidations(page).expectSentenceToBeDocumented(),
);
Then('the sentence is not empty', async ({ page }) => new TyposValidations(page).expectSentenceNotToBeEmpty());
Then('every sentence belongs to the documented variant set', async ({ page }) =>
  new TyposValidations(page).expectEveryRecordedSentenceToBeDocumented(),
);
Then('every page remains usable', async ({ page }) =>
  new TyposValidations(page).expectEveryRecordedSentenceToBeDocumented(),
);
Then('the sentence contains either an apostrophe or a comma at the variable word', async ({ page }) =>
  new TyposValidations(page).expectVariablePunctuationToBeDocumented(),
);
Then('the rest of the sentence remains unchanged', async ({ page }) =>
  new TyposValidations(page).expectStableSentenceText(),
);
