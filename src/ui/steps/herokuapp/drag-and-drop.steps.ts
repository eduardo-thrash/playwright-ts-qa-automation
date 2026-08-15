import { DragAndDropActions } from '@actions/herokuapp/drag-and-drop-actions';
import { test } from '@fixtures/test';
import { DragAndDropValidations } from '@validations/herokuapp/drag-and-drop-validations';
import { createBdd } from 'playwright-bdd';
const { Given, When, Then } = createBdd(test);
Given('column A was before column B', async ({ page }) => new DragAndDropActions(page).openPage());
Given('column B was before column A', async ({ page }) => {
  const actions = new DragAndDropActions(page);
  await actions.openPage();
  await actions.dragColumn('A', 'B');
});
When('the user drags column A onto column B', async ({ page }) => new DragAndDropActions(page).dragColumn('A', 'B'));
When('the user drags column B onto column A', async ({ page }) => new DragAndDropActions(page).dragColumn('B', 'A'));
When('the user drags column A outside the drop targets', async ({ page }) =>
  new DragAndDropActions(page).dragOutside('A'),
);
When('the user drags column A onto itself', async ({ page }) => new DragAndDropActions(page).dragColumn('A', 'A'));
When('the user swaps the columns twice', async ({ page }) => new DragAndDropActions(page).swapTwice());
When('the user drags column A to the boundary of column B', async ({ page }) =>
  new DragAndDropActions(page).dragColumn('A', 'B'),
);
Then('column B is before column A', async ({ page }) => new DragAndDropValidations(page).expectOrder('B', 'A'));
Then('column A is before column B', async ({ page }) => new DragAndDropValidations(page).expectOrder('A', 'B'));
Then('column A remains before column B', async ({ page }) => new DragAndDropValidations(page).expectOrder('A', 'B'));
