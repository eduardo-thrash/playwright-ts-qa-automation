import { InfiniteScrollActions } from '@actions/herokuapp/infinite-scroll-actions';
import { test } from '@fixtures/test';
import { InfiniteScrollValidations } from '@validations/herokuapp/infinite-scroll-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('the initial infinite-scroll content was visible', async ({ page }) =>
  new InfiniteScrollActions(page).openPage(),
);
Given('additional infinite-scroll content was appended', async ({ page }) => {
  const actions = new InfiniteScrollActions(page);
  await actions.openPage();
  await actions.scrollToBottom();
});
Given('the viewport height was changed', async ({ page }) => new InfiniteScrollActions(page).resizeViewport());
When('the user scrolls to the bottom multiple times', async ({ page }) =>
  new InfiniteScrollActions(page).scrollToBottom(3),
);
When('the user remains at the top of the page', async ({ page }) => new InfiniteScrollActions(page).remainAtTop());
When('the user scrolls only a small distance', async ({ page }) =>
  new InfiniteScrollActions(page).scrollSmallDistance(),
);
When('the user rapidly scrolls to the bottom repeatedly', async ({ page }) =>
  new InfiniteScrollActions(page).scrollToBottom(3),
);
Then('additional content is appended', async ({ page }) =>
  new InfiniteScrollValidations(page).expectAdditionalContent(),
);
Then('the original content remains visible', async ({ page }) =>
  new InfiniteScrollValidations(page).expectContentToRemainVisible(),
);
Then('multiple additional content blocks are appended', async ({ page }) =>
  new InfiniteScrollValidations(page).expectMultipleAdditionalBlocks(),
);
Then('the appended content remains in the document', async ({ page }) =>
  new InfiniteScrollValidations(page).expectAdditionalContent(),
);
Then('the initial content is visible', async ({ page }) =>
  new InfiniteScrollValidations(page).expectContentToRemainVisible(),
);
Then('no additional content is appended', async ({ page }) =>
  new InfiniteScrollValidations(page).expectNoAdditionalContent(),
);
Then('content blocks are appended without duplication errors', async ({ page }) =>
  new InfiniteScrollValidations(page).expectAdditionalContent(),
);
Then('the content remains readable', async ({ page }) =>
  new InfiniteScrollValidations(page).expectContentToRemainVisible(),
);
